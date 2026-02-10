import { useCheckoutStore } from "@/stores/checkout-store";
import { Actions } from "@/types/checkout-store-states/actions";
import { States } from "@/types/checkout-store-states/states";
import { JSX } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { generateMessage } from "@/lib/generate-message";

export const StepFinish = (): JSX.Element => {
    const { name }: {
        name: string;
    } = useCheckoutStore((state: States & Actions): States & Actions => state);

    const message: string = generateMessage();
    const linkWhatsapp: string = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURI(message)}`;

    return (
        <div className="text-center flex flex-col gap-5">
            <p>Perfeito, <strong>{name}</strong>!</p>
            <p>Agora envie o seu pedido ao nosso Whatsapp para concluir. Nosso atendente irá sobre o andamento do pedido.</p>
            <Button>
                <Link target="_blank" href={linkWhatsapp}>Enviar para o Whatsapp</Link>
            </Button>
        </div>
    );
}