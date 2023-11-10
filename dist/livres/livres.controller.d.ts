import { LivresService } from './livres.service';
import { CreateLivreDto } from './dto/create-livre.dto';
import { UpdateLivreDto } from './dto/update-livre.dto';
import { Livre } from './entities/livre.entity';
export declare class LivresController {
    private readonly livresService;
    constructor(livresService: LivresService);
    create(createLivreDto: CreateLivreDto): Promise<Livre>;
    findAll(): Promise<Livre[]>;
    findOne(id: string): Promise<Livre>;
    update(id: string, updateLivreDto: UpdateLivreDto): Promise<Livre>;
    remove(id: string): Promise<Livre>;
}
