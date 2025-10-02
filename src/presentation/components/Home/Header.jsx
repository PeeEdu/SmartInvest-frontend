import { Building2, House, Users } from "lucide-react";
import HeaderLink from "./HeaderLink";


export default function Header() {
    return (
        <header className="w-full bg-[#0B3660] text-white py-4 shadow-md">
            <div className="max-w-[1700px] mx-auto flex justify-between items-center px-4">
                <h1 className="text-xl font-bold pl-20">Smart Invest</h1>
                <nav className="flex gap-3">
                    <HeaderLink href="/" icon={<House className="h-6 w-6" />} text="Home" />
                    <HeaderLink href="/simulacao" icon={<Users />} text="Sobre Nós" />

                    {/* Em caso de juridico, estarei usando o link abaixo apeanas para estudo. */}
                    <HeaderLink href="https://agibank.com.br/appdoagi" icon={<Building2 />} text="Seja um Correntista Agi" correntista />
                </nav>
            </div>
        </header>
    );
}