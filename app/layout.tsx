import "katex/dist/katex.min.css";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <head>
                <link rel="icon" href="/icon.ico" sizes="any" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
                <title>ray</title>
            </head>
            <body className="min-h-screen w-full bg-[#040404] text-gray-100">{children}</body>
        </html>
    );
}
