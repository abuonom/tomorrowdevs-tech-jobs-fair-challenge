<?php

namespace App\Http\Controllers;

use App\ContactType;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ContactTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        return response()->json(["contactTypes" => ContactType::all()], 200);
    }

}
