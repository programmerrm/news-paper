import Image from "next/image";
import Link from "next/link";
import LogoImage from "../../../assets/logo/logo.svg"
import Button from "@/components/button/Button";
import VerifyOtipi from "@/components/input/VerifyOtipi";

export default function LoginPage() {
    return (
        <section className="min-h-screen flex items-center justify-center">
            <div className="container">
                <div className="flex flex-col items-center justify-center gap-4 md:gap-8 bg-[#E0EBF0] w-full max-w-156 mx-auto p-4 sm:p-6 lg:p-12">
                    <Link href="/" className="max-w-20 sm:max-w-25">
                        <Image
                            src={LogoImage}
                            alt="Logo Image"
                            width={100}
                            height={64}
                        />
                    </Link>
                    <div className="text-center">
                        <h3 className="text-xl sm:text-2xl lg:text-[26px] leading-6 lg:leading-7 text-title font-inter">Enter verification code</h3>
                        <p className="text-xs sm:text-[13px] leading-5.25 font-inter mt-2 text-[#525252] max-w-108 mx-auto">The verification code has been sent to your email ontik@gmail.com</p>
                    </div>
                    <form action="#" className="w-full">
                        <div>
                            <div className="flex items-center justify-center gap-5">
                               <div className="w-14 h-14 bg-white flex items-center justify-center border border-[#B6C3C8] relative">
                                    <VerifyOtipi />
                                </div>
                               <div className="w-14 h-14 bg-white flex items-center justify-center border border-[#B6C3C8] relative">
                                    <VerifyOtipi />
                                </div>
                               <div className="w-14 h-14 bg-white flex items-center justify-center border border-[#B6C3C8] relative">
                                    <VerifyOtipi />
                                </div>
                               <div className="w-14 h-14 bg-white flex items-center justify-center border border-[#B6C3C8] relative">
                                    <VerifyOtipi />
                                </div>
                               <div className="w-14 h-14 bg-white flex items-center justify-center border border-[#B6C3C8] relative">
                                    <VerifyOtipi />
                                </div>
                            </div>
                            <div className="mt-4 sm:mt-6">
                                <Button
                                    text="Continue"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}