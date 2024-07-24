"use client";

import React, {HTMLAttributes, useState} from "react";
import {ChartConfig} from "@/components/ui/chart";

interface SkillBadgeProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    points: string;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ title, points, className, ...props }) => {
    const [hovered, setHovered] = useState(false);

    const chartData = [
        { skill: title, visitors: 200, fill: "var(--color-safari)" },
    ]
    const chartConfig = {
        visitors: {
            label: "Visitors",
        },
        safari: {
            label: "Safari",
            color: "hsl(var(--chart-2))",
        },
    } satisfies ChartConfig

    return (
        <div className={"group w-full flex flex-row space-x-12 rounded-lg hover:bg-zinc-100 p-2 cursor-pointer justify-between"}
             onMouseEnter={() => setHovered(true)}
             onMouseLeave={() => setHovered(false)}
        >
            <span className={"text-sm font-medium text-zinc-800"}>{title}</span>
            <span className={"text-xs text-zinc-800"}>{points + "/100"}</span>
        </div>
    );
}