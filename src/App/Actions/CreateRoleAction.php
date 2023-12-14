<?php

namespace Wijzijnweb\LaravelInertiaPermissions\App\Actions;

use function request;

class CreateRoleAction
{
    public function handle()
    {
        $validated = request()->validate([
            'name' => 'required',
            'code' => 'required',
            'permissions' => 'required|array',
        ]);

        $model = config('permission.models.role');

        $role = $model::updateOrCreate(['id' => request('id')], [
            'name' => $validated['name'],
            'code' => $validated['code'],
        ]);

        $role->permissions()->sync($validated['permissions']);

        return $role;
    }
}
