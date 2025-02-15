import React from "react"
import Image from "next/image"
import { SanityDocument } from "next-sanity"
import { client } from "@/sanity/lib/client"
const ProfileImage = `*[_type == "profile"]{ _id, fullName, profileImage{asset->}}`
const options = { next: { revalidate: 30 } }
const Logo = async () => {
  const profiles = await client.fetch<SanityDocument[]>(
    ProfileImage,
    {},
    options,
  )
  console.log(profiles[0].profileImage.asset.metadata.dimensions)
  return (
    <div className="flex justify-center items-center">
      <div className="flex p-2 md:p-6 items-center w-24 h-20 cursor-pointer md:w-56 md:h-40">
        <Image
          src={profiles[0].profileImage.asset.url}
          alt="Logo"
          width={224}
          height={224}
          quality={100}
          priority
        />
      </div>
    </div>
  )
}

export default Logo
