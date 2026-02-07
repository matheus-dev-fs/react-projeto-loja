import { Cart } from "@/types/cart-store-states/cart";
import { JSX } from "react";

type Props = {
    item: Cart;
}

export const CartItem = ({ item }: Props): JSX.Element => {
    return (
        <div>
            ...
        </div>
    );
}