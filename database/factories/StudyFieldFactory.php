<?php

namespace Database\Factories;

use App\Models\StudyField;
use Illuminate\Database\Eloquent\Factories\Factory;

class StudyFieldFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = StudyField::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name,
        ];
    }
}
