// components/ProjectsGrid.jsx
import React from "react";
import Image from "next/image";

const projects = [
  {
    title: "Pawppy.in",
    desc: "Connecting Pet Owners with Trusted Care",
    img: "https://anantsoftcomputing.com/media/portfolio/projects/gallery/Screenshot_2025-09-15_at_12.01.45PM.webp",
    tags: ["Firebase", "Javascript", "NodeJS"],
  },
  {
    title: "Ikama.in",
    desc: "Your Gateway to Franchise Opportunities",
    img: "https://anantsoftcomputing.com/media/portfolio/projects/gallery/Screenshot_2025-09-15_at_11.50.41AM.png",
    tags: ["CSS", "Firebase", "HTML"],
  },
  {
    title: "OEC CRM",
    desc: "Optimizing customer relationships with OEC CRM.",
    img: "https://anantsoftcomputing.com/media/portfolio/projects/gallery/oeccrm.webp",
    tags: ["ReactJs", "VueJs"],
  },
  {
    title: "oecindia",
    desc: "Real-time virtual classroom for remote learning",
    img: "https://anantsoftcomputing.com/media/portfolio/projects/gallery/Screenshot_2024-11-25_at_12.58.47AM.png",
    tags: ["Firebase", "NodeJS", "VueJs"],
  },
  {
    title: "Espionline",
    desc: "Real-time virtual classroom for remote learning",
    img: "https://anantsoftcomputing.com/media/portfolio/projects/gallery/Screenshot_2024-11-25_at_1.00.14AM.png",
    tags: ["Firebase", "NodeJS", "VueJs"],
  },
  {
    title: "Indraprasthfoundation",
    desc: "Empowering communities through Indraprasth Foundation.",
    img: "https://anantsoftcomputing.com/media/portfolio/projects/gallery/Screenshot_2024-11-25_at_1.04.13AM.png",
    tags: ["MUI", "ReactJs"],
  },
  {
    title: "Edustation",
    desc: "Empowering education through innovative solutions.",
    img: "https://anantsoftcomputing.com/media/portfolio/projects/gallery/Screenshot_2024-11-25_at_1.06.06AM.png",
    tags: ["Bootstrap", "PHP"],
  },
  {
    title: "SMHRI",
    desc: "Quality healthcare services at SMHRI Hospital.",
    img: "https://anantsoftcomputing.com/media/portfolio/projects/gallery/Screenshot_2024-11-25_at_1.08.15AM.png",
    tags: ["Bootstrap", "Python"],
  },
  {
    title: "ESPI CRM",
    desc: "Streamlined customer management with ESPI CRM.",
    img: "https://anantsoftcomputing.com/media/portfolio/projects/gallery/Screenshot_2024-11-25_at_1.10.34AM.png",
    tags: ["Django", "Python"],
  },
  {
    title: "StudyStreak",
    desc: "Achieve academic goals with Studystreak.",
    img: "https://anantsoftcomputing.com/media/portfolio/projects/gallery/Screenshot_2024-11-25_at_1.12.27AM.png",
    tags: ["NodeJS", "Python", "ReactJs"],
  },
];

export default function ProjectsGrid() {
  return (
    <div className="mx-auto my-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* filter buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        <button
          className="px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 backdrop-blur-sm bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25"
          tabIndex={0}
          aria-pressed="true"
        >
          <span className="text-lg">🌟</span>
          All Projects
        </button>

        <button
          className="px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 backdrop-blur-sm bg-white/80 text-gray-600 hover:bg-primary-50 hover:text-primary-600 border border-gray-100"
          tabIndex={0}
        >
          <span className="text-lg">🏥</span>
          Health Care
        </button>

        <button
          className="px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 backdrop-blur-sm bg-white/80 text-gray-600 hover:bg-primary-50 hover:text-primary-600 border border-gray-100"
          tabIndex={0}
        >
          <span className="text-lg">🎓</span>
          Education
        </button>

        <button
          className="px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 backdrop-blur-sm bg-white/80 text-gray-600 hover:bg-primary-50 hover:text-primary-600 border border-gray-100 transform scale-105"
          tabIndex={0}
        >
          <span className="text-lg">🤝</span>
          Non-Profit
        </button>

        <button
          className="px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 backdrop-blur-sm bg-white/80 text-gray-600 hover:bg-primary-50 hover:text-primary-600 border border-gray-100"
          tabIndex={0}
        >
          <span className="text-lg">🏢</span>
          Enterprise
        </button>
      </div>

      {/* grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div key={p.title} className="group">
            <div className="rounded-2xl shadow-lg shadow-gray-200/40 border border-gray-100 bg-white h-full overflow-hidden bg-white/80 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary-200/20 transition-all duration-500 hover:-translate-y-1 hover:border-primary-200">
              <div className="relative overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.title}
                  width={1200}
                  height={420}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 mb-3">
                  {p.title}
                </h3>
                <p className="text-gray-600 mb-4">{p.desc}</p>

                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <div className="flex gap-4">
                    {p.tags.map((t) => (
                      <div key={t} className="text-center">
                        <div className="text-primary-600 font-semibold">
                          {t}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    className="inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 border-2 border-primary-400 text-primary-600 hover:bg-primary-50 hover:border-primary-500 focus:ring-primary-400 px-4 py-2 text-sm group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600"
                    tabIndex={0}
                    aria-label={`View details for ${p.title}`}
                  >
                    <span className="flex items-center">View Details</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
