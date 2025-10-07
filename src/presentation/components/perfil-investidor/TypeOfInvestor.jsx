import { useInvestor } from "@/presentation/hooks/context/investorContext";

export default function TypeOfInvestor({ items }) {
  const { selected, setSelected } = useInvestor();

  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <label
          key={item.value}
          className={`flex flex-col border border-gray-200 rounded-lg p-4 cursor-pointer transition-all duration-200
            ${selected === item.value ? "border-blue-500 bg-gray-50" : "bg-white hover:bg-gray-50"}
          `}
        >
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="typeOfInvestor"
              value={item.value}
              checked={selected === item.value}
              onChange={() => setSelected(item.value)}
              className="w-3 h-3 accent-[#0d3b68]"
            />

            <div className={`p-2 rounded-full ${item.bgColor}`}>
              {item.icon}
            </div>

            <h3 className="text-[#0D3B68] font-semibold text-[14px]">{item.title}</h3>
          </div>
          <p className="text-[#5F799F] text-[14px] pl-[72px]">{item.description}</p>
        </label>
      ))}
    </div>
  );
}
