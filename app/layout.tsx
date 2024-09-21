import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <head>
                <link rel="icon" href="/icon.ico" sizes="any" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
                <title>Ray Zhu</title>
            </head>
            <body className="min-h-screen w-screen">{children}</body>
        </html>
    );
}
