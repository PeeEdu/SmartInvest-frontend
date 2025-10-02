import Image from "next/image";
import happyInvestorsBanner from "../../../../public/assets/happy-investors-banner.jpg";

export default function HomeBanner() {
  return (
    <div className="relative mb-8 rounded-2xl overflow-hidden shadow-lg h-64 md:h-65 lg:h-75 max-w-[950px] mx-auto">
      {/* Banner */}
      <Image
        src={happyInvestorsBanner}
        alt="Pessoas felizes celebrando sucesso financeiro"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#1B4061]/80 to-[#6ABEE3]/70 flex items-center justify-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4">
          Simule seus
          <br />
          <span className="text-white">investimentos</span>
          <br />
          <span className="text-[#4ADE80]">de forma inteligente</span>
        </h1>
      </div>
    </div>
  );
}
