import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FaArrowLeft, FaBus, FaTrash, FaUser } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { deleteAgency, getAgencies } from "../superadmin-agencies.action";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type Props = {
    params: {
        id: string
    }
}

export default async function OneAgency ({params} : Props){

    const {agency, trips, bookings, tickets } = await getAgencies(params.id)
    const total = 0

    return (
        <DashboardLayout>
            <main>
                <div className="flex items-center justify-between border-b-[2px] my-3 py-1">
                    <h1 className="  text-2xl text-center font-bold ">Agency</h1>
                    <Button asChild>
                        <Link href="/superadmin/dashboard/agencies">
                            <FaArrowLeft className="me-2" />
                            Retour
                        </Link>
                    </Button>
                </div>
                {agency ?
                <section className="mt-24">
                         
                    <Card>
                        <CardHeader className="relative pt-[5.5rem]">
                            <div className="absolute -top-20 translate-x-[10%]   bg-white p-5 rounded-full">
                                    <FaBus className="w-32 h-32" />
                                </div>
                            <div className="flex items-center justify-between pt-5 border-t-2">
                                
                                <div className="flex gap-2 items-center">
                                    <div>
                                        <p> {agency.name} </p>
                                        <p className="text-sm"><span className="italic">{agency.email}</span> </p>
                                    </div>
                                </div>
                                <p className="text-sm">Ajoutée le : <span> {agency.createdAt?.toLocaleDateString()} à {agency.createdAt?.toLocaleTimeString()} </span> </p>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-4">
                                <div>
                                    <h3 className="font-bold">Destinations</h3>
                                    <p> {trips && trips.length} </p>
                                </div>
                                <div>
                                    <h3 className="font-bold">Réservations</h3>
                                    <p> {bookings && bookings.length} </p>
                                </div>
                                <div>
                                    <h3 className="font-bold">Billets</h3>
                                    <p> {tickets && tickets.length} </p>
                                </div>
                                <div>
                                    <h3 className="font-bold">Total</h3>
                                    <p> {total} <span>XAF</span> </p>
                                </div>
                            </div>
                        </CardContent>
                        
                    </Card>
                    <div className="mt-5">
                        <Card>
                            <CardHeader>
                                <CardTitle>Destinations</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Destinations</TableHead>
                                            <TableHead>Prix adulte</TableHead>
                                            <TableHead>Prix enfant</TableHead>
                                            <TableHead>Durée</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {trips && trips.slice(0, 10).map((item) => (
                                            <TableRow key={item.id}>
                                                <TableCell> {item.departure} -  {item.arrival} </TableCell>
                                                <TableCell> {item.adult_price} XAF</TableCell>
                                                <TableCell> {item.child_price} XAF </TableCell>
                                                <TableCell> {item.departureTime} - {item.arrivalTime} </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </div>
                        
                </section>
                :
                null
            }
            
            </main>
        </DashboardLayout>
    )
}