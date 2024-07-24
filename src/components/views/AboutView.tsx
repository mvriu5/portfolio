"use client";

import React, {HTMLAttributes} from "react";
import {SkillBadge} from "@/components/SkillBadge";


export const AboutView: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {

    return (
        <div className={"flex flex-row space-x-16 justify-between"}>
            <p className={"text-zinc-800 text-sm max-w-[70%] leading-8 text-pretty"}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,
            </p>

            <div className={"flex flex-col space-y-2"}>
                <SkillBadge title={"Java"} points={"87"}/>
                <SkillBadge title={"Typescript"} points={"53"}/>
                <SkillBadge title={"React"} points={"60"}/>
                <SkillBadge title={"Python"} points={"95"}/>
            </div>
        </div>
    );
}