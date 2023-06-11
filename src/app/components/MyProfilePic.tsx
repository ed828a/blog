import Image from "next/image";
import React from "react";

type Props = {};

function MyProfilePic({}: Props) {
    return (
        <section className="w-full mx-auto ">
            <div className="rounded-full w-[200px] h-[200px] mx-auto mt-8 border-4 border-white dark:border-slate-500 drop-shadow-xl shadow-black overflow-hidden flex justify-center items-center relative object-contain">
                <Image
                    src="/images/myprofile.jpg"
                    alt="edward"
                    fill={true}
                    priority={true}
                />
            </div>
        </section>
    );
}

export default MyProfilePic;
