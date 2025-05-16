<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateFollowRequest extends FormRequest
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
            'isModerator' => 'boolean',
            'user_id' => 'exists:users,id',
            'comunidade_id' => 'exists:comunidades,id'
        ];
    }
    public function messages()
    {
        return [
            'isModerator.boolean' => 'O campo isModerator deve ser verdadeiro ou falso.',
            'user_id.exists' => 'O usuário não existe.',
            'comunidade_id.exists' => 'A comunidade não existe.'
        ];
    }
}
