function Nav() {
  return (
    <div className="container mx-auto px-18 sticky top-8 z-[100]">
      <div className="navbar bg-base-300 shadow-sm mx-auto rounded-xl border-2 border-base-200 w-full mt-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-300 rounded-box z-10 mt-5 w-52 p-4 shadow text-3xl gap-2">
              <li>
                <a href="/" className="text-xl">James Kok</a>
              </li>
              <li>
                <a href="/about" className="text-xl">About me</a>
              </li>
              <li>
                <a href="/projects" className="text-xl">Projects</a>
              </li>
            </ul>
          </div>
          <a href="/" className="hidden sm:flex btn btn-ghost text-xl">James Kok</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a href="/about">About me</a></li>
            <li><a href="/projects">Projects</a></li>
          </ul>
        </div>

        <div className="navbar-end gap-2">
          {/* GTranslate dropdown mounts here */}
          <div className="gtranslate_wrapper" />
          
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
              Theme 🎨
              <svg width="12" height="12" className="inline-block h-2 w-2 fill-current opacity-60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
                <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" />
              </svg>
            </div>
            <ul tabIndex={0} className="dropdown-content bg-base-300 rounded-box z-10 w-52 p-2 shadow-2xl mt-4 overflow-y-scroll overflow-x-hidden max-h-[50vh]">
              {["light","dark","bumblebee","emerald","synthwave","valentine","halloween","forest","lofi","dracula","night","coffee","winter","dim","silk"].map((theme) => (
                <li key={theme}>
                  <input type="radio" name="theme-dropdown" className="theme-controller w-full btn btn-sm btn-ghost justify-start" aria-label={theme.charAt(0).toUpperCase() + theme.slice(1)} value={theme} data-theme={theme} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
