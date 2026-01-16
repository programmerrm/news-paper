import BangldeshNews from "@/components/bangladesh-section/BangladeshNews";
import HeroSection from "@/components/hero-section/HeroSection";
import NationalSection from "@/components/national-section/NationalSection";
import OurStoris from "@/components/our-storis-section/OurStorisSection";
import NewsSlider from "@/components/slider-section/SliderSection";

export default function Home() {
    return (
        <>
            <HeroSection />
            <OurStoris />
            <NewsSlider />
            <BangldeshNews />
            <NationalSection />
        </>
        
    );
}