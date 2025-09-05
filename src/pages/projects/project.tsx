import { useParams } from "react-router";
import { projects } from "./components/projectdata";
import { useEffect, useRef, useState } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

export default function Project() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Store intrinsic sizes so PhotoSwipe opens at true (original) size
  const [sizes, setSizes] = useState<Record<string, { w: number; h: number }>>({});

  // Track scroll position for enabling/disabling buttons
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Preload images to get naturalWidth/Height for each src
  useEffect(() => {
    if (!project) return;
    let isActive = true;
    (async () => {
      const entries = await Promise.all(
        project.images.map(
          (src) =>
            new Promise<[string, { w: number; h: number }]>((resolve) => {
              const img = new Image();
              img.onload = () => resolve([src, { w: img.naturalWidth, h: img.naturalHeight }]);
              img.onerror = () => resolve([src, { w: 0, h: 0 }]);
              img.src = src;
            })
        )
      );
      if (!isActive) return;
      const next: Record<string, { w: number; h: number }> = {};
      entries.forEach(([src, wh]) => (next[src] = wh));
      setSizes(next);
    })();
    return () => {
      isActive = false;
    };
  }, [project]);

  // Init PhotoSwipe: open at original size (initialZoomLevel = 1)
  useEffect(() => {
    if (!project) return;
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#gallery",
      children: "a",
      initialZoomLevel: 1,
      secondaryZoomLevel: 1,
      maxZoomLevel: 4,
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();
    return () => lightbox.destroy();
  }, [project]);

  // Update scroll button states
  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollButtons();
    el.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);
    return () => {
      el.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  if (!project) {
    return (
      <div className="container mx-auto px-6 min-h-screen flex items-center justify-center p-4">
        <p className="text-lg">Project not found.</p>
        <a href="/" className="ml-4 text-blue-600 hover:underline">
          Terug naar Home
        </a>
      </div>
    );
  }

  const p = project!;

  return (
    <main className="container mx-auto px-6 py-12">
      {/* Gallery */}
      <div className="my-12">
        {p.images.length > 4 ? (
          <div className="relative">
            <div
              id="gallery"
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto scroll-smooth py-2 pr-2 max-w-screen-xl"
            >
              {p.images.map((src, idx) => (
                <a
                  key={idx}
                  href={src}
                  {...(sizes[src]?.w && sizes[src]?.h
                    ? { "data-pswp-width": sizes[src].w, "data-pswp-height": sizes[src].h }
                    : {})}
                  className="flex-none w-72 sm:w-80 md:w-96 rounded-lg group gallery-image overflow-hidden"
                >
                  <img
                    src={src}
                    alt={`Image ${idx + 1}`}
                    className="w-full h-56 sm:h-60 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                  />
                </a>
              ))}
            </div>

            {/* Carousel controls */}
            <button
              type="button"
              aria-label="Previous images"
              disabled={!canScrollLeft}
              onClick={() => {
                const el = scrollRef.current;
                if (!el) return;
                const amount = el.clientWidth * 0.9;
                el.scrollBy({ left: -amount, behavior: "smooth" });
              }}
              className="btn btn-circle btn-primary absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 shadow disabled:opacity-40"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next images"
              disabled={!canScrollRight}
              onClick={() => {
                const el = scrollRef.current;
                if (!el) return;
                const amount = el.clientWidth * 0.9;
                el.scrollBy({ left: amount, behavior: "smooth" });
              }}
              className="btn btn-circle btn-primary absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 shadow disabled:opacity-40"
            >
              ›
            </button>
          </div>
        ) : (
          <div id="gallery" className="columns-2 sm:columns-3 md:columns-4 gap-4 max-w-screen-xl gallery-hover">
            {p.images.map((src, idx) => (
              <a
                key={idx}
                href={src}
                {...(sizes[src]?.w && sizes[src]?.h
                  ? { "data-pswp-width": sizes[src].w, "data-pswp-height": sizes[src].h }
                  : {})}
                className="block mb-4 rounded-lg group gallery-image overflow-hidden break-inside-avoid"
              >
                <img
                  src={src}
                  alt={`Image ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                />
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Details Section */}
      <section className="flex flex-col space-y-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <h1 className="text-2xl sm:text-3xl font-semibold flex items-start justify-between gap-3 w-full">
            <span>{p.title}</span>
            {/* Year/course badge on wide screens only */}
            <span className="badge badge-neutral text-sm font-bold hidden min-[901px]:inline-flex">{p.badge}</span>
          </h1>
        </div>

        {/* Badges row (categories + year on narrow screens) */}
        <div className="flex flex-wrap items-center gap-2">
          {p.categories.map((cat) => (
            <span key={cat} className="badge badge-neutral text-sm font-bold">
              {cat}
            </span>
          ))}
          {/* Year/course badge on narrow screens only */}
          <span className="badge badge-neutral text-sm font-bold inline-flex min-[901px]:hidden">{p.badge}</span>
        </div>

        <p className="text-base leading-relaxed">{p.detaileddesc}</p>

        {p.link && (
          <a href={p.link} className="text-blue-600 hover:underline break-all">
            {p.linkidentifier || p.link}
          </a>
        )}

        {/* Tools */}
        {Array.isArray(p.tools) && p.tools.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            {p.tools.map((toolUrl: string, idx: number) => (
              <img
                key={idx}
                src={toolUrl}
                alt={`Tool ${idx + 1}`}
                className="w-12 h-12 p-2 rounded-xl bg-base-200 border-3 border-primary/20 shadow-sm"
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}