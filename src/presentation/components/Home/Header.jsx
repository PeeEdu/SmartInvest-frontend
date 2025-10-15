'use client'

import { Building2, House, Users } from "lucide-react";
import HeaderLink from "./HeaderLink";
import { useRedirect } from "@/presentation/hooks/useRedirect";


export default function Header() {
    const { redirectTo } = useRedirect();

    return (
        <header className="w-full bg-[#0B3660] text-white py-4 shadow-md">
            <div className="max-w-[1700px] mx-auto flex justify-between items-center px-4">
                <h1 className="text-xl font-bold pl-20">Smart Invest</h1>
                <nav className="flex gap-3">
                    <HeaderLink onClick={() => redirectTo("/")} icon={<House className="h-6 w-6" />} text="Home" />
                    <HeaderLink onClick={() => redirectTo("/about-us")} icon={<Users />} text="Sobre Nós" />

                    {/* Em caso de juridico, estarei usando o link abaixo apeanas para estudo. */}
                    <HeaderLink onClick={() => redirectTo("https://agibank.com.br/appdoagi")} icon={<Building2 />} text="Seja um Correntista Agi" correntista />
                </nav>
            </div>
        </header>
    );
}