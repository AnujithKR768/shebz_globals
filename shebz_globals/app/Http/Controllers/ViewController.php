<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\OurService;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class ViewController extends Controller
{
    public function home()
{
    return Inertia::render('Home/Home', [
        'service' => OurService::all()
    ]);
}


    public function serviceView()
        {
            // Fetch all services
            $services = OurService::all();

            // Return to Inertia/React
            return Inertia::render('Service/ServiceView', [
                'services' => $services
            ]);

        }

        public function ServiceDetails($id)
            {
                // Fetch the service by ID
                $service = OurService::findOrFail($id);

                // Return to Inertia/React
                return Inertia::render('Service/ServiceDetails', [
                    'service' => $service
                ]);
            }

       public function LearnMore()
            {
                return Inertia::render('Home/LearnMore');
            }
        public function About()
            {
                return Inertia::render('Home/About');
            }
        public function Contact()
            {
                return Inertia::render('Contact/Contact');
            }
        public function Solutions()
            {
                return Inertia::render('Solutions/Solutions');
            }
        public function Terms()
            {
                return Inertia::render('Terms/Terms');
            }
        public function PrivacyPolicy()
            {
                return Inertia::render('Privacy/Privacy');
            }
        public function QuoteForm()
            {
                return Inertia::render('Contact/QuoteRequest');
            }
}
