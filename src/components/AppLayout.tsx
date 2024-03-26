import { Header } from "@/components/Header";
import { ThemeProvider } from "@/components/ui/theme-provider";

export const AppLayout = ({ children }: AppLayoutType) => {
    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <Header />

                <main className="p-5">{children}</main>
            </ThemeProvider>
        </>
    );
};
