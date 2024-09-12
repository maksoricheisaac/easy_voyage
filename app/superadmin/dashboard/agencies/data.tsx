"use client"

import { useEffect, useState } from "react"

type AgencyType=  {
    id: string;
    name: string;
    address: string;
    phone: string | null;
    email: string | null;
    logoUrl: string | null;
    createdAt: Date;
    updatedAt: Date;
} 

export const Data = () => {
    const [agencies, setAgencies] = useState<AgencyType[]>()

    useEffect(() => {
        const getData = async() => {
            const data = await (await fetch("http://localhost:3000/api/superadmin/agencies")).json()
            setAgencies(data.agencies)
        }
        getData()
    }, [])

    console.log("Agencies", agencies)

    return (
        <section>

        </section>
    )
}