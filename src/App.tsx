import './App.css'

function App() {
  return (
    <>
      <header className='sticky top-0 container mx-auto px-15 mt-10'>
        <nav aria-label="Global" className='mx-auto flex max-w-7xl items-center justify-between'>
          <div>
            <a href="/" className='text-2xl font-bold'>Alex Mejicanos</a>
          </div>
          <div>
            <ul className='flex space-x-6'>
              <li>
                <a href="#about" className='text-lg font-bold'>About</a>
              </li>
              <li>
                <a href="#services" className='text-lg font-bold'>Services</a>
              </li>
              <li>
                <a href="#works" className='text-lg font-bold'>Works</a>
              </li>
              <li>
                <a href="#contact" className='text-lg font-bold'>Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <button className='bg-transparent text-black px-4 py-2 border-1 rounded-lg'>Book Free Call</button>
          </div>
        </nav>
      </header>
      <main className='container mx-auto px-15 mt-10'>
        <section id='about' className='grid md:grid-cols-3 sm:grid-cols-1 grid-rows-3 gap-4'>
          <div className='md:row-span-3 md:col-span-1 sm:row-span-1 sm:col-span-3 bg-white rounded-2xl flex flex-col items-center'>
            <div className='mt-10'>
              <img src="https://i.postimg.cc/m27MWMCY/sahmp.jpg" alt="Alex Mejicanos" className='h-60 w-60 rounded-full' />
            </div>
            <div className='text-center p-10'>
              <h2 className='text-2xl font-bold'>Alex Mejicanos</h2>
              <p className='text-sm mt-5'>I am a Software Enginner with a FullStack knowledge based in Guatemala.</p>
            </div>
            <div className='flex justify-center mb-10'>
              <ul className='list-none flex space-x-4'>
                <li>FB</li>
                <li>TW</li>
                <li>LK</li>
                <li>GH</li>
              </ul>
            </div>
          </div>
          <div className='md:row-span-2 md:col-span-2 sm:row-span-1 sm:col-span-3 bg-white rounded-2xl'>
            asdf
          </div>
          <div className='md:col-span-2 sm:row-span-1 sm:col-span-3 bg-white rounded-2xl'>
            asdf
          </div>
        </section>
        <section id="services">
          Services
        </section>
        <section id="works">
          Works
        </section>
        <section id="contact">
          Contact
        </section>
      </main>
    </>
  )
}

export default App
