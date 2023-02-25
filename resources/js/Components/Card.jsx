export default function Card({children, classname = ''}) {
    return (
        <div className={'w-full overflow-hidden rounded-md shadow-sm bg-slate-100 dark:bg-slate-700 p-2 md:p-3' + classname}>
            {children}
        </div>
    );
}
