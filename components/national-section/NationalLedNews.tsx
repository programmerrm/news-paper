import nationalLedImage from "../../assets/image/national-led-news.jpg";
import Image from "next/image";

export default function NationalLedNews (){
    return (
        <div className="w-full h-93 relative">
            <Image
                src={nationalLedImage}
                alt="nationalLedImage"
                width={496}
                height={372}
                className="w-full h-full object-cover"
                priority
            />
            <div className="absolute left-0 right-0 bottom-0 bg-linear-to-b from-body/0 to-body p-6">
                <h4 className="text-white! ">বিএনপিতে ১০টি আসনে সুপ্রিম কোর্টের আইনজীবীদের প্রার্থী হিসেবে</h4>
                <span className="text-white text-xs leading-3.75 mt-2.5 inline-block">১ মিনিট আগে</span>
            </div>
        </div>
    );
}