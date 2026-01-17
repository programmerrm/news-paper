import nationalLedImage from "../../assets/image/national-led-news.jpg";
import Image from "next/image";

export default function NationalLedNews (){
    return (
        <div className="w-full h-93 relative group overflow-hidden">
            <a href="#">
               <Image
                    src={nationalLedImage}
                    alt="nationalLedImage"
                    width={496}
                    height={372}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                /> 
            </a>
            
            <div className="absolute left-0 right-0 bottom-0 bg-linear-to-b from-body/0 to-body p-6">
                <a href="#">
                    <h4 className="text-white! transition-all duration-300 group-hover:text-blue-300!">বিএনপিতে ১০টি আসনে সুপ্রিম কোর্টের আইনজীবীদের প্রার্থী হিসেবে</h4>
                </a>
                
                <span className="text-white text-xs leading-3.75 mt-2.5 inline-block">১ মিনিট আগে</span>
            </div>
        </div>
    );
}