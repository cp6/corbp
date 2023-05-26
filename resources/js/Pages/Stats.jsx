import MainLayout from "@/Layouts/MainLayout";
import {usePage} from "@inertiajs/react";
import StatCard from "@/Components/StatCard";
import {format} from "date-fns";

export default function Dashboard(props) {

    const auth = usePage().props.auth;

    return (
        <MainLayout auth={auth} title={'Stats'} header={'Stats'}>
            <div className={'grid grid-cols-1 md:grid-cols-4 gap-2'}>
                <StatCard text={'Images'} value={props.stats.total}/>
                <StatCard text={'Size MB'} value={props.stats.total_size / 1000 / 1000}/>
                <StatCard text={'Oldest'} value={format(new Date(props.stats.first_upload), 'do LLLL yyyy hh:mm:ss a ')}/>
                <StatCard text={'Newest'} value={format(new Date(props.stats.latest_upload), 'do LLLL yyyy hh:mm:ss a ')}/>
                <StatCard text={'Recent'} value={format(new Date(props.stats.oldest_image), 'do LLLL yyyy hh:mm:ss a ')}/>
                <StatCard text={'First'} value={format(new Date(props.stats.newest_image), 'do LLLL yyyy hh:mm:ss a ')}/>
            </div>
        </MainLayout>
    );
}
