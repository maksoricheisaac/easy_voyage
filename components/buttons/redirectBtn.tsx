"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { FaArrowLeft } from "react-icons/fa"

export const RedirectBtn = () => {
    const router = useRouter()
    const onClick = () => {
        router.back()
    }
    return (
        <Button onClick={onClick} className="absolute top-5 left-5">
            <FaArrowLeft className="w-5 h-5 me-2" />
            Retour
        </Button>
    )
}