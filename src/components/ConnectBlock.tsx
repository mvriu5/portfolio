"use client";

import {useRouter} from "next/navigation";
import React, {HTMLAttributes, ReactNode} from "react";

interface ProjectBlockProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    icon: ReactNode;
    route?: string;
}

export const ConnectBlock: React.FC<ProjectBlockProps> = ({ title, icon, route, className, ...props }) => {
    const router = useRouter();

    return (
        <div className={"w-max flex flex-row items-center space-x-2 rounded-lg hover:bg-zinc-100 p-2 pr-12 cursor-pointer"}
             onClick={() => router.push(route ?? "")}
        >
            {icon}
            <span className={"text-sm text-zinc-800"}>{title}</span>
        </div>
    );
}