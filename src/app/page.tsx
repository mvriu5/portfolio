"use client";

import React, {useState} from "react";
import {ProjectView} from "@/components/views/ProjectView";
import {ConnectView} from "@/components/views/ConnectView";
import {AboutView} from "@/components/views/AboutView";
import {Tags} from "lucide-react";
import { motion } from "framer-motion";

type Page = "About" | "Projects" | "Connect";

export default function Home() {
    const [page, setPage] = useState<Page>("Projects");

    return (
        <div className={"flex flex-col space-y-4 p-4 lg:px-[30%] md:py-32 md:px-[20%]"}>

            <motion.div className={"flex flex-row justify-between items-center border-b border-zinc-200 pb-4"}
                        initial={{opacity: 0, filter: 'blur(10px)', y: -100}}
                        animate={{opacity: 1, filter: 'blur(0px)', y: 0}}
                        transition={{duration: 1}}
            >

                <div className={"flex flex-row items-center space-x-3 cursor-pointer"} onClick={() => setPage("Projects")}>
                    <div className={"size-8 rounded-lg bg-gradient-to-br from-blue-300 to-emerald-500 shadow-lg"}/>
                    <div className={"flex flex-col font-medium"}>
                        <span className={"text-zinc-800 text-sm"}>Marius Ahsmus</span>
                        <span className={"hidden sm:block text-zinc-500 text-xs bg-zinc-100 shadow-md"}>Fullstack Software Engineer</span>
                    </div>
                </div>

                <div className={"flex flex-row justify-end space-x-2 md:space-x-4 text-zinc-500 text-sm"}>
                    <span className={`${page === "About" ? "underline text-zinc-700" : "hover:underline"} cursor-pointer`}
                          onClick={() => setPage("About")}
                    >
                        about
                    </span>
                    <span className={`${page === "Projects" ? "underline text-zinc-700" : "hover:underline"} cursor-pointer`}
                          onClick={() => setPage("Projects")}
                    >
                        projects
                    </span>
                    <span className={`${page === "Connect" ? "underline text-zinc-700" : "hover:underline"} cursor-pointer`}
                          onClick={() => setPage("Connect")}
                    >
                        connect
                    </span>
                </div>

            </motion.div>

            <div className={"flex flex-col space-y-4 pt-12"}>
                {page === "Projects" && <ProjectView/>}
                {page === "Connect" && <ConnectView/>}
                {page === "About" && <AboutView/>}
            </div>
        </div>
  );
}
