export default function SimulationInfo({header, info, icon, bgColor}) {
    return (
        <div className={`flex items-center space-x-4 mb-1 ${header === "Taxa" ? "pr-20" : "p-3" } `}>
            {header !== "Taxa" && (
                <div className={`p-2 rounded-full ${bgColor ? bgColor : "bg-[#E3E8EC]" }`}>
                    {icon}
                </div>
            )}
            <div>
                <p className=" text-[14px] text-[#5F799F] mb-1">{header}</p>
                <p className="font-semibold text-[#0d3b68ea] ">{info}</p>
            </div>
        </div>
    );
}