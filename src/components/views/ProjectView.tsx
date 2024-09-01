"use client";

import React, {HTMLAttributes, useRef, useState} from "react";
import {motion} from "framer-motion";
import {cn} from "@/lib/utils";
import {ChevronRight} from "lucide-react";

export const ProjectView: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<number | null>(null);
    const [position, setPosition] = useState({ left: 0, top: 0, width: 0, opacity: 0 });

    const projects = [
        { key: 1, title: "calla.so", description: "All-in-one solution to upgrade a teams workflow", job: "Frontend & Design", link: null},
        { key: 2, title: "Griller ✦", description: "A React toast component", job: "Frontend & Design", link: "https://griller.ahsmus.com"},
        { key: 3, title: "DocuHive [WIP]", description: "A React component library for building documentation sites", job: "Frontend & Design", link: null}
    ];

    return (
        <motion.div
            initial={{opacity: 0, filter: 'blur(10px)', y: 100}}
            animate={{opacity: 1, filter: 'blur(0px)', y: 0}}
            transition={{duration: 1}}
            className={"flex flex-row justify-between"}
        >
            <div className={"relative flex flex-row items-center"}>
                <div className={"flex flex-col"}
                     onMouseLeave={() => setPosition({ left: position.left, top: position.top, width: position.width, opacity: 0 })}
                >
                    <div className={"flex flex-col space-y-2"}>
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
                                setPosition={setPosition}
                            />
                        ))}
                    </div>
                    <Cursor position={position}/>
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
            </div>
        </motion.div>
    );
};

interface ProjectBlockProps extends HTMLAttributes<HTMLDivElement>{
    title: string;
    description: string;
    job: string;
    className?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    setPosition: React.Dispatch<React.SetStateAction<{ left: number; top: number; width: number; opacity: number }>>;
}

const ProjectBlock: React.FC<ProjectBlockProps> = ({ title, description, job, onClick, setPosition }) => {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <motion.div
            className={"relative z-50 group w-max flex flex-row justify-between items-center space-x-12 rounded-lg px-4 py-2 cursor-pointer font-medium"}
            ref={ref}
            onClick={onClick}
            initial={{opacity: 0, filter: 'blur(10px)', y: -30}}
            animate={{opacity: 1, filter: 'blur(0px)', y: 0}}
            transition={{duration: 1}}
            onMouseEnter={() => {
                if (!ref?.current) return;

                const { width } = ref.current.getBoundingClientRect();

                setPosition({
                    left: ref.current.offsetLeft,
                    top: ref.current.offsetTop,
                    width,
                    opacity: 1,
                });
            }}
        >
            <div className={"flex flex-col font-medium"}>
                <span className={"text-sm text-zinc-700"}>{title}</span>
                <span className={"text-xs text-zinc-500 font-normal"}>{description + " • " + job}</span>
            </div>
        </motion.div>
    );
};



const Cursor: React.FC<{ position: {left: number, top: number, width: number, opacity: number} }> = ({ position }) => {
    return (
        <motion.div
            animate={{...position}}
            className={cn("absolute z-40 h-12 rounded-md bg-zinc-100")}
        />
    );
};