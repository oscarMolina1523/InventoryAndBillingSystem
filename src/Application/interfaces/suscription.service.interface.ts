import Suscription from "../../Domain/entities/suscription";
import { SuscriptionDto } from './../dtos/suscription.dto';

export interface ISuscriptionService {
  findAll(page: number, pageSize: number): Promise<Suscription[]>;
  findById(id: string): Promise<Suscription | null>;
  create(data: SuscriptionDto): Promise<Suscription>;
  update(id: string, data: SuscriptionDto): Promise<Suscription | null>;
  delete(id: string): Promise<void>;
}
