import { Injectable } from '@nestjs/common';
//IMPORTAMOS O PRISMA
import {PrismaClient,Product} from '@prisma/client';
const prisma=new PrismaClient();
@Injectable()
export class ProductsService {

  //OBTENÇÃO DOS PRODUTOS
  public getProducts():Promise<Product[]>{
    return prisma.product.findMany();
  }
}
