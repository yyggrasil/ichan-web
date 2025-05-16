<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreComentarioRequest extends FormRequest
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
            'comentario' => 'required|string|max:1000',
            'usuario_id' => 'required|integer|exists:usuarios,id',
            'postagem_id' => 'required|integer|exists:postagens,id',
        ];
    }
    public function messages()
    {
        return [
            'comentario.required' => 'O campo comentario é obrigatório.',
            'comentario.string' => 'O campo comentario deve ser uma string.',
            'comentario.max' => 'O campo comentario não pode ter mais de 1000 caracteres.',
            'usuario_id.required' => 'O campo usuario_id é obrigatório.',
            'usuario_id.integer' => 'O campo usuario_id deve ser um número inteiro.',
            'usuario_id.exists' => 'O usuário informado não existe.',
            'postagem_id.required' => 'O campo postagem_id é obrigatório.',
            'postagem_id.integer' => 'O campo postagem_id deve ser um número inteiro.',
            'postagem_id.exists' => 'A postagem informada não existe.',
        ];
    }
}
