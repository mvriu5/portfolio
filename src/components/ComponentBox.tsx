"use client";

import React, {HTMLAttributes, ReactNode} from "react";

interface ComponentBoxProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    component: ReactNode;
}

export const ComponentBox: React.FC<ComponentBoxProps> = ({ title, component, className, ...props }) => {
    return (
        <div className={"flex flex-col space-y-2 pb-32"}>
            <div className={"bg-zinc-100 rounded-lg w-96 h-96"}>

            </div>
            <span className={"text-zinc-500 text-xs font-medium"}>{title}</span>
        </div>
    );
}