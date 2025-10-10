export default function ReturnProjection({header, info, fontColor}) {
    return (
        <>
            <div className="flex flex-col space-x-4 mb-1 pr-20 px-20 pt-3">
                <div>
                    <p className={`text-[14px] text-[#5F799F] mb-1 text-center`}>{header}</p>
                    <p className={`font-semibold ${fontColor} text-3xl`}>{info}</p>
                </div>
            </div>
        </>
    )
}