<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CategoriaDaComunidade extends Model
{ 
    use HasFactory, SoftDeletes;
    protected $table = 'categorias_da_comunidades';
    
    /**
     * Get the comunidades for this categoria.
     */
    public function comunidades()
    {
        return $this->BelongsTo(Comunidade::class, 'categoria_id');
    }
    public function categorias()
    {
        return $this->BelongsTo(Categoria::class, 'categoria_id');
    }
    

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        //"created_at",
        "updated_at",
        "deleted_at",
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
        'deleted_at' => 'datetime',
    ];
}
