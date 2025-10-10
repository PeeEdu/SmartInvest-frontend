export default function GreenSquare({ children, className, onClick }) {
    return (
        <div className={`bg-[#F3F8F6] p-6 rounded-lg shadow-md border-[1px] border-[#0d3b6833] ${className ? className : ""} `} onClick={onClick ? onClick : null}>
            {children}
        </div>
    )
}