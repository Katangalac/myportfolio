const projects = [
    { id: 1, title: 'Projet E-commerce', category: 'Web App' },
    { id: 2, title: 'Dashboard Analytics', category: 'SaaS' },
    { id: 3, title: 'Portfolio Designer', category: 'Website' },
]

export default function ProjectsOverview() {
    return (
        <section id="projects" className="min-h-screen bg-gray-50 py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold mb-12">Mes Projets</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <a
                            key={project.id}
                            href={`#project-${project.id}`}
                            className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
                        >
                            <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg mb-4"></div>
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-600">{project.category}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}