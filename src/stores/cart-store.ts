import { Actions } from "@/types/cart-store-states/actions";
import { Cart } from "@/types/cart-store-states/cart";
import { States } from "@/types/cart-store-states/states";
import { Product } from "@/types/product";
import { create } from "zustand";

const initialState: States = {
    cart: [],
}

export const useCartStore = create<States & Actions>()(
    (set): States & Actions => ({
        ...initialState,
        upsertCartItem: (
            product: Product,
            quantity: number
        ): void =>
            set((state: States & Actions): States & Actions => {
                let newCart: Cart[] = state.cart;

                let productIndex = newCart.findIndex(
                    (cartItem: Cart): boolean =>
                        cartItem.product.id === product.id
                );

                if (productIndex === -1) {
                    newCart.push({ product, quantity: 0 });
                    productIndex = newCart.length - 1;
                }

                newCart[productIndex].quantity += quantity;

                if (newCart[productIndex].quantity <= 0) {
                    newCart = newCart.filter(
                        (cartItem: Cart): boolean =>
                            cartItem.product.id !== product.id
                    );
                }

                return { ...state, cart: newCart };
            })
    })
);