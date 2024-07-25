"use client";

import React, {HTMLAttributes, useState} from "react";
import {ProjectBlock} from "@/components/ProjectBlock";
import {AnimateSharedLayout, motion} from "framer-motion";
import Image from "next/image";

export const ProjectView: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<number | null>(null);

    const projects = [
        { key: 1, title: "fleur.app", description: "All-in-one solution for your workflow", job: "Frontend & Design" },
        { key: 2, title: "Components ✦", description: "Library of complex Components", job: "Frontend & Design" },
        { key: 3, title: "Project Title", description: "Project description", job: "Backend" }
    ];

    return (
        <div className={"flex flex-row justify-between"}>
            <div className={"space-y-2"}>
                {projects.map((project) => (
                    <ProjectBlock
                        title={project.title}
                        description={project.description}
                        job={project.job}
                        className={selectedProject === project.key ? 'selected' : ''}
                        onMouseEnter={() => setSelectedProject(project.key)}
                        onMouseLeave={() => setSelectedProject(null)}
                    />
                ))}
            </div>

            <div>
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

        </div>

    );
};