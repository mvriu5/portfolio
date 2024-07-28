"use client";

import {motion} from "framer-motion";
import React, {HTMLAttributes} from "react";
import {ChevronRight} from "lucide-react";

interface ProjectBlockProps extends HTMLAttributes<HTMLDivElement>{
    title: string;
    description: string;
    job: string;
    className?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

export const ProjectBlock: React.FC<ProjectBlockProps> = ({ title, description, job, onClick, onMouseEnter, onMouseLeave }) => {

    return (
        <motion.div
            className={"group w-max flex flex-row justify-between items-center space-x-12 rounded-lg p-2 cursor-pointer font-medium"}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            initial={{background: "transparent", y: 0}}
            whileHover={{background: "rgba(244, 244, 245)", y: -5}}
            transition={{duration: 0.3}}
        >
            <div className={"flex flex-col font-medium"}>
                <span className={"text-sm text-zinc-800"}>{title}</span>
                <span className={"text-xs text-zinc-500"}>{description + " • " + job}</span>
            </div>
            <ChevronRight className={"invisible group-hover:visible text-zinc-300"}/>
        </motion.div>
    );
};