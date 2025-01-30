<?php

namespace App\Livewire;

use Livewire\Component;
use Jantinnerezo\LivewireAlert\LivewireAlert;
use Livewire\WithPagination;
use App\Models\Contestants;
use App\Models\Category;
use App\Models\Nominees;

class Nominee extends Component
{
    use WithPagination;
    use LivewireAlert;

    protected $paginationTheme = 'bootstrap';

    public $cat_id, $const_id, $category, $contestant, $nominee_id;

    public $add = false, $edit = false;

    public function render()
    {
        $this->category = Category::where('user_id', auth()->user()->id)->get();
        $this->contestant = Contestants::where('user_id', auth()->user()->id)->get();

        $data = Nominees::where('nominees.user_id', auth()->user()->id)
        ->join('categories', 'categories.id', '=', 'nominees.cat_id')
        ->join('contestants', 'contestants.id', '=', 'nominees.contestant_id')
        ->select('nominees.id as id', 'categories.name as category_name', 'categories.vote_price', 'contestants.name as contestant_name','nominees.created_at')
        ->paginate(10);

        // dd($data);


        return view('livewire.nominee',['data' => $data]);
    }

    public function submit(){
        $this->validate([
            'cat_id' => 'required',
            'const_id' => 'required',
        ]);

        try {
            //*****check if the client don't exists */
            if(Nominees::where('cat_id', $this->cat_id)->where('contestant_id',$this->const_id)->where('user_id', auth()->user()->id)->exists()){
                $this->alert('error', "Nominee dey, cannot add", [
                    // 'position' => 'top',
                    'timer' => 9000,
                ]);
            }
            else{
                Nominees::create([
                    "cat_id" => $this->cat_id,
                    "contestant_id" => $this->const_id,
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

        $data = Nominees::find($id);

        // dd($data);
        $this->cat_id = $data->cat_id;
        $this->const_id = $data->contestant_id;
        $this->nominee_id = $id;

        $this->alert('info', "Edit Mood !!!!", [
            'position' => 'top',
            'timer' => 9000,
        ]);

    }

    public function update(){
        $this->validate([
            'cat_id' => 'required',
            'const_id' => 'required',
        ]);

        try {
            //*****check if the client don't exists */
            // if($this->name !== $this->name_dey){
                if (Nominees::where('cat_id', $this->cat_id)->where('contestant_id',$this->const_id)->where('user_id', auth()->user()->id)->exists()) {
                    $this->alert('error', "Nominee name, cannot add", [
                        // 'position' => 'top',
                        'timer' => 9000,
                    ]);
                }
                else{

                    Nominees::find($this->nominee_id)->update([
                        "cat_id" => $this->cat_id,
                        "contestant_id" => $this->const_id,
                    ]);

                    $this->cancel();
                    $this->alert('success','Updated',[
                        'timer' => 9000,
                    ]);
                }
            // }
            // else{

            //     Nominees::find($this->const_id)->update([
            //         "name" => $this->name,
            //     ]);

            //     $this->cancel();
            //     $this->alert('success','Updated',[
            //         'timer' => 9000,
            //     ]);
            // }
        } catch (\Throwable $th) {
            $this->alert('error', $th->getMessage(), [
                'position' => 'top',
                'timer' => 9000,
            ]);
        }
    }

    public function suspend($id){
        Nominees::find($id)->delete();

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
