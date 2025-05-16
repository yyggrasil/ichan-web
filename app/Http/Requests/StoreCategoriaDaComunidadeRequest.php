<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCategoriaDaComunidadeRequest extends FormRequest
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
            'categoria_id' => 'required|integer|exists:categorias,id',
            'comunidade_id' => 'required|integer|exists:comunidades,id',
        ];
    }
    public function messages()
    {
        return [
            'categoria_id.required' => 'O campo categoria_id é obrigatório.',
            'categoria_id.integer' => 'O campo categoria_id deve ser um número inteiro.',
            'categoria_id.exists' => 'A categoria informada não existe.',
            'comunidade_id.required' => 'O campo comunidade_id é obrigatório.',
            'comunidade_id.integer' => 'O campo comunidade_id deve ser um número inteiro.',
            'comunidade_id.exists' => 'A comunidade informada não existe.',
        ];
    }
}
