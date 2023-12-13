# Implementing Spatie's Permissions package into Inertia Laravel project.

Easy to use package to implement Spatie's Permissions package into Inertia Laravel project. The package also includes 
a Vue components to display and edit the roles of the current user and to manage roles and permissions.

## Installation

You can install the package via composer:

```bash
composer require wijzijnweb/laravel-inertia-permissions
```

You can publish and run the migrations with:

```bash
php artisan vendor:publish --tag="laravel-inertia-permissions-migrations"
php artisan migrate
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
const { can, is } = usePermissions()

if (can('edit articles')) {
    // do something
}

if (is('writer')) {
    // do something
}
```

```js
<FormRoles v-model="form.roles" />
<FormPermissions v-model="form.permissions" />
```

There is also a component to prevent the user from seeing something with a feedback message:

```js
<HasPermission permission="edit articles" role="writer">
    <p>You can edit articles</p>
</HasPermission>
```


## Changelog

v1.0.0 - Initial release
- Added Vue components to manage roles and permissions

## Credits

- [Wij zijn WEB](https://github.com/wijzijnweb)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
