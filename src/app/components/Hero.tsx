import icona from "public/foo.png";
import Image from "next/image";

export default function Hero() {

  return (
    // Hero Section
    <section id="heroback" className="p-[5rem]">
      <div className="container flex flex-col-reverse items-center px-6 mx-auto space-y-0 md:space-y-0">
        <div className="lg:pb-20 md:pb-20 flex flex-col mt-32 space-y-4 md:w-full">
          <div className="text-center container pb-10">
            <div>
              {/* <h1 className="
                inline-block md:ml-20 lg:ml-20 text-4xl font-normal text-left 
                md:text-7xl hover:cursor-pointer hover:font-bold italic 
                bg-clip-text transition-all text-green-500 hover:text-red-700 
                hover:drop-shadow-2xl stroke-gray-950
                text-transparent bg-gradient-to-r from-blue-400 to-pink-600 
                hover:bg-gradient-to-l from-red-500 to-green-700">
                Welcome To <br />
              </h1> */}

              <a href="https://www.panaverse.co/" target="_panaverse"
                className="inline-block neon text-[3.8rem] md:text-[4.8rem] lg:text-[8.8rem]">PanaVerse
                <a href="https://www.panaverse.co/" target="_panaverse"
                  className="pt-8 inline-block flux text-[3.5rem] md:text-[4.8rem] lg:text-[8.8rem]">Dao </a></a>
            </div>
          </div>
          <br />
          <h1 className="text-gray-400 hover:text-white text-3xl font-normal text-center md:text-4xl hover:font-bold italic bg-clip-text transition-all bg-gradient-to-r drop-shadow-2xl stroke-gray-950">
            Become Certified Web 3.0 and Metaverse Developer
          </h1><br />
          <p className="pb-10 text-gray-300 hover:text-white text-2xl font-normal text-center md:text-4xl hover:font-bold italic transition-all hover:drop-shadow-2xl stroke-gray-950">
            Launch Your Dev Career With Web 3 and Metaverse Getting Ready for the Next Generation of the Internet
          </p>

          <br />
          <div className="lg:ml-48 md:ml-48 sm:ml-0">
            <a id="myneona" href="https://www.piaic.org/"
              className="inline-block text-white 
         rounded-3xl transition-all 
          hover:italic baseline
          hover:scale-110 hover:drop-shadow-2xl w-[250px] h-[70px]
          bg-gradient-to-br from-white to-gray-800
          hover:bg-transparent
          ">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <Image className="inline-block w-5 rounded-full mr-2" src={icona} alt="" />
              Get Started
            </a>
            <a id="myneona" href="https://www.panaverse.co/"
              className="
              bg-gradient-to-br from-blue-200 to-indigo-500
              inline-block text-white 
         rounded-3xl transition-all 
          hover:italic baseline
          hover:scale-110 hover:drop-shadow-2xl w-[230px] h-[70px]">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Learn More
            </a>
          </div>
          <br /><br /><br />
        </div>
        {/* Image */}
        {/* <div className="md:w-1/2">
          <Image src={vector} alt="" />
        </div> */}
      </div>
    </section>
  );
};