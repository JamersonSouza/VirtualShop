import { v4 as uuidv4 } from 'uuid';

type UUID = string;

export interface cart {
    items: Array<CartItem>;
}

export interface CartItem {
    productUUID: UUID;
    product: string,
    name: string,
    price: number,
    qtd: number,
}
