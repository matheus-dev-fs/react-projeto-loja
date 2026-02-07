import { Product } from "../product"

export type Actions = {
    upsertCartItem: (product: Product, quantity: number) => void;
}