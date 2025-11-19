import React from "react";

const clients = [
    "Seaspan",
    "Fleet Management Limited",
    "Synergy Group",
    "OSM Thome Group",
    '"K" Line America, Inc.',
    "ITOCHU Group",
    "IMECS Co., Ltd.",
    ];

    export default function Clients() {
    return (
        <section className="bg-white py-16" id="clients">
        <style>{`
            @keyframes marquee {
            0% { transform: translate3d(0,0,0); }
            100% { transform: translate3d(-50%,0,0); }
            }
        `}</style>

        <h2 className="text-3xl font-bold text-center text-[#023047] mb-10">
            Our Clients
        </h2>

        <div
            className="
            group overflow-hidden
            [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)]
            "
        >
            {/* Track: exactly A + B (duplicate of A) */}
            <div
            className="
                inline-flex w-max items-center
                animate-[marquee_15s_linear_infinite]
                group-hover:[animation-play-state:paused]
                will-change-transform
            "
            >
            {/* LIST A */}
            <ul className="flex items-center gap-16 pr-16">
                {clients.map((name, i) => (
                <li key={i} className="whitespace-nowrap">
                    <span className="text-2xl font-semibold text-[#023047]/60 hover:text-[#023047] transition-colors">
                    {name}
                    </span>
                </li>
                ))}
            </ul>

            {/* LIST B (duplicate of A) */}
            <ul aria-hidden="true" className="flex items-center gap-16">
                {clients.map((name, i) => (
                <li key={`dup-${i}`} className="whitespace-nowrap">
                    <span className="text-2xl font-semibold text-[#023047]/60 hover:text-[#023047] transition-colors">
                    {name}
                    </span>
                </li>
                ))}
            </ul>
            </div>
        </div>
        </section>
    );
}
