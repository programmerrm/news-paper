import Image from "next/image";
import Link from "next/link";
import LogoImage from "../../../assets/logo/logo.svg"
import Button from "@/components/button/Button";
import InputField from "@/components/input/InputField";

export default function ForgotPasswordPage() {
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
                        <h3 className="text-xl sm:text-2xl lg:text-[26px] leading-6 lg:leading-7 text-title font-inter">Forget Password</h3>
                        <p className="text-xs sm:text-[13px] leading-5.25 font-inter mt-2 text-[#525252] max-w-108 mx-auto">Enter your account email address and we'll email you a link so that you can reset your password</p>
                    </div>
                    <form action="#" className="w-full">
                        <div>
                            <div className="mb-3">
                                <InputField />
                            </div>
                            <div className="mt-4 sm:mt-6">
                                <Button
                                    text="Send verification code"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
