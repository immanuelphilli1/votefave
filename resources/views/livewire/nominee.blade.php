<div>
    @if ($add === false)
    <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <div class="card-title">
                    <button class="btn btn-info w-100" wire:click.prevent="start()">Add New Data</button>
              </div>
            </div>
          </div>
        </div>
    </div>
    @endif
    @if ($add || $edit)
        <div class="row">
            <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                <div class="card-title">Form</div>
                </div>
                <div class="card-body">
                <div class="row">
                    <div class="col-md-12 col-lg-6">
                        <div class="form-group">
                            <label for="name">Category</label>
                            <select class="form-control" wire:model='cat_id'>
                                <option>Select One</option>
                                @forelse ($category as $data)
                                    <option value="{{ $data->id }}">{{ $data->name }}</option>
                                @empty
                                    <option class="text-danger" value="">No Data</option>
                                @endforelse
                            </select>
                            @error('cat_id')
                            <span class="text-danger">{{ $message }}</span>
                        @enderror
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-6">
                        <div class="form-group">
                            <label for="name">Contestant</label>
                            <select class="form-control" wire:model='const_id'>
                                <option>Select One</option>
                                @forelse ($contestant as $data)
                                    <option value="{{ $data->id }}">{{ $data->name }}</option>
                                @empty
                                    <option class="text-danger" value="">No Data</option>
                                @endforelse
                            </select>
                            @error('const_id')
                            <span class="text-danger">{{ $message }}</span>
                        @enderror
                        </div>
                    </div>
                </div>
                </div>
                <div class="card-action">
                    @if ($edit)
                        <button class="btn btn-warning" wire:click.prevent="update">Update</button>
                        @else
                        <button class="btn btn-success" wire:click.prevent="submit">Submit</button>
                    @endif

                    <button class="btn btn-danger" wire:click.prevent="cancel">Cancel</button>
                </div>
            </div>
            </div>
        </div>
        @else
        <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header">
                  <div class="card-title">Data Table</div>
                </div>
                <div class="card-body">
                  <table class="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Category</th>
                        <th scope="col">Nominee</th>
                        <th scope="col">Vote Price</th>
                        <th scope="col">Created</th>
                        <th scope="col">Action(s)</th>
                      </tr>
                    </thead>
                    <tbody>
                        @foreach ($data as $view)
                            <tr>
                                <td>{{ $view->category_name }}</td>
                                <td>{{ $view->contestant_name }}</td>
                                <td>GHs {{ $view->vote_price }}</td>
                                <td>{{ $view->created_at }}</td>
                                <td>
                                    <button class="btn btn-warning" wire:click.prevent="edit_({{ $view->id }})">Edit</button>
                                    <button class="btn btn-danger" wire:click.prevent="suspend({{ $view->id }})"> Delete</button>
                                </td>
                            </tr>
                        @endforeach

                    </tbody>
                  </table>
                  {{ $data->links() }}
                </div>
              </div>
            </div>
        </div>
    @endif

</div>
