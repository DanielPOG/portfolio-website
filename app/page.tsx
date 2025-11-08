"use client"

import { useState, useEffect } from "react"
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap, ChevronRight, Sparkles } from "lucide-react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; vx: number; vy: number }>>([])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const particleArray = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
    }))
    setParticles(particleArray)
  }, [])

  const projects = [
    {
      title: "SGC",
      description: "Sistema de gestión de cargos SENA para optimizar el seguimiento de los usuarios de planta y una mejora para recursos humanos.",
      tech: ["Django", "Django Rest Framework", "PostgreSQL", "Tailwind", "CSS"],
      link: "https://github.com/DanielPOG/SGC",
      icon: "📚",
    },
    {
      title: "GapLy",
      description: "Aplicacion de Reducción de brecha laboral en colombia mediante herramientas tecnologicas con IA (colaborador).",
      tech: ["React", "Next.js", "FastAPI","PostgreSQL", "Tailwind"],
      link: "https://github.com/xFeDEV/gaply",
      icon: "🤖",
    },
    {
      title: "Openix",
      description: "Control de entrada y salida de los usuarios SENA mediante pantallas con codigo QR.",
      tech: ["JavaScript", "Django", "MySQL", "Bootstrap"],
      link: "https://github.com/G1lber/Proyecto-ControldeEntrada",
      icon: "🚪",
    },
    {
      title: "Carnetizacion Digital",
      description: "Carnetiza a los usuarios SENA mediante un sistema digital.",
      tech: [ "Django","MySQL","JavaScript", "Bootstrap"],
      link: "https://github.com/DanielPOG/Carnetizacionv3",
      icon: "🆔",
    },
  ]

  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap", "jQuery", "Framer Motion"],
    },
    { category: "Backend", items: ["Node.js", "Express", "Python", "Django", "FastAPI", "Flask", "PHP"] },
    {
      category: "Bases de Datos",
      items: ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "Firebase", "HeidiSQL", "MySQL Workbench"],
    },
    { category: "Herramientas & Cloud", items: ["Git", "Docker", "Azure", "VS Code", "Tkinter", "A2A", "MCP", "N8N"] },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-[#1a0f0a]" />

        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/30 to-secondary/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tl from-accent/25 to-primary/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 right-10 w-72 h-72 bg-gradient-to-bl from-secondary/20 to-accent/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-background/30 border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent font-black">
                DEV
              </span>
            </div>

            <div className="hidden md:flex gap-8">
              {["Inicio", "Sobre mí", "Proyectos", "Contacto"].map((item, idx) => (
                <a
                  key={idx}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            <button className="md:hidden text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 animate-fadeInUp">
              {["Inicio", "Sobre mí", "Proyectos", "Contacto"].map((item, idx) => (
                <a
                  key={idx}
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-2 text-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      <section id="inicio" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="inline-block animate-fadeInUp">
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/20 border-2 border-primary/50 rounded-full backdrop-blur-sm hover:border-primary transition-all duration-300">
                  <Sparkles size={16} className="text-primary animate-pulse" />
                  <span className="text-sm text-primary font-bold">Bienvenido a mi portafolio</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-6xl md:text-7xl font-black leading-tight">
                  <div className="inline-block">
                    <span className="text-foreground animate-textFallGlow" style={{ animationDelay: "0.1s" }}>
                      Hola,
                    </span>
                  </div>
                </div>
                <div className="text-6xl md:text-7xl font-black leading-tight">
                  <span
                    className="inline-block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-textFallGlow"
                    style={{ animationDelay: "0.2s" }}
                  >
                    Soy Desarrollador
                  </span>
                </div>
                <div className="text-6xl md:text-7xl font-black leading-tight">
                  <span className="inline-block text-accent animate-textFallGlow" style={{ animationDelay: "0.3s" }}>
                    Innovador
                  </span>
                </div>
              </div>

              <p
                className="text-lg text-foreground/80 leading-relaxed max-w-xl font-medium animate-fadeInUp"
                style={{ animationDelay: "0.4s" }}
              >
                Soy Desarrollador de Software especializado en crear soluciones web y de escritorio robustas, escalables
                e innovadoras. Combino expertise en frontend moderno, backends poderosos y bases de datos para
                transformar ideas en productos digitales que generan impacto.
              </p>

              <div className="flex flex-wrap gap-4 pt-6 animate-fadeInUp" style={{ animationDelay: "0.5s" }}>
                {/* Enlace a GitHub - abre en nueva pestaña */}
                <a
                  href="https://github.com/DanielPOG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-bold text-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex items-center gap-2 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative">Ver mi trabajo</span>
                  <ChevronRight size={24} className="relative group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Enlace para descargar el CV - requiere que el PDF esté en /public */}
                <a
                  href="/CVHarvardPRO.pdf"
                  download
                  className="px-8 py-4 border-3 border-primary text-primary rounded-xl font-bold text-lg hover:bg-primary/20 hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Descargar CV
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-8 animate-fadeInUp" style={{ animationDelay: "0.6s" }}>
                {[
                  { icon: Github, link: "https://github.com/DanielPOG", label: "Github" },
                  { icon: Linkedin, link: "https://www.linkedin.com/in/daniel-caicedo-5b6140362/", label: "LinkedIn" },
                  { icon: Mail, link: "mailto:santiagocaicedo140@gmail.com", label: "Email" },
                ].map((social, idx) => (
                  <a target="_blank" rel="noopener noreferrer"
                    key={idx}
                    href={social.link}
                    className="w-14 h-14 rounded-full border-3 border-primary text-primary hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-primary-foreground hover:scale-125 hover:shadow-2xl transition-all duration-300 flex items-center justify-center group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                    <social.icon size={24} className="relative z-10" />
                  </a>
                ))}
              </div>
            </div>

            <div className="relative h-96 md:h-full flex items-center justify-center">
              <div className="animate-fadeInRight" style={{ animationDelay: "0.3s" }}>
                <div className="absolute -inset-4 bg-gradient-to-br from-primary via-accent to-secondary rounded-3xl blur-2xl opacity-60 animate-glow" />
                <div className="relative rounded-3xl overflow-hidden border-4 border-primary/80 shadow-2xl group w-80 h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 z-10 opacity-30 group-hover:opacity-0 transition-opacity duration-500" />
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC_0069%20copia-dtcvEjNNfZwkxnRRYzwHkcefk5dVsa.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 relative z-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre mí" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-16 animate-fadeInUp">
            Sobre <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">mí</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Clean Code",
                desc: "Escribo código limpio, mantenible y escalable siguiendo best practices.",
              },
              {
                icon: Palette,
                title: "Diseño Moderno",
                desc: "Creo interfaces atractivas y funcionales con las últimas tecnologías.",
              },
              { icon: Zap, title: "Performance", desc: "Optimizo cada proyecto para máxima velocidad y eficiencia." },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden p-8 rounded-2xl border-2 border-primary/40 bg-card/40 backdrop-blur hover:border-primary hover:shadow-2xl transition-all duration-500 animate-fadeInUp"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <item.icon className="w-16 h-16 text-primary mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 group-hover:drop-shadow-lg" />
                  <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-foreground/75 group-hover:text-foreground transition-colors duration-300 font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-16 animate-fadeInUp">
            Mis <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Skills</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="animate-fadeInUp" style={{ animationDelay: `${idx * 0.15}s` }}>
                <h3 className="text-2xl font-black text-primary mb-8 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {skillGroup.items.map((skill, sidx) => (
                    <span
                      key={sidx}
                      className="px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary/50 text-primary rounded-full text-sm font-bold hover:border-primary hover:shadow-xl hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-20 animate-fadeInUp">
            Proyectos{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Destacados</span>
          </h2>

          <div className="space-y-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group relative animate-slideInHorizontal"
                style={{ animationDelay: `${idx * 0.15}s` }}
                onMouseEnter={() => setHoveredProject(idx)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden rounded-2xl border-2 border-primary/40 bg-gradient-to-br from-card/60 to-card/20 backdrop-blur-md hover:border-primary/80 transition-all duration-500 group-hover:shadow-2xl">
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
                    {/* Project Icon/Visual */}
                    <div className="w-full md:w-2/5 flex justify-center">
                      <div className="text-8xl md:text-9xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                        {project.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-3/5 space-y-4">
                      <h3 className="text-3xl md:text-4xl font-black text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-foreground/75 group-hover:text-foreground transition-colors duration-300 text-lg leading-relaxed font-medium">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-3 pt-4">
                        {project.tech.map((tech, tidx) => (
                          <span
                            key={tidx}
                            className="px-4 py-2 bg-gradient-to-r from-primary/30 to-accent/30 text-primary text-xs font-bold rounded-full border-2 border-primary/50 group-hover:border-primary group-hover:shadow-lg transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <a
                        href={project.link}
                        className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:gap-4 transition-all duration-300 mt-6 group/link"
                      >
                        Ver proyecto
                        <ExternalLink
                          size={24}
                          className="group-hover/link:rotate-45 transition-transform duration-300"
                        />
                      </a>
                    </div>
                  </div>

                  <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-accent/0 animate-shimmer" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center animate-fadeInUp">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            ¿Listo para{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">colaborar?</span>
          </h2>
          <p className="text-xl text-foreground/75 mb-12 leading-relaxed font-medium">
            Tengo disponibilidad para nuevos proyectos. Contáctame para discutir cómo puedo ayudarte a llevar tu idea al
            siguiente nivel.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:santiagocaicedo140@gmail.com"
              className="group px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-bold text-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <Mail size={24} />
              Envíame un email
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+573147743402"
              className="px-8 py-4 border-3 border-primary text-primary rounded-xl font-bold text-lg hover:bg-primary/20 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Agenda una llamada
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-primary/30 py-12 px-4 text-center text-foreground/60">
        <div className="max-w-7xl mx-auto">
          <p className="mb-6 font-medium">© 2025 Mi Portafolio. Todos los derechos reservados.</p>
          <div className="flex justify-center gap-6">
            {[
              { icon: Github, link: "https://github.com/DanielPOG" },
              { icon: Linkedin, link: "https://www.linkedin.com/in/daniel-caicedo-5b6140362" },
              { icon: Mail, link: "mailto:santiagocaicedo140@gmail.com" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary hover:scale-125 transition-all duration-300"
              >
                <social.icon size={28} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
