export default function SmallIcon({ icon, text }) {
    return (

        <div className="inline-flex items-center gap-2  text-primary  text-sm font-medium mb-8 w-full ">
            <p className="inline-flex items-center gap-2 text-center w-full justify-center font-semibold  max-w-[250px] mx-auto bg-[#E2E7EB] rounded-full px-1 py-1">
                {icon}
                <span className="text-[.875rem]">
                    {text}
                </span>
            </p>
        </div>
    )
}