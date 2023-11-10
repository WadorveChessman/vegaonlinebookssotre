import { CreatePanierDto } from './dto/create-panier.dto';
import { UpdatePanierDto } from './dto/update-panier.dto';
import { Panier } from './entities/panier.entity';
import { Repository } from 'typeorm';
import { UtilisateurService } from 'src/utilisateur/utilisateur.service';
export declare class PaniersService {
    private readonly panierRepository;
    private readonly utilisateurService;
    constructor(panierRepository: Repository<Panier>, utilisateurService: UtilisateurService);
    create(createPanierDto: CreatePanierDto): Promise<Panier>;
    findAll(): Promise<Panier[]>;
    findOne(id: number): Promise<Panier>;
    update(id: number, updatePanierDto: UpdatePanierDto): Promise<Panier>;
    remove(id: number): Promise<void>;
}
