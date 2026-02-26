<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\OurService;
use App\Models\AboutStory;
use App\Models\CoreValue;
use Illuminate\Support\Facades\Log;
use App\Models\HomeHeader;
use App\Models\MissionVision;
use App\Models\FounderMessage;
use Inertia\Inertia;
use App\Models\LearnMore;
use App\Models\Solution;
use App\Models\SolutionCaseStudy;
use App\Models\KnowledgeHub;
use App\Models\KnowledgeHubItem;
use App\Models\CoachingMentorship;
use App\Models\CoachingProgram;
use App\Models\ContactPageContent;
use App\Models\Testimonial;

class ViewController extends Controller
{
    public function home()
    {
        //Services Grid
        $services = OurService::orderBy('id')->get();

        //Header Hero + Banner
        $header = HomeHeader::where("is_active", true)->latest()->first();

        //Mission
        $mission = MissionVision::where("type", "mission")
            ->where("is_active", true)
            ->latest()
            ->first();

        //Vision
        $vision = MissionVision::where("type", "vision")
            ->where("is_active", true)
            ->latest()
            ->first();

        //Founder Message
        $founderMessage = FounderMessage::where("is_active", true)
            ->latest()
            ->first();

        return Inertia::render("Home/Header", [
            "services" => $services,
            "header" => $header,
            "mission" => $mission,
            "vision" => $vision,
            "founderMessage" => $founderMessage,
            "testimonials" => Testimonial::where('is_active', true)->latest()->get(),
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

        public function show()
        {
            $content = LearnMore::where('is_active', true)->latest()->first();

            return Inertia::render("LearnMore/LearnMore", [
                "content" => $content,
            ]);
        }
        public function About()
        {
            $story = AboutStory::where("is_active", true)->latest()->first();

            $mission = MissionVision::where("type", "mission")
                ->where("is_active", true)
                ->latest()
                ->first();

            $vision = MissionVision::where("type", "vision")
                ->where("is_active", true)
                ->latest()
                ->first();

            $coreValues = CoreValue::where("is_active", true)
                ->orderBy("position", "asc")
                ->get();

            $founderMessage = FounderMessage::where("is_active", true)->latest()->first();

            return Inertia::render("About/About", [
                "story" => $story,
                "mission" => $mission,
                "vision" => $vision,
                "coreValues" => $coreValues,
                "founderMessage" => $founderMessage,
            ]);
        }
        public function contact()
    {
        // ✅ get latest ACTIVE content
        $content = ContactPageContent::where('is_active', true)
            ->latest()
            ->first();

        return Inertia::render('Contact/Contact', [
            'content' => $content
        ]);
    }
        public function Solutions()
        {
            return Inertia::render("Solutions/Solutions", [

                // Our Solutions Cards
                "solutions" => Solution::where("is_active", true)
                    ->orderBy("position", "asc")
                    ->get(),

                // Case Studies
                "caseStudies" => SolutionCaseStudy::where("is_active", true)
                    ->orderBy("position", "asc")
                    ->get(),

                // Knowledge Hub Section (single)
                "knowledgeHub" => KnowledgeHub::where("is_active", true)
                    ->latest()
                    ->first(),

                // Knowledge Hub Items List
                "knowledgeHubItems" => KnowledgeHubItem::where("is_active", true)
                    ->orderBy("position", "asc")
                    ->get(),

                // Coaching Section (single)
                "coaching" => CoachingMentorship::where("is_active", true)
                    ->latest()
                    ->first(),

                // Coaching Programs List
                "coachingPrograms" => CoachingProgram::where("is_active", true)
                    ->orderBy("position", "asc")
                    ->get(),
            ]);
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
        public function ServiceCreate()
            {
                return Inertia::render('Service/ServiceAdd');
            }

}
