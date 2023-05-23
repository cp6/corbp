import {HiCamera} from "react-icons/hi";

export default function DeviceLine({device}) {
    {
        if (device !== null) {
            return (
                <p className={'text-gray-700 dark:text-gray-300'}><HiCamera
                    className={'h-5 w-5 mr-1 mb-1 inline text-gray-400'}/>{device.device.name} with {device.lens.name}
                </p>
            )
        }
    }
}
