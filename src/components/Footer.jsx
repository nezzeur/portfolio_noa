import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
    const socialLinks = [
        {
            icon: Github,
            link: "https://github.com/nezzeur",
            name: "GitHub",
            color: "hover:text-gray-100"
        },
        {
            icon: Linkedin,
            link: "https://www.linkedin.com/in/noa-peru-5a0942373/",
            name: "LinkedIn",
            color: "hover:text-blue-400"
        },
        {
            icon: Mail,
            link: "mailto:noaperu3@gmail.com",
            name: "Email",
            color: "hover:text-red-400"
        },
    ];

    return (
        <footer className="w-full bg-gray-900/80 backdrop-blur-lg border-t border-white/10">
            <div className="max-w-6xl mx-auto px-[5%] sm:px-[5%] lg:px-[10%] py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Copyright Section */}
                    <div className="text-center md:text-left">
                        <p className="text-gray-400 text-sm">
                            © 2025{" "}
                            <a
                                href="https://noaperu.fr"
                                className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] hover:underline font-medium transition-all duration-300"
                            >
                                Noa Peru
                            </a>
                            . Tous droits réservés.
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                            Étudiant en BUT Informatique • Développeur Backend
                        </p>
                    </div>

                    {/* Social Links Section */}
                    <div className="flex items-center gap-4">
                        <span className="text-gray-400 text-sm font-medium hidden sm:block">
                            Suivez-moi :
                        </span>
                        <div className="flex gap-3">
                            {socialLinks.map(({ icon: Icon, link, name, color }, index) => (
                                <a
                                    key={index}
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group relative p-2 rounded-lg bg-white/5 border border-white/10 ${color} transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:border-white/20`}
                                    title={name}
                                >
                                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-current transition-colors duration-300" />

                                    {/* Hover Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1]/20 to-[#a855f7]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                                </a>
                            ))}
                        </div>

                        {/* External link indicator */}
                        <div className="h-4 w-px bg-gray-600 hidden sm:block"></div>
                        <ExternalLink className="w-4 h-4 text-gray-500" />
                    </div>
                </div>


           
            </div>
        </footer>
    );
};

export default Footer;