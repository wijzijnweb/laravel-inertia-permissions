# Implementing Spatie's Permissions package into Inertia Laravel project.

Easy to use package to implement Spatie's Permissions package into Inertia Laravel project. The package also includes 
a Vue components to display and edit the roles of the current user and to manage roles and permissions.

## Installation

You can install the package via composer:

```bash
composer require wijzijnweb/laravel-inertia-permissions
```

You can publish and run the migrations with

```bash
php artisan migrate
```

Add the following to your vite.config.js file
    
```js
resolve: {
    alias: {
        '@laravel-inertia-permissions': 'vendor/wijzijnweb/laravel-inertia-permissions/resources/js'
    }
}
```

Optionally, you can add the following to your jsconfig.json file:
```json
{
    "compilerOptions": {
        "paths": {
            "@laravel-inertia-permissions/*": ["./vendor/wijzijnweb/laravel-inertia-permissions/resources/js/*"]
        }
    }
}
```

[//]: # (Optionally, you can publish the views using)

[//]: # ()
[//]: # (```bash)

[//]: # (php artisan vendor:publish --tag=":package_slug-views")

[//]: # (```)

## Usage

Permissions and Roles are automatically Shared with Inertia. 
You can access them in your Vue components like this:

```js
import usePermissions from '@laravel-inertia-permissions/Uses/usePermissions.js';

const { can, is } = usePermissions()

if (can('edit articles')) {
    // do something
}

if (is('writer')) {
    // do something
}
```

```js
import FormRoles from '@laravel-inertia-permissions/Components/FormRoles.vue';
import FormPermissions from '@laravel-inertia-permissions/Components/FormPermissions.vue';

<FormRoles v-model="form.roles" />
<FormPermissions v-model="form.permissions" />
```

You can also use the directives to hide specific elements. To that you need to register the directives in your app.js file:
```js
import {
    hasRoleDirective,
    hasPermissionDirective
} from '@laravel-inertia-permissions/Directives/permissionDirective.js';

createApp({render: () => h(App, props)})
    .directive('hasRole', hasRoleDirective)
    .directive('hasPermission', hasPermissionDirective)
```

After that you can use the directives in your Vue components:
You can use the pipe symbol and the ampersand to check for multiple roles or permissions:

```js
 <MyComponent v-has-role="'admin|writer'" />
 <MyComponent v-has-permission="'edit articles&delete articles'" />
```

There is also a component to prevent the user from seeing something with a feedback message:

```js
import HasPermission from '@laravel-inertia-permissions/Components/HasPermission.vue';

<HasPermission permission="edit articles" role="writer">
    <p>You can edit articles</p>
</HasPermission>
```


## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Credits

- [Wij zijn WEB](https://github.com/wijzijnweb)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
