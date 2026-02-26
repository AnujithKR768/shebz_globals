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
        Schema::table('contact_page_contents', function (Blueprint $table) {
            $table->string('right_title')->nullable()->after('head_office');
            $table->text('right_description')->nullable()->after('right_title');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('contact_page_contents', function (Blueprint $table) {
            $table->dropColumn(['right_title', 'right_description']);
        });
    }
};
