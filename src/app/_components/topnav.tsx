import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function TopNav() {
    return (
        <nav className="flex w-full items-center justify-between p-4 text-xl border-b">
            <div className="text-2xl">
                <a href="/" >
                    Playground
                </a>
            </div>
            <div className="flex justify-between gap-3">
              
                <a href="/about" >
                    About
                </a>
                <div className="flex gap-3">
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>
        </nav>
    );
}