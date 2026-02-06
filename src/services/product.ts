import { products } from "@/data/products";
import { Product } from "@/types/product";

export const getAllProducts = async (): Promise<Product[]> => {
    return new Promise(
        (
            resolve: (value: Product[] | PromiseLike<Product[]>) => void,
            reject: (reason?: any) => void
        ): void => {
            setTimeout((): void => {
                resolve(products);
            }, 1000);
        }
    );
};
// ...existing code...