import Image from "next/image";
import img from "/public/programinnutshell.png";

export default function ProgramInNutshell() {
    return (
        <>
            <section className="flex flex-wrap items-center justify-center bg-white dark:bg-bk lg:flex-nowrap">
                <Image
                    className="z-20 h-[420px] w-[420px] lg:h-[520px] lg:w-[520px] xl:h-[500px] xl:w-[620px]"
                    src={img}
                    quality={100}
                    width={644}
                    height={629}
                    alt="section 2 cartoon panaverse"
                />
                <div className="hover:drop-shadow-2xl stroke-gray-950 right-28 bottom-10 z-10 m-6 min-w-[300px] max-w-[600px] rounded-3xl bg-[#2e2e3f] p-10 lg:relative">
                    <h4 className="gradient text-center text-3xl font-bold text-accent sm:text-4xl hover:font-extrabold hover:italic text-transparent bg-clip-text transition-all bg-gradient-to-r from-blue-400 to-pink-600 hover:bg-gradient-to-l from-red-500 to-green-700 hover:drop-shadow-2xl stroke-gray-950">
                        The Program in a Nutshell
                    </h4>
                    <h2 className="gradient py-8 text-center text-2xl font-bold text-accent sm:text-3xl">
                        Earn While You Learn
                    </h2>
                    <p className="text-justify text-xl font-normal text-slate-50 sm:text-2xl">
                        In this brand-new type of curriculum, students will learn how to make
                        money and boost exports in the classroom and will begin doing so
                        within six months of the program&apos;s beginning. It resembles a
                        cross between a corporate venture and an educational project.
                    </p>
                </div>
            </section>
        </>
    );
}
