import { ReactNode } from "react";

interface NoteProps {
    title: ReactNode;
    date: string;
    children: React.ReactNode;
}

export const Note: React.FC<NoteProps> = ({ title, date, children }) => {
    return (
        <div className="flex flex-col items-center w-full p-8 gap-4">
            <div className="w-full sm:w-2/3 mt-5">
                <h1>{title}</h1>
                <div className="mt-1">{date}</div>
            </div>
            <main className="w-full sm:w-2/3 flex flex-col gap-2">{children}</main>
        </div>
    );
};
