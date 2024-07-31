"use client";

import React, {HTMLAttributes, useState} from "react";
import {ProjectBlock} from "@/components/ProjectBlock";
import {AnimateSharedLayout, motion} from "framer-motion";
import Image from "next/image";

export const ProjectView: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<number | null>(null);

    const projects = [
        { key: 1, title: "fluer.app", description: "All-in-one solution for your workflow", job: "Frontend & Design", link: null},
        { key: 2, title: "Griller ✦", description: "A React toast component", job: "Frontend & Design", link: "https://griller.ahsmus.com"},
        { key: 3, title: "Project Title", description: "Project description", job: "Backend", link: null}
    ];

    return (
        <motion.div
            initial={{opacity: 0, filter: 'blur(10px)', y: 50}}
            animate={{opacity: 1, filter: 'blur(0px)', y: 0}}
            transition={{duration: 0.65}}
            className={"flex flex-row justify-between"}
        >
            <div className={"space-y-2"}>
                {projects.map((project) => (
                    <ProjectBlock
                        key={project.key}
                        title={project.title}
                        description={project.description}
                        job={project.job}
                        className={selectedProject === project.key ? 'selected' : ''}
                        onClick={() => {
                            if (project.link) window.location.href = project.link;
                        }}
                        onMouseEnter={() => setSelectedProject(project.key)}
                        onMouseLeave={() => setSelectedProject(null)}
                    />
                ))}
            </div>

            <div className={"hidden lg:block"}>
                {selectedProject === 1 &&
                    <motion.img
                        src="/fleur.png"
                        alt="Thumbnail"
                        width="700"
                        height="394"
                        initial={{scale: 0.9, opacity: 0}}
                        animate={{scale: 1, opacity: 1}}
                        transition={{duration: 0.5}}
                        className={"block m-0 auto rounded-lg"}
                    />
                }
            </div>

        </motion.div>

    );
};