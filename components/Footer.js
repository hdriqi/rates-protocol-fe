const Footer = () => {
  return (
    <div className="h-[40rem] text-center mt-56 bg-cover bg-center flex flex-col w-full justify-between image-rendering" style={{
      backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.2) 20%, rgba(0, 0, 0, 0.8) 80%, rgba(0, 0, 0, 1) 100%), url('/footer.jpg')`
    }}>
      <div className="w-full pt-8">
        <p className="text-4xl font-bold">Explore, Extract, Elevate</p>
        <p className="text-3xl mt-2">Rates Protocol is on-chain game build on BASE</p>
        <div className="mt-8">
          <button className="bg-white text-black px-4 py-2 font-bold text-lg mx-4">Planet Mining</button>
          <button className="bg-white text-black px-4 py-2 font-bold text-lg mx-4 bg-opacity-50 cursor-not-allowed">Rates Expedition (SOON)</button>
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto px-4 py-2">
        <div className="flex justify-between">
          <p className="p-4">(c) East Blue. 2023.</p>
          <div className="flex -mx-4">
            <div className="p-4">
              <p>Twitter</p>
            </div>
            <div className="p-4">
              <p>Discord</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer