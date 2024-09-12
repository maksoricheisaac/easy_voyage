import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { deleteMessage, getMessages } from "../superadmin-messages.action";
import { FaArrowAltCircleLeft, FaArrowLeft, FaTrash, FaUser } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
    params: {
        id: string
    }
}

export default async function OneMessage ({params} : Props){

    const {message } = await getMessages(params.id)


    return (
        <DashboardLayout>
            <main>
                <div className="flex items-center justify-between border-b-[2px] my-3 py-1">
                    <h1 className="  text-2xl text-center font-bold ">Message</h1>
                    <Button asChild>
                        <Link href="/superadmin/dashboard/messages">
                            <FaArrowLeft className="me-2" />
                            Retour
                        </Link>
                    </Button>
                </div>
                
                <section>
                    {message ?
                        <Card>
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-2 items-center">
                                        <FaUser className="w-10 h-10" />
                                        <div>
                                            <p> {message.lastname} {message.firstname} </p>
                                            <p className="text-sm">To <span className="italic">SUPER_ADMIN</span> </p>
                                        </div>
                                    </div>
                                    <p>Envoyé le : <span> {message.sendedAt?.toLocaleDateString()} à {message.sendedAt?.toLocaleTimeString()} </span> </p>
                                </div>
                            </CardHeader>
                            <CardContent>
                                {message.message}
                            </CardContent>
                            <CardFooter className="flex justify-end">
                                <form>
                                    <Button 
                                        variant="destructive"
                                        formAction={async() => {
                                            "use server"
                                            await deleteMessage(message.id)
                                        }}
                                    > 
                                        <FaTrash /> 
                                    </Button>
                                </form>
                            </CardFooter>
                        </Card>
                        :
                        null
                    }
                    
                </section>
            </main>
        </DashboardLayout>
    )
}