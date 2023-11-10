import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class AuthentificationGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean;
}
