export interface PermissionItem {
    id: number;
    name: string;
    label: string | null;
    permission_group_id: number | null;
}

export interface PermissionGroupItem {
    id: number;
    name: string;
    permissions: PermissionItem[];
}

export interface RoleItem {
    id: number;
    name: string;
    code: string | null;
}

/**
 * Shape of the `permissions` prop the service provider shares as an optional
 * Inertia prop (the full catalogue, loaded on demand).
 */
export interface PermissionCatalogue {
    permissions?: PermissionItem[];
    groups?: PermissionGroupItem[];
    roles?: RoleItem[];
}
