<?php

namespace App\Livewire;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Livewire\Component;
use Jantinnerezo\LivewireAlert\LivewireAlert;
use Livewire\WithPagination;

class Clients extends Component
{
    use WithPagination;
    use LivewireAlert;

    protected $paginationTheme = 'bootstrap';

    public $name, $contact, $email, $subscription, $company_name, $password = 12345678;

    public $add = false, $edit = false, $user_id, $code_dey, $sub_dey, $ex_dey, $email_dey;
    public function render()
    {

        return view('livewire.clients',['data' => User::paginate(10)]);
    }


    public function submit(){
        $this->validate([
            'name' => 'required',
            'email' => 'required|email',
            'contact' => 'required',
            'subscription' => 'required',
            'company_name' => 'required'
        ]);

        try {
            //*****check if the client don't exists */
            if(User::where('email', $this->email)->exists()){
                $this->alert('error', "He dey, cannot add", [
                    // 'position' => 'top',
                    'timer' => 9000,
                ]);
            }
            else{

                if ($this->subscription === 'free') {
                    $expiry =  Carbon::today()->addWeek();
                }
                elseif($this->subscription === 'month') {
                    $expiry =  Carbon::today()->addMonth();
                }
                elseif($this->subscription === 'quarterly') {
                    $expiry = Carbon::today()->addQuarter();
                }
                else{
                    $expiry = Carbon::today()->addYear();
                }


                User::create([
                    "name" => $this->name,
                    "email" => $this->email,
                    "contact" => $this->contact,
                    "code" => "VF-".rand(0000,9999),
                    "expiry" => $expiry,
                    "sub_type" => $this->subscription,
                    "company_name" => $this->company_name,
                    "password" => Hash::make($this->password),
                ]);
                $this->cancel();
                $this->alert('success','Edit Mood',[
                    'timer' => 9000,
                ]);
            }
        } catch (\Throwable $th) {
            $this->alert('error', $th->getMessage(), [
                'position' => 'top',
                'timer' => 9000,
            ]);
        }
    }

    public function edit_($id){
        $this->edit = true;

        $user = User::find($id);
        $this->name = $user->name;
        $this->email = $user->email;
        $this->email_dey = $user->email;
        $this->contact = $user->contact;
        $this->subscription = $user->sub_type;
        $this->company_name = $user->company_name;
        $this->user_id = $id;
        $this->sub_dey = $user->sub_type;
        $this->code_dey = $user->code;
        $this->ex_dey = $user->expiry;

        $this->alert('info', "Edit Mood !!!!", [
            'position' => 'top',
            'timer' => 9000,
        ]);

    }

    public function update (){
        $this->validate([
            'name' => 'required',
            'email' => 'required|email',
            'contact' => 'required',
            'subscription' => 'required',
            'company_name' => 'required'
        ]);

        try {
            //*****check if the client don't exists */
            if($this->email !== $this->email_dey){
                if (User::where('email', $this->email)->exists()) {
                    $this->alert('error', "He dey, cannot add", [
                        // 'position' => 'top',
                        'timer' => 9000,
                    ]);
                }
                else{
                    if ($this->subscription === 'free') {
                        $expiry =  Carbon::today()->addWeek();
                    }
                    elseif($this->subscription === 'month') {
                        $expiry =  Carbon::today()->addMonth();
                    }
                    elseif($this->subscription === 'quarterly') {
                        $expiry = Carbon::today()->addQuarter();
                    }
                    else{
                        $expiry = Carbon::today()->addYear();
                    }


                    User::find($this->user_id)->update([
                        "name" => $this->name,
                        "email" => $this->email,
                        "contact" => $this->contact,
                        "code" => $this->subscription === $this->sub_dey ? $this->code_dey : "VF-".rand(0000,9999),
                        "expiry" =>$this->subscription === $this->sub_dey? $this->ex_dey : $expiry,
                        "sub_type" => $this->subscription,
                        "company_name" => $this->company_name,
                    ]);
                    $this->cancel();

                    $this->alert('success','Updated',[
                        'timer' => 9000,
                    ]);
                }
            }
            else{

                if ($this->subscription === 'free') {
                    $expiry =  Carbon::today()->addWeek();
                }
                elseif($this->subscription === 'month') {
                    $expiry =  Carbon::today()->addMonth();
                }
                elseif($this->subscription === 'quarterly') {
                    $expiry = Carbon::today()->addQuarter();
                }
                else{
                    $expiry = Carbon::today()->addYear();
                }


                User::find($this->user_id)->update([
                    "name" => $this->name,
                    "email" => $this->email,
                    "contact" => $this->contact,
                    "code" => $this->subscription === $this->sub_dey ? $this->code_dey : "VF-".rand(0000,9999),
                    "expiry" =>$this->subscription === $this->sub_dey? $this->ex_dey : $expiry,
                    "sub_type" => $this->subscription,
                    "company_name" => $this->company_name,
                ]);
                $this->cancel();

                $this->alert('success','Updated',[
                    'timer' => 9000,
                ]);
            }
        } catch (\Throwable $th) {
            $this->alert('error', $th->getMessage(), [
                'position' => 'top',
                'timer' => 9000,
            ]);
        }
    }

    public function suspend($id){
        $status = User::find($id)->status;
        User::find($id)->update([
            "status" => $status === 0 ? 1 : 0
        ]);

        $this->alert('success', $status === 0 ? 'Suspended' : 'Active', [
            'position' => 'top',
            'timer' => 9000,
        ]);
    }

    public function start(){
        $this->add = true;
    }

    public function cancel(){
        $this->add = false;
        $this->edit = false;
        $this->name = '';
        $this->email = '';
        $this->contact = '';
        $this->subscription = '';
        $this->company_name = '';
    }
}
