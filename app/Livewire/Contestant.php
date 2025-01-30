<?php

namespace App\Livewire;

use Livewire\Component;
use Jantinnerezo\LivewireAlert\LivewireAlert;
use Livewire\WithPagination;
use App\Models\Contestants;

class Contestant extends Component
{
    use WithPagination;
    use LivewireAlert;

    protected $paginationTheme = 'bootstrap';

    public $name, $name_dey, $const_id;

    public $add = false, $edit = false;
    public function render()
    {
        return view('livewire.contestant', ['data' => Contestants::where('user_id', auth()->user()->id)->paginate(10)]);
    }

    public function submit(){
        $this->validate([
            'name' => 'required',
        ]);

        try {
            //*****check if the client don't exists */
            if(Contestants::where('name', $this->name)->where('user_id', auth()->user()->id)->exists()){
                $this->alert('error', "Contestant dey, cannot add", [
                    // 'position' => 'top',
                    'timer' => 9000,
                ]);
            }
            else{
                Contestants::create([
                    "name" => $this->name,
                    "user_id" => auth()->user()->id,
                ]);

                $this->cancel();
                $this->alert('success','Added',[
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

        $data = Contestants::find($id);
        $this->name = $data->name;
        $this->name_dey = $data->name;
        $this->const_id = $id;

        $this->alert('info', "Edit Mood !!!!", [
            'position' => 'top',
            'timer' => 9000,
        ]);

    }

    public function update(){
        $this->validate([
            'name' => 'required',
        ]);

        try {
            //*****check if the client don't exists */
            if($this->name !== $this->name_dey){
                if (Contestants::where('name', $this->name)->where('user_id', auth()->user()->id)->exists()) {
                    $this->alert('error', "Contestant name, cannot add", [
                        // 'position' => 'top',
                        'timer' => 9000,
                    ]);
                }
                else{

                    Contestants::find($this->const_id)->update([
                        "name" => $this->name,
                    ]);

                    $this->cancel();
                    $this->alert('success','Updated',[
                        'timer' => 9000,
                    ]);
                }
            }
            else{

                Contestants::find($this->const_id)->update([
                    "name" => $this->name,
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
        Contestants::find($id)->delete();

        $this->alert('success', 'Deleted', [
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
    }
}
