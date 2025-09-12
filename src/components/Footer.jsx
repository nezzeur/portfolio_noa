import React from 'react';
import { Github, Linkedin, Mail, Discord, Instagram } from 'lucide-react';

const Footer = () => {
    const socialLinks = [
        { icon: Github, link: "https://github.com/nezzeur" },
        { icon: Linkedin, link: "https://www.linkedin.com/in/noa-peru-5a0942373/" },
        { icon: Mail, link: "mailto:noaperu3@gmail.com" },
        { icon: Discord, link: "https://discord.com/users/nezzeur" },
        { icon: Instagram, link: "https://www.instagram.com/noa_peru/" },
    ];

    return (
        <footer className="bg-slate-900/80 backdrop-blur-lg mt-10">
            <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-sm text-gray-400">
          © 2025 <a href="https://noaperu.fr" className="hover:underline">Noa</a>. Tous droits réservés.
        </span>
                <div className="flex gap-4">
                    {socialLinks.map(({ icon: Icon, link }, index) => (
                        <a key={index} href={link} target="_blank" rel="noopener noreferrer"
                           className="text-gray-400 hover:text-white transition-colors duration-200">
                            <Icon className="w-6 h-6" />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
