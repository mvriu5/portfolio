"use client";

import React, {HTMLAttributes} from "react";
import {ConnectBlock} from "@/components/ConnectBlock";
import {Github, Linkedin, Twitter} from "lucide-react";
import { motion } from "framer-motion";


export const ConnectView: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {

    const connections = [
        {name: "Github", icon: <Github className={"text-zinc-800"} size={14}/>, link: "https://github.com/mvriu5"},
        {name: "Twitter", icon: <Twitter className={"text-zinc-800"} size={14}/>, link: "https://x.com/mvriu5"},
        {name: "LinkedIn", icon: <Linkedin className={"text-zinc-800"} size={14}/>, link: "https://www.linkedin.com/in/marius-ahsmus-991135209"}
    ]


    return (
        <motion.div
            initial={{opacity: 0, filter: 'blur(10px)', y: 100}}
            animate={{opacity: 1, filter: 'blur(0px)', y: 0}}
            transition={{duration: 1}}
            className={"space-y-2"}
        >
            {connections.map((conn) => (
                <ConnectBlock
                    key={conn.name}
                    title={conn.name}
                    icon={conn.icon}
                    onClick={() => window.location.href = conn.link}
                />
            ))}
        </motion.div>
    );
}