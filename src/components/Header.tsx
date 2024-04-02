import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
// import { ModeToggle } from "./ui/mode-toggle";

export const Header = () => {
    return (
        <header className="p-5">
            <div className="flex justify-center">
                <h1 className="text-3xl uppercase">Load More App</h1>
            </div>
            <div className="flex gap-2 justify-center items-center flex-wrap mt-3">
                <NavLink
                    to="/button"
                    className={({ isActive }) =>
                        twMerge(
                            "font-medium text-blue-500 hover:underline",
                            isActive && "underline"
                        )
                    }
                >
                    Load more with button
                </NavLink>
                <NavLink
                    to="/infinite"
                    className={({ isActive }) =>
                        twMerge(
                            "font-medium text-blue-500 hover:underline",
                            isActive && "underline"
                        )
                    }
                >
                    Infinite scroll
                </NavLink>
                <a
                    href="https://github.com/em-jose/react-load-more"
                    target="_blank"
                    className="font-medium text-blue-500 hover:underline"
                >
                    Github
                </a>
            </div>
        </header>
    );
};
