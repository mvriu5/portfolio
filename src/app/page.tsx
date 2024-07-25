"use client";

import React, {useState} from "react";
import {ProjectView} from "@/components/views/ProjectView";
import {ConnectView} from "@/components/views/ConnectView";
import {AboutView} from "@/components/views/AboutView";
import {Tags} from "lucide-react";
import {ComponentView} from "@/components/views/ComponentView";

type Page = "About" | "Components" | "Connect" | null;

export default function Home() {
    const [page, setPage] = useState<Page>(null);

    return (
        <div className={"flex flex-col space-y-4"}>

            <div className={"flex flex-row justify-between items-center"}>

                <div className={"flex flex-row items-center space-x-4 cursor-pointer"} onClick={() => setPage(null)}>
                    <Tags size={28} className={"text-zinc-700"}/>
                    <div className={"flex flex-col space-y-0.5 font-medium"}>
                        <span className={"text-zinc-800 text-sm"}>Marius Ahsmus</span>
                        <span className={"text-zinc-500 text-xs"}>Fullstack Software Engineer</span>
                    </div>
                </div>

                <div className={"flex flex-row justify-end space-x-4 text-zinc-500 font-medium"}>
                    <span className={`${page === "About" ? "underline text-zinc-700" : "hover:underline"} cursor-pointer`}
                          onClick={() => setPage("About")}
                    >
                        About
                    </span>
                    <span className={`${page === "Components" ? "underline text-zinc-700" : "hover:underline"} cursor-pointer`}
                          onClick={() => setPage("Components")}
                    >
                        Components
                    </span>
                    <span className={`${page === "Connect" ? "underline text-zinc-700" : "hover:underline"} cursor-pointer`}
                          onClick={() => setPage("Connect")}
                    >
                        Connect
                    </span>
                </div>

            </div>


            <div className={"rounded-full"}>
                <hr className={"w-full text-black text-opacity-40"}></hr>
            </div>

            <div className={"flex flex-col space-y-4 pt-8"}>
                {!page && <ProjectView/>}
                {page === "Connect" && <ConnectView/>}
                {page === "About" && <AboutView/>}
                {page === "Components" && <ComponentView/>}
            </div>
        </div>
  );
}
