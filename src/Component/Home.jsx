// // // // import React, { useState, useEffect } from "react";
// // // // import { motion } from "framer-motion";
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

// // // // const fadeInUp = {
// // // //   hidden: { opacity: 0, y: 60 },
// // // //   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// // // // };

// // // // const staggerContainer = {
// // // //   hidden: {},
// // // //   visible: { transition: { staggerChildren: 0.15 } },
// // // // };

// // // // export default function Home() {
// // // //   const [isDark, setIsDark] = useState(
// // // //     () => document.documentElement.classList.contains("dark")
// // // //   );

// // // //   useEffect(() => {
// // // //     const observer = new MutationObserver(() => {
// // // //       setIsDark(document.documentElement.classList.contains("dark"));
// // // //     });
// // // //     observer.observe(document.documentElement, {
// // // //       attributes: true,
// // // //       attributeFilter: ["class"],
// // // //     });
// // // //     return () => observer.disconnect();
// // // //   }, []);

// // // //   // Reusable class helpers
// // // //   const cardClass = isDark
// // // //     ? "bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full"
// // // //     : "bg-white border border-gray-200 shadow-md rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full";

// // // //   const headingClass = isDark ? "text-white" : "text-gray-900";
// // // //   const bodyClass = isDark ? "text-gray-300" : "text-gray-700";
// // // //   const accentClass = isDark ? "text-red-500" : "text-blue-600";
// // // //   const sectionHeadingAccent = isDark ? "text-red-400" : "text-blue-700";

// // // //   return (
// // // //     <div
// // // //       className={`min-h-screen overflow-x-hidden transition-colors duration-700
// // // //       ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}`}
// // // //     >
// // // //       {/* ====================== HERO SECTION ====================== */}
// // // //       <section
// // // //         className={`relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden
// // // //         ${
// // // //           isDark
// // // //             ? "bg-gradient-to-br from-black via-gray-950 to-black"
// // // //             : "bg-gradient-to-br from-slate-50 via-white to-blue-50"
// // // //         }`}
// // // //       >
// // // //         <div className="max-w-7xl mx-auto text-center">
// // // //           <motion.div
// // // //             initial={isDark ? "hidden" : false}
// // // //             animate={isDark ? "visible" : false}
// // // //             variants={isDark ? staggerContainer : {}}
// // // //           >
// // // //             <motion.h1
// // // //               variants={isDark ? fadeInUp : {}}
// // // //               className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 ${headingClass}`}
// // // //             >
// // // //               ATLA KNOTS
// // // //               <br />
// // // //               <span
// // // //                 className={
// // // //                   isDark
// // // //                     ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-red-400 to-white"
// // // //                     : "text-blue-600"
// // // //                 }
// // // //               >
// // // //                 IT SOLUTIONS
// // // //               </span>
// // // //             </motion.h1>

// // // //             <motion.p
// // // //               variants={isDark ? fadeInUp : {}}
// // // //               className={`text-xl md:text-2xl max-w-4xl mx-auto mb-10 leading-relaxed
// // // //                 ${isDark ? "text-gray-300" : "text-gray-700"}`}
// // // //             >
// // // //               Making technology impactful, dependable, and easy to use — for
// // // //               businesses of all sizes.
// // // //             </motion.p>

// // // //             <motion.p
// // // //               variants={isDark ? fadeInUp : {}}
// // // //               className={`text-lg md:text-xl max-w-3xl mx-auto mb-12
// // // //                 ${isDark ? "text-gray-400" : "text-gray-600"}`}
// // // //             >
// // // //               We build secure, future-ready software that drives efficiency and
// // // //               digital transformation.
// // // //             </motion.p>

// // // //             <motion.div
// // // //               variants={isDark ? fadeInUp : {}}
// // // //               className="flex flex-col sm:flex-row gap-6 justify-center"
// // // //             >
// // // //               <button
// // // //                 className={`group px-10 py-5 rounded-full text-lg font-semibold flex items-center gap-3 transition-all
// // // //                   ${
// // // //                     isDark
// // // //                       ? "bg-red-600 hover:bg-red-700 text-white"
// // // //                       : "bg-blue-600 hover:bg-blue-700 text-white"
// // // //                   }`}
// // // //               >
// // // //                 GET STARTED
// // // //                 <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
// // // //               </button>

// // // //               <button
// // // //                 className={`group px-10 py-5 border-2 rounded-full text-lg font-semibold transition-all
// // // //                   ${
// // // //                     isDark
// // // //                       ? "border-red-600/60 text-red-400 hover:border-red-500"
// // // //                       : "border-blue-600 text-blue-600 hover:bg-blue-50"
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
// // // //             initial={isDark ? "hidden" : false}
// // // //             whileInView={isDark ? "visible" : false}
// // // //             variants={fadeInUp}
// // // //             className={`text-5xl md:text-6xl font-bold text-center mb-6 ${headingClass}`}
// // // //           >
// // // //             OUR{" "}
// // // //             <span className={accentClass}>SERVICES</span>
// // // //           </motion.h2>

// // // //           <motion.p
// // // //             initial={isDark ? "hidden" : false}
// // // //             whileInView={isDark ? "visible" : false}
// // // //             variants={fadeInUp}
// // // //             className={`text-xl text-center mb-16 max-w-3xl mx-auto ${bodyClass}`}
// // // //           >
// // // //             Comprehensive IT & BPO solutions — from development to support and
// // // //             infrastructure
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
// // // //                 {/* Development */}
// // // //                 <motion.div
// // // //                   initial={isDark ? "hidden" : false}
// // // //                   whileInView={isDark ? "visible" : false}
// // // //                   variants={fadeInUp}
// // // //                   className={cardClass}
// // // //                 >
// // // //                   <Code className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>
// // // //                     Development
// // // //                   </h4>
// // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // //                     <li>• Web application development</li>
// // // //                     <li>• Mobile application development</li>
// // // //                     <li>• Secure, scalable & user-friendly solutions</li>
// // // //                   </ul>
// // // //                 </motion.div>

// // // //                 {/* Testing */}
// // // //                 <motion.div
// // // //                   initial={isDark ? "hidden" : false}
// // // //                   whileInView={isDark ? "visible" : false}
// // // //                   variants={fadeInUp}
// // // //                   className={cardClass}
// // // //                 >
// // // //                   <ShieldCheck className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>
// // // //                     Testing
// // // //                   </h4>
// // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // //                     <li>• Web application testing</li>
// // // //                     <li>• Mobile application testing</li>
// // // //                     <li>• Quality, performance & security assurance</li>
// // // //                   </ul>
// // // //                 </motion.div>

// // // //                 {/* L2 Support */}
// // // //                 <motion.div
// // // //                   initial={isDark ? "hidden" : false}
// // // //                   whileInView={isDark ? "visible" : false}
// // // //                   variants={fadeInUp}
// // // //                   className={cardClass}
// // // //                 >
// // // //                   <Users className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>
// // // //                     L2 Support
// // // //                   </h4>
// // // //                   <p className={`text-sm md:text-base leading-relaxed max-w-xs ${bodyClass}`}>
// // // //                     Advanced troubleshooting, in-depth diagnosis & root cause
// // // //                     resolution for complex issues.
// // // //                   </p>
// // // //                 </motion.div>

// // // //                 {/* Product Assistance */}
// // // //                 <motion.div
// // // //                   initial={isDark ? "hidden" : false}
// // // //                   whileInView={isDark ? "visible" : false}
// // // //                   variants={fadeInUp}
// // // //                   className={cardClass}
// // // //                 >
// // // //                   <Server className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>
// // // //                     Product Assistance
// // // //                   </h4>
// // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // //                     <li>• Continuous support & maintenance</li>
// // // //                     <li>• Ticket & incident management</li>
// // // //                     <li>• Change management & SLA tracking</li>
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
// // // //                 Streamline operations and enhance customer engagement with
// // // //                 reliable, scalable support.
// // // //               </p>

// // // //               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
// // // //                 {/* Voice, Chat & Email */}
// // // //                 <motion.div
// // // //                   initial={isDark ? "hidden" : false}
// // // //                   whileInView={isDark ? "visible" : false}
// // // //                   variants={fadeInUp}
// // // //                   className={cardClass}
// // // //                 >
// // // //                   <Headphones className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>
// // // //                     Voice, Chat & Email
// // // //                   </h4>
// // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // //                     <li>• Inbound & outbound voice support</li>
// // // //                     <li>• Real-time chat assistance</li>
// // // //                     <li>• Structured email & ticketing</li>
// // // //                   </ul>
// // // //                 </motion.div>

// // // //                 {/* Cataloguing */}
// // // //                 <motion.div
// // // //                   initial={isDark ? "hidden" : false}
// // // //                   whileInView={isDark ? "visible" : false}
// // // //                   variants={fadeInUp}
// // // //                   className={cardClass}
// // // //                 >
// // // //                   <BarChart3 className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>
// // // //                     Cataloguing & Enrichment
// // // //                   </h4>
// // // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // // //                     <li>• Product descriptions, tags & keywords</li>
// // // //                     <li>• Data validation & cleaning</li>
// // // //                     <li>• Category & attribute enrichment</li>
// // // //                   </ul>
// // // //                 </motion.div>

// // // //                 {/* QA */}
// // // //                 <motion.div
// // // //                   initial={isDark ? "hidden" : false}
// // // //                   whileInView={isDark ? "visible" : false}
// // // //                   variants={fadeInUp}
// // // //                   className={cardClass}
// // // //                 >
// // // //                   <CheckCircle className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>
// // // //                     Quality Assurance
// // // //                   </h4>
// // // //                   <p className={`text-sm md:text-base leading-relaxed max-w-xs ${bodyClass}`}>
// // // //                     Call/chat audits, SOP/SLA compliance, feedback, coaching &
// // // //                     continuous improvement.
// // // //                   </p>
// // // //                 </motion.div>
// // // //               </div>
// // // //             </div>

// // // //             {/* Infrastructure */}
// // // //             <div className="text-center max-w-5xl mx-auto">
// // // //               <h3 className={`text-4xl md:text-5xl font-bold mb-8 tracking-tight ${sectionHeadingAccent}`}>
// // // //                 3. Support & Infrastructure Setup
// // // //               </h3>
// // // //               <p className={`text-lg md:text-xl leading-relaxed ${bodyClass}`}>
// // // //                 End-to-end BPO-ready setup: modern offices, high-speed networks,
// // // //                 advanced telephony, servers, workstations, robust security, and
// // // //                 power backup — built for reliability and scale.
// // // //               </p>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ====================== WHY CHOOSE US ====================== */}
// // // //       <section
// // // //         className={`relative py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-black" : "bg-white"}`}
// // // //       >
// // // //         <div className="max-w-7xl mx-auto">
// // // //           <motion.h2
// // // //             initial={isDark ? "hidden" : false}
// // // //             whileInView={isDark ? "visible" : false}
// // // //             variants={fadeInUp}
// // // //             className={`text-5xl md:text-6xl font-bold text-center mb-16 ${headingClass}`}
// // // //           >
// // // //             WHY{" "}
// // // //             <span className={accentClass}>CHOOSE US</span>
// // // //           </motion.h2>

// // // //           <div className="grid md:grid-cols-3 gap-10 lg:gap-16 text-center">
// // // //             {[
// // // //               {
// // // //                 icon: Users,
// // // //                 title: "True Partnership",
// // // //                 desc: "We become an extension of your team — understanding your business deeply.",
// // // //               },
// // // //               {
// // // //                 icon: Briefcase,
// // // //                 title: "Enterprise Expertise",
// // // //                 desc: "Proven experience in BFSI, retail, government & PSU projects.",
// // // //               },
// // // //               {
// // // //                 icon: HardDrive,
// // // //                 title: "Long-term Support",
// // // //                 desc: "24×7 production support, SLA-based maintenance & AMS.",
// // // //               },
// // // //             ].map((item, idx) => (
// // // //               <motion.div
// // // //                 key={idx}
// // // //                 initial={isDark ? "hidden" : false}
// // // //                 whileInView={isDark ? "visible" : false}
// // // //                 variants={fadeInUp}
// // // //                 className={`p-10 rounded-3xl border transition-all
// // // //                   ${
// // // //                     isDark
// // // //                       ? "bg-gray-900 border-gray-800"
// // // //                       : "bg-white border-gray-200 shadow-md"
// // // //                   }`}
// // // //               >
// // // //                 <div
// // // //                   className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 mx-auto
// // // //                   ${isDark ? "bg-gray-800" : "bg-blue-50"}`}
// // // //                 >
// // // //                   <item.icon className={`w-10 h-10 ${accentClass}`} />
// // // //                 </div>
// // // //                 <h3 className={`text-3xl font-bold mb-5 ${headingClass}`}>
// // // //                   {item.title}
// // // //                 </h3>
// // // //                 <p className={`leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
// // // //                   {item.desc}
// // // //                 </p>
// // // //               </motion.div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>
// // // //     </div>
// // // //   );
// // // // }

// // // import React, { useState, useEffect } from "react";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import {
// // //   ArrowRight,
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

// // // const fadeInUp = {
// // //   hidden: { opacity: 0, y: 60 },
// // //   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// // // };

// // // const staggerContainer = {
// // //   hidden: {},
// // //   visible: { transition: { staggerChildren: 0.15 } },
// // // };

// // // // Professional background images for carousel
// // // const backgroundImages = [
// // //   "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
// // //   "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop",
// // //   "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop",
// // // ];

// // // export default function Home() {
// // //   const [isDark, setIsDark] = useState(
// // //     () => document.documentElement.classList.contains("dark")
// // //   );
// // //   const [currentBgIndex, setCurrentBgIndex] = useState(0);

// // //   // Dark mode observer
// // //   useEffect(() => {
// // //     const observer = new MutationObserver(() => {
// // //       setIsDark(document.documentElement.classList.contains("dark"));
// // //     });
// // //     observer.observe(document.documentElement, {
// // //       attributes: true,
// // //       attributeFilter: ["class"],
// // //     });
// // //     return () => observer.disconnect();
// // //   }, []);

// // //   // Background Image Carousel
// // //   useEffect(() => {
// // //     const interval = setInterval(() => {
// // //       setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
// // //     }, 6000); // Change every 6 seconds

// // //     return () => clearInterval(interval);
// // //   }, []);

// // //   // Reusable class helpers
// // //   const cardClass = isDark
// // //     ? "bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full"
// // //     : "bg-white border border-gray-200 shadow-md rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full";

// // //   const headingClass = isDark ? "text-white" : "text-gray-900";
// // //   const bodyClass = isDark ? "text-gray-300" : "text-gray-700";
// // //   const accentClass = isDark ? "text-red-500" : "text-blue-600";
// // //   const sectionHeadingAccent = isDark ? "text-red-400" : "text-blue-700";

// // //   return (
// // //     <div
// // //       className={`min-h-screen overflow-x-hidden transition-colors duration-700
// // //       ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}`}
// // //     >
// // //       {/* ====================== HERO SECTION WITH CAROUSEL ====================== */}
// // //       <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">

// // //         {/* Background Carousel */}
// // //         <div className="absolute inset-0 z-0">
// // //           <AnimatePresence mode="wait">
// // //             {backgroundImages.map((image, index) => (
// // //               <motion.div
// // //                 key={index}
// // //                 initial={{ opacity: 0 }}
// // //                 animate={{
// // //                   opacity: index === currentBgIndex ? 1 : 0
// // //                 }}
// // //                 transition={{ duration: 1.2, ease: "easeInOut" }}
// // //                 className="absolute inset-0 bg-cover bg-center"
// // //                 style={{
// // //                   backgroundImage: `url(${image})`,
// // //                 }}
// // //               />
// // //             ))}
// // //           </AnimatePresence>

// // //           {/* Overlay */}
// // //           <div
// // //             className={`absolute inset-0 z-10 transition-colors duration-700
// // //               ${isDark
// // //                 ? "bg-gradient-to-br from-black/85 via-black/75 to-black/85"
// // //                 : "bg-gradient-to-br from-slate-900/70 via-slate-900/50 to-blue-950/60"}`}
// // //           />
// // //         </div>

// // //         {/* Content */}
// // //         <div className="max-w-7xl mx-auto text-center relative z-20">
// // //           <motion.div
// // //             initial={isDark ? "hidden" : false}
// // //             animate={isDark ? "visible" : false}
// // //             variants={isDark ? staggerContainer : {}}
// // //           >
// // //             <motion.h1
// // //               variants={isDark ? fadeInUp : {}}
// // //               className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 ${headingClass}`}
// // //             >
// // //               ATLA KNOTS
// // //               <br />
// // //               <span
// // //                 className={
// // //                   isDark
// // //                     ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-red-400 to-white"
// // //                     : "text-blue-600"
// // //                 }
// // //               >
// // //                 IT SOLUTIONS
// // //               </span>
// // //             </motion.h1>

// // //             <motion.p
// // //               variants={isDark ? fadeInUp : {}}
// // //               className={`text-xl md:text-2xl max-w-4xl mx-auto mb-10 leading-relaxed
// // //                 ${isDark ? "text-gray-300" : "text-white"}`}
// // //             >
// // //               Making technology impactful, dependable, and easy to use — for
// // //               businesses of all sizes.
// // //             </motion.p>

// // //             <motion.p
// // //               variants={isDark ? fadeInUp : {}}
// // //               className={`text-lg md:text-xl max-w-3xl mx-auto mb-12
// // //                 ${isDark ? "text-gray-400" : "text-white/90"}`}
// // //             >
// // //               We build secure, future-ready software that drives efficiency and
// // //               digital transformation.
// // //             </motion.p>

// // //             <motion.div
// // //               variants={isDark ? fadeInUp : {}}
// // //               className="flex flex-col sm:flex-row gap-6 justify-center"
// // //             >
// // //               <button
// // //                 className={`group px-10 py-5 rounded-full text-lg font-semibold flex items-center gap-3 transition-all
// // //                   ${
// // //                     isDark
// // //                       ? "bg-red-600 hover:bg-red-700 text-white"
// // //                       : "bg-blue-600 hover:bg-blue-700 text-white"
// // //                   }`}
// // //               >
// // //                 GET STARTED
// // //                 <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
// // //               </button>

// // //               <button
// // //                 className={`group px-10 py-5 border-2 rounded-full text-lg font-semibold transition-all
// // //                   ${
// // //                     isDark
// // //                       ? "border-red-600/60 text-red-400 hover:border-red-500"
// // //                       : "border-white/80 text-white hover:bg-white/10"
// // //                   }`}
// // //               >
// // //                 VIEW OUR WORK
// // //               </button>
// // //             </motion.div>
// // //           </motion.div>
// // //         </div>

// // //         {/* Carousel Indicator Dots */}
// // //         <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-30">
// // //           {backgroundImages.map((_, idx) => (
// // //             <div
// // //               key={idx}
// // //               className={`w-3 h-3 rounded-full transition-all duration-500 cursor-pointer
// // //                 ${idx === currentBgIndex
// // //                   ? "bg-white scale-125 shadow-lg"
// // //                   : "bg-white/50 hover:bg-white/70"}`}
// // //               onClick={() => setCurrentBgIndex(idx)}
// // //             />
// // //           ))}
// // //         </div>
// // //       </section>

// // //       {/* ====================== SERVICES SECTION ====================== */}
// // //       <section
// // //         className={`py-24 px-6 md:px-12 lg:px-24 transition-colors
// // //         ${isDark ? "bg-gradient-to-b from-black to-gray-950" : "bg-gray-50"}`}
// // //       >
// // //         <div className="max-w-7xl mx-auto">
// // //           <motion.h2
// // //             initial={isDark ? "hidden" : false}
// // //             whileInView={isDark ? "visible" : false}
// // //             variants={fadeInUp}
// // //             className={`text-5xl md:text-6xl font-bold text-center mb-6 ${headingClass}`}
// // //           >
// // //             OUR{" "}
// // //             <span className={accentClass}>SERVICES</span>
// // //           </motion.h2>

// // //           <motion.p
// // //             initial={isDark ? "hidden" : false}
// // //             whileInView={isDark ? "visible" : false}
// // //             variants={fadeInUp}
// // //             className={`text-xl text-center mb-16 max-w-3xl mx-auto ${bodyClass}`}
// // //           >
// // //             Comprehensive IT & BPO solutions — from development to support and
// // //             infrastructure
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
// // //                 <motion.div
// // //                   initial={isDark ? "hidden" : false}
// // //                   whileInView={isDark ? "visible" : false}
// // //                   variants={fadeInUp}
// // //                   className={cardClass}
// // //                 >
// // //                   <Code className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Development</h4>
// // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // //                     <li>• Web application development</li>
// // //                     <li>• Mobile application development</li>
// // //                     <li>• Secure, scalable & user-friendly solutions</li>
// // //                   </ul>
// // //                 </motion.div>

// // //                 <motion.div
// // //                   initial={isDark ? "hidden" : false}
// // //                   whileInView={isDark ? "visible" : false}
// // //                   variants={fadeInUp}
// // //                   className={cardClass}
// // //                 >
// // //                   <ShieldCheck className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Testing</h4>
// // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // //                     <li>• Web application testing</li>
// // //                     <li>• Mobile application testing</li>
// // //                     <li>• Quality, performance & security assurance</li>
// // //                   </ul>
// // //                 </motion.div>

// // //                 <motion.div
// // //                   initial={isDark ? "hidden" : false}
// // //                   whileInView={isDark ? "visible" : false}
// // //                   variants={fadeInUp}
// // //                   className={cardClass}
// // //                 >
// // //                   <Users className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>L2 Support</h4>
// // //                   <p className={`text-sm md:text-base leading-relaxed max-w-xs ${bodyClass}`}>
// // //                     Advanced troubleshooting, in-depth diagnosis & root cause resolution.
// // //                   </p>
// // //                 </motion.div>

// // //                 <motion.div
// // //                   initial={isDark ? "hidden" : false}
// // //                   whileInView={isDark ? "visible" : false}
// // //                   variants={fadeInUp}
// // //                   className={cardClass}
// // //                 >
// // //                   <Server className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Product Assistance</h4>
// // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // //                     <li>• Continuous support & maintenance</li>
// // //                     <li>• Ticket & incident management</li>
// // //                     <li>• Change management & SLA tracking</li>
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
// // //                 <motion.div
// // //                   initial={isDark ? "hidden" : false}
// // //                   whileInView={isDark ? "visible" : false}
// // //                   variants={fadeInUp}
// // //                   className={cardClass}
// // //                 >
// // //                   <Headphones className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Voice, Chat & Email</h4>
// // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // //                     <li>• Inbound & outbound voice support</li>
// // //                     <li>• Real-time chat assistance</li>
// // //                     <li>• Structured email & ticketing</li>
// // //                   </ul>
// // //                 </motion.div>

// // //                 <motion.div
// // //                   initial={isDark ? "hidden" : false}
// // //                   whileInView={isDark ? "visible" : false}
// // //                   variants={fadeInUp}
// // //                   className={cardClass}
// // //                 >
// // //                   <BarChart3 className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Cataloguing & Enrichment</h4>
// // //                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
// // //                     <li>• Product descriptions, tags & keywords</li>
// // //                     <li>• Data validation & cleaning</li>
// // //                     <li>• Category & attribute enrichment</li>
// // //                   </ul>
// // //                 </motion.div>

// // //                 <motion.div
// // //                   initial={isDark ? "hidden" : false}
// // //                   whileInView={isDark ? "visible" : false}
// // //                   variants={fadeInUp}
// // //                   className={cardClass}
// // //                 >
// // //                   <CheckCircle className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
// // //                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Quality Assurance</h4>
// // //                   <p className={`text-sm md:text-base leading-relaxed max-w-xs ${bodyClass}`}>
// // //                     Call/chat audits, SOP/SLA compliance, feedback & continuous improvement.
// // //                   </p>
// // //                 </motion.div>
// // //               </div>
// // //             </div>

// // //             {/* Infrastructure */}
// // //             <div className="text-center max-w-5xl mx-auto">
// // //               <h3 className={`text-4xl md:text-5xl font-bold mb-8 tracking-tight ${sectionHeadingAccent}`}>
// // //                 3. Support & Infrastructure Setup
// // //               </h3>
// // //               <p className={`text-lg md:text-xl leading-relaxed ${bodyClass}`}>
// // //                 End-to-end BPO-ready setup: modern offices, high-speed networks, advanced telephony,
// // //                 servers, workstations, robust security, and power backup.
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ====================== WHY CHOOSE US ====================== */}
// // //       <section
// // //         className={`relative py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-black" : "bg-white"}`}
// // //       >
// // //         <div className="max-w-7xl mx-auto">
// // //           <motion.h2
// // //             initial={isDark ? "hidden" : false}
// // //             whileInView={isDark ? "visible" : false}
// // //             variants={fadeInUp}
// // //             className={`text-5xl md:text-6xl font-bold text-center mb-16 ${headingClass}`}
// // //           >
// // //             WHY{" "}
// // //             <span className={accentClass}>CHOOSE US</span>
// // //           </motion.h2>

// // //           <div className="grid md:grid-cols-3 gap-10 lg:gap-16 text-center">
// // //             {[
// // //               {
// // //                 icon: Users,
// // //                 title: "True Partnership",
// // //                 desc: "We become an extension of your team — understanding your business deeply.",
// // //               },
// // //               {
// // //                 icon: Briefcase,
// // //                 title: "Enterprise Expertise",
// // //                 desc: "Proven experience in BFSI, retail, government & PSU projects.",
// // //               },
// // //               {
// // //                 icon: HardDrive,
// // //                 title: "Long-term Support",
// // //                 desc: "24×7 production support, SLA-based maintenance & AMS.",
// // //               },
// // //             ].map((item, idx) => (
// // //               <motion.div
// // //                 key={idx}
// // //                 initial={isDark ? "hidden" : false}
// // //                 whileInView={isDark ? "visible" : false}
// // //                 variants={fadeInUp}
// // //                 className={`p-10 rounded-3xl border transition-all
// // //                   ${
// // //                     isDark
// // //                       ? "bg-gray-900 border-gray-800"
// // //                       : "bg-white border-gray-200 shadow-md"
// // //                   }`}
// // //               >
// // //                 <div
// // //                   className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 mx-auto
// // //                   ${isDark ? "bg-gray-800" : "bg-blue-50"}`}
// // //                 >
// // //                   <item.icon className={`w-10 h-10 ${accentClass}`} />
// // //                 </div>
// // //                 <h3 className={`text-3xl font-bold mb-5 ${headingClass}`}>
// // //                   {item.title}
// // //                 </h3>
// // //                 <p className={`leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
// // //                   {item.desc}
// // //                 </p>
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // }

// // // import React, { useState, useEffect } from "react";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import {
// // //   ArrowRight,
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

// // // const fadeInUp = {
// // //   hidden: { opacity: 0, y: 60 },
// // //   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// // // };

// // // const staggerContainer = {
// // //   hidden: {},
// // //   visible: { transition: { staggerChildren: 0.15 } },
// // // };

// // // // Background Images for Hero Carousel
// // // const backgroundImages = [
// // //   "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
// // //   "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop",
// // //   "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop",
// // // ];

// // // export default function Home() {
// // //   const [isDark, setIsDark] = useState(
// // //     () => document.documentElement.classList.contains("dark")
// // //   );
// // //   const [currentBgIndex, setCurrentBgIndex] = useState(0);

// // //   // Listen for dark mode changes
// // //   useEffect(() => {
// // //     const observer = new MutationObserver(() => {
// // //       setIsDark(document.documentElement.classList.contains("dark"));
// // //     });
// // //     observer.observe(document.documentElement, {
// // //       attributes: true,
// // //       attributeFilter: ["class"],
// // //     });
// // //     return () => observer.disconnect();
// // //   }, []);

// // //   // Hero Background Carousel
// // //   useEffect(() => {
// // //     const interval = setInterval(() => {
// // //       setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
// // //     }, 5000);
// // //     return () => clearInterval(interval);
// // //   }, []);

// // //   return (
// // //     <div className={`min-h-screen overflow-x-hidden transition-colors duration-700
// // //       ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}`}>

// // //       {/* ====================== HERO SECTION ====================== */}
// // //       <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">

// // //         {/* Background Carousel */}
// // //         <div className="absolute inset-0 z-0">
// // //           <AnimatePresence mode="wait">
// // //             {backgroundImages.map((image, index) => (
// // //               <motion.div
// // //                 key={index}
// // //                 initial={{ opacity: 0 }}
// // //                 animate={{ opacity: index === currentBgIndex ? 1 : 0 }}
// // //                 transition={{ duration: 1.2, ease: "easeInOut" }}
// // //                 className="absolute inset-0 bg-cover bg-center"
// // //                 style={{ backgroundImage: `url(${image})` }}
// // //               />
// // //             ))}
// // //           </AnimatePresence>

// // //           {/* Overlay */}
// // //           <div
// // //             className={`absolute inset-0 z-10
// // //               ${isDark
// // //                 ? "bg-gradient-to-br from-black/90 via-black/80 to-black/85"
// // //                 : "bg-gradient-to-br from-black/65 via-black/55 to-black/70"}`}
// // //           />
// // //         </div>

// // //         {/* Hero Content */}
// // //         <div className="max-w-7xl mx-auto text-center relative z-20">
// // //           <motion.div
// // //             initial="hidden"
// // //             animate="visible"
// // //             variants={staggerContainer}
// // //           >
// // //             <motion.h1
// // //               variants={fadeInUp}
// // //               className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
// // //             >
// // //               ATLA KNOTS
// // //               <br />
// // //               <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-orange-500">
// // //                 IT SOLUTIONS
// // //               </span>
// // //             </motion.h1>

// // //             <motion.p
// // //               variants={fadeInUp}
// // //               className={`text-xl md:text-2xl max-w-4xl mx-auto mb-10 leading-relaxed ${isDark ? "text-gray-300" : "text-white"}`}
// // //             >
// // //               Making technology impactful, dependable, and easy to use — for businesses of all sizes.
// // //             </motion.p>

// // //             <motion.p
// // //               variants={fadeInUp}
// // //               className={`text-lg md:text-xl max-w-3xl mx-auto mb-12 ${isDark ? "text-gray-400" : "text-white/90"}`}
// // //             >
// // //               We build secure, future-ready software that drives efficiency and digital transformation.
// // //             </motion.p>

// // //             <motion.div
// // //               variants={fadeInUp}
// // //               className="flex flex-col sm:flex-row gap-6 justify-center"
// // //             >
// // //               <button className="group px-12 py-6 rounded-full text-lg font-semibold flex items-center gap-4 bg-red-600 hover:bg-red-700 text-white transition-all">
// // //                 GET STARTED
// // //                 <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
// // //               </button>

// // //               <button className={`group px-12 py-6 border-2 rounded-full text-lg font-semibold transition-all
// // //                 ${isDark
// // //                   ? "border-red-500 text-red-400 hover:border-red-400 hover:text-red-300"
// // //                   : "border-white text-white hover:bg-white hover:text-red-600"}`}>
// // //                 VIEW OUR WORK
// // //               </button>
// // //             </motion.div>
// // //           </motion.div>
// // //         </div>

// // //         {/* Carousel Dots */}
// // //         <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-30">
// // //           {backgroundImages.map((_, idx) => (
// // //             <div
// // //               key={idx}
// // //               className={`w-3 h-3 rounded-full transition-all duration-500 cursor-pointer
// // //                 ${idx === currentBgIndex ? "bg-red-500 scale-125" : "bg-white/60 hover:bg-white"}`}
// // //               onClick={() => setCurrentBgIndex(idx)}
// // //             />
// // //           ))}
// // //         </div>
// // //       </section>

// // //       {/* ====================== SERVICES SECTION ====================== */}
// // //       <section className={`py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-zinc-950" : "bg-gray-50"}`}>
// // //         <div className="max-w-7xl mx-auto">
// // //           <motion.h2
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             variants={fadeInUp}
// // //             className={`text-5xl md:text-6xl font-bold text-center mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
// // //           >
// // //             OUR <span className="text-red-600">SERVICES</span>
// // //           </motion.h2>

// // //           <motion.p
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             variants={fadeInUp}
// // //             className={`text-xl text-center mb-16 max-w-3xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}
// // //           >
// // //             Comprehensive IT & BPO solutions — from development to support and infrastructure
// // //           </motion.p>

// // //           <div className="space-y-20">
// // //             {/* 1. IT Services */}
// // //             <div>
// // //               <h3 className={`text-4xl md:text-5xl font-bold mb-8 text-center text-red-600`}>
// // //                 1. Information Technology Services
// // //               </h3>
// // //               <p className={`text-lg md:text-xl mb-12 text-center max-w-4xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
// // //                 Supporting companies at every stage of the product lifecycle.
// // //               </p>

// // //               <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
// // //                 {[
// // //                   { icon: Code, title: "Development", list: ["• Web application development", "• Mobile application development", "• Secure, scalable & user-friendly solutions"] },
// // //                   { icon: ShieldCheck, title: "Testing", list: ["• Web application testing", "• Mobile application testing", "• Quality, performance & security assurance"] },
// // //                   { icon: Users, title: "L2 Support", desc: "Advanced troubleshooting, in-depth diagnosis & root cause resolution." },
// // //                   { icon: Server, title: "Product Assistance", list: ["• Continuous support & maintenance", "• Ticket & incident management", "• Change management & SLA tracking"] },
// // //                 ].map((item, i) => (
// // //                   <motion.div
// // //                     key={i}
// // //                     initial="hidden"
// // //                     whileInView="visible"
// // //                     variants={fadeInUp}
// // //                     className={`rounded-3xl p-8 flex flex-col items-center text-center h-full transition-all border
// // //                       ${isDark
// // //                         ? "bg-zinc-900 border-zinc-700 hover:border-red-600"
// // //                         : "bg-white border-gray-200 hover:border-red-600 shadow-md"}`}
// // //                   >
// // //                     <item.icon className="w-14 h-14 mb-6 text-red-600" />
// // //                     <h4 className={`text-2xl font-bold mb-5 ${isDark ? "text-white" : "text-gray-900"}`}>{item.title}</h4>
// // //                     {item.list ? (
// // //                       <ul className={`text-sm space-y-3 text-left w-full max-w-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>
// // //                         {item.list.map((li, idx) => <li key={idx}>{li}</li>)}
// // //                       </ul>
// // //                     ) : (
// // //                       <p className={`text-sm leading-relaxed max-w-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>{item.desc}</p>
// // //                     )}
// // //                   </motion.div>
// // //                 ))}
// // //               </div>
// // //             </div>

// // //             {/* 2. BPO Services */}
// // //             <div>
// // //               <h3 className={`text-4xl md:text-5xl font-bold mb-8 text-center text-red-600`}>
// // //                 2. Business Process Outsourcing (BPO) Services
// // //               </h3>
// // //               <p className={`text-lg md:text-xl mb-12 text-center max-w-3xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
// // //                 Streamline operations and enhance customer engagement with reliable support.
// // //               </p>

// // //               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
// // //                 {[
// // //                   { icon: Headphones, title: "Voice, Chat & Email", list: ["• Inbound & outbound voice support", "• Real-time chat assistance", "• Structured email & ticketing"] },
// // //                   { icon: BarChart3, title: "Cataloguing & Enrichment", list: ["• Product descriptions, tags & keywords", "• Data validation & cleaning", "• Category & attribute enrichment"] },
// // //                   { icon: CheckCircle, title: "Quality Assurance", desc: "Call/chat audits, SOP/SLA compliance, feedback & continuous improvement." },
// // //                 ].map((item, i) => (
// // //                   <motion.div
// // //                     key={i}
// // //                     initial="hidden"
// // //                     whileInView="visible"
// // //                     variants={fadeInUp}
// // //                     className={`rounded-3xl p-8 flex flex-col items-center text-center h-full transition-all border
// // //                       ${isDark
// // //                         ? "bg-zinc-900 border-zinc-700 hover:border-red-600"
// // //                         : "bg-white border-gray-200 hover:border-red-600 shadow-md"}`}
// // //                   >
// // //                     <item.icon className="w-14 h-14 mb-6 text-red-600" />
// // //                     <h4 className={`text-2xl font-bold mb-5 ${isDark ? "text-white" : "text-gray-900"}`}>{item.title}</h4>
// // //                     {item.list ? (
// // //                       <ul className={`text-sm space-y-3 text-left w-full max-w-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>
// // //                         {item.list.map((li, idx) => <li key={idx}>{li}</li>)}
// // //                       </ul>
// // //                     ) : (
// // //                       <p className={`text-sm leading-relaxed max-w-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>{item.desc}</p>
// // //                     )}
// // //                   </motion.div>
// // //                 ))}
// // //               </div>
// // //             </div>

// // //             {/* 3. Infrastructure */}
// // //             <div className="text-center max-w-5xl mx-auto">
// // //               <h3 className={`text-4xl md:text-5xl font-bold mb-8 text-red-600`}>
// // //                 3. Support & Infrastructure Setup
// // //               </h3>
// // //               <p className={`text-lg md:text-xl leading-relaxed max-w-4xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
// // //                 End-to-end BPO-ready setup: modern offices, high-speed networks, advanced telephony,
// // //                 servers, workstations, robust security, and power backup.
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ====================== WHY CHOOSE US ====================== */}
// // //       <section className={`py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-black" : "bg-white"}`}>
// // //         <div className="max-w-7xl mx-auto">
// // //           <motion.h2
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             variants={fadeInUp}
// // //             className={`text-5xl md:text-6xl font-bold text-center mb-16 ${isDark ? "text-white" : "text-gray-900"}`}
// // //           >
// // //             WHY <span className="text-red-600">CHOOSE US</span>
// // //           </motion.h2>

// // //           <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
// // //             {[
// // //               { icon: Users, title: "True Partnership", desc: "We become an extension of your team — understanding your business deeply." },
// // //               { icon: Briefcase, title: "Enterprise Expertise", desc: "Proven experience in BFSI, retail, government & PSU projects." },
// // //               { icon: HardDrive, title: "Long-term Support", desc: "24×7 production support, SLA-based maintenance & AMS." },
// // //             ].map((item, idx) => (
// // //               <motion.div
// // //                 key={idx}
// // //                 initial="hidden"
// // //                 whileInView="visible"
// // //                 variants={fadeInUp}
// // //                 className={`p-10 rounded-3xl border transition-all ${
// // //                   isDark
// // //                     ? "bg-zinc-900 border-zinc-700 hover:border-red-600"
// // //                     : "bg-white border-gray-200 hover:border-red-600 shadow-md"
// // //                 }`}
// // //               >
// // //                 <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 mx-auto ${isDark ? "bg-zinc-800" : "bg-red-50"}`}>
// // //                   <item.icon className="w-10 h-10 text-red-600" />
// // //                 </div>
// // //                 <h3 className={`text-3xl font-bold mb-5 ${isDark ? "text-white" : "text-gray-900"}`}>{item.title}</h3>
// // //                 <p className={`leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>{item.desc}</p>
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // }

// // import React, { useState, useEffect } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import {
// //   ArrowRight,
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

// // const fadeInUp = {
// //   hidden: { opacity: 0, y: 60 },
// //   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// // };

// // const staggerContainer = {
// //   hidden: {},
// //   visible: { transition: { staggerChildren: 0.15 } },
// // };

// // // Professional background images for carousel
// // const backgroundImages = [
// //   "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
// //   "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop",
// //   "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop",
// // ];

// // export default function Home() {
// //   const [isDark, setIsDark] = useState(
// //     () => document.documentElement.classList.contains("dark")
// //   );
// //   const [currentBgIndex, setCurrentBgIndex] = useState(0);

// //   // Dark mode observer
// //   useEffect(() => {
// //     const observer = new MutationObserver(() => {
// //       setIsDark(document.documentElement.classList.contains("dark"));
// //     });
// //     observer.observe(document.documentElement, {
// //       attributes: true,
// //       attributeFilter: ["class"],
// //     });
// //     return () => observer.disconnect();
// //   }, []);

// //   // Background Image Carousel
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
// //     }, 6000); // Change every 6 seconds

// //     return () => clearInterval(interval);
// //   }, []);

// //   // Reusable class helpers
// //   const cardClass = isDark
// //     ? "bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full"
// //     : "bg-white border border-gray-200 shadow-md rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full";

// //   const headingClass = isDark ? "text-white" : "text-gray-900";
// //   const bodyClass = isDark ? "text-gray-300" : "text-gray-700";
// //   const accentClass = isDark ? "text-red-500" : "text-blue-600";
// //   const sectionHeadingAccent = isDark ? "text-red-400" : "text-blue-700";

// //   return (
// //     <div
// //       className={`min-h-screen overflow-x-hidden transition-colors duration-700
// //       ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}`}
// //     >
// //       {/* ====================== HERO SECTION WITH CAROUSEL ====================== */}
// //       <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">

// //         {/* Background Carousel */}
// //         <div className="absolute inset-0 z-0">
// //           <AnimatePresence mode="wait">
// //             {backgroundImages.map((image, index) => (
// //               <motion.div
// //                 key={index}
// //                 initial={{ opacity: 0 }}
// //                 animate={{
// //                   opacity: index === currentBgIndex ? 1 : 0
// //                 }}
// //                 transition={{ duration: 1.2, ease: "easeInOut" }}
// //                 className="absolute inset-0 bg-cover bg-center"
// //                 style={{
// //                   backgroundImage: `url(${image})`,
// //                 }}
// //               />
// //             ))}
// //           </AnimatePresence>

// //           {/* Overlay */}
// //           <div
// //             className={`absolute inset-0 z-10 transition-colors duration-700
// //               ${isDark
// //                 ? "bg-gradient-to-br from-black/85 via-black/75 to-black/85"
// //                 : "bg-gradient-to-br from-slate-900/70 via-slate-900/50 to-blue-950/60"}`}
// //           />
// //         </div>

// //         {/* Content */}
// //         <div className="max-w-7xl mx-auto text-center relative z-20">
// //           <motion.div
// //             initial="hidden"
// //             animate="visible"
// //             variants={staggerContainer}
// //           >
// //             <motion.h1
// //               variants={fadeInUp}
// //               className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 ${headingClass}`}
// //             >
// //               ATLA KNOTS
// //               <br />
// //               <span
// //                 className={
// //                   isDark
// //                     ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-red-400 to-white"
// //                     : "text-blue-600"
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
// //                 className={`group px-10 py-5 rounded-full text-lg font-semibold flex items-center gap-3 transition-all
// //                   ${
// //                     isDark
// //                       ? "bg-red-600 hover:bg-red-700 text-white"
// //                       : "bg-blue-600 hover:bg-blue-700 text-white"
// //                   }`}
// //               >
// //                 GET STARTED
// //                 <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
// //               </button>

// //               <button
// //                 className={`group px-10 py-5 border-2 rounded-full text-lg font-semibold transition-all
// //                   ${
// //                     isDark
// //                       ? "border-red-600/60 text-red-400 hover:border-red-500"
// //                       : "border-white/80 text-white hover:bg-white/10"
// //                   }`}
// //               >
// //                 VIEW OUR WORK
// //               </button>
// //             </motion.div>
// //           </motion.div>
// //         </div>

// //         {/* Carousel Indicator Dots */}
// //         <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-30">
// //           {backgroundImages.map((_, idx) => (
// //             <div
// //               key={idx}
// //               className={`w-3 h-3 rounded-full transition-all duration-500 cursor-pointer
// //                 ${idx === currentBgIndex
// //                   ? "bg-white scale-125 shadow-lg"
// //                   : "bg-white/50 hover:bg-white/70"}`}
// //               onClick={() => setCurrentBgIndex(idx)}
// //             />
// //           ))}
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
// //             OUR{" "}
// //             <span className={accentClass}>SERVICES</span>
// //           </motion.h2>

// //           <motion.p
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true }}
// //             variants={fadeInUp}
// //             className={`text-xl text-center mb-16 max-w-3xl mx-auto ${bodyClass}`}
// //           >
// //             Comprehensive IT &amp; BPO solutions — from development to support and
// //             infrastructure
// //           </motion.p>

// //           <div className="space-y-20">
// //             {/* IT Services */}
// //             <div>
// //               <h3 className={`text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight ${sectionHeadingAccent}`}>
// //                 1. Information Technology Services
// //               </h3>
// //               <p className={`text-lg md:text-xl mb-12 text-center max-w-4xl mx-auto leading-relaxed ${bodyClass}`}>
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
// //               <h3 className={`text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight ${sectionHeadingAccent}`}>
// //                 2. Business Process Outsourcing (BPO) Services
// //               </h3>
// //               <p className={`text-lg md:text-xl mb-12 text-center max-w-3xl mx-auto leading-relaxed ${bodyClass}`}>
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

// //             {/* Infrastructure */}
// //             <div className="text-center max-w-5xl mx-auto">
// //               <h3 className={`text-4xl md:text-5xl font-bold mb-8 tracking-tight ${sectionHeadingAccent}`}>
// //                 3. Support &amp; Infrastructure Setup
// //               </h3>
// //               <p className={`text-lg md:text-xl leading-relaxed ${bodyClass}`}>
// //                 End-to-end BPO-ready setup: modern offices, high-speed networks, advanced telephony,
// //                 servers, workstations, robust security, and power backup.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ====================== WHY CHOOSE US ====================== */}
// //       <section
// //         className={`relative py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-black" : "bg-white"}`}
// //       >
// //         <div className="max-w-7xl mx-auto">
// //           <motion.h2
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true }}
// //             variants={fadeInUp}
// //             className={`text-5xl md:text-6xl font-bold text-center mb-16 ${headingClass}`}
// //           >
// //             WHY{" "}
// //             <span className={accentClass}>CHOOSE US</span>
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
// //                 desc: "Proven experience in BFSI, retail, government &amp; PSU projects.",
// //               },
// //               {
// //                 icon: HardDrive,
// //                 title: "Long-term Support",
// //                 desc: "24×7 production support, SLA-based maintenance &amp; AMS.",
// //               },
// //             ].map((item, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 initial="hidden"
// //                 whileInView="visible"
// //                 viewport={{ once: true }}
// //                 variants={fadeInUp}
// //                 className={`p-10 rounded-3xl border transition-all
// //                   ${
// //                     isDark
// //                       ? "bg-gray-900 border-gray-800"
// //                       : "bg-white border-gray-200 shadow-md"
// //                   }`}
// //               >
// //                 <div
// //                   className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 mx-auto
// //                   ${isDark ? "bg-gray-800" : "bg-blue-50"}`}
// //                 >
// //                   <item.icon className={`w-10 h-10 ${accentClass}`} />
// //                 </div>
// //                 <h3 className={`text-3xl font-bold mb-5 ${headingClass}`}>
// //                   {item.title}
// //                 </h3>
// //                 <p className={`leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
// //                   {item.desc}
// //                 </p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ArrowRight,
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

// const fadeInUp = {
//   hidden: { opacity: 0, y: 60 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

// const staggerContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.15 } },
// };

// // Professional background images for carousel
// const backgroundImages = [
//   "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop",
// ];

// export default function Home() {
//   const [isDark, setIsDark] = useState(
//     () => document.documentElement.classList.contains("dark")
//   );
//   const [currentBgIndex, setCurrentBgIndex] = useState(0);

//   // Dark mode observer
//   useEffect(() => {
//     const observer = new MutationObserver(() => {
//       setIsDark(document.documentElement.classList.contains("dark"));
//     });
//     observer.observe(document.documentElement, {
//       attributes: true,
//       attributeFilter: ["class"],
//     });
//     return () => observer.disconnect();
//   }, []);

//   // Background Image Carousel
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
//     }, 6000); // Change every 6 seconds

//     return () => clearInterval(interval);
//   }, []);

//   // Reusable class helpers
//   const cardClass = isDark
//     ? "bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full"
//     : "bg-white border border-gray-200 shadow-md rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full";

//   const headingClass = isDark ? "text-white" : "text-gray-900";
//   const bodyClass = isDark ? "text-gray-300" : "text-gray-700";
//   const accentClass = isDark ? "text-red-500" : "text-blue-600";
//   const sectionHeadingAccent = isDark ? "text-red-400" : "text-blue-700";

//   return (
//     <div
//       className={`min-h-screen overflow-x-hidden transition-colors duration-700
//       ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}`}
//     >
//       {/* ====================== HERO SECTION WITH CAROUSEL ====================== */}
//       <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">

//         {/* Background Carousel */}
//         <div className="absolute inset-0 z-0">
//           <AnimatePresence mode="wait">
//             {backgroundImages.map((image, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0 }}
//                 animate={{
//                   opacity: index === currentBgIndex ? 1 : 0
//                 }}
//                 transition={{ duration: 1.2, ease: "easeInOut" }}
//                 className="absolute inset-0 bg-cover bg-center"
//                 style={{
//                   backgroundImage: `url(${image})`,
//                 }}
//               />
//             ))}
//           </AnimatePresence>

//           {/* Overlay */}
//           <div
//             className={`absolute inset-0 z-10 transition-colors duration-700
//               ${isDark
//                 ? "bg-gradient-to-br from-black/85 via-black/75 to-black/85"
//                 : "bg-gradient-to-br from-slate-900/70 via-slate-900/50 to-blue-950/60"}`}
//           />
//         </div>

//         {/* Content */}
//         <div className="max-w-7xl mx-auto text-center relative z-20">
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={staggerContainer}
//           >
//             <motion.h1
//               variants={fadeInUp}
//               className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 ${headingClass}`}
//             >
//               ATLA KNOTS
//               <br />
//               <span
//                 className={
//                   isDark
//                     ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-red-400 to-white"
//                     : "text-blue-600"
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
//                 className={`group px-10 py-5 rounded-full text-lg font-semibold flex items-center gap-3 transition-all
//                   ${
//                     isDark
//                       ? "bg-red-600 hover:bg-red-700 text-white"
//                       : "bg-blue-600 hover:bg-blue-700 text-white"
//                   }`}
//               >
//                 GET STARTED
//                 <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
//               </button>

//               <button
//                 className={`group px-10 py-5 border-2 rounded-full text-lg font-semibold transition-all
//                   ${
//                     isDark
//                       ? "border-red-600/60 text-red-400 hover:border-red-500"
//                       : "border-white/80 text-white hover:bg-white/10"
//                   }`}
//               >
//                 VIEW OUR WORK
//               </button>
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Carousel Indicator Dots */}
//         <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-30">
//           {backgroundImages.map((_, idx) => (
//             <div
//               key={idx}
//               className={`w-3 h-3 rounded-full transition-all duration-500 cursor-pointer
//                 ${idx === currentBgIndex
//                   ? "bg-white scale-125 shadow-lg"
//                   : "bg-white/50 hover:bg-white/70"}`}
//               onClick={() => setCurrentBgIndex(idx)}
//             />
//           ))}
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
//             OUR{" "}
//             <span className={accentClass}>SERVICES</span>
//           </motion.h2>

//           <motion.p
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             className={`text-xl text-center mb-16 max-w-3xl mx-auto ${bodyClass}`}
//           >
//             Comprehensive IT &amp; BPO solutions — from development to support and
//             infrastructure
//           </motion.p>

//           <div className="space-y-20">
//             {/* IT Services */}
//             <div>
//               <h3 className={`text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight ${sectionHeadingAccent}`}>
//                 1. Information Technology Services
//               </h3>
//               <p className={`text-lg md:text-xl mb-12 text-center max-w-4xl mx-auto leading-relaxed ${bodyClass}`}>
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
//                   <Code className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
//                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Development</h4>
//                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
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
//                   <ShieldCheck className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
//                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Testing</h4>
//                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
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
//                   <Users className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
//                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>L2 Support</h4>
//                   <p className={`text-sm md:text-base leading-relaxed max-w-xs ${bodyClass}`}>
//                     Advanced troubleshooting, in-depth diagnosis &amp; root cause resolution.
//                   </p>
//                 </motion.div>

//                 <motion.div
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                   variants={fadeInUp}
//                   className={cardClass}
//                 >
//                   <Server className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
//                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Product Assistance</h4>
//                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
//                     <li>• Continuous support &amp; maintenance</li>
//                     <li>• Ticket &amp; incident management</li>
//                     <li>• Change management &amp; SLA tracking</li>
//                   </ul>
//                 </motion.div>
//               </div>
//             </div>

//             {/* BPO Services */}
//             <div>
//               <h3 className={`text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight ${sectionHeadingAccent}`}>
//                 2. Business Process Outsourcing (BPO) Services
//               </h3>
//               <p className={`text-lg md:text-xl mb-12 text-center max-w-3xl mx-auto leading-relaxed ${bodyClass}`}>
//                 Streamline operations and enhance customer engagement with reliable support.
//               </p>

//               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//                 <motion.div
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                   variants={fadeInUp}
//                   className={cardClass}
//                 >
//                   <Headphones className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
//                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Voice, Chat &amp; Email</h4>
//                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
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
//                   <BarChart3 className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
//                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Cataloguing &amp; Enrichment</h4>
//                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
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
//                   <CheckCircle className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
//                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Quality Assurance</h4>
//                   <p className={`text-sm md:text-base leading-relaxed max-w-xs ${bodyClass}`}>
//                     Call/chat audits, SOP/SLA compliance, feedback &amp; continuous improvement.
//                   </p>
//                 </motion.div>
//               </div>
//             </div>

//             {/* Infrastructure */}
//             <div className="text-center max-w-5xl mx-auto">
//               <h3 className={`text-4xl md:text-5xl font-bold mb-8 tracking-tight ${sectionHeadingAccent}`}>
//                 3. Support &amp; Infrastructure Setup
//               </h3>
//               <p className={`text-lg md:text-xl leading-relaxed ${bodyClass}`}>
//                 End-to-end BPO-ready setup: modern offices, high-speed networks, advanced telephony,
//                 servers, workstations, robust security, and power backup.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ====================== WHY CHOOSE US ====================== */}
//       <section
//         className={`relative py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-black" : "bg-white"}`}
//       >
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             className={`text-5xl md:text-6xl font-bold text-center mb-16 ${headingClass}`}
//           >
//             WHY{" "}
//             <span className={accentClass}>CHOOSE US</span>
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
//                 desc: "Proven experience in BFSI, retail, government &amp; PSU projects.",
//               },
//               {
//                 icon: HardDrive,
//                 title: "Long-term Support",
//                 desc: "24×7 production support, SLA-based maintenance &amp; AMS.",
//               },
//             ].map((item, idx) => (
//               <motion.div
//                 key={idx}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={fadeInUp}
//                 className={`p-10 rounded-3xl border transition-all
//                   ${
//                     isDark
//                       ? "bg-gray-900 border-gray-800"
//                       : "bg-white border-gray-200 shadow-md"
//                   }`}
//               >
//                 <div
//                   className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 mx-auto
//                   ${isDark ? "bg-gray-800" : "bg-blue-50"}`}
//                 >
//                   <item.icon className={`w-10 h-10 ${accentClass}`} />
//                 </div>
//                 <h3 className={`text-3xl font-bold mb-5 ${headingClass}`}>
//                   {item.title}
//                 </h3>
//                 <p className={`leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
//                   {item.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ArrowRight,
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

// const fadeInUp = {
//   hidden: { opacity: 0, y: 60 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

// const staggerContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.15 } },
// };

// const backgroundImages = [
//   "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop",
// ];

// export default function Home() {
//   const [isDark, setIsDark] = useState(
//     () => document.documentElement.classList.contains("dark")
//   );
//   const [currentBgIndex, setCurrentBgIndex] = useState(0);

//   // Dark mode observer
//   useEffect(() => {
//     const observer = new MutationObserver(() => {
//       setIsDark(document.documentElement.classList.contains("dark"));
//     });
//     observer.observe(document.documentElement, {
//       attributes: true,
//       attributeFilter: ["class"],
//     });
//     return () => observer.disconnect();
//   }, []);

//   // Background Image Carousel
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   // Reusable class helpers - RED THEME
//   const cardClass = isDark
//     ? "bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full hover:border-red-500/50 transition-colors"
//     : "bg-white border border-gray-200 shadow-md rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full hover:shadow-xl transition-shadow";

//   const headingClass = isDark ? "text-white" : "text-gray-900";
//   const bodyClass = isDark ? "text-gray-300" : "text-gray-700";
//   const accentClass = "text-red-500";                    // Changed to red
//   const sectionHeadingAccent = "text-red-500";           // Changed to red

//   return (
//     <div
//       className={`min-h-screen overflow-x-hidden transition-colors duration-700
//       ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}`}
//     >
//       {/* ====================== HERO SECTION WITH CAROUSEL ====================== */}
//       <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
//         {/* Background Carousel */}
//         <div className="absolute inset-0 z-0">
//           <AnimatePresence mode="wait">
//             {backgroundImages.map((image, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0 }}
//                 animate={{
//                   opacity: index === currentBgIndex ? 1 : 0
//                 }}
//                 transition={{ duration: 1.2, ease: "easeInOut" }}
//                 className="absolute inset-0 bg-cover bg-center"
//                 style={{
//                   backgroundImage: `url(${image})`,
//                 }}
//               />
//             ))}
//           </AnimatePresence>
//           {/* Overlay */}
//           <div
//             className={`absolute inset-0 z-10 transition-colors duration-700
//               ${isDark
//                 ? "bg-gradient-to-br from-black/90 via-black/80 to-black/90"
//                 : "bg-gradient-to-br from-slate-900/80 via-slate-900/70 to-red-950/70"}`}
//           />
//         </div>

//         {/* Content */}
//         <div className="max-w-7xl mx-auto text-center relative z-20">
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={staggerContainer}
//           >
//             <motion.h1
//               variants={fadeInUp}
//               className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 ${headingClass}`}
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
//                 className={`group px-10 py-5 rounded-full text-lg font-semibold flex items-center gap-3 transition-all
//                   bg-red-600 hover:bg-red-700 active:bg-red-800 text-white`}
//               >
//                 GET STARTED
//                 <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
//               </button>

//               <button
//                 className={`group px-10 py-5 border-2 rounded-full text-lg font-semibold transition-all
//                   ${isDark
//                     ? "border-red-600/60 text-red-400 hover:border-red-500 hover:text-red-300"
//                     : "border-white/80 text-white hover:bg-white/10"}`}
//               >
//                 VIEW OUR WORK
//               </button>
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Carousel Indicator Dots */}
//         <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-30">
//           {backgroundImages.map((_, idx) => (
//             <div
//               key={idx}
//               className={`w-3 h-3 rounded-full transition-all duration-500 cursor-pointer
//                 ${idx === currentBgIndex
//                   ? "bg-white scale-125 shadow-lg"
//                   : "bg-white/50 hover:bg-white/70"}`}
//               onClick={() => setCurrentBgIndex(idx)}
//             />
//           ))}
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
//             OUR{" "}
//             <span className={accentClass}>SERVICES</span>
//           </motion.h2>

//           <motion.p
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             className={`text-xl text-center mb-16 max-w-3xl mx-auto ${bodyClass}`}
//           >
//             Comprehensive IT &amp; BPO solutions — from development to support and
//             infrastructure
//           </motion.p>

//           <div className="space-y-20">
//             {/* IT Services */}
//             <div>
//               <h3 className={`text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight ${sectionHeadingAccent}`}>
//                 1. Information Technology Services
//               </h3>
//               <p className={`text-lg md:text-xl mb-12 text-center max-w-4xl mx-auto leading-relaxed ${bodyClass}`}>
//                 Supporting companies at every stage of the product lifecycle.
//               </p>

//               <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//                 {/* Development Card */}
//                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={cardClass}>
//                   <Code className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
//                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Development</h4>
//                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
//                     <li>• Web application development</li>
//                     <li>• Mobile application development</li>
//                     <li>• Secure, scalable &amp; user-friendly solutions</li>
//                   </ul>
//                 </motion.div>

//                 {/* Testing Card */}
//                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={cardClass}>
//                   <ShieldCheck className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
//                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Testing</h4>
//                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
//                     <li>• Web application testing</li>
//                     <li>• Mobile application testing</li>
//                     <li>• Quality, performance &amp; security assurance</li>
//                   </ul>
//                 </motion.div>

//                 {/* L2 Support Card */}
//                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={cardClass}>
//                   <Users className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
//                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>L2 Support</h4>
//                   <p className={`text-sm md:text-base leading-relaxed max-w-xs ${bodyClass}`}>
//                     Advanced troubleshooting, in-depth diagnosis &amp; root cause resolution.
//                   </p>
//                 </motion.div>

//                 {/* Product Assistance Card */}
//                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={cardClass}>
//                   <Server className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
//                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Product Assistance</h4>
//                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
//                     <li>• Continuous support &amp; maintenance</li>
//                     <li>• Ticket &amp; incident management</li>
//                     <li>• Change management &amp; SLA tracking</li>
//                   </ul>
//                 </motion.div>
//               </div>
//             </div>

//             {/* BPO Services */}
//             <div>
//               <h3 className={`text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight ${sectionHeadingAccent}`}>
//                 2. Business Process Outsourcing (BPO) Services
//               </h3>
//               <p className={`text-lg md:text-xl mb-12 text-center max-w-3xl mx-auto leading-relaxed ${bodyClass}`}>
//                 Streamline operations and enhance customer engagement with reliable support.
//               </p>

//               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={cardClass}>
//                   <Headphones className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
//                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Voice, Chat &amp; Email</h4>
//                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
//                     <li>• Inbound &amp; outbound voice support</li>
//                     <li>• Real-time chat assistance</li>
//                     <li>• Structured email &amp; ticketing</li>
//                   </ul>
//                 </motion.div>

//                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={cardClass}>
//                   <BarChart3 className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
//                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Cataloguing &amp; Enrichment</h4>
//                   <ul className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}>
//                     <li>• Product descriptions, tags &amp; keywords</li>
//                     <li>• Data validation &amp; cleaning</li>
//                     <li>• Category &amp; attribute enrichment</li>
//                   </ul>
//                 </motion.div>

//                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={cardClass}>
//                   <CheckCircle className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`} />
//                   <h4 className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}>Quality Assurance</h4>
//                   <p className={`text-sm md:text-base leading-relaxed max-w-xs ${bodyClass}`}>
//                     Call/chat audits, SOP/SLA compliance, feedback &amp; continuous improvement.
//                   </p>
//                 </motion.div>
//               </div>
//             </div>

//             {/* Infrastructure */}
//             <div className="text-center max-w-5xl mx-auto">
//               <h3 className={`text-4xl md:text-5xl font-bold mb-8 tracking-tight ${sectionHeadingAccent}`}>
//                 3. Support &amp; Infrastructure Setup
//               </h3>
//               <p className={`text-lg md:text-xl leading-relaxed ${bodyClass}`}>
//                 End-to-end BPO-ready setup: modern offices, high-speed networks, advanced telephony,
//                 servers, workstations, robust security, and power backup.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ====================== WHY CHOOSE US ====================== */}
//       <section
//         className={`relative py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-black" : "bg-white"}`}
//       >
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             className={`text-5xl md:text-6xl font-bold text-center mb-16 ${headingClass}`}
//           >
//             WHY{" "}
//             <span className={accentClass}>CHOOSE US</span>
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
//                 desc: "Proven experience in BFSI, retail, government &amp; PSU projects.",
//               },
//               {
//                 icon: HardDrive,
//                 title: "Long-term Support",
//                 desc: "24×7 production support, SLA-based maintenance &amp; AMS.",
//               },
//             ].map((item, idx) => (
//               <motion.div
//                 key={idx}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={fadeInUp}
//                 className={`p-10 rounded-3xl border transition-all
//                   ${isDark
//                     ? "bg-gray-900 border-gray-800 hover:border-red-500/30"
//                     : "bg-white border-gray-200 shadow-md hover:shadow-lg"}`}
//               >
//                 <div
//                   className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 mx-auto
//                   ${isDark ? "bg-gray-800" : "bg-red-50"}`}
//                 >
//                   <item.icon className={`w-10 h-10 ${accentClass}`} />
//                 </div>
//                 <h3 className={`text-3xl font-bold mb-5 ${headingClass}`}>
//                   {item.title}
//                 </h3>
//                 <p className={`leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
//                   {item.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import React from "react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import {
  ArrowRight,
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

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Home() {
  const { isDark } = useTheme();

  // Reusable class helpers - RED THEME
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
      {/* ====================== HERO SECTION WITH VIDEO ====================== */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
            {/* Fallback for older browsers */}
            Your browser does not support the video tag.
          </video>

          {/* Overlay */}
          <div
            className={`absolute inset-0 z-10 transition-colors duration-700
              ${
                isDark
                  ? "bg-gradient-to-br from-black/90 via-black/80 to-black/90"
                  : "bg-gradient-to-br from-slate-950/95 via-slate-950/90 to-black/70"
              }`}
          />
        </div>

        {/* Content */}
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
                className={`group px-10 py-5 rounded-full text-lg font-semibold flex items-center gap-3 transition-all
                  bg-red-600 hover:bg-red-700 active:bg-red-800 text-white`}
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
                {/* Development Card */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className={cardClass}
                >
                  <Code
                    className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
                  />
                  <h4
                    className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
                  >
                    Development
                  </h4>
                  <ul
                    className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}
                  >
                    <li>• Web application development</li>
                    <li>• Mobile application development</li>
                    <li>• Secure, scalable &amp; user-friendly solutions</li>
                  </ul>
                </motion.div>

                {/* Testing Card */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className={cardClass}
                >
                  <ShieldCheck
                    className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
                  />
                  <h4
                    className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
                  >
                    Testing
                  </h4>
                  <ul
                    className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}
                  >
                    <li>• Web application testing</li>
                    <li>• Mobile application testing</li>
                    <li>• Quality, performance &amp; security assurance</li>
                  </ul>
                </motion.div>

                {/* L2 Support Card */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className={cardClass}
                >
                  <Users
                    className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
                  />
                  <h4
                    className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
                  >
                    L2 Support
                  </h4>
                  <p
                    className={`text-sm md:text-base leading-relaxed max-w-xs ${bodyClass}`}
                  >
                    Advanced troubleshooting, in-depth diagnosis &amp; root
                    cause resolution.
                  </p>
                </motion.div>

                {/* Product Assistance Card */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className={cardClass}
                >
                  <Server
                    className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
                  />
                  <h4
                    className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
                  >
                    Product Assistance
                  </h4>
                  <ul
                    className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}
                  >
                    <li>• Continuous support &amp; maintenance</li>
                    <li>• Ticket &amp; incident management</li>
                    <li>• Change management &amp; SLA tracking</li>
                  </ul>
                </motion.div>
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
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className={cardClass}
                >
                  <Headphones
                    className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
                  />
                  <h4
                    className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
                  >
                    Voice, Chat &amp; Email
                  </h4>
                  <ul
                    className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}
                  >
                    <li>• Inbound &amp; outbound voice support</li>
                    <li>• Real-time chat assistance</li>
                    <li>• Structured email &amp; ticketing</li>
                  </ul>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className={cardClass}
                >
                  <BarChart3
                    className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
                  />
                  <h4
                    className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
                  >
                    Cataloguing &amp; Enrichment
                  </h4>
                  <ul
                    className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}
                  >
                    <li>• Product descriptions, tags &amp; keywords</li>
                    <li>• Data validation &amp; cleaning</li>
                    <li>• Category &amp; attribute enrichment</li>
                  </ul>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className={cardClass}
                >
                  <CheckCircle
                    className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
                  />
                  <h4
                    className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
                  >
                    Quality Assurance
                  </h4>
                  <p
                    className={`text-sm md:text-base leading-relaxed max-w-xs ${bodyClass}`}
                  >
                    Call/chat audits, SOP/SLA compliance, feedback &amp;
                    continuous improvement.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Infrastructure */}
            <div className="text-center max-w-5xl mx-auto">
              <h3
                className={`text-4xl md:text-5xl font-bold mb-8 tracking-tight ${sectionHeadingAccent}`}
              >
                3. Support &amp; Infrastructure Setup
              </h3>
              <p className={`text-lg md:text-xl leading-relaxed ${bodyClass}`}>
                End-to-end BPO-ready setup: modern offices, high-speed networks,
                advanced telephony, servers, workstations, robust security, and
                power backup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== WHY CHOOSE US ====================== */}
      <section
        className={`relative py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-black" : "bg-white"}`}
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
                className={`p-10 rounded-3xl border transition-all
                  ${
                    isDark
                      ? "bg-gray-900 border-gray-800 hover:border-red-500/30"
                      : "bg-white border-gray-200 shadow-md hover:shadow-lg"
                  }`}
              >
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 mx-auto
                  ${isDark ? "bg-gray-800" : "bg-red-50"}`}
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
    </div>
  );
}
