/* eslint-disable react/no-unescaped-entities */
"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"









const formSchema = z.object({  
    departure: z.string().min(1, {message: "Veuillez remplir ce champ"}),
    departureTime: z.preprocess((val) => String(val), z.string().time({message: "Heure invalide"})),
    arrival: z.string().min(1, {message: "Veuillez remplir ce champ"}),
    arrivalTime: z.preprocess((val) => String(val), z.string().time({message: "Heure invalide"})),
    adult_price: z.preprocess((val) => Number(val), z.number().positive().int()),
    child_price: z.preprocess((val) => Number(val), z.number().positive().int()),
  });

type Props = {
    className?: string
}
 

export const AddForm = ({className} : Props) => {
    const router = useRouter()
    const [success, setSuccess] = useState<string | null>(null)
    const [error, setError] = useState<string | null >(null)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          departure: "",
          departureTime: "",
          arrival: "",
          arrivalTime: ""
        }
    })
     
    
    const onSubmit = async(values: z.infer<typeof formSchema>)  => {
        const agencyId = "b0cfbcef-3f9a-4c04-b8a7-09bbe9ecae9d"
        const API_AGENCY = "http://localhost:3000/api/agency"
   

        const response = await fetch(`${API_AGENCY}/trips?agencyId=${agencyId}`, {
            method: "POST",
            body: JSON.stringify(values)
        })

        const msg = await response.json() as string
        console.log(msg)

        if(response.status == 200){
            setError(null)
           setSuccess(msg)

        } else {
            setSuccess(null)
            setError(msg)
        }
        
    }


    return (
        <Card className={className}>
            <CardHeader>
                <CardTitle className="text-center">Nouvelle destination</CardTitle>
                <CardDescription className="text-center">Veuillez renseigner toutes les informations</CardDescription>
                {success && <div className="text-green-800 bg-green-500 text-center p-2 rounded-md"> {success} </div>}
                {error && <div className="text-red-800 bg-red-500 text-center p-2 rounded-md"> {error} </div>}
                <div className="h-[1px] bg-gray-500"></div>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} method="post" className="space-y-8">
                        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                            <FormField
                                control={form.control}
                                name="departure"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Départ</FormLabel>
                                    <FormControl>
                                        <Input  placeholder="Brazzaville" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="departureTime"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Heure de départ <span className="text-gray-600">(hh:mm:ss)</span> </FormLabel>
                                    <FormControl>
                                        <Input placeholder="06:30:00" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />

                        </div >
                        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                            <FormField
                                control={form.control}
                                name="arrival"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Arrivée</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Pointe-Noire"   {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="arrivalTime"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Heure d'arrivée  <span className="text-gray-600">(hh:mm:ss)</span> </FormLabel>
                                    <FormControl>
                                        <Input placeholder="17:30:00"  {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                            <FormField
                                control={form.control}
                                name="adult_price"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Prix adulte</FormLabel>
                                    <FormControl>
                                        <Input placeholder="0"  {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="child_price"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Prix enfant</FormLabel>
                                    <FormControl>
                                        <Input placeholder="0"  {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />

                        </div>
                        
                        <div className="flex justify-center">
                            <Button type="submit" className="w-80">Ajouter</Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}