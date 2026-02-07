import { useCartStore } from "@/stores/cart-store";
import { Actions } from "@/types/cart-store-states/actions";
import { Cart } from "@/types/cart-store-states/cart"
import { States } from "@/types/cart-store-states/states";
import { JSX } from "react"
import { Button } from "../ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";

type Props = {
    cartItem: Cart;
}

export const CartItemQuantity = ({ cartItem }: Props): JSX.Element => {
    const { upsertCartItem } = useCartStore((state: States & Actions): States & Actions => state);

    const handlePlusButtonClick = (): void => {
        upsertCartItem(cartItem.product, 1);
    }

    const handleMinusButtonClick = (): void => {
        upsertCartItem(cartItem.product, -1);
    }

    return (
        <div className="flex items-center gap-2">
            <Button 
                onClick={handleMinusButtonClick}
                size="icon"
                variant="ghost"
                className="size-5"
            >
                <MinusIcon className="size-3"/>
            </Button>
            <p className="text-sm">{cartItem.quantity}</p>
            <Button 
                onClick={handlePlusButtonClick}
                size="icon"
                variant="ghost"
                className="size-5"
            >
                <PlusIcon className="size-3"/>
            </Button>
        </div>
    )
}