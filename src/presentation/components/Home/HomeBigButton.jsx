import Link from "next/link";

export default function HomeBigButton({ text, icon, href }) {
    return (
        <div className="flex justify-center items-center mt-10 bg-[#0D3B68] rounded-xl shadow-lg max-w-[400px] mx-auto py-2 transition-transform duration-200 hover:scale-[1.02]">
            <div className="text-white">
                {icon}
            </div>
            <Link href={href} className="bg-primary text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition">
                {text}
            </Link>
        </div>

    )
}