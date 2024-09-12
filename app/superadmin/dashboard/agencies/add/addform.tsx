/* eslint-disable react/no-unescaped-entities */
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { addAgency } from "../superadmin-agencies.action"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"



const formSchema = z.object({
    name: z.string().min(5, {
        message: "Doit contenir au moins 5 caractères"
    }),
    email: z.string().email({
        message: "Email invalide"
    })
})

export const AddForm = () => {
    const toast = useToast()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
          
        }
    })

    const onSubmit = async(values: z.infer<typeof formSchema>)  => {
        const response = await addAgency(values)

        if(response == 200){
            form.reset()

            toast.toast({
                title: "Agence ajoutée avec succès"
            })
        } else {
            form.reset()

            toast.toast({
                title: "Agence déjà existante",
                variant: "destructive"
            })
        }
        

     }
     

    return (
        <div className="flex justify-center">
            <Card className="w-96">
                <Toaster />
                <CardHeader>
                    <CardTitle className="text-center">Informations</CardTitle>
                </CardHeader>
                <CardContent className="px-10">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}      
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Nom de l'agence</FormLabel>
                                    <FormControl>
                                        <Input  placeholder="Easy Voyage Express" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="easyvoyageexpress@gmail.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full">Ajouter</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
        
    )
}