import type { DirectiveBinding } from 'vue';
import usePermissions from '../Uses/usePermissions';

export function hasPermissionDirective(el: HTMLElement, binding: DirectiveBinding<string>): void {
    const { can } = usePermissions();
    el.hidden = can(binding.value) === false;
}

export function hasRoleDirective(el: HTMLElement, binding: DirectiveBinding<string>): void {
    const { is } = usePermissions();
    el.hidden = is(binding.value) === false;
}

export function disabledByPermissionDirective(
    el: HTMLElement & { disabled?: boolean },
    binding: DirectiveBinding<string>,
): void {
    const { can } = usePermissions();

    if (can(binding.value) === false) {
        el.disabled = true;
    }
}

export function disabledByRoleDirective(
    el: HTMLElement & { disabled?: boolean },
    binding: DirectiveBinding<string>,
): void {
    const { is } = usePermissions();

    if (is(binding.value) === false) {
        el.disabled = true;
    }
}
