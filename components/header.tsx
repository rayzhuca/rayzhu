interface HeaderProps {
    title: string;
    titleHref: string;
}

const Header: React.FC<HeaderProps> = ({ title, titleHref }) => {
    return (
        <header className="flex justify-between p-4 pr-16 text-lg">
            <a href={titleHref}>{title}</a>
            <nav className="flex gap-12 *:text-sm *:text-opacity-30">
                <a href="/" className="text-black">
                    Home
                </a>
                <a href="/resume" className="text-black">
                    Resume
                </a>
                <a href="/blog" className="text-black">
                    Blog
                </a>
                <a href="/notes" className="text-black">
                    Notes
                </a>
            </nav>
        </header>
    );
};

export { Header };
