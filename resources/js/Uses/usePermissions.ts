import {usePage} from "@inertiajs/vue3";

export default function usePermissions() {
    const permissions = usePage().props.user_permissions;

    const can = function <Boolean>(value) {
        let _return = false;
        if (!Array.isArray(permissions.permissions)) {
            return false;
        }
        if (value.includes('|')) {
            value.split('|').forEach(function (item) {
                if (permissions.permissions.includes(item.trim())) {
                    _return = true;
                }
            });
        } else if (value.includes('&')) {
            _return = true;
            value.split('&').forEach(function (item) {
                if (!permissions.permissions.includes(item.trim())) {
                    _return = false;
                }
            });
        } else {
            _return = permissions.permissions.includes(value.trim());
        }
        return _return;
    }

    const is = function <Boolean>(value) {
        let _return = false;

        if (!Array.isArray(permissions.roles)) {
            return false;
        }
        if (value.includes('|')) {
            value.split('|').forEach(function (item) {
                if (permissions.roles.includes(item.trim())) {
                    _return = true;
                }
            });
        } else if (value.includes('&')) {
            _return = true;
            value.split('&').forEach(function (item) {
                if (!permissions.roles.includes(item.trim())) {
                    _return = false;
                }
            });
        } else {
            _return = permissions.roles.includes(value.trim());
        }
        return _return;
    }

    return {
        roles: permissions.roles,
        permissions: permissions.permissions,
        can,
        is
    }
}
