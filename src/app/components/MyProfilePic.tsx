import Image from "next/image";
import React from "react";

type Props = {};

function MyProfilePic({}: Props) {
    return (
        <section className="w-full">
            <div className="rounded-full w-[200px] h-[200px] border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black overflow-hidden flex items-center justify-center bg-slate-800  mt-8 mx-auto">
                <Image
                    src="/images/myprofile.jpg"
                    alt="edward"
                    width={200}
                    height={200}
                />
            </div>
        </section>
    );
}

export default MyProfilePic;
