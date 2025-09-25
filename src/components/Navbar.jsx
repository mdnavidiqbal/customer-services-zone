import React from 'react'

export default function Navbar(){
  return (
    <header className="bg-white shadow-sm max-w-6xl mx-auto">
      <div className="max-w-[1240px] mx-auto px-10 sm:px-6 lg:px-8 py-4 flex justify-between">
        <div className="text-xl font-bold text-gray-800"><a href="#">CS — Ticket System</a></div>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6 text-sm text-gray-600">
            <a href='#' className="hover:underline text-balck">Home</a>
            <a href='#' className="hover:underline text-balck">FAQ</a>
            <a href='#' className="hover:underline text-balck">Changelog</a>
            <a href='#' className="hover:underline text-balck">Blog</a>
            <a href='#' className="hover:underline text-balck">Download</a>
            <a href='#' className="hover:underline text-balck">Contact</a>
          </nav>
          <button className="bg-gradient-to-l from-[#9f62f2] to-[#632ee3] text-white px-4 py-2 rounded-md shadow-sm hover:opacity-85">+ New Ticket</button>
        </div>
      </div>
    </header>
  )
}
