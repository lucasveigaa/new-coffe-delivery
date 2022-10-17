export interface CheckoutType {
  bairro: string;
  CEP: string;
  cidade: string;
  complemento: string;
  numero: string;
  rua: string;
  UF: string;
  paymentMethod: string;
}

export type Product = {
  idProduct: number;
  imgProduct: string;
  titleProduct: string;
  typeProduct: string[];
  descriptionProduct: string;
  valueProduct: number;
};

export interface ProductWithAmount extends Product {
  amountProduct: number;
}