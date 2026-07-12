import { motion } from "framer-motion";

function ContactForm() {
  return (
    <motion.form
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <input
        type="text"
        placeholder="Your Name"
        className="
        w-full
        rounded-2xl
        border
        border-white/10
        bg-white/5
        px-5
        py-4
        outline-none
        text-white
        placeholder:text-gray-500
        focus:border-cyan-400
        transition-all
        "
      />

      <input
        type="email"
        placeholder="Your Email"
        className="
        w-full
        rounded-2xl
        border
        border-white/10
        bg-white/5
        px-5
        py-4
        outline-none
        text-white
        placeholder:text-gray-500
        focus:border-cyan-400
        transition-all
        "
      />

      <input
        type="text"
        placeholder="Subject"
        className="
        w-full
        rounded-2xl
        border
        border-white/10
        bg-white/5
        px-5
        py-4
        outline-none
        text-white
        placeholder:text-gray-500
        focus:border-cyan-400
        transition-all
        "
      />

      <textarea
        rows={6}
        placeholder="Your Message..."
        className="
        w-full
        rounded-2xl
        border
        border-white/10
        bg-white/5
        px-5
        py-4
        outline-none
        text-white
        placeholder:text-gray-500
        focus:border-cyan-400
        transition-all
        resize-none
        "
      />

      <button
        className="
        w-full
        rounded-full
        bg-gradient-to-r
        from-cyan-400
        to-blue-500
        py-4
        font-semibold
        text-black
        transition-all
        duration-300
        hover:scale-[1.02]
        hover:shadow-[0_0_35px_rgba(34,211,238,.4)]
        "
      >
        Send Message 🚀
      </button>
    </motion.form>
  );
}

export default ContactForm;