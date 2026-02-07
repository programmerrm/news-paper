import Image from "next/image";
import Link from "next/link";
import LogoImage from "../../../assets/logo/logo.svg"
import PasswordInput from "@/components/input/PasswordInput";
import Button from "@/components/button/Button";
import FacebookLogo from "../../../assets/logo/logos_facebook.svg";
import GoogleLogo from "../../../assets/logo/material-icon-google.svg";
import InputField from "@/components/input/InputField";

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
                        <h3 className="text-xl sm:text-2xl lg:text-[26px] leading-6 lg:leading-7 text-title font-inter">Login to your account</h3>
                        <p className="text-xs sm:text-[13px] leading-5.25 font-inter mt-2 text-[#525252] max-w-108 mx-auto">Don’t have an account? <Link href="/auth/registration" className="text-red underline ml-1">Create an account</Link></p>
                    </div>
                    <form action="#" className="w-full">
                        <div>
                            <div className="mb-3">
                                <InputField />
                            </div>
                            <PasswordInput />
                            <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center">
                                    <label className="flex items-center cursor-pointer select-none group">
                                        <input type="checkbox" className="sr-only"/>
                                        <div className="w-5 h-5 border border-[#B6C3C8] flex items-center justify-center group-has-checked:bg-green-600 group-has-checked:border-green-600 transition-all">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="white"
                                                strokeWidth="3"
                                                className="w-4 h-4 opacity-0 group-has-checked:opacity-100 transition-opacity"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>

                                        <span className="text-xs sm:text-sm sm:leading-6 font-medium ml-2 text-[#171717]">Remember me</span>
                                    </label>
                                </div>
                                <Link href="/auth/forgot-password" className="font-inter text-[#171717] underline text-xs sm:text-sm sm:leading-6 font-medium">
                                    Forget Password
                                </Link>
                            </div>
                            <div className="mt-4 sm:mt-6">
                                <Button
                                    text="Login"
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