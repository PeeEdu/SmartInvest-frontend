import Link from "next/link";

export default function HomeBigButton({ text, icon, href, onClick, className }) {
  const isButton = typeof onClick === "function";

  const baseClasses =
    "flex justify-center items-center mt-10 rounded-xl shadow-lg px-4 py-2 transition-transform duration-200 hover:scale-[1.02] cursor-pointer";
  const buttonClasses =
    "bg-primary px-6 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition cursor-pointer";

  return (
    <div className={`${baseClasses} ${className}`}>
      <div className="text-[#0D3B68]">{icon}</div>

      {isButton ? (
        <button
          onClick={onClick}
          className={`${buttonClasses} text-[#0D3B68] ml-2`}
        >
          {text}
        </button>
      ) : (
        <Link href={href} className={`${buttonClasses} ml-2 `}>
          {text}
        </Link>
      )}
    </div>
  );
}
