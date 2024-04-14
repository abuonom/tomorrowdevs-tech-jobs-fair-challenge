<?php

    namespace App\Http\Controllers;

    use App\Contact;
    use App\Events\testWebsocket;
    use App\Http\Requests\StoreContactRequest;
    use App\User;
    use Illuminate\Http\JsonResponse;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Auth;
    use Illuminate\Support\Facades\Validator;
    use Illuminate\Validation\ValidationException;

    class ContactController extends Controller
    {
        /**
         * Get the validation rules that apply to the request.
         *
         * @param Request $request
         * @return JsonResponse
         */
        public function index(Request $request): JsonResponse
        {
            $query = Contact::query();

            // Apply sorting
            if (isset($request->sort)) {
                $query->sort($request->input('sort'), $request->input('direction', 'asc'));
            }

            // Apply searching
            if (isset($request->search)) {
                $query->search($request->input('search'));
            }

            // Apply filtering by contact type
            if (isset($request->contact_type)) {
                if ($request->input('contact_type') == 4 && isset($request->user_id)) {
                    $query->createdByUser($request->input('user_id'));
                } else {
                    $query->ofType($request->input('contact_type'));
                }
            }

            // Apply filtering based on department ID
            if (isset($request->department_ids)) {
                $query->ofDepartment($request->input('department_ids'));
            }

            $contacts = $query->paginate(10);

            return response()->json(["contacts" => $contacts], 200);
        }

        /**
         * Get the validation rules that apply to the request.
         *
         * @param Request $request
         * @return JsonResponse
         * @throws ValidationException
         */
        public
        function store(
            Request $request
        ): JsonResponse {
            // Validate the request
            $rules = [
                'user_id' => 'required',
                'profile_picture' => 'nullable|string',
                'name' => 'required|string',
                'surname' => 'required|string',
                'email' => 'required|email|unique:contacts,email',
                'number' => 'required|string|unique:contacts,number|regex:/^\d{10}$/',
                'social_media_url' => 'nullable',
                'date_of_birth' => 'nullable|date',
                'type_id' => 'nullable|string',
                'note' => 'nullable|string',
                'department_id' => 'nullable|string'
            ];
            // Validate the request
            $validator = Validator::make($request->all(), $rules);
            // Check if validation fails
//            if ($validator->fails()) {
//                return response()->json(['errors' => $validator->errors()], 422);
//            }
            $validatedData = $validator->validated();
            // Create new contact and associate it with the authenticated user
            $user = User::findOrFail($validatedData['user_id']);
            $contact = $user->contacts()->create($validatedData);

            // Return the created contact
            return response()->json($contact, 201);
        }

        /**
         * @param Request $request
         * @param int $id
         * @return JsonResponse
         * @throws ValidationException
         */
        public
        function update(
            Request $request,
            int $id
        ): JsonResponse {
            // Define validation rules
            $validator = Validator::make($request->all(), [
                'name' => 'required|string',
                'surname' => 'required|string',
                'email' => 'required|email|unique:contacts,email,' . $id,
                'number' => 'required|string|regex:/^\d{10}$/|unique:contacts,number,' . $id,
                'profile_picture' => 'nullable|string',
                'social_media_url' => 'nullable',
                'date_of_birth' => 'nullable|date',
                'type_id' => 'nullable|string',
                'note' => 'nullable|string',
                'department_id' => 'nullable|string'
            ]);

            // Check if validation fails
//            if ($validator->fails()) {
//                return response()->json(['errors' => $validator->errors()], 422);
//            }

            // Get validated data
            $validatedData = $validator->validated();

            // Update the contact
            $contact = Contact::findOrFail($id);
            $contact->update($validatedData);

            return response()->json($contact, 200);
        }

        /**
         * @param int $id
         * @return JsonResponse
         */
        public
        function destroy(
            int $id
        ): JsonResponse {
            // Find the contact by ID
            $contact = Contact::findOrFail($id);

            // Delete the contact
            $contact->delete();

            // Return a success response
            return response()->json(['message' => 'Contact deleted successfully'], 200);
        }
    }
