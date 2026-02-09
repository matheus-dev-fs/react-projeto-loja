import { States } from "@/types/checkout-store-states/states";

export type Actions = {
    setName: (name: States["name"]) => void;
    setAddress: (address: States["address"]) => void;
}