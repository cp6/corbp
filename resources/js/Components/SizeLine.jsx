import {numberFormat} from "@/Helpers";
import {HiCubeTransparent} from "react-icons/hi/index.js";


export default function SizeLine({size}) {
    {
        return (
            <p className={'text-gray-700 dark:text-gray-300 mr-2'}>
                <HiCubeTransparent
                    className={'h-5 w-5 mr-1 mb-1 inline text-gray-400'}/>{size.width}<span className='text-sm px-0.5'>x</span>{size.height} {numberFormat(size.size / 1000 / 1000)}<span className='text-sm px-0.5'>MB</span>
            </p>
        )
    }
}
