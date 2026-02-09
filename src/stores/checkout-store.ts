import { Actions } from "@/types/checkout-store-states/actions";
import { States } from "@/types/checkout-store-states/states";
import { create } from "zustand";

const initialState: States = {
    name: "",
    address: {
        street: "",
        number: "",
        district: "",
        city: "",
        state: ""
    }
};

export const useCheckoutStore = create<States & Actions>()(
    (set): States & Actions => ({
        ...initialState,
        setName: (name: States["name"]): void =>
            set((state: States & Actions): States & Actions => ({ ...state, name })),
        setAddress: (address: States["address"]): void =>
            set((state: States & Actions): States & Actions => ({ ...state, address }))
    }));