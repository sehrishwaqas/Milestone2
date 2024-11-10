"use client"
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'




const Navbar = () => {
    return (
        <div><header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-blue-900 mb-4 md:mb-0">
                    <Image src={require('../../../assets/images/image2.png')} alt="PORTFOLIO"
                        height={200}
                        width={200}
                        className="w-[80px]" />

                    <span className="ml-3 text-xl">SEHRISH WAQAS</span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link href={"/"} className="mr-5 hover:text-green-800">HOME</Link>
                    <Link href={""} className="mr-5 hover:text-green-800">ABOUT</Link>
                    <Link href={""} className="mr-5 hover:text-green-800">SKILLS</Link>
                    <Link href={""} className="mr-5 hover:text-green-800">PROJECTS</Link>
                    <Link href={""} className="mr-5 hover:text-green-800">CONTACT</Link>
                </nav>
                
                
        
        </div>

        </header ></div >
    )
}

export default Navbar