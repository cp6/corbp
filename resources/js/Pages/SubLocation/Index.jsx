import MainLayout from "@/Layouts/MainLayout";
import Card from "@/Components/Card";
import Pagination from "@/Components/Pagination";
import CreateButton from "@/Components/CreateButton";

export default function Index(props) {
    return (
        <MainLayout auth={props.auth} title={'Sub locations'} header={'Sub locations'}>
            <div className="max-w-7xl mx-auto sm:px-4 lg:px-2 space-y-6">
                {
                    (() => {
                        if (props.auth.user !== null) {
                            return (<CreateButton text={'Add a sub location'} link={route('sub-location.create')}/>);
                        }
                    })()
                }
                <div className="grid gap-2 grid-cols-2 sm:grid-cols-4 sm:gap-4">
                    {props.sub_locations.data.map(location =>
                        <a key={location.id} href={route('sub-location.show', location.slug)}>
                            <Card>
                                <h1 className={'font-semibold text-gray-800 dark:text-white'}>{location.name} <span
                                    className={'font-light text-gray-500 dark:text-gray-400'}>{location.location.name}</span>
                                </h1>
                                <h3 className={'text-gray-700 dark:text-gray-300'}>{location.state}</h3>
                            </Card>
                        </a>
                    )}
                </div>
                <div className="grid grid-cols-2">
                    <Pagination data={props.sub_locations}/>
                </div>
            </div>
        </MainLayout>
    );
}
