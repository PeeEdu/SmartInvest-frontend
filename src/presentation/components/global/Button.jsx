export default function Button({ text, icon, href, onClick, className }) {
    return (
        <a
            href={href ? href : "#"}
            className={`flex 
                items-center
                mt-20 
                gap-2 
                bg-primary 
                text-[#0D3B68]  
                border-[1px] 
                border-[#e5e7eb] 
                px-6 
                py-3 
                rounded-xl
                max-w-[365px]
                mx-auto
                justify-center
                text-[14px]
                font-semibold 
                hover:bg-primary/90 
                transition ${className ? className : ""}`}
            onClick={onClick ? onClick : null}
        >
            {icon}
            {text}
        </a>
    );
}