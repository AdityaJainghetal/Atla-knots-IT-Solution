
// import React, { useEffect, useState } from 'react';
// import { useTheme } from '../../context/ThemeContext';

// function CareerPage() {
//   const { isDark } = useTheme();
//   const [showScrollTop, setShowScrollTop] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScrollTop(window.scrollY > 400);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };

//   return (
//     <div className="min-h-screen bg-black text-white relative">
//       {/* Hero Section */}
//       <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-black to-black pointer-events-none">
        
//         <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
//             <span className="text-red-600">Join</span> Our Team
//           </h1>
          
//           <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
//             Be part of a team that's building the future.  
//             We are looking for passionate, curious and bold people.
//           </p>

//           <div className="mt-10">
//             <a
//               href="#open-positions"
//               className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold text-lg px-10 py-5 rounded-lg transition-colors duration-300 shadow-lg shadow-red-900/40"
//             >
//               See Open Positions →
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Why Join Us */}
//       <section className="py-20 border-t border-gray-800">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
//             Why Work <span className="text-red-600">With Us?</span>
//           </h2>

//           <div className="grid md:grid-cols-3 gap-10">
//             {[
//               {
//                 title: "Ownership & Impact",
//                 desc: "You’ll own real features from day one and see your work used by thousands.",
//               },
//               {
//                 title: "Rapid Growth",
//                 desc: "Fast-paced environment where you learn and level up every month.",
//               },
//               {
//                 title: "Great Team",
//                 desc: "Work with smart, kind, and ambitious people who actually enjoy working together.",
//               },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="bg-gray-900/60 border border-gray-800 p-8 rounded-xl hover:border-red-800/50 transition-all duration-300"
//               >
//                 <h3 className="text-2xl font-semibold text-red-500 mb-4">{item.title}</h3>
//                 <p className="text-gray-300 leading-relaxed">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Open Positions */}
//       <section id="open-positions" className="py-20 bg-gradient-to-b from-black to-gray-950">
//         <div className="max-w-6xl mx-auto px-6 lg:px-8">
//           <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
//             Open <span className="text-red-600">Positions</span>
//           </h2>

//           <div className="space-y-6">
//             {[
//               {
//                 role: "Product Designer (UI/UX)",
//                 location: "Remote",
//                 type: "Full-time",
//               },
//               {
//                 role: "Growth & Marketing Lead",
//                 location: "Remote",
//                 type: "Full-time",
//               },
//             ].map((job, i) => (
//               <div
//                 key={i}
//                 className="group bg-gray-900/70 border border-gray-800 p-6 md:p-8 rounded-xl hover:border-red-700/60 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
//               >
//                 <div>
//                   <h3 className="text-2xl font-semibold group-hover:text-red-500 transition-colors">
//                     {job.role}
//                   </h3>
//                   <div className="mt-3 flex flex-wrap gap-4 text-gray-400">
//                     <span>{job.location}</span>
//                     <span>•</span>
//                     <span>{job.type}</span>
//                   </div>
//                 </div>

//                 <a
//                   href="#"
//                   className="bg-red-600/90 hover:bg-red-600 px-8 py-4 rounded-lg font-medium transition-colors whitespace-nowrap"
//                 >
//                   Apply Now
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Footer */}
//       <section className="py-24 border-t border-gray-800">
//         <div className="max-w-4xl mx-auto px-6 text-center">
//           <h2 className="text-4xl md:text-5xl font-bold mb-8">
//             Ready to <span className="text-red-600">build</span> something epic?
//           </h2>
//           <p className="text-xl text-gray-300 mb-10">
//             Join us and leave your mark.
//           </p>
//           <a
//             href="#open-positions"
//             className="inline-block bg-red-600 hover:bg-red-700 px-12 py-6 text-xl font-semibold rounded-xl shadow-xl shadow-red-900/30 transition-all duration-300"
//           >
//             Explore Open Roles →
//           </a>
//         </div>
//       </section>

//       {/* Scroll to Top Button */}
//       <button
//         onClick={scrollToTop}
//         className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-900/50 transition-all duration-300 hover:scale-110 active:scale-95 opacity-100 translate-y-0"
//         aria-label="Scroll back to top"
//       >
//         <svg 
//           className="w-6 h-6" 
//           fill="none" 
//           stroke="currentColor" 
//           viewBox="0 0 24 24" 
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path 
//             strokeLinecap="round" 
//             strokeLinejoin="round" 
//             strokeWidth={2} 
//             d="M5 10l7-7m0 0l7 7m-7-7v18" 
//           />
//         </svg>
//       </button>
//     </div>
//   );
// }

// export default CareerPage;

import React, { useEffect, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from "framer-motion";

function CareerPage() {
  const { isDark } = useTheme();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // ====================== THEME CLASSES ======================
  const cardClass = isDark
    ? "bg-gray-900/70 border border-gray-800 hover:border-red-600/60 p-8 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/20"
    : "bg-white border border-gray-200 shadow-lg hover:shadow-2xl p-8 rounded-xl transition-all duration-300";

  const headingClass = isDark ? "text-white" : "text-gray-900";
  const bodyClass = isDark ? "text-gray-300" : "text-gray-700";
  const accentClass = "text-red-600";

  return (
    <div className={`min-h-screen transition-colors duration-700 relative overflow-hidden
      ${isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"}`}>

      {/* ====================== HERO SECTION ====================== */}
      <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
        <div className={`absolute inset-0 transition-all duration-700
          ${isDark 
            ? "bg-gradient-to-br from-red-950/30 via-black to-black" 
            : "bg-gradient-to-br from-red-100 via-white to-white"}`} 
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight ${headingClass}`}
          >
            <span className={accentClass}>Join</span> Our Team
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`mt-6 text-xl md:text-2xl max-w-3xl mx-auto ${bodyClass}`}
          >
            Be part of a team that's building the future.  
            We are looking for passionate, curious and bold people.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10"
          >
            <a
              href="#open-positions"
              className="inline-block bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold text-lg px-10 py-5 rounded-lg transition-all duration-300 shadow-lg shadow-red-900/40"
            >
              See Open Positions →
            </a>
          </motion.div>
        </div>
      </section>

      {/* ====================== WHY JOIN US ====================== */}
      <section className={`py-20 border-t ${isDark ? "border-gray-800" : "border-gray-200"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${headingClass}`}>
            Why Work <span className={accentClass}>With Us?</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Ownership & Impact",
                desc: "You’ll own real features from day one and see your work used by thousands.",
              },
              {
                title: "Rapid Growth",
                desc: "Fast-paced environment where you learn and level up every month.",
              },
              {
                title: "Great Team",
                desc: "Work with smart, kind, and ambitious people who actually enjoy working together.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cardClass}
              >
                <h3 className={`text-2xl font-semibold mb-4 ${accentClass}`}>{item.title}</h3>
                <p className={`leading-relaxed ${bodyClass}`}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== OPEN POSITIONS ====================== */}
      <section id="open-positions" className={`py-20 ${isDark ? "bg-gradient-to-b from-black to-gray-950" : "bg-white"}`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${headingClass}`}>
            Open <span className={accentClass}>Positions</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                role: "Product Designer (UI/UX)",
                location: "Remote",
                type: "Full-time",
              },
              {
                role: "Growth & Marketing Lead",
                location: "Remote",
                type: "Full-time",
              },
            ].map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 md:p-8 rounded-xl transition-all duration-300
                  ${isDark 
                    ? "bg-gray-900/70 border border-gray-800 hover:border-red-700/60" 
                    : "bg-white border border-gray-200 hover:border-red-600 shadow-md hover:shadow-xl"}`}
              >
                <div>
                  <h3 className={`text-2xl font-semibold group-hover:text-red-600 transition-colors ${headingClass}`}>
                    {job.role}
                  </h3>
                  <div className={`mt-3 flex flex-wrap gap-4 ${bodyClass}`}>
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                  </div>
                </div>

                <a
                  href="#"
                  className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white px-8 py-4 rounded-lg font-medium transition-all whitespace-nowrap"
                >
                  Apply Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== FINAL CTA ====================== */}
      <section className={`py-24 border-t ${isDark ? "border-gray-800" : "border-gray-200"}`}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${headingClass}`}>
            Ready to <span className={accentClass}>build</span> something epic?
          </h2>
          <p className={`text-xl mb-10 ${bodyClass}`}>
            Join us and leave your mark.
          </p>
          <a
            href="#open-positions"
            className="inline-block bg-red-600 hover:bg-red-700 active:bg-red-800 text-white px-12 py-6 text-xl font-semibold rounded-xl shadow-xl transition-all duration-300"
          >
            Explore Open Roles →
          </a>
        </div>
      </section>

      {/* ====================== SCROLL TO TOP BUTTON ====================== */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-900/50 transition-all duration-300 hover:scale-110 active:scale-95
          ${showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 pointer-events-none"}`}
        aria-label="Scroll back to top"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      </button>
    </div>
  );
}

export default CareerPage;