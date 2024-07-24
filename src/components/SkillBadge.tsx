"use client";

import React, {HTMLAttributes} from "react";
import {ChartConfig, ChartContainer} from "@/components/ui/chart";
import {Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart} from "recharts";

interface SkillBadgeProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    points: string;
    skill: string;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ title, points, skill, className, ...props }) => {

    const chartData = [
        { skill: skill, visitors: 200, fill: "var(--color-safari)" },
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
        <div className={"group w-max flex flex-col space-y-4 rounded-lg hover:bg-zinc-100 p-2 pr-12 cursor-pointer"}>
            <div className={"flex flex-row items-center space-x-6"}>
                <span className={"text-sm font-medium text-zinc-800"}>{title}</span>
                <span className={"text-xs text-zinc-800"}>{points + "/100"}</span>
            </div>

            <div className={"invisible group-hover:visible"}>
            <ChartContainer config={chartConfig}>
                <RadialBarChart
                    data={chartData}
                    startAngle={90}
                    endAngle={(360 / 100 * Number(points)) + 90}
                    innerRadius={40}
                    outerRadius={60}
                >
                    <PolarGrid
                        gridType="circle"
                        radialLines={false}
                        stroke="none"
                        polarRadius={[86, 74]}
                    />
                    <RadialBar dataKey="visitors" background/>
                    <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}/>
                </RadialBarChart>
            </ChartContainer>
            </div>
        </div>
    );
}