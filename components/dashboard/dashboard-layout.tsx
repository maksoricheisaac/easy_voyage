"use client"

import { ReactNode, useState } from "react"
import { Sidebar } from "./sidebar"
import { Topbar } from "./topbar"


type Props = {
    children?: ReactNode
}

export const DashboardLayout = ({children} : Props) => {
    const [isOpen, setIsOpen] = useState(false)

    const onClick = () => {
        setIsOpen((v) => !v)
    }

    console.log(isOpen)
    return (
        <div className="p-2 bg-secondary overflow-x-hidden w-full h-full flex items-start justify-start gap-2 relative">
            <Sidebar isOpen={isOpen} className={isOpen ? "relative -left-[200%] duration-300 w-0 shadow-md": " duration-300 relative left-0 hidden lg:block  lg:w-1/5 h-[97vh]  bg-white shadow-md rounded-md py-2"} />
            <div className={isOpen ?"w-screen" : "flex w-[100%]  lg:w-4/5 flex-col gap-2"}>
                <Topbar onClick={onClick} isOpen={isOpen} />
                <main>
                    {children}
                </main>
            </div>
        </div>
    )
}