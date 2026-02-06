import { JSX } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllProducts } from "@/services/product";
import { Product } from "@/types/product";

export const ProductsTab = async (): Promise<JSX.Element> => {
    const products: Product[] = await getAllProducts();

    return (
        <Tabs defaultValue="tab1">
            <TabsList className="flex w-full">
                <TabsTrigger 
                    value="tab1"
                    className="flex-1"
                >Tab 1</TabsTrigger>
                <TabsTrigger 
                    value="tab2"
                    className="flex-1"
                >Tab 2</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1" className="mt-6">
                Conteudo da aba 1
            </TabsContent>
            <TabsContent value="tab2" className="mt-6">
                Conteudo da aba 2
            </TabsContent>
        </Tabs>
    );
}