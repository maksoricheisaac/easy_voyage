/* eslint-disable react/no-unescaped-entities */
import { Dashboard } from "@/components/dashboard/dashboard-layout";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Data } from "./data";

export default function AgencyAdmins(){
    return (
        <Dashboard>
            <section className="w-full p-5">
                <h1 className="font-bold text-2xl text-center">Liste des adminstrateurs d'agences</h1>
                <Data />
            </section>
        </Dashboard>
    )
}