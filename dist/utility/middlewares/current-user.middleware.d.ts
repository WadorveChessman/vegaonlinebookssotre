import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { Utilisateur } from 'src/utilisateur/entities/utilisateur.entity';
import { UtilisateurService } from 'src/utilisateur/utilisateur.service';
declare global {
    namespace Express {
        interface Request {
            currentUser?: Utilisateur;
        }
    }
}
export declare class CurrentUserMiddleware implements NestMiddleware {
    private readonly usersService;
    constructor(usersService: UtilisateurService);
    use(req: Request, res: Response, next: NextFunction): Promise<void>;
}
