import React from "react"
import Link from "next/link"
import "@/styles/header/header.css"
const Nav = () => {
  return (
    <div className="flex justify-end items-center space-x-4 p-2 md:p-6">
      <div className="block space-x-8">
        <Link href="/" className="no-underline">
          <button className="navLinks">About</button>
        </Link>
        <Link href="/" className="no-underline">
          <button className="navLinks">Portfolio</button>
        </Link>
        <Link href="/" className="no-underline">
          <button className="navLinks">Contact</button>
        </Link>
      </div>
    </div>
  )
}

export default Nav
