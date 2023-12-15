<?php

namespace Wijzijnweb\LaravelInertiaPermissions\App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class PermissionGroup extends Model
{
    protected $fillable = [
        'name',
    ];

    public function permissions(): HasMany
    {
        $model = config('permission.models.permission');

        return $this->hasMany($model);
    }
}
