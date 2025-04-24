import React from 'react';
import './App.css';
import { FiMail, FiMapPin } from 'react-icons/fi';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

function App() {
  return (
    <>
      {/* Header */}
      <header className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white py-16 text-center shadow-lg">
        <h1 className="text-5xl sm:text-6xl font-extrabold">
          Julio David Cardona Meléndez
        </h1>
        <p className="text-xl sm:text-2xl mt-4 font-light">
          Backend & Full Stack Developer (Junior)
        </p>
        <p className="mt-4 text-lg">
          Tuluá, Valle del Cauca ·{' '}
          <a
            href="mailto:juliomelendez812@gmail.com"
            className="underline hover:text-green-300"
          >
            juliomelendez812@gmail.com
          </a>
        </p>
      </header>

      {/* Contact */}
      <section className="bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4 lg:px-16">
          <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800 dark:text-gray-200">
            Contact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="mailto:juliomelendez812@gmail.com"
              className="flex items-center justify-center gap-2 p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition"
            >
              <FiMail size={24} className="text-green-500" />
              <span className="text-lg text-gray-700 dark:text-gray-300">
                juliomelendez812@gmail.com
              </span>
            </a>
            <div className="flex items-center justify-center gap-2 p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
              <FiMapPin size={24} className="text-green-500" />
              <span className="text-lg text-gray-700 dark:text-gray-300">
                Tuluá, Valle del Cauca
              </span>
            </div>
            <a
              href="https://github.com/chronischer-zauderer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition"
            >
              <BsGithub size={24} className="text-green-500" />
              <span className="text-lg text-gray-700 dark:text-gray-300">
                GitHub
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/julio-cardona-1b2479243"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition"
            >
              <BsLinkedin size={24} className="text-green-500" />
              <span className="text-lg text-gray-700 dark:text-gray-300">
                LinkedIn
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Professional Profile */}
      <section className="bg-white dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4 lg:px-16">
          <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800 dark:text-gray-200">
            Professional Profile
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I am a software developer with experience in backend (Java, Spring Boot) and functional programming in Scala, complemented by skills in Python, C#, C++, system administration with Bash, containerization and orchestration (Docker, Kubernetes), and modern frontend development (React + Vite + TailwindCSS). I specialize in designing clean, scalable, and secure solutions, applying best practices in architecture, automated testing, and continuous deployment.
          </p>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4 lg:px-16">
          <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800 dark:text-gray-200">
            Technical Skills
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 space-y-2">
            <li>Languages: Java, Scala, Python, C#, C++, JavaScript, HTML, CSS, Bash</li>
            <li>Frameworks & Libraries: Spring Boot, Spring Security (JWT), React, TailwindCSS, JPA/Hibernate</li>
            <li>Databases: PostgreSQL</li>
            <li>DevOps: Docker, Kubernetes, Git, CI/CD (GitHub Actions / Bash scripts)</li>
            <li>Testing: JUnit, ScalaTest, TDD, Clean Code</li>
          </ul>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-white dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4 lg:px-16">
          <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800 dark:text-gray-200">
            Featured Projects
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 space-y-4">
            <li>
              <strong>E-commerce Platform (Java & Spring Boot):</strong> 
              Designed JPA entities (User, Order, Product, Inventory, Address, Review), secured REST APIs with JWT, persisted data in PostgreSQL, containerized with Docker, and deployed locally on Kubernetes. Automated build and migrations via Bash scripts.
            </li>
            <li>
              <strong>Functional Algorithms in Scala:</strong> 
              Implemented generic Insertion Sort and QuickSort with comparator, measured comparisons, and computed vector norms in parallel (2, 4, 8 threads). Wrote unit tests in ScalaTest.
            </li>
            <li>
              <strong>Scripting & Desktop Apps (Python, C#, C++):</strong>
              Automated data processing scripts in Python; built WinForms/WPF tools in C#; implemented high-performance data structures and algorithms in C++.
            </li>
            <li>
              <strong>Educational Frontend (React + Vite + TailwindCSS):</strong>
              Developed an interactive portfolio CV single-page app, mobile-first and responsive, with animated header and dark mode support.
            </li>
          </ul>
        </div>
      </section>

      {/* Continuous Learning */}
      <section className="bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4 lg:px-16">
          <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800 dark:text-gray-200">
            Continuous Learning
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 space-y-2">
            <li>Functional & Concurrent Programming in Scala – Universidad del Valle, April 2025</li>
            <li>React + Vite: Modern Interfaces – Udemy, April 2025</li>
            <li>Docker & Kubernetes: From Zero to Deployment – Universidad del Valle, March 2025</li>
            <li>Java & Spring Boot Development – Universidad del Valle, March 2023</li>
            <li>Self-taught Courses & Projects in Python, C# & C++ – 2023–2025</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="bg-white dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4 lg:px-16">
          <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800 dark:text-gray-200">
            Education
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 space-y-2">
            <li>
              <strong>Systems Engineering (In Progress):</strong> Universidad del Valle, Cali, Colombia (Feb 2021 – Present)
            </li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 py-6 text-center text-gray-500">
        © {new Date().getFullYear()} Julio David Cardona Meléndez
      </footer>
    </>
  );
}

export default App;
