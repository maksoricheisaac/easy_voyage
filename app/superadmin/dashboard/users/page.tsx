import { Dashboard } from "@/components/dashboard/dashboard-layout";
import { Data } from "./data";


export default function Users(){
    return (
        <Dashboard>
            <section className="w-full p-5">
                <h1 className="font-bold text-2xl text-center">Liste des utilisateurs</h1>
                <Data />
            </section>
        </Dashboard>
    )
}