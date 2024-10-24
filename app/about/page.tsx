import { MyAvatar } from "@/components/MyAvatar";
import { AboutMeCard } from "@/components/AboutMeCard";
export default function About() {
    return (
        <section className="flex flex-col flex-grow justify-center items-center text-center">
            <MyAvatar/>
            <h1 className="text-2xl font-bold">About me</h1>
            <div className="flex flex-col sm:flex-row" >
            <AboutMeCard/>
            </div>

        </section>
    );
}