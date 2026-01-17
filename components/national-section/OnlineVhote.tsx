"use client";
import OnlineImage from "../../assets/image/online-image.jpg"
import Image from "next/image";
import { useState } from "react";
import VoteItem from "../../components/national-section/VhoteItem";

export default function OnlineVhote (){
    const [vote, setVote] = useState("");
    return (
        <div className="flex flex-col gap-4 overflow-hidden">
            <Image
                src={OnlineImage}
                alt="OnlineImage"
                width={364}
                height={240}
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                priority
            />
            <div>
                <span className="text-[13px] leading-5.25 text-[#525252] inline-block mb-1">৪ এপ্রিল ২০২৫</span>
                <p className="text-sm sm:text-base leading-6 text-title font-medium mb-4">টিআইবির নির্বাহী পরিচালক ড. ইফতেখারুজ্জামান বলেছেন, সরকার পরিবর্তনের পর নতুন করে দলবাজি, দখলবাজি ও চাঁদাবাজি শুরু হয়েছে। আপনিও কি তা-ই মনে করেন?</p>
                <form className="flex flex-col gap-2">
                          <VoteItem
                            id="yes"
                            name="vote"
                            value="yes"
                            label="হ্যাঁ ভোট"
                            checked={vote === "yes"}
                            onChange={setVote}
                        />

                        <VoteItem
                            id="no"
                            name="vote"
                            value="no"
                            label="না ভোট"
                            checked={vote === "no"}
                            onChange={setVote}
                        />
                        <VoteItem
                            id="noComment"
                            name="vote"
                            value="noComment"
                            label="মন্ত্যব নেই"
                            checked={vote === "noComment"}
                            onChange={setVote}
                        />
                        <div className="w-full">
                            <button type="submit" className="bg-red p-2 lg:p-3 w-full text-sm leading-6 text-white font-medium cursor-pointer ">ভোট দিন</button>
                        </div>
                </form>
            </div>
        </div>
    );
}