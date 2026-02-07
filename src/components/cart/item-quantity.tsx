import { Cart } from "@/types/cart-store-states/cart"
import { JSX } from "react"

type Props = {
    cartItem: Cart;
}

export const CartItemQuantity = ({ cartItem }: Props): JSX.Element => {
    return (
        <div>
            <p className="text-sm">{cartItem.quantity}</p>
        </div>
    )
}