import { Dispatch, JSX, SetStateAction } from "react";
import { Steps } from "@/types/steps";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCheckoutStore } from "@/stores/checkout-store";
import { Actions } from "@/types/checkout-store-states/actions";
import { States } from "@/types/checkout-store-states/states";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

const formSchema = z.object({
    name: z.string().min(2, "O nome é obrigatório"),
});

type Props = {
    setStep: Dispatch<SetStateAction<Steps>>;
}

export const StepUser = ({ setStep }: Props): JSX.Element => {
    const { name, setName }: {
        name: string;
        setName: (name: string) => void;
    } = useCheckoutStore((state: States & Actions): States & Actions => state);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name
        }
    });

    const handleSubmit = (data: z.infer<typeof formSchema>): void => {
        setName(data.name);
        setStep("address");
    }

    return (
        <Form {...form}>
            <form 
                onSubmit={form.handleSubmit(handleSubmit)}
                className="flex flex-col gap-4"
            >
                <FormField 
                    control={form.control}
                    name="name"
                    render={({ field}) => (
                        <FormItem>
                            <FormLabel>Nome</FormLabel>
                            <FormControl>
                                <Input
                                    autoFocus 
                                    {...field}
                                    placeholder="Qual o seu nome?" 
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" variant={"outline"}>Próximo</Button>
            </form>
        </Form>
    );
}