@extends('layouts.main')
@section('title', 'Dashboard')
@section('content')
@section('PageTitle','Dashboard')
@section('pageON','Welcome')
@section('currentPage','dashboard')
    @livewire('dashboard')
@endsection
