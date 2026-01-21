"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-x-hidden">

      {/* ================= HERO ================= */}
<motion.section
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto px-8 pt-24"
>
  {/* LEFT CONTENT */}
  <motion.div
    whileHover={{ rotateX: 3, rotateY: -3 }}
    transition={{ type: "spring", stiffness: 100 }}
    className="flex-1"
  >
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      BEERA RENUKA RAMANI
    </h1>

    <p className="text-lg text-blue-300 mb-6">
      Aspiring Software Developer
    </p>

    {/* RESUME BUTTON */}
    <a
      href="Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400
                 text-white font-medium shadow-lg hover:scale-105 hover:shadow-cyan-400/50
                 transition-transform duration-300"
    >
      Download Resume (PDF)
    </a>
  </motion.div>

  {/* PROFILE IMAGE */}
  <motion.div
    whileHover={{ rotateY: 12, rotateX: 6, scale: 1.05 }}
    transition={{ type: "spring", stiffness: 120 }}
    className="w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden
               border-4 border-blue-400 shadow-xl shadow-blue-500/40"
  >
    <Image
      src="/profile.jpeg"
      alt="Profile"
      width={176}
      height={176}
      className="object-cover"
    />
  </motion.div>
</motion.section>




      {/* ABOUT */}
<motion.section
  className="relative max-w-4xl mx-auto px-8 mt-24"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9 }}
>
  {/* Aurora glow background */}
  <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-teal-500/20 blur-3xl"></div>

  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400"
  >
    About Me
  </motion.h2>

  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="rounded-2xl p-6 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-teal-500/10 border border-white/10 backdrop-blur-xl shadow-[0_0_40px_rgba(59,130,246,0.25)]"
  >
    <p className="text-lg text-gray-200 leading-relaxed">
      I am a motivated Computer Science student with a strong interest in
      software development, artificial intelligence, natural language
      processing and cybersecurity. I enjoy building real-world projects that combine logic,
      creativity, and technology. Through continuous learning and hands-on
      experience, I aim to grow as a skilled developer and contribute to
      innovative solutions.
    </p>
  </motion.div>
</motion.section>


      {/* EDUCATION */}
<motion.section
  className="max-w-4xl mx-auto px-8 mt-28"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <h2 className="text-3xl font-bold mb-10 text-blue-400">
    Education
  </h2>

  <div className="relative space-y-10 border-l-2 border-blue-500 pl-6">

    {/* Schooling */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <span className="absolute -left-[33px] top-2 w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></span>
      <h3 className="text-xl font-semibold text-purple-400">
        Schooling
      </h3>
      <p className="text-gray-300">
        Completed schooling with a strong academic foundation.
      </p>
    </motion.div>

    {/* Intermediate */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="relative"
    >
      <span className="absolute -left-[33px] top-2 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></span>
      <h3 className="text-xl font-semibold text-cyan-400">
        Intermediate
      </h3>
      <p className="text-gray-300">
        Focused on core academic subjects.
      </p>
    </motion.div>

    {/* B.Tech */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative"
    >
      <span className="absolute -left-[33px] top-2 w-4 h-4 rounded-full bg-gradient-to-r from-emerald-400 to-green-500"></span>
      <h3 className="text-xl font-semibold text-emerald-400">
        B.Tech (3rd Year – Pursuing)
      </h3>
      <p className="text-gray-300">
        Currently pursuing B.Tech and building skills through projects.
      </p>
    </motion.div>

  </div>
</motion.section>


      {/* SKILLS */}
<motion.section
  className="max-w-6xl mx-auto px-8 mt-32"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <h2 className="text-3xl font-bold text-center text-blue-400 mb-14">
    Skills
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

    {[
      { name: "Python", glow: "hover:shadow-yellow-500/50 text-yellow-400" },
      { name: "HTML", glow: "hover:shadow-orange-500/50 text-orange-400" },
      { name: "CSS", glow: "hover:shadow-blue-500/50 text-blue-400" },
      { name: "JavaScript", glow: "hover:shadow-pink-300/50 text-pink-300" },
      { name: "Machine Learning", glow: "hover:shadow-green-500/50 text-green-400" },
      { name: "NLP", glow: "hover:shadow-purple-500/50 text-purple-400" },
    ].map((skill) => (
      <motion.div
        key={skill.name}
        whileHover={{ scale: 1.07 }}
        className={`bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center shadow-lg transition ${skill.glow}`}
      >
        <h3 className="text-xl font-semibold">
          {skill.name}
        </h3>
      </motion.div>
    ))}

  </div>
</motion.section>

      {/* PROJECTS */}
<motion.section
  className="max-w-6xl mx-auto px-8 mt-32"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <h2 className="text-3xl font-bold text-center text-blue-400 mb-16">
    Projects
  </h2>

  <div className="space-y-24">

    {/* PROJECT 1 */}
    <motion.div
      whileHover={{ rotateX: 6, rotateY: -6, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="grid md:grid-cols-2 gap-10 items-center"
    >
      <Image
        src="/project1.jpg"
        alt="Steganography Project"
        width={500}
        height={300}
        className="rounded-2xl shadow-xl"
      />

      <div>
        <h3 className="text-2xl font-semibold text-blue-400 mb-4">
          Steganography-Based Secure Data Hiding
        </h3>

        <p className="text-gray-300 leading-relaxed">
          A cybersecurity solution that hides sensitive data inside images using
          steganographic techniques for secure communication.
        </p>

        {/* 🔽 ADD YOUR GITHUB LINK HERE */}
        <a
          href="https://github.com/RenukaRamani-02/AICTE-MY-PROJECT"
          target="_blank"
          className="inline-block mt-5 px-5 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition font-medium"
        >
          View on GitHub →
        </a>
      </div>
    </motion.div>

    {/* PROJECT 2 */}
    <motion.div
      whileHover={{ rotateX: 6, rotateY: 6, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="grid md:grid-cols-2 gap-10 items-center"
    >
      <div>
        <h3 className="text-2xl font-semibold text-green-400 mb-4">
          Image Encryption System
        </h3>

        <p className="text-gray-300 leading-relaxed">
          An image encryption and decryption system to protect visual data.
        </p>

        {/* 🔽 ADD YOUR GITHUB LINK HERE */}
        <a
          href="https://github.com/RenukaRamani-02/image-encryptor"
          target="_blank"
          className="inline-block mt-5 px-5 py-2 rounded-lg bg-green-500 hover:bg-green-600 transition font-medium"
        >
          View on GitHub →
        </a>
      </div>

      <Image
        src="/project2.jpg"
        alt="Image Encryption"
        width={500}
        height={300}
        className="rounded-2xl shadow-xl"
      />
    </motion.div>

    {/* PROJECT 3 */}
    <motion.div
      whileHover={{ rotateX: 6, rotateY: -6, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="grid md:grid-cols-2 gap-10 items-center"
    >
      <Image
        src="/project3.jpg"
        alt="Accent Detective"
        width={500}
        height={300}
        className="rounded-2xl shadow-xl"
      />

      <div>
        <h3 className="text-2xl font-semibold text-purple-400 mb-4">
          Accent Detective (NLP Project)
        </h3>

        <p className="text-gray-300 leading-relaxed">
          An AI-powered accent detection system using speech processing.
        </p>

        {/* 🔽 ADD YOUR GITHUB LINK HERE */}
        <a
          href="https://github.com/RenukaRamani-02/Accent_Detector"
          target="_blank"
          className="inline-block mt-5 px-5 py-2 rounded-lg bg-purple-500 hover:bg-purple-600 transition font-medium"
        >
          View on GitHub →
        </a>
      </div>
    </motion.div>

    {/* PROJECT 4 */}
    <motion.div
      whileHover={{ rotateX: 6, rotateY: 6, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="grid md:grid-cols-2 gap-10 items-center"
    >
      <div>
        <h3 className="text-2xl font-semibold text-pink-400 mb-4">
          Power BI Data Analytics Project
        </h3>

        <p className="text-gray-300 leading-relaxed">
          Interactive dashboards built using Power BI.
        </p>

        {/* 🔽 ADD YOUR GITHUB LINK HERE */}
        <a
          href="https://github.com/"
          target="_blank"
          className="inline-block mt-5 px-5 py-2 rounded-lg bg-pink-500 hover:bg-pink-600 transition font-medium"
        >
          View on GitHub →
        </a>
      </div>

      <Image
        src="/project4.jpg"
        alt="Power BI Project"
        width={500}
        height={300}
        className="rounded-2xl shadow-xl"
      />
    </motion.div>

  </div>
</motion.section>
{/* CERTIFICATIONS */}
<motion.section
  className="max-w-6xl mx-auto px-8 mt-32"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <h2 className="text-3xl font-bold text-center text-blue-400 mb-14">
    Certifications
  </h2>

  <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">

    {[
      "/certificates/cert1.png",
      "/certificates/cert2.png",
      "/certificates/cert3.png",
      "/certificates/cert4.png",
      "/certificates/cert5.png",
      "/certificates/cert6.png",
      "/certificates/cert7.png",
      "/certificates/cert8.png",
    ].map((src, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 180 }}
        className="rounded-2xl overflow-hidden
        bg-white/10 border border-white/20 backdrop-blur-xl
        shadow-lg hover:shadow-blue-500/40"
      >
        <Image
          src={src}
          alt={`Certificate ${index + 1}`}
          width={400}
          height={300}
          className="object-cover w-full h-full"
        />
      </motion.div>
    ))}

  </div>
</motion.section>

{/* CONTACT */}
<motion.section
  className="relative max-w-4xl mx-auto px-8 mt-32 mb-32 text-center"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9 }}
>
  {/* Aurora glow */}
  <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-teal-500/20 blur-3xl"></div>

  <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
    Contact Me
  </h2>

  <p className="text-gray-300 mb-10 text-lg">
    Feel free to reach out for opportunities, collaborations, or queries.
  </p>

  <div className="space-y-4 text-lg">
    <p>
      📧 <span className="text-cyan-400">renukarenu7054@gmail.com</span>
    </p>
    <p>
      📞 <span className="text-purple-400">+91 8019446920</span>
    </p>
  </div>
</motion.section>
{/* FOOTER */}
<footer className="mt-32 py-10 text-center border-t border-white/10">
  <p className="text-gray-400 mb-6">
    © {new Date().getFullYear()} BEERA RENUKA RAMANI
  </p>

  <div className="flex justify-center gap-8">

    {/* GitHub */}
    <a
      href="https://github.com/RenukaRamani-02"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-110 transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="currentColor"
        className="text-white hover:text-purple-400 transition"
        viewBox="0 0 24 24"
      >
        <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.44 7.86 10.98.58.1.79-.25.79-.56v-2.1c-3.2.7-3.87-1.55-3.87-1.55-.52-1.33-1.27-1.68-1.27-1.68-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.18-3.11-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.14 1.19a10.9 10.9 0 0 1 5.72 0c2.18-1.5 3.14-1.19 3.14-1.19.62 1.59.23 2.76.11 3.05.73.81 1.18 1.85 1.18 3.11 0 4.43-2.69 5.4-5.25 5.69.41.35.77 1.04.77 2.1v3.12c0 .31.21.66.8.55 4.56-1.54 7.84-5.87 7.84-10.98C23.5 5.74 18.27.5 12 .5z"/>
      </svg>
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/renuka-ramani-beera-945a61295/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-110 transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="currentColor"
        className="text-white hover:text-blue-400 transition"
        viewBox="0 0 24 24"
      >
        <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.06 20.45H3.56V9h3.5v11.45zM5.31 7.43c-1.12 0-2.03-.91-2.03-2.03 0-1.12.91-2.03 2.03-2.03 1.12 0 2.03.91 2.03 2.03 0 1.12-.91 2.03-2.03 2.03zM20.45 20.45h-3.5v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66h-3.5V9h3.36v1.56h.05c.47-.88 1.61-1.8 3.31-1.8 3.54 0 4.2 2.33 4.2 5.36v6.33z"/>
      </svg>
    </a>

  </div>
</footer>





    </main>
  );
}
