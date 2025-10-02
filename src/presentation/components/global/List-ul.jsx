export default function ListUl({ items, coloredList }) {
  return (
    <ul className="list-disc list-inside pl-9">
      {items.map((texts, index) => (
        <li key={index} className={`mb-2 ${coloredList} text-[16px] marker:text-[24px] h-5`}>
          {Array.isArray(texts) ? (
            texts.map((t, i) => (
              <p key={i} className="leading-relaxed">
                {t}
              </p>
            ))
          ) : (
            <span className="leading-relaxed text-[#0E3B68] text-[14px]">{texts}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
