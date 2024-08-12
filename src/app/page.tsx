"use client";

import React, {useState} from "react";
import {ProjectView} from "@/components/views/ProjectView";
import {ConnectView} from "@/components/views/ConnectView";
import {AboutView} from "@/components/views/AboutView";
import {Tags} from "lucide-react";

type Page = "About" | "Projects" | "Connect";

export default function Home() {
    const [page, setPage] = useState<Page>("Projects");

    return (
        <div className={"flex flex-col space-y-4 p-4 lg:px-40 lg:py-16 2xl:px-96 2xl:py-32"}>

            <div className={"flex flex-row justify-between items-center border-b border-zinc-200 pb-4"}>

                <div className={"flex flex-row items-center space-x-4 cursor-pointer"} onClick={() => setPage("Projects")}>
                    <Tags size={28} className={"text-zinc-700"}/>
                    <div className={"flex flex-col space-y-0.5 font-medium"}>
                        <span className={"text-zinc-800 text-sm"}>Marius Ahsmus</span>
                        <span className={"hidden sm:block text-zinc-500 text-xs"}>Fullstack Software Engineer</span>
                    </div>
                </div>

                <div className={"flex flex-row justify-end space-x-2 md:space-x-4 text-zinc-500 font-normal"}>
                    <span className={`${page === "About" ? "underline text-zinc-700" : "hover:underline"} cursor-pointer`}
                          onClick={() => setPage("About")}
                    >
                        About
                    </span>
                    <span className={`${page === "Projects" ? "underline text-zinc-700" : "hover:underline"} cursor-pointer`}
                          onClick={() => setPage("Projects")}
                    >
                        Projects
                    </span>
                    <span className={`${page === "Connect" ? "underline text-zinc-700" : "hover:underline"} cursor-pointer`}
                          onClick={() => setPage("Connect")}
                    >
                        Connect
                    </span>
                </div>

            </div>

            <div className={"flex flex-col space-y-4 pt-8"}>
                {page === "Projects" && <ProjectView/>}
                {page === "Connect" && <ConnectView/>}
                {page === "About" && <AboutView/>}
            </div>
        </div>
  );
}
