
function Banner() {

  return (
    <>
        <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('/src/assets/img/world-map.png')" }}>
            <div className="absolute inset-0 bg-white opacity-90"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-blue-800">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">It's more than just a trip</h1>
                <div className="bg-white rounded-lg p-4 w-full max-w-4xl flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                    <input type="text" placeholder="From where?" className="flex-grow px-4 py-2 border rounded-md" />
                    <input type="text" placeholder="Where to?" className="flex-grow px-4 py-2 border rounded-md" />
                    <input type="text" placeholder="Depart - Return" className="flex-grow px-4 py-2 border rounded-md" />
                    <input type="text" placeholder="1 adult" className="flex-grow px-4 py-2 border rounded-md" />
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Search</button>
                </div>
            </div>
        </section>
    </>
  )
}

export default Banner