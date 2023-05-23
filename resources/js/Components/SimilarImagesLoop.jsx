import {asset} from "@/Helpers";

export default function SimilarImagesLoop({current_id, similar}) {
    {
        let loop_count = 0;

        return (
            <div className="grid gap-2 grid-cols-12 sm:gap-4">
                {similar.map((media) => {
                    if (loop_count <= 4 && media.id !== current_id) {
                        loop_count++;
                        return (
                            <div key={media.id} className={'col-span-6 md:col-span-3'}>
                                <a href={route('media.show', media.id)}><img
                                    src={asset(media.directory.name, media.id, media.extension, 'SMALL')}
                                    alt={media.title_desc.title + ' image'} title={'view ' + media.title_desc.title}
                                    className="rounded-md"/></a>
                            </div>
                        )
                    }
                })}
            </div>
        );
    }
}
