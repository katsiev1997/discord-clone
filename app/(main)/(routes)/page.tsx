import { ModeToggle } from "@/components/mode-toggle";
import { SignedIn, UserButton } from "@clerk/nextjs";

export default function Home() {
    return (
        <div className=" ">
            <SignedIn>
                <UserButton afterSwitchSessionUrl="/"/>
            </SignedIn>
            <ModeToggle />
        </div>
    );
}
