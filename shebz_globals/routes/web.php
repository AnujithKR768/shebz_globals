<?php
use App\Http\Controllers\TestimonialController;
use App\Http\Controllers\ContactPageContentController;
use App\Http\Controllers\SolutionAdminController;
use App\Http\Controllers\SolutionCaseStudyAdminController;
use App\Http\Controllers\KnowledgeHubAdminController;
use App\Http\Controllers\KnowledgeHubItemAdminController;
use App\Http\Controllers\CoachingMentorshipAdminController;
use App\Http\Controllers\CoachingProgramAdminController;
use App\Http\Controllers\CoreValueController;
use App\Http\Controllers\AboutStoryController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\FounderMessageController;
use App\Http\Controllers\HomeHeaderController;
use App\Http\Controllers\LearnMoreController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ViewController;
use Illuminate\Foundation\Application;
use Illuminate\Routing\ViewController as RoutingViewController;
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

Route::get('service',[DashboardController::class,'service']) -> name('service');

Route::post('/service', [DashboardController::class, 'store']) -> name('service.store');
Route::get('/service/{id}/edit',[DashboardController::class,'ServiceUpdate']) -> name('service.edit');
Route::put('/service/{id}', [DashboardController::class, 'update']) -> name('service.update');
Route::delete('/service/{id}', [DashboardController::class, 'destroy']) -> name('service.destroy');

Route::get('/quote-requests', [DashboardController::class, 'quoterequests']) -> name('quote.requests');
Route::get('/contact-list', [DashboardController::class, 'contactlist']) -> name('contact.list');
Route::get('/dashboard', [DashboardController::class, 'dashboard'])
    ->middleware(['auth'])
    ->name('dashboard');



Route::middleware(['auth', 'permission:users'])->group(function () {

    //List Users
    Route::get('/users', [DashboardController::class, 'userlist'])
        ->name('user.user');

    //Create User Page
    Route::get('/users/create', [DashboardController::class, 'createUser'])
        ->name('user.create');

    //Store User
    Route::post('/users', [DashboardController::class, 'storeUser'])
        ->name('user.store');

    //Edit User Page
    Route::get('/users/{user}/edit', [DashboardController::class, 'editUser'])
        ->name('user.edit');

    //Update User
    Route::put('/users/{user}', [DashboardController::class, 'updateUser'])
        ->name('user.update');

    //Delete User
    Route::delete('/users/{user}', [DashboardController::class, 'deleteUser'])
        ->name('user.delete');
});

Route::middleware(['auth'])->group(function () {

    Route::get('/mission-vision', [DashboardController::class, 'index'])->name('missionvision.index');

    Route::get('/mission-vision/create', [DashboardController::class, 'createMV'])->name('missionvision.create');
    Route::post('/mission-vision', [DashboardController::class, 'storeMV'])->name('missionvision.store');

    // ✅ ADD THIS (fix 405)
    Route::get('/mission-vision/{missionVision}', [DashboardController::class, 'showMV'])->name('missionvision.show');

    Route::get('/mission-vision/{missionVision}/edit', [DashboardController::class, 'editMV'])->name('missionvision.edit');
    Route::put('/mission-vision/{missionVision}', [DashboardController::class, 'updateMV'])->name('missionvision.update');

    Route::delete('/mission-vision/{missionVision}', [DashboardController::class, 'destroyMV'])->name('missionvision.destroy');
});



Route::get('/services/create', [ViewController::class, 'ServiceCreate'])->name('service.create');
Route::get('Service', [ViewController::class, 'serviceView'])->name('service.view');
Route::get('/service/{id}', [ViewController::class, 'serviceDetails'])->name('service.details');
Route::get('/about', [ViewController::class, 'About'])->name('about');
Route::get('/contact',[ViewController::class, 'Contact']) -> name('contact');
Route::get('/Solutions', [ViewController::class, 'Solutions'])->name('solutions.view');
Route::get('Terms',[ViewController::class,'Terms']) -> name('terms');
Route::get('PrivacyPolicy',[ViewController::class,'PrivacyPolicy']) -> name('privacypolicy');
Route::get('quote-form',[ViewController::class,'QuoteForm']) -> name('quote.form');
Route::get('/learn-more', [ViewController::class, 'show'])->name('learnmore');
Route::get('/Blog', [ViewController::class, 'Blog'])->name('blog.view');
Route::get('/blog/details/{id}', [ViewController::class, 'blogDetails'])->name('blog.details');


Route::post('/contact-send', [ContactController::class, 'send']) -> name('contact.send');
Route::post('/quote-request', [ContactController::class, 'quoteRequest']) -> name('quote.request');
Route::delete('/contact-list/{contact}', [ContactController::class, 'destroy']) -> name('contact-list.destroy');
Route::delete('/quote-requests/{quoteRequest}', [ContactController::class, 'destroyQ']) ->name('quote-requests.destroy');


Route::middleware(['auth'])->group(function () {
    Route::get('/home-header', [HomeHeaderController::class, 'HomeHeader'])
        ->name('home.header');

    Route::get('/home-header/create', [HomeHeaderController::class, 'create'])
        ->name('homeheader.create');

    Route::post('/home-header', [HomeHeaderController::class, 'store'])
        ->name('homeheader.store');

    Route::get('/home-header/{homeHeader}/edit', [HomeHeaderController::class, 'edit'])
        ->name('homeheader.edit');

     Route::put('/home-header/{homeHeader}', [HomeHeaderController::class, 'update'])
        ->name('homeheader.update');

    Route::delete('/home-header/{homeHeader}', [HomeHeaderController::class, 'destroy'])
        ->name('homeheader.destroy');
});


Route::middleware(['auth'])->group(function () {

    Route::get('/learnmore-list', [LearnMoreController::class, 'index'])
        ->name('learnmore.admin.index');

    Route::get('/learn-more/create', [LearnMoreController::class, 'create'])
        ->name('learnmore.admin.create');

    Route::post('/learn-more/store', [LearnMoreController::class, 'store'])
        ->name('learnmore.admin.store');

    Route::get('/learn-more/{learnMore}/edit', [LearnMoreController::class, 'edit'])
        ->name('learnmore.admin.edit');

    Route::put('/learn-more/{learnMore}', [LearnMoreController::class, 'update'])
        ->name('learnmore.admin.update');

    Route::delete('/learn-more/{learnMore}', [LearnMoreController::class, 'destroy'])
        ->name('learnmore.admin.destroy');
});


Route::middleware(['auth'])->group(function () {

    Route::get('/founder-message', [FounderMessageController::class, 'index'])
        ->name('founder.admin.index');

    Route::get('/founder-message/create', [FounderMessageController::class, 'create'])
        ->name('founder.admin.create');

    Route::post('/founder-message', [FounderMessageController::class, 'store'])
        ->name('founder.admin.store');

    Route::get('/founder-message/{founderMessage}/edit', [FounderMessageController::class, 'edit'])
        ->name('founder.admin.edit');

    Route::put('/founder-message/{founderMessage}', [FounderMessageController::class, 'update'])
    ->name('founder.admin.update');

    Route::delete('/founder-message/{founderMessage}', [FounderMessageController::class, 'destroy'])
        ->name('founder.admin.destroy');

});

Route::middleware(['auth'])->group(function () {


    Route::get('/about-story', [AboutStoryController::class, 'index'])->name('aboutstory.admin.index');
    Route::get('/about-story/create', [AboutStoryController::class, 'create'])->name('aboutstory.admin.create');
    Route::post('/about-story', [AboutStoryController::class, 'store'])->name('aboutstory.admin.store');
    Route::get('/about-story/{aboutStory}/edit', [AboutStoryController::class, 'edit'])->name('aboutstory.admin.edit');
    Route::put('/about-story/{aboutStory}', [AboutStoryController::class, 'update'])->name('aboutstory.admin.update');
    Route::delete('/about-story/{aboutStory}', [AboutStoryController::class, 'destroy'])->name('aboutstory.admin.destroy');

    Route::get('/core-values', [CoreValueController::class, 'index'])->name('corevalue.admin.index');
    Route::get('/core-values/create', [CoreValueController::class, 'create'])->name('corevalue.admin.create');
    Route::post('/core-values', [CoreValueController::class, 'store'])->name('corevalue.admin.store');
    Route::get('/core-values/{coreValue}/edit', [CoreValueController::class, 'edit'])->name('corevalue.admin.edit');
    Route::put('/core-values/{coreValue}', [CoreValueController::class, 'update'])->name('corevalue.admin.update');
    Route::delete('/core-values/{coreValue}', [CoreValueController::class, 'destroy'])->name('corevalue.admin.destroy');
});

Route::middleware(['auth'])->group(function () {

    // Solutions Cards
    Route::get('/solutions-admin', [SolutionAdminController::class, 'index'])->name('solutions.admin.index');
    Route::get('/solutions-admin/create', [SolutionAdminController::class, 'create'])->name('solutions.admin.create');
    Route::post('/solutions-admin', [SolutionAdminController::class, 'store'])->name('solutions.admin.store');
    Route::get('/solutions-admin/{solution}/edit', [SolutionAdminController::class, 'edit'])->name('solutions.admin.edit');
    Route::put('/solutions-admin/{solution}', [SolutionAdminController::class, 'update'])->name('solutions.admin.update');
    Route::delete('/solutions-admin/{solution}', [SolutionAdminController::class, 'destroy'])->name('solutions.admin.destroy');

    // Case Studies
    Route::get('/case-studies', [SolutionCaseStudyAdminController::class, 'index'])->name('casestudy.admin.index');
    Route::get('/case-studies/create', [SolutionCaseStudyAdminController::class, 'create'])->name('casestudy.admin.create');
    Route::post('/case-studies', [SolutionCaseStudyAdminController::class, 'store'])->name('casestudy.admin.store');
    Route::get('/case-studies/{solutionCaseStudy}/edit', [SolutionCaseStudyAdminController::class, 'edit'])->name('casestudy.admin.edit');
    Route::put('/case-studies/{solutionCaseStudy}', [SolutionCaseStudyAdminController::class, 'update'])->name('casestudy.admin.update');
    Route::delete('/case-studies/{solutionCaseStudy}', [SolutionCaseStudyAdminController::class, 'destroy'])->name('casestudy.admin.destroy');

    // Knowledge Hub
    Route::get('/knowledge-hub', [KnowledgeHubAdminController::class, 'index'])->name('knowledgehub.admin.index');
    Route::get('/knowledge-hub/create', [KnowledgeHubAdminController::class, 'create'])->name('knowledgehub.admin.create');
    Route::post('/knowledge-hub', [KnowledgeHubAdminController::class, 'store'])->name('knowledgehub.admin.store');
    Route::get('/knowledge-hub/{knowledgeHub}/edit', [KnowledgeHubAdminController::class, 'edit'])->name('knowledgehub.admin.edit');
    Route::put('/knowledge-hub/{knowledgeHub}', [KnowledgeHubAdminController::class, 'update'])->name('knowledgehub.admin.update');
    Route::delete('/knowledge-hub/{knowledgeHub}', [KnowledgeHubAdminController::class, 'destroy'])->name('knowledgehub.admin.destroy');

    // Knowledge Hub Items
    Route::get('/knowledge-hub-items', [KnowledgeHubItemAdminController::class, 'index'])->name('knowledgehubitem.admin.index');
    Route::get('/knowledge-hub-items/create', [KnowledgeHubItemAdminController::class, 'create'])->name('knowledgehubitem.admin.create');
    Route::post('/knowledge-hub-items', [KnowledgeHubItemAdminController::class, 'store'])->name('knowledgehubitem.admin.store');
    Route::get('/knowledge-hub-items/{knowledgeHubItem}/edit', [KnowledgeHubItemAdminController::class, 'edit'])->name('knowledgehubitem.admin.edit');
    Route::put('/knowledge-hub-items/{knowledgeHubItem}', [KnowledgeHubItemAdminController::class, 'update'])->name('knowledgehubitem.admin.update');
    Route::delete('/knowledge-hub-items/{knowledgeHubItem}', [KnowledgeHubItemAdminController::class, 'destroy'])->name('knowledgehubitem.admin.destroy');

    // Coaching & Mentorship
    Route::get('/coaching-mentorship', [CoachingMentorshipAdminController::class, 'index'])->name('coaching.admin.index');
    Route::get('/coaching-mentorship/create', [CoachingMentorshipAdminController::class, 'create'])->name('coaching.admin.create');
    Route::post('/coaching-mentorship', [CoachingMentorshipAdminController::class, 'store'])->name('coaching.admin.store');
    Route::get('/coaching-mentorship/{coachingMentorship}/edit', [CoachingMentorshipAdminController::class, 'edit'])->name('coaching.admin.edit');
    Route::put('/coaching-mentorship/{coachingMentorship}', [CoachingMentorshipAdminController::class, 'update'])->name('coaching.admin.update');
    Route::delete('/coaching-mentorship/{coachingMentorship}', [CoachingMentorshipAdminController::class, 'destroy'])->name('coaching.admin.destroy');

    // Coaching Programs
    Route::get('/coaching-programs', [CoachingProgramAdminController::class, 'index'])->name('coachingprogram.admin.index');
    Route::get('/coaching-programs/create', [CoachingProgramAdminController::class, 'create'])->name('coachingprogram.admin.create');
    Route::post('/coaching-programs', [CoachingProgramAdminController::class, 'store'])->name('coachingprogram.admin.store');
    Route::get('/coaching-programs/{coachingProgram}/edit', [CoachingProgramAdminController::class, 'edit'])->name('coachingprogram.admin.edit');
    Route::put('/coaching-programs/{coachingProgram}', [CoachingProgramAdminController::class, 'update'])->name('coachingprogram.admin.update');
    Route::delete('/coaching-programs/{coachingProgram}', [CoachingProgramAdminController::class, 'destroy'])->name('coachingprogram.admin.destroy');
});


Route::middleware(['auth'])->group(function () {

    Route::get('/contact-content', [ContactPageContentController::class, 'index'])
        ->name('contact-content.index');

    Route::get('/contact-content/create', [ContactPageContentController::class, 'create'])
        ->name('contact-content.create');

    Route::post('/contact-content', [ContactPageContentController::class, 'store'])
        ->name('contact-content.store');

    Route::get('/contact-content/{contactContent}/edit', [ContactPageContentController::class, 'edit'])
        ->name('contact-content.edit');

    Route::put('/contact-content/{contactContent}', [ContactPageContentController::class, 'update'])
        ->name('contact-content.update');

    Route::delete('/contact-content/{contactContent}', [ContactPageContentController::class, 'destroy'])
        ->name('contact-content.destroy');
});

Route::get('/testimonial/create', [TestimonialController::class, 'create'])
    ->name('testimonials.create');

Route::post('/testimonial/store', [TestimonialController::class, 'store'])
    ->name('testimonials.store');

Route::middleware(['auth', 'permission:testimonials'])->group(function () {

    Route::get('/testimonials-list', [TestimonialController::class, 'index'])
        ->name('testimonials.list');

    Route::delete('/testimonials/{id}', [TestimonialController::class, 'destroy'])
        ->name('dashboard.testimonials.destroy');

});

Route::get('/blog', [DashboardController::class, 'blogIndex'])->name('blog.index');
Route::get('/blog/create', [DashboardController::class, 'blogCreate'])->name('blog.create');
Route::post('/blog/store', [DashboardController::class, 'blogStore'])->name('blog.store');
Route::get('/blog/{id}/edit', [DashboardController::class, 'blogEdit'])->name('blog.edit');
Route::put('/blog/update/{id}', [DashboardController::class, 'blogUpdate'])->name('blog.update');
Route::delete('/blog/delete/{id}', [DashboardController::class, 'blogDestroy'])->name('blog.destroy');

Route::post('/blog/content-image',[DashboardController::class, 'blogContentImage'])->name('blog.content-image');

require __DIR__.'/auth.php';
