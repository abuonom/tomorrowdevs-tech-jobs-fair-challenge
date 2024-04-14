<?php

    namespace App\Http\Controllers;

    use App\Department;
    use Illuminate\Http\JsonResponse;
    use Illuminate\Http\Request;

    class DepartmentController extends Controller
    {
        /**
         * Display a listing of the resource.
         *
         * @return JsonResponse
         */
        public function index(): JsonResponse
        {
            return response()->json(['departments' => Department::all()], 200);
        }
    }
