export const publicRoutes: string[] = [
    "/",
    "/auth/login",
    "/auth/register",
    "/about",
    "/contact",
    "/search",  // Recherche de destination
  ];
  
  export const authenticatedUserRoutes: string[] = [
    "/dashboard",  // Tableau de bord utilisateur
    "/bookings",  // Liste des réservations de l'utilisateur
    "/bookings/:bookingId",  // Détails d'une réservation
    "/bookings/:bookingId/cancel",  // Annulation d'une réservation
    "/profile",  // Mise à jour du profil utilisateur
    "/notifications",  // Notifications utilisateur
    "/reviews",  // Avis et évaluations des agences
  ];
  
  export const authenticatedAgencyAdminRoutes: string[] = [
    "/agency/dashboard",  // Tableau de bord de l'agence
    "/agency/dashboard/trips",  // Gestion des trajets
    "/agency/dashboard/trips/create",  // Création d'un nouveau trajet
    "/agency/dashboard/trips/:tripId/edit",  // Modification d'un trajet
    "/agency/dashboard/bookings",  // Réservations pour l'agence
    "/agency/dashboard/bookings/:bookingId",  // Détails d'une réservation
    "/agency/dashboard/payments",  // Gestion des paiements pour l'agence
    "/agency/dashboard/notifications",  // Notifications pour l'agence
    "/agency/dashboard/profile",  // Mise à jour des informations de l'agence
    "/agency/dashboard/promotions",  // Gestion des promotions
  ];
  
  export const authenticatedSuperAdminRoutes: string[] = [
    "/superadmin/dashboard/",  // Tableau de bord du superadmin
    "/superadmin/dashboard/users",  // Gestion des utilisateurs
    "/superadmin/dashboard/agencies",  // Gestion des agences
    "/superadmin/dashboard/agency-admins",  // Gestion des administrateurs d'agence
    "/superadmin/dashboard/transactions",  // Supervision des transactions
    "/superadmin/dashboard/reports",  // Génération de rapports avancés
    "/superadmin/dashboard/settings",  // Paramètres globaux de la plateforme
    "/superadmin/dashboard/content-moderation",  // Modération des avis et commentaires
    "/superadmin/dashboard/security",  // Gestion de la sécurité et des logs
    "/superadmin/dashboard/communications",  // Gestion des communications globales
  ];
  