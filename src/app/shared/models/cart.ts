import { v4 as uuidv4 } from 'uuid';

export interface cart {
    items: Array<CartItem>;
}

export interface CartItem {
    productUUID: typeof uuidv4,
    product: string,
    name: string,
    price: number,
    qtd: number,
}
