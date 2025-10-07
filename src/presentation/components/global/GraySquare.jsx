export default function GraySquare({ children, className, onClick }) {
    return (
        <div className={`bg-[#EEF0F2] p-6 rounded-lg shadow-md border-[1px] border-[#0d3b68] ${className ? className : ""} `} onClick={onClick ? onClick : null}>
            {children}
        </div>
    )
}