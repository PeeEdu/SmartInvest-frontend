"use client";

import TeamMemberCard from "@/presentation/components/about-us/TeamMemberCard";
import { Github, Linkedin } from "lucide-react";

export default function AboutUs() {
    const teamMembers = [
        {
            name: "Pedro Santos",
            linkedin: "https://www.linkedin.com/in/pe-edu-dev/",
            github: "https://github.com/PeeEdu",
        },
        {
            name: "Thiago Reis",
            linkedin: "https://www.linkedin.com/in/thiago-reis-2b4016148/",
            github: "https://github.com/Treis400",
        },
        {
            name: "Rauni Lima",
            linkedin: "https://www.linkedin.com/in/rauni-lima-4b6121365/",
            github: "https://github.com/rauniluan",
        },
        {
            name: "Matheus Reis",
            linkedin: "https://www.linkedin.com/in/matheusrd-reis/",
            github: "https://github.com/MathReis97",
        },
        {
            name: "Lucas Vannucchi",
            linkedin: "https://www.linkedin.com/in/lucas-vannucchi-072743239/",
            github: "https://github.com/LucasVannucchi",
        },
    ];
    return (
        <main className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-foreground mb-8">Sobre Nós</h1>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                    <p>
                        Prazer, somos Pedro, Thiago, Rauni, Matheus e Lucas! 👋
                    </p>

                    <p>
                        Nós cinco fazemos parte do Programa Devs do Agi e estamos unidos por um sonho em comum:
                        crescer como profissionais de tecnologia e conquistar nosso lugar nessa empresa incrível
                        que é o Agibank.
                    </p>

                    <p>
                        No momento, estamos mergulhando de cabeça no mundo do Backend com Java, explorando
                        arquitetura de software, APIs REST, integração com bancos de dados e tudo mais que aparece
                        pela frente. Somos movidos por inovação, aprendizado constante e pela vontade de transformar
                        ideias em soluções que realmente funcionam.
                    </p>

                    <p>
                        Nosso grande objetivo? Entrar de vez no time do Agi, contribuir em projetos que fazem
                        diferença de verdade e seguir evoluindo como desenvolvedores, sempre com espírito de
                        equipe, muita curiosidade e aquela energia de quem quer deixar sua marca!
                    </p>

                    <div className="mt-12 pt-8 border-t border-border">
                        <h2 className="text-2xl font-semibold text-foreground mb-6">Onde nos encontrar</h2>
                        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {teamMembers.map((member, index) => (
                                <TeamMemberCard
                                    key={index}
                                    name={member.name}
                                    linkedin={member.linkedin}
                                    github={member.github}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}