import { Dispatch, JSX, SetStateAction } from "react";
import { Steps } from "@/types/steps";
import { z } from "zod";
import { Actions } from "@/types/checkout-store-states/actions";
import { States } from "@/types/checkout-store-states/states";
import { useCheckoutStore } from "@/stores/checkout-store";
import { Address } from "@/types/checkout-store-states/address";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
    street: z.string().min(2, "A rua é obrigatória"),
    number: z.string().min(1, "O número é obrigatório"),
    complement: z.string().optional(),
    district: z.string().min(2, "O bairro é obrigatório"),
    city: z.string().min(2, "A cidade é obrigatória"),
    state: z.string().min(2, "O estado é obrigatório"),
});

type Props = {
    setStep: Dispatch<SetStateAction<Steps>>;
}

export const StepAddress = ({ setStep }: Props): JSX.Element => {
    const { address, setAddress }: {
        address: Address;
        setAddress: (address: Address) => void;
    } = useCheckoutStore((state: States & Actions): States & Actions => state);


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            ...address
        }
    });

    const handleSubmit = (data: z.infer<typeof formSchema>): void => {
        setAddress(data);
        setStep("finish");
    }

    const handleBack = (): void => {
        setStep("user");
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSubmit)}
            >
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="street"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Rua</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="number"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Número</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="complement"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Complemento</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="district"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Bairro</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Cidade</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Estado</FormLabel>
                                <FormControl>
                                    <Select defaultValue={field.value} onValueChange={field.onChange}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Selecione o estado" />
                                        </SelectTrigger>
                                        <SelectContent position="popper">
                                            <SelectItem value="sp">São Paulo</SelectItem>
                                            <SelectItem value="rj">Rio de Janeiro</SelectItem>
                                            <SelectItem value="mg">Minas Gerais</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="mt-4 flex justify-between gap-4">
                    <Button
                        variant={"link"}
                        onClick={handleBack}
                        className="flex-1"
                    >Voltar</Button>

                    <Button
                        type="submit"
                        variant={"default"}
                        className="flex-1"
                    >Concluir</Button>
                </div>
            </form>
        </Form>
    );
}