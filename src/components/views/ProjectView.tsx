"use client";

import React, {HTMLAttributes} from "react";
import {ProjectBlock} from "@/components/ProjectBlock";

export const ProjectView: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {

    return (
        <>
            <ProjectBlock title={"Project 1"}
                          description={"this is a project description"}
                          job={"Backend"}
            />
            <ProjectBlock title={"Project 2"}
                          description={"this is a bigger project description"}
                          job={"Frontend"}
            />
            <ProjectBlock title={"Project 3"}
                          description={"description"}
                          job={"Design"}
            />
        </>
    );
}