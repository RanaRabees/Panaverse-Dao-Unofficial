/* eslint-disable @next/next/no-img-element */
import React from 'react'

function Partners() {
    return (
        <>
            <div className="text-center container pb-10">
                <div>
                    <a href="https://www.panaverse.co/" target="_panaverse"
                        className="inline-block neon text-[3.8rem] md:text-[4.8rem] lg:text-[8.8rem]">Our
                        <a href="https://www.panaverse.co/" target="_panaverse"
                            className="pt-8 inline-block flux text-[3.5rem] md:text-[4.8rem] lg:text-[8.8rem]">Partners </a></a>
                </div>
            </div>
            <div className="card-group md:ml-32 lg:ml-32 ml-14">
                <div className="card inline-block">
                    <img src="/parta.png"
                        className="w-52 h-60 rounded-xl mb-5 mr-10" alt="Partner 1" />
                </div>
                <div className="card inline-block">
                    <img src="/partc.png"
                        className="w-52 h-60 rounded-xl mb-5 mr-10" alt="Partner 3" />
                </div>
                <div className="card inline-block">
                    <img src="/partd.png"
                        className="w-52 h-60 rounded-xl mb-5 mr-10" alt="Partner 4" />
                </div>
                <div className="card inline-block">
                    <img src="/partb.png"
                        className="w-52 h-60 rounded-xl mb-5" alt="Partner 2" />
                </div>
            </div>

        </>
    )
}

export default Partners
