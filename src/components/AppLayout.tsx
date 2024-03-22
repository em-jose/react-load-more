import { Header } from "@/components/Header";

export const AppLayout = ({ children }: AppLayoutType) => {
    return (
        <>
            <Header />

            <main className="p-5">{children}</main>
        </>
    );
};
