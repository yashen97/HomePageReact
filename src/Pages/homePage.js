import React from "react"
import image from "../forest-walk.png"

export default function Home(){
    return (
        <main>
            <img src={image} alt="main-beach" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
            <div>
            <h1 className="text-6xl text-blue-100 font-bold cursive leading-none lg:leading-snug home-name">Hello I'm Yashen Raveehsa</h1>   
            </div>
            <div>
                <ul className="flex-direction:row justify-content:space-around">
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                </ul>
            </div>
           
            </section>

            <footer className="bg-green-700 text-lg text-white italic text-center border-t-3 border-red-500 position:fixed inset-x-0 bottom-0 p-3">   
              © 2021 Yashen Raveesha Samarasingha
            </footer>
        </main>
    )
}