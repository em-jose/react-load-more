import { Card } from "./Card";
import { useFetchProductList } from "@/hooks/useFetchProductList";
import { LoadMoreButton } from "@/components/LoadMoreButton";
import { Message } from "@/components/Message";
import { LoadingSpinner } from "@components/LoadingSpinner";

export const CardsList = () => {
    const { productList, endReached, isLoading, loadMoreProducts } =
        useFetchProductList();

    return (
        <>
            {productList?.products && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
                    {productList.products.map((product: Product) => (
                        <Card key={product.id} {...product} />
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
                <LoadMoreButton
                    loadMoreProducts={loadMoreProducts}
                    endReached={endReached}
                />
            </div>
        </>
    );
};
