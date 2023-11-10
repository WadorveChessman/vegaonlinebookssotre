import { CreateLivreDto } from './dto/create-livre.dto';
import { UpdateLivreDto } from './dto/update-livre.dto';
import { Livre } from './entities/livre.entity';
import { Repository } from 'typeorm';
export declare class LivresService {
    private readonly livreRepository;
    constructor(livreRepository: Repository<Livre>);
    findAll(): Promise<Livre[]>;
    findOne(id: number): Promise<Livre | null>;
    create(createLivreDto: CreateLivreDto): Promise<Livre>;
    update(id: number, updateLivreDto: UpdateLivreDto): Promise<Livre>;
    remove(id: number): Promise<Livre>;
}
