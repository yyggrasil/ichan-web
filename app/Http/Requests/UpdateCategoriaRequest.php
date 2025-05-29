<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCategoriaRequest extends FormRequest
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
            'nome' => 'string|max:255|unique:categorias,nome,' . $this->route('id'),
            'descricao' => 'string|max:1000'
        ];
    }
    public function messages()
    {
        return [
            'nome.string' => 'O campo nome deve ser uma string.',
            'nome.max' => 'O campo nome não pode ter mais de 255 caracteres.',
            'descricao.string' => 'O campo descrição deve ser uma string.',
            'descricao.max' => 'O campo descrição não pode ter mais de 1000 caracteres.'
        ];
    }
}
