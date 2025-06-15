interface ControlsProps {
   searchValue: string;
   onSearchChange: (val: string) => void;
   selectedFilter: string;
   onFilterChange: (filter: string) => void;
}

export default function Controls({ searchValue, onSearchChange, selectedFilter, onFilterChange }: ControlsProps) {
   return (
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
         <label className="input flex items-center gap-2">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
               <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
               </g>
            </svg>
            <input type="search" className="search" placeholder="Search…" value={searchValue} onChange={(e) => onSearchChange(e.target.value)} />
         </label>

         <form className="filter">
            <input className="btn btn-square" type="reset" value="×" onClick={() => onFilterChange("All")} />
            <input className="btn" type="radio" name="frameworks" aria-label="UI" checked={selectedFilter === "UI"} onChange={() => onFilterChange("UI")} />
            <input className="btn" type="radio" name="frameworks" aria-label="UX" checked={selectedFilter === "UX"} onChange={() => onFilterChange("UX")} />
            <input className="btn" type="radio" name="frameworks" aria-label="CODE" checked={selectedFilter === "CODE"} onChange={() => onFilterChange("CODE")} />
         </form>
      </div>
   );
}
