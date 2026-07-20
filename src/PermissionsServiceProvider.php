<?php

namespace Wijzijnweb\LaravelInertiaPermissions;

use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission as SpatiePermission;
use Spatie\Permission\Models\Role as SpatieRole;
use Wijzijnweb\LaravelInertiaPermissions\App\Models\PermissionGroup;

class PermissionsServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $this->publishesMigrations([__DIR__.'/../database/migrations' => database_path('migrations')], 'laravel-inertia-permissions-migrations');

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
                if (! auth()->check()) {
                    return [];
                }

                $permissionGroupModel = config('permission.models.permission_group', PermissionGroup::class);
                $permissionModel = config('permission.models.permission', SpatiePermission::class);
                $roleModel = config('permission.models.role', SpatieRole::class);

                return [
                    'groups' => $permissionGroupModel::with('permissions')->get(),
                    'permissions' => $permissionModel::get(),
                    'roles' => $roleModel::get(),
                ];
            },
        ]);
    }
}
