/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { CiSquarePlus } from "react-icons/ci";
import { useRef, useState } from "react";
import Card from "./Card";

const Carddata = {
    desc: "This is magic.",
    filesize: "0.9mb",
    close: false,
    tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
    },
};

function Foreground() {
    const ref = useRef(null);
    const [data, setData] = useState([Carddata]); // Initialize data state

    const handleAddCard = () => {
        setData([...data, Carddata]);
    };

    return (
        <>
            <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5">
                {data.map((item, index) => (
                    <Card key={index} data={item} reference={ref} />
                ))}
                <button
                    className="hover:bg-zinc-600 rounded-full h-20 w-20 flex justify-end items-end absolute bottom-0 right-0"
                    onClick={handleAddCard}
                >
                    <CiSquarePlus className="h-full w-full" color="yellow" />
                </button>
            </div>
        </>
    );
}

export default Foreground;
