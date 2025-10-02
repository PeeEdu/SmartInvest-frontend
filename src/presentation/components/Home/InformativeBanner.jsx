export default function InformativeBanner({icon, subtext, text, bgColor}) {
    return (
        <div className="flex items-center flex-col gap-2bg-[#E2E7EB] text-center px-4 rounded-lg max-w-[800px] mx-auto my-6">
            <div className={`mb-2 ${bgColor ? bgColor : ""} rounded-full p-4`} >
                {icon}
            </div>
            <div className="font-semibold text-lg mb-2 mt-2">
                {text}
            </div>
            <div className="text-[16px] text-[#5F799F]">
                {subtext}
            </div>
        </div>
    )
}