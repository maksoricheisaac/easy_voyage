"use client"

import { $Enums } from "@prisma/client";
import { useEffect, useState } from "react"

type UserType=  {
    id: string;
    email: string;
    password: string;
    lastname: string | null;
    firstname: string | null;
    phoneNumber: string | null;
    role: $Enums.Role;
    createdAt: Date;
    updatedAt: Date;
} 

export const Data = () => {
    const [users, setUsers] = useState<UserType[]>()

    useEffect(() => {
        const getData = async() => {
            const data = await (await fetch("http://localhost:3000/api/superadmin/users")).json()
            setUsers(data.users)
        }
        getData()
    }, [])

    console.log("Users : ",users)

    return (
        <section>

        </section>
    )
}