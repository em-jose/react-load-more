import { CardsList } from "@/components/CardsList";
import { AppLayout } from "@/components/AppLayout";

export const ButtonPage = () => {
    return (
        <>
            <AppLayout>
                <h2 className="text-2xl">ButtonPage</h2>
                <CardsList />
            </AppLayout>
        </>
    );
};
