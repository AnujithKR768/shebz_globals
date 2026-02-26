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
        Schema::create('coaching_programs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('coaching_mentorship_id')
                ->constrained()
                ->cascadeOnDelete();

            $table->string('text'); // One-on-one coaching...
            $table->integer('position')->default(1);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('coaching_programs');
    }
};
