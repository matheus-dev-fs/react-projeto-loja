import { JSX } from "react";
import { Separator } from "@/components/ui/separator";

export const Footer = (): JSX.Element => {
    return (
        <footer className="mt-5">
            <Separator />
            <div className="my-5 text-center text-sm opacity-50">
                Criado pelo Matheus
            </div>
        </footer>
    );
}