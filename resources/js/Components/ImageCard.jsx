export default function ImageCard({children, classname = ''}) {
    return (
        <div className={'rounded-md shadow-sm bg-gray-100 dark:bg-slate-700 pb-2 md:pb-3 ' + classname}>
            {children}
        </div>
    );
}
