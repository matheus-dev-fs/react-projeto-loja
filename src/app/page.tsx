import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { JSX } from "react";

const Page = (): JSX.Element => {
    return (
        <div>
            <Button>Clique aqui</Button>

            <ThemeToggle />
        </div>
    );
}

export default Page;