import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { AddForm } from "./addform";

export default function AddAgency(){
    return (
        <DashboardLayout>
            <main className="w-full h-[80vh]">
                <h1 className="py-1 my-3 text-2xl text-center font-bold border-b-[2px]">Nouvelle agence</h1>
                <AddForm />
            </main>
        </DashboardLayout>
    )
}