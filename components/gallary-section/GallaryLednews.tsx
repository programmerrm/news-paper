import Image from "next/image"
import BosontoImage from "../../assets/image/bosonto-image-1.png"
import ImageSquare from "../../assets/icon/ImageSquare.svg"
export default function GallaryLednews (){
    return (
        <div>
           <div className="relative">
                <div className=" absolute bottom-5 left-5">
                    <Image 
                        src={ImageSquare}
                        alt="ImageSquare"
                        width={48}
                        height={48}
                    />
                </div>
             <Image
                src={BosontoImage}
                alt="bosonto image"
                width={616}
                height={616}
            />
           </div>
           <span className="px-4 py-2 border border-red text-xs font-medium leading-4.5 text-red inline-block mt-4 md:mt-8">৮ টি ছবি</span>
           <h3 className="mt-2 md:mt-3">বিএনপির সম্ভাব্য প্রার্থী তালিকা প্রকাশ, তালিকায় নেই রুমিন ফারহানার নাম</h3>
           <p className="mt-2 md:mt-3 text-gray">১ মিনিট আগে</p>
        </div>
    )
}