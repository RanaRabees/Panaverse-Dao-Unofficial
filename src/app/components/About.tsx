import vector from "public/imga.png";
import Image from "next/image";
function About() {
    return (
        <>
            <section className="mb-20">
                <h1 className="text-4xl font-normal md:text-6xl hover:font-bold italic text-transparent bg-clip-text transition-all text-center bg-gradient-to-r from-blue-400 to-pink-600 hover:bg-gradient-to-l from-red-500 to-green-700 hover:drop-shadow-2xl stroke-gray-950">
                    About Us
                </h1>
                <div className="container flex flex-col-reverse items-center px-6 mx-auto space-y-0 md:space-y-0 md:flex-row">
                    <div className="text-center lg:pt-10 md:pt-28 sm:pt-28 flex flex-col space-y-4 md:w-1/2">
                        <h3 className="text-2xl hover:italic hover:font-bold transition-all  hover:text-3xl text-green-500 hover:text-red-400">Web 3 and Metaverse developers </h3><br />
                        <p className="text-xl">
                            Our community is made up of Web 3 and Metaverse developers, <br />
                            designers, trainers, startup founders, and service providers. <br />
                            We are preparing for the next generation of the internet and <br />
                            we are ready to share our knowledge with you. <br />
                        </p>
                        <br /><h3 className="text-2xl hover:italic hover:font-bold transition-all  hover:text-3xl text-green-500 hover:text-red-400"> Future of the Internet </h3> <br />
                        <p className="text-xl">
                            Getting Ready for the Next Generation and Future of the Internet <br />
                            - Join a 13 Trillion Dollar Industry with 5 Billion Users <br />
                        </p>
                        <br /><h3 className="text-2xl hover:italic hover:font-bold transition-all hover:text-3xl text-green-500 hover:text-red-400"> Future of the Web is Web 3.0 </h3> <br />
                        <p className="text-xl">
                            The Future of the Web is Web 3.0, Metaverse, and Edge Computing. <br />
                            Panaverse DAO is a movement to spread these technolgies globally. <br />
                            It is community of Web 3 and Metaverse developers, <br />
                            designers, trainers, startup founders and service providers. <br />
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <Image className="rounded-3xl" src={vector} alt="" />
                        <div className="flex pt-10 justify-center">
                            <a
                                target="_panaverse"
                                href="https://www.panaverse.co/"
                                className="p-3 px-6 pt-2 text-white bg-red-700 rounded-2xl hover:rounded-3xl transition-all hover:italic hover:font-bold baseline hover:bg-green-600 hover:scale-110 hover:drop-shadow-2xl">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
