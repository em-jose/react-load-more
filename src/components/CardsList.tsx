import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@components/LoadingSpinner";
import { Message } from "@/components/Message";
import { ProductCard } from "@/components/ProductCard";
import { useFetchProductList } from "@/hooks/useFetchProductList";

export const CardsList = () => {
    const { productList, endReached, isLoading, loadMoreProducts } =
        useFetchProductList();

    return (
        <>
            {productList?.products && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
                    {productList.products.map((product: Product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            )}

            {isLoading && (
                <div className="flex justify-center my-5">
                    <LoadingSpinner />
                </div>
            )}

            {endReached && (
                <Message text="There is no more products" type="error" />
            )}

            <div className="flex justify-center">
                <Button
                    onClick={() => loadMoreProducts()}
                    disabled={endReached}
                >
                    Load more products
                </Button>
            </div>
        </>
    );
};
