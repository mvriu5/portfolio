import type {Metadata} from "next";
import {Roboto} from "next/font/google";
import "./globals.css";
import {Analytics} from "@vercel/analytics/react"
import {SpeedInsights} from "@vercel/speed-insights/next"
import React, {ReactNode} from "react";

const roboto = Roboto({subsets: ["latin"], weight: ["400", "500", "700"]});

export const metadata: Metadata = {
  title: "Marius Ahsmus",
  description: "Portfolio",
};

export default function RootLayout({children}: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en">
            <body className={roboto.className}>
                <div className={"bg-white"}>
                    {children}
                    <Analytics/>
                    <SpeedInsights />
                </div>
            </body>
        </html>
    );
}
