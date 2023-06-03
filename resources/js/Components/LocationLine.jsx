import {HiGlobe} from "react-icons/hi/index.js";

export default function LocationLine({data}) {
    {
        const location_text = (data.location !== null) ?
            <a href={route('locations.show', data.location.slug)}>{data.location.name}</a> : '';
        const sub_location_text = (data.sub_location !== null) ?
            <span>, <a href={route('locations.show', data.sub_location_id)}>{data.sub_location.name}</a></span> : null;

        return (
            <p className={'text-gray-700 dark:text-gray-300'}><HiGlobe
                className={'h-5 w-5 mr-1 mb-1 inline text-gray-400'}/>{location_text} {sub_location_text}
            </p>
        )

    }
}
