export const genres = [
  {
    id: 1,
    name: "Educational Resources",
  },
  {
    id: 2,
    name: "Writing Services",
  },
  {
    id: 3,
    name: "Writing Kits",
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
    id: 1,
    title: "Toplinewriters Style Guide",
    author: "Howard C. Warren",
    genre: "Educational Resources",
    img: "https://images.pexels.com/photos/1181681/pexels-photo-1181681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "$125",
    summary:
      "We provide specialized guides on different writing styles, such as APA, MLA, Chicago, and AP, to help writers format their work correctly.",
  },
  {
    id: 1,
    title: "Toplinewriters Writing Exercise Books",
    author: "Howard C. Warren",
    genre: "Educational Resources",
    img: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=300",
    price: "$45",
    summary:
      "We offer books filled with exercises designed to improve various aspects of writing, such as dialogue, character development, plot structuring, and descriptive language.",
  },
  {
    id: 1,
    title: "Toplinewriters Writing Templates",
    author: "Howard C. Warren",
    genre: "Educational Resources",
    img: "https://images.pexels.com/photos/4050287/pexels-photo-4050287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "$185",
    summary:
      "We provide downloadable templates for various writing projects, including novel outlines, short story frameworks, and research paper structures.",
  },
  {
    id: 1,
    title: "Toplinewriters Writing Worksheets",
    author: "Howard C. Warren",
    genre: "Educational Resources",
    img: "https://images.pexels.com/photos/783737/pexels-photo-783737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "$115",
    summary:
      "We provide downloadable worksheets for various writing projects, including novel outlines, short story frameworks, and research paper structures.",
  },
    {
    id: 1,
    title: "Toplinewriters Productivity Course",
    author: "Howard C. Warren",
    genre: "Educational Resources",
    img: "https://images.pexels.com/photos/955404/pexels-photo-955404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "$205",
    summary:
      "We have resources on maintaining motivation, overcoming procrastination, and boosting writing productivity.",
  },
  {
    id: 1,
    title: "Toplinewriters Creativity Coaching",
    author: "Howard C. Warren",
    genre: "Educational Resources",
    img: "https://images.pexels.com/photos/3786763/pexels-photo-3786763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "$325",
    summary:
      "We offer coaching sessions that focus on developing a writer’s mindset, overcoming creative blocks, and nurturing creativity.",
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
    id: 2,
    title:
      "Writing Prompt Collections",
    author: "Sandeep Madamanchi",
    genre: "Writing Services",
    img: "https://images.pexels.com/photos/2682452/pexels-photo-2682452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "$285",
    summary:
      "We Offer books or digital downloads of curated writing prompts to inspire creativity and help writers overcome writer's block.",
  },
  {
    id: 2,
    title:
      "Self-Publishing Guide",
    author: "Sandeep Madamanchi",
    genre: "Writing Services",
    img: "https://images.pexels.com/photos/606541/pexels-photo-606541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "$300",
    summary:
      "We develop detailed guides to navigate the self-publishing process, covering topics like ISBNs, cover design, and distribution options.",
  },
  {
    id: 2,
    title:
      "Ghostwriting Services",
    author: "Sandeep Madamanchi",
    genre: "Writing Services",
    img: "https://images.pexels.com/photos/3278757/pexels-photo-3278757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "$800",
    summary:
      "We offer professional ghostwriting services for clients needing books, articles, or other content written on their behalf.",
  },
  {
    id: 2,
    title:
      "Translation Services",
    author: "Sandeep Madamanchi",
    genre: "Writing Services",
    img: "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "$225",
    summary:
      "We provide translation services for writers looking to reach a global audience by having their works translated into different languages.",
  },
  {
    id: 2,
    title:
      "Query Letter and Synopsis Services",
    author: "Sandeep Madamanchi",
    genre: "Writing Services",
    img: "https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "$450",
    summary:
      "Help writers craft compelling query letters and synopses to submit to literary agents and publishers.",
  },
  {
    id: 2,
    title:
      "Marketing and Promotion Packages",
    author: "Sandeep Madamanchi",
    genre: "Writing Services",
    img: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "$630",
    summary:
      "Offer comprehensive marketing and promotion services for self-published authors, including social media campaigns, book trailers, and press releases.",
  },
  {
    id: 2,
    title:
      "Research Assistance",
    author: "Sandeep Madamanchi",
    genre: "Writing Services",
    img: "https://images.pexels.com/photos/1181435/pexels-photo-1181435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "$525",
    summary:
      "We Offer services to assist writers in gathering and organizing research materials for their writing projects.",
  },
  {
    id: 3,
    title:
      "Writer's Inspiration Kits",
    author: "Sandeep Madamanchi",
    genre: "Writing Kits",
    img: "https://images.pexels.com/photos/6044286/pexels-photo-6044286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "$45",
    summary:
      "A Curated kits with items like a beautiful journal, a high-quality pen, inspirational quotes, and writing prompts to spark creativity.",
  },
  {
    id: 3,
    title:
      "Novel-Writing Kits",
    author: "Sandeep Madamanchi",
    genre: "Writing Kits",
    img: "https://images.pexels.com/photos/1766604/pexels-photo-1766604.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "$72",
    summary:
      "We Offer kits specifically designed for novelists, including plotting worksheets, character development templates, and timeline trackers.",
  },
  {
    id: 3,
    title:
      "Freelance Writing Starter Kits",
    author: "Sandeep Madamanchi",
    genre: "Writing Kits",
    img: "https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "$55",
    summary:
      "We Provide kits for aspiring freelance writers with contract templates, pitch examples, and client management tools.",
  },
  {
    id: 3,
    title:
      "Inspirational Posters and Prints",
    author: "Sandeep Madamanchi",
    genre: "Writing Kits",
    img: "https://images.pexels.com/photos/3747314/pexels-photo-3747314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "$35",
    summary:
      "We Provide kits for aspiring freelance writers with contract templates, pitch examples, and client management tools.",
  },
  {
    id: 3,
    title:
      "Writing-themed Stationery Sets",
    author: "Sandeep Madamanchi",
    genre: "Writing Kits",
    img: "https://images.pexels.com/photos/6368906/pexels-photo-6368906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "$40",
    summary:
      "We also Design posters and prints featuring motivational quotes and beautiful artwork to inspire writers in their creative spaces.",
  },
  {
    id: 3,
    title:
      "Customizable Journals",
    author: "Sandeep Madamanchi",
    genre: "Writing Kits",
    img: "https://images.pexels.com/photos/1018133/pexels-photo-1018133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "$20",
    summary:
      "We Offer personalized journals where writers can choose cover designs, add their names, or select custom quotes to be featured.",
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