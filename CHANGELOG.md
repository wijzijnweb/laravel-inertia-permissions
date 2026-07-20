# Changelog

All notable changes to `wijzijnweb/laravel-inertia-permissions` will be documented in this file.

## v1.1.0 - 2026-07-20

- **Breaking:** the `permissions` Inertia prop (groups/permissions/roles) is no longer shared eagerly on every response. It's now wrapped in `Inertia::optional()` and only fetched when a page actually requests it. `FormPermissions` and `FormRoles` request it themselves on mount via a partial reload; if you read `usePage().props.permissions` directly elsewhere, you'll need to trigger your own partial reload for it (`router.reload({ only: ['permissions'] })`).
- Guests (unauthenticated visitors) no longer receive the `permissions` prop at all, instead of the full permission/role/group catalog.
- Permission, Role, and PermissionGroup lookups now resolve through `config('permission.models.*')` instead of hardcoding Spatie's base classes, so apps with custom models are respected consistently.
- Added a `down()` to the `add_permission_group_id_to_permissions_table` migration so it can be rolled back.
- Requires `inertiajs/inertia-laravel: ^2.0|^3.0` (needed for `Inertia::optional()`); this narrows supported Laravel versions to 10+ for consumers relying on the lazy permissions share.

## v1.0.4 - 2024-01-17

Disabled by permission or role

## Fix get roles by code - 2023-12-15

- Get role codes directly from user relation

## v1.0.1 - 2023-12-15

- Added permissions groups
- Refactored to TypeScript

## v1.0.0 - 2023-12-14

Initial release
