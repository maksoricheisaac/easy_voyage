import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaBookOpen, FaRoad, FaTicketAlt } from "react-icons/fa";
import { getData } from "./agency-dashboard.action";


export default async function Agency(){
    const agencyId = "b0cfbcef-3f9a-4c04-b8a7-09bbe9ecae9d"
    const {trips, bookings, tickets} = await getData(agencyId)

    return (
        <DashboardLayout>
            <main className="w-full p-5">
                <h1 className="font-bold text-3xl">Tableau de bord</h1>
                <section className="flex flex-wrap justify-center mt-5 gap-5">
                    
                    <Card className="h-28 w-60 bg-red-500 hover:bg-red-700 duration-300">
                        <CardContent>
                            <div className="flex items-center gap-2">
                                <div className="p-3 bg-secondary rounded-lg w-11">
                                    <FaRoad className="w-5 h-5"/>
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-lg">Destinations</CardTitle>
                                    <p className="font-bold text-2xl">{trips} </p>
                                    
                                </CardHeader>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="h-28 w-60 bg-orange-500 hover:bg-orange-700 duration-300">
                        <CardContent>
                            <div className="flex items-center gap-2">
                                <div className="p-3 bg-secondary rounded-lg w-11">
                                    <FaBookOpen className="w-5 h-5"/>
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-lg">Réservations</CardTitle>
                                    <p className="font-bold text-2xl">{bookings} </p>
                                </CardHeader>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="h-28 w-60 bg-lime-500 hover:bg-lime-700 duration-300">
                        <CardContent>
                            <div className="flex items-center gap-2">
                                <div className="p-3 bg-secondary rounded-lg w-11">
                                    <FaTicketAlt className="w-5 h-5"/>
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-lg">Billets </CardTitle>
                                    <p className="font-bold text-2xl">{tickets} </p>
                                </CardHeader>
                            </div>
                        </CardContent>
                    </Card>
                    
                </section>
            </main>
        </DashboardLayout>
    )
}