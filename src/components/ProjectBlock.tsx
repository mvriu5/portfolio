"use client";

import {useRouter} from "next/navigation";
import React, {HTMLAttributes} from "react";

interface ProjectBlockProps {
    title: string;
    description: string;
    job: string;
    className?: string;
    onClick?: () => void;
}

export const ProjectBlock: React.FC<ProjectBlockProps> = ({ title, description, job, className, onClick }) => {

    return (
        <div
            className={`w-max flex flex-col space-y-0.5 rounded-lg hover:bg-zinc-100 p-2 pr-12 cursor-pointer font-medium ${className}`}
            onClick={onClick}
        >
            <span className={"text-sm text-zinc-800"}>{title}</span>
            <span className={"text-xs text-zinc-500"}>{description + " • " + job}</span>
        </div>
    );
};