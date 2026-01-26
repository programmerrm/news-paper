import BangldeshNews from "@/components/bangladesh-section/BangladeshSection";
import HeroSection from "@/components/hero-section/HeroSection";
import NationalSection from "@/components/national-section/NationalSection";
import OurStoris from "@/components/our-storis-section/OurStorisSection";
import PoliticsSection from "@/components/politics-section/PoliticsSection";
import NewsSlider from "@/components/slider-section/SliderSection";
import SportsSection from "@/components/sports-section/SportsSection";
import VideoSection from "@/components/video-section/VideoSection";
import InformationSection from "@/components/information-section/InformationSection";
import EntertainmentSection from "@/components/entertainment-section/EntertainmentSection";
import InternationalNews from "@/components/international-section/InternationalNews";

export default function Home() {
    return (
        <>
            <HeroSection />
            <OurStoris />
            <NewsSlider />
            <BangldeshNews />
            <NationalSection />
            <VideoSection />
            <PoliticsSection />
            <SportsSection />
            <InformationSection />
            <EntertainmentSection />
            <InternationalNews />
        </>
        
    );
}