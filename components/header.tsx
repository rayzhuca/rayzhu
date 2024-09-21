interface HeaderProps {
    title: string;
    titleHref: string;
}

const Header: React.FC<HeaderProps> = ({ title, titleHref }) => {
    return (
        <header className="flex justify-between p-4 pr-16 text-lg">
            <a href={titleHref} className="pl-16 text-sm text-black text-opacity-30">
                {title}
            </a>
            <nav className="flex gap-12 *:text-sm *:text-opacity-30 *:text-black">
                <a href="/" className="">
                    Home
                </a>
                <a href="/blog" className="">
                    Blog
                </a>
                <a href="/notes" className="">
                    Notes
                </a>
                <a href="/cv" className="">
                    CV
                </a>
            </nav>
        </header>
    );
};

export { Header };
