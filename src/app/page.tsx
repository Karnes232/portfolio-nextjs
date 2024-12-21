import { client } from "@/sanity/lib/client";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
const Profile = `*[_type == "profile"]{ _id, fullName, profileImage{asset->}}`;
const options = { next: { revalidate: 30 } };
export default async function Home() {

  
  const profiles = await client.fetch<SanityDocument[]>(Profile, {}, options);
  console.log(profiles[0].profileImage.asset)


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
   <Image
            src={profiles[0].profileImage.asset.url}
            alt="Logo"
            width={100}
            height={100}
            quality={75}
          />
    </div>
  );
}
