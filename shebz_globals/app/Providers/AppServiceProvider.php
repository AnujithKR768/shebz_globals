<?php

namespace App\Providers;
use App\Models\OurService;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);

        Inertia::share([
            'whatsapp' => [
                'number' => config('services.whatsapp.number'),
                'message' => config('services.whatsapp.message'),
            ],
            'services' => fn () =>
            OurService::select('id', 'icon')->get(),
        ]);
    }

}
