import { CardsListInfinite } from "@/components/CardsListInfinite";
import { AppLayout } from "@/components/AppLayout";

export const InfinitePage = () => {
    return (
        <>
            <AppLayout>
                <div className="flex justify-center">
                    <h2 className="text-2xl">Infinite scroll</h2>
                </div>
                <CardsListInfinite />
            </AppLayout>
        </>
    );
};
