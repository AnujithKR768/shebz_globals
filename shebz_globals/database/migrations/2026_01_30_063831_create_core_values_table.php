<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {

    public function up(): void
    {
        Schema::create('core_values', function (Blueprint $table) {
            $table->id();

            $table->string("value_title");          // Integrity
            $table->string("value_description",1000)->nullable(); // Doing what's right...

            $table->integer("position")->default(0);
            $table->boolean("is_active")->default(true);

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('core_values');
    }
};
