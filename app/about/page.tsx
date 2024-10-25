import { MyAvatar } from "@/components/MyAvatar";
import { AboutMeCarousel } from "@/components/AboutMeCarousel";
export default function About() {
    return (
        <section className="flex flex-col flex-grow justify-center items-center text-center space-y-4">
            <MyAvatar/>
            <h1 className="text-2xl font-bold">About me</h1>
            <AboutMeCarousel/>
        </section>
    );
}