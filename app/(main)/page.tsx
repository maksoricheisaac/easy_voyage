import { Navbar } from "@/components/layouts/Navbar";
import { Button } from "@/components/ui/button";

export default function Home(){
  return (
    <>
      <Navbar />
      <section className="w-full h-96 flex flex-col gap-5 items-center justify-center px-5">
        <h1 className="text-4xl text-center font-bold">Réservez votre <span className="text-primary">billet</span> de <span className="text-primary">bus</span> en <span className="text-primary">quelques clics</span> !</h1>
        <p className="text-center">Choisissez votre destination, sélectionnez votre agence, et réservez votre billet rapidement et facilement.</p>
        <Button>Réservez maintenant</Button>
      </section>
    </>
    
  )
}