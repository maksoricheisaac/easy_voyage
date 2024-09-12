import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { FaEye, FaReadme, FaTrash } from "react-icons/fa";
import Link from "next/link";
import { deleteAgency, getAgencies } from "./superadmin-agencies.action";


export default async function Agencies(){
    const {agencies} = await getAgencies()

    return (
        <DashboardLayout>
            <main>
                <h1 className="py-1 my-3 text-2xl text-center font-bold border-b-[2px]">Agences</h1>
                <section>
                    <Card>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Nom</TableHead>
                                        <TableHead>Email</TableHead>
                                        <TableHead>Téléphone</TableHead>
                                        <TableHead>Adresse</TableHead>
                                        <TableHead>Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {agencies && agencies.map((item) => (
                                        <TableRow key={item.id}>
                                            <TableCell> {item.name}  </TableCell>
                                            <TableCell> {item.email} </TableCell>
                                            <TableCell> {item.phone ? item.phone : "..."} </TableCell>
                                            <TableCell> {item.address && item.address.slice(0, 20)}... </TableCell>
                                            <TableCell className="flex gap-2"> 
                                                <Button asChild>
                                                    <Link href={`/superadmin/dashboard/agencies/${item.id}`}>
                                                        <FaEye />
                                                    </Link>
                                                </Button>
                                                <form>
                                                    <Button 
                                                        variant="destructive"
                                                        formAction={async() => {
                                                            "use server"
                                                            await deleteAgency(item.id)
                                                        }}
                                                    > 
                                                        <FaTrash /> 
                                                    </Button>
                                                </form>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </section>
            </main>
        </DashboardLayout>
    )
}