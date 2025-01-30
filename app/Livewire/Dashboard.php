<?php

namespace App\Livewire;

use App\Models\Category;
use App\Models\Contestants;
use App\Models\User;
use App\Models\Votes;
use Livewire\Component;
use Jantinnerezo\LivewireAlert\LivewireAlert;
use Livewire\WithPagination;

class Dashboard extends Component
{
    use WithPagination;
    use LivewireAlert;

    protected $paginationTheme = 'bootstrap';
    public $clients, $contestants, $votes, $categories;

    public $ongoingVotes = [];
    public function render()
    {
        $this->clients = User::where('user_type', 'user')->count();
        $this->contestants = Contestants::where('user_id', auth()->user()->id)->count();
        $this->categories = Category::where('user_id', auth()->user()->id)->count();
        $this->votes = Votes::where('user_id',auth()->user()->id)->count();


        //*ongoing votes
        // $this->ongoingVotes = Votes::where('votes.user_id', auth()->user()->id)
        // ->join('categories', 'categories.id', '=', 'votes.category_id')
        // ->join('contestants', 'contestants.id', '=', 'votes.contestant_id')
        // ->select('votes.id as id', 'categories.name as category_name', 'categories.vote_price', 'contestants.name as contestant_name','votes','votes.created_at')
        // ->paginate(10);

        return view('livewire.dashboard',['data'=> Votes::where('votes.user_id', auth()->user()->id)
        ->join('categories', 'categories.id', '=', 'votes.category_id')
        ->join('contestants', 'contestants.id', '=', 'votes.contestant_id')
        ->select('votes.id as id', 'categories.name as category_name', 'categories.vote_price', 'contestants.name as contestant_name','votes','votes.created_at')
        ->paginate(10)]);
    }
}
