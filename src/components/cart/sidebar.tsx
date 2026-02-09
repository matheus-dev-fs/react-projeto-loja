"use client";

import { Dispatch, JSX, SetStateAction, useState } from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/stores/cart-store";
import { States } from "@/types/cart-store-states/states";
import { Actions } from "@/types/cart-store-states/actions";
import { Cart } from "@/types/cart-store-states/cart";
import { CartItem } from "@/components/cart/item";
import { CheckoutDialog } from "@/components/checkout/dialog";

export const CartSidebar = (): JSX.Element => {
    const [checkoutOpen, setCheckoutOpen]: [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(false);
    const { cart } = useCartStore((state: States & Actions): States & Actions => state);

    const subTotal: number = cart.reduce(
        (accumulator: number, cartItem: Cart): number =>
            accumulator + cartItem.product.price * cartItem.quantity,
        0
    );

    const handleCheckoutOpen = (): void => {
        setCheckoutOpen(true);
    }

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="relative">
                    <RocketIcon className="mr-2" />
                    <p>Carrinho</p>
                    {cart.length > 0 && 
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 rounded-full"></div>
                    }
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Carrinho</SheetTitle>
                    <SheetDescription className="sr-only">
                        Este é o seu carrinho de compras, onde você pode revisar os itens antes de finalizar a compra.
                    </SheetDescription>
                </SheetHeader>

                <div className="flex flex-col gap-5 my-3 px-4">
                    {cart.map((cartItem: Cart): JSX.Element => (
                        <CartItem key={cartItem.product.id} item={cartItem} />
                    ))}
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between items-center text-xs px-4">
                    <div>Subtotal:</div>
                    <div>
                        R$ {subTotal.toFixed(2)}
                    </div>
                </div>

                <Separator className="my-4" />

                <div className="text-center">
                    <Button
                        disabled={cart.length === 0}
                        onClick={handleCheckoutOpen}
                    >Finalizar compra</Button>
                </div>

                <CheckoutDialog 
                    open={checkoutOpen}
                    onOpenChange={setCheckoutOpen}
                />
            </SheetContent>
        </Sheet>
    );
}