import { Commande } from 'src/commande/entities/commande.entity';
import { LivrePanier } from 'src/livre-panier/entities/livre-panier.entity';
import { Panier } from 'src/paniers/entities/panier.entity';
import { UserRole } from 'src/utility/common/user-roles.enum';
export declare class Utilisateur {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    password: string;
    photo: string;
    roles: UserRole[];
    commandes: Commande[];
    panier: Panier[];
    livrePanier: LivrePanier[];
}
