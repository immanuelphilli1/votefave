<?php

namespace App\Livewire;

use Livewire\Component;
use Jantinnerezo\LivewireAlert\LivewireAlert;
use Livewire\WithPagination;
use App\Models\Category As Cat;

class Category extends Component
{
    use WithPagination;
    use LivewireAlert;

    protected $paginationTheme = 'bootstrap';

    public $category_name, $vote_price, $category_name_dey, $cat_id;

    public $add = false, $edit = false;
    public function render()
    {
        return view('livewire.category', ['data' => Cat::where('user_id', auth()->user()->id)->paginate(10)]);
    }

    public function submit(){
        $this->validate([
            'category_name' => 'required',
            'vote_price' => 'required|numeric',
        ]);

        try {
            //*****check if the client don't exists */
            if(Cat::where('name', $this->category_name)->where('user_id', auth()->user()->id)->exists()){
                $this->alert('error', "Category dey, cannot add", [
                    // 'position' => 'top',
                    'timer' => 9000,
                ]);
            }
            else{

                Cat::create([
                    "name" => $this->category_name,
                    "user_id" => auth()->user()->id,
                    "vote_price" => $this->vote_price,
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

        $data = Cat::find($id);
        $this->category_name = $data->name;
        $this->vote_price = $data->vote_price;
        $this->category_name_dey = $data->name;
        $this->cat_id = $id;

        $this->alert('info', "Edit Mood !!!!", [
            'position' => 'top',
            'timer' => 9000,
        ]);

    }

    public function update (){
        $this->validate([
            'category_name' => 'required',
            'vote_price' => 'required|numeric',
        ]);

        try {
            //*****check if the client don't exists */
            if($this->category_name !== $this->category_name_dey){
                if (Cat::where('name', $this->category_name)->where('user_id', auth()->user()->id)->exists()) {
                    $this->alert('error', "Category name, cannot add", [
                        // 'position' => 'top',
                        'timer' => 9000,
                    ]);
                }
                else{

                    Cat::find($this->cat_id)->update([
                        "name" => $this->category_name,
                        "vote_price" => $this->vote_price,
                    ]);

                    $this->cancel();
                    $this->alert('success','Updated',[
                        'timer' => 9000,
                    ]);
                }
            }
            else{

                Cat::find($this->cat_id)->update([
                    "name" => $this->category_name,
                    "vote_price" => $this->vote_price,
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
        Cat::find($id)->delete();

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
        $this->category_name = '';
        $this->vote_price = '';
    }
}
