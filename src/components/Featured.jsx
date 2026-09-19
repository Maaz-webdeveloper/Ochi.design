import React from 'react'
import Card from './Card'

const Featured = () => {
    // Sabhi projects ka array data
    const projects = [
        {
            title: "FYDE",
            image: "/Salience_Labs_8-1-e1784151500748-1326x1101.avif",
            buttons: ["Brand Identity", "Pitch Deck", "Strategy", "Website"],
            isLeft: true
        },
        {
            title: "VISE",
            image: "/Med_Website_0.png",
            buttons: ["conference", "executive keynote", "product launch"],
            isLeft: false
        },
        {
            title: "SOMA ENERGY",
            image: "/Soma_Website_0-1.png",
            buttons: ["Brand Identity", "Pitch Deck", "Strategy"],
            isLeft: true
        },
        {
            title: "AH2 & MATT HORN",
            image: "/Frame-481692-1-1326x1101.png",
            buttons: ["Pitch deck"],
            isLeft: false
        },
        {
            title: "VIse",
            image: "/Vise_Front-1-1326x1101.png",
            buttons: ["agency", "company presentation"],
            isLeft: true
        },
        {
            title: "softstart",
            image: "/Frame-3898-1-1326x1101.jpg",
            buttons: ["Branded Template", "sales desk"],
            isLeft: false
        },
        {
            title: "trawa",
            image: "/Frame-3875-1326x1101.jpg",
            buttons: ["brand identity", "design research", "investor desk"],
            isLeft: true
        },
        {
            title: "Cardboard Spaceship",
            image: "/CS_Website_1-1326x1101.png",
            buttons: ["Branded Template", "sales desk", "Social media template"],
            isLeft: false
        }
    ];

    return (
        <div className='w-full py-10 md:py-20'>
            <div className='w-full px-5 md:px-20 border-b-[1px] border-zinc-700 pb-5 md:pb-10'>
                <h1 className='font-neue text-4xl md:text-7xl tracking-tight'>Featured projects</h1>
            </div>

            <div className='px-5 md:px-20'>
                <div className="cards w-full flex gap-5 md:gap-10 mt-5 md:mt-10 flex-wrap">
                    {/* Unique keys ke sath loop chalaya */}
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            title={project.title}
                            image={project.image}
                            buttons={project.buttons}
                            isLeft={project.isLeft}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Featured