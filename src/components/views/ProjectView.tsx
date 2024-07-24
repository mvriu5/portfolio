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
        { title: "fleur.app", description: "All-in-one solution for your workflow", job: "Frontend & Design" },
        { title: "Components ✦", description: "Library of complex Components", job: "Frontend & Design" },
        { title: "Project 3", description: "description", job: "Design" }
    ];

    return (
            <div className={"space-y-2"}>
                {projects.map((project) => (
                    <ProjectBlock
                        title={project.title}
                        description={project.description}
                        job={project.job}
                        className={selectedProject === project.title ? 'selected' : ''}
                        onClick={() => handleSelect(project.title)}
                    />
                ))}
            </div>
    );
};