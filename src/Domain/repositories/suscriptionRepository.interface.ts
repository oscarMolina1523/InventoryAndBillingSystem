import Suscription from '../entities/suscription';

export interface ISuscriptionRepository {
  findAll(page: number, pageSize: number): Promise<Suscription[]>;
  findById(id: string): Promise<Suscription | null>;
  findByField(field: string, value: string): Promise<Suscription | null>;
  create(data: Suscription): Promise<void>;
  update(data: Suscription): Promise<void>;
  delete(data: Suscription): Promise<void>;
}
