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
                        <label for="name">Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="name"
                          placeholder="Category Name"
                          wire:model='category_name'
                        />
                      </div>
                      @error('category_name')
                          <span class="text-danger">{{ $message }}</span>
                      @enderror
                </div>
                <div class="col-md-12 col-lg-6">
                  <div class="form-group">
                    <label for="email2">Vote Price</label>
                    <input
                      type="number"
                      class="form-control"
                      id="email2"
                      placeholder="Enter"
                      wire:model='vote_price'
                    />
                    @error('vote_price')
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
    @endif

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
                    <th scope="col">Category Name</th>
                    <th scope="col">Vote Price</th>
                    <th scope="col">Created</th>
                    <th scope="col">Action(s)</th>
                  </tr>
                </thead>
                <tbody>
                    @foreach ($data as $view)
                        <tr>
                            <td>{{ $view->name }}</td>
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
</div>
