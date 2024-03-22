import { twMerge } from "tailwind-merge";

export const LoadMoreButton = ({
    loadMoreProducts,
    endReached,
}: LoadMoreButtonProps) => {
    return (
        <button
            className={twMerge(
                "bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded",
                endReached && "cursor-not-allowed"
            )}
            onClick={() => loadMoreProducts()}
            disabled={endReached}
        >
            Load more products
        </button>
    );
};
