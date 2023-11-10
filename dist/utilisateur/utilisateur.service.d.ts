import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { UpdateUtilisateurDto } from './dto/update-utilisateur.dto';
import { Utilisateur } from './entities/utilisateur.entity';
import { Repository } from 'typeorm';
import { SignInUserDto } from './dto/user-signin.dto';
import { UserRole } from 'src/utility/common/user-roles.enum';
export declare class UtilisateurService {
    private readonly utilisateurRepository;
    constructor(utilisateurRepository: Repository<Utilisateur>);
    findOneByEmail(email: string): Promise<Utilisateur>;
    create(createUtilisateurDto: CreateUtilisateurDto): Promise<Utilisateur>;
    findAll(): Promise<Utilisateur[]>;
    findOne(id: number): Promise<Utilisateur>;
    update(id: number, updateUtilisateurDto: UpdateUtilisateurDto): Promise<Utilisateur>;
    remove(id: number): Promise<Utilisateur>;
    signin(signInUserDto: SignInUserDto): Promise<Utilisateur>;
    token_access(user: Utilisateur): Promise<string>;
    createDefaultUser(): Promise<Utilisateur>;
    updateUserRoles(id: number, roles: UserRole[]): Promise<Utilisateur>;
}
