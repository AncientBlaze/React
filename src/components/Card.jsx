/* eslint-disable react/prop-types */

import { CgClose } from "react-icons/cg";
import { FaRegFileAlt, } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import PropTypes from 'prop-types'
import { motion } from "framer-motion"


function Card({ data, reference }) {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.2 }} dragElastic={1.2} whileHover={{ scale: 1.2, transition: { duration: 0.1 } }} dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }} className="hover:cursor-pointer relative w-60 h-72 bg-zinc-900/90 rounded-[30px] text-white py-10 px-8 overflow-hidden z-[4]">
            <FaRegFileAlt />
            <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
            <div className="footer absolute bottom-0 w-full left-0">
                <div className="flex items-center justify-between py-3 px-8 mb-5">
                    <h5>{data.filesize}</h5>
                    <span className="hover:bg-zinc-500 w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
                        {data.close ? <CgClose /> : <LuDownload />}
                    </span>
                </div>
                {
                    data.tag.isOpen == true && (
                        <div className={`tag w-full py-4 bg-${data.tag.tagColor}-600 flex items-center justify-center`}>
                            <h3 className="text-sm font-semibold ">
                                {data.tag.tagTitle}
                            </h3>
                        </div>
                    ) // if true
                }
            </div>
        </motion.div>
    )
}
Card.propTypes = {
    data: PropTypes.object.isRequired,
}

export default Card;
