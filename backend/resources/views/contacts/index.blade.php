@extends('contacts.layout')

@section('content')
    <div class="container">
        <div class="row" style="margin:20px;">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h2>Contacts</h2>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-5">
                                <a href="{{ url('/contact/create') }}" class="btn btn-success btn-sm" title="Add New contact">Add New</a>
                            </div>
                            <div class="col-md-5">
                                <form action="{{ url('/contacts') }}" method="GET" class="form-inline float-md-right">
                                    <div class="form-group">
                                        <input type="text" name="search" class="form-control" placeholder="Search...">
                                    </div>
                                    <button type="submit" class="btn btn-primary">Search</button>
                                </form>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                <tr>
                                    <th><a href="{{ url()->current() }}?sort=id&direction=asc">ID</a></th>
                                    <th><a href="{{ url()->current() }}?sort=name&direction=asc">Name</a></th>
                                    <th><a href="{{ url()->current() }}?sort=number&direction=asc">Mobile</a></th>
                                    <th><a href="{{ url()->current() }}?sort=date_of_birth&direction=asc">Date of Birth</a></th>
                                    <th><a href="{{ url()->current() }}?sort=social_media_url&direction=asc">Social Media</a></th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($contacts as $item)
                                    <tr>
                                        <td>{{ $loop->iteration }}</td>
                                        <td>{{ $item->name }}</td>
                                        <td>{{ $item->number }}</td>
                                        <td>{{ $item->date_of_birth }}</td>
                                        <td>{{ $item->social_media_url }}</td>
                                        <td>
                                            <a href="{{ url('/contact/' . $item->id) }}" title="View contact"><button class="btn btn-info btn-sm"><i class="fa fa-eye" aria-hidden="true"></i> View</button></a>
                                            <a href="{{ url('/contact/' . $item->id . '/edit') }}" title="Edit contact"><button class="btn btn-primary btn-sm"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</button></a>

                                            <form method="POST" action="{{ url('/contact' . '/' . $item->id) }}" accept-charset="UTF-8" style="display:inline">
                                                {{ method_field('DELETE') }}
                                                {{ csrf_field() }}
                                                <button type="submit" class="btn btn-danger btn-sm" title="Delete contact" onclick="return confirm('Confirm delete?')"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</button>
                                            </form>
                                        </td>
                                    </tr>
                                @endforeach
                                </tbody>
                            </table>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                {{ $contacts->links() }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
