"use client";

import {useRouter} from "next/navigation";
import React, {HTMLAttributes} from "react";

interface ProjectBlockProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    description: string;
    job: string;
    route?: string;
}

export const ProjectBlock: React.FC<ProjectBlockProps> = ({ title, description, job, route, className, ...props }) => {
    const router = useRouter();

    return (
        <div className={"w-max flex flex-col space-y-0.5 rounded-lg hover:bg-zinc-100 p-2 pr-12 cursor-pointer"}>
            <span className={"text-sm font-medium text-zinc-800"}>{title}</span>
            <span className={"text-xs font-normal text-zinc-600"}>{description + " • " + job}</span>
        </div>
    );
}