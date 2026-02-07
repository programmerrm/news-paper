import Image from "next/image";
import Link from "next/link";
import LogoImage from "../../../assets/logo/logo.svg"
import PasswordInput from "@/components/input/PasswordInput";
import Button from "@/components/button/Button";
import FacebookLogo from "../../../assets/logo/logos_facebook.svg";
import GoogleLogo from "../../../assets/logo/material-icon-google.svg";
import InputField from "@/components/input/InputField";

export default function RegistrationPage() {
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
                        <h3 className="text-xl sm:text-2xl lg:text-[26px] leading-6 lg:leading-7 text-title font-inter">Create an account</h3>
                        <p className="text-xs sm:text-[13px] leading-5.25 font-inter mt-2 text-[#525252] max-w-108 mx-auto">Already have an account? <Link href="/auth/login" className="text-red underline ml-1">Login to your account</Link></p>
                         
                    </div>
                    <form action="#" className="w-full">
                        <div>
                            <div className="mb-3">
                                <InputField 
                                    id= "Name"
                                    name="Name"
                                    type="Full Name"
                                    placeholder= "Full Name"

                                />
                            </div>
                            <div className="mb-3">
                                <InputField 
                                />
                            </div>
                            <div className="mb-3"> 
                                <PasswordInput />
                            </div>
                            <div className="mb-3"> 
                                <PasswordInput 
                                    placeholder= "Confirm Password"
                                    id= "ConfirmPassword"
                                    name= "ConfirmPassword"
                                />
                            </div>
                            <p className="text-[13px] font-normal font-inter leading-5 text-[#525252] pt-1">Use atleast 8 charcaters, mix of numbers & letters</p>
                            <div className="mt-4 sm:mt-6">
                                <Button
                                    text="Registration"
                                />
                            </div>
                            <span className="text-center block py-3 sm:py-4 text-sm leading-6 font-medium text-black">or</span>
                                <div className="space-y-3">
                                    <Button
                                    text="Facebook"
                                    imageSrc={FacebookLogo}
                                    bgColor="#ffffff"
                                    hoverColor="#ffffff"
                                    textColor="#0A0A0A" 
                                    hoverTextColor="#0A0A0A"
                                    />
                                    <Button
                                        text="Google"
                                        imageSrc={GoogleLogo}
                                        bgColor="#ffffff"
                                        hoverColor="#ffffff"
                                        textColor="#0A0A0A" 
                                        hoverTextColor="#0A0A0A"
                                    />
                                </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
