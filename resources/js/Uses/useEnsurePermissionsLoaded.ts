import {onMounted} from "vue";
import {router, usePage} from "@inertiajs/vue3";

let pending = false;

export default function useEnsurePermissionsLoaded() {
    onMounted(() => {
        const props = usePage().props;

        if (props.permissions !== undefined || pending) {
            return;
        }

        pending = true;
        router.reload({
            only: ['permissions'],
            onFinish: () => {
                pending = false;
            },
        });
    });
}
