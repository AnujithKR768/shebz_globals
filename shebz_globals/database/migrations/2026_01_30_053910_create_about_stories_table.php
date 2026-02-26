<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('about_stories', function (Blueprint $table) {
            $table->id();

            $table->string('page')->default('about');
            $table->string('heading')->default('About Us');   // main heading
            $table->string('title')->default('Our Story');    // subtitle

            $table->longText('paragraph1')->nullable();
            $table->longText('paragraph2')->nullable();

            $table->string('image')->nullable(); // story image
            $table->boolean('is_active')->default(true);

            $table->timestamps();
        });
    }



    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('about_stories');
    }
};
