import {HiCog} from "react-icons/hi/index.js";

export default function ExifLine({exif}) {
    {
        if (exif !== null) {
            return (
                <p className={'text-gray-700 dark:text-gray-300 mr-2'}>
                    <HiCog
                        className={'h-5 w-5 mr-1 mb-1 inline text-gray-400'}/>{exif.f_stop_raw} {exif.focal_length}mm {exif.shutter_speed_raw} ISO {exif.iso}
                </p>
            )
        }
    }
}
