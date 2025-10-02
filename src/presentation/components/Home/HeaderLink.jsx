import Link from "next/link";

export default function HeaderLink({ icon, text, href, correntista }) {
    return (
        <div className={`flex 
        items-center 
        gap-2 
        text-lg 
        font-medium 
        cursor-pointer 
        hover:bg-[#385C80] 
         rounded-xl 
         px-3
          py-2 
          hover:scale-x-[1.05] 
          transition 
          duration-300 
          ease-in-out
          ${correntista ? 'bg-[#11477e]' : ""} `
        }
        >
            <div>
                {icon}
            </div>
            <div>
                <Link href={href} className="decoration-none   text-[0.875rem]">{text}</Link>
            </div>
        </div>
    )
}