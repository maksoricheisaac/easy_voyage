"use client"
import { useRouter } from "next/navigation"
import { Button } from "../ui/button"

export const SignInBtn = () => {
    const router = useRouter()
    return (
        <Button onClick={() => {
            router.push('/sign-in')
        }} variant="outline">Se connecter</Button>
    )
}