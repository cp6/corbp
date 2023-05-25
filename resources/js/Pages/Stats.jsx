import MainLayout from "@/Layouts/MainLayout";
import {usePage} from "@inertiajs/react";

export default function Dashboard(props) {

    const auth = usePage().props.auth;

    return (
        <MainLayout auth={auth} title={'Stats'} header={'Stats'}>
            <pre>{JSON.stringify(props.stats, null, 2)}</pre>
        </MainLayout>
    );
}
