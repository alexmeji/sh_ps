import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <>
      <header className="sticky top-0 container px-15 mx-auto navbar">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-3"
        >
          <div>
            <a href="/" className="text-2xl font-bold">
              Alex Mejicanos 2
            </a>
          </div>
          <div>
            <ul className="flex space-x-6">
              <li>
                <a href="#about" className="text-lg font-bold">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-lg font-bold">
                  Services
                </a>
              </li>
              <li>
                <a href="#works" className="text-lg font-bold">
                  Works
                </a>
              </li>
              <li>
                <a href="#contact" className="text-lg font-bold">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <button className="bg-transparent text-black px-4 py-2 border-1 rounded-lg">
              Book Free Call
            </button>
          </div>
        </nav>
      </header>
      <main className="container mx-auto px-15 mt-10">
        <section
          id="about"
          className="grid md:grid-cols-3 sm:grid-cols-1 grid-rows-3 gap-4"
        >
          <div className="md:row-span-3 md:col-span-1 sm:row-span-1 sm:col-span-3 bg-white rounded-2xl">
            <img src="https://i.postimg.cc/nLR9VcM1/LPK-4382.jpg" className="object-fill rounded-2xl"/>
            {/* <div className="mt-10">
              <img
                src="https://i.postimg.cc/m27MWMCY/sahmp.jpg"
                alt="Alex Mejicanos"
                className="h-50 w-50 rounded-full"
              />
            </div>
            <div className="text-center p-5">
              <motion.h2
                className="text-2xl font-bold"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                Alex Mejicanos
              </motion.h2>
              <p className="text-sm mt-5">
                I am a Software Enginner with a FullStack knowledge based in
                Guatemala.
              </p>
            </div>
            <div className="flex justify-center mb-5">
              <ul className="list-none flex space-x-2">
                <li>
                  <SocialIcon
                    network="facebook"
                    url="https://www.facebook.com/alexmejicanosgt"
                    bgColor="black"
                    fgColor="white"
                  />
                </li>
                <li>
                  <SocialIcon
                    network="x"
                    url="https://x.com/alex_mejicanos"
                    bgColor="black"
                    fgColor="white"
                  />
                </li>
                <li>
                  <SocialIcon
                    network="linkedin"
                    url="www.linkedin.com/in/alexmejicanos"
                    bgColor="black"
                    fgColor="white"
                  />
                </li>
                <li>
                  <SocialIcon
                    network="github"
                    url="https://github.com/alexmeji"
                    bgColor="black"
                    fgColor="white"
                  />
                </li>
              </ul>
            </div> */}
          </div>
          <div className="md:row-span-2 md:col-span-2 sm:row-span-1 sm:col-span-3 bg-white rounded-2xl p-7">
            <p className="text-base mb-5">Hello!</p>
            <h1 className="text-5xl font-bold">
              I'm Alex Mejicanos, I'm dedicated to help startups and companies
              turn their ideas into successful products.
            </h1>
            <div className="mt-2">
              <ul className="list-disc list-inside">
                <li className="text-green-700 text-4xl">
                  <span className="text-black text-base align-middle ml-[-20px]">
                    Available for Freelancing
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:col-span-2 sm:row-span-1 sm:col-span-3 bg-white rounded-2xl">
            <h4 className="text-xl p-7">
              If you're looking for technical expertise, I'm here to help you to avoid commont mistakes. I have experience in the following technologies:
            </h4>
          </div>
        </section>
        <section id="services" className="bg-white rounded-2xl p-7 mt-5">
          <h2 className="text-4xl font-bold">Services</h2>
          <div className="grid md:grid-cols-3 sm:grid-cols-1 md:grid-rows-1 sm:grid-rows-3 gap-4 mt-5">
            <div className="bg-gray-100 p-5 rounded-lg">
              <h3 className="text-2xl font-bold">Web Development</h3>
              <p className="text-base mt-5">
                I can help you to build a website using the latest technologies
                and trends.
              </p>
            </div>
            <div className="bg-gray-100 p-5 rounded-lg">
              <h3 className="text-2xl font-bold">Mobile Development</h3>
              <p className="text-base mt-5">
                I can help you to build a mobile app using the latest
                technologies and trends.
              </p>
            </div>
            <div className="bg-gray-100 p-5 rounded-lg">
              <h3 className="text-2xl font-bold">UI/UX Design</h3>
              <p className="text-base mt-5">
                I can help you to design a website or mobile app using the
                latest technologies and trends.
              </p>
            </div>
          </div>
        </section>
        <section id="works">Works</section>
        <section id="contact">Contact</section>
      </main>
    </>
  );
}

export default App;
