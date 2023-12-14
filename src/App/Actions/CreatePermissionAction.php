<?php

namespace Wijzijnweb\LaravelInertiaPermissions\App\Actions;

use function request;

class CreatePermissionAction
{
    public function handle()
    {
        $validated = request()->validate([
            'name' => 'required',
            'label' => 'required',
        ]);

        $model = config('permission.models.permission');

        return $model::updateOrCreate(['id' => request('id')], [
            'name' => $validated['name'],
            'label' => $validated['label'],
        ]);
    }
}
