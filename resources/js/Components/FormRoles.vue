<template>
    <ul>
        <li v-for="role in roles" class="mb-2">
            <label>
                <input
                    v-model="proxyValue"
                    :value="role.id"
                    class="rounded border-gray-300 mr-2 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    type="checkbox">
                {{ role.name }}
            </label>
        </li>
    </ul>
</template>

<script setup lang="ts">
    import {computed} from "vue";
    import {usePage} from "@inertiajs/vue3";

    const emit = defineEmits(['update:modelValue'])
    const props = defineProps({
        modelValue: {
            type: Array,
            default: () => [],
        },
    })

    const proxyValue = computed({
        get<Array>() {
            return props.modelValue
        },
        set(value) {
            emit('update:modelValue', value)
        }
    })

    const roles = computed(<Array>() => {
        return usePage().props.permissions.roles
    })
</script>
