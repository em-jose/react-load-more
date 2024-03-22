import { twMerge } from "tailwind-merge";

export const Message = ({ text, type }: Message) => {
    return (
        <div
            className={twMerge(
                "",
                type == "warning" &&
                    "p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50",
                type == "error" &&
                    "p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50"
            )}
            role="alert"
        >
            <span>{text}</span>
        </div>
    );
};
