import { JSX } from "react";

export const ProductEmpty = (): JSX.Element => {
    return (
        <div className="w-full text-center my-10">
            <p className="text-3xl font-bold">Ops!</p>
            <p className="mt-5">Parece que não temos produtos nessa categoria.</p>
        </div>
    );
}