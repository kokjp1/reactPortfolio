import Introduction from "./components/introduction"
import Qualities from "./components/qualities"
import Certifications from "./components/certifications" 

function About() {
    return(
        <>
            <section className="container mx-auto px-18 pt-36 space-y-12">       
                <Introduction />
                <Qualities />
            </section>     
            <section className="container mx-auto px-18">            
                <Certifications />
            </section>
        </>
    )
}

export default About