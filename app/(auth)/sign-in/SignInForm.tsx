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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card"
import { FaFacebook, FaGoogle } from "react-icons/fa" 
import Link from "next/link"
import { googleAction } from "./google.action"
import { signinAction } from "./signin.action"


const formSchema = z.object({  
    email: z.string().email(
        "Email invalide"
    ),
    password: z.string().min(10, {  
      message: "Doit contenir au moins 10 caractères",  
    })
  });

type Props = {
    className?: string
}
 

export const SignInForm = ({className} : Props) => {
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: ""
        }
    })
     
    
    const onSubmit = async(values: z.infer<typeof formSchema>)  => {
        await signinAction(values)    
    }


    return (
        <Card className={className}>
            
            <CardHeader>
                <CardTitle className="text-center">Connexion</CardTitle>
                <CardDescription className="text-center">Connectez-vous et réservez facilement</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type="email" placeholder="jhondoe@gmail.com" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Mot de passe</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="********" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        
                        <div className="flex justify-center">
                            <Button type="submit" className="w-80">Se connecter</Button>
                        </div>
                    </form>
                </Form>
                <div className="my-5 w-full flex gap-2 items-center">
                    <div className="h-[1px] bg-slate-500 w-full"></div>
                    <span>OU</span>
                    <div className="h-[1px] bg-slate-500 w-full"></div>
                </div>

                <div className="flex flex-col gap-2">
                    <Button 
                        className="w-full flex gap-5" 
                        variant="secondary"
                        onClick={async() => {
                            await googleAction()
                        }}
                    >
                        <FaGoogle className="w-5 h-5" /> 
                        <span>Se connecter avec Google</span>
                    </Button>
                </div>
                <div className="flex justify-between mt-5">
                    <p className="text-sm">Je n'ai pas encore de compte ?</p>
                    <Link href="/sign-up" className="text-primary text-sm" >S'inscrire</Link>
                </div>
            </CardContent>
        </Card>
    )
}