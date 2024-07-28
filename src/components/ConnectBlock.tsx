"use client";

import React, {HTMLAttributes, ReactNode} from "react";

interface ProjectBlockProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    icon: ReactNode;
    onClick?: () => void;
}

export const ConnectBlock: React.FC<ProjectBlockProps> = ({ title, icon, onClick, className, ...props }) => {
    return (
        <div className={"w-max flex flex-row items-center space-x-4 rounded-lg hover:bg-zinc-100 p-2 pr-12 cursor-pointer"}
             onClick={onClick}
        >
            {icon}
            <span className={"text-sm text-zinc-800"}>{title}</span>
        </div>
    );
}