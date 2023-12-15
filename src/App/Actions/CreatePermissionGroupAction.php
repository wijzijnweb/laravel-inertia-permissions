<?php

namespace Wijzijnweb\LaravelInertiaPermissions\App\Actions;

use Wijzijnweb\LaravelInertiaPermissions\App\Models\PermissionGroup;

use function request;

class CreatePermissionGroupAction
{
    public function handle(): PermissionGroup
    {
        $validated = request()->validate([
            'name' => 'required',
        ]);

        return PermissionGroup::query()->updateOrCreate(['id' => request('id')], [
            'name' => $validated['name'],
        ]);
    }
}
