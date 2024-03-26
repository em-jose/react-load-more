import "animate.css";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export const ProductCard = (product: Product) => {
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>
                        <div className="text-center">{product.title}</div>
                    </CardTitle>
                    <CardDescription>
                        <div className="flex justify-center">
                            <img
                                src={product.thumbnail}
                                alt=""
                                className="rounded max-h-48"
                            />
                        </div>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-center">
                        <ul>
                            <li>Discount: {product?.discountPercentage}%</li>
                            <li>Price: {product.price}€</li>
                        </ul>
                    </div>
                </CardContent>
                <CardFooter>
                    <div className="text-center w-full">
                        {product.description}
                    </div>
                </CardFooter>
            </Card>
        </>
    );
};
