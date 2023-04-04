import MainLayout from "@/Layouts/MainLayout";
import Card from "@/Components/Card";
import Pagination from "@/Components/Pagination";
import CreateButton from "@/Components/CreateButton";

export default function Index(props) {
    return (
        <MainLayout auth={props.auth} title={'Locations'} header={'Locations'}>
            <div className="max-w-7xl mx-auto sm:px-4 lg:px-2 space-y-6">
                {
                    (() => {
                        if (props.auth.user !== null) {
                            return (<CreateButton text={'Add a location'} link={route('locations.create')}/>);
                        }
                    })()
                }
                <div className="grid gap-2 grid-cols-2 sm:grid-cols-4 sm:gap-4">
                    {props.locations.data.map(location =>
                        <a key={location.id} href={route('locations.show', location.slug)}>
                            <Card>
                                <h1 className={'font-semibold text-gray-800 dark:text-white'}>{location.name} <span
                                    className={'font-light text-gray-500 dark:text-gray-400'}>{location.media_count}</span>
                                </h1>
                                <h3 className={'text-gray-700 dark:text-gray-300'}>{location.state}</h3>
                            </Card>
                        </a>
                    )}
                </div>
                <div className="grid grid-cols-2">
                    <Pagination data={props.locations}/>
                </div>
            </div>
        </MainLayout>
    );
}
