"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { Textarea } from "../../../components/ui/textarea"
import { ContactAction } from "./contact.action"
import { toast, useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { useRouter } from "next/navigation"
 
const formSchema = z.object({  
    firstname: z.string().min(2, {  
      message: "Votre prénom doit au moins avoir 2 caractères",  
    }),  
    lastname: z.string().min(2, {  
      message: "Votre nom de famille doit au moins avoir 2 caractères",  
    }),  
    email: z.string().email({  
      message: "Adresse email invalide",  
    }),  
    phone: z.string().min(10, {  
      message: "Votre numéro de téléphone doit contenir au moins 10 chiffres",  
    }),  
    message: z.string().min(10, {  
      message: "Votre message doit au moins avoir 10 caractères",  
    }),  
  });

type Props = {
    className: string
}
 

export const ContactForm = ({className} : Props) => {
    const router = useRouter()
    const toast = useToast()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          message: ""
        }
    })
     
    
    const onSubmit = async(values: z.infer<typeof formSchema>)  => {
        
       await fetch('http://localhost:3000/api/main/contact', {
        method: "POST",
        body: JSON.stringify(values)
       })

       router.refresh()

       form.reset()

       toast.toast({
        title: "Message envoyé avec succès"
       })

        
    }


    return (
        <Card className={className}>
            <Toaster />
            <CardHeader>
                <CardTitle className="text-center">Remplissez ce formulaire</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="flex flex-col md:grid md:grid-cols-2 gap-5 w-full">
                            <FormField
                                control={form.control}      
                                name="firstname"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Prénom(s)</FormLabel>
                                    <FormControl>
                                        <Input  placeholder="Jhon" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="lastname"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Nom(s)</FormLabel>
                                    <FormControl>
                                        <Input  placeholder="Doe" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="jhondoe@gmail.com" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Numéro de téléphone</FormLabel>
                                <FormControl>
                                    <Input placeholder="+242 06 606 31 33" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Mon message..." {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        
                        <div className="flex justify-center">
                            <Button type="submit" className="w-80">Envoyer</Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}