import { productModelServer } from './product.module';

export interface CartModelServer{
  total: number;
  data: [{
    product: productModelServer,
    numInCart: number
  }];
}

export  interface CartModelPublic{
  total: number;
  prodData: [
    {
      id: number;
      inCart: number;
    }
  ];
}
