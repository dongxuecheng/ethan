import { Badge } from "@/components/ui/badge"
export function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center h-20">
            <p>© 2024 Ethan</p>
            <div className="space-x-1" >
                <Badge>Next.js</Badge>
                <Badge>Tailwind.css</Badge>
                <Badge>Shadcn/ui</Badge>
            </div>

        </footer>
    );
}