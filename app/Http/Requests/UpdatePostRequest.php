<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'titulo' => 'string|max:255',
            'texto' => 'string|max:1000',
            'curtidas' => 'integer',
            'comunidade_id' => 'exists:comunidades,id',
            'categoria_id' => 'exists:categorias,id'
        ];
    }
    public function messages()
    {
        return [
            'titulo.string' => 'O campo título deve ser uma string.',
            'titulo.max' => 'O campo título não pode ter mais de 255 caracteres.',
            'texto.string' => 'O campo texto deve ser uma string.',
            'texto.max' => 'O campo texto não pode ter mais de 1000 caracteres.',
            'curtidas.integer' => 'O campo curtidas deve ser um número inteiro.',
            'comunidade_id.exists' => 'A comunidade não existe.',
            'categoria_id.exists' => 'A categoria não existe.'
        ];
    }
}
