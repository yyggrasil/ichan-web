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
        Schema::table('comentarios', function (Blueprint $table) {
            $table->foreignId('post_id')
                ->contrained('posts')
                ->onDelete('cascade');

            $table->foreignId('usuario_id')
                ->contrained('users')
                ->onDelete('cascade')
                ->nullable();

            $table->foreignId('comentario_id')
                ->contrained('comentarios')
                ->onDelete('cascade')
                ->nullable();
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
