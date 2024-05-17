export const genres = [
  {
    id: 1,
    name: "Educational Resources",
  },
  {
    id: 2,
    name: "Writing Services",
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
      "Toplinewriters Writing Guide and Workbook",
    author: "Chris Guillebeau",
    genre: "Educational Resources",
    img: "https://images.pexels.com/photos/3928938/pexels-photo-3928938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "$45",
    summary:
      "Dive into our meticulously crafted Writing Guide and Workbook",
  },
  {
    id: 1,
    title:
      "Toplinewriters Writing Course",
    author: "Chris Guillebeau",
    genre: "Educational Resources",
    img: "https://images.pexels.com/photos/4792729/pexels-photo-4792729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "$120",
    summary:
      "Elevate your craft further with our Online Writing Courses.",
  },
  {
    id: 1,
    title: "Toplinewriters Writing Software",
    author: "Howard C. Warren",
    genre: "Educational Resources",
    img: "https://images.pexels.com/photos/5926380/pexels-photo-5926380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "$155",
    summary:
      "Empower your writing journey with our user-friendly Writing Software and Tools, offering advanced features for brainstorming, editing, and perfecting your prose",
  },
  {
    id: 2,
    title:
      "Editing and Proofreading Services",
    author: "Sandeep Madamanchi",
    genre: "Writing Services",
    img: "https://images.pexels.com/photos/6248718/pexels-photo-6248718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "$220",
    summary:
      "Let our team of experienced writers breathe life into your ideas with our Custom Writing Services.",
  },
  {
    id: 2,
    title:
      "Book Publishing Services",
    author: "Sandeep Madamanchi",
    genre: "Writing Services",
    img: "https://images.pexels.com/photos/20092855/pexels-photo-20092855/free-photo-of-open-book-by-flowers-and-cup-on-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "$345",
    summary:
      "Ready to share your story with the world? Explore our Book Publishing Services, where we guide you through every step of the publishing process.",
  },
  {
    id: 3,
    title:
      "Standard Structured Installation",
    author: "Sandeep Madamanchi",
    genre: "Merchandise",
    img: "https://images.pexels.com/photos/4339335/pexels-photo-4339335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "$245",
    summary:
      "Follow the journey of an IT manager at Cointrip Technologies Limited as he implements DevOps practices to transform the company's infrastructure, driving efficiency and success.",
  },
];


export const blog = [
  {
      id: 1,
      href: "/blog/one",
      image: "https://th.bing.com/th/id/OIP.F18Xk28efwJyyy0BXzORFwHaE8?rs=1&pid=ImgDetMain",
      text: "CoinTrip Launches Groundbreaking Wi-Fi Optimization Solution",
      keywords: ["Optimization", "IT", "Collaboration"]
  },
  {
      id: 2,
      href: "/blog/two",
      image: "https://www.homereps.london/wp-content/uploads/2021/12/wifi-setup-inbuilding-min-scaled.jpeg",
      text: "CoinTrip Partners with Global Tech Firm to Expand AI-driven Solutions Portfolio",
      keywords: ["AI-driven", "Cybersecurity ", "Compliance"]
  },
  {
      id: 3,
      href: "/blog/three",
      image: "https://www.openpower.co.uk/images/headers/wificonfig.jpg",
      text: "CoinTrip Unveils State-of-the-Art Cybersecurity Platform to Safeguard Businesses Against Emerging Threats",
      keywords: ["Cloud Computing", "Cloud Migration", "Flexibility"]
  },
]

export const Faqs = [
  {
    id: 1,
    question: "What is Toplinewriters?",
    answer: "Toplinewriters is a platform dedicated to supporting writers of all levels. We offer a variety of resources, services, and community support to help writers hone their skills, express themselves effectively, and achieve their writing goals."

  },
  {
    id: 2,
    question: "Who can benefit from Toplinewriters?",
    answer: "Our platform is designed for writers of all levels, from beginners looking to improve their skills to seasoned professionals seeking advanced resources and services. Whether you're a novelist, blogger, student, freelancer, or business owner, Toplinewriters has something for you."

  },
  {
    id: 3,
    question: "Do you offer personalized writing assistance?",
    answer: "Yes, we offer personalized writing assistance through our professional editing, proofreading, and publishing services. Whether you need help with editing your manuscript, proofreading your article, or preparing your book for publication, our team of experts is here to assist you."

  },
  {
    id: 4,
    question: "How can I get involved with Toplinewriters?",
    answer: "There are many ways to get involved with Toplinewriters! You can explore our resources, enroll in online courses, take advantage of our services, join our writing community, or simply engage with us on social media. Whatever your interests may be, we welcome you to join us on your writing journey."

  },
]

export const Services = [
  {
      Title: "Comprehensive Resources",
      SubText: "From writing guides and online courses to writing software and tools, we provide a wide range of resources to help you enhance your writing skills and creativity.",
      img: "https://th.bing.com/th/id/R.fc983b799d84f709fac68fd101dd205d?rik=8Ve0vlQ7c2IZnQ&pid=ImgRaw&r=0&sres=1&sresct=1"

  },
  {
      Title: "Expert Guidance",
      SubText: "Learn from experienced writers and industry experts through our online courses, workshops, and writing retreats. Get personalized feedback and advice to take your writing to the next level.",
      img: "https://th.bing.com/th/id/R.5467691f1ddbdf7302d9a8d5b17f8ba0?rik=5nb1Oxe4IcrQTQ&pid=ImgRaw&r=0"

  },
  {
      Title: "Professional Services",
      SubText: "Need help with editing, proofreading, or publishing your work? Our team of professional editors, proofreaders, and publishing consultants is here to assist you every step of the way.",
      img: "https://th.bing.com/th/id/R.b3a10fcbe98539aabe843b49bc0f27ba?rik=GDr%2bXFfRy8s0bQ&pid=ImgRaw&r=0"

  },
  {
    Title: "Community Support",
    SubText: "Join our vibrant writing community to connect with fellow writers, share your work, and receive support and encouragement from like-minded individuals. Together, we'll celebrate successes, overcome challenges, and grow as writers.",
    img: "https://th.bing.com/th/id/R.b3a10fcbe98539aabe843b49bc0f27ba?rik=GDr%2bXFfRy8s0bQ&pid=ImgRaw&r=0"

}
]