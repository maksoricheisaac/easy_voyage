import { ContactForm } from "@/app/(main)/contact/ContactForm";
import { Footer } from "@/components/layouts/Footer";
import { Hero } from "@/components/layouts/Hero";
import { Navbar } from "@/components/layouts/Navbar";

export default function Contact(){
    return (
        <>
            <Navbar />
            <Hero />
            <main className="w-full h-full py-10">
                <section className="flex justify-center px-5 md:px-10 lg:px-48">
                    <ContactForm className="w-full " />
                </section>
            </main>
            <Footer />
        </>
    )
}