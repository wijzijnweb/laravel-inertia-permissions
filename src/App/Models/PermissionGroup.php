<?php

namespace Wijzijnweb\LaravelInertiaPermissions\App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\Permission\Models\Permission as SpatiePermission;

class PermissionGroup extends Model
{
    protected $fillable = [
        'name',
    ];

    public function permissions(): HasMany
    {
        $model = config('permission.models.permission', SpatiePermission::class);

        return $this->hasMany($model);
    }
}
