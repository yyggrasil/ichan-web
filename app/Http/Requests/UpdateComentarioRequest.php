<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateComentarioRequest extends FormRequest
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
            'texto' => 'string|max:1000',
            'usuario_id' => 'exists:users,id',
            'postagem_id' => 'exists:postagens,id'
        ];
    }
    public function messages()
    {
        return [
            'texto.string' => 'O campo texto deve ser uma string.',
            'texto.max' => 'O campo texto não pode ter mais de 1000 caracteres.',
            'usuario_id.exists' => 'O usuário não existe.',
            'postagem_id.exists' => 'A postagem não existe.'
        ];
    }
}
