// hooks/useProjects.js
import { useState, useEffect } from 'react';
import projectsData from '../data/projects.js';

export const useProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProjects = async () => {
            try {
                setLoading(true);

                // Simuler un léger délai de chargement pour l'UX
                await new Promise(resolve => setTimeout(resolve, 500));

                // Ajouter des IDs uniques aux projets s'ils n'en ont pas
                const projectsWithIds = projectsData.map((project, index) => ({
                    ...project,
                    id: project.id || index + 1
                }));

                setProjects(projectsWithIds);

                // Sauvegarder dans localStorage pour la compatibilité avec ProjectDetails
                localStorage.setItem("projects", JSON.stringify(projectsWithIds));

            } catch (err) {
                setError(err.message);
                console.error('Erreur lors du chargement des projets:', err);
            } finally {
                setLoading(false);
            }
        };

        loadProjects();
    }, []);

    return { projects, loading, error };
};