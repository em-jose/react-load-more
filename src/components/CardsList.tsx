import { Card } from "./Card";
import { useFetchProductList } from "@/hooks/useFetchProductList";
import { LoadMoreButton } from "@/components/LoadMoreButton";
import { Message } from "@/components/Message";

export const CardsList = () => {
    const { productList, endReached, loadMoreProducts } = useFetchProductList();

    return (
        <>
            <h2>Products list</h2>

            {productList?.products && (
                <div className="grid grid-cols-2 gap-4 my-5">
                    {productList.products.map((product: Product) => (
                        <Card key={product.id} {...product} />
                    ))}
                </div>
            )}

            {endReached && (
                <Message text="There is no more products" type="error" />
            )}

            <LoadMoreButton
                loadMoreProducts={loadMoreProducts}
                endReached={endReached}
            />
        </>
    );
};
