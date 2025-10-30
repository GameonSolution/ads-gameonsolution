import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import Testimonials from "../testimonial";

const Turf3601: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

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

    const form = e.currentTarget;
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

      // Template keys required
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
      setServerMessage("Network error — please check console.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const maintenanceServices = [
    {
      title: "Regular Turf Cleaning",
      desc: "Keep your 360 Turf fresh and hygienic with our professional cleaning and debris removal service.",
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
    <div className="bg-[#0a1a0a] text-white font-secondary">
      {/* HERO - left content + right contact form */}
      <div className="relative h-[75vh] flex items-center justify-center">
        <img
          src="/360/5.webp"
          alt="360 Turf - Premium"
          className="absolute w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-green-900/30 to-black/80" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6 w-full max-w-7xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left - Headline + description */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl bg-gradient-to-r from-green-400 to-lime-500 bg-clip-text text-transparent font-primary mb-4 uppercase">
                360° Turf
              </h1>
              <p className="text-gray-200 max-w-3xl mx-auto text-lg md:text-xl font-medium">
                <span className="text-green-400 font-bold">360° Turf</span> -
                the{" "}
                <span className="text-green-300 font-bold">
                  ultimate all-rounder
                </span>{" "}
                for sports and leisure. Premium, eco-friendly, and engineered
                for superior performance, safety, and durability.
              </p>
            </div>

            {/* Right - Contact Form integrated from Hero */}
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-6 shadow-xl text-black mx-auto w-full max-w-md"
            >
              <h3 className="text-xl font-semibold mb-2 text-secondary">
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
                  className="bg-green-400 text-black font-semibold py-2 px-6 rounded-lg hover:bg-green-300 transition duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Request Quotation"}
                </button>
              </div>

              {/* Submission Status Message */}
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

      {/* INTRO SECTION */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.img
          src="/360/6.webp"
          alt="360 Turf Grass"
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
          <h2 className="text-3xl md:text-4xl font-bold text-green-400">
            Introducing 360 Turf
          </h2>
          <p className="text-gray-200 text-lg">
            <strong>360 Turf</strong> by GameOn Solution is an advanced
            all-purpose turf engineered for maximum playability, durability, and
            environmental sustainability. It offers the perfect balance of
            performance and aesthetics, making it ideal for professional arenas,
            schools, clubs, and community spaces.
          </p>
          <p className="text-gray-200 text-lg">
            360 Turf is the ultimate solution for multipurpose fields and
            high-traffic areas. It maintains consistent performance, whether
            used for football, cricket, or recreational sports.
          </p>
          <ul className="list-disc list-inside text-gray-200 space-y-3 text-lg">
            <li>High-density turf for professional-grade play</li>
            <li>Cool fiber technology for hot climates</li>
            <li>Perfect for multi-sport arenas and playgrounds</li>
            <li>Durable and low-maintenance solution</li>
          </ul>
          <button className="mt-6 px-8 py-3 bg-green-400 text-black rounded-lg font-medium hover:bg-green-300 transition">
            <a href="https://wa.me/919615737373">Get a Free Quote</a>
          </button>
        </motion.div>
      </div>

      <Testimonials videoIds={["Pycz6S2Si-c", "oOK1DqD7zy8", "Mv-WmPfkp_8"]} />

      {/* 360 TURF SPECIFICATIONS */}
      <div className="py-20 bg-[#102010] text-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-8">
          <h2 className="text-3xl md:text-4xl font-primary text-green-400 uppercase text-center">
            360 Turf Specifications
          </h2>
          <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto">
            The <strong>360 Turf</strong> is built for elite performance with
            enhanced safety and eco-friendly materials. Its premium fibers
            ensure durability, while its drainage and cooling features make it
            perfect for year-round play.
          </p>

          <div className="bg-green-900/20 border border-green-600 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-green-400 mb-4">
                Turf Specifications
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm md:text-base">
                <li>
                  <strong>Pile Height:</strong> 40mm
                </li>
                <li>
                  <strong>Gauge:</strong> 5/8 inch
                </li>
                <li>
                  <strong>Stitch Rate:</strong> 18 st / 10 cm
                </li>
                <li>
                  <strong>Density:</strong> 16,800
                </li>
                <li>
                  <strong>Backing:</strong> 4 Layers (Double PP + Mesh + SBR
                  Latex + PU)
                </li>
                <li>
                  <strong>Warranty:</strong> 8 Years Manufacturer Warranty
                </li>
                <li>
                  <strong>Certification:</strong> FIFA Quality Certified
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-green-400 mb-4">
                Turf Infill
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm md:text-base">
                <li>
                  <strong>Type:</strong> Premium Silica Sand + Rubber Granules
                </li>
                <li>
                  <strong>Grain Size:</strong> 0.5 - 2.0mm
                </li>
                <li>
                  <strong>Quantity:</strong> 600g per sqft ±20%
                </li>
                <li>✅ Heat-Resistant & Shock Absorbing</li>
                <li>✅ Eco-Friendly & Non-Toxic</li>
                <li>✅ Long-Lasting Play Surface</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-950/30 rounded-xl p-6 text-center text-gray-200 text-lg">
            <span className="text-green-400 font-bold">360 Turf</span> is the
            complete solution for multi-sport installations, delivering
            unmatched durability, comfort, and all-weather performance.
          </div>
        </div>
      </div>

      {/* MAINTENANCE SERVICES */}
      <div className="py-20 bg-[#0a1a0a]">
        <h2 className="text-center text-3xl md:text-4xl font-primary uppercase mb-12 text-green-400">
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
              className="bg-[#153015] border border-green-600 rounded-xl p-6 text-center hover:border-green-400 transition"
            >
              <h3 className="text-xl font-bold text-green-400 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* GALLERY */}
      <div className="py-20 bg-[#102010]">
        <h2 className="text-center text-3xl md:text-4xl font-primary uppercase mb-12 text-green-400">
          360 Turf Gallery
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
          {[
            { src: "/360/6.webp", alt: "360 Turf Project 1" },
            { src: "/360/8.webp", alt: "360 Turf Project 2" },
            { src: "/360/7.webp", alt: "360 Turf Project 3" },
            { src: "/360/4.webp", alt: "360 Turf Project 4" },
            { src: "/360/3.webp", alt: "360 Turf Project 5" },
            { src: "/360/5.webp", alt: "360 Turf Project 6" },
          ].map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-2xl shadow-xl border border-green-600/50"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 md:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-green-900/30 to-transparent opacity-70 group-hover:opacity-90 transition" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="py-20 max-w-6xl mx-auto px-6 text-center flex flex-col gap-10">
        <p className="text-[12px] font-secondary uppercase tracking-[1px] text-white">
          FAQs
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary text-white uppercase leading-tight flex flex-wrap justify-center gap-2">
          <span>360 Turf</span>
          <span className="text-green-400">FAQs</span>
        </h1>

        <div className="flex flex-col w-full border border-white/10 rounded-md overflow-hidden divide-y divide-white/10">
          {[
            {
              q: "What makes 360 Turf unique?",
              a: "360 Turf is a high-density, multi-purpose sports turf designed for professional play and long-lasting durability. It is eco-friendly, safe, and optimized for all weather conditions.",
            },
            {
              q: "Is 360 Turf safe for kids and pets?",
              a: "Yes, 360 Turf is 100% non-toxic and lead-free, making it safe for children, pets, and heavy community use.",
            },
            {
              q: "How long does 360 Turf last?",
              a: "With proper maintenance, 360 Turf can last 8-10 years while maintaining its performance and color vibrancy.",
            },
            {
              q: "Does 360 Turf require maintenance?",
              a: "It requires minimal maintenance like occasional cleaning, infill leveling, and debris removal to keep it in top condition.",
            },
            {
              q: "Is 360 Turf weather-resistant?",
              a: "Yes, it features UV-resistant fibers, excellent drainage, and heat-reducing infill, making it suitable for all climates.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="bg-[#153015] hover:bg-[#1a3a1a] transition-colors"
            >
              <button
                className="w-full flex justify-between items-center p-4 md:p-6 cursor-pointer text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h2
                  className={`text-lg md:text-xl lg:text-2xl font-primary ${
                    index % 2 === 0 ? "text-white" : "text-green-400"
                  }`}
                >
                  {faq.q}
                </h2>
                <span className="text-green-400 ml-4">
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
                <p className="p-4 md:p-6 pt-2 md:pt-3 text-base md:text-lg text-white bg-[#0a1a0a]">
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

export default Turf3601;
