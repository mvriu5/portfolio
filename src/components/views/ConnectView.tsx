"use client";

import React, {HTMLAttributes} from "react";
import {ConnectBlock} from "@/components/ConnectBlock";
import {Github, Linkedin, Twitter} from "lucide-react";


export const ConnectView: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {

    return (
        <>
            <ConnectBlock title={"Github"}
                          icon={<Github className={"text-zinc-800"} size={14}/>}
            />
            <ConnectBlock title={"Twitter"}
                          icon={<Twitter className={"text-zinc-800"} size={14}/>}
            />
            <ConnectBlock title={"LinkedIn"}
                          icon={<Linkedin className={"text-zinc-800"} size={14}/>}
            />
        </>
    );
}