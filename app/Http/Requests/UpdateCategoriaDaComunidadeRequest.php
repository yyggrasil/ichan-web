<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCategoriaDaComunidadeRequest extends FormRequest
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
            'comunidade_id' => 'exists:comunidades,id',
            'categoria_id' => 'exists:categorias,id'
        ];
    }
    public function messages()
    {
        return [
            'comunidade_id.exists' => 'A comunidade não existe.',
            'categoria_id.exists' => 'A categoria não existe.'
        ];
    }
}
