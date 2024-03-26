import { Card } from "./Card";
import { useFetchProductList } from "@/hooks/useFetchProductList";
import { Message } from "@/components/Message";
import { LoadingSpinner } from "@components/LoadingSpinner";
import InfiniteScroll from "react-infinite-scroll-component";

export const CardsListInfinite = () => {
    const { productList, endReached, loadMoreProducts } = useFetchProductList();

    return (
        <>
            {productList?.products && (
                <InfiniteScroll
                    dataLength={productList.products.length}
                    next={loadMoreProducts}
                    hasMore={!endReached}
                    loader={
                        <div className="flex justify-center my-5">
                            <LoadingSpinner />
                        </div>
                    }
                    endMessage={
                        <Message
                            text="There is no more products"
                            type="error"
                        />
                    }
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
                        {productList?.products.map((product: Product) => (
                            <Card key={product.id} {...product} />
                        ))}
                    </div>
                </InfiniteScroll>
            )}
        </>
    );
};
