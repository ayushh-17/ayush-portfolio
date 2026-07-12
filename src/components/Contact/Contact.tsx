import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../common/Container";
import { sendEmail } from "../Services/email";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

import { toast } from "react-hot-toast";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);

  const [sent, setSent] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "", // honeypot
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
      website: "",
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    // Honeypot spam protection
    if (form.website !== "") {
      return;
    }

    // Validation

    if (form.name.trim().length < 2) {
      toast.error("Name must be at least 2 characters");
      return;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email)) {
      toast.error("Enter a valid email address");
      return;
    }

    if (form.subject.trim() === "") {
      toast.error("Subject is required");
      return;
    }

    if (form.message.trim().length < 20) {
      toast.error(
        "Message should be at least 20 characters"
      );
      return;
    }

    try {
      setLoading(true);

      await sendEmail({
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      });

      toast.success(
        "Message sent successfully!"
      );

      setSent(true);

      resetForm();

      setTimeout(() => {
        setSent(false);
      }, 7000);

    } catch (error) {
      console.error(error);

      toast.error(
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  

  return (
    <section
  id="contact"
  className="relative overflow-hidden py-32"
>
  <Container>
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Heading */}

      <div className="mb-20 text-center">
        <p className="mb-4 uppercase tracking-[8px] text-blue-400">
          Contact
        </p>

        <h2 className="text-5xl font-black md:text-6xl">
          Let's Work
          <br />

          <span className="bg-gradient-to-r from-blue-400 via-white to-indigo-300 bg-clip-text text-transparent">
            Together
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
          Interested in internships, freelance projects or collaborations?
          Feel free to send me a message.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-5">

        {/* FORM */}

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl lg:col-span-3">

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* Honeypot */}

            <input
              type="text"
              name="website"
              value={form.website}
              onChange={handleChange}
              className="hidden"
              autoComplete="off"
            />

            <input
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-transparent px-5 py-4 outline-none transition focus:border-blue-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-transparent px-5 py-4 outline-none transition focus:border-blue-400"
            />

            <input
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-transparent px-5 py-4 outline-none transition focus:border-blue-400"
            />

            <textarea
              rows={6}
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full resize-none rounded-xl border border-white/10 bg-transparent px-5 py-4 outline-none transition focus:border-blue-400"
            />

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-400 to-blue-500 py-4 font-semibold text-black transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <>
                  <div className="mr-3 h-5 w-5 animate-spin rounded-full border-2 border-black border-t-transparent" />

                  Sending...
                </>
              ) : (
                "Send Message 🚀"
              )}
            </button>

          </form>

          {/* Success */}

          <AnimatePresence>

            {sent && (

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-8 rounded-2xl border border-green-500/20 bg-green-500/10 p-6 text-center"
              >

                <div className="mb-3 text-5xl">

                  ✅

                </div>

                <h3 className="text-2xl font-bold text-green-400">

                  Message Sent Successfully

                </h3>

                <p className="mt-3 text-gray-300">
                  Thanks for contacting me.
                  <br />
                  I'll reply within 24 hours.
                </p>

              </motion.div>

            )}

          </AnimatePresence>

        </div>

        {/* CONTACT INFO */}

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl lg:col-span-2">

          <h3 className="mb-8 text-2xl font-bold">
            Contact Information
          </h3>

          <div className="space-y-8">

            <div className="flex gap-5">

              <FaEnvelope className="mt-1 text-blue-400" />

              <div>

                <p className="text-sm text-gray-400">
                  Email
                </p>

                <p>
                  ayushkarmani2@gmail.com
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <FaPhone className="mt-1 text-blue-400" />

              <div>

                <p className="text-sm text-gray-400">
                  Phone
                </p>

                <a href="tel:+918698320092" className="transition hover:text-blue-400">
                  +91 8698320092
                </a>

              </div>

            </div>

            <div className="flex gap-5">

              <FaMapMarkerAlt className="mt-1 text-blue-400" />

              <div>

                <p className="text-sm text-gray-400">
                  Location
                </p>

                <p>
                  Gondia, Maharashtra
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <FaGithub className="mt-1 text-blue-400" />

              <a
                href="https://github.com/ayushh-17"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-blue-400"
                  aria-label="GitHub Profile"
              >
                github.com/ayushh-17
              </a>

            </div>

            <div className="flex gap-5">

              <FaLinkedin className="mt-1 text-blue-400" />

              <a
                href="https://linkedin.com/in/ayush-karmani-7217a3231"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-blue-400"
                  aria-label="LinkedIn Profile"

              >
                linkedin.com/in/ayush-karmani-7217a3231
              </a>

            </div>

          </div>

        </div>

      </div>

    </motion.div>

  </Container>

</section>
);
}