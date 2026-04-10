// // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // import { motion } from "framer-motion";
// // // // // // // // import {
// // // // // // // //   ArrowRight,
// // // // // // // //   Code,
// // // // // // // //   ShieldCheck,
// // // // // // // //   Users,
// // // // // // // //   Server,
// // // // // // // //   Headphones,
// // // // // // // //   BarChart3,
// // // // // // // //   CheckCircle,
// // // // // // // //   Briefcase,
// // // // // // // //   HardDrive,
// // // // // // // // } from "lucide-react";

// // // // // // // // const fadeInUp = {
// // // // // // // //   hidden: { opacity: 0, y: 60 },
// // // // // // // //   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// // // // // // // // };

// // // // // // // // const staggerContainer = {
// // // // // // // //   hidden: {},
// // // // // // // //   visible: { transition: { staggerChildren: 0.15 } },
// // // // // // // // };

// // // // // // // // export default function Home() {
// // // // // // // //   const [isDark, setIsDark] = useState(
// // // // // // // //     () => document.documentElement.classList.contains("dark")
// // // // // // // //   );

// // // // // // // //   useEffect(() => {
// // // // // // // //     const observer = new MutationObserver(() => {
// // // // // // // //       setIsDark(document.documentElement.classList.contains("dark"));
// // // // // // // //     });
// // // // // // // //     observer.observe(document.documentElement, {
// // // // // // // //       attributes: true,
// // // // // // // //       attributeFilter: ["class"],
// // // // // // // //     });
// // // // // // // //     return () => observer.disconnect();
// // // // // // // //   }, []);

// // // // // // // //   // Reusable class helpers
// // // // // // // //   const cardClass = isDark
// // // // // // // //     ? "bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full"
// // // // // // // //     : "bg-white border border-gray-200 shadow-md rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full";

// // // // // // // //   const headingClass = isDark ? "text-white" : "text-gray-900";
// // // // // // // //   const bodyClass = isDark ? "text-gray-300" : "text-gray-700";
// // // // // // // //   const accentClass = isDark ? "text-red-500" : "text-blue-600";
// // // // // // // //   const sectionHeadingAccent = isDark ? "text-red-400" : "text-blue-700";

// // // // // // // //   return (
// // // // // // // //     <div
// // // // // // // //       className={`min-h-screen overflow-x-hidden transition-colors duration-700
// // // // // // // //       ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}`}
// // // // // // // //     >
// // // // // // // //       {/* ====================== HERO SECTION ====================== */}
// // // // // // // //       <section
// // // // // // // //         className={`relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden
// // // // // // // //         ${
// // // // // // // //           isDark
// // // // // // // //             ? "bg-gradient-to-br from-black via-gray-950 to-black"
// // // // // // // //             : "bg-gradient-to-br from-slate-50 via-white to-blue-50"
// // // // // // // //         }`}
// // // // // // // //       >
// // // // // // // //         <div className="max-w-7xl mx-auto text-center">
// // // // // // // //           <motion.div
// // // // // // // //             initial={isDark ? "hidden" : false}
// // // // // // // //             animate={isDark ? "visible" : false}
// // // // // // // //             variants={isDark ? staggerContainer : {}}
// // // // // // // //           >
// // // // // // // //             <motion.h1
// // // // // // // //               variants={isDark ? fadeInUp : {}}
// // // // // // // //               className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 ${headingClass}`}
// // // // // // // //             >
// // // // // // // //               ATLA KNOTS
// // // // // // // //               <br />
// // // // // // // //               <span
// // // // // // // //                 className={
// // // // // // // //                   isDark
// // // // // // // //                     ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-red-400 to-white"
// // // // // // // //                     : "text-blue-600"
// // // // // // // //                 }
// // // // // // // //               >
// // // // // // // //                 IT SOLUTIONS
// // // // // // // //               </span>
// // // // // // // //             </motion.h1>

// // // // // // // //             <motion.p
// // // // // // // //               variants={isDark ? fadeInUp : {}}
// // // // // // // //               className={`text-xl md:text-2xl max-w-4xl mx-auto mb-10 leading-relaxed
// // // // // // // //                 ${isDark ? "text-gray-300" : "text-gray-700"}`}
// // // // // // // //             >
// // // // // // // //               Making technology impactful, dependable, and easy to use — for
// // // // // // // //               businesses of all sizes.
// // // // // // // //             </motion.p>

// // // // // // // //             <motion.p
// // // // // // // //               variants={isDark ? fadeInUp : {}}
// // // // // // // //               className={`text-lg md:text-xl max-w-3xl mx-auto mb-12
// // // // // // // //                 ${isDark ? "text-gray-400" : "text-gray-600"}`}
// // // // // // // //             >
// // // // // // // //               We build secure, future-ready software that drives efficiency and
// // // // // // // //               digital transformation.
// // // // // // // //             </motion.p>

// // // // // // // //             <motion.div
// // // // // // // //               variants={isDark ? fadeInUp : {}}
// // // // // // // //               className="flex flex-col sm:flex-row gap-6 justify-center"
// // // // // // // //             >
// // // // // // // //               <button
// // // // // // // //                 className={`group px-10 py-5 rounded-full text-lg font-semibold flex items-center gap-3 transition-all
// // // // // // // //                   ${
// // // // // // // //                     isDark
// // // // // // // //                       ? "bg-red-600 hover:bg-red-700 text-white"
// // // // // // // //                       : "bg-blue-600 hover:bg-blue-700 text-white"
// // // // // // // //                   }`}
// // // // // // // //               >
// // // // // // // //                 GET STARTED
// // // // // // // //                 <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
// // // // // // // //               </button>

// // // // // // // //               <button
// // // // // // // //                 className={`group px-10 py-5 border-2 rounded-full text-lg font-semibold transition-all
// // // // // // // //                   ${
// // // // // // // //                     isDark
// // // // // // // //                       ? "border-red-600/60 text-red-400 hover:border-red-500"
// // // // // // // //                       : "border-blue-600 text-blue-600 hover:bg-blue-50"
// // // // // // // //                   }`}
// // // // // // // //               >
// // // // // // // //                 VIEW OUR WORK
// // // // // // // //               </button>
// // // // // // // //             </motion.div>
// // // // // // // //           </motion.div>
// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       {/* ====================== SERVICES SECTION ====================== */}
// // // // // // // //       <section
// // // // // // // //         className={`py-24 px-6 md:px-12 lg:px-24 transition-colors
// // // // // // // //         ${isDark ? "bg-gradient-to-b from-black to-gray-950" : "bg-gray-50"}`}
// // // // // // // //       >
// // // // // // // //         <div className="max-w-7xl mx-auto">
// // // // // // // //           <motion.h2
// // // // // // // //             initial={isDark ? "hidden" : false}
// // // // // // // //             whileInView={isDark ? "visible" : false}
// // // // // // // //             variants={fadeInUp}
// // // // // // // //             className={`text-5xl md:text-6xl font-bold text-center mb-6 ${headingClass}`}
// // // // // // // //           >
// // // // // // // //             OUR{" "}
// // // // // // // //             <span className={accentClass}>SERVICES</span>
// // // // // // // //           </motion.h2>

// // // // // // // //           <motion.p
// // // // // // // //             initial={isDark ? "hidden" : false}
// // // // // // // //             whileInView={isDark ? "visible" : false}
// // // // // // // //             variants={fadeInUp}
// // // // // // // //             className={`text-xl text-center mb-16 max-w-3xl mx-auto ${bodyClass}`}
// // // // // // // //           >
// // // // // // // //             Comprehensive IT & BPO solutions — from development to support and
// // // // // // // //             infrastructure
// // // // // // // //           </motion.p>

// // // // // // // //           <div className="space-y-20">
// // // // // // // //             {/* IT Services */}
// // // // // // // //             <div>
// // // // // // // //               <h3 className={`text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight ${sectionHeadingAccent}`}>
// // // // // // // //                 1. Information Technology Services
// // // // // // // //               </h3>
// // // // // // // //               <p className={`text-lg md:text-xl mb-12 text-center max-w-4xl mx-auto leading-relaxed ${bodyClass}`}>
// // // // // // // //                 Supporting companies at every stage of the product lifecycle.
// // // // // // // //               </p>

// // // // // // // //               <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
// // // // // // // //                 {/* Development */}
// // // // // // // //                 <motion.div
// // // // // // // //                   initial={isDark ? "hidden" : false}
// // // // // // // //                   whileInView={isDark ? "visible" : false}
// // // // // // // //                   variants={fadeInUp}
// // // // // // // //                   className={cardClass}
// // // // // // // //                 >
// // // // // // // //                   <Code className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // // // // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>
// // // // // // // //                     Development
// // // // // // // //                   </h4>
// // // // // // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // // // // // //                     <li>• Web application development</li>
// // // // // // // //                     <li>• Mobile application development</li>
// // // // // // // //                     <li>• Secure, scalable & user-friendly solutions</li>
// // // // // // // //                   </ul>
// // // // // // // //                 </motion.div>

// // // // // // // //                 {/* Testing */}
// // // // // // // //                 <motion.div
// // // // // // // //                   initial={isDark ? "hidden" : false}
// // // // // // // //                   whileInView={isDark ? "visible" : false}
// // // // // // // //                   variants={fadeInUp}
// // // // // // // //                   className={cardClass}
// // // // // // // //                 >
// // // // // // // //                   <ShieldCheck className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // // // // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>
// // // // // // // //                     Testing
// // // // // // // //                   </h4>
// // // // // // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // // // // // //                     <li>• Web application testing</li>
// // // // // // // //                     <li>• Mobile application testing</li>
// // // // // // // //                     <li>• Quality, performance & security assurance</li>
// // // // // // // //                   </ul>
// // // // // // // //                 </motion.div>

// // // // // // // //                 {/* L2 Support */}
// // // // // // // //                 <motion.div
// // // // // // // //                   initial={isDark ? "hidden" : false}
// // // // // // // //                   whileInView={isDark ? "visible" : false}
// // // // // // // //                   variants={fadeInUp}
// // // // // // // //                   className={cardClass}
// // // // // // // //                 >
// // // // // // // //                   <Users className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // // // // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>
// // // // // // // //                     L2 Support
// // // // // // // //                   </h4>
// // // // // // // //                   <p className={`text-sm md:text-base leading-relaxed max-w-xs ${bodyClass}`}>
// // // // // // // //                     Advanced troubleshooting, in-depth diagnosis & root cause
// // // // // // // //                     resolution for complex issues.
// // // // // // // //                   </p>
// // // // // // // //                 </motion.div>

// // // // // // // //                 {/* Product Assistance */}
// // // // // // // //                 <motion.div
// // // // // // // //                   initial={isDark ? "hidden" : false}
// // // // // // // //                   whileInView={isDark ? "visible" : false}
// // // // // // // //                   variants={fadeInUp}
// // // // // // // //                   className={cardClass}
// // // // // // // //                 >
// // // // // // // //                   <Server className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // // // // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>
// // // // // // // //                     Product Assistance
// // // // // // // //                   </h4>
// // // // // // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // // // // // //                     <li>• Continuous support & maintenance</li>
// // // // // // // //                     <li>• Ticket & incident management</li>
// // // // // // // //                     <li>• Change management & SLA tracking</li>
// // // // // // // //                   </ul>
// // // // // // // //                 </motion.div>
// // // // // // // //               </div>
// // // // // // // //             </div>

// // // // // // // //             {/* BPO Services */}
// // // // // // // //             <div>
// // // // // // // //               <h3 className={`text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight ${sectionHeadingAccent}`}>
// // // // // // // //                 2. Business Process Outsourcing (BPO) Services
// // // // // // // //               </h3>
// // // // // // // //               <p className={`text-lg md:text-xl mb-12 text-center max-w-3xl mx-auto leading-relaxed ${bodyClass}`}>
// // // // // // // //                 Streamline operations and enhance customer engagement with
// // // // // // // //                 reliable, scalable support.
// // // // // // // //               </p>

// // // // // // // //               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
// // // // // // // //                 {/* Voice, Chat & Email */}
// // // // // // // //                 <motion.div
// // // // // // // //                   initial={isDark ? "hidden" : false}
// // // // // // // //                   whileInView={isDark ? "visible" : false}
// // // // // // // //                   variants={fadeInUp}
// // // // // // // //                   className={cardClass}
// // // // // // // //                 >
// // // // // // // //                   <Headphones className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // // // // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>
// // // // // // // //                     Voice, Chat & Email
// // // // // // // //                   </h4>
// // // // // // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // // // // // //                     <li>• Inbound & outbound voice support</li>
// // // // // // // //                     <li>• Real-time chat assistance</li>
// // // // // // // //                     <li>• Structured email & ticketing</li>
// // // // // // // //                   </ul>
// // // // // // // //                 </motion.div>

// // // // // // // //                 {/* Cataloguing */}
// // // // // // // //                 <motion.div
// // // // // // // //                   initial={isDark ? "hidden" : false}
// // // // // // // //                   whileInView={isDark ? "visible" : false}
// // // // // // // //                   variants={fadeInUp}
// // // // // // // //                   className={cardClass}
// // // // // // // //                 >
// // // // // // // //                   <BarChart3 className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // // // // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>
// // // // // // // //                     Cataloguing & Enrichment
// // // // // // // //                   </h4>
// // // // // // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // // // // // //                     <li>• Product descriptions, tags & keywords</li>
// // // // // // // //                     <li>• Data validation & cleaning</li>
// // // // // // // //                     <li>• Category & attribute enrichment</li>
// // // // // // // //                   </ul>
// // // // // // // //                 </motion.div>

// // // // // // // //                 {/* QA */}
// // // // // // // //                 <motion.div
// // // // // // // //                   initial={isDark ? "hidden" : false}
// // // // // // // //                   whileInView={isDark ? "visible" : false}
// // // // // // // //                   variants={fadeInUp}
// // // // // // // //                   className={cardClass}
// // // // // // // //                 >
// // // // // // // //                   <CheckCircle className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // // // // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>
// // // // // // // //                     Quality Assurance
// // // // // // // //                   </h4>
// // // // // // // //                   <p className={`text-sm md:text-base leading-relaxed max-w-xs ${bodyClass}`}>
// // // // // // // //                     Call/chat audits, SOP/SLA compliance, feedback, coaching &
// // // // // // // //                     continuous improvement.
// // // // // // // //                   </p>
// // // // // // // //                 </motion.div>
// // // // // // // //               </div>
// // // // // // // //             </div>

// // // // // // // //             {/* Infrastructure */}
// // // // // // // //             <div className="text-center max-w-5xl mx-auto">
// // // // // // // //               <h3 className={`text-4xl md:text-5xl font-bold mb-8 tracking-tight ${sectionHeadingAccent}`}>
// // // // // // // //                 3. Support & Infrastructure Setup
// // // // // // // //               </h3>
// // // // // // // //               <p className={`text-lg md:text-xl leading-relaxed ${bodyClass}`}>
// // // // // // // //                 End-to-end BPO-ready setup: modern offices, high-speed networks,
// // // // // // // //                 advanced telephony, servers, workstations, robust security, and
// // // // // // // //                 power backup — built for reliability and scale.
// // // // // // // //               </p>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       {/* ====================== WHY CHOOSE US ====================== */}
// // // // // // // //       <section
// // // // // // // //         className={`relative py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-black" : "bg-white"}`}
// // // // // // // //       >
// // // // // // // //         <div className="max-w-7xl mx-auto">
// // // // // // // //           <motion.h2
// // // // // // // //             initial={isDark ? "hidden" : false}
// // // // // // // //             whileInView={isDark ? "visible" : false}
// // // // // // // //             variants={fadeInUp}
// // // // // // // //             className={`text-5xl md:text-6xl font-bold text-center mb-16 ${headingClass}`}
// // // // // // // //           >
// // // // // // // //             WHY{" "}
// // // // // // // //             <span className={accentClass}>CHOOSE US</span>
// // // // // // // //           </motion.h2>

// // // // // // // //           <div className="grid md:grid-cols-3 gap-10 lg:gap-16 text-center">
// // // // // // // //             {[
// // // // // // // //               {
// // // // // // // //                 icon: Users,
// // // // // // // //                 title: "True Partnership",
// // // // // // // //                 desc: "We become an extension of your team — understanding your business deeply.",
// // // // // // // //               },
// // // // // // // //               {
// // // // // // // //                 icon: Briefcase,
// // // // // // // //                 title: "Enterprise Expertise",
// // // // // // // //                 desc: "Proven experience in BFSI, retail, government & PSU projects.",
// // // // // // // //               },
// // // // // // // //               {
// // // // // // // //                 icon: HardDrive,
// // // // // // // //                 title: "Long-term Support",
// // // // // // // //                 desc: "24×7 production support, SLA-based maintenance & AMS.",
// // // // // // // //               },
// // // // // // // //             ].map((item, idx) => (
// // // // // // // //               <motion.div
// // // // // // // //                 key={idx}
// // // // // // // //                 initial={isDark ? "hidden" : false}
// // // // // // // //                 whileInView={isDark ? "visible" : false}
// // // // // // // //                 variants={fadeInUp}
// // // // // // // //                 className={`p-10 rounded-3xl border transition-all
// // // // // // // //                   ${
// // // // // // // //                     isDark
// // // // // // // //                       ? "bg-gray-900 border-gray-800"
// // // // // // // //                       : "bg-white border-gray-200 shadow-md"
// // // // // // // //                   }`}
// // // // // // // //               >
// // // // // // // //                 <div
// // // // // // // //                   className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 mx-auto
// // // // // // // //                   ${isDark ? "bg-gray-800" : "bg-blue-50"}`}
// // // // // // // //                 >
// // // // // // // //                   <item.icon className={`w-10 h-10 ${accentClass}`} />
// // // // // // // //                 </div>
// // // // // // // //                 <h3 className={`text-3xl font-bold mb-5 ${headingClass}`}>
// // // // // // // //                   {item.title}
// // // // // // // //                 </h3>
// // // // // // // //                 <p className={`leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
// // // // // // // //                   {item.desc}
// // // // // // // //                 </p>
// // // // // // // //               </motion.div>
// // // // // // // //             ))}
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </section>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // // // import {
// // // // // // //   ArrowRight,
// // // // // // //   Code,
// // // // // // //   ShieldCheck,
// // // // // // //   Users,
// // // // // // //   Server,
// // // // // // //   Headphones,
// // // // // // //   BarChart3,
// // // // // // //   CheckCircle,
// // // // // // //   Briefcase,
// // // // // // //   HardDrive,
// // // // // // // } from "lucide-react";

// // // // // // // const fadeInUp = {
// // // // // // //   hidden: { opacity: 0, y: 60 },
// // // // // // //   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// // // // // // // };

// // // // // // // const staggerContainer = {
// // // // // // //   hidden: {},
// // // // // // //   visible: { transition: { staggerChildren: 0.15 } },
// // // // // // // };

// // // // // // // // Professional background images for carousel
// // // // // // // const backgroundImages = [
// // // // // // //   "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
// // // // // // //   "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop",
// // // // // // //   "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop",
// // // // // // // ];

// // // // // // // export default function Home() {
// // // // // // //   const [isDark, setIsDark] = useState(
// // // // // // //     () => document.documentElement.classList.contains("dark")
// // // // // // //   );
// // // // // // //   const [currentBgIndex, setCurrentBgIndex] = useState(0);

// // // // // // //   // Dark mode observer
// // // // // // //   useEffect(() => {
// // // // // // //     const observer = new MutationObserver(() => {
// // // // // // //       setIsDark(document.documentElement.classList.contains("dark"));
// // // // // // //     });
// // // // // // //     observer.observe(document.documentElement, {
// // // // // // //       attributes: true,
// // // // // // //       attributeFilter: ["class"],
// // // // // // //     });
// // // // // // //     return () => observer.disconnect();
// // // // // // //   }, []);

// // // // // // //   // Background Image Carousel
// // // // // // //   useEffect(() => {
// // // // // // //     const interval = setInterval(() => {
// // // // // // //       setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
// // // // // // //     }, 6000); // Change every 6 seconds

// // // // // // //     return () => clearInterval(interval);
// // // // // // //   }, []);

// // // // // // //   // Reusable class helpers
// // // // // // //   const cardClass = isDark
// // // // // // //     ? "bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full"
// // // // // // //     : "bg-white border border-gray-200 shadow-md rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full";

// // // // // // //   const headingClass = isDark ? "text-white" : "text-gray-900";
// // // // // // //   const bodyClass = isDark ? "text-gray-300" : "text-gray-700";
// // // // // // //   const accentClass = isDark ? "text-red-500" : "text-blue-600";
// // // // // // //   const sectionHeadingAccent = isDark ? "text-red-400" : "text-blue-700";

// // // // // // //   return (
// // // // // // //     <div
// // // // // // //       className={`min-h-screen overflow-x-hidden transition-colors duration-700
// // // // // // //       ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}`}
// // // // // // //     >
// // // // // // //       {/* ====================== HERO SECTION WITH CAROUSEL ====================== */}
// // // // // // //       <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">

// // // // // // //         {/* Background Carousel */}
// // // // // // //         <div className="absolute inset-0 z-0">
// // // // // // //           <AnimatePresence mode="wait">
// // // // // // //             {backgroundImages.map((image, index) => (
// // // // // // //               <motion.div
// // // // // // //                 key={index}
// // // // // // //                 initial={{ opacity: 0 }}
// // // // // // //                 animate={{
// // // // // // //                   opacity: index === currentBgIndex ? 1 : 0
// // // // // // //                 }}
// // // // // // //                 transition={{ duration: 1.2, ease: "easeInOut" }}
// // // // // // //                 className="absolute inset-0 bg-cover bg-center"
// // // // // // //                 style={{
// // // // // // //                   backgroundImage: `url(${image})`,
// // // // // // //                 }}
// // // // // // //               />
// // // // // // //             ))}
// // // // // // //           </AnimatePresence>

// // // // // // //           {/* Overlay */}
// // // // // // //           <div
// // // // // // //             className={`absolute inset-0 z-10 transition-colors duration-700
// // // // // // //               ${isDark
// // // // // // //                 ? "bg-gradient-to-br from-black/85 via-black/75 to-black/85"
// // // // // // //                 : "bg-gradient-to-br from-slate-900/70 via-slate-900/50 to-blue-950/60"}`}
// // // // // // //           />
// // // // // // //         </div>

// // // // // // //         {/* Content */}
// // // // // // //         <div className="max-w-7xl mx-auto text-center relative z-20">
// // // // // // //           <motion.div
// // // // // // //             initial={isDark ? "hidden" : false}
// // // // // // //             animate={isDark ? "visible" : false}
// // // // // // //             variants={isDark ? staggerContainer : {}}
// // // // // // //           >
// // // // // // //             <motion.h1
// // // // // // //               variants={isDark ? fadeInUp : {}}
// // // // // // //               className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 ${headingClass}`}
// // // // // // //             >
// // // // // // //               ATLA KNOTS
// // // // // // //               <br />
// // // // // // //               <span
// // // // // // //                 className={
// // // // // // //                   isDark
// // // // // // //                     ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-red-400 to-white"
// // // // // // //                     : "text-blue-600"
// // // // // // //                 }
// // // // // // //               >
// // // // // // //                 IT SOLUTIONS
// // // // // // //               </span>
// // // // // // //             </motion.h1>

// // // // // // //             <motion.p
// // // // // // //               variants={isDark ? fadeInUp : {}}
// // // // // // //               className={`text-xl md:text-2xl max-w-4xl mx-auto mb-10 leading-relaxed
// // // // // // //                 ${isDark ? "text-gray-300" : "text-white"}`}
// // // // // // //             >
// // // // // // //               Making technology impactful, dependable, and easy to use — for
// // // // // // //               businesses of all sizes.
// // // // // // //             </motion.p>

// // // // // // //             <motion.p
// // // // // // //               variants={isDark ? fadeInUp : {}}
// // // // // // //               className={`text-lg md:text-xl max-w-3xl mx-auto mb-12
// // // // // // //                 ${isDark ? "text-gray-400" : "text-white/90"}`}
// // // // // // //             >
// // // // // // //               We build secure, future-ready software that drives efficiency and
// // // // // // //               digital transformation.
// // // // // // //             </motion.p>

// // // // // // //             <motion.div
// // // // // // //               variants={isDark ? fadeInUp : {}}
// // // // // // //               className="flex flex-col sm:flex-row gap-6 justify-center"
// // // // // // //             >
// // // // // // //               <button
// // // // // // //                 className={`group px-10 py-5 rounded-full text-lg font-semibold flex items-center gap-3 transition-all
// // // // // // //                   ${
// // // // // // //                     isDark
// // // // // // //                       ? "bg-red-600 hover:bg-red-700 text-white"
// // // // // // //                       : "bg-blue-600 hover:bg-blue-700 text-white"
// // // // // // //                   }`}
// // // // // // //               >
// // // // // // //                 GET STARTED
// // // // // // //                 <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
// // // // // // //               </button>

// // // // // // //               <button
// // // // // // //                 className={`group px-10 py-5 border-2 rounded-full text-lg font-semibold transition-all
// // // // // // //                   ${
// // // // // // //                     isDark
// // // // // // //                       ? "border-red-600/60 text-red-400 hover:border-red-500"
// // // // // // //                       : "border-white/80 text-white hover:bg-white/10"
// // // // // // //                   }`}
// // // // // // //               >
// // // // // // //                 VIEW OUR WORK
// // // // // // //               </button>
// // // // // // //             </motion.div>
// // // // // // //           </motion.div>
// // // // // // //         </div>

// // // // // // //         {/* Carousel Indicator Dots */}
// // // // // // //         <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-30">
// // // // // // //           {backgroundImages.map((_, idx) => (
// // // // // // //             <div
// // // // // // //               key={idx}
// // // // // // //               className={`w-3 h-3 rounded-full transition-all duration-500 cursor-pointer
// // // // // // //                 ${idx === currentBgIndex
// // // // // // //                   ? "bg-white scale-125 shadow-lg"
// // // // // // //                   : "bg-white/50 hover:bg-white/70"}`}
// // // // // // //               onClick={() => setCurrentBgIndex(idx)}
// // // // // // //             />
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //       </section>

// // // // // // //       {/* ====================== SERVICES SECTION ====================== */}
// // // // // // //       <section
// // // // // // //         className={`py-24 px-6 md:px-12 lg:px-24 transition-colors
// // // // // // //         ${isDark ? "bg-gradient-to-b from-black to-gray-950" : "bg-gray-50"}`}
// // // // // // //       >
// // // // // // //         <div className="max-w-7xl mx-auto">
// // // // // // //           <motion.h2
// // // // // // //             initial={isDark ? "hidden" : false}
// // // // // // //             whileInView={isDark ? "visible" : false}
// // // // // // //             variants={fadeInUp}
// // // // // // //             className={`text-5xl md:text-6xl font-bold text-center mb-6 ${headingClass}`}
// // // // // // //           >
// // // // // // //             OUR{" "}
// // // // // // //             <span className={accentClass}>SERVICES</span>
// // // // // // //           </motion.h2>

// // // // // // //           <motion.p
// // // // // // //             initial={isDark ? "hidden" : false}
// // // // // // //             whileInView={isDark ? "visible" : false}
// // // // // // //             variants={fadeInUp}
// // // // // // //             className={`text-xl text-center mb-16 max-w-3xl mx-auto ${bodyClass}`}
// // // // // // //           >
// // // // // // //             Comprehensive IT & BPO solutions — from development to support and
// // // // // // //             infrastructure
// // // // // // //           </motion.p>

// // // // // // //           <div className="space-y-20">
// // // // // // //             {/* IT Services */}
// // // // // // //             <div>
// // // // // // //               <h3 className={`text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight ${sectionHeadingAccent}`}>
// // // // // // //                 1. Information Technology Services
// // // // // // //               </h3>
// // // // // // //               <p className={`text-lg md:text-xl mb-12 text-center max-w-4xl mx-auto leading-relaxed ${bodyClass}`}>
// // // // // // //                 Supporting companies at every stage of the product lifecycle.
// // // // // // //               </p>

// // // // // // //               <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
// // // // // // //                 <motion.div
// // // // // // //                   initial={isDark ? "hidden" : false}
// // // // // // //                   whileInView={isDark ? "visible" : false}
// // // // // // //                   variants={fadeInUp}
// // // // // // //                   className={cardClass}
// // // // // // //                 >
// // // // // // //                   <Code className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // // // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Development</h4>
// // // // // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // // // // //                     <li>• Web application development</li>
// // // // // // //                     <li>• Mobile application development</li>
// // // // // // //                     <li>• Secure, scalable & user-friendly solutions</li>
// // // // // // //                   </ul>
// // // // // // //                 </motion.div>

// // // // // // //                 <motion.div
// // // // // // //                   initial={isDark ? "hidden" : false}
// // // // // // //                   whileInView={isDark ? "visible" : false}
// // // // // // //                   variants={fadeInUp}
// // // // // // //                   className={cardClass}
// // // // // // //                 >
// // // // // // //                   <ShieldCheck className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // // // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Testing</h4>
// // // // // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // // // // //                     <li>• Web application testing</li>
// // // // // // //                     <li>• Mobile application testing</li>
// // // // // // //                     <li>• Quality, performance & security assurance</li>
// // // // // // //                   </ul>
// // // // // // //                 </motion.div>

// // // // // // //                 <motion.div
// // // // // // //                   initial={isDark ? "hidden" : false}
// // // // // // //                   whileInView={isDark ? "visible" : false}
// // // // // // //                   variants={fadeInUp}
// // // // // // //                   className={cardClass}
// // // // // // //                 >
// // // // // // //                   <Users className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // // // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>L2 Support</h4>
// // // // // // //                   <p className={`text-sm md:text-base leading-relaxed max-w-xs ${bodyClass}`}>
// // // // // // //                     Advanced troubleshooting, in-depth diagnosis & root cause resolution.
// // // // // // //                   </p>
// // // // // // //                 </motion.div>

// // // // // // //                 <motion.div
// // // // // // //                   initial={isDark ? "hidden" : false}
// // // // // // //                   whileInView={isDark ? "visible" : false}
// // // // // // //                   variants={fadeInUp}
// // // // // // //                   className={cardClass}
// // // // // // //                 >
// // // // // // //                   <Server className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // // // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Product Assistance</h4>
// // // // // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // // // // //                     <li>• Continuous support & maintenance</li>
// // // // // // //                     <li>• Ticket & incident management</li>
// // // // // // //                     <li>• Change management & SLA tracking</li>
// // // // // // //                   </ul>
// // // // // // //                 </motion.div>
// // // // // // //               </div>
// // // // // // //             </div>

// // // // // // //             {/* BPO Services */}
// // // // // // //             <div>
// // // // // // //               <h3 className={`text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight ${sectionHeadingAccent}`}>
// // // // // // //                 2. Business Process Outsourcing (BPO) Services
// // // // // // //               </h3>
// // // // // // //               <p className={`text-lg md:text-xl mb-12 text-center max-w-3xl mx-auto leading-relaxed ${bodyClass}`}>
// // // // // // //                 Streamline operations and enhance customer engagement with reliable support.
// // // // // // //               </p>

// // // // // // //               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
// // // // // // //                 <motion.div
// // // // // // //                   initial={isDark ? "hidden" : false}
// // // // // // //                   whileInView={isDark ? "visible" : false}
// // // // // // //                   variants={fadeInUp}
// // // // // // //                   className={cardClass}
// // // // // // //                 >
// // // // // // //                   <Headphones className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // // // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Voice, Chat & Email</h4>
// // // // // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // // // // //                     <li>• Inbound & outbound voice support</li>
// // // // // // //                     <li>• Real-time chat assistance</li>
// // // // // // //                     <li>• Structured email & ticketing</li>
// // // // // // //                   </ul>
// // // // // // //                 </motion.div>

// // // // // // //                 <motion.div
// // // // // // //                   initial={isDark ? "hidden" : false}
// // // // // // //                   whileInView={isDark ? "visible" : false}
// // // // // // //                   variants={fadeInUp}
// // // // // // //                   className={cardClass}
// // // // // // //                 >
// // // // // // //                   <BarChart3 className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // // // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Cataloguing & Enrichment</h4>
// // // // // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // // // // //                     <li>• Product descriptions, tags & keywords</li>
// // // // // // //                     <li>• Data validation & cleaning</li>
// // // // // // //                     <li>• Category & attribute enrichment</li>
// // // // // // //                   </ul>
// // // // // // //                 </motion.div>

// // // // // // //                 <motion.div
// // // // // // //                   initial={isDark ? "hidden" : false}
// // // // // // //                   whileInView={isDark ? "visible" : false}
// // // // // // //                   variants={fadeInUp}
// // // // // // //                   className={cardClass}
// // // // // // //                 >
// // // // // // //                   <CheckCircle className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // // // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Quality Assurance</h4>
// // // // // // //                   <p className={`text-sm md:text-base leading-relaxed max-w-xs ${bodyClass}`}>
// // // // // // //                     Call/chat audits, SOP/SLA compliance, feedback & continuous improvement.
// // // // // // //                   </p>
// // // // // // //                 </motion.div>
// // // // // // //               </div>
// // // // // // //             </div>

// // // // // // //             {/* Infrastructure */}
// // // // // // //             <div className="text-center max-w-5xl mx-auto">
// // // // // // //               <h3 className={`text-4xl md:text-5xl font-bold mb-8 tracking-tight ${sectionHeadingAccent}`}>
// // // // // // //                 3. Support & Infrastructure Setup
// // // // // // //               </h3>
// // // // // // //               <p className={`text-lg md:text-xl leading-relaxed ${bodyClass}`}>
// // // // // // //                 End-to-end BPO-ready setup: modern offices, high-speed networks, advanced telephony,
// // // // // // //                 servers, workstations, robust security, and power backup.
// // // // // // //               </p>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </section>

// // // // // // //       {/* ====================== WHY CHOOSE US ====================== */}
// // // // // // //       <section
// // // // // // //         className={`relative py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-black" : "bg-white"}`}
// // // // // // //       >
// // // // // // //         <div className="max-w-7xl mx-auto">
// // // // // // //           <motion.h2
// // // // // // //             initial={isDark ? "hidden" : false}
// // // // // // //             whileInView={isDark ? "visible" : false}
// // // // // // //             variants={fadeInUp}
// // // // // // //             className={`text-5xl md:text-6xl font-bold text-center mb-16 ${headingClass}`}
// // // // // // //           >
// // // // // // //             WHY{" "}
// // // // // // //             <span className={accentClass}>CHOOSE US</span>
// // // // // // //           </motion.h2>

// // // // // // //           <div className="grid md:grid-cols-3 gap-10 lg:gap-16 text-center">
// // // // // // //             {[
// // // // // // //               {
// // // // // // //                 icon: Users,
// // // // // // //                 title: "True Partnership",
// // // // // // //                 desc: "We become an extension of your team — understanding your business deeply.",
// // // // // // //               },
// // // // // // //               {
// // // // // // //                 icon: Briefcase,
// // // // // // //                 title: "Enterprise Expertise",
// // // // // // //                 desc: "Proven experience in BFSI, retail, government & PSU projects.",
// // // // // // //               },
// // // // // // //               {
// // // // // // //                 icon: HardDrive,
// // // // // // //                 title: "Long-term Support",
// // // // // // //                 desc: "24×7 production support, SLA-based maintenance & AMS.",
// // // // // // //               },
// // // // // // //             ].map((item, idx) => (
// // // // // // //               <motion.div
// // // // // // //                 key={idx}
// // // // // // //                 initial={isDark ? "hidden" : false}
// // // // // // //                 whileInView={isDark ? "visible" : false}
// // // // // // //                 variants={fadeInUp}
// // // // // // //                 className={`p-10 rounded-3xl border transition-all
// // // // // // //                   ${
// // // // // // //                     isDark
// // // // // // //                       ? "bg-gray-900 border-gray-800"
// // // // // // //                       : "bg-white border-gray-200 shadow-md"
// // // // // // //                   }`}
// // // // // // //               >
// // // // // // //                 <div
// // // // // // //                   className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 mx-auto
// // // // // // //                   ${isDark ? "bg-gray-800" : "bg-blue-50"}`}
// // // // // // //                 >
// // // // // // //                   <item.icon className={`w-10 h-10 ${accentClass}`} />
// // // // // // //                 </div>
// // // // // // //                 <h3 className={`text-3xl font-bold mb-5 ${headingClass}`}>
// // // // // // //                   {item.title}
// // // // // // //                 </h3>
// // // // // // //                 <p className={`leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
// // // // // // //                   {item.desc}
// // // // // // //                 </p>
// // // // // // //               </motion.div>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </section>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // // // import {
// // // // // // //   ArrowRight,
// // // // // // //   Code,
// // // // // // //   ShieldCheck,
// // // // // // //   Users,
// // // // // // //   Server,
// // // // // // //   Headphones,
// // // // // // //   BarChart3,
// // // // // // //   CheckCircle,
// // // // // // //   Briefcase,
// // // // // // //   HardDrive,
// // // // // // // } from "lucide-react";

// // // // // // // const fadeInUp = {
// // // // // // //   hidden: { opacity: 0, y: 60 },
// // // // // // //   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// // // // // // // };

// // // // // // // const staggerContainer = {
// // // // // // //   hidden: {},
// // // // // // //   visible: { transition: { staggerChildren: 0.15 } },
// // // // // // // };

// // // // // // // // Background Images for Hero Carousel
// // // // // // // const backgroundImages = [
// // // // // // //   "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
// // // // // // //   "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop",
// // // // // // //   "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop",
// // // // // // // ];

// // // // // // // export default function Home() {
// // // // // // //   const [isDark, setIsDark] = useState(
// // // // // // //     () => document.documentElement.classList.contains("dark")
// // // // // // //   );
// // // // // // //   const [currentBgIndex, setCurrentBgIndex] = useState(0);

// // // // // // //   // Listen for dark mode changes
// // // // // // //   useEffect(() => {
// // // // // // //     const observer = new MutationObserver(() => {
// // // // // // //       setIsDark(document.documentElement.classList.contains("dark"));
// // // // // // //     });
// // // // // // //     observer.observe(document.documentElement, {
// // // // // // //       attributes: true,
// // // // // // //       attributeFilter: ["class"],
// // // // // // //     });
// // // // // // //     return () => observer.disconnect();
// // // // // // //   }, []);

// // // // // // //   // Hero Background Carousel
// // // // // // //   useEffect(() => {
// // // // // // //     const interval = setInterval(() => {
// // // // // // //       setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
// // // // // // //     }, 5000);
// // // // // // //     return () => clearInterval(interval);
// // // // // // //   }, []);

// // // // // // //   return (
// // // // // // //     <div className={`min-h-screen overflow-x-hidden transition-colors duration-700
// // // // // // //       ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}`}>

// // // // // // //       {/* ====================== HERO SECTION ====================== */}
// // // // // // //       <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">

// // // // // // //         {/* Background Carousel */}
// // // // // // //         <div className="absolute inset-0 z-0">
// // // // // // //           <AnimatePresence mode="wait">
// // // // // // //             {backgroundImages.map((image, index) => (
// // // // // // //               <motion.div
// // // // // // //                 key={index}
// // // // // // //                 initial={{ opacity: 0 }}
// // // // // // //                 animate={{ opacity: index === currentBgIndex ? 1 : 0 }}
// // // // // // //                 transition={{ duration: 1.2, ease: "easeInOut" }}
// // // // // // //                 className="absolute inset-0 bg-cover bg-center"
// // // // // // //                 style={{ backgroundImage: `url(${image})` }}
// // // // // // //               />
// // // // // // //             ))}
// // // // // // //           </AnimatePresence>

// // // // // // //           {/* Overlay */}
// // // // // // //           <div
// // // // // // //             className={`absolute inset-0 z-10
// // // // // // //               ${isDark
// // // // // // //                 ? "bg-gradient-to-br from-black/90 via-black/80 to-black/85"
// // // // // // //                 : "bg-gradient-to-br from-black/65 via-black/55 to-black/70"}`}
// // // // // // //           />
// // // // // // //         </div>

// // // // // // //         {/* Hero Content */}
// // // // // // //         <div className="max-w-7xl mx-auto text-center relative z-20">
// // // // // // //           <motion.div
// // // // // // //             initial="hidden"
// // // // // // //             animate="visible"
// // // // // // //             variants={staggerContainer}
// // // // // // //           >
// // // // // // //             <motion.h1
// // // // // // //               variants={fadeInUp}
// // // // // // //               className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
// // // // // // //             >
// // // // // // //               ATLA KNOTS
// // // // // // //               <br />
// // // // // // //               <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-orange-500">
// // // // // // //                 IT SOLUTIONS
// // // // // // //               </span>
// // // // // // //             </motion.h1>

// // // // // // //             <motion.p
// // // // // // //               variants={fadeInUp}
// // // // // // //               className={`text-xl md:text-2xl max-w-4xl mx-auto mb-10 leading-relaxed ${isDark ? "text-gray-300" : "text-white"}`}
// // // // // // //             >
// // // // // // //               Making technology impactful, dependable, and easy to use — for businesses of all sizes.
// // // // // // //             </motion.p>

// // // // // // //             <motion.p
// // // // // // //               variants={fadeInUp}
// // // // // // //               className={`text-lg md:text-xl max-w-3xl mx-auto mb-12 ${isDark ? "text-gray-400" : "text-white/90"}`}
// // // // // // //             >
// // // // // // //               We build secure, future-ready software that drives efficiency and digital transformation.
// // // // // // //             </motion.p>

// // // // // // //             <motion.div
// // // // // // //               variants={fadeInUp}
// // // // // // //               className="flex flex-col sm:flex-row gap-6 justify-center"
// // // // // // //             >
// // // // // // //               <button className="group px-12 py-6 rounded-full text-lg font-semibold flex items-center gap-4 bg-red-600 hover:bg-red-700 text-white transition-all">
// // // // // // //                 GET STARTED
// // // // // // //                 <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
// // // // // // //               </button>

// // // // // // //               <button className={`group px-12 py-6 border-2 rounded-full text-lg font-semibold transition-all
// // // // // // //                 ${isDark
// // // // // // //                   ? "border-red-500 text-red-400 hover:border-red-400 hover:text-red-300"
// // // // // // //                   : "border-white text-white hover:bg-white hover:text-red-600"}`}>
// // // // // // //                 VIEW OUR WORK
// // // // // // //               </button>
// // // // // // //             </motion.div>
// // // // // // //           </motion.div>
// // // // // // //         </div>

// // // // // // //         {/* Carousel Dots */}
// // // // // // //         <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-30">
// // // // // // //           {backgroundImages.map((_, idx) => (
// // // // // // //             <div
// // // // // // //               key={idx}
// // // // // // //               className={`w-3 h-3 rounded-full transition-all duration-500 cursor-pointer
// // // // // // //                 ${idx === currentBgIndex ? "bg-red-500 scale-125" : "bg-white/60 hover:bg-white"}`}
// // // // // // //               onClick={() => setCurrentBgIndex(idx)}
// // // // // // //             />
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //       </section>

// // // // // // //       {/* ====================== SERVICES SECTION ====================== */}
// // // // // // //       <section className={`py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-zinc-950" : "bg-gray-50"}`}>
// // // // // // //         <div className="max-w-7xl mx-auto">
// // // // // // //           <motion.h2
// // // // // // //             initial="hidden"
// // // // // // //             whileInView="visible"
// // // // // // //             variants={fadeInUp}
// // // // // // //             className={`text-5xl md:text-6xl font-bold text-center mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
// // // // // // //           >
// // // // // // //             OUR <span className="text-red-600">SERVICES</span>
// // // // // // //           </motion.h2>

// // // // // // //           <motion.p
// // // // // // //             initial="hidden"
// // // // // // //             whileInView="visible"
// // // // // // //             variants={fadeInUp}
// // // // // // //             className={`text-xl text-center mb-16 max-w-3xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}
// // // // // // //           >
// // // // // // //             Comprehensive IT & BPO solutions — from development to support and infrastructure
// // // // // // //           </motion.p>

// // // // // // //           <div className="space-y-20">
// // // // // // //             {/* 1. IT Services */}
// // // // // // //             <div>
// // // // // // //               <h3 className={`text-4xl md:text-5xl font-bold mb-8 text-center text-red-600`}>
// // // // // // //                 1. Information Technology Services
// // // // // // //               </h3>
// // // // // // //               <p className={`text-lg md:text-xl mb-12 text-center max-w-4xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
// // // // // // //                 Supporting companies at every stage of the product lifecycle.
// // // // // // //               </p>

// // // // // // //               <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
// // // // // // //                 {[
// // // // // // //                   { icon: Code, title: "Development", list: ["• Web application development", "• Mobile application development", "• Secure, scalable & user-friendly solutions"] },
// // // // // // //                   { icon: ShieldCheck, title: "Testing", list: ["• Web application testing", "• Mobile application testing", "• Quality, performance & security assurance"] },
// // // // // // //                   { icon: Users, title: "L2 Support", desc: "Advanced troubleshooting, in-depth diagnosis & root cause resolution." },
// // // // // // //                   { icon: Server, title: "Product Assistance", list: ["• Continuous support & maintenance", "• Ticket & incident management", "• Change management & SLA tracking"] },
// // // // // // //                 ].map((item, i) => (
// // // // // // //                   <motion.div
// // // // // // //                     key={i}
// // // // // // //                     initial="hidden"
// // // // // // //                     whileInView="visible"
// // // // // // //                     variants={fadeInUp}
// // // // // // //                     className={`rounded-3xl p-8 flex flex-col items-center text-center h-full transition-all border
// // // // // // //                       ${isDark
// // // // // // //                         ? "bg-zinc-900 border-zinc-700 hover:border-red-600"
// // // // // // //                         : "bg-white border-gray-200 hover:border-red-600 shadow-md"}`}
// // // // // // //                   >
// // // // // // //                     <item.icon className="w-14 h-14 mb-6 text-red-600" />
// // // // // // //                     <h4 className={`text-2xl font-bold mb-5 ${isDark ? "text-white" : "text-gray-900"}`}>{item.title}</h4>
// // // // // // //                     {item.list ? (
// // // // // // //                       <ul className={`text-sm space-y-3 text-left w-full max-w-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>
// // // // // // //                         {item.list.map((li, idx) => <li key={idx}>{li}</li>)}
// // // // // // //                       </ul>
// // // // // // //                     ) : (
// // // // // // //                       <p className={`text-sm leading-relaxed max-w-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>{item.desc}</p>
// // // // // // //                     )}
// // // // // // //                   </motion.div>
// // // // // // //                 ))}
// // // // // // //               </div>
// // // // // // //             </div>

// // // // // // //             {/* 2. BPO Services */}
// // // // // // //             <div>
// // // // // // //               <h3 className={`text-4xl md:text-5xl font-bold mb-8 text-center text-red-600`}>
// // // // // // //                 2. Business Process Outsourcing (BPO) Services
// // // // // // //               </h3>
// // // // // // //               <p className={`text-lg md:text-xl mb-12 text-center max-w-3xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
// // // // // // //                 Streamline operations and enhance customer engagement with reliable support.
// // // // // // //               </p>

// // // // // // //               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
// // // // // // //                 {[
// // // // // // //                   { icon: Headphones, title: "Voice, Chat & Email", list: ["• Inbound & outbound voice support", "• Real-time chat assistance", "• Structured email & ticketing"] },
// // // // // // //                   { icon: BarChart3, title: "Cataloguing & Enrichment", list: ["• Product descriptions, tags & keywords", "• Data validation & cleaning", "• Category & attribute enrichment"] },
// // // // // // //                   { icon: CheckCircle, title: "Quality Assurance", desc: "Call/chat audits, SOP/SLA compliance, feedback & continuous improvement." },
// // // // // // //                 ].map((item, i) => (
// // // // // // //                   <motion.div
// // // // // // //                     key={i}
// // // // // // //                     initial="hidden"
// // // // // // //                     whileInView="visible"
// // // // // // //                     variants={fadeInUp}
// // // // // // //                     className={`rounded-3xl p-8 flex flex-col items-center text-center h-full transition-all border
// // // // // // //                       ${isDark
// // // // // // //                         ? "bg-zinc-900 border-zinc-700 hover:border-red-600"
// // // // // // //                         : "bg-white border-gray-200 hover:border-red-600 shadow-md"}`}
// // // // // // //                   >
// // // // // // //                     <item.icon className="w-14 h-14 mb-6 text-red-600" />
// // // // // // //                     <h4 className={`text-2xl font-bold mb-5 ${isDark ? "text-white" : "text-gray-900"}`}>{item.title}</h4>
// // // // // // //                     {item.list ? (
// // // // // // //                       <ul className={`text-sm space-y-3 text-left w-full max-w-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>
// // // // // // //                         {item.list.map((li, idx) => <li key={idx}>{li}</li>)}
// // // // // // //                       </ul>
// // // // // // //                     ) : (
// // // // // // //                       <p className={`text-sm leading-relaxed max-w-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>{item.desc}</p>
// // // // // // //                     )}
// // // // // // //                   </motion.div>
// // // // // // //                 ))}
// // // // // // //               </div>
// // // // // // //             </div>

// // // // // // //             {/* 3. Infrastructure */}
// // // // // // //             <div className="text-center max-w-5xl mx-auto">
// // // // // // //               <h3 className={`text-4xl md:text-5xl font-bold mb-8 text-red-600`}>
// // // // // // //                 3. Support & Infrastructure Setup
// // // // // // //               </h3>
// // // // // // //               <p className={`text-lg md:text-xl leading-relaxed max-w-4xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
// // // // // // //                 End-to-end BPO-ready setup: modern offices, high-speed networks, advanced telephony,
// // // // // // //                 servers, workstations, robust security, and power backup.
// // // // // // //               </p>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </section>

// // // // // // //       {/* ====================== WHY CHOOSE US ====================== */}
// // // // // // //       <section className={`py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-black" : "bg-white"}`}>
// // // // // // //         <div className="max-w-7xl mx-auto">
// // // // // // //           <motion.h2
// // // // // // //             initial="hidden"
// // // // // // //             whileInView="visible"
// // // // // // //             variants={fadeInUp}
// // // // // // //             className={`text-5xl md:text-6xl font-bold text-center mb-16 ${isDark ? "text-white" : "text-gray-900"}`}
// // // // // // //           >
// // // // // // //             WHY <span className="text-red-600">CHOOSE US</span>
// // // // // // //           </motion.h2>

// // // // // // //           <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
// // // // // // //             {[
// // // // // // //               { icon: Users, title: "True Partnership", desc: "We become an extension of your team — understanding your business deeply." },
// // // // // // //               { icon: Briefcase, title: "Enterprise Expertise", desc: "Proven experience in BFSI, retail, government & PSU projects." },
// // // // // // //               { icon: HardDrive, title: "Long-term Support", desc: "24×7 production support, SLA-based maintenance & AMS." },
// // // // // // //             ].map((item, idx) => (
// // // // // // //               <motion.div
// // // // // // //                 key={idx}
// // // // // // //                 initial="hidden"
// // // // // // //                 whileInView="visible"
// // // // // // //                 variants={fadeInUp}
// // // // // // //                 className={`p-10 rounded-3xl border transition-all ${
// // // // // // //                   isDark
// // // // // // //                     ? "bg-zinc-900 border-zinc-700 hover:border-red-600"
// // // // // // //                     : "bg-white border-gray-200 hover:border-red-600 shadow-md"
// // // // // // //                 }`}
// // // // // // //               >
// // // // // // //                 <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 mx-auto ${isDark ? "bg-zinc-800" : "bg-red-50"}`}>
// // // // // // //                   <item.icon className="w-10 h-10 text-red-600" />
// // // // // // //                 </div>
// // // // // // //                 <h3 className={`text-3xl font-bold mb-5 ${isDark ? "text-white" : "text-gray-900"}`}>{item.title}</h3>
// // // // // // //                 <p className={`leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>{item.desc}</p>
// // // // // // //               </motion.div>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </section>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // import React, { useState, useEffect } from "react";
// // // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // // import {
// // // // // //   ArrowRight,
// // // // // //   Code,
// // // // // //   ShieldCheck,
// // // // // //   Users,
// // // // // //   Server,
// // // // // //   Headphones,
// // // // // //   BarChart3,
// // // // // //   CheckCircle,
// // // // // //   Briefcase,
// // // // // //   HardDrive,
// // // // // // } from "lucide-react";

// // // // // // const fadeInUp = {
// // // // // //   hidden: { opacity: 0, y: 60 },
// // // // // //   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// // // // // // };

// // // // // // const staggerContainer = {
// // // // // //   hidden: {},
// // // // // //   visible: { transition: { staggerChildren: 0.15 } },
// // // // // // };

// // // // // // // Professional background images for carousel
// // // // // // const backgroundImages = [
// // // // // //   "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
// // // // // //   "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop",
// // // // // //   "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop",
// // // // // // ];

// // // // // // export default function Home() {
// // // // // //   const [isDark, setIsDark] = useState(
// // // // // //     () => document.documentElement.classList.contains("dark")
// // // // // //   );
// // // // // //   const [currentBgIndex, setCurrentBgIndex] = useState(0);

// // // // // //   // Dark mode observer
// // // // // //   useEffect(() => {
// // // // // //     const observer = new MutationObserver(() => {
// // // // // //       setIsDark(document.documentElement.classList.contains("dark"));
// // // // // //     });
// // // // // //     observer.observe(document.documentElement, {
// // // // // //       attributes: true,
// // // // // //       attributeFilter: ["class"],
// // // // // //     });
// // // // // //     return () => observer.disconnect();
// // // // // //   }, []);

// // // // // //   // Background Image Carousel
// // // // // //   useEffect(() => {
// // // // // //     const interval = setInterval(() => {
// // // // // //       setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
// // // // // //     }, 6000); // Change every 6 seconds

// // // // // //     return () => clearInterval(interval);
// // // // // //   }, []);

// // // // // //   // Reusable class helpers
// // // // // //   const cardClass = isDark
// // // // // //     ? "bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full"
// // // // // //     : "bg-white border border-gray-200 shadow-md rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full";

// // // // // //   const headingClass = isDark ? "text-white" : "text-gray-900";
// // // // // //   const bodyClass = isDark ? "text-gray-300" : "text-gray-700";
// // // // // //   const accentClass = isDark ? "text-red-500" : "text-blue-600";
// // // // // //   const sectionHeadingAccent = isDark ? "text-red-400" : "text-blue-700";

// // // // // //   return (
// // // // // //     <div
// // // // // //       className={`min-h-screen overflow-x-hidden transition-colors duration-700
// // // // // //       ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}`}
// // // // // //     >
// // // // // //       {/* ====================== HERO SECTION WITH CAROUSEL ====================== */}
// // // // // //       <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">

// // // // // //         {/* Background Carousel */}
// // // // // //         <div className="absolute inset-0 z-0">
// // // // // //           <AnimatePresence mode="wait">
// // // // // //             {backgroundImages.map((image, index) => (
// // // // // //               <motion.div
// // // // // //                 key={index}
// // // // // //                 initial={{ opacity: 0 }}
// // // // // //                 animate={{
// // // // // //                   opacity: index === currentBgIndex ? 1 : 0
// // // // // //                 }}
// // // // // //                 transition={{ duration: 1.2, ease: "easeInOut" }}
// // // // // //                 className="absolute inset-0 bg-cover bg-center"
// // // // // //                 style={{
// // // // // //                   backgroundImage: `url(${image})`,
// // // // // //                 }}
// // // // // //               />
// // // // // //             ))}
// // // // // //           </AnimatePresence>

// // // // // //           {/* Overlay */}
// // // // // //           <div
// // // // // //             className={`absolute inset-0 z-10 transition-colors duration-700
// // // // // //               ${isDark
// // // // // //                 ? "bg-gradient-to-br from-black/85 via-black/75 to-black/85"
// // // // // //                 : "bg-gradient-to-br from-slate-900/70 via-slate-900/50 to-blue-950/60"}`}
// // // // // //           />
// // // // // //         </div>

// // // // // //         {/* Content */}
// // // // // //         <div className="max-w-7xl mx-auto text-center relative z-20">
// // // // // //           <motion.div
// // // // // //             initial="hidden"
// // // // // //             animate="visible"
// // // // // //             variants={staggerContainer}
// // // // // //           >
// // // // // //             <motion.h1
// // // // // //               variants={fadeInUp}
// // // // // //               className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 ${headingClass}`}
// // // // // //             >
// // // // // //               ATLA KNOTS
// // // // // //               <br />
// // // // // //               <span
// // // // // //                 className={
// // // // // //                   isDark
// // // // // //                     ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-red-400 to-white"
// // // // // //                     : "text-blue-600"
// // // // // //                 }
// // // // // //               >
// // // // // //                 IT SOLUTIONS
// // // // // //               </span>
// // // // // //             </motion.h1>

// // // // // //             <motion.p
// // // // // //               variants={fadeInUp}
// // // // // //               className={`text-xl md:text-2xl max-w-4xl mx-auto mb-10 leading-relaxed
// // // // // //                 ${isDark ? "text-gray-300" : "text-white"}`}
// // // // // //             >
// // // // // //               Making technology impactful, dependable, and easy to use — for
// // // // // //               businesses of all sizes.
// // // // // //             </motion.p>

// // // // // //             <motion.p
// // // // // //               variants={fadeInUp}
// // // // // //               className={`text-lg md:text-xl max-w-3xl mx-auto mb-12
// // // // // //                 ${isDark ? "text-gray-400" : "text-white/90"}`}
// // // // // //             >
// // // // // //               We build secure, future-ready software that drives efficiency and
// // // // // //               digital transformation.
// // // // // //             </motion.p>

// // // // // //             <motion.div
// // // // // //               variants={fadeInUp}
// // // // // //               className="flex flex-col sm:flex-row gap-6 justify-center"
// // // // // //             >
// // // // // //               <button
// // // // // //                 className={`group px-10 py-5 rounded-full text-lg font-semibold flex items-center gap-3 transition-all
// // // // // //                   ${
// // // // // //                     isDark
// // // // // //                       ? "bg-red-600 hover:bg-red-700 text-white"
// // // // // //                       : "bg-blue-600 hover:bg-blue-700 text-white"
// // // // // //                   }`}
// // // // // //               >
// // // // // //                 GET STARTED
// // // // // //                 <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
// // // // // //               </button>

// // // // // //               <button
// // // // // //                 className={`group px-10 py-5 border-2 rounded-full text-lg font-semibold transition-all
// // // // // //                   ${
// // // // // //                     isDark
// // // // // //                       ? "border-red-600/60 text-red-400 hover:border-red-500"
// // // // // //                       : "border-white/80 text-white hover:bg-white/10"
// // // // // //                   }`}
// // // // // //               >
// // // // // //                 VIEW OUR WORK
// // // // // //               </button>
// // // // // //             </motion.div>
// // // // // //           </motion.div>
// // // // // //         </div>

// // // // // //         {/* Carousel Indicator Dots */}
// // // // // //         <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-30">
// // // // // //           {backgroundImages.map((_, idx) => (
// // // // // //             <div
// // // // // //               key={idx}
// // // // // //               className={`w-3 h-3 rounded-full transition-all duration-500 cursor-pointer
// // // // // //                 ${idx === currentBgIndex
// // // // // //                   ? "bg-white scale-125 shadow-lg"
// // // // // //                   : "bg-white/50 hover:bg-white/70"}`}
// // // // // //               onClick={() => setCurrentBgIndex(idx)}
// // // // // //             />
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* ====================== SERVICES SECTION ====================== */}
// // // // // //       <section
// // // // // //         className={`py-24 px-6 md:px-12 lg:px-24 transition-colors
// // // // // //         ${isDark ? "bg-gradient-to-b from-black to-gray-950" : "bg-gray-50"}`}
// // // // // //       >
// // // // // //         <div className="max-w-7xl mx-auto">
// // // // // //           <motion.h2
// // // // // //             initial="hidden"
// // // // // //             whileInView="visible"
// // // // // //             viewport={{ once: true }}
// // // // // //             variants={fadeInUp}
// // // // // //             className={`text-5xl md:text-6xl font-bold text-center mb-6 ${headingClass}`}
// // // // // //           >
// // // // // //             OUR{" "}
// // // // // //             <span className={accentClass}>SERVICES</span>
// // // // // //           </motion.h2>

// // // // // //           <motion.p
// // // // // //             initial="hidden"
// // // // // //             whileInView="visible"
// // // // // //             viewport={{ once: true }}
// // // // // //             variants={fadeInUp}
// // // // // //             className={`text-xl text-center mb-16 max-w-3xl mx-auto ${bodyClass}`}
// // // // // //           >
// // // // // //             Comprehensive IT &amp; BPO solutions — from development to support and
// // // // // //             infrastructure
// // // // // //           </motion.p>

// // // // // //           <div className="space-y-20">
// // // // // //             {/* IT Services */}
// // // // // //             <div>
// // // // // //               <h3 className={`text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight ${sectionHeadingAccent}`}>
// // // // // //                 1. Information Technology Services
// // // // // //               </h3>
// // // // // //               <p className={`text-lg md:text-xl mb-12 text-center max-w-4xl mx-auto leading-relaxed ${bodyClass}`}>
// // // // // //                 Supporting companies at every stage of the product lifecycle.
// // // // // //               </p>

// // // // // //               <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
// // // // // //                 <motion.div
// // // // // //                   initial="hidden"
// // // // // //                   whileInView="visible"
// // // // // //                   viewport={{ once: true }}
// // // // // //                   variants={fadeInUp}
// // // // // //                   className={cardClass}
// // // // // //                 >
// // // // // //                   <Code className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Development</h4>
// // // // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // // // //                     <li>• Web application development</li>
// // // // // //                     <li>• Mobile application development</li>
// // // // // //                     <li>• Secure, scalable &amp; user-friendly solutions</li>
// // // // // //                   </ul>
// // // // // //                 </motion.div>

// // // // // //                 <motion.div
// // // // // //                   initial="hidden"
// // // // // //                   whileInView="visible"
// // // // // //                   viewport={{ once: true }}
// // // // // //                   variants={fadeInUp}
// // // // // //                   className={cardClass}
// // // // // //                 >
// // // // // //                   <ShieldCheck className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Testing</h4>
// // // // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // // // //                     <li>• Web application testing</li>
// // // // // //                     <li>• Mobile application testing</li>
// // // // // //                     <li>• Quality, performance &amp; security assurance</li>
// // // // // //                   </ul>
// // // // // //                 </motion.div>

// // // // // //                 <motion.div
// // // // // //                   initial="hidden"
// // // // // //                   whileInView="visible"
// // // // // //                   viewport={{ once: true }}
// // // // // //                   variants={fadeInUp}
// // // // // //                   className={cardClass}
// // // // // //                 >
// // // // // //                   <Users className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>L2 Support</h4>
// // // // // //                   <p className={`text-sm md:text-base leading-relaxed max-w-xs ${bodyClass}`}>
// // // // // //                     Advanced troubleshooting, in-depth diagnosis &amp; root cause resolution.
// // // // // //                   </p>
// // // // // //                 </motion.div>

// // // // // //                 <motion.div
// // // // // //                   initial="hidden"
// // // // // //                   whileInView="visible"
// // // // // //                   viewport={{ once: true }}
// // // // // //                   variants={fadeInUp}
// // // // // //                   className={cardClass}
// // // // // //                 >
// // // // // //                   <Server className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Product Assistance</h4>
// // // // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // // // //                     <li>• Continuous support &amp; maintenance</li>
// // // // // //                     <li>• Ticket &amp; incident management</li>
// // // // // //                     <li>• Change management &amp; SLA tracking</li>
// // // // // //                   </ul>
// // // // // //                 </motion.div>
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             {/* BPO Services */}
// // // // // //             <div>
// // // // // //               <h3 className={`text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight ${sectionHeadingAccent}`}>
// // // // // //                 2. Business Process Outsourcing (BPO) Services
// // // // // //               </h3>
// // // // // //               <p className={`text-lg md:text-xl mb-12 text-center max-w-3xl mx-auto leading-relaxed ${bodyClass}`}>
// // // // // //                 Streamline operations and enhance customer engagement with reliable support.
// // // // // //               </p>

// // // // // //               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
// // // // // //                 <motion.div
// // // // // //                   initial="hidden"
// // // // // //                   whileInView="visible"
// // // // // //                   viewport={{ once: true }}
// // // // // //                   variants={fadeInUp}
// // // // // //                   className={cardClass}
// // // // // //                 >
// // // // // //                   <Headphones className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Voice, Chat &amp; Email</h4>
// // // // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // // // //                     <li>• Inbound &amp; outbound voice support</li>
// // // // // //                     <li>• Real-time chat assistance</li>
// // // // // //                     <li>• Structured email &amp; ticketing</li>
// // // // // //                   </ul>
// // // // // //                 </motion.div>

// // // // // //                 <motion.div
// // // // // //                   initial="hidden"
// // // // // //                   whileInView="visible"
// // // // // //                   viewport={{ once: true }}
// // // // // //                   variants={fadeInUp}
// // // // // //                   className={cardClass}
// // // // // //                 >
// // // // // //                   <BarChart3 className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Cataloguing &amp; Enrichment</h4>
// // // // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // // // //                     <li>• Product descriptions, tags &amp; keywords</li>
// // // // // //                     <li>• Data validation &amp; cleaning</li>
// // // // // //                     <li>• Category &amp; attribute enrichment</li>
// // // // // //                   </ul>
// // // // // //                 </motion.div>

// // // // // //                 <motion.div
// // // // // //                   initial="hidden"
// // // // // //                   whileInView="visible"
// // // // // //                   viewport={{ once: true }}
// // // // // //                   variants={fadeInUp}
// // // // // //                   className={cardClass}
// // // // // //                 >
// // // // // //                   <CheckCircle className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Quality Assurance</h4>
// // // // // //                   <p className={`text-sm md:text-base leading-relaxed max-w-xs ${bodyClass}`}>
// // // // // //                     Call/chat audits, SOP/SLA compliance, feedback &amp; continuous improvement.
// // // // // //                   </p>
// // // // // //                 </motion.div>
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             {/* Infrastructure */}
// // // // // //             <div className="text-center max-w-5xl mx-auto">
// // // // // //               <h3 className={`text-4xl md:text-5xl font-bold mb-8 tracking-tight ${sectionHeadingAccent}`}>
// // // // // //                 3. Support &amp; Infrastructure Setup
// // // // // //               </h3>
// // // // // //               <p className={`text-lg md:text-xl leading-relaxed ${bodyClass}`}>
// // // // // //                 End-to-end BPO-ready setup: modern offices, high-speed networks, advanced telephony,
// // // // // //                 servers, workstations, robust security, and power backup.
// // // // // //               </p>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* ====================== WHY CHOOSE US ====================== */}
// // // // // //       <section
// // // // // //         className={`relative py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-black" : "bg-white"}`}
// // // // // //       >
// // // // // //         <div className="max-w-7xl mx-auto">
// // // // // //           <motion.h2
// // // // // //             initial="hidden"
// // // // // //             whileInView="visible"
// // // // // //             viewport={{ once: true }}
// // // // // //             variants={fadeInUp}
// // // // // //             className={`text-5xl md:text-6xl font-bold text-center mb-16 ${headingClass}`}
// // // // // //           >
// // // // // //             WHY{" "}
// // // // // //             <span className={accentClass}>CHOOSE US</span>
// // // // // //           </motion.h2>

// // // // // //           <div className="grid md:grid-cols-3 gap-10 lg:gap-16 text-center">
// // // // // //             {[
// // // // // //               {
// // // // // //                 icon: Users,
// // // // // //                 title: "True Partnership",
// // // // // //                 desc: "We become an extension of your team — understanding your business deeply.",
// // // // // //               },
// // // // // //               {
// // // // // //                 icon: Briefcase,
// // // // // //                 title: "Enterprise Expertise",
// // // // // //                 desc: "Proven experience in BFSI, retail, government &amp; PSU projects.",
// // // // // //               },
// // // // // //               {
// // // // // //                 icon: HardDrive,
// // // // // //                 title: "Long-term Support",
// // // // // //                 desc: "24×7 production support, SLA-based maintenance &amp; AMS.",
// // // // // //               },
// // // // // //             ].map((item, idx) => (
// // // // // //               <motion.div
// // // // // //                 key={idx}
// // // // // //                 initial="hidden"
// // // // // //                 whileInView="visible"
// // // // // //                 viewport={{ once: true }}
// // // // // //                 variants={fadeInUp}
// // // // // //                 className={`p-10 rounded-3xl border transition-all
// // // // // //                   ${
// // // // // //                     isDark
// // // // // //                       ? "bg-gray-900 border-gray-800"
// // // // // //                       : "bg-white border-gray-200 shadow-md"
// // // // // //                   }`}
// // // // // //               >
// // // // // //                 <div
// // // // // //                   className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 mx-auto
// // // // // //                   ${isDark ? "bg-gray-800" : "bg-blue-50"}`}
// // // // // //                 >
// // // // // //                   <item.icon className={`w-10 h-10 ${accentClass}`} />
// // // // // //                 </div>
// // // // // //                 <h3 className={`text-3xl font-bold mb-5 ${headingClass}`}>
// // // // // //                   {item.title}
// // // // // //                 </h3>
// // // // // //                 <p className={`leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
// // // // // //                   {item.desc}
// // // // // //                 </p>
// // // // // //               </motion.div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // import React, { useState, useEffect } from "react";
// // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // import {
// // // // //   ArrowRight,
// // // // //   Code,
// // // // //   ShieldCheck,
// // // // //   Users,
// // // // //   Server,
// // // // //   Headphones,
// // // // //   BarChart3,
// // // // //   CheckCircle,
// // // // //   Briefcase,
// // // // //   HardDrive,
// // // // // } from "lucide-react";

// // // // // const fadeInUp = {
// // // // //   hidden: { opacity: 0, y: 60 },
// // // // //   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// // // // // };

// // // // // const staggerContainer = {
// // // // //   hidden: {},
// // // // //   visible: { transition: { staggerChildren: 0.15 } },
// // // // // };

// // // // // // Professional background images for carousel
// // // // // const backgroundImages = [
// // // // //   "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
// // // // //   "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop",
// // // // //   "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop",
// // // // // ];

// // // // // export default function Home() {
// // // // //   const [isDark, setIsDark] = useState(
// // // // //     () => document.documentElement.classList.contains("dark")
// // // // //   );
// // // // //   const [currentBgIndex, setCurrentBgIndex] = useState(0);

// // // // //   // Dark mode observer
// // // // //   useEffect(() => {
// // // // //     const observer = new MutationObserver(() => {
// // // // //       setIsDark(document.documentElement.classList.contains("dark"));
// // // // //     });
// // // // //     observer.observe(document.documentElement, {
// // // // //       attributes: true,
// // // // //       attributeFilter: ["class"],
// // // // //     });
// // // // //     return () => observer.disconnect();
// // // // //   }, []);

// // // // //   // Background Image Carousel
// // // // //   useEffect(() => {
// // // // //     const interval = setInterval(() => {
// // // // //       setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
// // // // //     }, 6000); // Change every 6 seconds

// // // // //     return () => clearInterval(interval);
// // // // //   }, []);

// // // // //   // Reusable class helpers
// // // // //   const cardClass = isDark
// // // // //     ? "bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full"
// // // // //     : "bg-white border border-gray-200 shadow-md rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full";

// // // // //   const headingClass = isDark ? "text-white" : "text-gray-900";
// // // // //   const bodyClass = isDark ? "text-gray-300" : "text-gray-700";
// // // // //   const accentClass = isDark ? "text-red-500" : "text-blue-600";
// // // // //   const sectionHeadingAccent = isDark ? "text-red-400" : "text-blue-700";

// // // // //   return (
// // // // //     <div
// // // // //       className={`min-h-screen overflow-x-hidden transition-colors duration-700
// // // // //       ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}`}
// // // // //     >
// // // // //       {/* ====================== HERO SECTION WITH CAROUSEL ====================== */}
// // // // //       <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">

// // // // //         {/* Background Carousel */}
// // // // //         <div className="absolute inset-0 z-0">
// // // // //           <AnimatePresence mode="wait">
// // // // //             {backgroundImages.map((image, index) => (
// // // // //               <motion.div
// // // // //                 key={index}
// // // // //                 initial={{ opacity: 0 }}
// // // // //                 animate={{
// // // // //                   opacity: index === currentBgIndex ? 1 : 0
// // // // //                 }}
// // // // //                 transition={{ duration: 1.2, ease: "easeInOut" }}
// // // // //                 className="absolute inset-0 bg-cover bg-center"
// // // // //                 style={{
// // // // //                   backgroundImage: `url(${image})`,
// // // // //                 }}
// // // // //               />
// // // // //             ))}
// // // // //           </AnimatePresence>

// // // // //           {/* Overlay */}
// // // // //           <div
// // // // //             className={`absolute inset-0 z-10 transition-colors duration-700
// // // // //               ${isDark
// // // // //                 ? "bg-gradient-to-br from-black/85 via-black/75 to-black/85"
// // // // //                 : "bg-gradient-to-br from-slate-900/70 via-slate-900/50 to-blue-950/60"}`}
// // // // //           />
// // // // //         </div>

// // // // //         {/* Content */}
// // // // //         <div className="max-w-7xl mx-auto text-center relative z-20">
// // // // //           <motion.div
// // // // //             initial="hidden"
// // // // //             animate="visible"
// // // // //             variants={staggerContainer}
// // // // //           >
// // // // //             <motion.h1
// // // // //               variants={fadeInUp}
// // // // //               className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 ${headingClass}`}
// // // // //             >
// // // // //               ATLA KNOTS
// // // // //               <br />
// // // // //               <span
// // // // //                 className={
// // // // //                   isDark
// // // // //                     ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-red-400 to-white"
// // // // //                     : "text-blue-600"
// // // // //                 }
// // // // //               >
// // // // //                 IT SOLUTIONS
// // // // //               </span>
// // // // //             </motion.h1>

// // // // //             <motion.p
// // // // //               variants={fadeInUp}
// // // // //               className={`text-xl md:text-2xl max-w-4xl mx-auto mb-10 leading-relaxed
// // // // //                 ${isDark ? "text-gray-300" : "text-white"}`}
// // // // //             >
// // // // //               Making technology impactful, dependable, and easy to use — for
// // // // //               businesses of all sizes.
// // // // //             </motion.p>

// // // // //             <motion.p
// // // // //               variants={fadeInUp}
// // // // //               className={`text-lg md:text-xl max-w-3xl mx-auto mb-12
// // // // //                 ${isDark ? "text-gray-400" : "text-white/90"}`}
// // // // //             >
// // // // //               We build secure, future-ready software that drives efficiency and
// // // // //               digital transformation.
// // // // //             </motion.p>

// // // // //             <motion.div
// // // // //               variants={fadeInUp}
// // // // //               className="flex flex-col sm:flex-row gap-6 justify-center"
// // // // //             >
// // // // //               <button
// // // // //                 className={`group px-10 py-5 rounded-full text-lg font-semibold flex items-center gap-3 transition-all
// // // // //                   ${
// // // // //                     isDark
// // // // //                       ? "bg-red-600 hover:bg-red-700 text-white"
// // // // //                       : "bg-blue-600 hover:bg-blue-700 text-white"
// // // // //                   }`}
// // // // //               >
// // // // //                 GET STARTED
// // // // //                 <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
// // // // //               </button>

// // // // //               <button
// // // // //                 className={`group px-10 py-5 border-2 rounded-full text-lg font-semibold transition-all
// // // // //                   ${
// // // // //                     isDark
// // // // //                       ? "border-red-600/60 text-red-400 hover:border-red-500"
// // // // //                       : "border-white/80 text-white hover:bg-white/10"
// // // // //                   }`}
// // // // //               >
// // // // //                 VIEW OUR WORK
// // // // //               </button>
// // // // //             </motion.div>
// // // // //           </motion.div>
// // // // //         </div>

// // // // //         {/* Carousel Indicator Dots */}
// // // // //         <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-30">
// // // // //           {backgroundImages.map((_, idx) => (
// // // // //             <div
// // // // //               key={idx}
// // // // //               className={`w-3 h-3 rounded-full transition-all duration-500 cursor-pointer
// // // // //                 ${idx === currentBgIndex
// // // // //                   ? "bg-white scale-125 shadow-lg"
// // // // //                   : "bg-white/50 hover:bg-white/70"}`}
// // // // //               onClick={() => setCurrentBgIndex(idx)}
// // // // //             />
// // // // //           ))}
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ====================== SERVICES SECTION ====================== */}
// // // // //       <section
// // // // //         className={`py-24 px-6 md:px-12 lg:px-24 transition-colors
// // // // //         ${isDark ? "bg-gradient-to-b from-black to-gray-950" : "bg-gray-50"}`}
// // // // //       >
// // // // //         <div className="max-w-7xl mx-auto">
// // // // //           <motion.h2
// // // // //             initial="hidden"
// // // // //             whileInView="visible"
// // // // //             viewport={{ once: true }}
// // // // //             variants={fadeInUp}
// // // // //             className={`text-5xl md:text-6xl font-bold text-center mb-6 ${headingClass}`}
// // // // //           >
// // // // //             OUR{" "}
// // // // //             <span className={accentClass}>SERVICES</span>
// // // // //           </motion.h2>

// // // // //           <motion.p
// // // // //             initial="hidden"
// // // // //             whileInView="visible"
// // // // //             viewport={{ once: true }}
// // // // //             variants={fadeInUp}
// // // // //             className={`text-xl text-center mb-16 max-w-3xl mx-auto ${bodyClass}`}
// // // // //           >
// // // // //             Comprehensive IT &amp; BPO solutions — from development to support and
// // // // //             infrastructure
// // // // //           </motion.p>

// // // // //           <div className="space-y-20">
// // // // //             {/* IT Services */}
// // // // //             <div>
// // // // //               <h3 className={`text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight ${sectionHeadingAccent}`}>
// // // // //                 1. Information Technology Services
// // // // //               </h3>
// // // // //               <p className={`text-lg md:text-xl mb-12 text-center max-w-4xl mx-auto leading-relaxed ${bodyClass}`}>
// // // // //                 Supporting companies at every stage of the product lifecycle.
// // // // //               </p>

// // // // //               <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
// // // // //                 <motion.div
// // // // //                   initial="hidden"
// // // // //                   whileInView="visible"
// // // // //                   viewport={{ once: true }}
// // // // //                   variants={fadeInUp}
// // // // //                   className={cardClass}
// // // // //                 >
// // // // //                   <Code className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Development</h4>
// // // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // // //                     <li>• Web application development</li>
// // // // //                     <li>• Mobile application development</li>
// // // // //                     <li>• Secure, scalable &amp; user-friendly solutions</li>
// // // // //                   </ul>
// // // // //                 </motion.div>

// // // // //                 <motion.div
// // // // //                   initial="hidden"
// // // // //                   whileInView="visible"
// // // // //                   viewport={{ once: true }}
// // // // //                   variants={fadeInUp}
// // // // //                   className={cardClass}
// // // // //                 >
// // // // //                   <ShieldCheck className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Testing</h4>
// // // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // // //                     <li>• Web application testing</li>
// // // // //                     <li>• Mobile application testing</li>
// // // // //                     <li>• Quality, performance &amp; security assurance</li>
// // // // //                   </ul>
// // // // //                 </motion.div>

// // // // //                 <motion.div
// // // // //                   initial="hidden"
// // // // //                   whileInView="visible"
// // // // //                   viewport={{ once: true }}
// // // // //                   variants={fadeInUp}
// // // // //                   className={cardClass}
// // // // //                 >
// // // // //                   <Users className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>L2 Support</h4>
// // // // //                   <p className={`text-sm md:text-base leading-relaxed max-w-xs ${bodyClass}`}>
// // // // //                     Advanced troubleshooting, in-depth diagnosis &amp; root cause resolution.
// // // // //                   </p>
// // // // //                 </motion.div>

// // // // //                 <motion.div
// // // // //                   initial="hidden"
// // // // //                   whileInView="visible"
// // // // //                   viewport={{ once: true }}
// // // // //                   variants={fadeInUp}
// // // // //                   className={cardClass}
// // // // //                 >
// // // // //                   <Server className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Product Assistance</h4>
// // // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // // //                     <li>• Continuous support &amp; maintenance</li>
// // // // //                     <li>• Ticket &amp; incident management</li>
// // // // //                     <li>• Change management &amp; SLA tracking</li>
// // // // //                   </ul>
// // // // //                 </motion.div>
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* BPO Services */}
// // // // //             <div>
// // // // //               <h3 className={`text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight ${sectionHeadingAccent}`}>
// // // // //                 2. Business Process Outsourcing (BPO) Services
// // // // //               </h3>
// // // // //               <p className={`text-lg md:text-xl mb-12 text-center max-w-3xl mx-auto leading-relaxed ${bodyClass}`}>
// // // // //                 Streamline operations and enhance customer engagement with reliable support.
// // // // //               </p>

// // // // //               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
// // // // //                 <motion.div
// // // // //                   initial="hidden"
// // // // //                   whileInView="visible"
// // // // //                   viewport={{ once: true }}
// // // // //                   variants={fadeInUp}
// // // // //                   className={cardClass}
// // // // //                 >
// // // // //                   <Headphones className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Voice, Chat &amp; Email</h4>
// // // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // // //                     <li>• Inbound &amp; outbound voice support</li>
// // // // //                     <li>• Real-time chat assistance</li>
// // // // //                     <li>• Structured email &amp; ticketing</li>
// // // // //                   </ul>
// // // // //                 </motion.div>

// // // // //                 <motion.div
// // // // //                   initial="hidden"
// // // // //                   whileInView="visible"
// // // // //                   viewport={{ once: true }}
// // // // //                   variants={fadeInUp}
// // // // //                   className={cardClass}
// // // // //                 >
// // // // //                   <BarChart3 className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Cataloguing &amp; Enrichment</h4>
// // // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // // //                     <li>• Product descriptions, tags &amp; keywords</li>
// // // // //                     <li>• Data validation &amp; cleaning</li>
// // // // //                     <li>• Category &amp; attribute enrichment</li>
// // // // //                   </ul>
// // // // //                 </motion.div>

// // // // //                 <motion.div
// // // // //                   initial="hidden"
// // // // //                   whileInView="visible"
// // // // //                   viewport={{ once: true }}
// // // // //                   variants={fadeInUp}
// // // // //                   className={cardClass}
// // // // //                 >
// // // // //                   <CheckCircle className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Quality Assurance</h4>
// // // // //                   <p className={`text-sm md:text-base leading-relaxed max-w-xs ${bodyClass}`}>
// // // // //                     Call/chat audits, SOP/SLA compliance, feedback &amp; continuous improvement.
// // // // //                   </p>
// // // // //                 </motion.div>
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* Infrastructure */}
// // // // //             <div className="text-center max-w-5xl mx-auto">
// // // // //               <h3 className={`text-4xl md:text-5xl font-bold mb-8 tracking-tight ${sectionHeadingAccent}`}>
// // // // //                 3. Support &amp; Infrastructure Setup
// // // // //               </h3>
// // // // //               <p className={`text-lg md:text-xl leading-relaxed ${bodyClass}`}>
// // // // //                 End-to-end BPO-ready setup: modern offices, high-speed networks, advanced telephony,
// // // // //                 servers, workstations, robust security, and power backup.
// // // // //               </p>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ====================== WHY CHOOSE US ====================== */}
// // // // //       <section
// // // // //         className={`relative py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-black" : "bg-white"}`}
// // // // //       >
// // // // //         <div className="max-w-7xl mx-auto">
// // // // //           <motion.h2
// // // // //             initial="hidden"
// // // // //             whileInView="visible"
// // // // //             viewport={{ once: true }}
// // // // //             variants={fadeInUp}
// // // // //             className={`text-5xl md:text-6xl font-bold text-center mb-16 ${headingClass}`}
// // // // //           >
// // // // //             WHY{" "}
// // // // //             <span className={accentClass}>CHOOSE US</span>
// // // // //           </motion.h2>

// // // // //           <div className="grid md:grid-cols-3 gap-10 lg:gap-16 text-center">
// // // // //             {[
// // // // //               {
// // // // //                 icon: Users,
// // // // //                 title: "True Partnership",
// // // // //                 desc: "We become an extension of your team — understanding your business deeply.",
// // // // //               },
// // // // //               {
// // // // //                 icon: Briefcase,
// // // // //                 title: "Enterprise Expertise",
// // // // //                 desc: "Proven experience in BFSI, retail, government &amp; PSU projects.",
// // // // //               },
// // // // //               {
// // // // //                 icon: HardDrive,
// // // // //                 title: "Long-term Support",
// // // // //                 desc: "24×7 production support, SLA-based maintenance &amp; AMS.",
// // // // //               },
// // // // //             ].map((item, idx) => (
// // // // //               <motion.div
// // // // //                 key={idx}
// // // // //                 initial="hidden"
// // // // //                 whileInView="visible"
// // // // //                 viewport={{ once: true }}
// // // // //                 variants={fadeInUp}
// // // // //                 className={`p-10 rounded-3xl border transition-all
// // // // //                   ${
// // // // //                     isDark
// // // // //                       ? "bg-gray-900 border-gray-800"
// // // // //                       : "bg-white border-gray-200 shadow-md"
// // // // //                   }`}
// // // // //               >
// // // // //                 <div
// // // // //                   className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 mx-auto
// // // // //                   ${isDark ? "bg-gray-800" : "bg-blue-50"}`}
// // // // //                 >
// // // // //                   <item.icon className={`w-10 h-10 ${accentClass}`} />
// // // // //                 </div>
// // // // //                 <h3 className={`text-3xl font-bold mb-5 ${headingClass}`}>
// // // // //                   {item.title}
// // // // //                 </h3>
// // // // //                 <p className={`leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
// // // // //                   {item.desc}
// // // // //                 </p>
// // // // //               </motion.div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // import React, { useState, useEffect } from "react";
// // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // import {
// // // // //   ArrowRight,
// // // // //   Code,
// // // // //   ShieldCheck,
// // // // //   Users,
// // // // //   Server,
// // // // //   Headphones,
// // // // //   BarChart3,
// // // // //   CheckCircle,
// // // // //   Briefcase,
// // // // //   HardDrive,
// // // // // } from "lucide-react";

// // // // // const fadeInUp = {
// // // // //   hidden: { opacity: 0, y: 60 },
// // // // //   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// // // // // };

// // // // // const staggerContainer = {
// // // // //   hidden: {},
// // // // //   visible: { transition: { staggerChildren: 0.15 } },
// // // // // };

// // // // // const backgroundImages = [
// // // // //   "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
// // // // //   "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop",
// // // // //   "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop",
// // // // // ];

// // // // // export default function Home() {
// // // // //   const [isDark, setIsDark] = useState(
// // // // //     () => document.documentElement.classList.contains("dark")
// // // // //   );
// // // // //   const [currentBgIndex, setCurrentBgIndex] = useState(0);

// // // // //   // Dark mode observer
// // // // //   useEffect(() => {
// // // // //     const observer = new MutationObserver(() => {
// // // // //       setIsDark(document.documentElement.classList.contains("dark"));
// // // // //     });
// // // // //     observer.observe(document.documentElement, {
// // // // //       attributes: true,
// // // // //       attributeFilter: ["class"],
// // // // //     });
// // // // //     return () => observer.disconnect();
// // // // //   }, []);

// // // // //   // Background Image Carousel
// // // // //   useEffect(() => {
// // // // //     const interval = setInterval(() => {
// // // // //       setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
// // // // //     }, 6000);
// // // // //     return () => clearInterval(interval);
// // // // //   }, []);

// // // // //   // Reusable class helpers - RED THEME
// // // // //   const cardClass = isDark
// // // // //     ? "bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full hover:border-red-500/50 transition-colors"
// // // // //     : "bg-white border border-gray-200 shadow-md rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full hover:shadow-xl transition-shadow";

// // // // //   const headingClass = isDark ? "text-white" : "text-gray-900";
// // // // //   const bodyClass = isDark ? "text-gray-300" : "text-gray-700";
// // // // //   const accentClass = "text-red-500";                    // Changed to red
// // // // //   const sectionHeadingAccent = "text-red-500";           // Changed to red

// // // // //   return (
// // // // //     <div
// // // // //       className={`min-h-screen overflow-x-hidden transition-colors duration-700
// // // // //       ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}`}
// // // // //     >
// // // // //       {/* ====================== HERO SECTION WITH CAROUSEL ====================== */}
// // // // //       <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
// // // // //         {/* Background Carousel */}
// // // // //         <div className="absolute inset-0 z-0">
// // // // //           <AnimatePresence mode="wait">
// // // // //             {backgroundImages.map((image, index) => (
// // // // //               <motion.div
// // // // //                 key={index}
// // // // //                 initial={{ opacity: 0 }}
// // // // //                 animate={{
// // // // //                   opacity: index === currentBgIndex ? 1 : 0
// // // // //                 }}
// // // // //                 transition={{ duration: 1.2, ease: "easeInOut" }}
// // // // //                 className="absolute inset-0 bg-cover bg-center"
// // // // //                 style={{
// // // // //                   backgroundImage: `url(${image})`,
// // // // //                 }}
// // // // //               />
// // // // //             ))}
// // // // //           </AnimatePresence>
// // // // //           {/* Overlay */}
// // // // //           <div
// // // // //             className={`absolute inset-0 z-10 transition-colors duration-700
// // // // //               ${isDark
// // // // //                 ? "bg-gradient-to-br from-black/90 via-black/80 to-black/90"
// // // // //                 : "bg-gradient-to-br from-slate-900/80 via-slate-900/70 to-red-950/70"}`}
// // // // //           />
// // // // //         </div>

// // // // //         {/* Content */}
// // // // //         <div className="max-w-7xl mx-auto text-center relative z-20">
// // // // //           <motion.div
// // // // //             initial="hidden"
// // // // //             animate="visible"
// // // // //             variants={staggerContainer}
// // // // //           >
// // // // //             <motion.h1
// // // // //               variants={fadeInUp}
// // // // //               className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 ${headingClass}`}
// // // // //             >
// // // // //               ATLA KNOTS
// // // // //               <br />
// // // // //               <span
// // // // //                 className={
// // // // //                   isDark
// // // // //                     ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-red-400 to-white"
// // // // //                     : "text-red-600"
// // // // //                 }
// // // // //               >
// // // // //                 IT SOLUTIONS
// // // // //               </span>
// // // // //             </motion.h1>

// // // // //             <motion.p
// // // // //               variants={fadeInUp}
// // // // //               className={`text-xl md:text-2xl max-w-4xl mx-auto mb-10 leading-relaxed
// // // // //                 ${isDark ? "text-gray-300" : "text-white"}`}
// // // // //             >
// // // // //               Making technology impactful, dependable, and easy to use — for
// // // // //               businesses of all sizes.
// // // // //             </motion.p>

// // // // //             <motion.p
// // // // //               variants={fadeInUp}
// // // // //               className={`text-lg md:text-xl max-w-3xl mx-auto mb-12
// // // // //                 ${isDark ? "text-gray-400" : "text-white/90"}`}
// // // // //             >
// // // // //               We build secure, future-ready software that drives efficiency and
// // // // //               digital transformation.
// // // // //             </motion.p>

// // // // //             <motion.div
// // // // //               variants={fadeInUp}
// // // // //               className="flex flex-col sm:flex-row gap-6 justify-center"
// // // // //             >
// // // // //               <button
// // // // //                 className={`group px-10 py-5 rounded-full text-lg font-semibold flex items-center gap-3 transition-all
// // // // //                   bg-red-600 hover:bg-red-700 active:bg-red-800 text-white`}
// // // // //               >
// // // // //                 GET STARTED
// // // // //                 <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
// // // // //               </button>

// // // // //               <button
// // // // //                 className={`group px-10 py-5 border-2 rounded-full text-lg font-semibold transition-all
// // // // //                   ${isDark
// // // // //                     ? "border-red-600/60 text-red-400 hover:border-red-500 hover:text-red-300"
// // // // //                     : "border-white/80 text-white hover:bg-white/10"}`}
// // // // //               >
// // // // //                 VIEW OUR WORK
// // // // //               </button>
// // // // //             </motion.div>
// // // // //           </motion.div>
// // // // //         </div>

// // // // //         {/* Carousel Indicator Dots */}
// // // // //         <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-30">
// // // // //           {backgroundImages.map((_, idx) => (
// // // // //             <div
// // // // //               key={idx}
// // // // //               className={`w-3 h-3 rounded-full transition-all duration-500 cursor-pointer
// // // // //                 ${idx === currentBgIndex
// // // // //                   ? "bg-white scale-125 shadow-lg"
// // // // //                   : "bg-white/50 hover:bg-white/70"}`}
// // // // //               onClick={() => setCurrentBgIndex(idx)}
// // // // //             />
// // // // //           ))}
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ====================== SERVICES SECTION ====================== */}
// // // // //       <section
// // // // //         className={`py-24 px-6 md:px-12 lg:px-24 transition-colors
// // // // //         ${isDark ? "bg-gradient-to-b from-black to-gray-950" : "bg-gray-50"}`}
// // // // //       >
// // // // //         <div className="max-w-7xl mx-auto">
// // // // //           <motion.h2
// // // // //             initial="hidden"
// // // // //             whileInView="visible"
// // // // //             viewport={{ once: true }}
// // // // //             variants={fadeInUp}
// // // // //             className={`text-5xl md:text-6xl font-bold text-center mb-6 ${headingClass}`}
// // // // //           >
// // // // //             OUR{" "}
// // // // //             <span className={accentClass}>SERVICES</span>
// // // // //           </motion.h2>

// // // // //           <motion.p
// // // // //             initial="hidden"
// // // // //             whileInView="visible"
// // // // //             viewport={{ once: true }}
// // // // //             variants={fadeInUp}
// // // // //             className={`text-xl text-center mb-16 max-w-3xl mx-auto ${bodyClass}`}
// // // // //           >
// // // // //             Comprehensive IT &amp; BPO solutions — from development to support and
// // // // //             infrastructure
// // // // //           </motion.p>

// // // // //           <div className="space-y-20">
// // // // //             {/* IT Services */}
// // // // //             <div>
// // // // //               <h3 className={`text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight ${sectionHeadingAccent}`}>
// // // // //                 1. Information Technology Services
// // // // //               </h3>
// // // // //               <p className={`text-lg md:text-xl mb-12 text-center max-w-4xl mx-auto leading-relaxed ${bodyClass}`}>
// // // // //                 Supporting companies at every stage of the product lifecycle.
// // // // //               </p>

// // // // //               <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
// // // // //                 {/* Development Card */}
// // // // //                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={cardClass}>
// // // // //                   <Code className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Development</h4>
// // // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // // //                     <li>• Web application development</li>
// // // // //                     <li>• Mobile application development</li>
// // // // //                     <li>• Secure, scalable &amp; user-friendly solutions</li>
// // // // //                   </ul>
// // // // //                 </motion.div>

// // // // //                 {/* Testing Card */}
// // // // //                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={cardClass}>
// // // // //                   <ShieldCheck className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Testing</h4>
// // // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // // //                     <li>• Web application testing</li>
// // // // //                     <li>• Mobile application testing</li>
// // // // //                     <li>• Quality, performance &amp; security assurance</li>
// // // // //                   </ul>
// // // // //                 </motion.div>

// // // // //                 {/* L2 Support Card */}
// // // // //                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={cardClass}>
// // // // //                   <Users className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>L2 Support</h4>
// // // // //                   <p className={`text-sm md:text-base leading-relaxed max-w-xs ${bodyClass}`}>
// // // // //                     Advanced troubleshooting, in-depth diagnosis &amp; root cause resolution.
// // // // //                   </p>
// // // // //                 </motion.div>

// // // // //                 {/* Product Assistance Card */}
// // // // //                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={cardClass}>
// // // // //                   <Server className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Product Assistance</h4>
// // // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // // //                     <li>• Continuous support &amp; maintenance</li>
// // // // //                     <li>• Ticket &amp; incident management</li>
// // // // //                     <li>• Change management &amp; SLA tracking</li>
// // // // //                   </ul>
// // // // //                 </motion.div>
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* BPO Services */}
// // // // //             <div>
// // // // //               <h3 className={`text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight ${sectionHeadingAccent}`}>
// // // // //                 2. Business Process Outsourcing (BPO) Services
// // // // //               </h3>
// // // // //               <p className={`text-lg md:text-xl mb-12 text-center max-w-3xl mx-auto leading-relaxed ${bodyClass}`}>
// // // // //                 Streamline operations and enhance customer engagement with reliable support.
// // // // //               </p>

// // // // //               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
// // // // //                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={cardClass}>
// // // // //                   <Headphones className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Voice, Chat &amp; Email</h4>
// // // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // // //                     <li>• Inbound &amp; outbound voice support</li>
// // // // //                     <li>• Real-time chat assistance</li>
// // // // //                     <li>• Structured email &amp; ticketing</li>
// // // // //                   </ul>
// // // // //                 </motion.div>

// // // // //                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={cardClass}>
// // // // //                   <BarChart3 className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Cataloguing &amp; Enrichment</h4>
// // // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // // //                     <li>• Product descriptions, tags &amp; keywords</li>
// // // // //                     <li>• Data validation &amp; cleaning</li>
// // // // //                     <li>• Category &amp; attribute enrichment</li>
// // // // //                   </ul>
// // // // //                 </motion.div>

// // // // //                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={cardClass}>
// // // // //                   <CheckCircle className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Quality Assurance</h4>
// // // // //                   <p className={`text-sm md:text-base leading-relaxed max-w-xs ${bodyClass}`}>
// // // // //                     Call/chat audits, SOP/SLA compliance, feedback &amp; continuous improvement.
// // // // //                   </p>
// // // // //                 </motion.div>
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* Infrastructure */}
// // // // //             <div className="text-center max-w-5xl mx-auto">
// // // // //               <h3 className={`text-4xl md:text-5xl font-bold mb-8 tracking-tight ${sectionHeadingAccent}`}>
// // // // //                 3. Support &amp; Infrastructure Setup
// // // // //               </h3>
// // // // //               <p className={`text-lg md:text-xl leading-relaxed ${bodyClass}`}>
// // // // //                 End-to-end BPO-ready setup: modern offices, high-speed networks, advanced telephony,
// // // // //                 servers, workstations, robust security, and power backup.
// // // // //               </p>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ====================== WHY CHOOSE US ====================== */}
// // // // //       <section
// // // // //         className={`relative py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-black" : "bg-white"}`}
// // // // //       >
// // // // //         <div className="max-w-7xl mx-auto">
// // // // //           <motion.h2
// // // // //             initial="hidden"
// // // // //             whileInView="visible"
// // // // //             viewport={{ once: true }}
// // // // //             variants={fadeInUp}
// // // // //             className={`text-5xl md:text-6xl font-bold text-center mb-16 ${headingClass}`}
// // // // //           >
// // // // //             WHY{" "}
// // // // //             <span className={accentClass}>CHOOSE US</span>
// // // // //           </motion.h2>

// // // // //           <div className="grid md:grid-cols-3 gap-10 lg:gap-16 text-center">
// // // // //             {[
// // // // //               {
// // // // //                 icon: Users,
// // // // //                 title: "True Partnership",
// // // // //                 desc: "We become an extension of your team — understanding your business deeply.",
// // // // //               },
// // // // //               {
// // // // //                 icon: Briefcase,
// // // // //                 title: "Enterprise Expertise",
// // // // //                 desc: "Proven experience in BFSI, retail, government &amp; PSU projects.",
// // // // //               },
// // // // //               {
// // // // //                 icon: HardDrive,
// // // // //                 title: "Long-term Support",
// // // // //                 desc: "24×7 production support, SLA-based maintenance &amp; AMS.",
// // // // //               },
// // // // //             ].map((item, idx) => (
// // // // //               <motion.div
// // // // //                 key={idx}
// // // // //                 initial="hidden"
// // // // //                 whileInView="visible"
// // // // //                 viewport={{ once: true }}
// // // // //                 variants={fadeInUp}
// // // // //                 className={`p-10 rounded-3xl border transition-all
// // // // //                   ${isDark
// // // // //                     ? "bg-gray-900 border-gray-800 hover:border-red-500/30"
// // // // //                     : "bg-white border-gray-200 shadow-md hover:shadow-lg"}`}
// // // // //               >
// // // // //                 <div
// // // // //                   className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 mx-auto
// // // // //                   ${isDark ? "bg-gray-800" : "bg-red-50"}`}
// // // // //                 >
// // // // //                   <item.icon className={`w-10 h-10 ${accentClass}`} />
// // // // //                 </div>
// // // // //                 <h3 className={`text-3xl font-bold mb-5 ${headingClass}`}>
// // // // //                   {item.title}
// // // // //                 </h3>
// // // // //                 <p className={`leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
// // // // //                   {item.desc}
// // // // //                 </p>
// // // // //               </motion.div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // import React from "react";
// // // // // import { useTheme } from "../context/ThemeContext";
// // // // // import { motion } from "framer-motion";
// // // // // import {
// // // // //   ArrowRight,
// // // // //   Code,
// // // // //   ShieldCheck,
// // // // //   Users,
// // // // //   Server,
// // // // //   Headphones,
// // // // //   BarChart3,
// // // // //   CheckCircle,
// // // // //   Briefcase,
// // // // //   HardDrive,
// // // // // } from "lucide-react";
// // // // // import heroVideo from "../assets/herosectionvideo.mp4";

// // // // // const fadeInUp = {
// // // // //   hidden: { opacity: 0, y: 60 },
// // // // //   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// // // // // };

// // // // // const staggerContainer = {
// // // // //   hidden: {},
// // // // //   visible: { transition: { staggerChildren: 0.15 } },
// // // // // };

// // // // // export default function Home() {
// // // // //   const { isDark } = useTheme();

// // // // //   // Reusable class helpers - RED THEME
// // // // //   const cardClass = isDark
// // // // //     ? "bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full hover:border-red-500/50 transition-colors"
// // // // //     : "bg-white border border-gray-200 shadow-md rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full hover:shadow-xl transition-shadow";

// // // // //   const headingClass = isDark ? "text-white" : "text-gray-900";
// // // // //   const bodyClass = isDark ? "text-gray-300" : "text-gray-700";
// // // // //   const accentClass = "text-red-500";
// // // // //   const sectionHeadingAccent = "text-red-500";

// // // // //   return (
// // // // //     <div
// // // // //       className={`min-h-screen overflow-x-hidden transition-colors duration-700
// // // // //       ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}`}
// // // // //     >
// // // // //       {/* ====================== HERO SECTION WITH VIDEO ====================== */}
// // // // //       <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
// // // // //         {/* Background Video */}
// // // // //         <div className="absolute inset-0 z-0">
// // // // //           <video
// // // // //             autoPlay
// // // // //             loop
// // // // //             muted
// // // // //             playsInline
// // // // //             className="absolute inset-0 w-full h-full object-cover"
// // // // //           >
// // // // //             <source src={heroVideo} type="video/mp4" />
// // // // //             {/* Fallback for older browsers */}
// // // // //             Your browser does not support the video tag.
// // // // //           </video>

// // // // //           {/* Overlay */}
// // // // //           <div
// // // // //             className={`absolute inset-0 z-10 transition-colors duration-700
// // // // //               ${
// // // // //                 isDark
// // // // //                   ? "bg-gradient-to-br from-black/90 via-black/80 to-black/90"
// // // // //                   : "bg-gradient-to-br from-slate-950/95 via-slate-950/90 to-black/70"
// // // // //               }`}
// // // // //           />
// // // // //         </div>

// // // // //         {/* Content */}
// // // // //         <div className="max-w-7xl mx-auto text-center relative z-20">
// // // // //           <motion.div
// // // // //             initial="hidden"
// // // // //             animate="visible"
// // // // //             variants={staggerContainer}
// // // // //           >
// // // // //             <motion.h1
// // // // //               variants={fadeInUp}
// // // // //               className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-white"
// // // // //             >
// // // // //               ATLA KNOTS
// // // // //               <br />
// // // // //               <span
// // // // //                 className={
// // // // //                   isDark
// // // // //                     ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-red-400 to-white"
// // // // //                     : "text-red-600"
// // // // //                 }
// // // // //               >
// // // // //                 IT SOLUTIONS
// // // // //               </span>
// // // // //             </motion.h1>

// // // // //             <motion.p
// // // // //               variants={fadeInUp}
// // // // //               className={`text-xl md:text-2xl max-w-4xl mx-auto mb-10 leading-relaxed
// // // // //                 ${isDark ? "text-gray-300" : "text-white"}`}
// // // // //             >
// // // // //               Making technology impactful, dependable, and easy to use — for
// // // // //               businesses of all sizes.
// // // // //             </motion.p>

// // // // //             <motion.p
// // // // //               variants={fadeInUp}
// // // // //               className={`text-lg md:text-xl max-w-3xl mx-auto mb-12
// // // // //                 ${isDark ? "text-gray-400" : "text-white/90"}`}
// // // // //             >
// // // // //               We build secure, future-ready software that drives efficiency and
// // // // //               digital transformation.
// // // // //             </motion.p>

// // // // //             <motion.div
// // // // //               variants={fadeInUp}
// // // // //               className="flex flex-col sm:flex-row gap-6 justify-center"
// // // // //             >
// // // // //               <button
// // // // //                 className={`group px-10 py-5 rounded-full text-lg font-semibold flex items-center gap-3 transition-all
// // // // //                   bg-red-600 hover:bg-red-700 active:bg-red-800 text-white`}
// // // // //               >
// // // // //                 GET STARTED
// // // // //                 <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
// // // // //               </button>

// // // // //               <button
// // // // //                 className={`group px-10 py-5 border-2 rounded-full text-lg font-semibold transition-all
// // // // //                   ${
// // // // //                     isDark
// // // // //                       ? "border-red-600/60 text-red-400 hover:border-red-500 hover:text-red-300"
// // // // //                       : "border-white/80 text-white hover:bg-white/10"
// // // // //                   }`}
// // // // //               >
// // // // //                 VIEW OUR WORK
// // // // //               </button>
// // // // //             </motion.div>
// // // // //           </motion.div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ====================== SERVICES SECTION ====================== */}
// // // // //       <section
// // // // //         className={`py-24 px-6 md:px-12 lg:px-24 transition-colors
// // // // //         ${isDark ? "bg-gradient-to-b from-black to-gray-950" : "bg-gray-50"}`}
// // // // //       >
// // // // //         <div className="max-w-7xl mx-auto">
// // // // //           <motion.h2
// // // // //             initial="hidden"
// // // // //             whileInView="visible"
// // // // //             viewport={{ once: true }}
// // // // //             variants={fadeInUp}
// // // // //             className={`text-5xl md:text-6xl font-bold text-center mb-6 ${headingClass}`}
// // // // //           >
// // // // //             OUR <span className={accentClass}>SERVICES</span>
// // // // //           </motion.h2>

// // // // //           <motion.p
// // // // //             initial="hidden"
// // // // //             whileInView="visible"
// // // // //             viewport={{ once: true }}
// // // // //             variants={fadeInUp}
// // // // //             className={`text-xl text-center mb-16 max-w-3xl mx-auto ${bodyClass}`}
// // // // //           >
// // // // //             Comprehensive IT &amp; BPO solutions — from development to support
// // // // //             and infrastructure
// // // // //           </motion.p>

// // // // //           <div className="space-y-20">
// // // // //             {/* IT Services */}
// // // // //             <div>
// // // // //               <h3
// // // // //                 className={`text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight ${sectionHeadingAccent}`}
// // // // //               >
// // // // //                 1. Information Technology Services
// // // // //               </h3>
// // // // //               <p
// // // // //                 className={`text-lg md:text-xl mb-12 text-center max-w-4xl mx-auto leading-relaxed ${bodyClass}`}
// // // // //               >
// // // // //                 Supporting companies at every stage of the product lifecycle.
// // // // //               </p>

// // // // //               <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
// // // // //                 {/* Development Card */}
// // // // //                 <motion.div
// // // // //                   initial="hidden"
// // // // //                   whileInView="visible"
// // // // //                   viewport={{ once: true }}
// // // // //                   variants={fadeInUp}
// // // // //                   className={cardClass}
// // // // //                 >
// // // // //                   <Code
// // // // //                     className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
// // // // //                   />
// // // // //                   <h4
// // // // //                     className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
// // // // //                   >
// // // // //                     Development
// // // // //                   </h4>
// // // // //                   <ul
// // // // //                     className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}
// // // // //                   >
// // // // //                     <li>• Web application development</li>
// // // // //                     <li>• Mobile application development</li>
// // // // //                     <li>• Secure, scalable &amp; user-friendly solutions</li>
// // // // //                   </ul>
// // // // //                 </motion.div>

// // // // //                 {/* Testing Card */}
// // // // //                 <motion.div
// // // // //                   initial="hidden"
// // // // //                   whileInView="visible"
// // // // //                   viewport={{ once: true }}
// // // // //                   variants={fadeInUp}
// // // // //                   className={cardClass}
// // // // //                 >
// // // // //                   <ShieldCheck
// // // // //                     className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
// // // // //                   />
// // // // //                   <h4
// // // // //                     className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
// // // // //                   >
// // // // //                     Testing
// // // // //                   </h4>
// // // // //                   <ul
// // // // //                     className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}
// // // // //                   >
// // // // //                     <li>• Web application testing</li>
// // // // //                     <li>• Mobile application testing</li>
// // // // //                     <li>• Quality, performance &amp; security assurance</li>
// // // // //                   </ul>
// // // // //                 </motion.div>

// // // // //                 {/* L2 Support Card */}
// // // // //                 <motion.div
// // // // //                   initial="hidden"
// // // // //                   whileInView="visible"
// // // // //                   viewport={{ once: true }}
// // // // //                   variants={fadeInUp}
// // // // //                   className={cardClass}
// // // // //                 >
// // // // //                   <Users
// // // // //                     className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
// // // // //                   />
// // // // //                   <h4
// // // // //                     className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
// // // // //                   >
// // // // //                     L2 Support
// // // // //                   </h4>
// // // // //                   <p
// // // // //                     className={`text-sm md:text-base leading-relaxed max-w-xs ${bodyClass}`}
// // // // //                   >
// // // // //                     Advanced troubleshooting, in-depth diagnosis &amp; root
// // // // //                     cause resolution.
// // // // //                   </p>
// // // // //                 </motion.div>

// // // // //                 {/* Product Assistance Card */}
// // // // //                 <motion.div
// // // // //                   initial="hidden"
// // // // //                   whileInView="visible"
// // // // //                   viewport={{ once: true }}
// // // // //                   variants={fadeInUp}
// // // // //                   className={cardClass}
// // // // //                 >
// // // // //                   <Server
// // // // //                     className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
// // // // //                   />
// // // // //                   <h4
// // // // //                     className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
// // // // //                   >
// // // // //                     Product Assistance
// // // // //                   </h4>
// // // // //                   <ul
// // // // //                     className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}
// // // // //                   >
// // // // //                     <li>• Continuous support &amp; maintenance</li>
// // // // //                     <li>• Ticket &amp; incident management</li>
// // // // //                     <li>• Change management &amp; SLA tracking</li>
// // // // //                   </ul>
// // // // //                 </motion.div>
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* BPO Services */}
// // // // //             <div>
// // // // //               <h3
// // // // //                 className={`text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight ${sectionHeadingAccent}`}
// // // // //               >
// // // // //                 2. Business Process Outsourcing (BPO) Services
// // // // //               </h3>
// // // // //               <p
// // // // //                 className={`text-lg md:text-xl mb-12 text-center max-w-3xl mx-auto leading-relaxed ${bodyClass}`}
// // // // //               >
// // // // //                 Streamline operations and enhance customer engagement with
// // // // //                 reliable support.
// // // // //               </p>

// // // // //               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
// // // // //                 <motion.div
// // // // //                   initial="hidden"
// // // // //                   whileInView="visible"
// // // // //                   viewport={{ once: true }}
// // // // //                   variants={fadeInUp}
// // // // //                   className={cardClass}
// // // // //                 >
// // // // //                   <Headphones
// // // // //                     className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
// // // // //                   />
// // // // //                   <h4
// // // // //                     className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
// // // // //                   >
// // // // //                     Voice, Chat &amp; Email
// // // // //                   </h4>
// // // // //                   <ul
// // // // //                     className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}
// // // // //                   >
// // // // //                     <li>• Inbound &amp; outbound voice support</li>
// // // // //                     <li>• Real-time chat assistance</li>
// // // // //                     <li>• Structured email &amp; ticketing</li>
// // // // //                   </ul>
// // // // //                 </motion.div>

// // // // //                 <motion.div
// // // // //                   initial="hidden"
// // // // //                   whileInView="visible"
// // // // //                   viewport={{ once: true }}
// // // // //                   variants={fadeInUp}
// // // // //                   className={cardClass}
// // // // //                 >
// // // // //                   <BarChart3
// // // // //                     className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
// // // // //                   />
// // // // //                   <h4
// // // // //                     className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
// // // // //                   >
// // // // //                     Cataloguing &amp; Enrichment
// // // // //                   </h4>
// // // // //                   <ul
// // // // //                     className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}
// // // // //                   >
// // // // //                     <li>• Product descriptions, tags &amp; keywords</li>
// // // // //                     <li>• Data validation &amp; cleaning</li>
// // // // //                     <li>• Category &amp; attribute enrichment</li>
// // // // //                   </ul>
// // // // //                 </motion.div>

// // // // //                 <motion.div
// // // // //                   initial="hidden"
// // // // //                   whileInView="visible"
// // // // //                   viewport={{ once: true }}
// // // // //                   variants={fadeInUp}
// // // // //                   className={cardClass}
// // // // //                 >
// // // // //                   <CheckCircle
// // // // //                     className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
// // // // //                   />
// // // // //                   <h4
// // // // //                     className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
// // // // //                   >
// // // // //                     Quality Assurance
// // // // //                   </h4>
// // // // //                   <p
// // // // //                     className={`text-sm md:text-base leading-relaxed max-w-xs ${bodyClass}`}
// // // // //                   >
// // // // //                     Call/chat audits, SOP/SLA compliance, feedback &amp;
// // // // //                     continuous improvement.
// // // // //                   </p>
// // // // //                 </motion.div>
// // // // //               </div>
// // // // //             </div>

// // // // //              <div className="text-center max-w-5xl mx-auto">
// // // // //               <h3
// // // // //                 className={`text-4xl md:text-5xl font-bold mb-8 tracking-tight ${sectionHeadingAccent}`}
// // // // //               >
// // // // //                 3. Digital &amp; marketing services
// // // // //               </h3>
// // // // //               <p className={`text-lg md:text-xl leading-relaxed ${bodyClass}`}>
// // // // //                In today’s digital-first world, where the internet plays a crucial role in everyday life, building a strong online presence is essential for businesses to grow, connect with their audience, and stay ahead of the competition.
// // // // //               </p>

// // // // //                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
// // // // //                 <motion.div
// // // // //                   initial="hidden"
// // // // //                   whileInView="visible"
// // // // //                   viewport={{ once: true }}
// // // // //                   variants={fadeInUp}
// // // // //                   className={cardClass}
// // // // //                 >
// // // // //                   <Headphones
// // // // //                     className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
// // // // //                   />
// // // // //                   <h4
// // // // //                     className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
// // // // //                   >
// // // // //                     Search Engine  &amp; Optimization
// // // // //                   </h4>
// // // // //                   <ul
// // // // //                     className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}
// // // // //                   >
// // // // //                     <li>• Boost your inbound  website ranking on search engines</li>
// // // // //                     <li>• Increase organic traffic</li>
// // // // //                     <li>• Attract &amp; the right audience</li>
// // // // //                     <li>• Gain &amp; a strong competitive edge in the market</li>

// // // // //                   </ul>
// // // // //                 </motion.div>

// // // // //                 <motion.div
// // // // //                   initial="hidden"
// // // // //                   whileInView="visible"
// // // // //                   viewport={{ once: true }}
// // // // //                   variants={fadeInUp}
// // // // //                   className={cardClass}
// // // // //                 >
// // // // //                   <BarChart3
// // // // //                     className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
// // // // //                   />
// // // // //                   <h4
// // // // //                     className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
// // // // //                   >
// // // // //                     Social Media Marketing
// // // // //                   </h4>
// // // // //                   <ul
// // // // //                     className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}
// // // // //                   >
// // // // //                     <li>• Reach the right audience for your brand</li>
// // // // //                     <li>• Build trust and brand awareness</li>
// // // // //                     <li>• Increase engagement on social platforms</li>
// // // // //                     <li>• Convert followers into real customers</li>

// // // // //                   </ul>
// // // // //                 </motion.div>

// // // // //                 <motion.div
// // // // //                   initial="hidden"
// // // // //                   whileInView="visible"
// // // // //                   viewport={{ once: true }}
// // // // //                   variants={fadeInUp}
// // // // //                   className={cardClass}
// // // // //                 >
// // // // //                   <CheckCircle
// // // // //                     className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
// // // // //                   />
// // // // //                   <h4
// // // // //                     className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
// // // // //                   >
// // // // //                     Google Ads &amp; Meta Ads Campaigns
// // // // //                   </h4>
// // // // //                    <ul
// // // // //                     className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}
// // // // //                   >
// // // // //                     <li>• Create highly targeted ad campaigns</li>
// // // // //                     <li>• Improve brand visibility online</li>
// // // // //                     <li>• Generate quality leads and conversions</li>
// // // // //                     <li>• Run effective PPC and paid advertising strategies</li>

// // // // //                   </ul>

// // // // //                 </motion.div>
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* Infrastructure */}

// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ====================== TESTIMONIALS SECTION ====================== */}
// // // // // <section className={`py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-gray-950" : "bg-gray-50"}`}>
// // // // //   <div className="max-w-7xl mx-auto">
// // // // //     <motion.div
// // // // //       initial="hidden"
// // // // //       whileInView="visible"
// // // // //       viewport={{ once: true }}
// // // // //       variants={fadeInUp}
// // // // //       className="text-center mb-16"
// // // // //     >
// // // // //       <h2 className={`text-5xl md:text-6xl font-bold mb-4 ${headingClass}`}>
// // // // //         TESTIMONIALS
// // // // //       </h2>
// // // // //       <p className={`text-2xl font-medium ${accentClass}`}>
// // // // //         Real Results, Real Client Experiences.
// // // // //       </p>
// // // // //       <p className={`mt-6 text-lg max-w-3xl mx-auto ${bodyClass}`}>
// // // // //         We focus on performance, transparency, and long-term partnerships.
// // // // //         Here's what our clients say about working with us.
// // // // //       </p>
// // // // //     </motion.div>

// // // // //     <div className="grid md:grid-cols-3 gap-8">
// // // // //       {[
// // // // //         {
// // // // //           name: "Swadesh Jyoti",
// // // // //           text: "A reliable digital marketing partner. ATLA KNOTS understands business needs and works with clear communication and practical strategies.",
// // // // //           company: ""
// // // // //         },
// // // // //         {
// // // // //           name: "Amina",
// // // // //           text: "Working with ATLA KNOTS has been a great decision. Their team understands our brand and consistently helps us reach more customers.",
// // // // //           company: ""
// // // // //         },
// // // // //         {
// // // // //           name: "Bharat e-Filing",
// // // // //           text: "ATLA KNOTS has helped us improve our digital visibility and attract more clients. Their approach is practical and result-focused.",
// // // // //           company: ""
// // // // //         },
// // // // //       ].map((testimonial, idx) => (
// // // // //         <motion.div
// // // // //           key={idx}
// // // // //           initial="hidden"
// // // // //           whileInView="visible"
// // // // //           viewport={{ once: true }}
// // // // //           variants={fadeInUp}
// // // // //           className={`p-8 rounded-3xl h-full flex flex-col
// // // // //             ${isDark
// // // // //               ? "bg-gray-900 border border-gray-800"
// // // // //               : "bg-white shadow-lg border border-gray-100"}`}
// // // // //         >
// // // // //           <div className="flex gap-1 text-2xl text-yellow-400 mb-6">
// // // // //             ★★★★★
// // // // //           </div>

// // // // //           <p className={`flex-1 leading-relaxed mb-8 ${bodyClass}`}>
// // // // //             "{testimonial.text}"
// // // // //           </p>

// // // // //           <div className="flex items-center justify-between">
// // // // //             <div>
// // // // //               <p className={`font-semibold text-lg ${headingClass}`}>
// // // // //                 {testimonial.name}
// // // // //               </p>
// // // // //               {testimonial.company && (
// // // // //                 <p className={`text-sm ${bodyClass}`}>{testimonial.company}</p>
// // // // //               )}
// // // // //             </div>
// // // // //             <div className="text-4xl text-red-500/30">”</div>
// // // // //           </div>
// // // // //         </motion.div>
// // // // //       ))}
// // // // //     </div>
// // // // //   </div>
// // // // // </section>

// // // // //       {/* ====================== WHY CHOOSE US ====================== */}
// // // // //       <section
// // // // //         className={`relative py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-black" : "bg-white"}`}
// // // // //       >
// // // // //         <div className="max-w-7xl mx-auto">
// // // // //           <motion.h2
// // // // //             initial="hidden"
// // // // //             whileInView="visible"
// // // // //             viewport={{ once: true }}
// // // // //             variants={fadeInUp}
// // // // //             className={`text-5xl md:text-6xl font-bold text-center mb-16 ${headingClass}`}
// // // // //           >
// // // // //             WHY <span className={accentClass}>CHOOSE US</span>
// // // // //           </motion.h2>

// // // // //           <div className="grid md:grid-cols-3 gap-10 lg:gap-16 text-center">
// // // // //             {[
// // // // //               {
// // // // //                 icon: Users,
// // // // //                 title: "True Partnership",
// // // // //                 desc: "We become an extension of your team — understanding your business deeply.",
// // // // //               },
// // // // //               {
// // // // //                 icon: Briefcase,
// // // // //                 title: "Enterprise Expertise",
// // // // //                 desc: "Proven experience in BFSI, retail, government & PSU projects.",
// // // // //               },
// // // // //               {
// // // // //                 icon: HardDrive,
// // // // //                 title: "Long-term Support",
// // // // //                 desc: "24×7 production support, SLA-based maintenance & AMS.",
// // // // //               },
// // // // //             ].map((item, idx) => (
// // // // //               <motion.div
// // // // //                 key={idx}
// // // // //                 initial="hidden"
// // // // //                 whileInView="visible"
// // // // //                 viewport={{ once: true }}
// // // // //                 variants={fadeInUp}
// // // // //                 className={`p-10 rounded-3xl border transition-all
// // // // //                   ${
// // // // //                     isDark
// // // // //                       ? "bg-gray-900 border-gray-800 hover:border-red-500/30"
// // // // //                       : "bg-white border-gray-200 shadow-md hover:shadow-lg"
// // // // //                   }`}
// // // // //               >
// // // // //                 <div
// // // // //                   className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 mx-auto
// // // // //                   ${isDark ? "bg-gray-800" : "bg-red-50"}`}
// // // // //                 >
// // // // //                   <item.icon className={`w-10 h-10 ${accentClass}`} />
// // // // //                 </div>
// // // // //                 <h3 className={`text-3xl font-bold mb-5 ${headingClass}`}>
// // // // //                   {item.title}
// // // // //                 </h3>
// // // // //                 <p
// // // // //                   className={`leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}
// // // // //                 >
// // // // //                   {item.desc}
// // // // //                 </p>
// // // // //               </motion.div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ====================== LET'S DISCUSS YOUR PROJECT ====================== */}
// // // // // <section className={`py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-black" : "bg-white"}`}>
// // // // //   <div className="max-w-7xl mx-auto">
// // // // //     <div className="grid lg:grid-cols-2 gap-16 items-center">
// // // // //       {/* Left Side - Form */}
// // // // //       <div>
// // // // //         <h2 className={`text-5xl md:text-6xl font-bold mb-3 ${headingClass}`}>
// // // // //           Let's Discuss Your Project
// // // // //         </h2>
// // // // //         <p className={`text-xl mb-10 ${bodyClass}`}>
// // // // //           Tell us about your requirements. Our team will get back to you shortly.
// // // // //         </p>

// // // // //         <form className="space-y-6">
// // // // //           <div className="grid grid-cols-2 gap-6">
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="Your Name"
// // // // //               className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-red-500 transition-colors
// // // // //                 ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300"}`}
// // // // //             />
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="Last Name"
// // // // //               className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-red-500 transition-colors
// // // // //                 ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300"}`}
// // // // //             />
// // // // //           </div>

// // // // //           <input
// // // // //             type="tel"
// // // // //             placeholder="Mobile Number"
// // // // //             className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-red-500 transition-colors
// // // // //               ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300"}`}
// // // // //           />

// // // // //           <input
// // // // //             type="email"
// // // // //             placeholder="Email Address"
// // // // //             className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-red-500 transition-colors
// // // // //               ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300"}`}
// // // // //           />

// // // // //           <textarea
// // // // //             rows={5}
// // // // //             placeholder="Tell us about your project (optional)"
// // // // //             className={`w-full px-6 py-4 rounded-3xl border focus:outline-none focus:border-red-500 transition-colors resize-y
// // // // //               ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300"}`}
// // // // //           />

// // // // //           <div className="flex items-start gap-3">
// // // // //             <input type="checkbox" className="mt-1.5 accent-red-500" />
// // // // //             <p className={`text-sm ${bodyClass}`}>
// // // // //               I have read and agree to the{" "}
// // // // //               <span className="text-red-500 underline cursor-pointer">Terms and Conditions</span> and{" "}
// // // // //               <span className="text-red-500 underline cursor-pointer">Privacy Policy</span>
// // // // //             </p>
// // // // //           </div>

// // // // //           <div className="flex flex-col sm:flex-row gap-4 pt-4">
// // // // //             <button
// // // // //               type="submit"
// // // // //               className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-5 rounded-2xl transition-all text-lg"
// // // // //             >
// // // // //               Submit
// // // // //             </button>
// // // // //             <button
// // // // //               type="button"
// // // // //               className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-5 rounded-2xl transition-all text-lg flex items-center justify-center gap-3"
// // // // //             >
// // // // //               <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
// // // // //                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.485-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
// // // // //               </svg>
// // // // //               Chat on WhatsApp
// // // // //             </button>
// // // // //           </div>
// // // // //         </form>
// // // // //       </div>

// // // // //       {/* Right Side - Map + Address */}
// // // // //       <div className="space-y-8">
// // // // //         <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200">
// // // // //           {/* Replace this with your actual Google Maps embed code */}
// // // // //           <iframe
// // // // //             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.123456789!2d77.4123456789!3d23.25987654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDE1JzM1LjYiTiA3N8KwMjQnNDQuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
// // // // //             width="100%"
// // // // //             height="420"
// // // // //             style={{ border: 0 }}
// // // // //             allowFullScreen=""
// // // // //             loading="lazy"
// // // // //             referrerPolicy="no-referrer-when-downgrade"
// // // // //           ></iframe>
// // // // //         </div>

// // // // //         <div className={`p-8 rounded-3xl ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
// // // // //           <h3 className={`text-2xl font-semibold mb-6 ${headingClass}`}>The Fox Advertisement</h3>
// // // // //           <p className={bodyClass}>
// // // // //             Plot No-16, 2nd Floor, Garg Rani Complex, near Habibganj<br />
// // // // //             Restaurant, Near Raymond Showroom, Zone-1, Maharana Pratap Nagar, Bhopal, Madhya Pradesh 462011
// // // // //           </p>
// // // // //           <div className="mt-6 flex items-center gap-2 text-green-600">
// // // // //             <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
// // // // //             <span className="font-medium">4.9 ★★★★☆ (24)</span>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   </div>
// // // // // </section>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // import React, { useEffect } from "react";
// // // // import { motion } from "framer-motion";
// // // // import { useTheme } from "../context/ThemeContext";
// // // // import {
// // // //   ArrowRight,
// // // //   Code,
// // // //   ShieldCheck,
// // // //   Users,
// // // //   Server,
// // // //   Headphones,
// // // //   BarChart3,
// // // //   CheckCircle,
// // // //   Briefcase,
// // // //   HardDrive,
// // // // } from "lucide-react";

// // // // import heroVideo from "../assets/herosectionvideo.mp4";

// // // // // ReCAPTCHA & Toast
// // // // import ReCAPTCHA from "react-google-recaptcha";
// // // // import { ToastContainer, toast } from "react-toastify";
// // // // import "react-toastify/dist/ReactToastify.css";

// // // // // Redux
// // // // import { useDispatch, useSelector } from "react-redux";
// // // // import {
// // // //   updateField,
// // // //   setCaptcha,
// // // //   clearMessages,
// // // //   submitContactForm,
// // // // } from "./Redux/contact/contactSlice.js";

// // // // const fadeInUp = {
// // // //   hidden: { opacity: 0, y: 60 },
// // // //   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// // // // };

// // // // const staggerContainer = {
// // // //   hidden: {},
// // // //   visible: { transition: { staggerChildren: 0.15 } },
// // // // };

// // // // export default function Home() {
// // // //   const { isDark } = useTheme();
// // // //   const dispatch = useDispatch();

// // // //   const { formData, captchaValue, loading, successMessage, errorMessage } =
// // // //     useSelector((state) => state.contact);

// // // //   // Toast Notifications
// // // //   useEffect(() => {
// // // //     if (successMessage) {
// // // //       toast.success(successMessage, { position: "top-right", autoClose: 5000 });
// // // //       dispatch(clearMessages());
// // // //     }
// // // //   }, [successMessage, dispatch]);

// // // //   useEffect(() => {
// // // //     if (errorMessage) {
// // // //       toast.error(errorMessage, { position: "top-right", autoClose: 7000 });
// // // //       dispatch(clearMessages());
// // // //     }
// // // //   }, [errorMessage, dispatch]);

// // // //   const handleChange = (e) => {
// // // //     dispatch(updateField({ name: e.target.name, value: e.target.value }));
// // // //   };

// // // //   const handleCaptchaChange = (value) => {
// // // //     dispatch(setCaptcha(value));
// // // //   };

// // // //   const handleSubmit = (e) => {
// // // //     e.preventDefault();

// // // //     if (!captchaValue) {
// // // //       toast.error("Please verify that you are not a robot.");
// // // //       return;
// // // //     }

// // // //     dispatch(submitContactForm({ ...formData, captcha: captchaValue }));
// // // //   };

// // // //   // Reusable Classes
// // // //   const cardClass = isDark
// // // //     ? "bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full hover:border-red-500/50 transition-colors"
// // // //     : "bg-white border border-gray-200 shadow-md rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full hover:shadow-xl transition-shadow";

// // // //   const headingClass = isDark ? "text-white" : "text-gray-900";
// // // //   const bodyClass = isDark ? "text-gray-300" : "text-gray-700";
// // // //   const accentClass = "text-red-500";
// // // //   const sectionHeadingAccent = "text-red-500";

// // // //   return (
// // // //     <div
// // // //       className={`min-h-screen overflow-x-hidden transition-colors duration-700
// // // //       ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}`}
// // // //     >
// // // //       <ToastContainer position="top-right" autoClose={5000} theme={isDark ? "dark" : "light"} />

// // // //       {/* ====================== HERO SECTION WITH VIDEO ====================== */}
// // // //       <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
// // // //         <div className="absolute inset-0 z-0">
// // // //           <video
// // // //             autoPlay
// // // //             loop
// // // //             muted
// // // //             playsInline
// // // //             className="absolute inset-0 w-full h-full object-cover"
// // // //           >
// // // //             <source src={heroVideo} type="video/mp4" />
// // // //             Your browser does not support the video tag.
// // // //           </video>

// // // //           <div
// // // //             className={`absolute inset-0 z-10 transition-colors duration-700
// // // //               ${
// // // //                 isDark
// // // //                   ? "bg-gradient-to-br from-black/90 via-black/80 to-black/90"
// // // //                   : "bg-gradient-to-br from-slate-950/95 via-slate-950/90 to-black/70"
// // // //               }`}
// // // //           />
// // // //         </div>

// // // //         <div className="max-w-7xl mx-auto text-center relative z-20">
// // // //           <motion.div
// // // //             initial="hidden"
// // // //             animate="visible"
// // // //             variants={staggerContainer}
// // // //           >
// // // //             <motion.h1
// // // //               variants={fadeInUp}
// // // //               className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-white"
// // // //             >
// // // //               ATLA KNOTS
// // // //               <br />
// // // //               <span
// // // //                 className={
// // // //                   isDark
// // // //                     ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-red-400 to-white"
// // // //                     : "text-red-600"
// // // //                 }
// // // //               >
// // // //                 IT SOLUTIONS
// // // //               </span>
// // // //             </motion.h1>

// // // //             <motion.p
// // // //               variants={fadeInUp}
// // // //               className={`text-xl md:text-2xl max-w-4xl mx-auto mb-10 leading-relaxed
// // // //                 ${isDark ? "text-gray-300" : "text-white"}`}
// // // //             >
// // // //               Making technology impactful, dependable, and easy to use — for
// // // //               businesses of all sizes.
// // // //             </motion.p>

// // // //             <motion.p
// // // //               variants={fadeInUp}
// // // //               className={`text-lg md:text-xl max-w-3xl mx-auto mb-12
// // // //                 ${isDark ? "text-gray-400" : "text-white/90"}`}
// // // //             >
// // // //               We build secure, future-ready software that drives efficiency and
// // // //               digital transformation.
// // // //             </motion.p>

// // // //             <motion.div
// // // //               variants={fadeInUp}
// // // //               className="flex flex-col sm:flex-row gap-6 justify-center"
// // // //             >
// // // //               <button
// // // //                 className={`group px-10 py-5 rounded-full text-lg font-semibold flex items-center gap-3 transition-all
// // // //                   bg-red-600 hover:bg-red-700 active:bg-red-800 text-white`}
// // // //               >
// // // //                 GET STARTED
// // // //                 <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
// // // //               </button>

// // // //               <button
// // // //                 className={`group px-10 py-5 border-2 rounded-full text-lg font-semibold transition-all
// // // //                   ${
// // // //                     isDark
// // // //                       ? "border-red-600/60 text-red-400 hover:border-red-500 hover:text-red-300"
// // // //                       : "border-white/80 text-white hover:bg-white/10"
// // // //                   }`}
// // // //               >
// // // //                 VIEW OUR WORK
// // // //               </button>
// // // //             </motion.div>
// // // //           </motion.div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ====================== SERVICES SECTION ====================== */}
// // // //       <section
// // // //         className={`py-24 px-6 md:px-12 lg:px-24 transition-colors
// // // //         ${isDark ? "bg-gradient-to-b from-black to-gray-950" : "bg-gray-50"}`}
// // // //       >
// // // //         <div className="max-w-7xl mx-auto">
// // // //           <motion.h2
// // // //             initial="hidden"
// // // //             whileInView="visible"
// // // //             viewport={{ once: true }}
// // // //             variants={fadeInUp}
// // // //             className={`text-5xl md:text-6xl font-bold text-center mb-6 ${headingClass}`}
// // // //           >
// // // //             OUR <span className={accentClass}>SERVICES</span>
// // // //           </motion.h2>

// // // //           <motion.p
// // // //             initial="hidden"
// // // //             whileInView="visible"
// // // //             viewport={{ once: true }}
// // // //             variants={fadeInUp}
// // // //             className={`text-xl text-center mb-16 max-w-3xl mx-auto ${bodyClass}`}
// // // //           >
// // // //             Comprehensive IT &amp; BPO solutions — from development to support
// // // //             and infrastructure
// // // //           </motion.p>

// // // //           <div className="space-y-20">
// // // //             {/* IT Services */}
// // // //             <div>
// // // //               <h3 className={`text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight ${sectionHeadingAccent}`}>
// // // //                 1. Information Technology Services
// // // //               </h3>
// // // //               <p className={`text-lg md:text-xl mb-12 text-center max-w-4xl mx-auto leading-relaxed ${bodyClass}`}>
// // // //                 Supporting companies at every stage of the product lifecycle.
// // // //               </p>

// // // //               <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
// // // //                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={cardClass}>
// // // //                   <Code className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Development</h4>
// // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // //                     <li>• Web application development</li>
// // // //                     <li>• Mobile application development</li>
// // // //                     <li>• Secure, scalable &amp; user-friendly solutions</li>
// // // //                   </ul>
// // // //                 </motion.div>

// // // //                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={cardClass}>
// // // //                   <ShieldCheck className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Testing</h4>
// // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // //                     <li>• Web application testing</li>
// // // //                     <li>• Mobile application testing</li>
// // // //                     <li>• Quality, performance &amp; security assurance</li>
// // // //                   </ul>
// // // //                 </motion.div>

// // // //                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={cardClass}>
// // // //                   <Users className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>L2 Support</h4>
// // // //                   <p className={`text-sm md:text-base leading-relaxed max-w-xs ${bodyClass}`}>
// // // //                     Advanced troubleshooting, in-depth diagnosis &amp; root cause resolution.
// // // //                   </p>
// // // //                 </motion.div>

// // // //                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={cardClass}>
// // // //                   <Server className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Product Assistance</h4>
// // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // //                     <li>• Continuous support &amp; maintenance</li>
// // // //                     <li>• Ticket &amp; incident management</li>
// // // //                     <li>• Change management &amp; SLA tracking</li>
// // // //                   </ul>
// // // //                 </motion.div>
// // // //               </div>
// // // //             </div>

// // // //             {/* BPO Services */}
// // // //             <div>
// // // //               <h3 className={`text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight ${sectionHeadingAccent}`}>
// // // //                 2. Business Process Outsourcing (BPO) Services
// // // //               </h3>
// // // //               <p className={`text-lg md:text-xl mb-12 text-center max-w-3xl mx-auto leading-relaxed ${bodyClass}`}>
// // // //                 Streamline operations and enhance customer engagement with reliable support.
// // // //               </p>

// // // //               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
// // // //                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={cardClass}>
// // // //                   <Headphones className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Voice, Chat &amp; Email</h4>
// // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // //                     <li>• Inbound &amp; outbound voice support</li>
// // // //                     <li>• Real-time chat assistance</li>
// // // //                     <li>• Structured email &amp; ticketing</li>
// // // //                   </ul>
// // // //                 </motion.div>

// // // //                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={cardClass}>
// // // //                   <BarChart3 className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Cataloguing &amp; Enrichment</h4>
// // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // //                     <li>• Product descriptions, tags &amp; keywords</li>
// // // //                     <li>• Data validation &amp; cleaning</li>
// // // //                     <li>• Category &amp; attribute enrichment</li>
// // // //                   </ul>
// // // //                 </motion.div>

// // // //                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={cardClass}>
// // // //                   <CheckCircle className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Quality Assurance</h4>
// // // //                   <p className={`text-sm md:text-base leading-relaxed max-w-xs ${bodyClass}`}>
// // // //                     Call/chat audits, SOP/SLA compliance, feedback &amp; continuous improvement.
// // // //                   </p>
// // // //                 </motion.div>
// // // //               </div>
// // // //             </div>

// // // //             {/* Digital Marketing Services */}
// // // //             <div className="text-center max-w-5xl mx-auto">
// // // //               <h3 className={`text-4xl md:text-5xl font-bold mb-8 tracking-tight ${sectionHeadingAccent}`}>
// // // //                 3. Digital &amp; Marketing Services
// // // //               </h3>
// // // //               <p className={`text-lg md:text-xl leading-relaxed ${bodyClass} mb-12`}>
// // // //                 In today’s digital-first world, building a strong online presence is essential for businesses to grow and stay ahead.
// // // //               </p>

// // // //               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
// // // //                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={cardClass}>
// // // //                   <Headphones className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Search Engine Optimization</h4>
// // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // //                     <li>• Boost your website ranking</li>
// // // //                     <li>• Increase organic traffic</li>
// // // //                     <li>• Attract the right audience</li>
// // // //                     <li>• Gain competitive edge</li>
// // // //                   </ul>
// // // //                 </motion.div>

// // // //                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={cardClass}>
// // // //                   <BarChart3 className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Social Media Marketing</h4>
// // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // //                     <li>• Reach the right audience</li>
// // // //                     <li>• Build trust and brand awareness</li>
// // // //                     <li>• Increase engagement</li>
// // // //                     <li>• Convert followers into customers</li>
// // // //                   </ul>
// // // //                 </motion.div>

// // // //                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={cardClass}>
// // // //                   <CheckCircle className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Google &amp; Meta Ads</h4>
// // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // //                     <li>• Targeted ad campaigns</li>
// // // //                     <li>• Improve brand visibility</li>
// // // //                     <li>• Generate quality leads</li>
// // // //                     <li>• Effective PPC strategies</li>
// // // //                   </ul>
// // // //                 </motion.div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ====================== TESTIMONIALS SECTION ====================== */}
// // // //       <section className={`py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-gray-950" : "bg-gray-50"}`}>
// // // //         <div className="max-w-7xl mx-auto">
// // // //           <motion.div
// // // //             initial="hidden"
// // // //             whileInView="visible"
// // // //             viewport={{ once: true }}
// // // //             variants={fadeInUp}
// // // //             className="text-center mb-16"
// // // //           >
// // // //             <h2 className={`text-5xl md:text-6xl font-bold mb-4 ${headingClass}`}>TESTIMONIALS</h2>
// // // //             <p className={`text-2xl font-medium ${accentClass}`}>Real Results, Real Client Experiences.</p>
// // // //             <p className={`mt-6 text-lg max-w-3xl mx-auto ${bodyClass}`}>
// // // //               We focus on performance, transparency, and long-term partnerships.
// // // //             </p>
// // // //           </motion.div>

// // // //           <div className="grid md:grid-cols-3 gap-8">
// // // //             {[
// // // //               { name: "Swadesh Jyoti", text: "A reliable digital marketing partner. ATLA KNOTS understands business needs and works with clear communication." },
// // // //               { name: "Amina", text: "Working with ATLA KNOTS has been a great decision. Their team understands our brand and consistently helps us reach more customers." },
// // // //               { name: "Bharat e-Filing", text: "ATLA KNOTS has helped us improve our digital visibility and attract more clients. Practical and result-focused." },
// // // //             ].map((testimonial, idx) => (
// // // //               <motion.div
// // // //                 key={idx}
// // // //                 initial="hidden"
// // // //                 whileInView="visible"
// // // //                 viewport={{ once: true }}
// // // //                 variants={fadeInUp}
// // // //                 className={`p-8 rounded-3xl h-full flex flex-col ${isDark ? "bg-gray-900 border border-gray-800" : "bg-white shadow-lg border border-gray-100"}`}
// // // //               >
// // // //                 <div className="flex gap-1 text-2xl text-yellow-400 mb-6">★★★★★</div>
// // // //                 <p className={`flex-1 leading-relaxed mb-8 ${bodyClass}`}>"{testimonial.text}"</p>
// // // //                 <p className={`font-semibold text-lg ${headingClass}`}>{testimonial.name}</p>
// // // //               </motion.div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ====================== WHY CHOOSE US ====================== */}
// // // //       <section className={`py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-black" : "bg-white"}`}>
// // // //         <div className="max-w-7xl mx-auto">
// // // //           <motion.h2
// // // //             initial="hidden"
// // // //             whileInView="visible"
// // // //             viewport={{ once: true }}
// // // //             variants={fadeInUp}
// // // //             className={`text-5xl md:text-6xl font-bold text-center mb-16 ${headingClass}`}
// // // //           >
// // // //             WHY <span className={accentClass}>CHOOSE US</span>
// // // //           </motion.h2>

// // // //           <div className="grid md:grid-cols-3 gap-10 lg:gap-16 text-center">
// // // //             {[
// // // //               { icon: Users, title: "True Partnership", desc: "We become an extension of your team — understanding your business deeply." },
// // // //               { icon: Briefcase, title: "Enterprise Expertise", desc: "Proven experience in BFSI, retail, government & PSU projects." },
// // // //               { icon: HardDrive, title: "Long-term Support", desc: "24×7 production support, SLA-based maintenance & AMS." },
// // // //             ].map((item, idx) => (
// // // //               <motion.div
// // // //                 key={idx}
// // // //                 initial="hidden"
// // // //                 whileInView="visible"
// // // //                 viewport={{ once: true }}
// // // //                 variants={fadeInUp}
// // // //                 className={`p-10 rounded-3xl border transition-all ${isDark ? "bg-gray-900 border-gray-800 hover:border-red-500/30" : "bg-white border-gray-200 shadow-md hover:shadow-lg"}`}
// // // //               >
// // // //                 <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 mx-auto ${isDark ? "bg-gray-800" : "bg-red-50"}`}>
// // // //                   <item.icon className={`w-10 h-10 ${accentClass}`} />
// // // //                 </div>
// // // //                 <h3 className={`text-3xl font-bold mb-5 ${headingClass}`}>{item.title}</h3>
// // // //                 <p className={`leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>{item.desc}</p>
// // // //               </motion.div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ====================== LET'S DISCUSS YOUR PROJECT (CONTACT FORM) ====================== */}
// // // //       <section className={`py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-black" : "bg-white"}`}>
// // // //         <div className="max-w-7xl mx-auto">
// // // //           <div className="grid lg:grid-cols-2 gap-16 items-start">
// // // //             {/* Form */}
// // // //             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
// // // //               <h2 className={`text-5xl md:text-6xl font-bold mb-3 ${headingClass}`}>Let's Discuss Your Project</h2>
// // // //               <p className={`text-xl mb-10 ${bodyClass}`}>Tell us about your requirements. Our team will get back to you shortly.</p>

// // // //               <form onSubmit={handleSubmit} className="space-y-6">
// // // //                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
// // // //                   <input
// // // //                     type="text"
// // // //                     name="usernamee"
// // // //                     value={formData.usernamee}
// // // //                     onChange={handleChange}
// // // //                     placeholder="Your Name"
// // // //                     required
// // // //                     disabled={loading}
// // // //                     className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-red-500 transition-colors ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
// // // //                   />
// // // //                   <input
// // // //                     type="email"
// // // //                     name="email"
// // // //                     value={formData.email}
// // // //                     onChange={handleChange}
// // // //                     placeholder="Your Email"
// // // //                     required
// // // //                     disabled={loading}
// // // //                     className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-red-500 transition-colors ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
// // // //                   />
// // // //                 </div>

// // // //                 <input
// // // //                   type="tel"
// // // //                   name="phone"
// // // //                   value={formData.phone}
// // // //                   onChange={handleChange}
// // // //                   placeholder="Mobile Number"
// // // //                   required
// // // //                   disabled={loading}
// // // //                   className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-red-500 transition-colors ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
// // // //                 />

// // // //                 <input
// // // //                   type="text"
// // // //                   name="subject"
// // // //                   value={formData.subject}
// // // //                   onChange={handleChange}
// // // //                   placeholder="Subject (Optional)"
// // // //                   disabled={loading}
// // // //                   className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-red-500 transition-colors ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
// // // //                 />

// // // //                 <textarea
// // // //                   name="message"
// // // //                   value={formData.message}
// // // //                   onChange={handleChange}
// // // //                   rows={5}
// // // //                   placeholder="Tell us about your project..."
// // // //                   required
// // // //                   disabled={loading}
// // // //                   className={`w-full px-6 py-4 rounded-3xl border focus:outline-none focus:border-red-500 transition-colors resize-y ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
// // // //                 />

// // // //                 <ReCAPTCHA
// // // //                   sitekey="6LfP7nEsAAAAAOLxpk34nW3cU3uYXON85c8n4D2H"
// // // //                   onChange={handleCaptchaChange}
// // // //                   theme={isDark ? "dark" : "light"}
// // // //                 />

// // // //                 <div className="flex flex-col sm:flex-row gap-4 pt-4">
// // // //                   <button
// // // //                     type="submit"
// // // //                     disabled={loading}
// // // //                     className={`flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-5 rounded-2xl transition-all text-lg ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
// // // //                   >
// // // //                     {loading ? "Sending..." : "Submit Inquiry"}
// // // //                   </button>

// // // //                   <button
// // // //                     type="button"
// // // //                     onClick={() => window.open("https://wa.me/917869636070", "_blank")}
// // // //                     className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-5 rounded-2xl transition-all text-lg flex items-center justify-center gap-3"
// // // //                   >
// // // //                     Chat on WhatsApp
// // // //                   </button>
// // // //                 </div>
// // // //               </form>
// // // //             </motion.div>

// // // //             {/* Map + Address */}
// // // //             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-8">
// // // //               <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 h-[420px]">
// // // //                 <iframe
// // // //                   title="ATLA Knots - MP Nagar, Bhopal"
// // // //                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.8!2d77.432!3d23.198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631f8a00000001%3A0x0!2sM.P.+Nagar+Zone+2%2C+Bhopal%2C+Madhya+Pradesh+462011!5e0!3m2!1sen!2sin!4v1738000000000!5m2!1sen!2sin"
// // // //                   width="100%"
// // // //                   height="100%"
// // // //                   style={{ border: 0 }}
// // // //                   allowFullScreen=""
// // // //                   loading="lazy"
// // // //                   referrerPolicy="no-referrer-when-downgrade"
// // // //                 />
// // // //               </div>

// // // //               <div className={`p-8 rounded-3xl ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
// // // //                 <h3 className={`text-2xl font-semibold mb-4 ${headingClass}`}>ATLA Knots Solutions</h3>
// // // //                 <p className={`leading-relaxed ${bodyClass}`}>
// // // //                   103, Goyal Vihar,<br />
// // // //                   Plot No 31-C, Zone 2,<br />
// // // //                   M.P. Nagar, Bhopal - 462011<br />
// // // //                   Madhya Pradesh, India
// // // //                 </p>
// // // //                 <div className="mt-6 space-y-2">
// // // //                   <a href="tel:+917869636070" className="block text-red-500 hover:underline">+91 78696 36070</a>
// // // //                   <a href="mailto:admin@atlaknots.com" className="block text-red-500 hover:underline">admin@atlaknots.com</a>
// // // //                 </div>
// // // //               </div>
// // // //             </motion.div>
// // // //           </div>
// // // //         </div>
// // // //       </section>
// // // //     </div>
// // // //   );
// // // // }

// // // // import React, { useEffect, useState } from "react";
// // // // import { motion, AnimatePresence } from "framer-motion";
// // // // import { useTheme } from "../context/ThemeContext";
// // // // import {
// // // //   ArrowRight,
// // // //   X,
// // // //   Code,
// // // //   ShieldCheck,
// // // //   Users,
// // // //   Server,
// // // //   Headphones,
// // // //   BarChart3,
// // // //   CheckCircle,
// // // //   Briefcase,
// // // //   HardDrive,
// // // // } from "lucide-react";

// // // // import heroVideo from "../assets/herosectionvideo.mp4";

// // // // // ReCAPTCHA & Toast
// // // // import ReCAPTCHA from "react-google-recaptcha";
// // // // import { ToastContainer, toast } from "react-toastify";
// // // // import "react-toastify/dist/ReactToastify.css";

// // // // // Redux
// // // // import { useDispatch, useSelector } from "react-redux";
// // // // import {
// // // //   updateField,
// // // //   setCaptcha,
// // // //   clearMessages,
// // // //   submitContactForm,
// // // // } from "./Redux/contact/contactSlice.js";

// // // // const fadeInUp = {
// // // //   hidden: { opacity: 0, y: 60 },
// // // //   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// // // // };

// // // // const staggerContainer = {
// // // //   hidden: {},
// // // //   visible: { transition: { staggerChildren: 0.15 } },
// // // // };

// // // // export default function Home() {
// // // //   const { isDark } = useTheme();
// // // //   const dispatch = useDispatch();

// // // //   const { formData, captchaValue, loading, successMessage, errorMessage } =
// // // //     useSelector((state) => state.contact);

// // // //   const [showPopup, setShowPopup] = useState(false);

// // // //   // Popup appears after 1.5 seconds
// // // //   useEffect(() => {
// // // //     const timer = setTimeout(() => setShowPopup(true), 1500);
// // // //     return () => clearTimeout(timer);
// // // //   }, []);

// // // //   // Toast Notifications
// // // //   useEffect(() => {
// // // //     if (successMessage) {
// // // //       toast.success(successMessage, { position: "top-right", autoClose: 5000 });
// // // //       dispatch(clearMessages());
// // // //       setShowPopup(false);
// // // //     }
// // // //   }, [successMessage, dispatch]);

// // // //   useEffect(() => {
// // // //     if (errorMessage) {
// // // //       toast.error(errorMessage, { position: "top-right", autoClose: 7000 });
// // // //       dispatch(clearMessages());
// // // //     }
// // // //   }, [errorMessage, dispatch]);

// // // //   const handleChange = (e) => {
// // // //     dispatch(updateField({ name: e.target.name, value: e.target.value }));
// // // //   };

// // // //   const handleCaptchaChange = (value) => {
// // // //     dispatch(setCaptcha(value));
// // // //   };

// // // //   const handleSubmit = (e) => {
// // // //     e.preventDefault();
// // // //     if (!captchaValue) {
// // // //       toast.error("Please verify that you are not a robot.");
// // // //       return;
// // // //     }
// // // //     dispatch(submitContactForm({ ...formData, captcha: captchaValue }));
// // // //   };

// // // //   // Reusable Classes
// // // //   const cardClass = isDark
// // // //     ? "bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full hover:border-red-500/50 transition-colors"
// // // //     : "bg-white border border-gray-200 shadow-md rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full hover:shadow-xl transition-shadow";

// // // //   const headingClass = isDark ? "text-white" : "text-gray-900";
// // // //   const bodyClass = isDark ? "text-gray-300" : "text-gray-700";
// // // //   const accentClass = "text-red-500";
// // // //   const sectionHeadingAccent = "text-red-500";

// // // //   return (
// // // //     <div
// // // //       className={`min-h-screen overflow-x-hidden transition-colors duration-700
// // // //       ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}`}
// // // //     >
// // // //       <ToastContainer position="top-right" autoClose={5000} theme={isDark ? "dark" : "light"} />

// // // //       {/* ====================== HERO SECTION WITH VIDEO ====================== */}
// // // //       <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
// // // //         <div className="absolute inset-0 z-0">
// // // //           <video
// // // //             autoPlay
// // // //             loop
// // // //             muted
// // // //             playsInline
// // // //             className="absolute inset-0 w-full h-full object-cover"
// // // //           >
// // // //             <source src={heroVideo} type="video/mp4" />
// // // //             Your browser does not support the video tag.
// // // //           </video>

// // // //           <div
// // // //             className={`absolute inset-0 z-10 transition-colors duration-700
// // // //               ${
// // // //                 isDark
// // // //                   ? "bg-gradient-to-br from-black/90 via-black/80 to-black/90"
// // // //                   : "bg-gradient-to-br from-slate-950/95 via-slate-950/90 to-black/70"
// // // //               }`}
// // // //           />
// // // //         </div>

// // // //         <div className="max-w-7xl mx-auto text-center relative z-20">
// // // //           <motion.div
// // // //             initial="hidden"
// // // //             animate="visible"
// // // //             variants={staggerContainer}
// // // //           >
// // // //             <motion.h1
// // // //               variants={fadeInUp}
// // // //               className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-white"
// // // //             >
// // // //               ATLA KNOTS
// // // //               <br />
// // // //               <span
// // // //                 className={
// // // //                   isDark
// // // //                     ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-red-400 to-white"
// // // //                     : "text-red-600"
// // // //                 }
// // // //               >
// // // //                 IT SOLUTIONS
// // // //               </span>
// // // //             </motion.h1>

// // // //             <motion.p
// // // //               variants={fadeInUp}
// // // //               className={`text-xl md:text-2xl max-w-4xl mx-auto mb-10 leading-relaxed
// // // //                 ${isDark ? "text-gray-300" : "text-white"}`}
// // // //             >
// // // //               Making technology impactful, dependable, and easy to use — for
// // // //               businesses of all sizes.
// // // //             </motion.p>

// // // //             <motion.p
// // // //               variants={fadeInUp}
// // // //               className={`text-lg md:text-xl max-w-3xl mx-auto mb-12
// // // //                 ${isDark ? "text-gray-400" : "text-white/90"}`}
// // // //             >
// // // //               We build secure, future-ready software that drives efficiency and
// // // //               digital transformation.
// // // //             </motion.p>

// // // //             <motion.div
// // // //               variants={fadeInUp}
// // // //               className="flex flex-col sm:flex-row gap-6 justify-center"
// // // //             >
// // // //               <button
// // // //                 onClick={() => setShowPopup(true)}
// // // //                 className="group px-10 py-5 rounded-full text-lg font-semibold flex items-center gap-3 transition-all
// // // //                   bg-red-600 hover:bg-red-700 active:bg-red-800 text-white"
// // // //               >
// // // //                 GET STARTED
// // // //                 <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
// // // //               </button>

// // // //               <button
// // // //                 className={`group px-10 py-5 border-2 rounded-full text-lg font-semibold transition-all
// // // //                   ${
// // // //                     isDark
// // // //                       ? "border-red-600/60 text-red-400 hover:border-red-500 hover:text-red-300"
// // // //                       : "border-white/80 text-white hover:bg-white/10"
// // // //                   }`}
// // // //               >
// // // //                 VIEW OUR WORK
// // // //               </button>
// // // //             </motion.div>
// // // //           </motion.div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ====================== SERVICES SECTION ====================== */}
// // // //       <section
// // // //         className={`py-24 px-6 md:px-12 lg:px-24 transition-colors
// // // //         ${isDark ? "bg-gradient-to-b from-black to-gray-950" : "bg-gray-50"}`}
// // // //       >
// // // //         <div className="max-w-7xl mx-auto">
// // // //           <motion.h2
// // // //             initial="hidden"
// // // //             whileInView="visible"
// // // //             viewport={{ once: true }}
// // // //             variants={fadeInUp}
// // // //             className={`text-5xl md:text-6xl font-bold text-center mb-6 ${headingClass}`}
// // // //           >
// // // //             OUR <span className={accentClass}>SERVICES</span>
// // // //           </motion.h2>

// // // //           <motion.p
// // // //             initial="hidden"
// // // //             whileInView="visible"
// // // //             viewport={{ once: true }}
// // // //             variants={fadeInUp}
// // // //             className={`text-xl text-center mb-16 max-w-3xl mx-auto ${bodyClass}`}
// // // //           >
// // // //             Comprehensive IT &amp; BPO solutions — from development to support
// // // //             and infrastructure
// // // //           </motion.p>

// // // //           <div className="space-y-20">
// // // //             {/* IT Services */}
// // // //             <div>
// // // //               <h3 className={`text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight ${sectionHeadingAccent}`}>
// // // //                 1. Information Technology Services
// // // //               </h3>
// // // //               <p className={`text-lg md:text-xl mb-12 text-center max-w-4xl mx-auto leading-relaxed ${bodyClass}`}>
// // // //                 Supporting companies at every stage of the product lifecycle.
// // // //               </p>

// // // //               <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
// // // //                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={cardClass}>
// // // //                   <Code className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Development</h4>
// // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // //                     <li>• Web application development</li>
// // // //                     <li>• Mobile application development</li>
// // // //                     <li>• Secure, scalable &amp; user-friendly solutions</li>
// // // //                   </ul>
// // // //                 </motion.div>

// // // //                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={cardClass}>
// // // //                   <ShieldCheck className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Testing</h4>
// // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // //                     <li>• Web application testing</li>
// // // //                     <li>• Mobile application testing</li>
// // // //                     <li>• Quality, performance &amp; security assurance</li>
// // // //                   </ul>
// // // //                 </motion.div>

// // // //                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={cardClass}>
// // // //                   <Users className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>L2 Support</h4>
// // // //                   <p className={`text-sm md:text-base leading-relaxed max-w-xs ${bodyClass}`}>
// // // //                     Advanced troubleshooting, in-depth diagnosis &amp; root cause resolution.
// // // //                   </p>
// // // //                 </motion.div>

// // // //                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={cardClass}>
// // // //                   <Server className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Product Assistance</h4>
// // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // //                     <li>• Continuous support &amp; maintenance</li>
// // // //                     <li>• Ticket &amp; incident management</li>
// // // //                     <li>• Change management &amp; SLA tracking</li>
// // // //                   </ul>
// // // //                 </motion.div>
// // // //               </div>
// // // //             </div>

// // // //             {/* BPO Services */}
// // // //             <div>
// // // //               <h3 className={`text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight ${sectionHeadingAccent}`}>
// // // //                 2. Business Process Outsourcing (BPO) Services
// // // //               </h3>
// // // //               <p className={`text-lg md:text-xl mb-12 text-center max-w-3xl mx-auto leading-relaxed ${bodyClass}`}>
// // // //                 Streamline operations and enhance customer engagement with reliable support.
// // // //               </p>

// // // //               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
// // // //                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={cardClass}>
// // // //                   <Headphones className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Voice, Chat &amp; Email</h4>
// // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // //                     <li>• Inbound &amp; outbound voice support</li>
// // // //                     <li>• Real-time chat assistance</li>
// // // //                     <li>• Structured email &amp; ticketing</li>
// // // //                   </ul>
// // // //                 </motion.div>

// // // //                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={cardClass}>
// // // //                   <BarChart3 className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Cataloguing &amp; Enrichment</h4>
// // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // //                     <li>• Product descriptions, tags &amp; keywords</li>
// // // //                     <li>• Data validation &amp; cleaning</li>
// // // //                     <li>• Category &amp; attribute enrichment</li>
// // // //                   </ul>
// // // //                 </motion.div>

// // // //                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={cardClass}>
// // // //                   <CheckCircle className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Quality Assurance</h4>
// // // //                   <p className={`text-sm md:text-base leading-relaxed max-w-xs ${bodyClass}`}>
// // // //                     Call/chat audits, SOP/SLA compliance, feedback &amp; continuous improvement.
// // // //                   </p>
// // // //                 </motion.div>
// // // //               </div>
// // // //             </div>

// // // //             {/* Digital Marketing Services */}
// // // //             <div className="text-center max-w-5xl mx-auto">
// // // //               <h3 className={`text-4xl md:text-5xl font-bold mb-8 tracking-tight ${sectionHeadingAccent}`}>
// // // //                 3. Digital &amp; Marketing Services
// // // //               </h3>
// // // //               <p className={`text-lg md:text-xl leading-relaxed ${bodyClass} mb-12`}>
// // // //                 In today’s digital-first world, building a strong online presence is essential for businesses to grow and stay ahead.
// // // //               </p>

// // // //               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
// // // //                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={cardClass}>
// // // //                   <Headphones className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Search Engine Optimization</h4>
// // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // //                     <li>• Boost your website ranking</li>
// // // //                     <li>• Increase organic traffic</li>
// // // //                     <li>• Attract the right audience</li>
// // // //                     <li>• Gain competitive edge</li>
// // // //                   </ul>
// // // //                 </motion.div>

// // // //                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={cardClass}>
// // // //                   <BarChart3 className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Social Media Marketing</h4>
// // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // //                     <li>• Reach the right audience</li>
// // // //                     <li>• Build trust and brand awareness</li>
// // // //                     <li>• Increase engagement</li>
// // // //                     <li>• Convert followers into customers</li>
// // // //                   </ul>
// // // //                 </motion.div>

// // // //                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={cardClass}>
// // // //                   <CheckCircle className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Google &amp; Meta Ads</h4>
// // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // //                     <li>• Targeted ad campaigns</li>
// // // //                     <li>• Improve brand visibility</li>
// // // //                     <li>• Generate quality leads</li>
// // // //                     <li>• Effective PPC strategies</li>
// // // //                   </ul>
// // // //                 </motion.div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ====================== TESTIMONIALS SECTION ====================== */}
// // // //       <section className={`py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-gray-950" : "bg-gray-50"}`}>
// // // //         <div className="max-w-7xl mx-auto">
// // // //           <motion.div
// // // //             initial="hidden"
// // // //             whileInView="visible"
// // // //             viewport={{ once: true }}
// // // //             variants={fadeInUp}
// // // //             className="text-center mb-16"
// // // //           >
// // // //             <h2 className={`text-5xl md:text-6xl font-bold mb-4 ${headingClass}`}>TESTIMONIALS</h2>
// // // //             <p className={`text-2xl font-medium ${accentClass}`}>Real Results, Real Client Experiences.</p>
// // // //             <p className={`mt-6 text-lg max-w-3xl mx-auto ${bodyClass}`}>
// // // //               We focus on performance, transparency, and long-term partnerships.
// // // //             </p>
// // // //           </motion.div>

// // // //           <div className="grid md:grid-cols-3 gap-8">
// // // //             {[
// // // //               { name: "Swadesh Jyoti", text: "A reliable digital marketing partner. ATLA KNOTS understands business needs and works with clear communication." },
// // // //               { name: "Amina", text: "Working with ATLA KNOTS has been a great decision. Their team understands our brand and consistently helps us reach more customers." },
// // // //               { name: "Bharat e-Filing", text: "ATLA KNOTS has helped us improve our digital visibility and attract more clients. Practical and result-focused." },
// // // //             ].map((testimonial, idx) => (
// // // //               <motion.div
// // // //                 key={idx}
// // // //                 initial="hidden"
// // // //                 whileInView="visible"
// // // //                 viewport={{ once: true }}
// // // //                 variants={fadeInUp}
// // // //                 className={`p-8 rounded-3xl h-full flex flex-col ${isDark ? "bg-gray-900 border border-gray-800" : "bg-white shadow-lg border border-gray-100"}`}
// // // //               >
// // // //                 <div className="flex gap-1 text-2xl text-yellow-400 mb-6">★★★★★</div>
// // // //                 <p className={`flex-1 leading-relaxed mb-8 ${bodyClass}`}>"{testimonial.text}"</p>
// // // //                 <p className={`font-semibold text-lg ${headingClass}`}>{testimonial.name}</p>
// // // //               </motion.div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ====================== WHY CHOOSE US ====================== */}
// // // //       <section className={`py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-black" : "bg-white"}`}>
// // // //         <div className="max-w-7xl mx-auto">
// // // //           <motion.h2
// // // //             initial="hidden"
// // // //             whileInView="visible"
// // // //             viewport={{ once: true }}
// // // //             variants={fadeInUp}
// // // //             className={`text-5xl md:text-6xl font-bold text-center mb-16 ${headingClass}`}
// // // //           >
// // // //             WHY <span className={accentClass}>CHOOSE US</span>
// // // //           </motion.h2>

// // // //           <div className="grid md:grid-cols-3 gap-10 lg:gap-16 text-center">
// // // //             {[
// // // //               { icon: Users, title: "True Partnership", desc: "We become an extension of your team — understanding your business deeply." },
// // // //               { icon: Briefcase, title: "Enterprise Expertise", desc: "Proven experience in BFSI, retail, government & PSU projects." },
// // // //               { icon: HardDrive, title: "Long-term Support", desc: "24×7 production support, SLA-based maintenance & AMS." },
// // // //             ].map((item, idx) => (
// // // //               <motion.div
// // // //                 key={idx}
// // // //                 initial="hidden"
// // // //                 whileInView="visible"
// // // //                 viewport={{ once: true }}
// // // //                 variants={fadeInUp}
// // // //                 className={`p-10 rounded-3xl border transition-all ${isDark ? "bg-gray-900 border-gray-800 hover:border-red-500/30" : "bg-white border-gray-200 shadow-md hover:shadow-lg"}`}
// // // //               >
// // // //                 <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 mx-auto ${isDark ? "bg-gray-800" : "bg-red-50"}`}>
// // // //                   <item.icon className={`w-10 h-10 ${accentClass}`} />
// // // //                 </div>
// // // //                 <h3 className={`text-3xl font-bold mb-5 ${headingClass}`}>{item.title}</h3>
// // // //                 <p className={`leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>{item.desc}</p>
// // // //               </motion.div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ====================== LET'S DISCUSS YOUR PROJECT ====================== */}
// // // //       <section className={`py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-black" : "bg-white"}`}>
// // // //         <div className="max-w-7xl mx-auto">
// // // //           <div className="grid lg:grid-cols-2 gap-16 items-start">
// // // //             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
// // // //               <h2 className={`text-5xl md:text-6xl font-bold mb-3 ${headingClass}`}>Let's Discuss Your Project</h2>
// // // //               <p className={`text-xl mb-10 ${bodyClass}`}>Tell us about your requirements. Our team will get back to you shortly.</p>

// // // //               <form onSubmit={handleSubmit} className="space-y-6">
// // // //                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
// // // //                   <input
// // // //                     type="text"
// // // //                     name="usernamee"
// // // //                     value={formData.usernamee}
// // // //                     onChange={handleChange}
// // // //                     placeholder="Your Name"
// // // //                     required
// // // //                     disabled={loading}
// // // //                     className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-red-500 transition-colors ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
// // // //                   />
// // // //                   <input
// // // //                     type="email"
// // // //                     name="email"
// // // //                     value={formData.email}
// // // //                     onChange={handleChange}
// // // //                     placeholder="Your Email"
// // // //                     required
// // // //                     disabled={loading}
// // // //                     className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-red-500 transition-colors ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
// // // //                   />
// // // //                 </div>

// // // //                 <input
// // // //                   type="tel"
// // // //                   name="phone"
// // // //                   value={formData.phone}
// // // //                   onChange={handleChange}
// // // //                   placeholder="Mobile Number"
// // // //                   required
// // // //                   disabled={loading}
// // // //                   className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-red-500 transition-colors ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
// // // //                 />

// // // //                 <input
// // // //                   type="text"
// // // //                   name="subject"
// // // //                   value={formData.subject}
// // // //                   onChange={handleChange}
// // // //                   placeholder="Subject (Optional)"
// // // //                   disabled={loading}
// // // //                   className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-red-500 transition-colors ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
// // // //                 />

// // // //                 <textarea
// // // //                   name="message"
// // // //                   value={formData.message}
// // // //                   onChange={handleChange}
// // // //                   rows={5}
// // // //                   placeholder="Tell us about your project..."
// // // //                   required
// // // //                   disabled={loading}
// // // //                   className={`w-full px-6 py-4 rounded-3xl border focus:outline-none focus:border-red-500 transition-colors resize-y ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
// // // //                 />

// // // //                 <ReCAPTCHA
// // // //                   sitekey="6LfP7nEsAAAAAOLxpk34nW3cU3uYXON85c8n4D2H"
// // // //                   onChange={handleCaptchaChange}
// // // //                   theme={isDark ? "dark" : "light"}
// // // //                 />

// // // //                 <div className="flex flex-col sm:flex-row gap-4 pt-4">
// // // //                   <button
// // // //                     type="submit"
// // // //                     disabled={loading}
// // // //                     className={`flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-5 rounded-2xl transition-all text-lg ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
// // // //                   >
// // // //                     {loading ? "Sending..." : "Submit Inquiry"}
// // // //                   </button>

// // // //                   <button
// // // //                     type="button"
// // // //                     onClick={() => window.open("https://wa.me/917869636070", "_blank")}
// // // //                     className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-5 rounded-2xl transition-all text-lg flex items-center justify-center gap-3"
// // // //                   >
// // // //                     Chat on WhatsApp
// // // //                   </button>
// // // //                 </div>
// // // //               </form>
// // // //             </motion.div>

// // // //             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-8">
// // // //               <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 h-[420px]">
// // // //                 <iframe
// // // //                   title="ATLA Knots - MP Nagar, Bhopal"
// // // //                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.8!2d77.432!3d23.198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631f8a00000001%3A0x0!2sM.P.+Nagar+Zone+2%2C+Bhopal%2C+Madhya+Pradesh+462011!5e0!3m2!1sen!2sin!4v1738000000000!5m2!1sen!2sin"
// // // //                   width="100%"
// // // //                   height="100%"
// // // //                   style={{ border: 0 }}
// // // //                   allowFullScreen=""
// // // //                   loading="lazy"
// // // //                   referrerPolicy="no-referrer-when-downgrade"
// // // //                 />
// // // //               </div>

// // // //               <div className={`p-8 rounded-3xl ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
// // // //                 <h3 className={`text-2xl font-semibold mb-4 ${headingClass}`}>ATLA Knots Solutions</h3>
// // // //                 <p className={`leading-relaxed ${bodyClass}`}>
// // // //                   103, Goyal Vihar,<br />
// // // //                   Plot No 31-C, Zone 2,<br />
// // // //                   M.P. Nagar, Bhopal - 462011<br />
// // // //                   Madhya Pradesh, India
// // // //                 </p>
// // // //                 <div className="mt-6 space-y-2">
// // // //                   <a href="tel:+917869636070" className="block text-red-500 hover:underline">+91 78696 36070</a>
// // // //                   <a href="mailto:admin@atlaknots.com" className="block text-red-500 hover:underline">admin@atlaknots.com</a>
// // // //                 </div>
// // // //               </div>
// // // //             </motion.div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ====================== IMPROVED SMALLER POPUP ====================== */}
// // // //       <AnimatePresence>
// // // //         {showPopup && (
// // // //           <motion.div
// // // //             initial={{ opacity: 0 }}
// // // //             animate={{ opacity: 1 }}
// // // //             exit={{ opacity: 0 }}
// // // //             className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
// // // //             onClick={() => setShowPopup(false)}
// // // //           >
// // // //             <motion.div
// // // //               initial={{ scale: 0.85, y: 30, opacity: 0 }}
// // // //               animate={{ scale: 1, y: 0, opacity: 1 }}
// // // //               exit={{ scale: 0.85, y: 30, opacity: 0 }}
// // // //               transition={{ duration: 0.3 }}
// // // //               className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
// // // //               onClick={(e) => e.stopPropagation()}
// // // //             >
// // // //               {/* Red Banner */}
// // // //               <div className="bg-gradient-to-r from-red-600 to-rose-600 text-white px-6 py-4 flex items-center justify-between">
// // // //                 <div className="font-bold text-lg">EXCLUSIVE OFFER</div>
// // // //                 <button
// // // //                   onClick={() => setShowPopup(false)}
// // // //                   className="hover:bg-white/20 p-1 rounded-full transition"
// // // //                 >
// // // //                   <X size={26} />
// // // //                 </button>
// // // //               </div>

// // // //               {/* Popup Content */}
// // // //               <div className="p-8">
// // // //                 <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
// // // //                   Get up to <span className="text-red-600">60% OFF</span>
// // // //                 </h2>
// // // //                 <p className="text-xl text-orange-600 font-semibold mt-2">Limited Time Offer!</p>

// // // //                 <div className="my-8 space-y-4">
// // // //                   <div className="flex items-center gap-4 bg-orange-50 dark:bg-orange-950/30 p-4 rounded-2xl">
// // // //                     <span className="text-3xl">🎯</span>
// // // //                     <div>
// // // //                       <p className="font-semibold">Top Digital Marketing Institute</p>
// // // //                     </div>
// // // //                   </div>
// // // //                   <div className="flex items-center gap-4 bg-orange-50 dark:bg-orange-950/30 p-4 rounded-2xl">
// // // //                     <span className="text-3xl">🏢</span>
// // // //                     <div>
// // // //                       <p className="font-semibold">Agency Based Training</p>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>

// // // //                 <form onSubmit={handleSubmit} className="space-y-5">
// // // //                   <input
// // // //                     type="text"
// // // //                     name="usernamee"
// // // //                     value={formData.usernamee}
// // // //                     onChange={handleChange}
// // // //                     placeholder="Full Name *"
// // // //                     required
// // // //                     disabled={loading}
// // // //                     className="w-full px-5 py-3.5 rounded-2xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:border-red-500 outline-none"
// // // //                   />

// // // //                   <input
// // // //                     type="email"
// // // //                     name="email"
// // // //                     value={formData.email}
// // // //                     onChange={handleChange}
// // // //                     placeholder="Email ID *"
// // // //                     required
// // // //                     disabled={loading}
// // // //                     className="w-full px-5 py-3.5 rounded-2xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:border-red-500 outline-none"
// // // //                   />

// // // //                   <input
// // // //                     type="tel"
// // // //                     name="phone"
// // // //                     value={formData.phone}
// // // //                     onChange={handleChange}
// // // //                     placeholder="Mobile Number *"
// // // //                     required
// // // //                     disabled={loading}
// // // //                     className="w-full px-5 py-3.5 rounded-2xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:border-red-500 outline-none"
// // // //                   />

// // // //                   <ReCAPTCHA
// // // //                     sitekey="6LfP7nEsAAAAAOLxpk34nW3cU3uYXON85c8n4D2H"
// // // //                     onChange={handleCaptchaChange}
// // // //                     theme={isDark ? "dark" : "light"}
// // // //                   />

// // // //                   <button
// // // //                     type="submit"
// // // //                     disabled={loading}
// // // //                     className="w-full py-4 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-semibold rounded-2xl text-lg transition-all shadow-md"
// // // //                   >
// // // //                     {loading ? "Submitting..." : "Submit Enquiry"}
// // // //                   </button>
// // // //                 </form>

// // // //                 <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
// // // //                   I agree to Terms & Conditions and Privacy Policy
// // // //                 </p>
// // // //               </div>
// // // //             </motion.div>
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>
// // // //     </div>
// // // //   );
// // // // }

// // // import React, { useEffect, useState } from "react";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import { useTheme } from "../context/ThemeContext";
// // // import {
// // //   ArrowRight,
// // //   X,
// // //   Code,
// // //   ShieldCheck,
// // //   Users,
// // //   Server,
// // //   Headphones,
// // //   BarChart3,
// // //   CheckCircle,
// // //   Briefcase,
// // //   HardDrive,
// // // } from "lucide-react";
// // // import heroVideo from "../assets/herosectionvideo.mp4";

// // // // ReCAPTCHA & Toast
// // // import ReCAPTCHA from "react-google-recaptcha";
// // // import { ToastContainer, toast } from "react-toastify";
// // // import "react-toastify/dist/ReactToastify.css";

// // // // Redux
// // // import { useDispatch, useSelector } from "react-redux";
// // // import {
// // //   updateField,
// // //   setCaptcha,
// // //   clearMessages,
// // //   submitContactForm,
// // // } from "./Redux/contact/contactSlice.js";

// // // const fadeInUp = {
// // //   hidden: { opacity: 0, y: 60 },
// // //   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// // // };

// // // const staggerContainer = {
// // //   hidden: {},
// // //   visible: { transition: { staggerChildren: 0.15 } },
// // // };

// // // export default function Home() {
// // //   const { isDark } = useTheme();
// // //   const dispatch = useDispatch();
// // //   const { formData, captchaValue, loading, successMessage, errorMessage } =
// // //     useSelector((state) => state.contact);

// // //   const [showPopup, setShowPopup] = useState(false);

// // //   // Popup appears after 1.5 seconds
// // //   useEffect(() => {
// // //     const timer = setTimeout(() => setShowPopup(true), 1500);
// // //     return () => clearTimeout(timer);
// // //   }, []);

// // //   // Toast Notifications
// // //   useEffect(() => {
// // //     if (successMessage) {
// // //       toast.success(successMessage, { position: "top-right", autoClose: 5000 });
// // //       dispatch(clearMessages());
// // //       setShowPopup(false);
// // //     }
// // //   }, [successMessage, dispatch]);

// // //   useEffect(() => {
// // //     if (errorMessage) {
// // //       toast.error(errorMessage, { position: "top-right", autoClose: 7000 });
// // //       dispatch(clearMessages());
// // //     }
// // //   }, [errorMessage, dispatch]);

// // //   const handleChange = (e) => {
// // //     dispatch(updateField({ name: e.target.name, value: e.target.value }));
// // //   };

// // //   const handleCaptchaChange = (value) => {
// // //     dispatch(setCaptcha(value));
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     if (!captchaValue) {
// // //       toast.error("Please verify that you are not a robot.");
// // //       return;
// // //     }
// // //     dispatch(submitContactForm({ ...formData, captcha: captchaValue }));
// // //   };

// // //   // Reusable Classes
// // //   const cardClass = isDark
// // //     ? "bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full hover:border-red-500/50 transition-colors"
// // //     : "bg-white border border-gray-200 shadow-md rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full hover:shadow-xl transition-shadow";

// // //   const headingClass = isDark ? "text-white" : "text-gray-900";
// // //   const bodyClass = isDark ? "text-gray-300" : "text-gray-700";
// // //   const accentClass = "text-red-500";
// // //   const sectionHeadingAccent = "text-red-500";

// // //   return (
// // //     <div
// // //       className={`min-h-screen overflow-x-hidden transition-colors duration-700
// // //       ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}`}
// // //     >
// // //       <ToastContainer position="top-right" autoClose={5000} theme={isDark ? "dark" : "light"} />

// // //       {/* ====================== HERO SECTION WITH VIDEO ====================== */}
// // //       <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
// // //         <div className="absolute inset-0 z-0">
// // //           <video
// // //             autoPlay
// // //             loop
// // //             muted
// // //             playsInline
// // //             className="absolute inset-0 w-full h-full object-cover"
// // //           >
// // //             <source src={heroVideo} type="video/mp4" />
// // //             Your browser does not support the video tag.
// // //           </video>
// // //           <div
// // //             className={`absolute inset-0 z-10 transition-colors duration-700
// // //               ${
// // //                 isDark
// // //                   ? "bg-gradient-to-br from-black/90 via-black/80 to-black/90"
// // //                   : "bg-gradient-to-br from-slate-950/95 via-slate-950/90 to-black/70"
// // //               }`}
// // //           />
// // //         </div>
// // //         <div className="max-w-7xl mx-auto text-center relative z-20">
// // //           <motion.div
// // //             initial="hidden"
// // //             animate="visible"
// // //             variants={staggerContainer}
// // //           >
// // //             <motion.h1
// // //               variants={fadeInUp}
// // //               className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-white"
// // //             >
// // //               ATLA KNOTS
// // //               <br />
// // //               <span
// // //                 className={
// // //                   isDark
// // //                     ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-red-400 to-white"
// // //                     : "text-red-600"
// // //                 }
// // //               >
// // //                 IT SOLUTIONS
// // //               </span>
// // //             </motion.h1>
// // //             <motion.p
// // //               variants={fadeInUp}
// // //               className={`text-xl md:text-2xl max-w-4xl mx-auto mb-10 leading-relaxed
// // //                 ${isDark ? "text-gray-300" : "text-white"}`}
// // //             >
// // //               Making technology impactful, dependable, and easy to use — for
// // //               businesses of all sizes.
// // //             </motion.p>
// // //             <motion.p
// // //               variants={fadeInUp}
// // //               className={`text-lg md:text-xl max-w-3xl mx-auto mb-12
// // //                 ${isDark ? "text-gray-400" : "text-white/90"}`}
// // //             >
// // //               We build secure, future-ready software that drives efficiency and
// // //               digital transformation.
// // //             </motion.p>
// // //             <motion.div
// // //               variants={fadeInUp}
// // //               className="flex flex-col sm:flex-row gap-6 justify-center"
// // //             >
// // //               <button
// // //                 onClick={() => setShowPopup(true)}
// // //                 className="group px-10 py-5 rounded-full text-lg font-semibold flex items-center gap-3 transition-all
// // //                   bg-red-600 hover:bg-red-700 active:bg-red-800 text-white"
// // //               >
// // //                 GET STARTED
// // //                 <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
// // //               </button>
// // //               <button
// // //                 className={`group px-10 py-5 border-2 rounded-full text-lg font-semibold transition-all
// // //                   ${
// // //                     isDark
// // //                       ? "border-red-600/60 text-red-400 hover:border-red-500 hover:text-red-300"
// // //                       : "border-white/80 text-white hover:bg-white/10"
// // //                   }`}
// // //               >
// // //                 VIEW OUR WORK
// // //               </button>
// // //             </motion.div>
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* ====================== SERVICES SECTION ====================== */}
// // //       <section
// // //         className={`py-24 px-6 md:px-12 lg:px-24 transition-colors
// // //         ${isDark ? "bg-gradient-to-b from-black to-gray-950" : "bg-gray-50"}`}
// // //       >
// // //         <div className="max-w-7xl mx-auto">
// // //           <motion.h2
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             viewport={{ once: true }}
// // //             variants={fadeInUp}
// // //             className={`text-5xl md:text-6xl font-bold text-center mb-6 ${headingClass}`}
// // //           >
// // //             OUR <span className={accentClass}>SERVICES</span>
// // //           </motion.h2>
// // //           <motion.p
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             viewport={{ once: true }}
// // //             variants={fadeInUp}
// // //             className={`text-xl text-center mb-16 max-w-3xl mx-auto ${bodyClass}`}
// // //           >
// // //             Comprehensive IT &amp; BPO solutions — from development to support
// // //             and infrastructure
// // //           </motion.p>
// // //           <div className="space-y-20">
// // //             {/* IT Services */}
// // //             <div>
// // //               <h3 className={`text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight ${sectionHeadingAccent}`}>
// // //                 1. Information Technology Services
// // //               </h3>
// // //               <p className={`text-lg md:text-xl mb-12 text-center max-w-4xl mx-auto leading-relaxed ${bodyClass}`}>
// // //                 Supporting companies at every stage of the product lifecycle.
// // //               </p>
// // //               <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
// // //                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={cardClass}>
// // //                   <Code className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Development</h4>
// // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // //                     <li>• Web application development</li>
// // //                     <li>• Mobile application development</li>
// // //                     <li>• Secure, scalable &amp; user-friendly solutions</li>
// // //                   </ul>
// // //                 </motion.div>
// // //                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={cardClass}>
// // //                   <ShieldCheck className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Testing</h4>
// // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // //                     <li>• Web application testing</li>
// // //                     <li>• Mobile application testing</li>
// // //                     <li>• Quality, performance &amp; security assurance</li>
// // //                   </ul>
// // //                 </motion.div>
// // //                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={cardClass}>
// // //                   <Users className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>L2 Support</h4>
// // //                   <p className={`text-sm md:text-base leading-relaxed max-w-xs ${bodyClass}`}>
// // //                     Advanced troubleshooting, in-depth diagnosis &amp; root cause resolution.
// // //                   </p>
// // //                 </motion.div>
// // //                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={cardClass}>
// // //                   <Server className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Product Assistance</h4>
// // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // //                     <li>• Continuous support &amp; maintenance</li>
// // //                     <li>• Ticket &amp; incident management</li>
// // //                     <li>• Change management &amp; SLA tracking</li>
// // //                   </ul>
// // //                 </motion.div>
// // //               </div>
// // //             </div>

// // //             {/* BPO Services */}
// // //             <div>
// // //               <h3 className={`text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight ${sectionHeadingAccent}`}>
// // //                 2. Business Process Outsourcing (BPO) Services
// // //               </h3>
// // //               <p className={`text-lg md:text-xl mb-12 text-center max-w-3xl mx-auto leading-relaxed ${bodyClass}`}>
// // //                 Streamline operations and enhance customer engagement with reliable support.
// // //               </p>
// // //               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
// // //                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={cardClass}>
// // //                   <Headphones className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Voice, Chat &amp; Email</h4>
// // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // //                     <li>• Inbound &amp; outbound voice support</li>
// // //                     <li>• Real-time chat assistance</li>
// // //                     <li>• Structured email &amp; ticketing</li>
// // //                   </ul>
// // //                 </motion.div>
// // //                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={cardClass}>
// // //                   <BarChart3 className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Cataloguing &amp; Enrichment</h4>
// // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // //                     <li>• Product descriptions, tags &amp; keywords</li>
// // //                     <li>• Data validation &amp; cleaning</li>
// // //                     <li>• Category &amp; attribute enrichment</li>
// // //                   </ul>
// // //                 </motion.div>
// // //                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={cardClass}>
// // //                   <CheckCircle className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Quality Assurance</h4>
// // //                   <p className={`text-sm md:text-base leading-relaxed max-w-xs ${bodyClass}`}>
// // //                     Call/chat audits, SOP/SLA compliance, feedback &amp; continuous improvement.
// // //                   </p>
// // //                 </motion.div>
// // //               </div>
// // //             </div>

// // //             {/* Digital Marketing Services */}
// // //             <div className="text-center max-w-5xl mx-auto">
// // //               <h3 className={`text-4xl md:text-5xl font-bold mb-8 tracking-tight ${sectionHeadingAccent}`}>
// // //                 3. Digital &amp; Marketing Services
// // //               </h3>
// // //               <p className={`text-lg md:text-xl leading-relaxed ${bodyClass} mb-12`}>
// // //                 In today’s digital-first world, building a strong online presence is essential for businesses to grow and stay ahead.
// // //               </p>
// // //               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
// // //                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={cardClass}>
// // //                   <Headphones className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Search Engine Optimization</h4>
// // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // //                     <li>• Boost your website ranking</li>
// // //                     <li>• Increase organic traffic</li>
// // //                     <li>• Attract the right audience</li>
// // //                     <li>• Gain competitive edge</li>
// // //                   </ul>
// // //                 </motion.div>
// // //                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={cardClass}>
// // //                   <BarChart3 className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Social Media Marketing</h4>
// // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // //                     <li>• Reach the right audience</li>
// // //                     <li>• Build trust and brand awareness</li>
// // //                     <li>• Increase engagement</li>
// // //                     <li>• Convert followers into customers</li>
// // //                   </ul>
// // //                 </motion.div>
// // //                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={cardClass}>
// // //                   <CheckCircle className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Google &amp; Meta Ads</h4>
// // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // //                     <li>• Targeted ad campaigns</li>
// // //                     <li>• Improve brand visibility</li>
// // //                     <li>• Generate quality leads</li>
// // //                     <li>• Effective PPC strategies</li>
// // //                   </ul>
// // //                 </motion.div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ====================== TESTIMONIALS SECTION ====================== */}
// // //       <section className={`py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-gray-950" : "bg-gray-50"}`}>
// // //         <div className="max-w-7xl mx-auto">
// // //           <motion.div
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             viewport={{ once: true }}
// // //             variants={fadeInUp}
// // //             className="text-center mb-16"
// // //           >
// // //             <h2 className={`text-5xl md:text-6xl font-bold mb-4 ${headingClass}`}>TESTIMONIALS</h2>
// // //             <p className={`text-2xl font-medium ${accentClass}`}>Real Results, Real Client Experiences.</p>
// // //             <p className={`mt-6 text-lg max-w-3xl mx-auto ${bodyClass}`}>
// // //               We focus on performance, transparency, and long-term partnerships.
// // //             </p>
// // //           </motion.div>
// // //           <div className="grid md:grid-cols-3 gap-8">
// // //             {[
// // //               { name: "Swadesh Jyoti", text: "A reliable digital marketing partner. ATLA KNOTS understands business needs and works with clear communication." },
// // //               { name: "Amina", text: "Working with ATLA KNOTS has been a great decision. Their team understands our brand and consistently helps us reach more customers." },
// // //               { name: "Bharat e-Filing", text: "ATLA KNOTS has helped us improve our digital visibility and attract more clients. Practical and result-focused." },
// // //             ].map((testimonial, idx) => (
// // //               <motion.div
// // //                 key={idx}
// // //                 initial="hidden"
// // //                 whileInView="visible"
// // //                 viewport={{ once: true }}
// // //                 variants={fadeInUp}
// // //                 className={`p-8 rounded-3xl h-full flex flex-col ${isDark ? "bg-gray-900 border border-gray-800" : "bg-white shadow-lg border border-gray-100"}`}
// // //               >
// // //                 <div className="flex gap-1 text-2xl text-yellow-400 mb-6">★★★★★</div>
// // //                 <p className={`flex-1 leading-relaxed mb-8 ${bodyClass}`}>"{testimonial.text}"</p>
// // //                 <p className={`font-semibold text-lg ${headingClass}`}>{testimonial.name}</p>
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ====================== WHY CHOOSE US ====================== */}
// // //       <section className={`py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-black" : "bg-white"}`}>
// // //         <div className="max-w-7xl mx-auto">
// // //           <motion.h2
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             viewport={{ once: true }}
// // //             variants={fadeInUp}
// // //             className={`text-5xl md:text-6xl font-bold text-center mb-16 ${headingClass}`}
// // //           >
// // //             WHY <span className={accentClass}>CHOOSE US</span>
// // //           </motion.h2>
// // //           <div className="grid md:grid-cols-3 gap-10 lg:gap-16 text-center">
// // //             {[
// // //               { icon: Users, title: "True Partnership", desc: "We become an extension of your team — understanding your business deeply." },
// // //               { icon: Briefcase, title: "Enterprise Expertise", desc: "Proven experience in BFSI, retail, government & PSU projects." },
// // //               { icon: HardDrive, title: "Long-term Support", desc: "24×7 production support, SLA-based maintenance & AMS." },
// // //             ].map((item, idx) => (
// // //               <motion.div
// // //                 key={idx}
// // //                 initial="hidden"
// // //                 whileInView="visible"
// // //                 viewport={{ once: true }}
// // //                 variants={fadeInUp}
// // //                 className={`p-10 rounded-3xl border transition-all ${isDark ? "bg-gray-900 border-gray-800 hover:border-red-500/30" : "bg-white border-gray-200 shadow-md hover:shadow-lg"}`}
// // //               >
// // //                 <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 mx-auto ${isDark ? "bg-gray-800" : "bg-red-50"}`}>
// // //                   <item.icon className={`w-10 h-10 ${accentClass}`} />
// // //                 </div>
// // //                 <h3 className={`text-3xl font-bold mb-5 ${headingClass}`}>{item.title}</h3>
// // //                 <p className={`leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>{item.desc}</p>
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ====================== LET'S DISCUSS YOUR PROJECT ====================== */}
// // //       <section className={`py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-black" : "bg-white"}`}>
// // //         <div className="max-w-7xl mx-auto">
// // //           <div className="grid lg:grid-cols-2 gap-16 items-start">
// // //             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
// // //               <h2 className={`text-5xl md:text-6xl font-bold mb-3 ${headingClass}`}>Let's Discuss Your Project</h2>
// // //               <p className={`text-xl mb-10 ${bodyClass}`}>Tell us about your requirements. Our team will get back to you shortly.</p>
// // //               <form onSubmit={handleSubmit} className="space-y-6">
// // //                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
// // //                   <input
// // //                     type="text"
// // //                     name="usernamee"
// // //                     value={formData.usernamee}
// // //                     onChange={handleChange}
// // //                     placeholder="Your Name"
// // //                     required
// // //                     disabled={loading}
// // //                     className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-red-500 transition-colors ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
// // //                   />
// // //                   <input
// // //                     type="email"
// // //                     name="email"
// // //                     value={formData.email}
// // //                     onChange={handleChange}
// // //                     placeholder="Your Email"
// // //                     required
// // //                     disabled={loading}
// // //                     className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-red-500 transition-colors ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
// // //                   />
// // //                 </div>
// // //                 <input
// // //                   type="tel"
// // //                   name="phone"
// // //                   value={formData.phone}
// // //                   onChange={handleChange}
// // //                   placeholder="Mobile Number"
// // //                   required
// // //                   disabled={loading}
// // //                   className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-red-500 transition-colors ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
// // //                 />
// // //                 <input
// // //                   type="text"
// // //                   name="subject"
// // //                   value={formData.subject}
// // //                   onChange={handleChange}
// // //                   placeholder="Subject (Optional)"
// // //                   disabled={loading}
// // //                   className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-red-500 transition-colors ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
// // //                 />
// // //                 <textarea
// // //                   name="message"
// // //                   value={formData.message}
// // //                   onChange={handleChange}
// // //                   rows={5}
// // //                   placeholder="Tell us about your project..."
// // //                   required
// // //                   disabled={loading}
// // //                   className={`w-full px-6 py-4 rounded-3xl border focus:outline-none focus:border-red-500 transition-colors resize-y ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
// // //                 />
// // //                 <ReCAPTCHA
// // //                   sitekey="6LfP7nEsAAAAAOLxpk34nW3cU3uYXON85c8n4D2H"
// // //                   onChange={handleCaptchaChange}
// // //                   theme={isDark ? "dark" : "light"}
// // //                 />
// // //                 <div className="flex flex-col sm:flex-row gap-4 pt-4">
// // //                   <button
// // //                     type="submit"
// // //                     disabled={loading}
// // //                     className={`flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-5 rounded-2xl transition-all text-lg ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
// // //                   >
// // //                     {loading ? "Sending..." : "Submit Inquiry"}
// // //                   </button>
// // //                   <button
// // //                     type="button"
// // //                     onClick={() => window.open("https://wa.me/917869636070", "_blank")}
// // //                     className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-5 rounded-2xl transition-all text-lg flex items-center justify-center gap-3"
// // //                   >
// // //                     Chat on WhatsApp
// // //                   </button>
// // //                 </div>
// // //               </form>
// // //             </motion.div>
// // //             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-8">
// // //               <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 h-[420px]">
// // //                 <iframe
// // //                   title="ATLA Knots - MP Nagar, Bhopal"
// // //                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.8!2d77.432!3d23.198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631f8a00000001%3A0x0!2sM.P.+Nagar+Zone+2%2C+Bhopal%2C+Madhya+Pradesh+462011!5e0!3m2!1sen!2sin!4v1738000000000!5m2!1sen!2sin"
// // //                   width="100%"
// // //                   height="100%"
// // //                   style={{ border: 0 }}
// // //                   allowFullScreen=""
// // //                   loading="lazy"
// // //                   referrerPolicy="no-referrer-when-downgrade"
// // //                 />
// // //               </div>
// // //               <div className={`p-8 rounded-3xl ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
// // //                 <h3 className={`text-2xl font-semibold mb-4 ${headingClass}`}>ATLA Knots Solutions</h3>
// // //                 <p className={`leading-relaxed ${bodyClass}`}>
// // //                   103, Goyal Vihar,<br />
// // //                   Plot No 31-C, Zone 2,<br />
// // //                   M.P. Nagar, Bhopal - 462011<br />
// // //                   Madhya Pradesh, India
// // //                 </p>
// // //                 <div className="mt-6 space-y-2">
// // //                   <a href="tel:+917869636070" className="block text-red-500 hover:underline">+91 78696 36070</a>
// // //                   <a href="mailto:admin@atlaknots.com" className="block text-red-500 hover:underline">admin@atlaknots.com</a>
// // //                 </div>
// // //               </div>
// // //             </motion.div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ====================== EXCLUSIVE OFFER POPUP (Matching Image) ====================== */}
// // //       <AnimatePresence>
// // //         {showPopup && (
// // //           <motion.div
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             exit={{ opacity: 0 }}
// // //             className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
// // //             onClick={() => setShowPopup(false)}
// // //           >
// // //             <motion.div
// // //               initial={{ scale: 0.85, y: 30, opacity: 0 }}
// // //               animate={{ scale: 1, y: 0, opacity: 1 }}
// // //               exit={{ scale: 0.85, y: 30, opacity: 0 }}
// // //               transition={{ duration: 0.3 }}
// // //               className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-5xl w-full overflow-hidden flex flex-col lg:flex-row"
// // //               onClick={(e) => e.stopPropagation()}
// // //             >
// // //               {/* Left Side - Offer Content */}
// // //               <div className="lg:w-1/2 bg-[#FEF3C7] dark:bg-[#3F2A1E] p-8 lg:p-12 flex flex-col">
// // //                 <div className="flex justify-between items-center mb-8">
// // //                   <div className="bg-red-600 text-white font-bold px-6 py-2 rounded-full text-sm">
// // //                     Exclusive Offer
// // //                   </div>
// // //                   <button
// // //                     onClick={() => setShowPopup(false)}
// // //                     className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
// // //                   >
// // //                     <X size={32} />
// // //                   </button>
// // //                 </div>

// // //                 <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
// // //                   Get up to <span className="text-red-600">60% OFF</span> on our courses!
// // //                 </h2>
// // //                 <p className="text-xl text-orange-600 font-semibold mt-3">Grab it fast!</p>

// // //                 {/* Image Section */}
// // //                 <div className="relative my-10 flex justify-center">
// // //                   <img
// // //                     src="https://via.placeholder.com/340x420/FFEDD5/EA580C?text=Professional+Woman"
// // //                     alt="Digital Marketing Course"
// // //                     className="w-80 lg:w-96 rounded-3xl shadow-xl object-cover"
// // //                   />

// // //                   {/* Top Digital Marketing Institute Badge */}
// // //                   <div className="absolute -top-6 -left-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 text-center max-w-[150px]">
// // //                     <p className="text-blue-600 font-semibold text-sm">Top Digital</p>
// // //                     <p className="font-bold text-gray-900 dark:text-white">Marketing Institute</p>
// // //                   </div>

// // //                   {/* Agency Based Training Badge */}
// // //                   <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 text-center max-w-[160px]">
// // //                     <p className="text-orange-600 font-bold">Agency</p>
// // //                     <p className="font-semibold text-gray-900 dark:text-white">Based Training</p>
// // //                   </div>
// // //                 </div>

// // //                 {/* Why BDM? */}
// // //                 <div className="mt-auto">
// // //                   <div className="flex items-center gap-3 mb-6">
// // //                     <h3 className="text-2xl font-bold text-orange-600">Why BDM?</h3>
// // //                     <div className="flex-1 h-px bg-gradient-to-r from-orange-600 to-transparent" />
// // //                   </div>
// // //                   <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-gray-700 dark:text-gray-300">
// // //                     <div className="flex items-center gap-2">
// // //                       <CheckCircle className="w-5 h-5 text-green-600" /> Affordable Fees
// // //                     </div>
// // //                     <div className="flex items-center gap-2">
// // //                       <CheckCircle className="w-5 h-5 text-green-600" /> Internship Support
// // //                     </div>
// // //                     <div className="flex items-center gap-2">
// // //                       <CheckCircle className="w-5 h-5 text-green-600" /> 5K+ Students Trained
// // //                     </div>
// // //                     <div className="flex items-center gap-2">
// // //                       <CheckCircle className="w-5 h-5 text-green-600" /> Placement Assistance
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* Right Side - Form */}
// // //               <div className="lg:w-1/2 bg-white dark:bg-gray-900 p-8 lg:p-12 flex flex-col">
// // //                 <div className="text-center mb-8">
// // //                   <h3 className="text-red-600 text-3xl font-bold">Join Today's Free Demo</h3>
// // //                   <p className="text-gray-600 dark:text-gray-400 mt-1">See Why 5,000+ Students Chose Us</p>
// // //                 </div>

// // //                 <form onSubmit={handleSubmit} className="space-y-5 flex-1">
// // //                   <input
// // //                     type="text"
// // //                     name="usernamee"
// // //                     value={formData.usernamee}
// // //                     onChange={handleChange}
// // //                     placeholder="Full Name *"
// // //                     required
// // //                     disabled={loading}
// // //                     className="w-full px-5 py-3.5 rounded-2xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:border-red-500 outline-none text-gray-900 dark:text-white"
// // //                   />
// // //                   <input
// // //                     type="email"
// // //                     name="email"
// // //                     value={formData.email}
// // //                     onChange={handleChange}
// // //                     placeholder="Email ID *"
// // //                     required
// // //                     disabled={loading}
// // //                     className="w-full px-5 py-3.5 rounded-2xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:border-red-500 outline-none text-gray-900 dark:text-white"
// // //                   />
// // //                   <input
// // //                     type="tel"
// // //                     name="phone"
// // //                     value={formData.phone}
// // //                     onChange={handleChange}
// // //                     placeholder="Mobile Number *"
// // //                     required
// // //                     disabled={loading}
// // //                     className="w-full px-5 py-3.5 rounded-2xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:border-red-500 outline-none text-gray-900 dark:text-white"
// // //                   />

// // //                   <ReCAPTCHA
// // //                     sitekey="6LfP7nEsAAAAAOLxpk34nW3cU3uYXON85c8n4D2H"
// // //                     onChange={handleCaptchaChange}
// // //                     theme={isDark ? "dark" : "light"}
// // //                   />

// // //                   <label className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400 cursor-pointer">
// // //                     <input type="checkbox" className="mt-1 accent-red-600" defaultChecked />
// // //                     I agree to BDM's Terms & Conditions and Privacy Policy.
// // //                   </label>

// // //                   <button
// // //                     type="submit"
// // //                     disabled={loading}
// // //                     className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-2xl text-lg transition-all shadow-md mt-6"
// // //                   >
// // //                     {loading ? "Submitting..." : "Submit Enquiry"}
// // //                   </button>
// // //                 </form>
// // //               </div>
// // //             </motion.div>
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>
// // //     </div>
// // //   );
// // // }

// // import React, { useEffect, useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { useTheme } from "../context/ThemeContext";
// // import {
// //   ArrowRight,
// //   X,
// //   Code,
// //   ShieldCheck,
// //   Users,
// //   Server,
// //   Headphones,
// //   BarChart3,
// //   CheckCircle,
// //   Briefcase,
// //   HardDrive,
// // } from "lucide-react";
// // import heroVideo from "../assets/herosectionvideo.mp4";

// // // ReCAPTCHA & Toast
// // import ReCAPTCHA from "react-google-recaptcha";
// // import { ToastContainer, toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // // Redux
// // import { useDispatch, useSelector } from "react-redux";
// // import {
// //   updateField,
// //   setCaptcha,
// //   clearMessages,
// //   submitContactForm,
// // } from "./Redux/contact/contactSlice.js";

// // const fadeInUp = {
// //   hidden: { opacity: 0, y: 60 },
// //   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// // };

// // const staggerContainer = {
// //   hidden: {},
// //   visible: { transition: { staggerChildren: 0.15 } },
// // };

// // export default function Home() {
// //   const { isDark } = useTheme();
// //   const dispatch = useDispatch();
// //   const { formData, captchaValue, loading, successMessage, errorMessage } =
// //     useSelector((state) => state.contact);

// //   const [showPopup, setShowPopup] = useState(false);

// //   // Popup appears after 1.5 seconds
// //   useEffect(() => {
// //     const timer = setTimeout(() => setShowPopup(true), 1500);
// //     return () => clearTimeout(timer);
// //   }, []);

// //   // Toast Notifications
// //   useEffect(() => {
// //     if (successMessage) {
// //       toast.success(successMessage, { position: "top-right", autoClose: 5000 });
// //       dispatch(clearMessages());
// //       setShowPopup(false);
// //     }
// //   }, [successMessage, dispatch]);

// //   useEffect(() => {
// //     if (errorMessage) {
// //       toast.error(errorMessage, { position: "top-right", autoClose: 7000 });
// //       dispatch(clearMessages());
// //     }
// //   }, [errorMessage, dispatch]);

// //   const handleChange = (e) => {
// //     dispatch(updateField({ name: e.target.name, value: e.target.value }));
// //   };

// //   const handleCaptchaChange = (value) => {
// //     dispatch(setCaptcha(value));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (!captchaValue) {
// //       toast.error("Please verify that you are not a robot.");
// //       return;
// //     }
// //     dispatch(submitContactForm({ ...formData, captcha: captchaValue }));
// //   };

// //   // Reusable Classes
// //   const cardClass = isDark
// //     ? "bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full hover:border-red-500/50 transition-colors"
// //     : "bg-white border border-gray-200 shadow-md rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full hover:shadow-xl transition-shadow";

// //   const headingClass = isDark ? "text-white" : "text-gray-900";
// //   const bodyClass = isDark ? "text-gray-300" : "text-gray-700";
// //   const accentClass = "text-red-500";
// //   const sectionHeadingAccent = "text-red-500";

// //   return (
// //     <div
// //       className={`min-h-screen overflow-x-hidden transition-colors duration-700
// //       ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}`}
// //     >
// //       <ToastContainer
// //         position="top-right"
// //         autoClose={5000}
// //         theme={isDark ? "dark" : "light"}
// //       />

// //         <section className="relative">
// //         <div className="relative w-full h-[70vh] min-h-[520px] overflow-hidden">
// //           {HERO_SLIDES.map((slide, index) => (
// //             <div
// //               key={index}
// //               className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
// //                 index === currentHeroSlide ? "opacity-100" : "opacity-0"
// //               }`}
// //             >
// //               <img
// //                 src={slide.image}
// //                 alt={slide.title}
// //                 className="w-full h-full object-cover brightness-[0.85]"
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-transparent/30" />
// //               <div className="absolute inset-0 flex items-center justify-center px-5 sm:px-10">
// //                 <div className="text-center max-w-5xl">
// //                   <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 md:mb-6 drop-shadow-2xl">
// //                     Your MBBS Abroad Journey
// //                     <br />
// //                     <span className="text-[#d4a853]">{slide.title}</span>
// //                   </h2>
// //                   <p className="text-lg sm:text-xl md:text-2xl text-white/95 font-medium mb-8 md:mb-12 max-w-4xl mx-auto drop-shadow-lg">
// //                     {slide.subtitle}
// //                   </p>
// //                   <button className="bg-gradient-to-r from-[#d4a853] via-[#e0b76b] to-[#f0c070] text-[#0a2342] font-bold uppercase tracking-wider px-10 py-5 rounded-xl shadow-2xl hover:shadow-3xl hover:-translate-y-1.5 transition-all duration-300 text-lg md:text-xl">
// //                     {slide.cta} →
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}

// //           <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 flex justify-center gap-4 z-20">
// //             {HERO_SLIDES.map((_, i) => (
// //               <button
// //                 key={i}
// //                 onClick={() => setCurrentHeroSlide(i)}
// //                 className={`w-3.5 h-3.5 rounded-full transition-all duration-400 shadow-md ${
// //                   i === currentHeroSlide
// //                     ? "bg-[#d4a853] scale-125 ring-2 ring-[#d4a853]/60"
// //                     : "bg-white/60 hover:bg-white/90"
// //                 }`}
// //               />
// //             ))}
// //           </div>
// //         </div>

// //         <div className="max-w-6xl mx-auto px-6 -mt-20 sm:-mt-24 relative z-10">
// //           <div className="bg-white/95 backdrop-blur-lg border border-[#d4a853]/30 rounded-2xl shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-6 p-8 md:p-10">
// //             {[
// //               { n: "2000+", l: "Students Placed" },
// //               { n: "6", l: "Countries" },
// //               { n: "50+", l: "Universities" },
// //               { n: "100%", l: "NMC Approved" },
// //             ].map((s, i) => (
// //               <div key={i} className="text-center">
// //                 <div className="text-[#d4a853] text-4xl md:text-5xl font-extrabold">
// //                   {s.n}
// //                 </div>
// //                 <div className="text-[#0a2342] text-sm md:text-base uppercase tracking-wider mt-2 font-semibold">
// //                   {s.l}
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ====================== HERO SECTION WITH VIDEO ====================== */}
// //       <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
// //         <div className="absolute inset-0 z-0">
// //           <video
// //             autoPlay
// //             loop
// //             muted
// //             playsInline
// //             className="absolute inset-0 w-full h-full object-cover"
// //           >
// //             <source src={heroVideo} type="video/mp4" />
// //             Your browser does not support the video tag.
// //           </video>
// //           <div
// //             className={`absolute inset-0 z-10 transition-colors duration-700
// //               ${
// //                 isDark
// //                   ? "bg-gradient-to-br from-black/90 via-black/80 to-black/90"
// //                   : "bg-gradient-to-br from-slate-950/95 via-slate-950/90 to-black/70"
// //               }`}
// //           />
// //         </div>
// //         <div className="max-w-7xl mx-auto text-center relative z-20">
// //           <motion.div
// //             initial="hidden"
// //             animate="visible"
// //             variants={staggerContainer}
// //           >
// //             <motion.h1
// //               variants={fadeInUp}
// //               className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-white"
// //             >
// //               ATLA KNOTS
// //               <br />
// //               <span
// //                 className={
// //                   isDark
// //                     ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-red-400 to-white"
// //                     : "text-red-600"
// //                 }
// //               >
// //                 IT SOLUTIONS
// //               </span>
// //             </motion.h1>
// //             <motion.p
// //               variants={fadeInUp}
// //               className={`text-xl md:text-2xl max-w-4xl mx-auto mb-10 leading-relaxed
// //                 ${isDark ? "text-gray-300" : "text-white"}`}
// //             >
// //               Making technology impactful, dependable, and easy to use — for
// //               businesses of all sizes.
// //             </motion.p>
// //             <motion.p
// //               variants={fadeInUp}
// //               className={`text-lg md:text-xl max-w-3xl mx-auto mb-12
// //                 ${isDark ? "text-gray-400" : "text-white/90"}`}
// //             >
// //               We build secure, future-ready software that drives efficiency and
// //               digital transformation.
// //             </motion.p>
// //             <motion.div
// //               variants={fadeInUp}
// //               className="flex flex-col sm:flex-row gap-6 justify-center"
// //             >
// //               <button
// //                 onClick={() => setShowPopup(true)}
// //                 className="group px-10 py-5 rounded-full text-lg font-semibold flex items-center gap-3 transition-all
// //                   bg-red-600 hover:bg-red-700 active:bg-red-800 text-white"
// //               >
// //                 GET STARTED
// //                 <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
// //               </button>
// //               <button
// //                 className={`group px-10 py-5 border-2 rounded-full text-lg font-semibold transition-all
// //                   ${
// //                     isDark
// //                       ? "border-red-600/60 text-red-400 hover:border-red-500 hover:text-red-300"
// //                       : "border-white/80 text-white hover:bg-white/10"
// //                   }`}
// //               >
// //                 VIEW OUR WORK
// //               </button>
// //             </motion.div>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* ====================== SERVICES SECTION ====================== */}
// //       <section
// //         className={`py-24 px-6 md:px-12 lg:px-24 transition-colors
// //         ${isDark ? "bg-gradient-to-b from-black to-gray-950" : "bg-gray-50"}`}
// //       >
// //         <div className="max-w-7xl mx-auto">
// //           <motion.h2
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true }}
// //             variants={fadeInUp}
// //             className={`text-5xl md:text-6xl font-bold text-center mb-6 ${headingClass}`}
// //           >
// //             OUR <span className={accentClass}>SERVICES</span>
// //           </motion.h2>
// //           <motion.p
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true }}
// //             variants={fadeInUp}
// //             className={`text-xl text-center mb-16 max-w-3xl mx-auto ${bodyClass}`}
// //           >
// //             Comprehensive IT &amp; BPO solutions — from development to support
// //             and infrastructure
// //           </motion.p>
// //           <div className="space-y-20">
// //             {/* IT Services */}
// //             <div>
// //               <h3
// //                 className={`text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight ${sectionHeadingAccent}`}
// //               >
// //                 1. Information Technology Services
// //               </h3>
// //               <p
// //                 className={`text-lg md:text-xl mb-12 text-center max-w-4xl mx-auto leading-relaxed ${bodyClass}`}
// //               >
// //                 Supporting companies at every stage of the product lifecycle.
// //               </p>
// //               <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
// //                 <motion.div
// //                   initial="hidden"
// //                   whileInView="visible"
// //                   viewport={{ once: true }}
// //                   variants={fadeInUp}
// //                   className={cardClass}
// //                 >
// //                   <Code
// //                     className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
// //                   />
// //                   <h4
// //                     className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
// //                   >
// //                     Development
// //                   </h4>
// //                   <ul
// //                     className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}
// //                   >
// //                     <li>• Web application development</li>
// //                     <li>• Mobile application development</li>
// //                     <li>• Secure, scalable &amp; user-friendly solutions</li>
// //                   </ul>
// //                 </motion.div>
// //                 <motion.div
// //                   initial="hidden"
// //                   whileInView="visible"
// //                   viewport={{ once: true }}
// //                   variants={fadeInUp}
// //                   className={cardClass}
// //                 >
// //                   <ShieldCheck
// //                     className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
// //                   />
// //                   <h4
// //                     className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
// //                   >
// //                     Testing
// //                   </h4>
// //                   <ul
// //                     className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}
// //                   >
// //                     <li>• Web application testing</li>
// //                     <li>• Mobile application testing</li>
// //                     <li>• Quality, performance &amp; security assurance</li>
// //                   </ul>
// //                 </motion.div>
// //                 <motion.div
// //                   initial="hidden"
// //                   whileInView="visible"
// //                   viewport={{ once: true }}
// //                   variants={fadeInUp}
// //                   className={cardClass}
// //                 >
// //                   <Users
// //                     className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
// //                   />
// //                   <h4
// //                     className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
// //                   >
// //                     L2 Support
// //                   </h4>
// //                   <p
// //                     className={`text-sm md:text-base leading-relaxed max-w-xs ${bodyClass}`}
// //                   >
// //                     Advanced troubleshooting, in-depth diagnosis &amp; root
// //                     cause resolution.
// //                   </p>
// //                 </motion.div>
// //                 <motion.div
// //                   initial="hidden"
// //                   whileInView="visible"
// //                   viewport={{ once: true }}
// //                   variants={fadeInUp}
// //                   className={cardClass}
// //                 >
// //                   <Server
// //                     className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
// //                   />
// //                   <h4
// //                     className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
// //                   >
// //                     Product Assistance
// //                   </h4>
// //                   <ul
// //                     className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}
// //                   >
// //                     <li>• Continuous support &amp; maintenance</li>
// //                     <li>• Ticket &amp; incident management</li>
// //                     <li>• Change management &amp; SLA tracking</li>
// //                   </ul>
// //                 </motion.div>
// //               </div>
// //             </div>

// //             {/* BPO Services */}
// //             <div>
// //               <h3
// //                 className={`text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight ${sectionHeadingAccent}`}
// //               >
// //                 2. Business Process Outsourcing (BPO) Services
// //               </h3>
// //               <p
// //                 className={`text-lg md:text-xl mb-12 text-center max-w-3xl mx-auto leading-relaxed ${bodyClass}`}
// //               >
// //                 Streamline operations and enhance customer engagement with
// //                 reliable support.
// //               </p>
// //               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
// //                 <motion.div
// //                   initial="hidden"
// //                   whileInView="visible"
// //                   viewport={{ once: true }}
// //                   variants={fadeInUp}
// //                   className={cardClass}
// //                 >
// //                   <Headphones
// //                     className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
// //                   />
// //                   <h4
// //                     className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
// //                   >
// //                     Voice, Chat &amp; Email
// //                   </h4>
// //                   <ul
// //                     className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}
// //                   >
// //                     <li>• Inbound &amp; outbound voice support</li>
// //                     <li>• Real-time chat assistance</li>
// //                     <li>• Structured email &amp; ticketing</li>
// //                   </ul>
// //                 </motion.div>
// //                 <motion.div
// //                   initial="hidden"
// //                   whileInView="visible"
// //                   viewport={{ once: true }}
// //                   variants={fadeInUp}
// //                   className={cardClass}
// //                 >
// //                   <BarChart3
// //                     className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
// //                   />
// //                   <h4
// //                     className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
// //                   >
// //                     Cataloguing &amp; Enrichment
// //                   </h4>
// //                   <ul
// //                     className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}
// //                   >
// //                     <li>• Product descriptions, tags &amp; keywords</li>
// //                     <li>• Data validation &amp; cleaning</li>
// //                     <li>• Category &amp; attribute enrichment</li>
// //                   </ul>
// //                 </motion.div>
// //                 <motion.div
// //                   initial="hidden"
// //                   whileInView="visible"
// //                   viewport={{ once: true }}
// //                   variants={fadeInUp}
// //                   className={cardClass}
// //                 >
// //                   <CheckCircle
// //                     className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
// //                   />
// //                   <h4
// //                     className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
// //                   >
// //                     Quality Assurance
// //                   </h4>
// //                   <p
// //                     className={`text-sm md:text-base leading-relaxed max-w-xs ${bodyClass}`}
// //                   >
// //                     Call/chat audits, SOP/SLA compliance, feedback &amp;
// //                     continuous improvement.
// //                   </p>
// //                 </motion.div>
// //               </div>
// //             </div>

// //             {/* Digital Marketing Services */}
// //             <div className="text-center max-w-5xl mx-auto">
// //               <h3
// //                 className={`text-4xl md:text-5xl font-bold mb-8 tracking-tight ${sectionHeadingAccent}`}
// //               >
// //                 3. Digital &amp; Marketing Services
// //               </h3>
// //               <p
// //                 className={`text-lg md:text-xl leading-relaxed ${bodyClass} mb-12`}
// //               >
// //                 In today’s digital-first world, building a strong online
// //                 presence is essential for businesses to grow and stay ahead.
// //               </p>
// //               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
// //                 <motion.div
// //                   initial="hidden"
// //                   whileInView="visible"
// //                   viewport={{ once: true }}
// //                   variants={fadeInUp}
// //                   className={cardClass}
// //                 >
// //                   <Headphones
// //                     className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
// //                   />
// //                   <h4
// //                     className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
// //                   >
// //                     Search Engine Optimization
// //                   </h4>
// //                   <ul
// //                     className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}
// //                   >
// //                     <li>• Boost your website ranking</li>
// //                     <li>• Increase organic traffic</li>
// //                     <li>• Attract the right audience</li>
// //                     <li>• Gain competitive edge</li>
// //                   </ul>
// //                 </motion.div>
// //                 <motion.div
// //                   initial="hidden"
// //                   whileInView="visible"
// //                   viewport={{ once: true }}
// //                   variants={fadeInUp}
// //                   className={cardClass}
// //                 >
// //                   <BarChart3
// //                     className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
// //                   />
// //                   <h4
// //                     className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
// //                   >
// //                     Social Media Marketing
// //                   </h4>
// //                   <ul
// //                     className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}
// //                   >
// //                     <li>• Reach the right audience</li>
// //                     <li>• Build trust and brand awareness</li>
// //                     <li>• Increase engagement</li>
// //                     <li>• Convert followers into customers</li>
// //                   </ul>
// //                 </motion.div>
// //                 <motion.div
// //                   initial="hidden"
// //                   whileInView="visible"
// //                   viewport={{ once: true }}
// //                   variants={fadeInUp}
// //                   className={cardClass}
// //                 >
// //                   <CheckCircle
// //                     className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
// //                   />
// //                   <h4
// //                     className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
// //                   >
// //                     Google &amp; Meta Ads
// //                   </h4>
// //                   <ul
// //                     className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}
// //                   >
// //                     <li>• Targeted ad campaigns</li>
// //                     <li>• Improve brand visibility</li>
// //                     <li>• Generate quality leads</li>
// //                     <li>• Effective PPC strategies</li>
// //                   </ul>
// //                 </motion.div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ====================== TESTIMONIALS SECTION ====================== */}
// //       <section
// //         className={`py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-gray-950" : "bg-gray-50"}`}
// //       >
// //         <div className="max-w-7xl mx-auto">
// //           <motion.div
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true }}
// //             variants={fadeInUp}
// //             className="text-center mb-16"
// //           >
// //             <h2
// //               className={`text-5xl md:text-6xl font-bold mb-4 ${headingClass}`}
// //             >
// //               TESTIMONIALS
// //             </h2>
// //             <p className={`text-2xl font-medium ${accentClass}`}>
// //               Real Results, Real Client Experiences.
// //             </p>
// //             <p className={`mt-6 text-lg max-w-3xl mx-auto ${bodyClass}`}>
// //               We focus on performance, transparency, and long-term partnerships.
// //             </p>
// //           </motion.div>
// //           <div className="grid md:grid-cols-3 gap-8">
// //             {[
// //               {
// //                 name: "Swadesh Jyoti",
// //                 text: "A reliable digital marketing partner. ATLA KNOTS understands business needs and works with clear communication.",
// //               },
// //               {
// //                 name: "Amina",
// //                 text: "Working with ATLA KNOTS has been a great decision. Their team understands our brand and consistently helps us reach more customers.",
// //               },
// //               {
// //                 name: "Bharat e-Filing",
// //                 text: "ATLA KNOTS has helped us improve our digital visibility and attract more clients. Practical and result-focused.",
// //               },
// //             ].map((testimonial, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 initial="hidden"
// //                 whileInView="visible"
// //                 viewport={{ once: true }}
// //                 variants={fadeInUp}
// //                 className={`p-8 rounded-3xl h-full flex flex-col ${isDark ? "bg-gray-900 border border-gray-800" : "bg-white shadow-lg border border-gray-100"}`}
// //               >
// //                 <div className="flex gap-1 text-2xl text-yellow-400 mb-6">
// //                   ★★★★★
// //                 </div>
// //                 <p className={`flex-1 leading-relaxed mb-8 ${bodyClass}`}>
// //                   "{testimonial.text}"
// //                 </p>
// //                 <p className={`font-semibold text-lg ${headingClass}`}>
// //                   {testimonial.name}
// //                 </p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ====================== WHY CHOOSE US ====================== */}
// //       <section
// //         className={`py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-black" : "bg-white"}`}
// //       >
// //         <div className="max-w-7xl mx-auto">
// //           <motion.h2
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true }}
// //             variants={fadeInUp}
// //             className={`text-5xl md:text-6xl font-bold text-center mb-16 ${headingClass}`}
// //           >
// //             WHY <span className={accentClass}>CHOOSE US</span>
// //           </motion.h2>
// //           <div className="grid md:grid-cols-3 gap-10 lg:gap-16 text-center">
// //             {[
// //               {
// //                 icon: Users,
// //                 title: "True Partnership",
// //                 desc: "We become an extension of your team — understanding your business deeply.",
// //               },
// //               {
// //                 icon: Briefcase,
// //                 title: "Enterprise Expertise",
// //                 desc: "Proven experience in BFSI, retail, government & PSU projects.",
// //               },
// //               {
// //                 icon: HardDrive,
// //                 title: "Long-term Support",
// //                 desc: "24×7 production support, SLA-based maintenance & AMS.",
// //               },
// //             ].map((item, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 initial="hidden"
// //                 whileInView="visible"
// //                 viewport={{ once: true }}
// //                 variants={fadeInUp}
// //                 className={`p-10 rounded-3xl border transition-all ${isDark ? "bg-gray-900 border-gray-800 hover:border-red-500/30" : "bg-white border-gray-200 shadow-md hover:shadow-lg"}`}
// //               >
// //                 <div
// //                   className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 mx-auto ${isDark ? "bg-gray-800" : "bg-red-50"}`}
// //                 >
// //                   <item.icon className={`w-10 h-10 ${accentClass}`} />
// //                 </div>
// //                 <h3 className={`text-3xl font-bold mb-5 ${headingClass}`}>
// //                   {item.title}
// //                 </h3>
// //                 <p
// //                   className={`leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}
// //                 >
// //                   {item.desc}
// //                 </p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ====================== LET'S DISCUSS YOUR PROJECT ====================== */}
// //       <section
// //         className={`py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-black" : "bg-white"}`}
// //       >
// //         <div className="max-w-7xl mx-auto">
// //           <div className="grid lg:grid-cols-2 gap-16 items-start">
// //             <motion.div
// //               initial="hidden"
// //               whileInView="visible"
// //               viewport={{ once: true }}
// //               variants={fadeInUp}
// //             >
// //               <h2
// //                 className={`text-5xl md:text-6xl font-bold mb-3 ${headingClass}`}
// //               >
// //                 Let's Discuss Your Project
// //               </h2>
// //               <p className={`text-xl mb-10 ${bodyClass}`}>
// //                 Tell us about your requirements. Our team will get back to you
// //                 shortly.
// //               </p>
// //               <form onSubmit={handleSubmit} className="space-y-6">
// //                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
// //                   <input
// //                     type="text"
// //                     name="usernamee"
// //                     value={formData.usernamee}
// //                     onChange={handleChange}
// //                     placeholder="Your Name"
// //                     required
// //                     disabled={loading}
// //                     className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-red-500 transition-colors ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
// //                   />
// //                   <input
// //                     type="email"
// //                     name="email"
// //                     value={formData.email}
// //                     onChange={handleChange}
// //                     placeholder="Your Email"
// //                     required
// //                     disabled={loading}
// //                     className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-red-500 transition-colors ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
// //                   />
// //                 </div>
// //                 <input
// //                   type="tel"
// //                   name="phone"
// //                   value={formData.phone}
// //                   onChange={handleChange}
// //                   placeholder="Mobile Number"
// //                   required
// //                   disabled={loading}
// //                   className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-red-500 transition-colors ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
// //                 />
// //                 <input
// //                   type="text"
// //                   name="subject"
// //                   value={formData.subject}
// //                   onChange={handleChange}
// //                   placeholder="Subject (Optional)"
// //                   disabled={loading}
// //                   className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-red-500 transition-colors ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
// //                 />
// //                 <textarea
// //                   name="message"
// //                   value={formData.message}
// //                   onChange={handleChange}
// //                   rows={5}
// //                   placeholder="Tell us about your project..."
// //                   required
// //                   disabled={loading}
// //                   className={`w-full px-6 py-4 rounded-3xl border focus:outline-none focus:border-red-500 transition-colors resize-y ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
// //                 />
// //                 <ReCAPTCHA
// //                   sitekey="6LfP7nEsAAAAAOLxpk34nW3cU3uYXON85c8n4D2H"
// //                   onChange={handleCaptchaChange}
// //                   theme={isDark ? "dark" : "light"}
// //                 />
// //                 <div className="flex flex-col sm:flex-row gap-4 pt-4">
// //                   <button
// //                     type="submit"
// //                     disabled={loading}
// //                     className={`flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-5 rounded-2xl transition-all text-lg ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
// //                   >
// //                     {loading ? "Sending..." : "Submit Inquiry"}
// //                   </button>
// //                   <button
// //                     type="button"
// //                     onClick={() =>
// //                       window.open("https://wa.me/917869636070", "_blank")
// //                     }
// //                     className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-5 rounded-2xl transition-all text-lg flex items-center justify-center gap-3"
// //                   >
// //                     Chat on WhatsApp
// //                   </button>
// //                 </div>
// //               </form>
// //             </motion.div>
// //             <motion.div
// //               initial="hidden"
// //               whileInView="visible"
// //               viewport={{ once: true }}
// //               variants={fadeInUp}
// //               className="space-y-8"
// //             >
// //               <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 h-[420px]">
// //                 <iframe
// //                   title="ATLA Knots - MP Nagar, Bhopal"
// //                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.8!2d77.432!3d23.198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631f8a00000001%3A0x0!2sM.P.+Nagar+Zone+2%2C+Bhopal%2C+Madhya+Pradesh+462011!5e0!3m2!1sen!2sin!4v1738000000000!5m2!1sen!2sin"
// //                   width="100%"
// //                   height="100%"
// //                   style={{ border: 0 }}
// //                   allowFullScreen=""
// //                   loading="lazy"
// //                   referrerPolicy="no-referrer-when-downgrade"
// //                 />
// //               </div>
// //               <div
// //                 className={`p-8 rounded-3xl ${isDark ? "bg-gray-900" : "bg-gray-50"}`}
// //               >
// //                 <h3 className={`text-2xl font-semibold mb-4 ${headingClass}`}>
// //                   ATLA Knots Solutions
// //                 </h3>
// //                 <p className={`leading-relaxed ${bodyClass}`}>
// //                   103, Goyal Vihar,
// //                   <br />
// //                   Plot No 31-C, Zone 2,
// //                   <br />
// //                   M.P. Nagar, Bhopal - 462011
// //                   <br />
// //                   Madhya Pradesh, India
// //                 </p>
// //                 <div className="mt-6 space-y-2">
// //                   <a
// //                     href="tel:+917869636070"
// //                     className="block text-red-500 hover:underline"
// //                   >
// //                     +91 78696 36070
// //                   </a>
// //                   <a
// //                     href="mailto:admin@atlaknots.com"
// //                     className="block text-red-500 hover:underline"
// //                   >
// //                     admin@atlaknots.com
// //                   </a>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ====================== ATLA KNOTS EXCLUSIVE OFFER POPUP ====================== */}
// //       {/* ====================== ATLA KNOTS EXCLUSIVE OFFER POPUP ====================== */}
// //       <AnimatePresence>
// //         {showPopup && (
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
// //             onClick={() => setShowPopup(false)}
// //           >
// //             <motion.div
// //               initial={{ scale: 0.9, y: 40, opacity: 0 }}
// //               animate={{ scale: 1, y: 0, opacity: 1 }}
// //               exit={{ scale: 0.9, y: 40, opacity: 0 }}
// //               transition={{ duration: 0.3, ease: "easeOut" }}
// //               className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden flex flex-col lg:flex-row max-h-[90vh]"
// //               onClick={(e) => e.stopPropagation()}
// //             >
// //               {/* Left Side - Offer Content */}
// //               <div className="lg:w-1/2 bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 p-8 lg:p-10 flex flex-col">
// //                 <div className="flex justify-between items-center mb-6">
// //                   <div className="bg-red-600 text-white font-bold px-5 py-2 rounded-full text-sm tracking-wider">
// //                     LIMITED OFFER
// //                   </div>
// //                   <button
// //                     onClick={() => setShowPopup(false)}
// //                     className="text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors"
// //                   >
// //                     <X size={28} />
// //                   </button>
// //                 </div>

// //                 <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-gray-900 dark:text-white mb-2">
// //                   Get up to <span className="text-red-600">60% OFF</span> on our
// //                   courses!
// //                 </h2>
// //                 <p className="text-lg text-red-600 font-semibold">
// //                   Grab it before it ends!
// //                 </p>

// //                 {/* Image + Badges */}
// //                 <div className="relative my-8 flex justify-center">
// //                   <img
// //                     src="https://pbs.twimg.com/media/HCzAwhhbMAAJawO.jpg"
// //                     alt="ATLA KNOTS"
// //                     className="w-56 lg:w-72 rounded-3xl shadow-2xl object-cover"
// //                   />

// //                   {/* Badges */}
// //                   <div className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 rounded-2xl shadow p-3 text-center text-xs">
// //                     <p className="text-red-600 font-semibold">Top Rated</p>
// //                     <p className="font-bold text-gray-900 dark:text-white">
// //                       Digital Marketing
// //                     </p>
// //                   </div>

// //                   <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-2xl shadow p-3 text-center text-xs">
// //                     <p className="text-red-600 font-bold">IT Services</p>
// //                     <p className="font-semibold text-gray-900 dark:text-white">
// //                       Software Dev
// //                     </p>
// //                   </div>
// //                 </div>

// //                 {/* Features */}
// //                 <div className="mt-auto grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-700 dark:text-gray-300">
// //                   <div className="flex items-center gap-2">
// //                     <CheckCircle className="w-5 h-5 text-green-600" /> Top
// //                     Digital Marketing Agency
// //                   </div>
// //                   <div className="flex items-center gap-2">
// //                     <CheckCircle className="w-5 h-5 text-green-600" /> Result
// //                     Driven Strategies
// //                   </div>
// //                   <div className="flex items-center gap-2">
// //                     <CheckCircle className="w-5 h-5 text-green-600" /> Custom
// //                     Software Development
// //                   </div>
// //                   <div className="flex items-center gap-2">
// //                     <CheckCircle className="w-5 h-5 text-green-600" /> Agency
// //                     Based Solutions
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Right Side - Form (Shorter & Cleaner) */}
// //               <div className="lg:w-1/2 bg-white dark:bg-gray-900 p-8 lg:p-10 flex flex-col">
// //                 <div className="text-center mb-6">
// //                   <h3 className="text-red-600 text-2xl font-bold">
// //                     Join Today's Free Demo
// //                   </h3>
// //                   <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">
// //                     See why students trust ATLA KNOTS
// //                   </p>
// //                 </div>

// //                 <form onSubmit={handleSubmit} className="space-y-5 flex-1">
// //                   <input
// //                     type="text"
// //                     name="usernamee"
// //                     value={formData.usernamee}
// //                     onChange={handleChange}
// //                     placeholder="Full Name *"
// //                     required
// //                     disabled={loading}
// //                     className="w-full px-5 py-3.5 rounded-2xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:border-red-500 outline-none"
// //                   />
// //                   <input
// //                     type="email"
// //                     name="email"
// //                     value={formData.email}
// //                     onChange={handleChange}
// //                     placeholder="Email ID *"
// //                     required
// //                     disabled={loading}
// //                     className="w-full px-5 py-3.5 rounded-2xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:border-red-500 outline-none"
// //                   />
// //                   <input
// //                     type="tel"
// //                     name="phone"
// //                     value={formData.phone}
// //                     onChange={handleChange}
// //                     placeholder="Mobile Number *"
// //                     required
// //                     disabled={loading}
// //                     className="w-full px-5 py-3.5 rounded-2xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:border-red-500 outline-none"
// //                   />

// //                   <ReCAPTCHA
// //                     sitekey="6LfP7nEsAAAAAOLxpk34nW3cU3uYXON85c8n4D2H"
// //                     onChange={handleCaptchaChange}
// //                     theme={isDark ? "dark" : "light"}
// //                   />

// //                   <button
// //                     type="submit"
// //                     disabled={loading}
// //                     className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-2xl text-lg transition-all shadow-md mt-4"
// //                   >
// //                     {loading ? "Submitting..." : "Submit Enquiry"}
// //                   </button>

// //                   <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-3">
// //                     We respect your privacy • Free Demo Only
// //                   </p>
// //                 </form>
// //               </div>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </div>
// //   );
// // }

// // import React, { useEffect, useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { useTheme } from "../context/ThemeContext";
// // import {
// //   ArrowRight,
// //   X,
// //   Code,
// //   ShieldCheck,
// //   Users,
// //   Server,
// //   Headphones,
// //   BarChart3,
// //   CheckCircle,
// //   Briefcase,
// //   HardDrive,
// // } from "lucide-react";
// // import heroVideo from "../assets/herosectionvideo.mp4";

// // // ReCAPTCHA & Toast
// // import ReCAPTCHA from "react-google-recaptcha";
// // import { ToastContainer, toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // // Redux
// // import { useDispatch, useSelector } from "react-redux";
// // import {
// //   updateField,
// //   setCaptcha,
// //   clearMessages,
// //   submitContactForm,
// // } from "./Redux/contact/contactSlice.js";

// // const fadeInUp = {
// //   hidden: { opacity: 0, y: 60 },
// //   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// // };

// // const staggerContainer = {
// //   hidden: {},
// //   visible: { transition: { staggerChildren: 0.15 } },
// // };

// // // Hero Slider Data
// // const HERO_SLIDES = [
// //   {
// //     image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070",
// //     title: "Study in Russia",
// //     subtitle: "World-class education at affordable fees with NMC approved universities",
// //     cta: "Explore Russia",
// //   },
// //   {
// //     image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070",
// //     title: "Study in Georgia",
// //     subtitle: "Safe environment, English medium & direct admission",
// //     cta: "Explore Georgia",
// //   },
// //   {
// //     image: "https://images.unsplash.com/photo-1591115765373-5207767f024f?q=80&w=2070",
// //     title: "Study in Kyrgyzstan",
// //     subtitle: "Low cost MBBS with high quality education & Indian food",
// //     cta: "Explore Kyrgyzstan",
// //   },
// // ];

// // export default function Home() {
// //   const { isDark } = useTheme();
// //   const dispatch = useDispatch();
// //   const { formData, captchaValue, loading, successMessage, errorMessage } =
// //     useSelector((state) => state.contact);

// //   const [showPopup, setShowPopup] = useState(false);
// //   const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

// //   // Auto slide for hero slider
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
// //     }, 5000);
// //     return () => clearInterval(interval);
// //   }, []);

// //   // Popup appears after 1.5 seconds
// //   useEffect(() => {
// //     const timer = setTimeout(() => setShowPopup(true), 1500);
// //     return () => clearTimeout(timer);
// //   }, []);

// //   // Toast Notifications
// //   useEffect(() => {
// //     if (successMessage) {
// //       toast.success(successMessage, { position: "top-right", autoClose: 5000 });
// //       dispatch(clearMessages());
// //       setShowPopup(false);
// //     }
// //   }, [successMessage, dispatch]);

// //   useEffect(() => {
// //     if (errorMessage) {
// //       toast.error(errorMessage, { position: "top-right", autoClose: 7000 });
// //       dispatch(clearMessages());
// //     }
// //   }, [errorMessage, dispatch]);

// //   const handleChange = (e) => {
// //     dispatch(updateField({ name: e.target.name, value: e.target.value }));
// //   };

// //   const handleCaptchaChange = (value) => {
// //     dispatch(setCaptcha(value));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (!captchaValue) {
// //       toast.error("Please verify that you are not a robot.");
// //       return;
// //     }
// //     dispatch(submitContactForm({ ...formData, captcha: captchaValue }));
// //   };

// //   // Reusable Classes
// //   const cardClass = isDark
// //     ? "bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full hover:border-red-500/50 transition-colors"
// //     : "bg-white border border-gray-200 shadow-md rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full hover:shadow-xl transition-shadow";

// //   const headingClass = isDark ? "text-white" : "text-gray-900";
// //   const bodyClass = isDark ? "text-gray-300" : "text-gray-700";
// //   const accentClass = "text-red-500";
// //   const sectionHeadingAccent = "text-red-500";

// //   return (
// //     <div
// //       className={`min-h-screen overflow-x-hidden transition-colors duration-700
// //       ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}`}
// //     >
// //       <ToastContainer
// //         position="top-right"
// //         autoClose={5000}
// //         theme={isDark ? "dark" : "light"}
// //       />

// //       {/* ====================== HERO SLIDER SECTION (MBBS Abroad) ====================== */}
// //       <section className="relative">
// //         <div className="relative w-full h-[70vh] min-h-[520px] overflow-hidden">
// //           {HERO_SLIDES.map((slide, index) => (
// //             <div
// //               key={index}
// //               className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
// //                 index === currentHeroSlide ? "opacity-100" : "opacity-0"
// //               }`}
// //             >
// //               <img
// //                 src={slide.image}
// //                 alt={slide.title}
// //                 className="w-full h-full object-cover brightness-[0.85]"
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-transparent/30" />
// //               <div className="absolute inset-0 flex items-center justify-center px-5 sm:px-10">
// //                 <div className="text-center max-w-5xl">
// //                   <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 md:mb-6 drop-shadow-2xl">
// //                     Your MBBS Abroad Journey
// //                     <br />
// //                     <span className="text-[#d4a853]">{slide.title}</span>
// //                   </h2>
// //                   <p className="text-lg sm:text-xl md:text-2xl text-white/95 font-medium mb-8 md:mb-12 max-w-4xl mx-auto drop-shadow-lg">
// //                     {slide.subtitle}
// //                   </p>
// //                   <button className="bg-gradient-to-r from-[#d4a853] via-[#e0b76b] to-[#f0c070] text-[#0a2342] font-bold uppercase tracking-wider px-10 py-5 rounded-xl shadow-2xl hover:shadow-3xl hover:-translate-y-1.5 transition-all duration-300 text-lg md:text-xl">
// //                     {slide.cta} →
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}

// //           <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 flex justify-center gap-4 z-20">
// //             {HERO_SLIDES.map((_, i) => (
// //               <button
// //                 key={i}
// //                 onClick={() => setCurrentHeroSlide(i)}
// //                 className={`w-3.5 h-3.5 rounded-full transition-all duration-400 shadow-md ${
// //                   i === currentHeroSlide
// //                     ? "bg-[#d4a853] scale-125 ring-2 ring-[#d4a853]/60"
// //                     : "bg-white/60 hover:bg-white/90"
// //                 }`}
// //               />
// //             ))}
// //           </div>
// //         </div>

// //         <div className="max-w-6xl mx-auto px-6 -mt-20 sm:-mt-24 relative z-10">
// //           <div className="bg-white/95 backdrop-blur-lg border border-[#d4a853]/30 rounded-2xl shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-6 p-8 md:p-10">
// //             {[
// //               { n: "2000+", l: "Students Placed" },
// //               { n: "6", l: "Countries" },
// //               { n: "50+", l: "Universities" },
// //               { n: "100%", l: "NMC Approved" },
// //             ].map((s, i) => (
// //               <div key={i} className="text-center">
// //                 <div className="text-[#d4a853] text-4xl md:text-5xl font-extrabold">
// //                   {s.n}
// //                 </div>
// //                 <div className="text-[#0a2342] text-sm md:text-base uppercase tracking-wider mt-2 font-semibold">
// //                   {s.l}
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ====================== HERO SECTION WITH VIDEO (ATLA KNOTS) ====================== */}
// //       <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
// //         <div className="absolute inset-0 z-0">
// //           <video
// //             autoPlay
// //             loop
// //             muted
// //             playsInline
// //             className="absolute inset-0 w-full h-full object-cover"
// //           >
// //             <source src={heroVideo} type="video/mp4" />
// //             Your browser does not support the video tag.
// //           </video>
// //           <div
// //             className={`absolute inset-0 z-10 transition-colors duration-700
// //               ${
// //                 isDark
// //                   ? "bg-gradient-to-br from-black/90 via-black/80 to-black/90"
// //                   : "bg-gradient-to-br from-slate-950/95 via-slate-950/90 to-black/70"
// //               }`}
// //           />
// //         </div>
// //         <div className="max-w-7xl mx-auto text-center relative z-20">
// //           <motion.div
// //             initial="hidden"
// //             animate="visible"
// //             variants={staggerContainer}
// //           >
// //             <motion.h1
// //               variants={fadeInUp}
// //               className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-white"
// //             >
// //               ATLA KNOTS
// //               <br />
// //               <span
// //                 className={
// //                   isDark
// //                     ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-red-400 to-white"
// //                     : "text-red-600"
// //                 }
// //               >
// //                 IT SOLUTIONS
// //               </span>
// //             </motion.h1>
// //             <motion.p
// //               variants={fadeInUp}
// //               className={`text-xl md:text-2xl max-w-4xl mx-auto mb-10 leading-relaxed
// //                 ${isDark ? "text-gray-300" : "text-white"}`}
// //             >
// //               Making technology impactful, dependable, and easy to use — for
// //               businesses of all sizes.
// //             </motion.p>
// //             <motion.p
// //               variants={fadeInUp}
// //               className={`text-lg md:text-xl max-w-3xl mx-auto mb-12
// //                 ${isDark ? "text-gray-400" : "text-white/90"}`}
// //             >
// //               We build secure, future-ready software that drives efficiency and
// //               digital transformation.
// //             </motion.p>
// //             <motion.div
// //               variants={fadeInUp}
// //               className="flex flex-col sm:flex-row gap-6 justify-center"
// //             >
// //               <button
// //                 onClick={() => setShowPopup(true)}
// //                 className="group px-10 py-5 rounded-full text-lg font-semibold flex items-center gap-3 transition-all
// //                   bg-red-600 hover:bg-red-700 active:bg-red-800 text-white"
// //               >
// //                 GET STARTED
// //                 <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
// //               </button>
// //               <button
// //                 className={`group px-10 py-5 border-2 rounded-full text-lg font-semibold transition-all
// //                   ${
// //                     isDark
// //                       ? "border-red-600/60 text-red-400 hover:border-red-500 hover:text-red-300"
// //                       : "border-white/80 text-white hover:bg-white/10"
// //                   }`}
// //               >
// //                 VIEW OUR WORK
// //               </button>
// //             </motion.div>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* ====================== SERVICES SECTION ====================== */}
// //       <section
// //         className={`py-24 px-6 md:px-12 lg:px-24 transition-colors
// //         ${isDark ? "bg-gradient-to-b from-black to-gray-950" : "bg-gray-50"}`}
// //       >
// //         <div className="max-w-7xl mx-auto">
// //           <motion.h2
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true }}
// //             variants={fadeInUp}
// //             className={`text-5xl md:text-6xl font-bold text-center mb-6 ${headingClass}`}
// //           >
// //             OUR <span className={accentClass}>SERVICES</span>
// //           </motion.h2>
// //           <motion.p
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true }}
// //             variants={fadeInUp}
// //             className={`text-xl text-center mb-16 max-w-3xl mx-auto ${bodyClass}`}
// //           >
// //             Comprehensive IT &amp; BPO solutions — from development to support
// //             and infrastructure
// //           </motion.p>
// //           <div className="space-y-20">
// //             {/* IT Services */}
// //             <div>
// //               <h3
// //                 className={`text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight ${sectionHeadingAccent}`}
// //               >
// //                 1. Information Technology Services
// //               </h3>
// //               <p
// //                 className={`text-lg md:text-xl mb-12 text-center max-w-4xl mx-auto leading-relaxed ${bodyClass}`}
// //               >
// //                 Supporting companies at every stage of the product lifecycle.
// //               </p>
// //               <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
// //                 <motion.div
// //                   initial="hidden"
// //                   whileInView="visible"
// //                   viewport={{ once: true }}
// //                   variants={fadeInUp}
// //                   className={cardClass}
// //                 >
// //                   <Code className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Development</h4>
// //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// //                     <li>• Web application development</li>
// //                     <li>• Mobile application development</li>
// //                     <li>• Secure, scalable &amp; user-friendly solutions</li>
// //                   </ul>
// //                 </motion.div>
// //                 <motion.div
// //                   initial="hidden"
// //                   whileInView="visible"
// //                   viewport={{ once: true }}
// //                   variants={fadeInUp}
// //                   className={cardClass}
// //                 >
// //                   <ShieldCheck className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Testing</h4>
// //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// //                     <li>• Web application testing</li>
// //                     <li>• Mobile application testing</li>
// //                     <li>• Quality, performance &amp; security assurance</li>
// //                   </ul>
// //                 </motion.div>
// //                 <motion.div
// //                   initial="hidden"
// //                   whileInView="visible"
// //                   viewport={{ once: true }}
// //                   variants={fadeInUp}
// //                   className={cardClass}
// //                 >
// //                   <Users className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>L2 Support</h4>
// //                   <p className={`text-sm md:text-base leading-relaxed max-w-xs ${bodyClass}`}>
// //                     Advanced troubleshooting, in-depth diagnosis &amp; root cause resolution.
// //                   </p>
// //                 </motion.div>
// //                 <motion.div
// //                   initial="hidden"
// //                   whileInView="visible"
// //                   viewport={{ once: true }}
// //                   variants={fadeInUp}
// //                   className={cardClass}
// //                 >
// //                   <Server className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Product Assistance</h4>
// //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// //                     <li>• Continuous support &amp; maintenance</li>
// //                     <li>• Ticket &amp; incident management</li>
// //                     <li>• Change management &amp; SLA tracking</li>
// //                   </ul>
// //                 </motion.div>
// //               </div>
// //             </div>

// //             {/* BPO Services */}
// //             <div>
// //               <h3
// //                 className={`text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight ${sectionHeadingAccent}`}
// //               >
// //                 2. Business Process Outsourcing (BPO) Services
// //               </h3>
// //               <p
// //                 className={`text-lg md:text-xl mb-12 text-center max-w-3xl mx-auto leading-relaxed ${bodyClass}`}
// //               >
// //                 Streamline operations and enhance customer engagement with reliable support.
// //               </p>
// //               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
// //                 <motion.div
// //                   initial="hidden"
// //                   whileInView="visible"
// //                   viewport={{ once: true }}
// //                   variants={fadeInUp}
// //                   className={cardClass}
// //                 >
// //                   <Headphones className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Voice, Chat &amp; Email</h4>
// //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// //                     <li>• Inbound &amp; outbound voice support</li>
// //                     <li>• Real-time chat assistance</li>
// //                     <li>• Structured email &amp; ticketing</li>
// //                   </ul>
// //                 </motion.div>
// //                 <motion.div
// //                   initial="hidden"
// //                   whileInView="visible"
// //                   viewport={{ once: true }}
// //                   variants={fadeInUp}
// //                   className={cardClass}
// //                 >
// //                   <BarChart3 className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Cataloguing &amp; Enrichment</h4>
// //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// //                     <li>• Product descriptions, tags &amp; keywords</li>
// //                     <li>• Data validation &amp; cleaning</li>
// //                     <li>• Category &amp; attribute enrichment</li>
// //                   </ul>
// //                 </motion.div>
// //                 <motion.div
// //                   initial="hidden"
// //                   whileInView="visible"
// //                   viewport={{ once: true }}
// //                   variants={fadeInUp}
// //                   className={cardClass}
// //                 >
// //                   <CheckCircle className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Quality Assurance</h4>
// //                   <p className={`text-sm md:text-base leading-relaxed max-w-xs ${bodyClass}`}>
// //                     Call/chat audits, SOP/SLA compliance, feedback &amp; continuous improvement.
// //                   </p>
// //                 </motion.div>
// //               </div>
// //             </div>

// //             {/* Digital Marketing Services */}
// //             <div className="text-center max-w-5xl mx-auto">
// //               <h3
// //                 className={`text-4xl md:text-5xl font-bold mb-8 tracking-tight ${sectionHeadingAccent}`}
// //               >
// //                 3. Digital &amp; Marketing Services
// //               </h3>
// //               <p className={`text-lg md:text-xl leading-relaxed ${bodyClass} mb-12`}>
// //                 In today’s digital-first world, building a strong online presence is essential for businesses to grow and stay ahead.
// //               </p>
// //               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
// //                 <motion.div
// //                   initial="hidden"
// //                   whileInView="visible"
// //                   viewport={{ once: true }}
// //                   variants={fadeInUp}
// //                   className={cardClass}
// //                 >
// //                   <Headphones className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Search Engine Optimization</h4>
// //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// //                     <li>• Boost your website ranking</li>
// //                     <li>• Increase organic traffic</li>
// //                     <li>• Attract the right audience</li>
// //                     <li>• Gain competitive edge</li>
// //                   </ul>
// //                 </motion.div>
// //                 <motion.div
// //                   initial="hidden"
// //                   whileInView="visible"
// //                   viewport={{ once: true }}
// //                   variants={fadeInUp}
// //                   className={cardClass}
// //                 >
// //                   <BarChart3 className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Social Media Marketing</h4>
// //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// //                     <li>• Reach the right audience</li>
// //                     <li>• Build trust and brand awareness</li>
// //                     <li>• Increase engagement</li>
// //                     <li>• Convert followers into customers</li>
// //                   </ul>
// //                 </motion.div>
// //                 <motion.div
// //                   initial="hidden"
// //                   whileInView="visible"
// //                   viewport={{ once: true }}
// //                   variants={fadeInUp}
// //                   className={cardClass}
// //                 >
// //                   <CheckCircle className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Google &amp; Meta Ads</h4>
// //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// //                     <li>• Targeted ad campaigns</li>
// //                     <li>• Improve brand visibility</li>
// //                     <li>• Generate quality leads</li>
// //                     <li>• Effective PPC strategies</li>
// //                   </ul>
// //                 </motion.div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ====================== TESTIMONIALS SECTION ====================== */}
// //       <section
// //         className={`py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-gray-950" : "bg-gray-50"}`}
// //       >
// //         <div className="max-w-7xl mx-auto">
// //           <motion.div
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true }}
// //             variants={fadeInUp}
// //             className="text-center mb-16"
// //           >
// //             <h2 className={`text-5xl md:text-6xl font-bold mb-4 ${headingClass}`}>TESTIMONIALS</h2>
// //             <p className={`text-2xl font-medium ${accentClass}`}>Real Results, Real Client Experiences.</p>
// //             <p className={`mt-6 text-lg max-w-3xl mx-auto ${bodyClass}`}>
// //               We focus on performance, transparency, and long-term partnerships.
// //             </p>
// //           </motion.div>
// //           <div className="grid md:grid-cols-3 gap-8">
// //             {[
// //               {
// //                 name: "Swadesh Jyoti",
// //                 text: "A reliable digital marketing partner. ATLA KNOTS understands business needs and works with clear communication.",
// //               },
// //               {
// //                 name: "Amina",
// //                 text: "Working with ATLA KNOTS has been a great decision. Their team understands our brand and consistently helps us reach more customers.",
// //               },
// //               {
// //                 name: "Bharat e-Filing",
// //                 text: "ATLA KNOTS has helped us improve our digital visibility and attract more clients. Practical and result-focused.",
// //               },
// //             ].map((testimonial, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 initial="hidden"
// //                 whileInView="visible"
// //                 viewport={{ once: true }}
// //                 variants={fadeInUp}
// //                 className={`p-8 rounded-3xl h-full flex flex-col ${isDark ? "bg-gray-900 border border-gray-800" : "bg-white shadow-lg border border-gray-100"}`}
// //               >
// //                 <div className="flex gap-1 text-2xl text-yellow-400 mb-6">★★★★★</div>
// //                 <p className={`flex-1 leading-relaxed mb-8 ${bodyClass}`}>"{testimonial.text}"</p>
// //                 <p className={`font-semibold text-lg ${headingClass}`}>{testimonial.name}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ====================== WHY CHOOSE US ====================== */}
// //       <section
// //         className={`py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-black" : "bg-white"}`}
// //       >
// //         <div className="max-w-7xl mx-auto">
// //           <motion.h2
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true }}
// //             variants={fadeInUp}
// //             className={`text-5xl md:text-6xl font-bold text-center mb-16 ${headingClass}`}
// //           >
// //             WHY <span className={accentClass}>CHOOSE US</span>
// //           </motion.h2>
// //           <div className="grid md:grid-cols-3 gap-10 lg:gap-16 text-center">
// //             {[
// //               {
// //                 icon: Users,
// //                 title: "True Partnership",
// //                 desc: "We become an extension of your team — understanding your business deeply.",
// //               },
// //               {
// //                 icon: Briefcase,
// //                 title: "Enterprise Expertise",
// //                 desc: "Proven experience in BFSI, retail, government & PSU projects.",
// //               },
// //               {
// //                 icon: HardDrive,
// //                 title: "Long-term Support",
// //                 desc: "24×7 production support, SLA-based maintenance & AMS.",
// //               },
// //             ].map((item, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 initial="hidden"
// //                 whileInView="visible"
// //                 viewport={{ once: true }}
// //                 variants={fadeInUp}
// //                 className={`p-10 rounded-3xl border transition-all ${isDark ? "bg-gray-900 border-gray-800 hover:border-red-500/30" : "bg-white border-gray-200 shadow-md hover:shadow-lg"}`}
// //               >
// //                 <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 mx-auto ${isDark ? "bg-gray-800" : "bg-red-50"}`}>
// //                   <item.icon className={`w-10 h-10 ${accentClass}`} />
// //                 </div>
// //                 <h3 className={`text-3xl font-bold mb-5 ${headingClass}`}>{item.title}</h3>
// //                 <p className={`leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>{item.desc}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ====================== LET'S DISCUSS YOUR PROJECT ====================== */}
// //       <section
// //         className={`py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-black" : "bg-white"}`}
// //       >
// //         <div className="max-w-7xl mx-auto">
// //           <div className="grid lg:grid-cols-2 gap-16 items-start">
// //             <motion.div
// //               initial="hidden"
// //               whileInView="visible"
// //               viewport={{ once: true }}
// //               variants={fadeInUp}
// //             >
// //               <h2 className={`text-5xl md:text-6xl font-bold mb-3 ${headingClass}`}>Let's Discuss Your Project</h2>
// //               <p className={`text-xl mb-10 ${bodyClass}`}>Tell us about your requirements. Our team will get back to you shortly.</p>
// //               <form onSubmit={handleSubmit} className="space-y-6">
// //                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
// //                   <input
// //                     type="text"
// //                     name="usernamee"
// //                     value={formData.usernamee}
// //                     onChange={handleChange}
// //                     placeholder="Your Name"
// //                     required
// //                     disabled={loading}
// //                     className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-red-500 transition-colors ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
// //                   />
// //                   <input
// //                     type="email"
// //                     name="email"
// //                     value={formData.email}
// //                     onChange={handleChange}
// //                     placeholder="Your Email"
// //                     required
// //                     disabled={loading}
// //                     className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-red-500 transition-colors ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
// //                   />
// //                 </div>
// //                 <input
// //                   type="tel"
// //                   name="phone"
// //                   value={formData.phone}
// //                   onChange={handleChange}
// //                   placeholder="Mobile Number"
// //                   required
// //                   disabled={loading}
// //                   className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-red-500 transition-colors ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
// //                 />
// //                 <input
// //                   type="text"
// //                   name="subject"
// //                   value={formData.subject}
// //                   onChange={handleChange}
// //                   placeholder="Subject (Optional)"
// //                   disabled={loading}
// //                   className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-red-500 transition-colors ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
// //                 />
// //                 <textarea
// //                   name="message"
// //                   value={formData.message}
// //                   onChange={handleChange}
// //                   rows={5}
// //                   placeholder="Tell us about your project..."
// //                   required
// //                   disabled={loading}
// //                   className={`w-full px-6 py-4 rounded-3xl border focus:outline-none focus:border-red-500 transition-colors resize-y ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
// //                 />
// //                 <ReCAPTCHA
// //                   sitekey="6LfP7nEsAAAAAOLxpk34nW3cU3uYXON85c8n4D2H"
// //                   onChange={handleCaptchaChange}
// //                   theme={isDark ? "dark" : "light"}
// //                 />
// //                 <div className="flex flex-col sm:flex-row gap-4 pt-4">
// //                   <button
// //                     type="submit"
// //                     disabled={loading}
// //                     className={`flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-5 rounded-2xl transition-all text-lg ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
// //                   >
// //                     {loading ? "Sending..." : "Submit Inquiry"}
// //                   </button>
// //                   <button
// //                     type="button"
// //                     onClick={() => window.open("https://wa.me/917869636070", "_blank")}
// //                     className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-5 rounded-2xl transition-all text-lg flex items-center justify-center gap-3"
// //                   >
// //                     Chat on WhatsApp
// //                   </button>
// //                 </div>
// //               </form>
// //             </motion.div>
// //             <motion.div
// //               initial="hidden"
// //               whileInView="visible"
// //               viewport={{ once: true }}
// //               variants={fadeInUp}
// //               className="space-y-8"
// //             >
// //               <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 h-[420px]">
// //                 <iframe
// //                   title="ATLA Knots - MP Nagar, Bhopal"
// //                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.8!2d77.432!3d23.198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631f8a00000001%3A0x0!2sM.P.+Nagar+Zone+2%2C+Bhopal%2C+Madhya+Pradesh+462011!5e0!3m2!1sen!2sin!4v1738000000000!5m2!1sen!2sin"
// //                   width="100%"
// //                   height="100%"
// //                   style={{ border: 0 }}
// //                   allowFullScreen=""
// //                   loading="lazy"
// //                   referrerPolicy="no-referrer-when-downgrade"
// //                 />
// //               </div>
// //               <div className={`p-8 rounded-3xl ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
// //                 <h3 className={`text-2xl font-semibold mb-4 ${headingClass}`}>ATLA Knots Solutions</h3>
// //                 <p className={`leading-relaxed ${bodyClass}`}>
// //                   103, Goyal Vihar,<br />
// //                   Plot No 31-C, Zone 2,<br />
// //                   M.P. Nagar, Bhopal - 462011<br />
// //                   Madhya Pradesh, India
// //                 </p>
// //                 <div className="mt-6 space-y-2">
// //                   <a href="tel:+917869636070" className="block text-red-500 hover:underline">+91 78696 36070</a>
// //                   <a href="mailto:admin@atlaknots.com" className="block text-red-500 hover:underline">admin@atlaknots.com</a>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ====================== ATLA KNOTS EXCLUSIVE OFFER POPUP ====================== */}
// //       <AnimatePresence>
// //         {showPopup && (
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
// //             onClick={() => setShowPopup(false)}
// //           >
// //             <motion.div
// //               initial={{ scale: 0.9, y: 40, opacity: 0 }}
// //               animate={{ scale: 1, y: 0, opacity: 1 }}
// //               exit={{ scale: 0.9, y: 40, opacity: 0 }}
// //               transition={{ duration: 0.3, ease: "easeOut" }}
// //               className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden flex flex-col lg:flex-row max-h-[92vh]"
// //               onClick={(e) => e.stopPropagation()}
// //             >
// //               {/* Left Side - Offer Content */}
// //               <div className="lg:w-1/2 bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 p-8 lg:p-10 pb-16 flex flex-col">
// //                 <div className="flex justify-between items-center mb-6">
// //                   <div className="bg-red-600 text-white font-bold px-6 py-2 rounded-full text-sm tracking-wider">
// //                     LIMITED TIME OFFER
// //                   </div>
// //                   <button
// //                     onClick={() => setShowPopup(false)}
// //                     className="text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors"
// //                   >
// //                     <X size={28} />
// //                   </button>
// //                 </div>

// //                 <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-gray-900 dark:text-white mb-3">
// //                   Get up to <span className="text-red-600">60% OFF</span><br />
// //                   on Professional Courses
// //                 </h2>
// //                 <p className="text-lg text-red-600 font-medium mb-8">
// //                   Join thousands of students who transformed their careers with us
// //                 </p>

// //                 <div className="relative flex justify-center my-8">
// //                   <img
// //                     src="https://pbs.twimg.com/media/HCzAwhhbMAAJawO.jpg"
// //                     alt="ATLA KNOTS Professional Training"
// //                     className="w-56 lg:w-72 rounded-3xl shadow-2xl object-cover"
// //                   />

// //                   <div className="absolute -top-5 -left-5 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 text-center">
// //                     <p className="text-red-600 font-semibold text-sm">★ Top Rated</p>
// //                     <p className="font-bold text-gray-900 dark:text-white text-xs mt-1">Digital Marketing Institute</p>
// //                   </div>

// //                   <div className="absolute -bottom-5 -right-5 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 text-center">
// //                     <p className="text-red-600 font-bold text-sm">IT Solutions</p>
// //                     <p className="font-semibold text-gray-900 dark:text-white text-xs mt-1">Software Development</p>
// //                   </div>
// //                 </div>

// //                 <div className="mt-auto grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-700 dark:text-gray-300">
// //                   <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" /> Affordable Fees</div>
// //                   <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" /> Internship Support</div>
// //                   <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" /> 5000+ Students Trained</div>
// //                   <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-600" /> Placement Assistance</div>
// //                 </div>
// //               </div>

// //               {/* Right Side - Form */}
// //               <div className="lg:w-1/2 bg-white dark:bg-gray-900 p-8 lg:p-10 pb-16 flex flex-col">
// //                 <div className="text-center mb-8">
// //                   <h3 className="text-red-600 text-2xl font-bold">Join Today's Free Demo</h3>
// //                   <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">Experience live training • Limited seats</p>
// //                 </div>

// //                 <form onSubmit={handleSubmit} className="space-y-5 flex-1">
// //                   <input
// //                     type="text"
// //                     name="usernamee"
// //                     value={formData.usernamee}
// //                     onChange={handleChange}
// //                     placeholder="Full Name *"
// //                     required
// //                     disabled={loading}
// //                     className="w-full px-5 py-3.5 rounded-2xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:border-red-500 outline-none"
// //                   />
// //                   <input
// //                     type="email"
// //                     name="email"
// //                     value={formData.email}
// //                     onChange={handleChange}
// //                     placeholder="Email ID *"
// //                     required
// //                     disabled={loading}
// //                     className="w-full px-5 py-3.5 rounded-2xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:border-red-500 outline-none"
// //                   />
// //                   <input
// //                     type="tel"
// //                     name="phone"
// //                     value={formData.phone}
// //                     onChange={handleChange}
// //                     placeholder="Mobile Number *"
// //                     required
// //                     disabled={loading}
// //                     className="w-full px-5 py-3.5 rounded-2xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:border-red-500 outline-none"
// //                   />

// //                   <ReCAPTCHA
// //                     sitekey="6LfP7nEsAAAAAOLxpk34nW3cU3uYXON85c8n4D2H"
// //                     onChange={handleCaptchaChange}
// //                     theme={isDark ? "dark" : "light"}
// //                   />

// //                   <button
// //                     type="submit"
// //                     disabled={loading}
// //                     className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-2xl text-lg transition-all shadow-md mt-4"
// //                   >
// //                     {loading ? "Submitting..." : "Register for Free Demo"}
// //                   </button>

// //                   <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
// //                     ✅ No spam • 100% Free Demo • Cancel anytime
// //                   </p>
// //                 </form>
// //               </div>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </div>
// //   );
// // }

// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useTheme } from "../context/ThemeContext";
// import {
//   ArrowRight,
//   X,
//   Code,
//   ShieldCheck,
//   Users,
//   Server,
//   Headphones,
//   BarChart3,
//   CheckCircle,
//   Briefcase,
//   HardDrive,
// } from "lucide-react";
// import heroVideo from "../assets/herosectionvideo.mp4";

// // ReCAPTCHA & Toast
// import ReCAPTCHA from "react-google-recaptcha";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // Redux
// import { useDispatch, useSelector } from "react-redux";
// import {
//   updateField,
//   setCaptcha,
//   clearMessages,
//   submitContactForm,
// } from "./Redux/contact/contactSlice.js";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 60 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

// const staggerContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.15 } },
// };

// // Hero Slider Data
// const HERO_SLIDES = [
//   {
//     image:
//       "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070",
//     title: "Global IT Services",
//     subtitle:
//       "End-to-end digital transformation, product engineering, and cloud delivery for growing brands",
//     cta: "Discover ATLA",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070",
//     title: "Marketing & Growth",
//     subtitle:
//       "Performance marketing, SEO, and brand campaigns designed to convert and scale",
//     cta: "Grow with ATLA",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2070",
//     title: "Creative Product Design",
//     subtitle:
//       "UX-driven web and mobile experiences that engage users and accelerate adoption",
//     cta: "See Solutions",
//   },
// ];

// export default function Home() {
//   const { isDark } = useTheme();
//   const dispatch = useDispatch();
//   const { formData, captchaValue, loading, successMessage, errorMessage } =
//     useSelector((state) => state.contact);

//   const [showPopup, setShowPopup] = useState(false);
//   const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

//   // Auto slide for hero slider
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   // Popup appears after 1.5 seconds
//   useEffect(() => {
//     const timer = setTimeout(() => setShowPopup(true), 1500);
//     return () => clearTimeout(timer);
//   }, []);

//   // Toast Notifications
//   useEffect(() => {
//     if (successMessage) {
//       toast.success(successMessage, { position: "top-right", autoClose: 5000 });
//       dispatch(clearMessages());
//       setShowPopup(false);
//     }
//   }, [successMessage, dispatch]);

//   useEffect(() => {
//     if (errorMessage) {
//       toast.error(errorMessage, { position: "top-right", autoClose: 7000 });
//       dispatch(clearMessages());
//     }
//   }, [errorMessage, dispatch]);

//   const handleChange = (e) => {
//     dispatch(updateField({ name: e.target.name, value: e.target.value }));
//   };

//   const handleCaptchaChange = (value) => {
//     dispatch(setCaptcha(value));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!captchaValue) {
//       toast.error("Please verify that you are not a robot.");
//       return;
//     }
//     dispatch(submitContactForm({ ...formData, captcha: captchaValue }));
//   };

//   // Reusable Classes
//   const cardClass = isDark
//     ? "bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full hover:border-red-500/50 transition-colors"
//     : "bg-white border border-gray-200 shadow-md rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full hover:shadow-xl transition-shadow";

//   const headingClass = isDark ? "text-white" : "text-gray-900";
//   const bodyClass = isDark ? "text-gray-300" : "text-gray-700";
//   const accentClass = "text-red-500";
//   const sectionHeadingAccent = "text-red-500";

//   return (
//     <div
//       className={`min-h-screen overflow-x-hidden transition-colors duration-700
//       ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}`}
//     >
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         theme={isDark ? "dark" : "light"}
//       />

//       {/* ====================== HERO SLIDER SECTION (ATLA KNOTS Solutions) ====================== */}
//       <section className="relative">
//         <div className="relative w-full h-[70vh] min-h-[520px] overflow-hidden">
//           {HERO_SLIDES.map((slide, index) => (
//             <div
//               key={index}
//               className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//                 index === currentHeroSlide ? "opacity-100" : "opacity-0"
//               }`}
//             >
//               <img
//                 src={slide.image}
//                 alt={slide.title}
//                 className="w-full h-full object-cover brightness-[0.85]"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-transparent/30" />
//               <div className="absolute inset-0 flex items-center justify-center px-5 sm:px-10">
//                 <div className="text-center max-w-5xl">
//                   <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 md:mb-6 drop-shadow-2xl">
//                     Your ATLA KNOTS Growth Journey
//                     <br />
//                     <span className="text-red-300">{slide.title}</span>
//                   </h2>
//                   <p className="text-lg sm:text-xl md:text-2xl text-white/95 font-medium mb-8 md:mb-12 max-w-4xl mx-auto drop-shadow-lg">
//                     {slide.subtitle}
//                   </p>
//                   <button className="bg-gradient-to-r from-red-600 via-rose-500 to-orange-500 text-white font-bold uppercase tracking-wider px-10 py-5 rounded-xl shadow-2xl hover:shadow-3xl hover:-translate-y-1.5 transition-all duration-300 text-lg md:text-xl">
//                     {slide.cta} →
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}

//           <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 flex justify-center gap-4 z-20">
//             {HERO_SLIDES.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setCurrentHeroSlide(i)}
//                 className={`w-3.5 h-3.5 rounded-full transition-all duration-400 shadow-md ${
//                   i === currentHeroSlide
//                     ? "bg-[#d4a853] scale-125 ring-2 ring-[#d4a853]/60"
//                     : "bg-white/60 hover:bg-white/90"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         <div className="max-w-6xl mx-auto px-6 -mt-20 sm:-mt-24 relative z-10">
//           <div className="bg-white/95 backdrop-blur-lg border border-[#d4a853]/30 rounded-2xl shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-6 p-8 md:p-10">
//             {[
//               { n: "2000+", l: "Students Placed" },
//               { n: "6", l: "Countries" },
//               { n: "50+", l: "Universities" },
//               { n: "100%", l: "NMC Approved" },
//             ].map((s, i) => (
//               <div key={i} className="text-center">
//                 <div className="text-[#d4a853] text-4xl md:text-5xl font-extrabold">
//                   {s.n}
//                 </div>
//                 <div className="text-[#0a2342] text-sm md:text-base uppercase tracking-wider mt-2 font-semibold">
//                   {s.l}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ====================== HERO SECTION WITH VIDEO (ATLA KNOTS) ====================== */}
//       <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <video
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="absolute inset-0 w-full h-full object-cover"
//           >
//             <source src={heroVideo} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//           <div
//             className={`absolute inset-0 z-10 transition-colors duration-700
//               ${
//                 isDark
//                   ? "bg-gradient-to-br from-black/90 via-black/80 to-black/90"
//                   : "bg-gradient-to-br from-slate-950/95 via-slate-950/90 to-black/70"
//               }`}
//           />
//         </div>
//         <div className="max-w-7xl mx-auto text-center relative z-20">
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={staggerContainer}
//           >
//             <motion.h1
//               variants={fadeInUp}
//               className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-white"
//             >
//               ATLA KNOTS
//               <br />
//               <span
//                 className={
//                   isDark
//                     ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-red-400 to-white"
//                     : "text-red-600"
//                 }
//               >
//                 IT SOLUTIONS
//               </span>
//             </motion.h1>
//             <motion.p
//               variants={fadeInUp}
//               className={`text-xl md:text-2xl max-w-4xl mx-auto mb-10 leading-relaxed
//                 ${isDark ? "text-gray-300" : "text-white"}`}
//             >
//               Making technology impactful, dependable, and easy to use — for
//               businesses of all sizes.
//             </motion.p>
//             <motion.p
//               variants={fadeInUp}
//               className={`text-lg md:text-xl max-w-3xl mx-auto mb-12
//                 ${isDark ? "text-gray-400" : "text-white/90"}`}
//             >
//               We build secure, future-ready software that drives efficiency and
//               digital transformation.
//             </motion.p>
//             <motion.div
//               variants={fadeInUp}
//               className="flex flex-col sm:flex-row gap-6 justify-center"
//             >
//               <button
//                 onClick={() => setShowPopup(true)}
//                 className="group px-10 py-5 rounded-full text-lg font-semibold flex items-center gap-3 transition-all
//                   bg-red-600 hover:bg-red-700 active:bg-red-800 text-white"
//               >
//                 GET STARTED
//                 <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
//               </button>
//               <button
//                 className={`group px-10 py-5 border-2 rounded-full text-lg font-semibold transition-all
//                   ${
//                     isDark
//                       ? "border-red-600/60 text-red-400 hover:border-red-500 hover:text-red-300"
//                       : "border-white/80 text-white hover:bg-white/10"
//                   }`}
//               >
//                 VIEW OUR WORK
//               </button>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ====================== SERVICES SECTION ====================== */}
//       <section
//         className={`py-24 px-6 md:px-12 lg:px-24 transition-colors
//         ${isDark ? "bg-gradient-to-b from-black to-gray-950" : "bg-gray-50"}`}
//       >
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             className={`text-5xl md:text-6xl font-bold text-center mb-6 ${headingClass}`}
//           >
//             OUR <span className={accentClass}>SERVICES</span>
//           </motion.h2>
//           <motion.p
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             className={`text-xl text-center mb-16 max-w-3xl mx-auto ${bodyClass}`}
//           >
//             Comprehensive IT &amp; BPO solutions — from development to support
//             and infrastructure
//           </motion.p>
//           <div className="space-y-20">
//             {/* IT Services */}
//             <div>
//               <h3
//                 className={`text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight ${sectionHeadingAccent}`}
//               >
//                 1. Information Technology Services
//               </h3>
//               <p
//                 className={`text-lg md:text-xl mb-12 text-center max-w-4xl mx-auto leading-relaxed ${bodyClass}`}
//               >
//                 Supporting companies at every stage of the product lifecycle.
//               </p>
//               <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//                 <motion.div
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                   variants={fadeInUp}
//                   className={cardClass}
//                 >
//                   <Code
//                     className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
//                   />
//                   <h4
//                     className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
//                   >
//                     Development
//                   </h4>
//                   <ul
//                     className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}
//                   >
//                     <li>• Web application development</li>
//                     <li>• Mobile application development</li>
//                     <li>• Secure, scalable &amp; user-friendly solutions</li>
//                   </ul>
//                 </motion.div>
//                 <motion.div
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                   variants={fadeInUp}
//                   className={cardClass}
//                 >
//                   <ShieldCheck
//                     className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
//                   />
//                   <h4
//                     className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
//                   >
//                     Testing
//                   </h4>
//                   <ul
//                     className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}
//                   >
//                     <li>• Web application testing</li>
//                     <li>• Mobile application testing</li>
//                     <li>• Quality, performance &amp; security assurance</li>
//                   </ul>
//                 </motion.div>
//                 <motion.div
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                   variants={fadeInUp}
//                   className={cardClass}
//                 >
//                   <Users
//                     className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
//                   />
//                   <h4
//                     className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
//                   >
//                     L2 Support
//                   </h4>
//                   <p
//                     className={`text-sm md:text-base leading-relaxed max-w-xs ${bodyClass}`}
//                   >
//                     Advanced troubleshooting, in-depth diagnosis &amp; root
//                     cause resolution.
//                   </p>
//                 </motion.div>
//                 <motion.div
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                   variants={fadeInUp}
//                   className={cardClass}
//                 >
//                   <Server
//                     className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
//                   />
//                   <h4
//                     className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
//                   >
//                     Product Assistance
//                   </h4>
//                   <ul
//                     className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}
//                   >
//                     <li>• Continuous support &amp; maintenance</li>
//                     <li>• Ticket &amp; incident management</li>
//                     <li>• Change management &amp; SLA tracking</li>
//                   </ul>
//                 </motion.div>
//               </div>
//             </div>

//             {/* BPO Services */}
//             <div>
//               <h3
//                 className={`text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight ${sectionHeadingAccent}`}
//               >
//                 2. Business Process Outsourcing (BPO) Services
//               </h3>
//               <p
//                 className={`text-lg md:text-xl mb-12 text-center max-w-3xl mx-auto leading-relaxed ${bodyClass}`}
//               >
//                 Streamline operations and enhance customer engagement with
//                 reliable support.
//               </p>
//               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//                 <motion.div
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                   variants={fadeInUp}
//                   className={cardClass}
//                 >
//                   <Headphones
//                     className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
//                   />
//                   <h4
//                     className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
//                   >
//                     Voice, Chat &amp; Email
//                   </h4>
//                   <ul
//                     className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}
//                   >
//                     <li>• Inbound &amp; outbound voice support</li>
//                     <li>• Real-time chat assistance</li>
//                     <li>• Structured email &amp; ticketing</li>
//                   </ul>
//                 </motion.div>
//                 <motion.div
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                   variants={fadeInUp}
//                   className={cardClass}
//                 >
//                   <BarChart3
//                     className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
//                   />
//                   <h4
//                     className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
//                   >
//                     Cataloguing &amp; Enrichment
//                   </h4>
//                   <ul
//                     className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}
//                   >
//                     <li>• Product descriptions, tags &amp; keywords</li>
//                     <li>• Data validation &amp; cleaning</li>
//                     <li>• Category &amp; attribute enrichment</li>
//                   </ul>
//                 </motion.div>
//                 <motion.div
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                   variants={fadeInUp}
//                   className={cardClass}
//                 >
//                   <CheckCircle
//                     className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
//                   />
//                   <h4
//                     className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
//                   >
//                     Quality Assurance
//                   </h4>
//                   <p
//                     className={`text-sm md:text-base leading-relaxed max-w-xs ${bodyClass}`}
//                   >
//                     Call/chat audits, SOP/SLA compliance, feedback &amp;
//                     continuous improvement.
//                   </p>
//                 </motion.div>
//               </div>
//             </div>

//             {/* Digital Marketing Services */}
//             <div className="text-center max-w-5xl mx-auto">
//               <h3
//                 className={`text-4xl md:text-5xl font-bold mb-8 tracking-tight ${sectionHeadingAccent}`}
//               >
//                 3. Digital &amp; Marketing Services
//               </h3>
//               <p
//                 className={`text-lg md:text-xl leading-relaxed ${bodyClass} mb-12`}
//               >
//                 In today’s digital-first world, building a strong online
//                 presence is essential for businesses to grow and stay ahead.
//               </p>
//               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//                 <motion.div
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                   variants={fadeInUp}
//                   className={cardClass}
//                 >
//                   <Headphones
//                     className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
//                   />
//                   <h4
//                     className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
//                   >
//                     Search Engine Optimization
//                   </h4>
//                   <ul
//                     className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}
//                   >
//                     <li>• Boost your website ranking</li>
//                     <li>• Increase organic traffic</li>
//                     <li>• Attract the right audience</li>
//                     <li>• Gain competitive edge</li>
//                   </ul>
//                 </motion.div>
//                 <motion.div
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                   variants={fadeInUp}
//                   className={cardClass}
//                 >
//                   <BarChart3
//                     className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
//                   />
//                   <h4
//                     className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
//                   >
//                     Social Media Marketing
//                   </h4>
//                   <ul
//                     className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}
//                   >
//                     <li>• Reach the right audience</li>
//                     <li>• Build trust and brand awareness</li>
//                     <li>• Increase engagement</li>
//                     <li>• Convert followers into customers</li>
//                   </ul>
//                 </motion.div>
//                 <motion.div
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                   variants={fadeInUp}
//                   className={cardClass}
//                 >
//                   <CheckCircle
//                     className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
//                   />
//                   <h4
//                     className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
//                   >
//                     Google &amp; Meta Ads
//                   </h4>
//                   <ul
//                     className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}
//                   >
//                     <li>• Targeted ad campaigns</li>
//                     <li>• Improve brand visibility</li>
//                     <li>• Generate quality leads</li>
//                     <li>• Effective PPC strategies</li>
//                   </ul>
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ====================== TESTIMONIALS SECTION ====================== */}
//       <section
//         className={`py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-gray-950" : "bg-gray-50"}`}
//       >
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             className="text-center mb-16"
//           >
//             <h2
//               className={`text-5xl md:text-6xl font-bold mb-4 ${headingClass}`}
//             >
//               TESTIMONIALS
//             </h2>
//             <p className={`text-2xl font-medium ${accentClass}`}>
//               Real Results, Real Client Experiences.
//             </p>
//             <p className={`mt-6 text-lg max-w-3xl mx-auto ${bodyClass}`}>
//               We focus on performance, transparency, and long-term partnerships.
//             </p>
//           </motion.div>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 name: "Swadesh Jyoti",
//                 text: "A reliable digital marketing partner. ATLA KNOTS understands business needs and works with clear communication.",
//               },
//               {
//                 name: "Amina",
//                 text: "Working with ATLA KNOTS has been a great decision. Their team understands our brand and consistently helps us reach more customers.",
//               },
//               {
//                 name: "Bharat e-Filing",
//                 text: "ATLA KNOTS has helped us improve our digital visibility and attract more clients. Practical and result-focused.",
//               },
//             ].map((testimonial, idx) => (
//               <motion.div
//                 key={idx}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={fadeInUp}
//                 className={`p-8 rounded-3xl h-full flex flex-col ${isDark ? "bg-gray-900 border border-gray-800" : "bg-white shadow-lg border border-gray-100"}`}
//               >
//                 <div className="flex gap-1 text-2xl text-yellow-400 mb-6">
//                   ★★★★★
//                 </div>
//                 <p className={`flex-1 leading-relaxed mb-8 ${bodyClass}`}>
//                   "{testimonial.text}"
//                 </p>
//                 <p className={`font-semibold text-lg ${headingClass}`}>
//                   {testimonial.name}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ====================== WHY CHOOSE US ====================== */}
//       <section
//         className={`py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-black" : "bg-white"}`}
//       >
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             className={`text-5xl md:text-6xl font-bold text-center mb-16 ${headingClass}`}
//           >
//             WHY <span className={accentClass}>CHOOSE US</span>
//           </motion.h2>
//           <div className="grid md:grid-cols-3 gap-10 lg:gap-16 text-center">
//             {[
//               {
//                 icon: Users,
//                 title: "True Partnership",
//                 desc: "We become an extension of your team — understanding your business deeply.",
//               },
//               {
//                 icon: Briefcase,
//                 title: "Enterprise Expertise",
//                 desc: "Proven experience in BFSI, retail, government & PSU projects.",
//               },
//               {
//                 icon: HardDrive,
//                 title: "Long-term Support",
//                 desc: "24×7 production support, SLA-based maintenance & AMS.",
//               },
//             ].map((item, idx) => (
//               <motion.div
//                 key={idx}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={fadeInUp}
//                 className={`p-10 rounded-3xl border transition-all ${isDark ? "bg-gray-900 border-gray-800 hover:border-red-500/30" : "bg-white border-gray-200 shadow-md hover:shadow-lg"}`}
//               >
//                 <div
//                   className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 mx-auto ${isDark ? "bg-gray-800" : "bg-red-50"}`}
//                 >
//                   <item.icon className={`w-10 h-10 ${accentClass}`} />
//                 </div>
//                 <h3 className={`text-3xl font-bold mb-5 ${headingClass}`}>
//                   {item.title}
//                 </h3>
//                 <p
//                   className={`leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}
//                 >
//                   {item.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ====================== LET'S DISCUSS YOUR PROJECT ====================== */}
//       <section
//         className={`py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-black" : "bg-white"}`}
//       >
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-16 items-start">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeInUp}
//             >
//               <h2
//                 className={`text-5xl md:text-6xl font-bold mb-3 ${headingClass}`}
//               >
//                 Let's Discuss Your Project
//               </h2>
//               <p className={`text-xl mb-10 ${bodyClass}`}>
//                 Tell us about your requirements. Our team will get back to you
//                 shortly.
//               </p>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                   <input
//                     type="text"
//                     name="usernamee"
//                     value={formData.usernamee}
//                     onChange={handleChange}
//                     placeholder="Your Name"
//                     required
//                     disabled={loading}
//                     className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-red-500 transition-colors ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
//                   />
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Your Email"
//                     required
//                     disabled={loading}
//                     className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-red-500 transition-colors ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
//                   />
//                 </div>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="Mobile Number"
//                   required
//                   disabled={loading}
//                   className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-red-500 transition-colors ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
//                 />
//                 <input
//                   type="text"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   placeholder="Subject (Optional)"
//                   disabled={loading}
//                   className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-red-500 transition-colors ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
//                 />
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows={5}
//                   placeholder="Tell us about your project..."
//                   required
//                   disabled={loading}
//                   className={`w-full px-6 py-4 rounded-3xl border focus:outline-none focus:border-red-500 transition-colors resize-y ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
//                 />
//                 <ReCAPTCHA
//                   sitekey="6LfP7nEsAAAAAOLxpk34nW3cU3uYXON85c8n4D2H"
//                   onChange={handleCaptchaChange}
//                   theme={isDark ? "dark" : "light"}
//                 />
//                 <div className="flex flex-col sm:flex-row gap-4 pt-4">
//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className={`flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-5 rounded-2xl transition-all text-lg ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
//                   >
//                     {loading ? "Sending..." : "Submit Inquiry"}
//                   </button>
//                   <button
//                     type="button"
//                     onClick={() =>
//                       window.open("https://wa.me/917869636070", "_blank")
//                     }
//                     className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-5 rounded-2xl transition-all text-lg flex items-center justify-center gap-3"
//                   >
//                     Chat on WhatsApp
//                   </button>
//                 </div>
//               </form>
//             </motion.div>
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeInUp}
//               className="space-y-8"
//             >
//               <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 h-[420px]">
//                 <iframe
//                   title="ATLA Knots - MP Nagar, Bhopal"
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.8!2d77.432!3d23.198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631f8a00000001%3A0x0!2sM.P.+Nagar+Zone+2%2C+Bhopal%2C+Madhya+Pradesh+462011!5e0!3m2!1sen!2sin!4v1738000000000!5m2!1sen!2sin"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen=""
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 />
//               </div>
//               <div
//                 className={`p-8 rounded-3xl ${isDark ? "bg-gray-900" : "bg-gray-50"}`}
//               >
//                 <h3 className={`text-2xl font-semibold mb-4 ${headingClass}`}>
//                   ATLA Knots Solutions
//                 </h3>
//                 <p className={`leading-relaxed ${bodyClass}`}>
//                   103, Goyal Vihar,
//                   <br />
//                   Plot No 31-C, Zone 2,
//                   <br />
//                   M.P. Nagar, Bhopal - 462011
//                   <br />
//                   Madhya Pradesh, India
//                 </p>
//                 <div className="mt-6 space-y-2">
//                   <a
//                     href="tel:+917869636070"
//                     className="block text-red-500 hover:underline"
//                   >
//                     +91 78696 36070
//                   </a>
//                   <a
//                     href="mailto:admin@atlaknots.com"
//                     className="block text-red-500 hover:underline"
//                   >
//                     admin@atlaknots.com
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* ====================== ATLA KNOTS EXCLUSIVE OFFER POPUP ====================== */}
// <AnimatePresence>
//   {showPopup && (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
//       onClick={() => setShowPopup(false)}
//     >
//       <motion.div
//         initial={{ scale: 0.9, y: 40, opacity: 0 }}
//         animate={{ scale: 1, y: 0, opacity: 1 }}
//         exit={{ scale: 0.9, y: 40, opacity: 0 }}
//         transition={{ duration: 0.3, ease: "easeOut" }}
//         className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden flex flex-col lg:flex-row max-h-[92vh]"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Left Side - Offer Content */}
//         <div className="lg:w-1/2 bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 p-8 lg:p-10 pb-16 flex flex-col">
//           <div className="flex justify-between items-center mb-6">
//             <div className="bg-red-600 text-white font-bold px-6 py-2 rounded-full text-sm tracking-wider">
//               LIMITED TIME OFFER
//             </div>
//             <button
//               onClick={() => setShowPopup(false)}
//               className="text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors"
//             >
//               <X size={28} />
//             </button>
//           </div>

//           <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-gray-900 dark:text-white mb-3">
//             Get up to <span className="text-red-600">60% OFF</span>
//             <br />
//             on Professional Courses
//           </h2>
//           <p className="text-lg text-red-600 font-medium mb-8">
//             Join thousands of students who transformed their careers with
//             us
//           </p>

//           <div className="relative flex justify-center my-8">
//             <img
//               src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070"
//               alt="ATLA KNOTS Professional Training"
//               className="w-56 lg:w-72 rounded-3xl shadow-2xl object-cover"
//             />

//             <div className="absolute -top-5 -left-5 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 text-center">
//               <p className="text-red-600 font-semibold text-sm">
//                 ★ Top Rated
//               </p>
//               <p className="font-bold text-gray-900 dark:text-white text-xs mt-1">
//                 Digital Marketing Institute
//               </p>
//             </div>

//             <div className="absolute -bottom-5 -right-5 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 text-center">
//               <p className="text-red-600 font-bold text-sm">
//                 IT Solutions
//               </p>
//               <p className="font-semibold text-gray-900 dark:text-white text-xs mt-1">
//                 Software Development
//               </p>
//             </div>
//           </div>

//           <div className="mt-auto grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-700 dark:text-gray-300">
//             <div className="flex items-center gap-2">
//               <CheckCircle className="w-5 h-5 text-green-600" />{" "}
//               Affordable Fees
//             </div>
//             <div className="flex items-center gap-2">
//               <CheckCircle className="w-5 h-5 text-green-600" />{" "}
//               Internship Support
//             </div>
//             <div className="flex items-center gap-2">
//               <CheckCircle className="w-5 h-5 text-green-600" /> 5000+
//               Students Trained
//             </div>
//             <div className="flex items-center gap-2">
//               <CheckCircle className="w-5 h-5 text-green-600" /> Placement
//               Assistance
//             </div>
//           </div>
//         </div>

//         {/* Right Side - Form */}
//         <div className="lg:w-1/2 bg-white dark:bg-gray-900 p-8 lg:p-10 pb-16 flex flex-col">
//           <div className="text-center mb-8">
//             <h3 className="text-red-600 text-2xl font-bold">
//               Join Today's Free Demo
//             </h3>
//             <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">
//               Experience live training • Limited seats
//             </p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-5 flex-1">
//             <input
//               type="text"
//               name="usernamee"
//               value={formData.usernamee}
//               onChange={handleChange}
//               placeholder="Full Name *"
//               required
//               disabled={loading}
//               className="w-full px-5 py-3.5 rounded-2xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:border-red-500 outline-none"
//             />
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Email ID *"
//               required
//               disabled={loading}
//               className="w-full px-5 py-3.5 rounded-2xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:border-red-500 outline-none"
//             />
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               placeholder="Mobile Number *"
//               required
//               disabled={loading}
//               className="w-full px-5 py-3.5 rounded-2xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:border-red-500 outline-none"
//             />

//             <ReCAPTCHA
//               sitekey="6LfP7nEsAAAAAOLxpk34nW3cU3uYXON85c8n4D2H"
//               onChange={handleCaptchaChange}
//               theme={isDark ? "dark" : "light"}
//             />

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-2xl text-lg transition-all shadow-md mt-4"
//             >
//               {loading ? "Submitting..." : "Register for Free Demo"}
//             </button>

//             <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
//               ✅ No spam • 100% Free Demo • Cancel anytime
//             </p>
//           </form>
//         </div>
//       </motion.div>
//     </motion.div>
//   )}
// </AnimatePresence>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {
  ArrowRight,
  X,
  Code,
  ShieldCheck,
  Users,
  Server,
  Headphones,
  BarChart3,
  CheckCircle,
  Briefcase,
  HardDrive,
} from "lucide-react";
import heroVideo from "../assets/herosectionvideo.mp4";

// ReCAPTCHA & Toast
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  updateField,
  setCaptcha,
  clearMessages,
  submitContactForm,
} from "./Redux/contact/contactSlice.js";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

// Hero Slider Data
const HERO_SLIDES = [
  {
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070",
    title: "Global IT Services",
    subtitle:
      "End-to-end digital transformation, product engineering, and cloud delivery for growing brands",
    cta: "Discover ATLA",
  },
  {
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070",
    title: "Marketing & Growth",
    subtitle:
      "Performance marketing, SEO, and brand campaigns designed to convert and scale",
    cta: "Grow with ATLA",
  },
  {
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2070",
    title: "Creative Product Design",
    subtitle:
      "UX-driven web and mobile experiences that engage users and accelerate adoption",
    cta: "See Solutions",
  },
];

export default function Home() {
  const { isDark } = useTheme();
  const dispatch = useDispatch();
  const { formData, captchaValue, loading, successMessage, errorMessage } =
    useSelector((state) => state.contact);

  const [showPopup, setShowPopup] = useState(false);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  // Auto slide for hero slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Popup appears after 1.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Toast Notifications
  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage, { position: "top-right", autoClose: 5000 });
      dispatch(clearMessages());
      setShowPopup(false);
    }
  }, [successMessage, dispatch]);

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage, { position: "top-right", autoClose: 7000 });
      dispatch(clearMessages());
    }
  }, [errorMessage, dispatch]);

  const handleChange = (e) => {
    dispatch(updateField({ name: e.target.name, value: e.target.value }));
  };

  const handleCaptchaChange = (value) => {
    dispatch(setCaptcha(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaValue) {
      toast.error("Please verify that you are not a robot.");
      return;
    }
    dispatch(submitContactForm({ ...formData, captcha: captchaValue }));
  };

  // Reusable Classes with Red Theme
  const cardClass = isDark
    ? "bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full hover:border-red-500/50 transition-colors"
    : "bg-white border border-gray-200 shadow-md rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full hover:shadow-xl transition-shadow";

  const headingClass = isDark ? "text-white" : "text-gray-900";
  const bodyClass = isDark ? "text-gray-300" : "text-gray-700";
  const accentClass = "text-red-500";
  const sectionHeadingAccent = "text-red-500";

  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-colors duration-700
      ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}`}
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        theme={isDark ? "dark" : "light"}
      />

      {/* ====================== HERO SLIDER SECTION ====================== */}
      <section className="relative">
        <div className="relative w-full h-[70vh] min-h-[520px] overflow-hidden">
          {HERO_SLIDES.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentHeroSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover brightness-[0.85]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-transparent/30" />
              <div className="absolute inset-0 flex items-center justify-center px-5 sm:px-10">
                <div className="text-center max-w-5xl">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 md:mb-6 drop-shadow-2xl">
                    Your ATLA KNOTS Growth Journey
                    <br />
                    <span className="text-red-500">{slide.title}</span>
                  </h2>
                  <p className="text-lg sm:text-xl md:text-2xl text-white/95 font-medium mb-8 md:mb-12 max-w-4xl mx-auto drop-shadow-lg">
                    {slide.subtitle}
                  </p>
                  <button className="bg-gradient-to-r from-red-600 via-red-500 to-rose-600 text-white font-bold uppercase tracking-wider px-10 py-5 rounded-xl shadow-2xl hover:shadow-3xl hover:-translate-y-1.5 transition-all duration-300 text-lg md:text-xl">
                    {slide.cta} →
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Slider Dots - Red Theme */}
          <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 flex justify-center gap-4 z-20">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentHeroSlide(i)}
                className={`w-3.5 h-3.5 rounded-full transition-all duration-400 shadow-md ${
                  i === currentHeroSlide
                    ? "bg-red-500 scale-125 ring-2 ring-red-500/60"
                    : "bg-white/60 hover:bg-white/90"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Bar - Red Theme */}
        <div className="max-w-6xl mx-auto px-6 -mt-20 sm:-mt-24 relative z-10">
          <div className="bg-white/95 backdrop-blur-lg border border-red-500/30 rounded-2xl shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-6 p-8 md:p-10">
            {[
              { n: "10+", l: "Years of Experience" },
              { n: "5x", l: "Average return on Investment" },
              { n: "100+", l: "Businesses Transformation" },
              { n: "50+", l: "Industry we serve" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-red-500 text-4xl md:text-5xl font-extrabold">
                  {s.n}
                </div>
                <div className="text-[#0a2342] text-sm md:text-base uppercase tracking-wider mt-2 font-semibold">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== HERO SECTION WITH VIDEO ====================== */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div
            className={`absolute inset-0 z-10 transition-colors duration-700
              ${
                isDark
                  ? "bg-gradient-to-br from-black/90 via-black/80 to-black/90"
                  : "bg-gradient-to-br from-slate-950/95 via-slate-950/90 to-black/70"
              }`}
          />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-white"
            >
              ATLA KNOTS
              <br />
              <span
                className={
                  isDark
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-red-400 to-white"
                    : "text-red-600"
                }
              >
                IT SOLUTIONS
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className={`text-xl md:text-2xl max-w-4xl mx-auto mb-10 leading-relaxed
                ${isDark ? "text-gray-300" : "text-white"}`}
            >
              Making technology impactful, dependable, and easy to use — for
              businesses of all sizes.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className={`text-lg md:text-xl max-w-3xl mx-auto mb-12
                ${isDark ? "text-gray-400" : "text-white/90"}`}
            >
              We build secure, future-ready software that drives efficiency and
              digital transformation.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <button
                onClick={() => setShowPopup(true)}
                className="group px-10 py-5 rounded-full text-lg font-semibold flex items-center gap-3 transition-all
                  bg-red-600 hover:bg-red-700 active:bg-red-800 text-white"
              >
                GET STARTED
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                className={`group px-10 py-5 border-2 rounded-full text-lg font-semibold transition-all
                  ${
                    isDark
                      ? "border-red-600/60 text-red-400 hover:border-red-500 hover:text-red-300"
                      : "border-white/80 text-white hover:bg-white/10"
                  }`}
              >
                VIEW OUR WORK
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ====================== SERVICES SECTION ====================== */}
      <section
        className={`py-24 px-6 md:px-12 lg:px-24 transition-colors
        ${isDark ? "bg-gradient-to-b from-black to-gray-950" : "bg-gray-50"}`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={`text-5xl md:text-6xl font-bold text-center mb-6 ${headingClass}`}
          >
            OUR <span className={accentClass}>SERVICES</span>
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={`text-xl text-center mb-16 max-w-3xl mx-auto ${bodyClass}`}
          >
            Comprehensive IT &amp; BPO solutions — from development to support
            and infrastructure
          </motion.p>

          <div className="space-y-20">
            {/* IT Services */}
            <div>
              <h3
                className={`text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight ${sectionHeadingAccent}`}
              >
                1. Information Technology Services
              </h3>
              <p
                className={`text-lg md:text-xl mb-12 text-center max-w-4xl mx-auto leading-relaxed ${bodyClass}`}
              >
                Supporting companies at every stage of the product lifecycle.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {[Code, ShieldCheck, Users, Server].map((Icon, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className={cardClass}
                  >
                    <Icon
                      className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
                    />
                    <h4
                      className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
                    >
                      {
                        [
                          "Development",
                          "Testing",
                          "L2 Support",
                          "Product Assistance",
                        ][index]
                      }
                    </h4>
                    <ul
                      className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}
                    >
                      {index === 0 && (
                        <>
                          <li>• Web application development</li>
                          <li>• Mobile application development</li>
                          <li>
                            • Secure, scalable &amp; user-friendly solutions
                          </li>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <li>• Web application testing</li>
                          <li>• Mobile application testing</li>
                          <li>
                            • Quality, performance &amp; security assurance
                          </li>
                        </>
                      )}
                      {index === 2 && (
                        <li>
                          • Advanced troubleshooting, in-depth diagnosis &amp;
                          root cause resolution.
                        </li>
                      )}
                      {index === 3 && (
                        <>
                          <li>• Continuous support &amp; maintenance</li>
                          <li>• Ticket &amp; incident management</li>
                          <li>• Change management &amp; SLA tracking</li>
                        </>
                      )}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* BPO Services */}
            <div>
              <h3
                className={`text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight ${sectionHeadingAccent}`}
              >
                2. Business Process Outsourcing (BPO) Services
              </h3>
              <p
                className={`text-lg md:text-xl mb-12 text-center max-w-3xl mx-auto leading-relaxed ${bodyClass}`}
              >
                Streamline operations and enhance customer engagement with
                reliable support.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {[Headphones, BarChart3, CheckCircle].map((Icon, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className={cardClass}
                  >
                    <Icon
                      className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
                    />
                    <h4
                      className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
                    >
                      {
                        [
                          "Voice, Chat &amp; Email",
                          "Cataloguing &amp; Enrichment",
                          "Quality Assurance",
                        ][index]
                      }
                    </h4>
                    <ul
                      className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}
                    >
                      {index === 0 && (
                        <>
                          <li>• Inbound &amp; outbound voice support</li>
                          <li>• Real-time chat assistance</li>
                          <li>• Structured email &amp; ticketing</li>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <li>• Product descriptions, tags &amp; keywords</li>
                          <li>• Data validation &amp; cleaning</li>
                          <li>• Category &amp; attribute enrichment</li>
                        </>
                      )}
                      {index === 2 && (
                        <p
                          className={`text-sm md:text-base leading-relaxed max-w-xs ${bodyClass}`}
                        >
                          Call/chat audits, SOP/SLA compliance, feedback &amp;
                          continuous improvement.
                        </p>
                      )}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Digital Marketing Services */}
            <div className="text-center max-w-5xl mx-auto">
              <h3
                className={`text-4xl md:text-5xl font-bold mb-8 tracking-tight ${sectionHeadingAccent}`}
              >
                3. Digital &amp; Marketing Services
              </h3>
              <p
                className={`text-lg md:text-xl leading-relaxed ${bodyClass} mb-12`}
              >
                In today’s digital-first world, building a strong online
                presence is essential for businesses to grow and stay ahead.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {[Headphones, BarChart3, CheckCircle].map((Icon, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className={cardClass}
                  >
                    <Icon
                      className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
                    />
                    <h4
                      className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
                    >
                      {
                        [
                          "Search Engine Optimization",
                          "Social Media Marketing",
                          "Google &amp; Meta Ads",
                        ][index]
                      }
                    </h4>
                    <ul
                      className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}
                    >
                      {index === 0 && (
                        <>
                          <li>• Boost your website ranking</li>
                          <li>• Increase organic traffic</li>
                          <li>• Attract the right audience</li>
                          <li>• Gain competitive edge</li>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <li>• Reach the right audience</li>
                          <li>• Build trust and brand awareness</li>
                          <li>• Increase engagement</li>
                          <li>• Convert followers into customers</li>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <li>• Targeted ad campaigns</li>
                          <li>• Improve brand visibility</li>
                          <li>• Generate quality leads</li>
                          <li>• Effective PPC strategies</li>
                        </>
                      )}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== TESTIMONIALS SECTION ====================== */}
      <section
        className={`py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-gray-950" : "bg-gray-50"}`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2
              className={`text-5xl md:text-6xl font-bold mb-4 ${headingClass}`}
            >
              TESTIMONIALS
            </h2>
            <p className={`text-2xl font-medium ${accentClass}`}>
              Real Results, Real Client Experiences.
            </p>
            <p className={`mt-6 text-lg max-w-3xl mx-auto ${bodyClass}`}>
              We focus on performance, transparency, and long-term partnerships.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Swadesh Jyoti",
                text: "A reliable digital marketing partner. ATLA KNOTS understands business needs and works with clear communication.",
              },
              {
                name: "Amina",
                text: "Working with ATLA KNOTS has been a great decision. Their team understands our brand and consistently helps us reach more customers.",
              },
              {
                name: "Bharat e-Filing",
                text: "ATLA KNOTS has helped us improve our digital visibility and attract more clients. Practical and result-focused.",
              },
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={`p-8 rounded-3xl h-full flex flex-col ${isDark ? "bg-gray-900 border border-gray-800" : "bg-white shadow-lg border border-gray-100"}`}
              >
                <div className="flex gap-1 text-2xl text-yellow-400 mb-6">
                  ★★★★★
                </div>
                <p className={`flex-1 leading-relaxed mb-8 ${bodyClass}`}>
                  "{testimonial.text}"
                </p>
                <p className={`font-semibold text-lg ${headingClass}`}>
                  {testimonial.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== WHY CHOOSE US ====================== */}
      <section
        className={`py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-black" : "bg-white"}`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={`text-5xl md:text-6xl font-bold text-center mb-16 ${headingClass}`}
          >
            WHY <span className={accentClass}>CHOOSE US</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-10 lg:gap-16 text-center">
            {[
              {
                icon: Users,
                title: "True Partnership",
                desc: "We become an extension of your team — understanding your business deeply.",
              },
              {
                icon: Briefcase,
                title: "Enterprise Expertise",
                desc: "Proven experience in BFSI, retail, government & PSU projects.",
              },
              {
                icon: HardDrive,
                title: "Long-term Support",
                desc: "24×7 production support, SLA-based maintenance & AMS.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={`p-10 rounded-3xl border transition-all ${isDark ? "bg-gray-900 border-gray-800 hover:border-red-500/30" : "bg-white border-gray-200 shadow-md hover:shadow-lg"}`}
              >
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 mx-auto ${isDark ? "bg-gray-800" : "bg-red-50"}`}
                >
                  <item.icon className={`w-10 h-10 ${accentClass}`} />
                </div>
                <h3 className={`text-3xl font-bold mb-5 ${headingClass}`}>
                  {item.title}
                </h3>
                <p
                  className={`leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== LET'S DISCUSS YOUR PROJECT ====================== */}
      <section
        className={`py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-black" : "bg-white"}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2
                className={`text-5xl md:text-6xl font-bold mb-3 ${headingClass}`}
              >
                Let's Discuss Your Project
              </h2>
              <p className={`text-xl mb-10 ${bodyClass}`}>
                Tell us about your requirements. Our team will get back to you
                shortly.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="usernamee"
                    value={formData.usernamee}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    disabled={loading}
                    className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-red-500 transition-colors ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    disabled={loading}
                    className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-red-500 transition-colors ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  required
                  disabled={loading}
                  className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-red-500 transition-colors ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject (Optional)"
                  disabled={loading}
                  className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-red-500 transition-colors ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your project..."
                  required
                  disabled={loading}
                  className={`w-full px-6 py-4 rounded-3xl border focus:outline-none focus:border-red-500 transition-colors resize-y ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
                />
                <ReCAPTCHA
                  sitekey="6LfP7nEsAAAAAOLxpk34nW3cU3uYXON85c8n4D2H"
                  onChange={handleCaptchaChange}
                  theme={isDark ? "dark" : "light"}
                />
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-5 rounded-2xl transition-all text-lg ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
                  >
                    {loading ? "Sending..." : "Submit Inquiry"}
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      window.open("https://wa.me/917869636070", "_blank")
                    }
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-5 rounded-2xl transition-all text-lg flex items-center justify-center gap-3"
                  >
                    Chat on WhatsApp
                  </button>
                </div>
              </form>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-8"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 h-[420px]">
                <iframe
                  title="ATLA Knots - MP Nagar, Bhopal"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.8!2d77.432!3d23.198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631f8a00000001%3A0x0!2sM.P.+Nagar+Zone+2%2C+Bhopal%2C+Madhya+Pradesh+462011!5e0!3m2!1sen!2sin!4v1738000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div
                className={`p-8 rounded-3xl ${isDark ? "bg-gray-900" : "bg-gray-50"}`}
              >
                <h3 className={`text-2xl font-semibold mb-4 ${headingClass}`}>
                  ATLA Knots Solutions
                </h3>
                <p className={`leading-relaxed ${bodyClass}`}>
                  103, Goyal Vihar,
                  <br />
                  Plot No 31-C, Zone 2,
                  <br />
                  M.P. Nagar, Bhopal - 462011
                  <br />
                  Madhya Pradesh, India
                </p>
                <div className="mt-6 space-y-2">
                  <a
                    href="tel:+917869636070"
                    className="block text-red-500 hover:underline"
                  >
                    +91 78696 36070
                  </a>
                  <a
                    href="mailto:admin@atlaknots.com"
                    className="block text-red-500 hover:underline"
                  >
                    admin@atlaknots.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================== EXCLUSIVE OFFER POPUP ====================== */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden flex flex-col lg:flex-row max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Side - Offer Content */}
              <div className="lg:w-1/2 bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 p-8 lg:p-10 pb-16 flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <div className="bg-red-600 text-white font-bold px-6 py-2 rounded-full text-sm tracking-wider">
                    LIMITED TIME OFFER
                  </div>
                  <button
                    onClick={() => setShowPopup(false)}
                    className="text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors"
                  >
                    <X size={28} />
                  </button>
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-gray-900 dark:text-white mb-3">
                  Get up to <span className="text-red-600">60% OFF</span>
                  <br />
                  on Professional Courses
                </h2>
                <p className="text-lg text-red-600 font-medium mb-8">
                  Join thousands of students who transformed their careers with
                  us
                </p>

                <div className="relative flex justify-center my-8">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070"
                    alt="ATLA KNOTS Professional Training"
                    className="w-56 lg:w-72 rounded-3xl shadow-2xl object-cover"
                  />

                  <div className="absolute -top-5 -left-5 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 text-center">
                    <p className="text-red-600 font-semibold text-sm">
                      ★ Top Rated
                    </p>
                    <p className="font-bold text-gray-900 dark:text-white text-xs mt-1">
                      Digital Marketing Institute
                    </p>
                  </div>

                  <div className="absolute -bottom-5 -right-5 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 text-center">
                    <p className="text-red-600 font-bold text-sm">
                      IT Solutions
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-white text-xs mt-1">
                      Software Development
                    </p>
                  </div>
                </div>

                <div className="mt-auto grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />{" "}
                    Affordable Pricing
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" /> 100+
                    Clients Served
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" /> 5000+
                    Expert Team Support
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" /> Placement
                    End-to-End Solutions
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="lg:w-1/2 bg-white dark:bg-gray-900 p-8 lg:p-10 pb-16 flex flex-col">
                <div className="text-center mb-8">
                  <h3 className="text-red-600 text-2xl font-bold">
                    Join Today's Free Demo
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">
                    Experience live training • Limited seats
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 flex-1">
                  <input
                    type="text"
                    name="usernamee"
                    value={formData.usernamee}
                    onChange={handleChange}
                    placeholder="Full Name *"
                    required
                    disabled={loading}
                    className="w-full px-5 py-3.5 rounded-2xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:border-red-500 outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email ID *"
                    required
                    disabled={loading}
                    className="w-full px-5 py-3.5 rounded-2xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:border-red-500 outline-none"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Mobile Number *"
                    required
                    disabled={loading}
                    className="w-full px-5 py-3.5 rounded-2xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:border-red-500 outline-none"
                  />

                  <ReCAPTCHA
                    sitekey="6LfP7nEsAAAAAOLxpk34nW3cU3uYXON85c8n4D2H"
                    onChange={handleCaptchaChange}
                    theme={isDark ? "dark" : "light"}
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-2xl text-lg transition-all shadow-md mt-4"
                  >
                    {loading ? "Submitting..." : "Register for Free Demo"}
                  </button>

                  <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
                    ✅ No spam • 100% Free Demo • Cancel anytime
                  </p>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
