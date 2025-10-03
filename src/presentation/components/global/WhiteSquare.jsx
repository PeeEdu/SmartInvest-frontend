export default function WhiteSquare({ children, className, onClick }) {
    return (
        <div className={`bg-white p-6 rounded-lg shadow-md border-[1px] border-[#E2E7EB] ${className ? className : ""} `} onClick={onClick ? onClick : null}>
            {children}
        </div>
    )
}