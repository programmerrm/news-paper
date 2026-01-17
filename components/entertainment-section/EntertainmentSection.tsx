

export default function EntertainmentSection (){
    return(
        <section className="bg-linear-to-b from-[#F0F5F4] to-[#FFFFFF] py-8 lg:py-16">
            <div className="container">
                <div className="grid grid-cols-3 gap-13.75">
                    <div className="pb-6 border-b-2 border-[#A1A1A1]">
                        <h3>সামাজিক কথন</h3>
                    </div>
                    <div className="pb-6 border-b-2 border-[#A1A1A1]">
                        <h3>তথ্য প্রযুক্তি</h3>
                    </div>
                    <div className="pb-6 border-b-2 border-[#A1A1A1]">
                        <h3>ধর্মকর্ম</h3>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-13.75">
                    <div className="">1</div>
                    <div className="">2</div>
                    <div className="">3</div>
                </div>
            </div>
        </section>
    );
}