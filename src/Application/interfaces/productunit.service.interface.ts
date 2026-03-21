import ProductUnit from "../../Domain/entities/productunit";
import { ProductUnitDto } from './../dtos/productunit.dto';

export interface IProductUnitService {
  findAll(page: number, pageSize: number): Promise<ProductUnit[]>;
  findById(id: string): Promise<ProductUnit | null>;
  create(data: ProductUnitDto): Promise<ProductUnit>;
  update(id: string, data: ProductUnitDto): Promise<ProductUnit | null>;
  delete(id: string): Promise<void>;
}
