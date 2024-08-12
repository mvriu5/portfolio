"use client";

import React, {HTMLAttributes} from "react";
import {motion} from "framer-motion";


export const AboutView: React.FC<HTMLAttributes<HTMLDivElement>> = ({}) => {

    return (
        <motion.div
            initial={{opacity: 0, filter: 'blur(10px)', y: 50}}
            animate={{opacity: 1, filter: 'blur(0px)', y: 0}}
            transition={{duration: 0.65}}
            className="flex md:flex-row md:space-x-16 md:space-y-0 flex-col space-y-8 justify-between"
        >
            <p className={"text-zinc-800 text-sm max-w-[70%] leading-8 text-pretty"}>
                Hello! My name is Marius, and I am a dedicated software developer with a passion for creating innovative and efficient solutions. With a strong foundation in Java and C#, I have developed a keen ability to turn complex problems into streamlined, user-friendly applications. Currently, I am pursuing my bachelor's degree, with an expected graduation in 2026. In my free time, I have recently delved into frontend programming with TypeScript, Next.js, and Tailwind CSS.
            </p>
        </motion.div>
    );
}