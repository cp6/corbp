export default function LocationCard({children, classname = ''}) {
    return (
        <div className={'w-full overflow-hidden text-center rounded-md shadow-sm bg-gray-100 dark:bg-slate-700 pt-2 ' + classname}>
            {children}
        </div>
    );
}
