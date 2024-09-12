"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { PropsWithChildren } from "react"


export const Hero = ({}: PropsWithChildren) => {
    const path = usePathname()
    return (
        <section className="w-full flex flex-col items-center justify-center gap-5 h-96 bg-secondary">
            {
                path == "/contact" && 
                <>
                    <h1 className="text-center font-bold text-4xl">Contactez-Nous</h1>
                    <p className="text-center text-accent-foreground"> <Link href="/">Accueil</Link> / <Link href="/contact" className="text-primary">Contact</Link> </p>
                </>
            }
            {
                path == "/trips" && 
                <>
                    <h1 className="text-center font-bold text-4xl">Destinations</h1>
                    <p className="text-center text-accent-foreground"> <Link href="/">Accueil</Link> / <Link href="/destinations" className="text-primary">Destinations</Link> </p>
                </>
            }
            {
                path == "/agencies" && 
                <>
                    <h1 className="text-center font-bold text-4xl">Nos Agences</h1>
                    <p className="text-center text-accent-foreground"> <Link href="/">Accueil</Link> / <Link href="/agencies" className="text-primary">Agences</Link> </p>
                </>
            }
            
        </section>
    )
}