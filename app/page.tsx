export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Tailor-made magic for the modern princess
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            Experience the art of Disney cosplay with Dresscon's bespoke creations
          </p>
          <button className="px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-opacity-90 transition">
            Get Started
          </button>
        </div>
      </section>
    </main>
  )
}