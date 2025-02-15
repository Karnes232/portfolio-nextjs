import React from "react"
import Image from "next/image"
import { SanityDocument } from "next-sanity"
import { client } from "@/sanity/lib/client"
const ProfileImage = `*[_type == "profile"]{ _id, fullName, profileImage{asset->}}`
const options = { next: { revalidate: 30 } }
// import { Github, Linkedin, WhatsApp } from 'lucide-react';
const HeroComponent = async () => {
  const profiles = await client.fetch<SanityDocument[]>(
    ProfileImage,
    {},
    options,
  )
  console.log(profiles[0])
  return (
    <div className="flex items-center p-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-56">
        {/* Text Content */}
        <div className="flex-1 space-y-6 justify-center items-center">
          <div className="space-y-2">
            <p className="text-gray-400 text-xl lg:text-2xl">I'M</p>
            <h1 className="text-4xl md:text-5xl font-bold ">
              <span className="text-white">James </span>
              <span className="text-yellow-500">Karnes</span>
            </h1>
          </div>

          <p className="text-gray-400 text-lg lg:text-2xl">
            React Developer & Web Consultant
          </p>

          <button className="px-6 py-2 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 transition-colors duration-300 rounded-md">
            Contact Me
          </button>

          {/* Social Links */}
          {/* <div className="flex gap-4 pt-4">
            <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
              <WhatsApp size={24} />
            </a>
          </div> */}
        </div>

        {/* Image */}
        <div className="flex-1 ">
          <div className="relative w-72 h-72 md:w-96 md:h-[40rem] flex justify-center items-center">
            <Image
              src={profiles[0].profileImage.asset.url}
              alt="James Karnes"
              width={382}
              height={432}
              quality={100}
              priority
              className="object-cover grayscale transform -scale-x-100"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroComponent
