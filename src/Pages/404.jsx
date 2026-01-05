import React from 'react';
import { ArrowLeft, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#030014] relative overflow-hidden flex items-center justify-center px-4">
            {/* Background animations */}
            <div className="fixed inset-0">
                <div className="absolute -inset-[10px] opacity-20">
                    <div className="absolute top-0 -left-4 w-72 md:w-96 h-72 md:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
                    <div className="absolute top-0 -right-4 w-72 md:w-96 h-72 md:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
                    <div className="absolute -bottom-8 left-20 w-72 md:w-96 h-72 md:h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:24px_24px]" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-2xl animate-fadeIn">
                {/* 404 Number with gradient */}
                <div className="mb-8">
                    <h1 className="text-9xl md:text-[150px] font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 animate-pulse">
                        404
                    </h1>
                    <div className="relative h-1 w-24 md:w-32 mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm" />
                    </div>
                </div>

                {/* Message */}
                <div className="mb-8 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                        Page Introuvable
                    </h2>
                    <p className="text-gray-300/80 text-lg md:text-xl max-w-md mx-auto leading-relaxed">
                        Oups ! La page que tu recherches a peut-être été déplacée, supprimée ou n'a jamais existé.
                    </p>
                </div>

                {/* Illustration with gradient card */}
                <div className="mb-12">
                    {/* Removed illustration */}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                        onClick={() => navigate(-1)}
                        className="group relative inline-flex items-center space-x-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 hover:from-blue-600/20 hover:to-purple-600/20 text-blue-300 rounded-xl transition-all duration-300 border border-blue-500/20 hover:border-blue-500/40 backdrop-blur-xl overflow-hidden"
                    >
                        <div className="absolute inset-0 translate-y-[100%] bg-gradient-to-r from-blue-600/10 to-purple-600/10 transition-transform duration-300 group-hover:translate-y-[0%]" />
                        <ArrowLeft className="relative w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="relative font-medium">Retour</span>
                    </button>

                    <button
                        onClick={() => navigate('/')}
                        className="group relative inline-flex items-center space-x-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600/10 to-pink-600/10 hover:from-purple-600/20 hover:to-pink-600/20 text-purple-300 rounded-xl transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40 backdrop-blur-xl overflow-hidden"
                    >
                        <div className="absolute inset-0 translate-y-[100%] bg-gradient-to-r from-purple-600/10 to-pink-600/10 transition-transform duration-300 group-hover:translate-y-[0%]" />
                        <Home className="relative w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span className="relative font-medium">Accueil</span>
                    </button>
                </div>
            </div>

            {/* Styles */}
            <style jsx>{`
                @keyframes blob {
                    0% {
                        transform: translate(0px, 0px) scale(1);
                    }
                    33% {
                        transform: translate(30px, -50px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                    100% {
                        transform: translate(0px, 0px) scale(1);
                    }
                }
                .animate-blob {
                    animation: blob 10s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                .animate-fadeIn {
                    animation: fadeIn 0.7s ease-out;
                }
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    );
}

