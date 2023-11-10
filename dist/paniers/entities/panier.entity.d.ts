import { Commande } from 'src/commande/entities/commande.entity';
import { LivrePanier } from 'src/livre-panier/entities/livre-panier.entity';
import { Utilisateur } from 'src/utilisateur/entities/utilisateur.entity';
export declare class Panier {
    id: number;
    date: Date;
    utilisateur: Utilisateur;
    commandes: Commande[];
    livrePanier: LivrePanier[];
}
