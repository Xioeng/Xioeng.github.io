// Site-wide configuration
export const siteConfig = {
  // Site metadata
  name: "Jose's Blog",
  title: "Jose Fuentes",
  description: "A modern blog built with Astro",
  
  // Navigation
  navigation: {
    home: "Home",
    experience: "Experience",
    education: "Education",
    projects: "Projects",
    research: "Research",
    contact: "Contact",
  },
  
  // Hero Section
  hero: {
    prefix: "Hi, I'm",
    name: "Jose Fuentes",
    intro: "Ph.D. Candidate in Computer Science & Applied Mathematician\nSpecializing in Computer Vision, Deep Learning, and Autonomous Systems for the Physical World",
    avatar: "/image/20943608.jpeg",
    buttons: {
      viewPosts: "View Research",
      contactMe: "Get In Touch",
    },
    socialLinks: [
      { name: "LinkedIn", icon: "/svg/linkedin.svg", url: "https://linkedin.com/in/jose-fuentes-9604" },
      { name: "GitHub", icon: "/svg/github.svg", url: "https://github.com/Xioeng" },
      { name: "Email", icon: "/svg/email.svg", url: "mailto:jfuen099@fiu.edu" },
      { name: "Google Scholar", icon: "/svg/google-scholar.svg", url: "https://scholar.google.com/citations?user=w8-ptKYAAAAJ&hl=pt-BR&authuser=1" },
    ],
  },
  
  // About Section
  about: {
    title: "About Me",
    text: "I am a Ph.D. Candidate in Computer Science and Applied Mathematician at Florida International University, specializing in Computer Vision and Deep Learning for the Physical World. My research focuses on building perception systems that are mathematically rigorous, physically consistent, and deployment-ready. I develop frameworks leveraging Vision-Language Models, geometric vision, and probabilistic modeling for autonomous systems and environmental mapping. My work has been recognized with an ICRA 2025 Best Paper nomination and deployed on edge hardware including NVIDIA Jetson and Raspberry Pi platforms.",
  },
  
  // Contact Page
  contact: {
    title: "Let's Connect",
    subtitle: "I'm always interested in discussing research, collaboration opportunities, and innovative projects in computer vision and autonomous systems.",
    info: {
      email: {
        label: "Email",
        value: "jfuen099@fiu.edu",
        link: "mailto:jfuen099@fiu.edu",
      },
      phone: {
        label: "University",
        value: "Florida International University",
        link: "#",
      },
      location: {
        label: "Location",
        value: "Miami, Florida",
      },
    },
    followMe: {
      title: "Follow My Work",
      links: [
        { name: "LinkedIn", icon: "/svg/linkedin.svg", url: "https://linkedin.com/in/jose-fuentes-9604" },
        { name: "GitHub", icon: "/svg/github.svg", url: "https://github.com/Xioeng" },
      ],
    },
    footerText: [
      "Research focus: Computer Vision, Deep Learning, Autonomous Systems, and Physics-Informed AI",
      "Always excited to collaborate on projects at the intersection of perception and robotics.",
    ],
    messageButton: "💬 Start a Conversation",
  },
  
  // Footer
  footer: {
    copyright: "© 2025 Someone. All rights reserved.",
    links: [
      { text: "Privacy Policy", url: "#" },
      { text: "Terms of Service", url: "#" },
      { text: "Sitemap", url: "#" },
    ],
    github: {
      text: "Star this project on Github",
      url: "https://github.com/tomcomtang/astro-cartoon-portfolio",
    },
  },
  
  // Posts Page
  posts: {
    title: "Blog Posts",
    subtitle: "Explore our latest articles on web development, design, and technology",
    searchPlaceholder: "Search posts...",
  },
  
  // Comments Page
  comments: {
    title: "Comments & Discussion",
    subtitle: "Share your thoughts, questions, or suggestions here. Let's connect and discuss!",
    guidelines: {
      title: "Community Guidelines",
      items: [
        "Be respectful and constructive in your comments",
        "No spam, self-promotion, or advertising allowed",
        "No personal attacks, hate speech, or harassment",
        "Stay on topic and keep discussions relevant",
        "No inappropriate, offensive, or illegal content",
        "Use clear, friendly, and inclusive language",
      ],
    },
  },
};

