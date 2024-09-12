/* eslint-disable react/no-unescaped-entities */
import { Dashboard } from "@/components/dashboard/dashboard-layout";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { AddForm } from "./addForm";

export default function Create(){
    return (
        <Dashboard>
            <section className="w-full p-5">
                <div className="flex flex-wrap justify-center gap-5  px-5 ">
                    <AddForm className="md:w-[600px]" />
                </div>
            </section>
        </Dashboard>
    )
}