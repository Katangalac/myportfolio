export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-6xl font-bold mb-6">Votre Nom</h1>
                <p className="text-2xl text-gray-700 mb-8">Développeur Full Stack</p>
                <a
                    href="#projects"
                    className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                >
                    Voir mes projets
                </a>
            </div>
        </section>
    )
}