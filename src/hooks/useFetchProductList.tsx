import { useEffect, useState } from "react";

const PRODUCTS_LIMIT = 10;

export const useFetchProductList = () => {
    const [productList, setProductList] = useState<ProductList>();
    const [currentSkip, setCurrentSkip] = useState<number>(0);
    const [endReached, setEndReached] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState(false);

    const getProductList = async (
        limit: number = PRODUCTS_LIMIT,
        skip: number = currentSkip
    ): Promise<ProductList> => {
        const resp = await fetch(
            `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
        );
        const data = await resp.json();

        return data;
    };

    const loadMoreProducts = async () => {
        if (endReached) return false;

        setIsLoading(true);

        const skip = PRODUCTS_LIMIT + currentSkip;
        const productsListApi = await getProductList(PRODUCTS_LIMIT, skip);
        const productsEndReached = productsListApi.products.length
            ? false
            : true;
        const products = productsListApi.products && [
            ...productList.products,
            ...productsListApi.products,
        ];

        productsListApi.products = products;

        setCurrentSkip(skip);
        setProductList(productsListApi);
        setEndReached(productsEndReached);
        setIsLoading(false);
    };

    useEffect(() => {
        setIsLoading(true);
        getProductList().then((productListApi) => {
            setProductList(productListApi);
            setIsLoading(false);
        });
    }, []);

    return {
        productList,
        endReached,
        isLoading,
        loadMoreProducts,
    };
};
