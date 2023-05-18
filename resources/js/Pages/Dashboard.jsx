import MainLayout from "@/Layouts/MainLayout";
import {usePage} from "@inertiajs/react";
import Card from "@/Components/Card";
import {asset} from "@/Helpers";
import LocationCard from "@/Components/LocationCard";

export default function Dashboard(props) {

    const auth = usePage().props.auth;

    return (
        <MainLayout auth={auth} title={'Home'} header={'corbp'}>
            <div className={'grid md:grid-cols-12'}>
                <div className={'col-span-12'}>
                    <h1 className={'text-md md:text-lg text-gray-900 dark:text-gray-100'}>{props.count} Images uploaded</h1>
                    <h1 className={'text-lg md:text-xl text-gray-900 dark:text-gray-100 mt-3 mb-2'}>Most recent uploads</h1>
                    <div className="grid gap-2 grid-cols-12 sm:gap-4">
                        {props.latest.map(media =>
                            <div key={media.id} className={'col-span-6 md:col-span-3'}>
                                <a href={route('media.show', media.id)}><img src={asset(media.directory.name, media.id, media.extension, 'SMALL')} alt={media.title_desc.title + ' image'} title={'view ' + media.title_desc.title} className="rounded-md"/></a>
                            </div>
                        )}
                    </div>
                    <h1 className={'text-lg md:text-xl text-gray-900 dark:text-gray-100 mt-4'}>Random locations</h1>
                    <div className="grid gap-2 grid-cols-12 sm:gap-4">
                        {props.random.locations.map(location =>
                            <div key={location.id} className={'col-span-6 md:col-span-3 mt-2'}>
                                <a href={route('locations.show', location.slug)} className={'text-gray-800 dark:text-gray-200'}><LocationCard>{location.name}
                                    {(() => {
                                        if (location.random_image !== null) {
                                            return (
                                                <img src={asset(location.random_image.directory.name, location.random_image.id, location.random_image.extension, 'SMALL')} alt={'Image for ' + location.name} title={'View images for ' + location.name} className="rounded-b-md mt-2 object-cover"/>
                                            )
                                        }
                                    })()}
                                </LocationCard></a>
                            </div>
                        )}
                    </div>
                    <h1 className={'text-lg md:text-xl text-gray-900 dark:text-gray-100 mt-4'}>Random devices</h1>
                    <div className="grid gap-2 grid-cols-12 sm:gap-4">
                        {props.random.devices.map(device =>
                            <div key={device.id} className={'col-span-6 md:col-span-3 mt-2'}>
                                <a href={route('device.show', device.slug)} className={'text-gray-800 dark:text-gray-200'}><Card>{device.name}</Card></a>
                            </div>
                        )}
                    </div>
                    <h1 className={'text-lg md:text-xl text-gray-900 dark:text-gray-100 mt-4'}>Random tags</h1>
                    <div className="grid gap-2 grid-cols-12 sm:gap-4">
                        {props.random.tags.map(tag =>
                            <div key={tag.id} className={'col-span-6 md:col-span-3 mt-2'}>
                                <a href={route('tag.show', tag.slug)} className={'text-gray-800 dark:text-gray-200'}><Card>{tag.name}</Card></a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
