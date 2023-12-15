<template>
    <div>
        <template v-if="groups && groups.length">
            <div v-for="group in groups" class="mb-4">
                <h4 class="mb-2 text-sm font-bold">{{ group.name }}</h4>
                <ul class="p-2 bg-gray-100 rounded-md">
                    <li v-for="permission in group.permissions" class="mb-2">
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
            </div>
        </template>

        <template v-if="permissions && permissions.length">
            <h4 class="mb-2 text-sm font-bold">Overig</h4>
            <ul class="p-2 bg-gray-100 rounded-md">
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
    </div>
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

    const permissions = computed(<Array>() =>  {
        return usePage().props.permissions.permissions.filter(p => !p.permission_group_id)
    })

    const groups = computed(<Array>() => {
        return usePage().props.permissions.groups
    })
</script>
