export default function Button({ text, icon, className }) {
    return (
        <div
            className={`flex 
                items-center
                mt-12
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
                hover:scale-x-[1.01] 
                ${className ? className : ""}`}
        >
            {icon}
            {text}
        </div>
    );
}