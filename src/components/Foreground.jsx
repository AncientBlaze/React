/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */

import { useRef } from "react";
import Card from "./Card";

function Foreground() {
    const ref = useRef(null);
    const data = [{
        desc: "This is magic.",
        filesize: "0.9mb",
        close: false,
        tag: {
            isOpen: true,
            tagTitle: "Download Now",
            tagColor: "green"
        }
    },
    {
        desc: "This is magic.",
        filesize: "0.9mb",
        close: false,
        tag: {
            isOpen: true,
            tagTitle: "Check this out",
            tagColor: "blue"
        }
    },
    {
        desc: "This is magic.",
        filesize: "0.9mb",
        close: false,
        tag: {
            isOpen: true,
            tagTitle: "Click here",
            tagColor: "red"
        }
    },
    {
        desc: "This file is corrupted",
        filesize: "0.9mb",
        close: false,
        tag: {
            isOpen: true,
            tagTitle: "Click Me?",
            tagColor: "amber"
        }
    }
    ];
    return (
        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5'>
            {data.map((item, _index) =>
                (<Card data={item} reference = {ref} />)
            )}
        </div>
    )
}

export default Foreground;