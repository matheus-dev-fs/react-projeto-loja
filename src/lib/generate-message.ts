import { useCartStore } from "@/stores/cart-store";
import { useCheckoutStore } from "@/stores/checkout-store";
import { Cart } from "@/types/cart-store-states/cart";
import { Address } from "@/types/checkout-store-states/address";

export const generateMessage = (): string => {
    const { name, address }: {
        name: string;
        address: Address;
    } = useCheckoutStore((state) => state);

    const { cart }: {
        cart: Cart[];
    } = useCartStore((state) => state);

    const orderProducts: string = cart.map((cart: Cart): string => `- ${cart.quantity}x ${cart.product.name}`).join("\n");

    return `**Dados do cliente:**
- Nome: ${name}
- Endereço: ${address.street}, ${address.number} (${address.complement})
${address.district}, ${address.city}/${address.state}
------
**Pedidos:**
${orderProducts}`;
}