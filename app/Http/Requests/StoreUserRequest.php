<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
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
            'name'=>'required|string|max:255',
            'username'=>'sometimes|required|string|max:255|unique:users,username',
            'email'=>'required|email|string|max:255|unique:users,email',
            'birth_date'=>'sometimes|nullable|date',
            'password'=>'sometimes|required|string|min:6',
            'bios'=>'sometimes|nullable|string|max:255',
        ];
    }
    public function messages()
    {
        return [
            'name.required' => 'O campo nome é obrigatório.',
            'name.string' => 'O campo nome deve ser uma string.',
            'name.max' => 'O campo nome não pode ter mais de 255 caracteres.',
            'username.required' => 'O campo username é obrigatório.',
            'username.string' => 'O campo username deve ser uma string.',
            'username.max' => 'O campo username não pode ter mais de 255 caracteres.',
            'email.required' => 'O campo email é obrigatório.',
            'email.email' => 'O campo email deve ser um endereço de e-mail válido.',
            'email.string' => 'O campo email deve ser uma string.',
            'email.max' => 'O campo email não pode ter mais de 255 caracteres.',
            'birth_date.date' => 'O campo birth_date deve ser uma data válida.',
            'password.required' => 'O campo password é obrigatório.',
            'password.string' => 'O campo password deve ser uma string.',
            'password.min' => 'O campo password deve ter pelo menos 6 caracteres.',
            'bios.string' => 'O campo bios deve ser uma string.',
            'bios.max' => 'O campo bios não pode ter mais de 255 caracteres.'
        ];
    }
}