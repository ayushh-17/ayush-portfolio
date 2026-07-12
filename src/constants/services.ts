export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Java Full Stack Development",
    description:
      "Building scalable full-stack web applications using Java, Spring Boot and React.",
    icon: "💻",
  },
  {
    id: 2,
    title: "Spring Boot Backend Development",
    description:
      "Developing secure backend systems with Spring Boot and REST APIs.",
    icon: "⚙️",
  },
  {
    id: 3,
    title: "React Frontend Development",
    description:
      "Creating responsive and modern user interfaces with React.",
    icon: "⚛️",
  },
  {
    id: 4,
    title: "REST API Development",
    description:
      "Designing clean and production-ready REST APIs.",
    icon: "🔗",
  },
  {
    id: 5,
    title: "Database Design & Integration",
    description:
      "Efficient MySQL database design and integration.",
    icon: "🗄️",
  },
  {
    id: 6,
    title: "AI-Powered Web Applications",
    description:
      "Integrating AI features into modern web applications.",
    icon: "🤖",
  },
  {
    id: 7,
    title: "Bug Fixing & Code Optimization",
    description:
      "Debugging applications and optimizing performance.",
    icon: "🐞",
  },
];