import { LivreCommande } from 'src/livre-commande/entities/livre-commande.entity';
import { LivrePanier } from 'src/livre-panier/entities/livre-panier.entity';
export declare class Livre {
    id: number;
    titre: string;
    description: string;
    anneePublucation: number;
    prix: number;
    qte: number;
    auteur: string;
    categorie: string;
    commandes: LivreCommande[];
    livrePanier: LivrePanier[];
}
