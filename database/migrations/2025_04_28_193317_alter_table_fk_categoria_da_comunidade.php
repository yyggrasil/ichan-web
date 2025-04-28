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
        Schema::table('categorias_da_comunidades', function (Blueprint $table) {
            $table->foreignId('comunidade_id')
                ->contrained('comunidades')
                ->onDelete('cascade');
            $table->foreignId('categoria_id')
                ->contrained('categorias')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
