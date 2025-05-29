export default function Qualities() {
  // ← Just edit this array when you want different badges:
  const qualities = [
    { label: 'Creatief 🎨', delay: 100 },
    { label: 'Detailgericht 📐', delay: 200 },
    { label: 'Nauwkeurig 📝', delay: 300 },
    { label: 'Georganiseerd 🗃️', delay: 400 },
    { label: 'Volhardend ⚓', delay: 500 },
    { label: 'Realistisch ⚖️', delay: 600 },
    { label: 'Bekwaam 🎓', delay: 700 },
    { label: 'Enthousiast ⚡', delay: 800 },
  ];

  return (
    <div
      className="
        grid gap-2
        grid-cols-1          
        sm:grid-cols-2      
        md:grid-cols-3        
        lg:grid-cols-4      
        sm:px-12
      "
    >
      {qualities.map(({ label, delay }) => (
        <div
          key={label}
          className="badge badge-lg w-full px-2 py-6"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay={delay}
        >
          {label}
        </div>
      ))}
    </div>
  );
}
