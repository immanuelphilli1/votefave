<div>
    @if ($add === false)
    <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <div class="card-title">
                    <button class="btn btn-info w-100" wire:click.prevent="start()">Add New Client</button>
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
                          placeholder="Client Name"
                          wire:model='name'
                        />
                      </div>
                      @error('name')
                          <span class="text-danger">{{ $message }}</span>
                      @enderror
                </div>
                <div class="col-md-12 col-lg-6">
                  <div class="form-group">
                    <label for="email2">Email Address</label>
                    <input
                      type="email"
                      class="form-control"
                      id="email2"
                      placeholder="Enter Email"
                      wire:model='email'
                    />
                    <small id="emailHelp2" class="form-text text-muted"
                      >We'll never share your email with anyone
                      else.</small
                    >
                    @error('email')
                          <span class="text-danger">{{ $message }}</span>
                      @enderror
                  </div>
                </div>

                <div class="col-md-12 col-lg-6">
                    <div class="form-group">
                        <label for="contact">Contact</label>
                        <input
                          type="number"
                          class="form-control"
                          id="contact"
                          placeholder="Client's Contact"
                          wire:model='contact'
                        />
                        @error('contact')
                          <span class="text-danger">{{ $message }}</span>
                      @enderror
                      </div>
                </div>

                <div class="col-md-12 col-lg-6">
                    <div class="form-group">
                        <label for="company_name">Company Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="company_name"
                          placeholder="Client Company Name"
                          wire:model='company_name'
                        />
                        @error('company_name')
                          <span class="text-danger">{{ $message }}</span>
                      @enderror
                      </div>
                </div>
                <div class="col-md-12 col-lg-6">
                    <div class="form-group">
                        <label for="name">Subscription</label>
                        <select class="form-control" wire:model='subscription'>
                            <option>Select One</option>
                            <option value="Free">Free</option>
                            <option value="month">A Month</option>
                            <option value="quarterly">Quarterly</option>
                            <option value="annually">Annually</option>
                        </select>
                        @error('subscription')
                          <span class="text-danger">{{ $message }}</span>
                      @enderror
                      </div>
                </div>
                <div class="col-md-12 col-lg-6">
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                          type="password"
                          class="form-control"
                          id="password"
                          placeholder="Password"
                          readonly
                          wire:model='password'
                        />

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
                    <th scope="col">Client Details</th>
                    <th scope="col">Code</th>
                    <th scope="col">Sub-Type</th>
                    <th scope="col">Status</th>
                    <th scope="col">Created</th>
                    <th scope="col">Action(s)</th>
                  </tr>
                </thead>
                <tbody>
                    @foreach ($data as $view)
                        <tr>
                            <td>{{ $view->name }} <br> {{ $view->email }} <br> {{ $view->contact }}</td>
                            <td>{{ $view->code }} <br> {{ $view->expiry }}</td>
                            <td>{{ $view->sub_type }}</td>
                            <td class="{{ $view->status === 0 ? 'text-success' : 'text-danger' }}">{{ $view->status === 0 ? 'Active' : 'Suspended' }}</td>
                            <td>{{ $view->created_at }}</td>
                            <td>
                                <button class="btn btn-warning" wire:click.prevent="edit_({{ $view->id }})">Edit</button>
                                <button class="{{ $view->status === 0 ? 'btn btn-danger' : 'btn btn-success' }}" wire:click.prevent="suspend({{ $view->id }})"> {{ $view->status === 0 ? 'Suspend' : 'Active' }}</button>
                            </td>
                        </tr>
                    @endforeach

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
</div>
