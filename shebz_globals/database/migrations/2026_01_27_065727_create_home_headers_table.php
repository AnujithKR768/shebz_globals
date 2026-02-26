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
        Schema::create('home_headers', function (Blueprint $table) {
            $table->id();
            $table->string('background_image')->nullable()->after('id');

            // HERO SECTION CONTENT
            $table->string('hero_title');
            $table->longText('hero_paragraph1')->nullable();
            $table->longText('hero_paragraph2')->nullable();

            // BUTTON
            $table->string('button_text')->nullable();
            $table->string('button_link')->nullable();
            $table->string('banner_text')->nullable()->after('button_link');

            // Active record (recommended only 1 active)
            $table->boolean('is_active')->default(true);


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('home_headers', function (Blueprint $table) {
                    $table->dropColumn('banner_text');
        });
    }
};
