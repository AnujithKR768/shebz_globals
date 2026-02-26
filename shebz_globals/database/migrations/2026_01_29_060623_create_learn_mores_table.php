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
        Schema::create('learn_mores', function (Blueprint $table) {
            $table->id();

            // Top Image
            $table->string('top_image')->nullable();

            // HERO TEXT
            $table->string('hero_title')->nullable();
            $table->longText('hero_paragraph1')->nullable();
            $table->longText('hero_paragraph2')->nullable();

            // EXPERTISE SECTION
            $table->string('expertise_title')->nullable();

            // store list as JSON array
            $table->json('expertise_items')->nullable();

            // WHY CHOOSE SECTION
            $table->string('why_title')->nullable();
            $table->longText('why_description')->nullable();

            // active
            $table->boolean('is_active')->default(true);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('learn_mores');
    }
};
