<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\View\View;
use Storage;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): View
    {
        return view('profile.edit', [
            'user' => $request->user(),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    // public function update(ProfileUpdateRequest $request): RedirectResponse
    // {
    //     $request->user()->fill($request->validated());

    //     if ($request->user()->isDirty('email')) {
    //         $request->user()->email_verified_at = null;
    //     }



    //     $request->user()->save();

    //     return Redirect::route('profile.edit')->with('status', 'profile-updated');
    // }
    public function update(ProfileUpdateRequest $request): RedirectResponse
{
    $user = $request->user();

    // Fill validated data
    $user->fill($request->validated());

    // Handle Logo Image Upload
    if ($request->hasFile('logo')) {
        // Delete old image if exists
        if ($user->logo) {
            Storage::delete('public/' . $user->logo);
        }

        // Store new image in 'profile_images' folder
        $path = $request->file('logo')->store('logo', 'public');
        $user->logo = $path;
    }

    // Handle Banner Image Upload
    if ($request->hasFile('banner')) {
        // Delete old image if exists
        if ($user->banner) {
            Storage::delete('public/' . $user->banner);
        }

        // Store new image in 'profile_images' folder
        $path = $request->file('banner')->store('banner', 'public');
        $user->banner = $path;
    }

    // Reset email verification if email is changed
    if ($user->isDirty('email')) {
        $user->email_verified_at = null;
    }

    // Save updated user data
    $user->save();

    return Redirect::route('profile.edit')->with('status', 'profile-updated');
}

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validateWithBag('userDeletion', [
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
