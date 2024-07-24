"use client";

import Image from "next/image";
import React, {useState} from "react";
import {ProjectView} from "@/components/views/ProjectView";
import {ConnectView} from "@/components/views/ConnectView";
import {AboutView} from "@/components/views/AboutView";

type Page = "About" | "Components" | "Connect" | null;

export default function Home() {
    const [page, setPage] = useState<Page>(null);

  return (
    <div className={"flex flex-col space-y-4"}>

        <div className={"flex flex-row justify-between items-center"}>

            <div className={"flex flex-row items-center space-x-4"}>
                <Image src={"/icon.png"} alt={"Logo"} width={40} height={40} onClick={() => setPage(null)}/>
                <div className={"flex flex-col space-y-0.5"}>
                    <span className={"text-zinc-700 text-sm font-medium"}>Marius Ahsmus</span>
                    <span className={"text-zinc-600 text-xs font-normal"}>Fullstack Engineer</span>
                </div>
            </div>

            <div className={"flex flex-row justify-end space-x-4 text-zinc-700"}>
                <span className={`${page === "About" ? "underline" : "hover:underline"} cursor-pointer`}
                      onClick={() => setPage("About")}
                >
                    About
                </span>
                <span className={`${page === "Components" ? "underline" : "hover:underline"} cursor-pointer`}
                      onClick={() => setPage("Components")}>
                    Components
                </span>
                <span className={`${page === "Connect" ? "underline" : "hover:underline"} cursor-pointer`}
                      onClick={() => setPage("Connect")}>
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
        </div>

    </div>
  );
}
