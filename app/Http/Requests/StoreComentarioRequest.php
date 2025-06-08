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
            'texto' => 'required|string|max:1000',
            'curtidas' => 'integer|min:0',
            'usuario_id' => 'required|integer|exists:users,id',
            'post_id' => 'required|integer|exists:posts,id',
        ];
    }
    public function messages()
    {
        return [
            'texto.required' => 'O campo comentario é obrigatório.',
            'texto.string' => 'O campo comentario deve ser uma string.',
            'texto.max' => 'O campo comentario não pode ter mais de 1000 caracteres.',
            'usuario_id.required' => 'O campo usuario_id é obrigatório.',
            'usuario_id.integer' => 'O campo usuario_id deve ser um número inteiro.',
            'usuario_id.exists' => 'O usuário informado não existe.',
            'post_id.required' => 'O campo postagem_id é obrigatório.',
            'post_id.integer' => 'O campo postagem_id deve ser um número inteiro.',
            'post_id.exists' => 'A postagem informada não existe.',
        ];
    }
}
