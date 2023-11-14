type UUID = string;
export interface Product {
    productUUID: UUID,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string 
}