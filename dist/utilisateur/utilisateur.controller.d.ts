import { UtilisateurService } from './utilisateur.service';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { UpdateUtilisateurDto } from './dto/update-utilisateur.dto';
import { SignInUserDto } from './dto/user-signin.dto';
import { Utilisateur } from './entities/utilisateur.entity';
export declare class UtilisateurController {
    private readonly utilisateurService;
    constructor(utilisateurService: UtilisateurService);
    create(createUtilisateurDto: CreateUtilisateurDto): Promise<Utilisateur>;
    remove(id: string): Promise<Utilisateur>;
    signIn(signInUserDto: SignInUserDto): Promise<{
        token_access: string;
        user: Utilisateur;
    }>;
    findAll(): Promise<Utilisateur[]>;
    findOne(id: string): Promise<Utilisateur>;
    viewProfile(currentUser: Utilisateur): Promise<Utilisateur>;
    update(currentUser: Utilisateur, updateUtilisateurDto: UpdateUtilisateurDto): Promise<Utilisateur>;
}
