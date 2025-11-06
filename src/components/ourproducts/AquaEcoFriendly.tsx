// import React, { useEffect } from "react";
// import { motion } from "framer-motion";
// import { FaPlus, FaMinus } from "react-icons/fa";
// import Testimonialsaqua from "../testimonialaqua";
// import Certificatesaqua from "../products/pageAnimation/certificatesaqua";
// import Awardsaqua from "../Awardsaqua";

// const AquaEcoFriendly: React.FC = () => {
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);

//   // Form state & API
//   const [status, setStatus] = React.useState<"idle" | "success" | "error">(
//     "idle"
//   );
//   const [serverMessage, setServerMessage] = React.useState<string | null>(null);
//   const [isSubmitting, setIsSubmitting] = React.useState(false);

//   const API_ENDPOINT =
//     "https://login.gameonsolution.in/api/automations/68ef48a60c4e5/execute";
//   const API_TOKEN = "b32ee517e4aea683ecaf892f38bd873d";

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (isSubmitting) return;

//     const form = e.currentTarget;
//     const data = new FormData(form);

//     const name = String(data.get("name") ?? "").trim();
//     const phone = String(data.get("phone") ?? "").trim();
//     const email = String(data.get("email") ?? "").trim();
//     const location = String(data.get("location") ?? "").trim();
//     const message = String(data.get("message") ?? "").trim();

//     if (!name) {
//       setServerMessage("Name is required.");
//       setStatus("error");
//       return;
//     }

//     if (!phone && !email) {
//       setServerMessage("Please provide phone or email.");
//       setStatus("error");
//       return;
//     }

//     const payload: Record<string, unknown> = {
//       api_token: API_TOKEN,
//       contact_name: name,
//       ...(phone ? { contact_phone: phone } : {}),
//       ...(email ? { contact_email: email } : {}),

//       // Template keys required
//       "{%contact.name%}": name,
//       "{%contact.phone_number%}": phone,
//       "{%contact.email%}": email,
//       "{%contact.location_fzv%}": location,
//       "{%contact.your_message_%}": message,
//     };

//     try {
//       setIsSubmitting(true);
//       setStatus("idle");
//       setServerMessage(null);

//       const res = await fetch(API_ENDPOINT, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify(payload),
//       });

//       const json = await res.json().catch(() => null);

//       if (res.ok) {
//         setStatus("success");
//         setServerMessage(
//           (json && (json.message || JSON.stringify(json))) ??
//             "Form submitted successfully."
//         );
//         form.reset();
//       } else {
//         setStatus("error");
//         const msg =
//           (json && (json.message || JSON.stringify(json))) ??
//           `Request failed with status ${res.status}`;
//         setServerMessage(msg);
//         console.error("API error:", msg, json);
//       }
//     } catch (err) {
//       console.error("Network error:", err);
//       setStatus("error");
//       setServerMessage("Network error — please check console.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const [openIndex, setOpenIndex] = React.useState<number | null>(null);

//   const maintenanceServices = [
//     {
//       title: "Regular Turf Cleaning",
//       desc: "Keep your turf fresh and hygienic with our professional cleaning and debris removal service.",
//     },
//     {
//       title: "Infill & Leveling",
//       desc: "Maintain even play and optimal performance with periodic infill adjustments and leveling.",
//     },
//     {
//       title: "Damage Repair & Replacement",
//       desc: "Quick repair of torn seams, worn-out patches, or fiber damage to extend turf life.",
//     },
//     {
//       title: "Anti-Weed & Anti-Moss Treatment",
//       desc: "Prevent unwanted weed and moss growth with eco-friendly treatments.",
//     },
//   ];

//   return (
//     <div className="bg-[#061d28] text-white font-secondary">
//       {/* ✅ HERO - AQUA THEMED */}
//       <div className="relative min-h-[75vh] flex items-start md:items-center justify-center pt-20 md:pt-0">
//         <img
//           src="/aquaturf/3.webp"
//           alt="Aqua Eco Friendly Turf - Premium"
//           className="absolute w-full h-full object-cover opacity-30"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-cyan-900/30 to-black/80" />

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10 px-6 w-full max-w-7xl"
//         >
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//             {/* Left - Headline + description */}
//             <div className="text-center lg:text-left">
//               <h1 className="text-3xl sm:text-5xl md:text-7xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-primary mb-4 uppercase">
//                 Aqua Eco Friendly Turf
//               </h1>
//               <p className="text-gray-200 max-w-3xl mx-auto text-lg md:text-xl font-medium">
//                 <span className="text-cyan-400 font-bold">Gen Alpha Turf</span>{" "}
//                 - the{" "}
//                 <span className="text-cyan-300 font-bold">
//                   luxury, next-generation
//                 </span>{" "}
//                 solution for sports and leisure. Premium, eco-friendly, and
//                 engineered for unmatched performance and durability.
//               </p>
//             </div>

//             <form
//               onSubmit={handleSubmit}
//               className="bg-white rounded-2xl p-6 shadow-xl text-black mx-auto w-full max-w-md"
//             >
//               <h3 className="text-xl mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-primary">
//                 Get a Quotation for Your Turf Construction
//               </h3>

//               <div className="grid grid-cols-1 gap-4">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Name"
//                   required
//                   className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
//                 />
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Phone Number"
//                   className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email Address"
//                   className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
//                 />
//                 <input
//                   type="text"
//                   name="location"
//                   placeholder="Location"
//                   className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
//                 />
//                 <textarea
//                   name="message"
//                   placeholder="Your Message"
//                   rows={3}
//                   className="border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-secondary"
//                 ></textarea>

//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="bg-cyan-400 text-black font-semibold py-2 px-6 rounded-lg hover:bg-cyan-300 transition duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
//                 >
//                   {isSubmitting ? "Sending..." : "Request Quotation"}
//                 </button>
//               </div>

//               {/* Submission Status Message */}
//               {status !== "idle" && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.4 }}
//                   className={`text-sm font-medium p-3 rounded-md mt-4 ${
//                     status === "success"
//                       ? "text-green-700 bg-green-100"
//                       : "text-red-700 bg-red-100"
//                   }`}
//                 >
//                   {serverMessage ??
//                     (status === "success" ? "Success" : "Error")}
//                 </motion.div>
//               )}
//             </form>
//           </div>
//         </motion.div>
//       </div>

//       {/* ✅ INTRO SECTION */}
//       <div className="max-w-7xl mx-auto px-6 lg:px-20 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
//         <motion.img
//           src="/aquaturf/3.webp"
//           alt="Aqua Eco Friendly Grass"
//           className="rounded-2xl shadow-lg w-full h-full object-cover"
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         />

//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="space-y-6"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
//             Introducing Aqua Eco Friendly Turf (Gen Alpha)
//           </h2>
//           <p className="text-gray-200 text-lg">
//             GameOn’s <strong>Aqua Eco Friendly Grass</strong>, also known as
//             <strong> Gen Alpha Eco Friendly Turf</strong>, is the next evolution
//             of sustainable sports turfs. Like Gen Alpha follows Gen Z, this turf
//             represents the future of eco-friendly play surfaces—offering better
//             performance, safety, and durability.
//           </p>
//           <p className="text-gray-200 text-lg">
//             While our regular Eco Friendly Grass is inspired by{" "}
//             <strong>Gen Z trends</strong>, the <strong>Gen Alpha Turf</strong>{" "}
//             takes it a step further with advanced cooling, faster drainage, and
//             a premium playing experience.
//           </p>
//           <ul className="list-disc list-inside text-gray-200 space-y-3 text-lg">
//             <li>Next-gen eco-friendly design with superior safety</li>
//             <li>Enhanced cooling for hot climates</li>
//             <li>Perfect for professional arenas, schools, and rooftops</li>
//             <li>Long-lasting durability with minimal maintenance</li>
//           </ul>
//         </motion.div>
//       </div>

//       <Testimonialsaqua
//         videoIds={["Qn-bi9z8Lko", "zVnlhMtMwHA", "dBkr5G92fDg"]}
//       />

//       <Certificatesaqua />

//       <Awardsaqua />

//       {/* ✅ AQUA ECO-FRIENDLY TURF SECTION */}
//       <div className="py-20 bg-[#052029] text-white">
//         <div className="max-w-6xl mx-auto px-6 flex flex-col gap-8">
//           <h2 className="text-3xl md:text-4xl font-primary text-cyan-400 uppercase text-center">
//             Aqua Eco Friendly Turf (Gen Alpha)
//           </h2>
//           <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto">
//             The <strong>Gen Alpha Aqua Eco Friendly Turf</strong> is designed
//             for top-level performance and sustainability. With premium non-toxic
//             materials and advanced drainage technology, it ensures comfort,
//             safety, and long-term durability, all while staying cool under the
//             sun.
//           </p>

//           {/* ✅ SPECIFICATIONS */}
//           <div className="bg-cyan-900/20 border border-cyan-600 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <h3 className="text-xl font-bold text-cyan-400 mb-4">
//                 Turf Specifications
//               </h3>
//               <ul className="text-gray-300 space-y-2 text-sm md:text-base">
//                 <li>
//                   <strong>Pile Height:</strong> 30mm
//                 </li>
//                 <li>
//                   <strong>Gauge:</strong> 3/8 inch
//                 </li>
//                 <li>
//                   <strong>Stitch Rate:</strong> 20 st / 10 cm
//                 </li>
//                 <li>
//                   <strong>Density:</strong> 18,000
//                 </li>
//                 <li>
//                   <strong>Backing:</strong> 4 Layers (Double PP + Mesh + SBR
//                   Latex + PU)
//                 </li>
//                 <li>
//                   <strong>Warranty:</strong> 7 Years Manufacturer Warranty
//                 </li>
//                 <li>
//                   <strong>Certification:</strong> FIFA Quality Pro Certified
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-xl font-bold text-cyan-400 mb-4">
//                 Turf Infill
//               </h3>
//               <ul className="text-gray-300 space-y-2 text-sm md:text-base">
//                 <li>
//                   <strong>Type:</strong> Premium Quartz Micro White Sand
//                 </li>
//                 <li>
//                   <strong>Grain Size:</strong> 0.5 - 1.0mm
//                 </li>
//                 <li>
//                   <strong>Quantity:</strong> 500g per sqft ±20%
//                 </li>
//                 <li>✅ Advanced Cooling Technology</li>
//                 <li>✅ Non-Toxic and 100% Safe</li>
//                 <li>✅ Zero Cancer-Causing Agents</li>
//               </ul>
//             </div>
//           </div>

//           <div className="bg-cyan-950/30 rounded-xl p-6 text-center text-gray-200 text-lg">
//             The{" "}
//             <span className="text-cyan-400 font-bold">
//               Gen Alpha Aqua Eco Friendly Turf
//             </span>{" "}
//             is the future of sports surfaces—delivering maximum play
//             performance, enhanced safety, and long-lasting durability for the
//             next generation.
//           </div>
//         </div>
//       </div>

//       {/* ✅ MAINTENANCE SERVICES */}
//       <div className="py-20 bg-[#061d28]">
//         <h2 className="text-center text-3xl md:text-4xl font-primary uppercase mb-12 text-cyan-400">
//           Turf Maintenance Services
//         </h2>
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
//           {maintenanceServices.map((service, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="bg-[#0a2c3a] border border-cyan-600 rounded-xl p-6 text-center hover:border-cyan-400 transition"
//             >
//               <h3 className="text-xl font-bold text-cyan-400 mb-2">
//                 {service.title}
//               </h3>
//               <p className="text-gray-300 text-sm">{service.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* ✅ WHY AQUA ECO FRIENDLY SECTION */}
//       <div className="py-20 bg-gradient-to-b from-[#061d28] via-[#052029] to-[#061d28]">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 lg:px-20">
//           {/* Left - Text */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//             className="space-y-6"
//           >
//             <h2 className="text-3xl md:text-4xl font-primary text-cyan-400 uppercase">
//               Why Aqua Eco Friendly Turf?
//             </h2>
//             <p className="text-gray-300 text-lg leading-relaxed">
//               The{" "}
//               <span className="text-cyan-400 font-bold">
//                 Gen Alpha Aqua Eco Friendly Turf
//               </span>{" "}
//               is not just another artificial grass — it’s the future of sports
//               surfaces. Designed for modern arenas, schools, and premium sports
//               clubs, it blends
//               <span className="font-bold">
//                 {" "}
//                 sustainability, performance, and luxury aesthetics
//               </span>
//               .
//             </p>

//             {/* Features */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
//               {[
//                 {
//                   title: "Eco Friendly",
//                   desc: "Made with 100% non-toxic, recyclable, and lead-free materials.",
//                 },
//                 {
//                   title: "Luxury Aesthetic",
//                   desc: "Richer color tones & premium texture for high-end installations.",
//                 },
//                 {
//                   title: "FIFA Certified",
//                   desc: "Meets FIFA Quality Pro standards for global-level play.",
//                 },
//               ].map((item, i) => (
//                 <div
//                   key={i}
//                   className="flex items-start gap-4 bg-[#0a2c3a]/60 p-5 rounded-xl border border-cyan-600/30 hover:border-cyan-400 transition"
//                 >
//                   <div>
//                     <h3 className="text-lg font-bold text-cyan-400">
//                       {item.title}
//                     </h3>
//                     <p className="text-gray-300 text-sm">{item.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Right - Image */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//             className="relative rounded-2xl overflow-hidden shadow-xl border border-cyan-600/40"
//           >
//             <img
//               src="/aquaturf/1.webp"
//               alt="Why Aqua Eco Friendly Turf"
//               className="w-full h-full object-cover transform hover:scale-105 transition duration-700"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-cyan-900/20 to-transparent" />
//           </motion.div>
//         </div>
//       </div>

//       {/* ✅ GALLERY SECTION */}
//       <div className="py-20 bg-[#052029]">
//         <h2 className="text-center text-3xl md:text-4xl font-primary uppercase mb-12 text-cyan-400">
//           Aqua Eco Friendly Turf Gallery
//         </h2>

//         <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
//           {[
//             { src: "/aquaturf/1.webp", alt: "Aqua Turf Premium Project 1" },
//             { src: "/aquaturf/8.webp", alt: "Aqua Turf Premium Project 2" },
//             { src: "/aquaturf/3.webp", alt: "Aqua Turf Premium Project 3" },
//             { src: "/aquaturf/4.webp", alt: "Aqua Turf Premium Project 4" },
//             { src: "/aquaturf/5.webp", alt: "Aqua Turf Premium Project 5" },
//             { src: "/aquaturf/6.webp", alt: "Aqua Turf Premium Project 6" },
//           ].map((img, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: idx * 0.1 }}
//               viewport={{ once: true }}
//               className="relative group overflow-hidden rounded-2xl shadow-xl border border-cyan-600/50"
//             >
//               <img
//                 src={img.src}
//                 alt={img.alt}
//                 className="w-full h-48 md:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-cyan-900/30 to-transparent opacity-70 group-hover:opacity-90 transition" />
//               {/* <div className="absolute bottom-4 left-4 text-cyan-400 text-lg font-bold drop-shadow-lg">
//                 {img.alt}
//               </div> */}
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* ✅ FAQ */}
//       <div className="py-20 max-w-6xl mx-auto px-6 text-center flex flex-col gap-10">
//         <p className="text-[12px] font-secondary uppercase tracking-[1px] text-white">
//           FAQs
//         </p>
//         <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary text-white uppercase leading-tight flex flex-wrap justify-center gap-2">
//           <span>Aqua Eco Friendly Turf</span>
//           <span className="text-cyan-400">FAQs</span>
//         </h1>

//         <div className="flex flex-col w-full border border-white/10 rounded-md overflow-hidden divide-y divide-white/10">
//           {[
//             {
//               q: "What makes Aqua Eco Friendly Turf (Gen Alpha) different?",
//               a: "Aqua Eco Friendly Turf, also known as Gen Alpha Turf, is a premium and luxury version of our standard Eco Friendly Turf. While it uses the same 100% non-toxic, lead-free materials, Aqua Turf features an advanced aesthetic finish, richer color tones, and a high-end look for professional and luxury sports arenas.",
//             },
//             {
//               q: "Is Aqua Eco Friendly Turf safe for kids and pets?",
//               a: "Absolutely. Like our regular Eco Friendly Turf, Aqua Turf is completely non-toxic, lead-free, and safe for children and pets. It also produces less surface heat compared to rubber-infilled turfs.",
//             },
//             {
//               q: "Eco Friendly Turf vs Aqua Eco Friendly Turf?",
//               a: "Both are made with the same safe and sustainable materials. The difference lies in the premium experience: Aqua Eco Friendly Turf (Gen Alpha) offers a luxury aesthetic, enhanced durability, and a professional-grade finish perfect for high-end installations.",
//             },
//             {
//               q: "How long does Aqua Eco Friendly Turf last?",
//               a: "With proper maintenance, Aqua Eco Friendly Turf lasts 8-10 years while maintaining its color, premium texture, and structural integrity.",
//             },
//             {
//               q: "Does Aqua Turf require special maintenance?",
//               a: "Not at all. It is low maintenance, requires no regular watering, and only occasional cleaning to remove dust and debris.",
//             },
//             {
//               q: "Is Aqua Eco Friendly Turf weather-resistant?",
//               a: "Yes. Aqua Turf is UV-resistant, drains water efficiently, and performs perfectly in heavy rainfall or hot conditions without degrading its premium look.",
//             },
//           ].map((faq, index) => (
//             <div
//               key={index}
//               className="bg-[#0a2c3a] hover:bg-[#0e3142] transition-colors"
//             >
//               <button
//                 className="w-full flex justify-between items-center p-4 md:p-6 cursor-pointer text-left"
//                 onClick={() => setOpenIndex(openIndex === index ? null : index)}
//                 aria-expanded={openIndex === index}
//                 aria-controls={`faq-answer-${index}`}
//               >
//                 <h2
//                   className={`text-lg md:text-xl lg:text-2xl font-primary ${
//                     index % 2 === 0 ? "text-white" : "text-cyan-400"
//                   }`}
//                 >
//                   {faq.q}
//                 </h2>
//                 <span className="text-cyan-400 ml-4">
//                   {openIndex === index ? (
//                     <FaMinus size={16} />
//                   ) : (
//                     <FaPlus size={16} />
//                   )}
//                 </span>
//               </button>
//               <div
//                 id={`faq-answer-${index}`}
//                 className={`overflow-hidden transition-all duration-300 ease-in-out ${
//                   openIndex === index
//                     ? "max-h-96 opacity-100"
//                     : "max-h-0 opacity-0"
//                 }`}
//               >
//                 <p className="p-4 md:p-6 pt-2 md:pt-3 text-base md:text-lg text-white bg-[#061d28]">
//                   {faq.a}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AquaEcoFriendly;

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus, FaCheckCircle } from "react-icons/fa";
import Testimonialsaqua from "../testimonialaqua";
import Certificatesaqua from "../products/pageAnimation/certificatesaqua";
import Awardsaqua from "../Awardsaqua";

const AquaEcoFriendly: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Form state & API
  const [status, setStatus] = React.useState<"idle" | "success" | "error">(
    "idle"
  );
  const [serverMessage, setServerMessage] = React.useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const API_ENDPOINT =
    "https://login.gameonsolution.in/api/automations/68ef48a60c4e5/execute";
  const API_TOKEN = "b32ee517e4aea683ecaf892f38bd873d";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const location = String(data.get("location") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name) {
      setServerMessage("Name is required.");
      setStatus("error");
      return;
    }

    if (!phone && !email) {
      setServerMessage("Please provide phone or email.");
      setStatus("error");
      return;
    }

    const payload: Record<string, unknown> = {
      api_token: API_TOKEN,
      contact_name: name,
      ...(phone ? { contact_phone: phone } : {}),
      ...(email ? { contact_email: email } : {}),
      "{%contact.name%}": name,
      "{%contact.phone_number%}": phone,
      "{%contact.email%}": email,
      "{%contact.location_fzv%}": location,
      "{%contact.your_message_%}": message,
    };

    try {
      setIsSubmitting(true);
      setStatus("idle");
      setServerMessage(null);

      const res = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const json = await res.json().catch(() => null);

      if (res.ok) {
        setStatus("success");
        setServerMessage(
          (json && (json.message || JSON.stringify(json))) ??
            "Form submitted successfully."
        );
        form.reset();
      } else {
        setStatus("error");
        const msg =
          (json && (json.message || JSON.stringify(json))) ??
          `Request failed with status ${res.status}`;
        setServerMessage(msg);
        console.error("API error:", msg, json);
      }
    } catch (err) {
      console.error("Network error:", err);
      setStatus("error");
      setServerMessage("Network error - please check console.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const maintenanceServices = [
    {
      title: "Regular Turf Cleaning",
      desc: "Keep your turf fresh and hygienic with our professional cleaning and debris removal service.",
    },
    {
      title: "Infill & Leveling",
      desc: "Maintain even play and optimal performance with periodic infill adjustments and leveling.",
    },
    {
      title: "Damage Repair & Replacement",
      desc: "Quick repair of torn seams, worn-out patches, or fiber damage to extend turf life.",
    },
    {
      title: "Anti-Weed & Anti-Moss Treatment",
      desc: "Prevent unwanted weed and moss growth with eco-friendly treatments.",
    },
  ];

  return (
    <div className="bg-[#061d28] text-white font-secondary">
      {/* HERO - AQUA THEMED */}
      <div className="relative min-h-[75vh] flex items-start md:items-center justify-center pt-20 md:pt-0">
        <img
          src="/aquaturf/3.webp"
          alt="Aqua Eco Friendly Turf - Premium"
          className="absolute w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-cyan-900/30 to-black/80" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6 w-full max-w-7xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left - Headline + description */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-5xl md:text-7xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-primary mb-4 uppercase">
                AQUA ECO-FRIENDLY TURF
              </h1>
              <p className="text-gray-200 max-w-3xl mx-auto text-lg md:text-xl font-medium">
                <span className="text-cyan-400 font-bold">
                  Play with Purpose, Build with Style.
                </span>{" "}
                GameOn Solution introduces Aqua Eco-Friendly Turf, the next
                generation of sports flooring engineered with sustainability and
                performance in mind.
              </p>
            </div>

            {/* Right - Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-6 shadow-xl text-black mx-auto w-full max-w-md"
            >
              <h3 className="text-xl mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-primary">
                Get a Quotation for Your Turf Construction
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={3}
                  className="border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-secondary"
                ></textarea>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-cyan-400 text-black font-semibold py-2 px-6 rounded-lg hover:bg-cyan-300 transition duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Request Quotation"}
                </button>
              </div>
              {status !== "idle" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className={`text-sm font-medium p-3 rounded-md mt-4 ${
                    status === "success"
                      ? "text-green-700 bg-green-100"
                      : "text-red-700 bg-red-100"
                  }`}
                >
                  {serverMessage ??
                    (status === "success" ? "Success" : "Error")}
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </div>

      {/* INTRO / WHAT IS AQUA */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <motion.img
          src="/aquaturf/1.webp"
          alt="Aqua Eco Friendly Grass"
          className="rounded-2xl shadow-lg w-full h-full object-cover"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
            What Is Aqua Eco-Friendly Turf?
          </h2>
          <p className="text-gray-200 text-lg">
            Aqua Turf is a sustainable artificial grass system that mimics
            natural grass using biodegradable fibers, recyclable backing, and
            water-conserving materials. It’s designed for sports like football,
            cricket, multi-sport arenas, and landscape areas - combining
            durability with environmental care. Unlike traditional turf that
            heats up, traps dust, and drains poorly, Aqua Turf stays cool,
            breathable, and clean, making it ideal for Indian weather.
          </p>
        </motion.div>
      </div>

      {/* TRUST / HIGHLIGHTS */}
      <section className="py-12 bg-[#052029]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start px-6 lg:px-20">
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-primary text-cyan-400">
              Why Choose GameOn Solution?
            </h3>
            <p className="text-gray-300">
              Because we don’t just install turf - we build professionalism.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-200">
              {[
                "FIFA Quality and FIFA Pro-Approved Artificial Turf Systems",
                "Eco-Friendly Grass",
                "Aqua Eco-Friendly Grass",
                "Laser-Leveled Base & Drainage System",
                "8+ Years of Expertise in Sports Infrastructure Design",
                "Long-Term Warranty & Maintenance Support",
              ].map((t, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <FaCheckCircle className="mt-1" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Feature → Eco Benefit table */}
          <div className="rounded-2xl overflow-hidden border border-cyan-700/40">
            <div className="bg-cyan-900/30 px-4 py-3 font-semibold text-cyan-300">
              Why Choose GameOn Solution’s Aqua Eco Turf
            </div>
            <table className="w-full text-left text-gray-200">
              <thead className="bg-cyan-900/20">
                <tr>
                  <th className="py-3 px-4">Feature</th>
                  <th className="py-3 px-4">Eco-Friendly Benefit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cyan-800/40">
                <tr>
                  <td className="py-3 px-4">Recyclable Base Layer</td>
                  <td className="py-3 px-4">
                    100% reusable turf backing made from non-toxic polymers.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Lead-Free & Non-Toxic Fibers</td>
                  <td className="py-3 px-4">
                    Safe for children, pets, and players.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Heat-Resistant CoolPlay Tech</td>
                  <td className="py-3 px-4">
                    Reduces surface temperature by up to 25%.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">RainSmart Drainage System</td>
                  <td className="py-3 px-4">
                    Fast drainage during monsoons; prevents waterlogging.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Zero-Maintenance Landscaping</td>
                  <td className="py-3 px-4">
                    No mowing, fertilizers, or pesticides required.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Testimonialsaqua
        videoIds={["Qn-bi9z8Lko", "zVnlhMtMwHA", "dBkr5G92fDg"]}
      />

      <Certificatesaqua />

      <Awardsaqua />

      {/* APPLICATIONS */}
      <section className="py-16 bg-[#061d28]">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <h3 className="text-2xl md:text-3xl font-primary text-cyan-400 mb-6">
            Applications of Aqua Eco Turf
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0a2c3a] border border-cyan-700/40 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-cyan-300 mb-3">
                Sports Applications
              </h4>
              <ul className="space-y-2 text-gray-200">
                {[
                  "Football & Futsal Turfs",
                  "Cricket Nets & Grounds",
                  "Multi-Sports Arenas",
                  "Tennis & Volleyball Courts",
                ].map((t, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <FaCheckCircle className="mt-1" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0a2c3a] border border-cyan-700/40 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-cyan-300 mb-3">
                Landscape Applications
              </h4>
              <ul className="space-y-2 text-gray-200">
                {[
                  "School Playgrounds",
                  "Rooftops & Balconies",
                  "Resort & Villa Gardens",
                  "Corporate Spaces & Walkways",
                ].map((t, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <FaCheckCircle className="mt-1" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AQUA SPECIFICATIONS */}
      <div className="py-20 bg-[#052029] text-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-8">
          <h2 className="text-3xl md:text-4xl font-primary text-cyan-400 uppercase text-center">
            Aqua Eco-Friendly Turf - Specs
          </h2>
          <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto">
            Engineered with AQUA-grade materials for comfort, safety and
            longevity.
          </p>
          <div className="bg-cyan-900/20 border border-cyan-600 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-4">
                Turf Specifications
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm md:text-base">
                <li>
                  <strong>Pile Height:</strong> 30–40mm (custom)
                </li>
                <li>
                  <strong>Gauge:</strong> 3/8 or 5/8 inch
                </li>
                <li>
                  <strong>Stitch Rate:</strong> 18–22 st / 10 cm
                </li>
                <li>
                  <strong>Density:</strong> 16,000–20,000
                </li>
                <li>
                  <strong>Backing:</strong> Double PP + Mesh + SBR Latex / PU
                </li>
                <li>
                  <strong>Warranty:</strong> Up to 7 years
                </li>
                <li>
                  <strong>Certification:</strong> FIFA Quality / Pro (as per
                  system)
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-4">
                Turf Infill
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm md:text-base">
                <li>
                  <strong>Type:</strong> Quartz Silica Sand / Organic infill
                  (cork)
                </li>
                <li>
                  <strong>Grain Size:</strong> 0.5–1.0mm
                </li>
                <li>
                  <strong>Quantity:</strong> 500–600g per sqft ±20%
                </li>
                <li>✅ Advanced Cooling</li>
                <li>✅ Non-Toxic & Safe</li>
                <li>✅ Odor-Free</li>
              </ul>
            </div>
          </div>
          <div className="bg-cyan-950/30 rounded-xl p-6 text-center text-gray-200 text-lg">
            Aqua Turf stays cool, breathes well, and drains fast - perfect for
            South Indian climates and year-round play.
          </div>
        </div>
      </div>

      {/* MAINTENANCE SERVICES */}
      <div className="py-20 bg-[#061d28]">
        <h2 className="text-center text-3xl md:text-4xl font-primary uppercase mb-12 text-cyan-400">
          Turf Maintenance Services
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {maintenanceServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#0a2c3a] border border-cyan-600 rounded-xl p-6 text-center hover:border-cyan-400 transition"
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CONSTRUCTION PROCESS TABLE */}
      <section className="py-16 bg-[#052029]">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <h3 className="text-2xl md:text-3xl font-primary text-cyan-400 mb-6">
            Our Eco Turf Construction Process
          </h3>
          <div className="overflow-hidden rounded-2xl border border-cyan-700/40">
            <table className="w-full text-left text-gray-200">
              <thead className="bg-cyan-900/20">
                <tr>
                  <th className="py-3 px-4">Stage</th>
                  <th className="py-3 px-4">Process</th>
                  <th className="py-3 px-4">Eco Advantage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cyan-800/40">
                <tr>
                  <td className="py-3 px-4">1. Site Preparation</td>
                  <td className="py-3 px-4">
                    Leveling, compaction, drainage base setup
                  </td>
                  <td className="py-3 px-4">
                    Optimizes water flow, reduces soil erosion
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">2. Shockpad Layer Installation</td>
                  <td className="py-3 px-4">Recyclable cushioning underlay</td>
                  <td className="py-3 px-4">Improves safety, 100% reusable</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">3. Turf Laying & Jointing</td>
                  <td className="py-3 px-4">
                    Turf stitched using eco adhesives
                  </td>
                  <td className="py-3 px-4">
                    Zero-toxic bonding, no chemical fumes
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">4. Infill & Finishing</td>
                  <td className="py-3 px-4">
                    Natural cork or organic infill applied
                  </td>
                  <td className="py-3 px-4">Biodegradable and odor-free</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">5. Testing & Certification</td>
                  <td className="py-3 px-4">
                    Bounce, traction, and safety validation
                  </td>
                  <td className="py-3 px-4">Meets FIFA Eco Standards</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* WHY AQUA + IMAGE */}
      <div className="py-20 bg-gradient-to-b from-[#061d28] via-[#052029] to-[#061d28]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-primary text-cyan-400 uppercase">
              Why Aqua Eco Friendly Turf?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Aqua Eco Turf blends sustainability, performance, and luxury
              aesthetics for modern arenas, schools, and premium clubs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              {[
                {
                  title: "Eco Friendly",
                  desc: "Made with 100% non-toxic, recyclable, and lead-free materials.",
                },
                {
                  title: "Luxury Aesthetic",
                  desc: "Richer color tones & premium texture for high-end installations.",
                },
                {
                  title: "FIFA Certified",
                  desc: "Meets FIFA Quality/Pro standards for global-level play.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-[#0a2c3a]/60 p-5 rounded-xl border border-cyan-600/30 hover:border-cyan-400 transition"
                >
                  <div>
                    <h3 className="text-lg font-bold text-cyan-400">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-xl border border-cyan-600/40"
          >
            <img
              src="/aquaturf/6.webp"
              alt="Why Aqua Eco Friendly Turf"
              className="w-full h-full object-cover transform hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-cyan-900/20 to-transparent" />
          </motion.div>
        </div>
      </div>

      {/* GALLERY */}
      <div className="py-20 bg-[#052029]">
        <h2 className="text-center text-3xl md:text-4xl font-primary uppercase mb-12 text-cyan-400">
          Aqua Eco Friendly Turf Gallery
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
          {[
            { src: "/aquaturf/1.webp", alt: "Aqua Turf Premium Project 1" },
            { src: "/aquaturf/8.webp", alt: "Aqua Turf Premium Project 2" },
            { src: "/aquaturf/3.webp", alt: "Aqua Turf Premium Project 3" },
            { src: "/aquaturf/4.webp", alt: "Aqua Turf Premium Project 4" },
            { src: "/aquaturf/5.webp", alt: "Aqua Turf Premium Project 5" },
            { src: "/aquaturf/6.webp", alt: "Aqua Turf Premium Project 6" },
          ].map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-2xl shadow-xl border border-cyan-600/50"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 md:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-cyan-900/30 to-transparent opacity-70 group-hover:opacity-90 transition" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* WHO WE BUILD FOR + PROMISE */}
      <section className="py-16 bg-[#061d28]">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <h3 className="text-2xl md:text-3xl font-primary text-cyan-400 mb-6">
            Who We Build For
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-200">
            {[
              "Schools & Colleges - Safe, non-toxic play areas for kids",
              "Sports Academies - FIFA-standard sustainable turfs",
              "Developers & Resorts - Eco-luxury green spaces",
              "Corporates - Smart landscaping for campuses",
              "Private Villas - Backyard turf with green aesthetics",
            ].map((t, i) => (
              <div key={i} className="flex gap-3 items-start">
                <FaCheckCircle className="mt-1" />
                {t}
              </div>
            ))}
          </div>
          <div className="mt-8 bg-[#0a2c3a] border border-cyan-700/40 rounded-2xl p-6">
            <h4 className="text-xl font-bold text-cyan-300 mb-2">
              Our Eco Promise
            </h4>
            <p className="text-gray-300">
              At GameOn Solution, sustainability isn’t an afterthought - it’s
              our foundation. We integrate eco materials, smart drainage,
              renewable infill, and energy-efficient installation processes to
              ensure low carbon footprint projects.
            </p>
            <p className="text-gray-300 mt-2">
              <strong>Areas We Serve:</strong> Tamil Nadu, Karnataka, Telangana,
              Andhra Pradesh - and expanding across South India.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div className="py-20 max-w-6xl mx-auto px-6 text-center flex flex-col gap-10">
        <p className="text-[12px] font-secondary uppercase tracking-[1px] text-white">
          FAQs
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary text-white uppercase leading-tight flex flex-wrap justify-center gap-2">
          <span>Aqua Eco Friendly Turf</span>
          <span className="text-cyan-400">FAQs</span>
        </h1>

        <div className="flex flex-col w-full border border-white/10 rounded-md overflow-hidden divide-y divide-white/10">
          {[
            {
              q: "What makes Aqua Eco Friendly Turf different?",
              a: "Aqua Eco Friendly Turf is a premium, sustainability-first system that stays cooler, drains faster, and looks richer than traditional rubber-infilled systems.",
            },
            {
              q: "Is Aqua Eco Friendly Turf safe for kids and pets?",
              a: "Absolutely. It’s completely non-toxic and lead-free, and produces less surface heat compared to rubber-infilled turfs.",
            },
            {
              q: "Eco Friendly Turf vs Aqua Eco Friendly Turf?",
              a: "Both are safe and sustainable. Aqua adds a luxury aesthetic, enhanced durability, and a professional-grade finish for high-end installations.",
            },
            {
              q: "How long does Aqua Eco Friendly Turf last?",
              a: "With proper maintenance, typically 8–10 years while maintaining its color, premium texture, and structure.",
            },
            {
              q: "Does Aqua Turf require special maintenance?",
              a: "No. It requires no regular watering and only occasional cleaning/brushing.",
            },
            {
              q: "Is Aqua Eco Friendly Turf weather-resistant?",
              a: "Yes - UV-resistant fibers and RainSmart drainage make it ideal for heavy rain and heat.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="bg-[#0a2c3a] hover:bg-[#0e3142] transition-colors"
            >
              <button
                className="w-full flex justify-between items-center p-4 md:p-6 cursor-pointer text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h2
                  className={`text-lg md:text-xl lg:text-2xl font-primary ${
                    index % 2 === 0 ? "text-white" : "text-cyan-400"
                  }`}
                >
                  {faq.q}
                </h2>
                <span className="text-cyan-400 ml-4">
                  {openIndex === index ? (
                    <FaMinus size={16} />
                  ) : (
                    <FaPlus size={16} />
                  )}
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="p-4 md:p-6 pt-2 md:pt-3 text-base md:text-lg text-white bg-[#061d28]">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AquaEcoFriendly;
