/* eslint-disable react/no-unescaped-entities */
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { FaBookOpen, FaBus, FaMoneyCheckAlt, FaRoad, FaSms, FaTicketAlt, FaUser, FaUserSecret, FaUserShield } from "react-icons/fa"


export const Data = () => {
    const [agencies, setAgencies] = useState(0)
    const [messages, setMessages] = useState(0)
    const [users, setUsers] = useState(0)
    const [agencyAdmins, setAgencyAdmins] = useState(0)
    const [bookings, setBookings] = useState(0)
    const [tickets, setTickets] = useState(0)
    const [trips, setTrips] = useState(0)
    
    useEffect(() => {
        const getData = async() => {
            const data = await (await fetch("http://localhost:3000/api/superadmin")).json()
            setAgencies(data.agencies)
            setMessages(data.messages)
            setUsers(data.users)
            setAgencyAdmins(data.agencyAdmins)
            setBookings(data.bookings)
            setTickets(data.tickets)
            setTrips(data.trips)
           
        }
        getData()
    }, [])

    return (
        <section className="px-10 flex flex-wrap  justify-center gap-5">
            <Card className="h-28 w-60 bg-cyan-500 hover:bg-cyan-700 duration-300">
                <CardContent>
                    <div className="flex items-center gap-2">
                        <div className="p-3 bg-secondary rounded-lg w-11">
                            <FaUser className="w-5 h-5"/>
                        </div>
                        <CardHeader>
                            <CardTitle className="text-lg">Utilisateurs </CardTitle>
                            <p className="font-bold text-2xl">{users} </p>
                        </CardHeader>
                    </div>
                </CardContent>
            </Card>

            <Card className="h-28 w-60 bg-emerald-500 hover:bg-emerald-700 duration-300">
                <CardContent>
                    <div className="flex items-center gap-2">
                        <div className="p-3 bg-secondary rounded-lg w-11">
                            <FaBus className="w-5 h-5"/>
                        </div>
                        <CardHeader>
                            <CardTitle className="text-lg">Agences </CardTitle>
                            <p className="font-bold text-2xl">{agencies} </p>
                        </CardHeader>
                    </div>
                </CardContent>
            </Card>

            <Card className="h-28 w-60 bg-cyan-500 hover:bg-cyan-700 duration-300">
                <CardContent>
                    <div className="flex items-center gap-2">
                        <div className="p-3 bg-secondary rounded-lg w-11">
                            <FaUserSecret className="w-5 h-5"/>
                        </div>
                        <CardHeader>
                            <CardTitle className="text-lg">Adminstrateurs </CardTitle>
                            <p className="font-bold text-2xl">{users} </p>
                        </CardHeader>
                    </div>
                </CardContent>
            </Card>

           <Card className="h-28 w-60 bg-rose-500 hover:bg-rose-700 duration-300">
                <CardContent>
                    <div className="flex items-center gap-2">
                        <div className="p-3 bg-secondary rounded-lg w-11">
                            <FaRoad className="w-5 h-5"/>
                        </div>
                        <CardHeader>
                            <CardTitle className="text-lg">Destinations</CardTitle>
                            <p className="font-bold text-2xl">{trips} </p>
                            
                        </CardHeader>
                    </div>
                </CardContent>
            </Card>

            <Card className="h-28 w-60 bg-orange-500 hover:bg-orange-700 duration-300">
                <CardContent>
                    <div className="flex items-center gap-2">
                        <div className="p-3 bg-secondary rounded-lg w-11">
                            <FaBookOpen className="w-5 h-5"/>
                        </div>
                        <CardHeader>
                            <CardTitle className="text-lg">Réservations</CardTitle>
                            <p className="font-bold text-2xl">{bookings} </p>
                        </CardHeader>
                    </div>
                </CardContent>
            </Card>

            <Card className="h-28 w-60 bg-purple-500 hover:bg-purple-700 duration-300">
                <CardContent>
                    <div className="flex items-center gap-2">
                        <div className="p-3 bg-secondary rounded-lg w-11">
                            <FaTicketAlt className="w-5 h-5"/>
                        </div>
                        <CardHeader>
                            <CardTitle className="text-lg">Billets </CardTitle>
                            <p className="font-bold text-2xl">{tickets} </p>
                        </CardHeader>
                    </div>
                </CardContent>
            </Card>

            <Card className="h-28 w-60 bg-lime-500 hover:bg-lime-700 duration-300">
                <CardContent>
                    <div className="flex items-center gap-2">
                        <div className="p-3 bg-secondary rounded-lg w-11">
                            <FaSms className="w-5 h-5"/>
                        </div>
                        <CardHeader>
                            <CardTitle className="text-lg">Messages </CardTitle>
                            <p className="font-bold text-2xl">{messages} </p>
                        </CardHeader>
                    </div>
                </CardContent>
            </Card>

            
        </section>
    )
}