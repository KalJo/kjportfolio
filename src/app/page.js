import Header from '../components/Header'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 1️⃣ Render your Header */}
      <Header />

      {/* 2️⃣ Placeholder for main content (we’ll replace this next) */}
      <main className="flex-1 flex items-center justify-center">
        <p className="text-gray-500">[Your case study images go here]</p>
        <h1>CASESTUDY PAGE</h1>
      </main>
    </div>
  )
}
