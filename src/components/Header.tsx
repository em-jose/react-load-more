import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className="p-5">
            <div className="flex gap-2 items-end">
                <h1 className="text-2xl uppercase">Load More App</h1>
                <Link to="/button">Load more with button</Link>
                <Link to="/infinite">Infinite scroll</Link>
                <a href="https://github.com/" target="_blank">
                    Github
                </a>
            </div>
        </header>
    );
};
