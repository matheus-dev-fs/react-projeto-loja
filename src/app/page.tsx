import { JSX } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const Page = (): JSX.Element => {
    return (
        <div className="w-full max-w-4xl mx-auto">
            <Header />
            <div className="mx-3">
                ...
            </div>
            <Footer />
        </div>
    );
}

export default Page;