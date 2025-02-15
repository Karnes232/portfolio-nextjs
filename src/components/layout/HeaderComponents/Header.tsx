import React from "react"
import Logo from "./Logo"
import Nav from "./Nav"

const Header = () => {
  return (
    <nav className="bg-transparent sticky top-0 z-50">
      <div className="flex items-center justify-between bg-transparent max-w-screen-lg xl:mx-auto">
        <Logo />

        <Nav />
      </div>
    </nav>
  )
}

export default Header
