import { FaBullhorn, FaHome, FaMoneyBill, FaBookOpen, FaRoad, FaStar, FaBusAlt, FaBus, FaSms, FaUser, FaUserSecret, FaTicketAlt, FaRegEye, FaList, FaPlus } from "react-icons/fa";

export const mainLinks = [
    {
        title: "Acceuil",
        icon: FaHome,
        href: "/"
    },
    {
        title: "Agences",
        icon: FaBus,
        href: "/agencies"
    },
    {
        title: "Destinations",
        icon: FaRoad,
        href: "/trips"
    },
    {
        title: "Contact",
        icon: FaSms,
        href: "/contact"
    }
]

export const userLinks = [
    {
        title: "Tableau de bord",
        icon: FaHome,
        href: "/dashboard"
    },
    {
        title: "Réservations",
        icon: FaBookOpen,
        href: "/dashboard/bookings/"
    },
    {
        title: "Billets",
        icon: FaTicketAlt,
        href: "/agency/dashboard/tickets"
    },
    {
        title: "Evaluations",
        icon: FaStar,
        href: "/dashboard/reviews/"
    }
]

export const agencyLinks = [
    {
        title: "Tableau de bord",
        icon: FaHome,
        href: "/agency/dashboard"
    },
    {
        title: "Adminstrateurs",
        icon: FaUserSecret,
        href: "/superadmin/agency-admins"
    },
    {
        title: "Destinations",
        icon: FaRoad,
        href: "/agency/dashboard/trips"
    },
    {
        title: "Réservations",
        icon: FaBookOpen,
        href: "/agency/dashboard/bookings"
    },
    {
        title: "Billets",
        icon: FaTicketAlt,
        href: "/agency/dashboard/billets"
    },
    {
        title: "Promotions",
        icon: FaBullhorn,
        href: "/agency/dashboard/promotions"
    }
]

export const superadminLinks = [
    {
        title: "Tableau de bord",
        icon: FaHome,
        href: "/superadmin/dashboard"
    },
    {
        title: "Agences",
        icon: FaBus,
        href: "/superadmin/dashboard/agencies",
        isChildren: true,
        children: [
            {
                title: "Toutes les agences",
                icon: FaList,
                href: "/superadmin/dashboard/agencies"
            },
            {
                title: "Nouvelle agence",
                icon: FaPlus,
                href: "/superadmin/dashboard/agencies/add"
            }
        ]
    },
    {
        title: "Adminstrateurs d'agences",
        icon: FaUserSecret,
        href: "/superadmin/dashboard/agency-admins"
    },
    {
        title: "Utilisateurs",
        icon: FaUser,
        href: "/superadmin/dashboard/users"
    },
    {
        title: "Réservations",
        icon: FaBookOpen,
        href: "/superadmin/dashboard/bookings"
    },
    {
        title: "Billets",
        icon: FaTicketAlt,
        href: "/superadmin/dashboard/tickets"
    },
    {
        title: "Messages",
        icon: FaSms,
        href: "/superadmin/dashboard/messages",
        isChildren: true,
        children: [
            {
                title: "Tous les messages",
                icon: FaRegEye,
                href: "/superadmin/dashboard/messages"
            }
        ]
    },
    
]