"use client";

import React, {HTMLAttributes, useState} from "react";
import {ProjectBlock} from "@/components/ProjectBlock";
import {AnimateSharedLayout, motion} from "framer-motion";
import Image from "next/image";
import {ComponentBox} from "@/components/ComponentBox";

export const ComponentView: React.FC<HTMLAttributes<HTMLDivElement>> = () => {

    return (
        <div className={"space-y-16"}>
            <ComponentBox title={"Component 1"}
                          component={<div></div>}
            />
            <ComponentBox title={"Component 2"}
                          component={<div></div>}
            />
            <ComponentBox title={"Component 3"}
                          component={<div></div>}
            />
        </div>

    );
};