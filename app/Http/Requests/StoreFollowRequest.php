<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreFollowRequest extends FormRequest
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
            'isModerator' => 'required|boolean',
            'user_id' => 'required|exists:users,id',
            'comunidade_id' => 'required|exists:comunidades,id'
        ];
    }
    function messages()
    {
        return [
            'isModerator.required' => 'O campo isModerator é obrigatório.',
            'isModerator.boolean' => 'O campo isModerator deve ser verdadeiro ou falso.',
            'user_id.required' => 'O campo user_id é obrigatório.',
            'user_id.exists' => 'O usuário não existe.',
            'comunidade_id.required' => 'O campo comunidade_id é obrigatório.',
            'comunidade_id.exists' => 'A comunidade não existe.'
        ];
    }
}