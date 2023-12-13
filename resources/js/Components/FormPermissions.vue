<template>
    <ul>
        <li v-for="permission in permissions" class="mb-2">
            <label>
                <input
                    v-model="proxyValue"
                    :value="permission.id"
                    type="checkbox"
                    class="rounded border-gray-300 mr-2 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                {{ permission.label }} <span class="text-sm text-gray-500">({{ permission.name }})</span>
            </label>
        </li>
    </ul>
</template>

<script setup>
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
        get() {
            return props.modelValue
        },
        set(value) {
            emit('update:modelValue', value)
        }
    })

    const permissions = computed(() => {
        return usePage().props.permissions.permissions
    })
</script>
