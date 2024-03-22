import { ButtonPage } from "@/pages/ButtonPage";
import { InfinitePage } from "@/pages/InfinitePage";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="button" element={<ButtonPage />} />
                <Route path="infinite" element={<InfinitePage />} />
                <Route path="/" element={<ButtonPage />} />
            </Routes>
        </>
    );
};
