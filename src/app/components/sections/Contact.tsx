export default function Contact() {
    return (
        <section id="contact" className="min-h-screen flex items-center bg-gray-900 text-white">
            <div className="container mx-auto px-6 py-20 text-center">
                <h2 className="text-4xl font-bold mb-8">Contactez-moi</h2>
                <p className="text-xl mb-8">Discutons de votre prochain projet</p>
                <a
                    href="mailto:votre@email.com"
                    className="inline-block px-8 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition"
                >
                    Envoyer un message
                </a>
            </div>
        </section>
    )
}