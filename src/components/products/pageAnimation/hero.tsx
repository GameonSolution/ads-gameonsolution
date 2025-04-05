import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState } from "react";
import { Container } from "./container";

interface HeroProps {
  title: string;
  subtitle: string;
  bgImgUrl: string;
}

export const Hero = ({ title, subtitle, bgImgUrl }: HeroProps) => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const formspreeUrl = import.meta.env.VITE_FORMSPREE_API_URL;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formspreeUrl) {
      alert("Formspree URL is not configured properly.");
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(formspreeUrl, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="text-white">
      {/* Background Image */}
      <motion.div
        style={{ opacity }}
        ref={videoContainerRef}
        className="absolute left-0 h-[200vh] w-full"
      >
        <img
          className="sticky top-0 h-screen w-full object-cover opacity-30"
          alt="Background"
          src={bgImgUrl}
        />
      </motion.div>

      {/* Foreground Content */}
      <Container className="relative z-10 pt-[12rem] pb-20">
        <motion.div
          className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 w-full"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          whileInView="visible"
          exit="hidden"
          animate="hidden"
          viewport={{ amount: 0.98 }}
        >
          {/* Title & Subtitle */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold font-primary mb-6 leading-tight">
              {title}
              <br />
              <span className="text-secondary">{subtitle}</span>
            </h1>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl text-black space-y-4"
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
                type="email"
                name="email"
                placeholder="Email"
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
                className="bg-secondary text-white font-semibold py-2 px-6 rounded-lg hover:bg-secondary/90 transition duration-200"
              >
                Request Quotation
              </button>
            </div>

            {/* Submission Status Message */}
            {status !== "idle" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={`text-sm font-medium p-3 rounded-md ${
                  status === "success"
                    ? "text-green-700 bg-green-100"
                    : "text-red-700 bg-red-100"
                }`}
              >
                {status === "success"
                  ? "🎉 Form submitted successfully! Our team will get in touch with you shortly."
                  : "⚠️ Oops! Something went wrong. Please try again."}
              </motion.div>
            )}
          </form>
        </motion.div>
      </Container>
    </div>
  );
};
