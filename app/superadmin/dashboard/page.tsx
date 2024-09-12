
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { getData } from "./superadmin-dashboard.action";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaBookOpen, FaBus, FaMoneyBill, FaMoneyCheck, FaRoad, FaSms, FaTicketAlt, FaUser, FaUserSecret } from "react-icons/fa";

export default async function SuperAdminDashboard(){
    const {agencies, messages, users, agencyAdmins, bookings, tickets, trips, total } = await getData()

    return (
        <DashboardLayout>
            <main className="">
                <h1 className="text-center text-2xl font-bold my-4">Tableau de bord</h1>
                {/* Toutes les données */}
                <section className="px-10 flex flex-wrap  justify-center gap-5">
                    <Card className="h-28 w-60 bg-cyan-500 hover:bg-cyan-700 duration-300">
                        <CardContent>
                            <div className="flex items-center gap-2">
                                <div className="p-3 bg-secondary rounded-lg w-11">
                                    <FaUser className="w-5 h-5"/>
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-lg">Utilisateurs </CardTitle>
                                    <p className="font-bold text-2xl">{users} </p>
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

                    <Card className="h-28 w-60 bg-purple-500 hover:bg-purple-700 duration-300">
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

                    <Card className="h-28 w-60 bg-teal-500 hover:bg-teal-700 duration-300">
                        <CardContent>
                            <div className="flex items-center gap-2">
                                <div className="p-3 bg-secondary rounded-lg w-11">
                                    <FaMoneyBill className="w-5 h-5"/>
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-lg">Total </CardTitle>
                                    <p className="font-bold text-2xl">{total} <span className="text-sm">XAF</span> </p>
                                </CardHeader>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="h-28 w-60 bg-emerald-500 hover:bg-emerald-700 duration-300">
                        <CardContent>
                            <div className="flex items-center gap-2">
                                <div className="p-3 bg-secondary rounded-lg w-11">
                                    <FaBus className="w-5 h-5"/>
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-lg">Agences </CardTitle>
                                    <p className="font-bold text-2xl">{agencies} </p>
                                </CardHeader>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="h-28 w-60 bg-cyan-500 hover:bg-cyan-700 duration-300">
                        <CardContent>
                            <div className="flex items-center gap-2">
                                <div className="p-3 bg-secondary rounded-lg w-11">
                                    <FaUserSecret className="w-5 h-5"/>
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-lg">Adminstrateurs </CardTitle>
                                    <p className="font-bold text-2xl">{agencyAdmins} </p>
                                </CardHeader>
                            </div>
                        </CardContent>
                    </Card>

                <Card className="h-28 w-60 bg-rose-500 hover:bg-rose-700 duration-300">
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

                

                    <Card className="h-28 w-60 bg-lime-500 hover:bg-lime-700 duration-300">
                        <CardContent>
                            <div className="flex items-center gap-2">
                                <div className="p-3 bg-secondary rounded-lg w-11">
                                    <FaSms className="w-5 h-5"/>
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-lg">Messages </CardTitle>
                                    <p className="font-bold text-2xl">{messages} </p>
                                </CardHeader>
                            </div>
                        </CardContent>
                    </Card>
                

            
                </section>
            </main>
           
        </DashboardLayout>
    )
}