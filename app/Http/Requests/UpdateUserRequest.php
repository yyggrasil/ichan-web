<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
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
            'nome' => 'string|max:255',
            'username' => 'string|max:255|unique:users,username,' . $this->user->id,
            'birth_date' => 'date|date_format:Y-m-d',
            'email' => 'email|max:255|unique:users,email,' . $this->user->id,
            'password' => 'string|min:8|confirmed',
            'bios' => 'string|max:255',
            'isAdmin' => 'boolean',
            'isModerator' => 'boolean',
        ];
    }
    public function messages(): array
    {
        return [
            'nome.string' => 'O campo nome deve ser uma string.',
            'nome.max' => 'O campo nome deve ter no máximo 255 caracteres.',
            'username.string' => 'O campo username deve ser uma string.',
            'username.max' => 'O campo username deve ter no máximo 255 caracteres.',
            'username.unique' => 'O campo username já está em uso.',
            'birth_date.date' => 'O campo birth_date deve ser uma data válida.',
            'birth_date.date_format' => 'O campo birth_date deve estar no formato Y-m-d.',
            'email.email' => 'O campo email deve ser um endereço de e-mail válido.',
            'email.max' => 'O campo email deve ter no máximo 255 caracteres.',
            'email.unique' => 'O campo email já está em uso.',
            'password.string' => 'O campo password deve ser uma string.',
            'password.min' => 'O campo password deve ter pelo menos 8 caracteres.',
            'password.confirmed' => 'A confirmação da senha não corresponde.',
            'bios.string' => 'O campo bios deve ser uma string.',
            'bios.max' => 'O campo bios deve ter no máximo 255 caracteres.',
            'isAdmin.boolean' => 'O campo isAdmin deve ser verdadeiro ou falso.',
            'isModerator.boolean' => 'O campo isModerator deve ser verdadeiro ou falso.'
        ];
    }
}
