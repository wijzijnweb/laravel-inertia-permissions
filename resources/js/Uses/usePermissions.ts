import { usePage } from '@inertiajs/vue3';

export interface UserPermissions {
    permissions?: string[];
    roles?: string[];
}

export interface UsePermissions {
    roles: string[];
    permissions: string[];
    can: (value: string) => boolean;
    is: (value: string) => boolean;
}

/**
 * Match a `a|b` (any of) or `a&b` (all of) expression against a list.
 * A plain value without a separator is a single exact match.
 */
function matches(haystack: unknown, value: string): boolean {
    if (!Array.isArray(haystack)) {
        return false;
    }

    const list = haystack as string[];

    if (value.includes('|')) {
        return value.split('|').some((item) => list.includes(item.trim()));
    }

    if (value.includes('&')) {
        return value.split('&').every((item) => list.includes(item.trim()));
    }

    return list.includes(value.trim());
}

export default function usePermissions(): UsePermissions {
    const shared = (usePage().props.user_permissions ?? {}) as UserPermissions;

    return {
        roles: shared.roles ?? [],
        permissions: shared.permissions ?? [],
        can: (value: string) => matches(shared.permissions, value),
        is: (value: string) => matches(shared.roles, value),
    };
}
