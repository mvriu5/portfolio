"use client";

import React, {HTMLAttributes} from "react";

interface SkillBadgeProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    points: string;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ title, points, className, ...props }) => {
    return (
        <div className={"group w-full flex flex-row space-x-12 rounded-lg hover:bg-zinc-100 p-2 cursor-pointer justify-between"}>
            <span className={"text-sm font-medium text-zinc-700"}>{title}</span>
            <span className={"text-xs text-zinc-500"}>{points + "/100"}</span>
        </div>
    );
}