import { JSX } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllProducts } from "@/services/product";
import { Product } from "@/types/product";
import { Tab } from "@/types/tab";

export const ProductsTab = async (): Promise<JSX.Element> => {
    const products: Product[] = await getAllProducts();

    const tabs: Tab[] = [
        {
            title: 'Sushi',
            value: 'sushi',
            products: []
        },
        {
            title: 'Temaki',
            value: 'temaki',
            products: []
        },
        {
            title: 'Combinados',
            value: 'pack',
            products: []
        },
        {
            title: 'Bebidas',
            value: 'beverage',
            products: []
        }
    ];

    return (
        <Tabs defaultValue="sushi">
            <TabsList className="flex w-full">
                {tabs.map((tab: Tab): JSX.Element => (
                    <TabsTrigger 
                        key={tab.value}
                        value={tab.value}
                        className="flex-1"
                    >
                        {tab.title}
                    </TabsTrigger>
                ))}
            </TabsList>
            {tabs.map((tab: Tab): JSX.Element => (
                <TabsContent
                    key={tab.value}
                    value={tab.value}
                    className="mt-6"
                >
                    ...
                </TabsContent>
            ))}
        </Tabs>
    );
}