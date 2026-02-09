import { Dispatch, JSX, SetStateAction, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { StepUser } from "@/components/checkout/step-user";
import { StepFinish } from "@/components/checkout//step-finish";
import { StepAddress } from "@/components/checkout/step-address";
import { Steps } from "@/types/steps";

type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export const CheckoutDialog = ({ open, onOpenChange }: Props): JSX.Element => {
    const [step, setStep]: [Steps, Dispatch<SetStateAction<Steps>>] = useState<Steps>("user");

    let progressPct: number;
    switch (step) {
        case "user":
            progressPct = 33;
            break;
        case "address":
            progressPct = 66;
            break;
        case "finish":
            progressPct = 100;
            break;
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {step === "user" && "Dados Pessoais"}
                        {step === "address" && "Endereço de entrega"}
                        {step === "finish" && "Envio para o Whatsapp"}
                    </DialogTitle>
                </DialogHeader>

                <Progress value={progressPct} />
                <div className="flex flex-col gap-3">
                    {step === "user" && <StepUser setStep={setStep} />}
                    {step === "address" && <StepAddress setStep={setStep} />}
                    {step === "finish" && <StepFinish />}
                </div>
            </DialogContent>
        </Dialog>
    );
}