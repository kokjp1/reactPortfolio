function FeaturedProjects() {
    return(
        <section id="projects">
            <div className="container mx-auto px-18 text-center">
               <div className="flex flex-row justify-between items-center">
                  <h2 className="text-3xl font-semibold">Featured projects</h2>
                  <a href="projects.html" className="btn">View all projects</a>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                  <div data-aos="fade-down" className="card w-full bg-base-100 shadow-xl">
                     <div className="card-body">
                        <h3 className="card-title">Gameboxd</h3>
                        <p className="text-left">Gameboxd is een applicatie voor gamezrs. Het is een social media platform waar je onder andere; games kan reviewen, vrienden kan maken, je gamelijst tonen, en up to date blijven over het belangrijkste game-nieuws.</p>
                        <div className="card-actions justify-end">
                           <a href="#" className="btn btn-primary">View Project</a>
                        </div>
                     </div>
                  </div>
                  <div data-aos="fade-down" data-aos-delay="100" className="card w-full bg-base-100 shadow-xl">
                     <div className="card-body">
                        <h3 className="card-title">Gameboxd</h3>
                        <p className="text-left">Gameboxd is een applicatie voor gamers. Het is een social media platform waar je onder andere; games kan reviewen, vrienden kan maken, je gamelijst tonen, en up to date blijven over het belangrijkste game-nieuws.</p>
                        <div className="card-actions justify-end">
                           <a href="#" className="btn btn-primary">View Project</a>
                        </div>
                     </div>
                  </div>
                  <div data-aos="fade-down" data-aos-delay="200" className="card w-full bg-base-100 shadow-xl">
                     <div className="card-body">
                        <h3 className="card-title">Gameboxd</h3>
                        <p className="text-left">Gameboxd is een applicatie voor gamers. Het is een social media platform waar je onder andere; games kan reviewen, vrienden kan maken, je gamelijst tonen, en up to date blijven over het belangrijkste game-nieuws.</p>
                        <div className="card-actions justify-end">
                           <a href="#" className="btn btn-primary">View Project</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    )
}

export default FeaturedProjects