import {HiCalendar} from "react-icons/hi";
import {format} from "date-fns";

export default function DateLine({date}) {
    {
        if (date !== null) {
            return (
                <p className={'text-gray-700 dark:text-gray-300 mr-2'}><HiCalendar className={'h-5 w-5 mr-1 mb-1 inline text-gray-400'}/>{format(new Date(date), 'do LLLL yyyy hh:mm:ss a ')}</p>
            )
        }
    }
}
