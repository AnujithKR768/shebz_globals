<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Models\OurService;
use App\Models\AboutStory;
use App\Models\CoreValue;
use App\Models\HomeHeader;
use App\Models\MissionVision;
use App\Models\FounderMessage;
use App\Models\LearnMore;
use App\Models\Solution;
use App\Models\SolutionCaseStudy;
use App\Models\KnowledgeHub;
use App\Models\KnowledgeHubItem;
use App\Models\CoachingMentorship;
use App\Models\CoachingProgram;
use App\Models\ContactPageContent;
use App\Models\Testimonial;
use App\Models\Blog;

class ViewController extends Controller
{

    public function home()
    {
        return Inertia::render("Home/Header", [

            // Services
            "services" => OurService::orderBy('id')->get(),

            // Latest 3 Blogs
            "blogs" => Blog::latest()->take(3)->get(),

            // Header
            "header" => HomeHeader::where("is_active", true)
                ->latest()
                ->first(),

            // Mission
            "mission" => MissionVision::where("type", "mission")
                ->where("is_active", true)
                ->latest()
                ->first(),

            // Vision
            "vision" => MissionVision::where("type", "vision")
                ->where("is_active", true)
                ->latest()
                ->first(),

            // Founder
            "founderMessage" => FounderMessage::where("is_active", true)
                ->where("is_active", true)
                ->latest()
                ->first(),

            // Testimonials
            "testimonials" => Testimonial::where('is_active', true)
                ->latest()
                ->get(),
        ]);
    }


    public function serviceView(Request $request)
    {
        $query = OurService::query();

        // Filter by category when selected
        if ($request->filled('category')) {
            $query->where('category', $request->category);
        }

        $services = $query
            ->orderBy('id')
            ->get();

        return Inertia::render('Service/ServiceView', [
            'services' => $services,
            'category' => $request->category,
        ]);
    }


    public function ServiceDetails($id)
    {
        return Inertia::render('Service/ServiceDetails', [
            'service' => OurService::findOrFail($id)
        ]);
    }


    public function show()
    {
        return Inertia::render("LearnMore/LearnMore", [
            "content" => LearnMore::where('is_active', true)
                ->latest()
                ->first(),
        ]);
    }


    public function About()
    {
        return Inertia::render("About/About", [

            "story" => AboutStory::where("is_active", true)
                ->latest()
                ->first(),

            "mission" => MissionVision::where("type", "mission")
                ->where("is_active", true)
                ->latest()
                ->first(),

            "vision" => MissionVision::where("type", "vision")
                ->where("is_active", true)
                ->latest()
                ->first(),

            "coreValues" => CoreValue::where("is_active", true)
                ->orderBy("position")
                ->get(),

            "founderMessage" => FounderMessage::where("is_active", true)
                ->latest()
                ->first(),
        ]);
    }


    public function contact()
    {
        return Inertia::render('Contact/Contact', [
            'content' => ContactPageContent::where('is_active', true)
                ->latest()
                ->first()
        ]);
    }


    public function Solutions()
    {
        return Inertia::render("Solutions/Solutions", [

            // Our Solutions
            "solutions" => Solution::where("is_active", true)
                ->orderBy("position")
                ->get(),

            // Case Studies
            "caseStudies" => SolutionCaseStudy::where("is_active", true)
                ->orderBy("position")
                ->get(),

            // Knowledge Hub
            "knowledgeHub" => KnowledgeHub::where("is_active", true)
                ->latest()
                ->first(),

            "knowledgeHubItems" => KnowledgeHubItem::where("is_active", true)
                ->orderBy("position")
                ->get(),

            // Coaching
            "coaching" => CoachingMentorship::where("is_active", true)
                ->latest()
                ->first(),

            "coachingPrograms" => CoachingProgram::where("is_active", true)
                ->orderBy("position")
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

    public function Blog()
    {
        return Inertia::render('Blog/blog', [
            'blogs' => Blog::orderBy('id', 'desc')->get()
        ]);
    }
     public function blogDetails($id)
    {
        $post = Blog::findOrFail($id);
        return Inertia::render("Blog/details", [
            "post" => $post
        ]);
    }
}
