import ExplorePlanet from '../../components/ExplorePlanet'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'

const ExplorePage = () => {
  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto absolute z-10 left-0 right-0">
        <Nav />
      </div>
      <div
        className="absolute w-full bg-cover bg-center h-[50vh] image-rendering"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.20) 8.85%, rgba(0, 0, 0, 0.20) 82.81%, #000 100%), url(/explore.jpg)`,
        }}
      ></div>
      <div className="max-w-6xl mx-auto p-4 pt-[50vh]">
        <p className="max-w-4xl text-lg">
          Dive into an extraordinary cosmic odyssey as you explore, acquire, and trade planets across the universe
          through the revolutionary power of NFTs. Build your base, claim resources, and engage in interstellar commerce
          like never before.
        </p>
      </div>
      <ExplorePlanet />
      <Footer />
    </main>
  )
}

export default ExplorePage
