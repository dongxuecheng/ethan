import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

export function MyAvatar() {
    return (
        <Avatar>
            <AvatarImage src="/lalaland.jpg" alt="@shadcn" />
            <AvatarFallback>Ethan</AvatarFallback>
        </Avatar>
    )
}
