import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { deleteMessage, getMessages } from "./superadmin-messages.action";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { FaReadme, FaTrash } from "react-icons/fa";
import Link from "next/link";


export default async function Messages(){
    const {messages} = await getMessages()

    return (
        <DashboardLayout>
            <main>
                <h1 className="py-1 my-3 text-2xl text-center font-bold border-b-[2px]">Messages</h1>
                <section>
                    <Card>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Nom(s) & Prénom(s)</TableHead>
                                        <TableHead>Email</TableHead>
                                        <TableHead>Message</TableHead>
                                        <TableHead>Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {messages && messages.map((item) => (
                                        <TableRow key={item.id}>
                                            <TableCell> {item.lastname} {item.firstname} </TableCell>
                                            <TableCell> {item.email} </TableCell>
                                            <TableCell> {item.message.slice(0, 20)}... </TableCell>
                                            <TableCell className="flex gap-2"> 
                                                <Button asChild>
                                                    <Link href={`/superadmin/dashboard/messages/${item.id}`}>
                                                        <FaReadme />
                                                    </Link>
                                                </Button>
                                                <form>
                                                    <Button 
                                                        variant="destructive"
                                                        formAction={async() => {
                                                            "use server"
                                                            await deleteMessage(item.id)
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