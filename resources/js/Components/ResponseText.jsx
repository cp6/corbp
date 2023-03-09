import {Transition} from "@headlessui/react";

export default function ResponseText({recentlySuccessful, response}) {
    return (
        <Transition
            show={recentlySuccessful}
            duration={5}
            enterFrom="opacity-0"
            leaveTo="opacity-0"
            className="transition ease-in-out duration-1000">
            <p className=
                   {
                       (() => {
                           if (response !== null) {
                               if (response.type === 'success') {
                                   return ("text-sm text-green-500");
                               } else {
                                   return ("text-sm text-red-500");
                               }
                           }
                       })()
                   }
            >{(response === null) ? null : response.message}</p>
        </Transition>
    );
}
