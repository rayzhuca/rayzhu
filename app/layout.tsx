import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <head>
                <link rel="icon" href="/icon.ico" sizes="any" />
                <title>Ray Zhu</title>
            </head>
            <body className="min-h-screen">{children}</body>
        </html>
    );
}
