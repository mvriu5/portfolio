"use client";

import React, {HTMLAttributes, useState} from "react";
import {ProjectBlock} from "@/components/ProjectBlock";
import {AnimateSharedLayout, motion} from "framer-motion";

export const ProjectView: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<string | null>(null);

    const handleSelect = (title: string) => {
        setSelectedProject(title);
    };

    const projects = [
        { title: "Project 1", description: "this is a project description", job: "Backend" },
        { title: "Project 2", description: "this is a bigger project description", job: "Frontend" },
        { title: "Project 3", description: "description", job: "Design" }
    ];

    return (
            <div className={"space-y-2"}>
                {projects.map((project) => (
                    <motion.div
                        key={project.title}
                        layout
                        className="project-container"
                    >
                        <ProjectBlock
                            title={project.title}
                            description={project.description}
                            job={project.job}
                            className={selectedProject === project.title ? 'selected' : ''}
                            onClick={() => handleSelect(project.title)}
                        />
                        {selectedProject === project.title && (
                            <motion.div
                                className="highlight"
                                layoutId="highlight"
                                initial={false}
                                transition={{ duration: 0.5 }}
                            />
                        )}
                    </motion.div>
                ))}
            </div>
    );
};