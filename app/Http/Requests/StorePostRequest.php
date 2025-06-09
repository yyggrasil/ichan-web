<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePostRequest extends FormRequest
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
            'titulo' => 'required|string|max:255',
            'texto' => 'required|string|max:1000',
            'comunidade_id' => 'required|exists:comunidades,id',
            'usuario_id' => 'required|exists:users,id',
        ];
    }
    public function messages()
    {
        return [
            'titulo.required' => 'O campo título é obrigatório.',
            'titulo.string' => 'O campo título deve ser uma string.',
            'titulo.max' => 'O campo título não pode ter mais de 255 caracteres.',
            'texto.required' => 'O campo descrição é obrigatório.',
            'texto.string' => 'O campo descrição deve ser uma string.',
            'texto.max' => 'O campo descrição não pode ter mais de 1000 caracteres.',
            'comunidade_id.required' => 'O campo comunidade_id é obrigatório.',
            'comunidade_id.exists' => 'A comunidade não existe.',
            'usuario_id.required' => 'O campo usuario_id é obrigatório.',
            'usuario_id.exists' => 'O usuário não existe.'
        ];
    }
}
