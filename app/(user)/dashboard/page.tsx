import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaBookOpen, FaTicketAlt } from "react-icons/fa";


export default async function UserDashboard(){
    const userId = "aed8b87a-66a3-445b-bb94-c9a69a72e988"
    const {nbrBookings , nbrTickets} = await (await fetch(`http://localhost:3000/api/user?id=${userId}`)).json()
    const total = 0

    return (
        <DashboardLayout>
            <main className="p-2">
               <h1 className="py-1 my-3 text-2xl font-bold border-b-[2px]">Tableau de bord</h1>
               <section className="flex justify-center gap-5">
                    <Card className="h-28 w-60 bg-cyan-500 hover:bg-cyan-700 duration-300">
                        <CardContent>
                            <div className="flex items-center gap-2">
                                <div className="p-3 bg-secondary rounded-lg w-11">
                                    <FaBookOpen className="w-5 h-5"/>
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-lg">Réservations </CardTitle>
                                    <p className="font-bold text-2xl">{nbrBookings.length} </p>
                                </CardHeader>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="h-28 w-60 bg-green-500 hover:bg-green-700 duration-300">
                        <CardContent>
                            <div className="flex items-center gap-2">
                                <div className="p-3 bg-secondary rounded-lg w-11">
                                    <FaTicketAlt className="w-5 h-5"/>
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-lg">Billets </CardTitle>
                                    <p className="font-bold text-2xl">{nbrTickets.length} </p>
                                </CardHeader>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="h-28 w-60 bg-orange-500 hover:bg-orange-700 duration-300">
                        <CardContent>
                            <div className="flex items-center gap-2">
                                <div className="p-3 bg-secondary rounded-lg w-11">
                                    <FaTicketAlt className="w-5 h-5"/>
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-lg">Total payé </CardTitle>
                                    <p className="font-bold text-2xl"> {total} <span className="text-sm">XAF</span></p>
                                </CardHeader>
                            </div>
                        </CardContent>
                    </Card>
               </section>
            </main>
        </DashboardLayout>
    )
}