"use client";

import { Product } from "@/types/product";
import { JSX } from "react";
import { Button } from "@/components/ui/button";
import { toast} from "sonner";

type Props = {
    item: Product;
}

export const ProductItem = ({ item }: Props): JSX.Element => {
    const handleAddButton = (): void => {
        toast.success(`Produto adicionado ao carrinho!`, {
            description: item.name,
            action: {
                label: 'Fechar',
                onClick: (): void => {
                    toast.dismiss();
                }
            }
        });
    };

    return (
        <div>
            <div className="rounded-md overflow-hidden">
                <img 
                    src={item.image}
                    alt={item.name}
                    className="w-full h-32 object-cover"
                />
            </div>
            <div className="mt-3 flex flex-col gap-2">
                <p className="text-lg">{item.name}</p>
                <p className="text-sm opacity-50">{item.price.toFixed(2)}</p>
                <Button
                    variant="outline"
                    onClick={handleAddButton}
                >Adicionar</Button>
            </div>
        </div>
    );
}