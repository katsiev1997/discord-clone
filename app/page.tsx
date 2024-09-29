import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <div className=" ">
            <p className="text-3xl font-bold text-indigo-500">Hello discord clone</p>
            <Button>Click me</Button>
            <Button variant="ghost">Click me</Button>
            <Button variant="destructive">Click me</Button>
        </div>
    );
}
