import "animate.css";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Rating } from "./Rating";

export const ProductCard = (product: Product) => {
    const originalPrice = Math.floor(
        product.price / (1 - product.discountPercentage / 100)
    );

    return (
        <>
            <Card>
                <CardHeader className="pb-0">
                    <div className="flex justify-center">
                        <img
                            src={product.thumbnail}
                            alt={`Image showing the product ${product.title}`}
                            className="rounded max-h-36"
                        />
                    </div>
                    <CardTitle className="text-lg">{product.title}</CardTitle>
                </CardHeader>
                <CardContent className="py-2">
                    <Rating rating={product.rating} />
                </CardContent>
                <CardFooter className="flex gap-2">
                    <span className="line-through">{originalPrice}€</span>
                    <span>{product.price}€</span>
                </CardFooter>
            </Card>
        </>
    );
};
