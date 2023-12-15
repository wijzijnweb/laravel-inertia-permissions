import usePermissions from "../Uses/usePermissions.ts";

export function hasPermissionDirective(el, binding) {
    const { can } = usePermissions()
    el.hidden = can(binding.value) === false
}

export function hasRoleDirective(el, binding) {
    const { is } = usePermissions()
    el.hidden = is(binding.value) === false
}
