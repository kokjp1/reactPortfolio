function Hero() {
    return (
    <header className="hero text-center flex items-center justify-center min-h-[75vh]">
            <div className="text-center">
               <h1 className="text-4xl font-bold mb-4">
                  <span className="inline-block" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="0">Hello,&nbsp;</span>
                  <span className="inline-block" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="100">I'm&nbsp;</span>
                  <span className="inline-block" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="200">James&nbsp;</span>
                  <span className="inline-block" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="300">Kok&nbsp;</span>
               </h1>
               <p className="m-5 text-lg mb-8" data-aos="fade-up" data-aos-duration="1000">2e jaars CMD student aan de Hogeschool van Amsterdam.</p>
               <a id="openingAnimation" href="#projects" className="btn btn-primary mt-8">View My Work</a>
            </div>
         </header>
    )
}

export default Hero;    