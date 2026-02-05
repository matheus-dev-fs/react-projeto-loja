import { JSX } from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const CartSidebar = (): JSX.Element => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button>
                    <RocketIcon className="mr-2" />
                    <p>Carrinho</p>
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
                    ...
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between items-center text-xs px-4">
                    <div>Subtotal:</div>
                    <div>...</div>
                </div>

                <Separator className="my-4" />

                <div className="text-center">
                    <Button>Finalizar compra</Button>
                </div>
            </SheetContent>
        </Sheet>
    );
}