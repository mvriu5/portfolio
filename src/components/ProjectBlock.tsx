"use client";

import {motion} from "framer-motion";
import React from "react";
import {ChevronRight} from "lucide-react";

interface ProjectBlockProps {
    title: string;
    description: string;
    job: string;
    className?: string;
    onClick?: () => void;
}

export const ProjectBlock: React.FC<ProjectBlockProps> = ({ title, description, job, className, onClick }) => {

    return (
        <motion.div
            className={`group w-max flex flex-row justify-between items-center space-x-12 rounded-lg p-2 cursor-pointer font-medium ${className}`}
            onClick={onClick}
            initial={{background: "transparent", y: 0}}
            whileHover={{background: "rgba(0, 0, 0, 0.1)", y: -5}}
            transition={{duration: 0.3}}
        >
            <div className={"flex flex-col font-medium"}>
                <span className={"text-sm text-zinc-800"}>{title}</span>
                <span className={"text-xs text-zinc-500"}>{description + " • " + job}</span>
            </div>
            <ChevronRight className={"invisible group-hover:visible text-zinc-500"}/>
        </motion.div>
    );
};