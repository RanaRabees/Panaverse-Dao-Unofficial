/* eslint-disable @next/next/no-sync-scripts */
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import Light from "./components/light";
import About from "./components/About";
import ProgramInNutshell from "./components/programinnutshel";
import Studentsfeedback from "./components/Studentsfeedback";
import Admissions from "./components/Admissions";
import New from "./components/New";
import Partners from "./components/Partners";
import Sections from "./components/Sections";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <Sections />
      <Footer />
      {/* <About /> */}
      {/* <ProgramInNutshell /> */}
      {/* <Studentsfeedback /> */}
      {/* <Admissions /> */}
      {/* <New /> */}
      {/* <Light /> */}
      {/* <div>
        <div className="bg-gradient-to-br from-pink-500 to-purple-500 shadow-lg p-8">
          <h1 className=" text-center text-3xl font-bold text-red-800 hover:italic hover:font-bold hover:text-xl mb-4">Simple Books API by RANA REEBAAL</h1>
          <p className="text-green-600 text-2xl leading-relaxed">
            Build at high performance Edge API Routes with Next.js. Using the Edge Runtime,
            Edge API Routes on standard Web APIs, Neon Database, Middleware and JSON web token (JWT) for authentication purpose.
          </p>
        </div>
      </div> */}
    </>
  );
}
