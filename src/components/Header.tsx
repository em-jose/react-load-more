import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className="p-5">
            <div className="flex justify-center">
                <h1 className="text-2xl uppercase">Load More App</h1>
            </div>
            <div className="flex gap-2 justify-center">
                <Link to="/button" className="uppercase underline">
                    Load more with button
                </Link>
                <Link to="/infinite" className="uppercase underline">
                    Infinite scroll
                </Link>
                <a
                    href="https://github.com/em-jose/react-load-more"
                    target="_blank"
                    className="uppercase underline"
                >
                    Github
                </a>
            </div>
        </header>
    );
};
