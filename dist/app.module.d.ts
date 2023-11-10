import { OnModuleInit } from '@nestjs/common';
import { UtilisateurService } from './utilisateur/utilisateur.service';
export declare class AppModule implements OnModuleInit {
    private readonly utilisateurService;
    constructor(utilisateurService: UtilisateurService);
    onModuleInit(): Promise<{
        message: string;
        error?: undefined;
    } | {
        message: string;
        error: any;
    }>;
}
