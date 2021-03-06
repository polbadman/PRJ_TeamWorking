<?php

namespace Database\Seeders;

use App\Models\Lesson;
use App\Models\Teacher;
use Illuminate\Database\Seeder;

class LessonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if (!Teacher::query()->inRandomOrder()->exists())
            $this->call([TeacherSeeder::class]);

        Lesson::factory(20)->create()->each(function ($record){
            $teacher = Teacher::query()->inRandomOrder()->first();

            /** @var Lesson $record */
            $record->teachers()->syncWithoutDetaching([$teacher->id]);
        });
    }
}
