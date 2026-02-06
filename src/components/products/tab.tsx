import { JSX } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllProducts } from "@/services/product";
import { Product } from "@/types/product";
import { Tab } from "@/types/tab";
import { ProductEmpty } from "./empty";
import { ProductItem } from "./item";

export const ProductsTab = async (): Promise<JSX.Element> => {
    const products: Product[] = await getAllProducts();

    const tabs: Tab[] = [
        {
            title: 'Sushi',
            value: 'sushi',
            products: products.filter((product: Product): boolean => product.category === 'sushi')
        },
        {
            title: 'Temaki',
            value: 'temaki',
            products: products.filter((product: Product): boolean => product.category === 'temaki')
        },
        {
            title: 'Combinados',
            value: 'pack',
            products: products.filter((product: Product): boolean => product.category === 'pack')
        },
        {
            title: 'Bebidas',
            value: 'beverage',
            products: products.filter((product: Product): boolean => product.category === 'beverage')
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
                    {tab.products.length > 0 && 
                        <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                            {tab.products.map((product: Product): JSX.Element => (
                                <ProductItem item={product} key={product.id} />
                            ))}
                        </div>
                    }

                    {tab.products.length === 0 && 
                        <ProductEmpty />
                    }
                </TabsContent>
            ))}
        </Tabs>
    );
}