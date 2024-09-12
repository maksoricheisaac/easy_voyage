import { Dashboard } from "@/components/dashboard/dashboard-layout";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Data } from "./data";

export default function Reservations(){
    return (
        <Dashboard>
            <section className="w-full p-5">
                <h1 className="font-bold text-2xl text-center">Liste des réservations</h1>
                <div className="flex flex-wrap justify-center mt-5 gap-5">
                   <Data />
                </div>
            </section>
        </Dashboard>
    )
}