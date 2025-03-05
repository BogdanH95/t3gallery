
export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className={`font-sans flex flex-col gap-4`}>
            <div className="ps-4">Second Layout</div>
            {children}
        </div>
    );
}
