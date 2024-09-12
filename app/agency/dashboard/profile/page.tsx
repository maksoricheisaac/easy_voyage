/* eslint-disable react/no-unescaped-entities */
import { Dashboard } from "@/components/dashboard/dashboard-layout";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function Profile(){
    return (
        <Dashboard>
            <section className="w-full p-5">
                <h1 className="font-bold text-2xl">Gestion des trajets</h1>
                <div className="flex flex-wrap justify-center mt-5 gap-5">
                    <h1>Information sur l'agence</h1>
                </div>
            </section>
        </Dashboard>
    )
}