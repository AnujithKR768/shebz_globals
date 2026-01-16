<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ViewController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Illuminate\View\View;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });
Route::get('/', [ViewController::class, 'home'])->name('home');


Route::get('dashboard',[DashboardController::class,'index']) -> name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('service',[DashboardController::class,'service']) -> name('service');
// Route::get('navbar',[DashboardController::class,'navbar']) -> name('navbar');
// Route::get('footer', [DashboardController::class, 'footer'])->name('footer');
Route::post('/service', [DashboardController::class, 'store']) -> name('service.store');
Route::get('/service/{id}/edit',[DashboardController::class,'ServiceUpdate']) -> name('service.edit');
Route::post('/service/{id}', [DashboardController::class, 'update']) -> name('service.update');
Route::delete('/service/{id}', [DashboardController::class, 'destroy']) -> name('service.destroy');


Route::get('Service', [ViewController::class, 'serviceView'])->name('service.view');
Route::get('/service/{id}', [ViewController::class, 'serviceDetails'])->name('service.details');
Route::get('/learn-more', [ViewController::class, 'LearnMore'])->name('learnmore');
Route::get('/about', [ViewController::class,'About']) ->name('about');
Route::get('/contact',[ViewController::class, 'Contact']) -> name('contact');
Route::get('/Solutions', [ViewController::class, 'Solutions'])->name('solutions');
Route::get('Terms',[ViewController::class,'Terms']) -> name('terms');
Route::get('PrivacyPolicy',[ViewController::class,'PrivacyPolicy']) -> name('privacypolicy');
Route::get('quote-form',[ViewController::class,'QuoteForm']) -> name('quote.form');

Route::post('/contact-send', [ContactController::class, 'send']) -> name('contact.send');
Route::post('/quote-request', [ContactController::class, 'quoteRequest']) -> name('quote.request');




require __DIR__.'/auth.php';
