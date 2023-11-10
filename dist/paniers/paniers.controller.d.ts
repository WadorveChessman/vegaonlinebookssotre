import { PaniersService } from './paniers.service';
import { CreatePanierDto } from './dto/create-panier.dto';
import { UpdatePanierDto } from './dto/update-panier.dto';
export declare class PaniersController {
    private readonly paniersService;
    constructor(paniersService: PaniersService);
    create(createPanierDto: CreatePanierDto): Promise<import("./entities/panier.entity").Panier>;
    findAll(): Promise<import("./entities/panier.entity").Panier[]>;
    findOne(id: string): Promise<import("./entities/panier.entity").Panier>;
    update(id: string, updatePanierDto: UpdatePanierDto): Promise<import("./entities/panier.entity").Panier>;
    remove(id: string): void;
}
