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
        Schema::create('contact_page_contents', function (Blueprint $table) {
            $table->id();

            $table->string('page_title')->nullable();
            $table->text('page_description')->nullable();

            $table->string('map_embed_url')->nullable();

            $table->string('email')->nullable();
            $table->string('website')->nullable();
            $table->string('head_office')->nullable();

            $table->string('whatsapp_number')->nullable();
            $table->text('whatsapp_text')->nullable();

            $table->string('linkedin_url')->nullable();

            $table->string('why_title')->nullable();
            $table->text('why_description')->nullable();

            $table->json('why_points')->nullable();

            $table->boolean('is_active')->default(true);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contact_page_contents');
    }
};
