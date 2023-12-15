<?php

namespace Wijzijnweb\LaravelInertiaPermissions;

use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Wijzijnweb\LaravelInertiaPermissions\App\Models\PermissionGroup;

class PermissionsServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $this->loadMigrationsFrom(__DIR__.'/../database/migrations');

        Inertia::share([
            'user_permissions' => function () {
                $user = auth()->user();

                if ($user) {
                    return [
                        'permissions' => $user->getAllPermissions()->pluck('name'),
                        'roles' => $user->roles->pluck('code'),
                    ];
                }

                return [];
            },
            'permissions' => function () {
                return [
                    'groups' => PermissionGroup::with('permissions')->get(),
                    'permissions' => Permission::get(),
                    'roles' => Role::get(),
                ];
            },
        ]);
    }
}
