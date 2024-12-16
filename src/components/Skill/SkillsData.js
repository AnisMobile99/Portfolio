import {
  FaReact,
  FaNodeJs,
  FaPhp,
  FaDocker,
  FaAws,
  FaCogs,
  FaPython,
} from "react-icons/fa";
import {
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiPostgresql,
  SiMysql,
  SiNestjs,
  SiMongodb,
  SiGraphql,
  SiElasticsearch,
  SiFirebase,
  SiRedux,
  SiElectron,
  SiDotnet,
  SiNextdotjs,
  SiAngular,
  SiSymfony,
  SiDjango,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiAdafruit,
  SiRaspberrypi,
  SiJenkins,
  SiPrometheus,
  SiGrafana,
  SiExpress,
  SiSocketdotio,
} from "react-icons/si";

import {
  FaCode,
  FaMobileAlt,
  FaDesktop,
  FaServer,
  FaCloud,
  FaDatabase,
  FaRobot,
  FaNetworkWired,
} from "react-icons/fa";

export const categoriesData = [
  { name: "All", icon: <FaCode /> },
  { name: "Web", icon: <FaCode /> },
  { name: "Mobile", icon: <FaMobileAlt /> },
  { name: "Desktop", icon: <FaDesktop /> },
  { name: "Backend", icon: <FaServer /> },
  { name: "BDD & Cloud", icon: <FaCloud /> },
  { name: "IOT & IA", icon: <FaRobot /> },
  { name: "DevOps", icon: <FaCogs /> },
];

export const skillsData = [
  // Web
  {
    name: "React.js",
    icon: <FaReact />,
    color: "text-blue-400",
    category: "Web",
  },
  {
    name: "Redux",
    icon: <SiRedux />,
    color: "text-purple-500",
    category: "Web",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    color: "text-black",
    category: "Web",
  },
  {
    name: "Angular",
    icon: <SiAngular />,
    color: "text-red-500",
    category: "Web",
  },
  { name: "HTML", icon: <FaCode />, color: "text-orange-500", category: "Web" },
  { name: "CSS", icon: <FaCode />, color: "text-blue-500", category: "Web" },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss />,
    color: "text-teal-400",
    category: "Web",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "text-blue-500",
    category: "Web",
  },
  { name: "AJAX", icon: <FaCode />, color: "text-gray-500", category: "Web" },

  // Mobile
  {
    name: "React Native",
    icon: <SiReact />,
    color: "text-blue-500",
    category: "Mobile",
  },
  {
    name: "Expo",
    icon: <FaMobileAlt />,
    color: "text-green-500",
    category: "Mobile",
  },

  // Desktop
  {
    name: "ElectronJS",
    icon: <SiElectron />,
    color: "text-blue-400",
    category: "Desktop",
  },
  {
    name: "ASP .NET",
    icon: <SiDotnet />,
    color: "text-purple-600",
    category: "Desktop",
  },
  {
    name: "WPF",
    icon: <FaCode />,
    color: "text-gray-600",
    category: "Desktop",
  },

  // Backend
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "text-green-500",
    category: "Backend",
  },
  {
    name: "Nest.js",
    icon: <SiNestjs />,
    color: "text-red-500",
    category: "Backend",
  },
  {
    name: "Symfony",
    icon: <SiSymfony />,
    color: "text-gray-500",
    category: "Backend",
  },
  {
    name: "PHP",
    icon: <FaPhp />,
    color: "text-indigo-600",
    category: "Backend",
  },
  {
    name: "Django",
    icon: <SiDjango />,
    color: "text-green-700",
    category: "Backend",
  },
  {
    name: "Python",
    icon: <FaPython />,
    color: "text-yellow-500",
    category: "Backend",
  },

  // API
  {
    name: "Express.js",
    icon: <SiExpress />,
    color: "text-gray-500",
    category: "API",
  },
  {
    name: "WebSocket",
    icon: <SiSocketdotio />,
    color: "text-gray-500",
    category: "API",
  },

  // BDD & Cloud
  {
    name: "MySQL",
    icon: <SiMysql />,
    color: "text-blue-600",
    category: "BDD & Cloud",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    color: "text-blue-400",
    category: "BDD & Cloud",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "text-green-400",
    category: "BDD & Cloud",
  },
  {
    name: "GraphQL",
    icon: <SiGraphql />,
    color: "text-pink-500",
    category: "BDD & Cloud",
  },
  {
    name: "Elasticsearch",
    icon: <SiElasticsearch />,
    color: "text-yellow-500",
    category: "BDD & Cloud",
  },
  {
    name: "Docker",
    icon: <FaDocker />,
    color: "text-blue-400",
    category: "BDD & Cloud",
  },
  {
    name: "AWS",
    icon: <FaAws />,
    color: "text-orange-400",
    category: "BDD & Cloud",
  },
  {
    name: "Firebase",
    icon: <SiFirebase />,
    color: "text-yellow-400",
    category: "BDD & Cloud",
  },

  // IOT & IA
  {
    name: "TensorFlow",
    icon: <SiTensorflow />,
    color: "text-yellow-500",
    category: "IOT & IA",
  },
  {
    name: "PyTorch",
    icon: <SiPytorch />,
    color: "text-red-500",
    category: "IOT & IA",
  },
  {
    name: "Scikit-learn",
    icon: <SiScikitlearn />,
    color: "text-blue-400",
    category: "IOT & IA",
  },
  {
    name: "Paho-MQTT",
    icon: <SiAdafruit />,
    color: "text-green-500",
    category: "IOT & IA",
  },
  {
    name: "Adafruit",
    icon: <SiAdafruit />,
    color: "text-purple-400",
    category: "IOT & IA",
  },
  {
    name: "RPi.GPIO",
    icon: <SiRaspberrypi />,
    color: "text-red-500",
    category: "IOT & IA",
  },

  // DevOps
  {
    name: "CI/CD Jenkins",
    icon: <SiJenkins />,
    color: "text-blue-600",
    category: "DevOps",
  },
  {
    name: "Grafana",
    icon: <SiGrafana />,
    color: "text-yellow-500",
    category: "DevOps",
  },
  {
    name: "Prometheus",
    icon: <SiPrometheus />,
    color: "text-red-500",
    category: "DevOps",
  },
];
