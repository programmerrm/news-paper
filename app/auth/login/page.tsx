import Image from "next/image";
import Link from "next/link";
import LogoImage from "../../../assets/logo/logo.svg"
import PasswordInput from "@/components/input/PasswordInput";
import EmailInput from "@/components/input/EmailInput";
import Button from "@/components/button/Button";

export default function LoginPage() {
    return (
        <section>
            <div className="container">
                <div className="flex flex-col items-center justify-center gap-8 bg-[#E0EBF0] w-full max-w-156 mx-auto p-6 lg:p-12">
                    <Link href="#">
                        <Image
                            src={LogoImage}
                            alt="Logo Image"
                            width={100}
                            height={64}
                        />
                    </Link>
                    <div>
                        <h3 className="text-xl sm:text-2xl lg:text-[26px] leading-6 lg:leading-7 text-title font-inter">Login to your account</h3>
                        <p className="text-[13px] leading-5.25 font-inter mt-2 text-[#525252]">Don’t have an account? <a href="#" className="text-red underline">Create an account</a></p>
                    </div>
                    <form action="#" className="w-full">
                        <div>
                            <div className="mb-3">
                                <EmailInput />
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

                                        <span className="ml-2 text-black">Remember me</span>
                                    </label>
                                </div>
                                <Link href="#" className="text-sm leading-6 font-medium font-inter text-[#171717] underline">
                                    Forget Password
                                </Link>
                            </div>
                            <div className=" mt-6">
                                <Button />
                            </div>
                            <span className="text-center block py-4 text-sm leading-6 font-medium text-black">or</span>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}