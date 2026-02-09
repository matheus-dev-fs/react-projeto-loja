import { Dispatch, JSX, SetStateAction } from "react";
import { Steps } from "@/types/steps";

type Props = {
    setStep: Dispatch<SetStateAction<Steps>>;
}

export const StepAddress = ({ setStep }: Props): JSX.Element => {
    return (
        <div></div>
    );
}