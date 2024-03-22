import { CardsList } from "@/components/CardsList";
import { AppLayout } from "@/components/AppLayout";

export const ButtonPage = () => {
    return (
        <>
            <AppLayout>
                <div className="flex justify-center">
                    <h2 className="text-2xl">Load more with button</h2>
                </div>
                <CardsList />
            </AppLayout>
        </>
    );
};
