export default function NotFound() {
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center">
            <h2 className="text-3xl font-semibold tracking-tight">Something went wrong</h2>
            <div className="leading-7">Could not find requested resource</div>
        </div>
    );
}
