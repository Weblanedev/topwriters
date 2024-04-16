export const genres = [
  {
    id: 1,
    name: "Wifi Installation",
  },
  {
    id: 2,
    name: "Wiring Solutions",
  },
  {
    id: 3,
    name: "Installation Services",
  },
];

export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  img: string;
  price: string;
  summary: string;
}

export const books = [
  {
    id: 1,
    title:
      "Basic WiFi Installation Package",
    author: "Chris Guillebeau",
    genre: "Wifi Installation",
    img: "https://th.bing.com/th/id/OIP.G5nMoc6FRCel4rW3Kbl8bgHaE8?rs=1&pid=ImgDetMain",
    price: "$200",
    summary:
      "Includes installation of WiFi router and up to 2 access points",
  },
  {
    id: 1,
    title:
      "Premium WiFi Installation Package",
    author: "Chris Guillebeau",
    genre: "Wifi Installation",
    img: "https://th.bing.com/th/id/OIP.G5nMoc6FRCel4rW3Kbl8bgHaE8?rs=1&pid=ImgDetMain",
    price: "$500",
    summary:
      "Includes installation of WiFi router and up to 4 access points",
  },
  {
    id: 2,
    title: "Standard Structured Cabling Installation",
    author: "Howard C. Warren",
    genre: "Wiring Solutions",
    img: "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "$325",
    summary:
      "Installation of structured cabling system (Ethernet, fiber optic, or coaxial)",
  },
  {
    id: 4,
    title:
      "Standard Structured Installation",
    author: "Sandeep Madamanchi",
    genre: "Installation Services",
    img: "https://images.pexels.com/photos/4339335/pexels-photo-4339335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "$245",
    summary:
      "Follow the journey of an IT manager at Counterflow Technologies Limited as he implements DevOps practices to transform the company's infrastructure, driving efficiency and success.",
  },
];


export const blog = [
  {
      id: 1,
      href: "/blog/one",
      image: "https://3back.com/app/uploads/2017/07/Team-scaled.jpg",
      text: "Demystifying DevOps: Streamlining IT Operations for Efficiency",
      keywords: ["Devops", "IT", "Collaboration"]
  },
  {
      id: 2,
      href: "/blog/two",
      image: "https://static.vecteezy.com/system/resources/previews/006/946/284/original/a-logo-image-of-a-shield-with-a-lock-in-the-middle-of-it-symbolizing-protection-and-security-for-digital-or-technology-related-company-icon-free-vector.jpg",
      text: "Cybersecurity Best Practices: Protecting Your Business in a Digital Age",
      keywords: ["Threat Detection", "Cybersecurity ", "Compliance"]
  },
  {
      id: 3,
      href: "/blog/three",
      image: "https://th.bing.com/th/id/OIP.WOYd9Fcl0tOvAUYd9FSLWQHaFB?rs=1&pid=ImgDetMain",
      text: "The Future of Cloud Computing: Leveraging Cloud Solutions for Business Success",
      keywords: ["Cloud Computing", "Cloud Migration", "Flexibility"]
  },
]

export const Faqs = [
  {
    id: 1,
    question: "What types of installation and wiring services does Cointrip offer?",
    answer: "Cointrip specializes in a wide range of installation and wiring services, including professional installation of networking equipment, servers, workstations, structured cabling systems (Ethernet, fiber optic, coaxial), WiFi installation, and more."

  },
  {
    id: 2,
    question: "How does Cointrip ensure the reliability and performance of its installation and wiring solutions?",
    answer: "Cointrip employs expert technicians with extensive experience in IT infrastructure installation and wiring. We adhere to industry best practices and use high-quality materials and equipment to ensure reliability, performance, and longevity of our solutions."

  },
  {
    id: 3,
    question: "Can Cointrip assist with WiFi installation and optimization?",
    answer: "Yes, Cointrip offers comprehensive WiFi installation services, including design, deployment, and optimization of wireless networks. Our experts handle everything from access point installation to configuration and troubleshooting, ensuring seamless connectivity across indoor and outdoor environments."

  },
  {
    id: 4,
    question: "What industries does Cointrip serve with its installation and wiring services?",
    answer: "Cointrip caters to a diverse range of industries, including but not limited to, businesses, educational institutions, healthcare facilities, government agencies, retail establishments, and residential properties."

  },
]

export const Services = [
  {
      Title: "Installation Services",
      SubText: "Professional installation of networking equipment, servers, workstations, and other IT infrastructure components to ensure optimal performance and reliability.",
      img: "https://th.bing.com/th/id/R.fc983b799d84f709fac68fd101dd205d?rik=8Ve0vlQ7c2IZnQ&pid=ImgRaw&r=0&sres=1&sresct=1"

  },
  {
      Title: "WiFi Installation:",
      SubText: "Expert design and installation of structured cabling systems, including Ethernet, fiber optic, and coaxial cables, to support high-speed data transfer and communication networks.",
      img: "https://th.bing.com/th/id/R.5467691f1ddbdf7302d9a8d5b17f8ba0?rik=5nb1Oxe4IcrQTQ&pid=ImgRaw&r=0"

  },
  {
      Title: "Wiring Solutions",
      SubText: "Design, deployment, and optimization of wireless networks, including access point installation, configuration, and troubleshooting, to provide seamless connectivity across indoor and outdoor environments",
      img: "https://th.bing.com/th/id/R.b3a10fcbe98539aabe843b49bc0f27ba?rik=GDr%2bXFfRy8s0bQ&pid=ImgRaw&r=0"

  }
]