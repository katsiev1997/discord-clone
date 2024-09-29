import { SignedIn, UserButton } from "@clerk/nextjs";

export default function Home() {
    return (
        <div className=" ">
            <SignedIn>
                <UserButton afterSwitchSessionUrl="/"/>
            </SignedIn>
        </div>
    );
}
