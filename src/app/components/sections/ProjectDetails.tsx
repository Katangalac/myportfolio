export default function ProjectDetails() {
    return (
        <section className="bg-white">
            {[1, 2, 3].map((id) => (
                <div
                    key={id}
                    id={`project-${id}`}
                    className="min-h-screen flex items-center border-b"
                >
                    <div className="container mx-auto px-6 py-20">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl font-bold mb-6">Projet {id}</h2>
                                <p className="text-lg text-gray-700 mb-6">
                                    Description détaillée du projet. Technologies utilisées,
                                    défis relevés et résultats obtenus.
                                </p>
                                <div className="flex gap-4">
                                    <a href="#" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                                        Voir le site
                                    </a>
                                    <a href="#" className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                                        Code source
                                    </a>
                                </div>
                            </div>
                            <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg"></div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}