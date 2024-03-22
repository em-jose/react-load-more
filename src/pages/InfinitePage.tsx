import { CardsList } from "@/components/CardsList";
import { AppLayout } from "@/components/AppLayout";

export const InfinitePage = () => {
    return (
        <>
            <AppLayout>
                <h2 className="text-2xl">InfinitePage</h2>
                <CardsList />
            </AppLayout>
        </>
    );
};
