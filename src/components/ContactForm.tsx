// components/ContactForm.tsx
import React from "react";
import { motion } from "framer-motion";

interface ContactFormProps {
  // Optional: allow overriding endpoint/token via props
  apiEndpoint?: string;
  apiToken?: string;
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  apiEndpoint,
  apiToken,
  className,
}) => {
  const API_ENDPOINT =
    apiEndpoint ??
    "https://login.gameonsolution.in/api/automations/68ef48a60c4e5/execute";
  const API_TOKEN = apiToken ?? "b32ee517e4aea683ecaf892f38bd873d";

  const [status, setStatus] = React.useState<"idle" | "success" | "error">(
    "idle"
  );
  const [serverMessage, setServerMessage] = React.useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

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

      // Template keys required by your automation
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
      setServerMessage("Network error — check console.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white rounded-2xl p-6 shadow-xl text-black mx-auto w-full max-w-md ${
        className ?? ""
      }`}
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
          {serverMessage ?? (status === "success" ? "Success" : "Error")}
        </motion.div>
      )}
    </form>
  );
};

export default ContactForm;
