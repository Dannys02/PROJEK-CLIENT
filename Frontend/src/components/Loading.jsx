import React from "react";
import png from "../assets/Logo.png";

export default function Loading() {
    return (
        <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[120px] w-[120px] overflow-hidden rounded-full bg-indigo-50 z-[20]">
            <div style={{ borderRadius: '50% 50% 0 0' }} className="rotatesLoad h-[90%] w-full bg-indigo-600 rounded-full "></div>
            <div className="absolute h-[95%] w-[95%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-full p-5">
                <img src={png} alt="Logo Load" className="logoS" />
            </div>
        </div>
    );
}
