/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from "react-icons/fa"

export const Footer = () => {
    return (
        <footer className="grid grid-cols-2 md:flex  md:flex-row justify-between gap-5 px-5 lg:px-32 py-10 bg-primary-foreground">
            <div>
                <Link href="/" className="font-bold text-lg hover:text-primary">Easy Voyage</Link>
            </div>
            <div>
                <h3 className="font-bold mb-3">Liens Utiles</h3>
                <ul className="flex flex-col gap-2">
                    <li><Link href="/" className="hover:text-primary">Acceuil</Link></li>
                    <li><Link href="/agencies" className="hover:text-primary">Agences</Link></li>
                    <li><Link href="/destinations" className="hover:text-primary">Destinations</Link></li>
                    <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
                    <li><Link href="/" className="hover:text-primary">Conditions d'Utilisation</Link></li>
                    <li><Link href="/" className="hover:text-primary">Politique de Confidentialité</Link></li>
                </ul>
            </div>
            <div>
                <h3 className="font-bold mb-3">Support</h3>
                <ul className="flex flex-col gap-2">
                    <li><Link href="/" className="hover:text-primary">Centre d'Aide</Link></li>
                    <li><Link href="/" className="hover:text-primary">FAQ</Link></li>
                    <li><Link href="/" className="hover:text-primary">Contact Support</Link></li>
                </ul>
            </div>
            <div>
                <h3 className="font-bold mb-3">Suivez-Nous</h3>
                <ul className="flex flex-col gap-2">
                    <li className="flex items-center gap-2 hover:text-primary">
                        <FaFacebook className="hover:text-primary"/>
                        <Link href="/" className="hover:text-primary">Facebook</Link>
                    </li>
                    <li className="flex items-center gap-2 hover:text-primary">
                        <FaTwitter className="hover:text-primary"/>
                        <Link href="/" className="hover:text-primary">Twitter</Link>
                    </li>
                    <li className="flex items-center gap-2 hover:text-primary">
                        <FaInstagram className="hover:text-primary"/>
                        <Link href="/" className="hover:text-primary">Instagram</Link>
                    </li>
                    <li className="flex items-center gap-2 hover:text-primary">
                        <FaLinkedin className="hover:text-primary"/>
                        <Link href="/" className="hover:text-primary">LinkedIn</Link>
                    </li>
                    
                </ul>
            </div>
        </footer>
    )
}