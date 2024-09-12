/* eslint-disable react/no-unescaped-entities */
"use client"
import { useRouter } from "next/navigation"
import { Button } from "../ui/button"

export const SignUpBtn = () => {
    const router = useRouter()
    return (
        <Button onClick={() => {
            router.push('/sign-up')
        }} >S'inscrire</Button>
    )
}