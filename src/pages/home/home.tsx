import Hero from "./components/Hero.tsx"
import ToolTiles from "./components/ToolTiles.tsx"

function Home() {
    return(
        <>
            <Hero />
            <section className="container mx-auto px-18">
                <h2 className="text-3xl font-semibold">About Me</h2>
                <p className="mt-4 text-lg">Welcome to my portfolio. I am a 19 year old Student at the Amsterdam University of Applied Sciences (AUAS/HvA). Currently I'm studying Communication & Multimedia Design (CMD). I am interested in design, technology, interfaces and programming. What you find here is a mix of school projects and personal work.</p>        
            </section>
            <section className="container mx-auto px-18">
                <ToolTiles />
            </section>
        </>
    )
}

export default Home