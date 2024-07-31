"use client";

import React, {HTMLAttributes, useState} from "react";
import {SkillBadge} from "@/components/SkillBadge";
import { motion } from "framer-motion";


export const AboutView: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
    const [hovered, setHovered] = useState<string |null>(null);

    const skills = [
        { title: "Java", points: "87" },
        { title: "Typescript", points: "53" },
        { title: "React", points: "60" },
        { title: "Python", points: "95" }
    ];

    return (
        <motion.div
            initial={{opacity: 0, filter: 'blur(10px)', y: 50}}
            animate={{opacity: 1, filter: 'blur(0px)', y: 0}}
            transition={{duration: 0.65}}
            className="flex md:flex-row md:space-x-16 flex-col space-y-8 justify-between"
        >
            <p className={"text-zinc-800 text-sm max-w-[70%] leading-8 text-pretty"}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum
                dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent
                luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,
            </p>

            <div className="w-max flex flex-col space-y-2">
                {skills.map((skill) => (
                    <SkillBadge
                        key={skill.title}
                        title={skill.title}
                        points={skill.points}
                        onMouseEnter={() => setHovered(skill.title)}
                        onMouseLeave={() => setHovered(null)}
                    />
                ))}
            </div>
        </motion.div>
    );
}