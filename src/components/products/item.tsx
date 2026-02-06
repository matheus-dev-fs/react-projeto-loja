import { Product } from "@/types/product";
import { JSX } from "react";

type Props = {
    item: Product;
}

export const ProductItem = ({ item }: Props): JSX.Element => {
    return (
        <div>
            ...
        </div>
    );
}