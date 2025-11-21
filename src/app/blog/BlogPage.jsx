// app/blog/page.js
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import { Search, ArrowUp } from "lucide-react";

// Sample blog posts (replace with your real data source)
const blogPosts = [
  {
    id: 1,
    title: "Custom vs Off-the-Shelf Software: Making the Right Choice in 2025",
    slug: "custom-vs-off-the-shelf-2025",
    excerpt:
      "Your business faces a critical juncture: you need new software to solve a pressing problem, supercharge efficiency, or carve out a distinct competitive edge...",
    category: "CRM / ERP",
    author: { name: "asc", avatar: "/assets/profile-CrSvehcA.jpg" },
    publishedAt: "May 27, 2025",
    readTime: "6 min read",
    thumbnail:
      "https://anantsoftcomputing.com/media/blog/posts/Custom_VS_off_the_shelf_app.png",
  },
  {
    id: 2,
    title: "Choosing the Right CRM System: A 2025 Top Solutions Comparison",
    slug: "choosing-right-crm-2025",
    excerpt:
      "Are valuable leads slipping through the cracks? Is your customer data a disorganized mess spread across countless spreadsheets and siloed inboxes?",
    category: "CRM / ERP",
    author: { name: "asc", avatar: "/assets/profile-CrSvehcA.jpg" },
    publishedAt: "May 27, 2025",
    readTime: "7 min read",
    thumbnail:
      "https://anantsoftcomputing.com/media/blog/posts/choosing_the_right_CRM.png",
  },
  {
    id: 3,
    title: "SME Digital Transformation Roadmap: Your 2025 Guide to Growth",
    slug: "sme-digital-transformation-2025",
    excerpt:
      "Feeling overwhelmed by the rapid pace of digital change? A well-defined SME Digital Transformation Roadmap becomes your most valuable asset.",
    category: "Mobile Apps",
    author: { name: "asc", avatar: "/assets/profile-CrSvehcA.jpg" },
    publishedAt: "May 27, 2025",
    readTime: "8 min read",
    thumbnail:
      "https://anantsoftcomputing.com/media/blog/posts/SME_digital_transformation.png",
  },
  {
    id: 4,
    title: "Future of Cloud Computing: 7 Key Trends to Watch in 2025",
    slug: "future-cloud-computing-2025",
    excerpt:
      "Understanding the Future of Cloud Computing Trends is crucial for any business looking to innovate.",
    category: "Web Development",
    author: { name: "asc", avatar: "/assets/profile-CrSvehcA.jpg" },
    publishedAt: "May 27, 2025",
    readTime: "9 min read",
    thumbnail:
      "https://anantsoftcomputing.com/media/blog/posts/cloud_computing.png",
  },
  {
    id: 5,
    title: "How Mobile-First Design Boosts Conversions in 2025",
    slug: "mobile-first-design-2025",
    excerpt:
      "Mobile-first design is no longer optional — learn the key strategies to increase conversions on small screens.",
    category: "Mobile Apps",
    author: { name: "asc", avatar: "/assets/profile-CrSvehcA.jpg" },
    publishedAt: "Apr 14, 2025",
    readTime: "5 min read",
    thumbnail:
      "https://anantsoftcomputing.com/media/blog/posts/mobile_first.png",
  },
  {
    id: 6,
    title: "SEO in 2025: Semantic Search & The Role of Entities",
    slug: "seo-2025-semantic-search",
    excerpt:
      "Search engines are getting smarter. Understand the role of semantic search and entity recognition for modern SEO.",
    category: "SEO",
    author: { name: "asc", avatar: "/assets/profile-CrSvehcA.jpg" },
    publishedAt: "Mar 10, 2025",
    readTime: "7 min read",
    thumbnail: "https://anantsoftcomputing.com/media/blog/posts/seo_2025.png",
  },
  {
    id: 7,
    title: "ERP Implementation Checklist for Scaling Businesses",
    slug: "erp-implementation-checklist",
    excerpt:
      "A practical ERP implementation checklist to reduce risk and maximize ROI during your rollout.",
    category: "CRM / ERP",
    author: { name: "asc", avatar: "/assets/profile-CrSvehcA.jpg" },
    publishedAt: "Feb 20, 2025",
    readTime: "10 min read",
    thumbnail:
      "https://anantsoftcomputing.com/media/blog/posts/erp_checklist.png",
  },
  {
    id: 8,
    title: "Progressive Web Apps vs Native Apps — The 2025 Choice",
    slug: "pwa-vs-native-2025",
    excerpt:
      "A balanced look at when PWAs make sense and when native apps still win.",
    category: "Mobile Apps",
    author: { name: "asc", avatar: "/assets/profile-CrSvehcA.jpg" },
    publishedAt: "Jan 12, 2025",
    readTime: "6 min read",
    thumbnail:
      "https://anantsoftcomputing.com/media/blog/posts/pwa_vs_native.png",
  },
  {
    id: 9,
    title: "Serverless Architecture: When to Use It",
    slug: "serverless-when-to-use",
    excerpt:
      "Serverless can be highly cost-effective for certain workloads — learn when it fits your architecture.",
    category: "Web Development",
    author: { name: "asc", avatar: "/assets/profile-CrSvehcA.jpg" },
    publishedAt: "Dec 03, 2024",
    readTime: "8 min read",
    thumbnail: "https://anantsoftcomputing.com/media/blog/posts/serverless.png",
  },
  {
    id: 10,
    title: "PWAs vs Native Apps: The Right Mobile Choice for 2025?",
    slug: "pwas-vs-native-apps-2025",
    excerpt:
      "Your business needs a compelling mobile presence; that much is clear in today's digital-first world. But the path forward seems forked: Do you build an application that users download and install from an app store, or opt for a solution delivered through the web? This crucial decision can significantly impact your reach, engagement, and development budget.",
    category: "Mobile Apps",
    author: { name: "asc", avatar: "/assets/profile-CrSvehcA.jpg" },
    publishedAt: "May 27, 2025",
    readTime: "6 min read",
    thumbnail:
      "https://anantsoftcomputing.com/media/blog/posts/PWAS_vs_NATIVE_Apps.png",
  },
  {
    id: 11,
    title: "Low-Code/No-Code Platforms in 2025: Revolution or Limitation?",
    slug: "low-code-vs-no-code-2025",
    excerpt:
      "Low-code/no-code platforms have carved out a major space in modern development. They offer unmatched speed and accessibility—but not without real limitations. Are they a revolution or a compromised shortcut?",
    category: "Web Development",
    author: { name: "asc", avatar: "/assets/profile-CrSvehcA.jpg" },
    publishedAt: "May 26, 2025",
    readTime: "7 min read",
    thumbnail:
      "https://anantsoftcomputing.com/media/blog/posts/Untitled_design_19.png",
  },
  {
    id: 12,
    title: "Edge Computing Data Processing: Real-Time Power at the Frontier",
    slug: "edge-computing-data-processing-2025",
    excerpt:
      "Is your data stuck in traffic on the information superhighway? Edge Computing enables real-time processing right where the data is generated, unlocking instant insights and faster decisions.",
    category: "Web Development",
    author: { name: "asc", avatar: "/assets/profile-CrSvehcA.jpg" },
    publishedAt: "May 23, 2025",
    readTime: "8 min read",
    thumbnail:
      "https://anantsoftcomputing.com/media/blog/posts/AI_in_Software_Development.png",
  },
  {
    id: 13,
    title: "AI in Software Development 2025: A New Era Dawns",
    slug: "ai-in-software-development-2025",
    excerpt:
      "Feeling the pressure of rapid release cycles? AI is transforming software development—supercharging productivity, enhancing code quality, and reshaping the future of engineering workflows.",
    category: "Web Development",
    author: { name: "asc", avatar: "/assets/profile-CrSvehcA.jpg" },
    publishedAt: "May 23, 2025",
    readTime: "9 min read",
    thumbnail:
      "https://anantsoftcomputing.com/media/blog/posts/AI_in_Software_Development.jpg",
  },
  {
    id: 14,
    title:
      "Optimizing Database Performance: Tips for Both SQL and NoSQL Solutions",
    slug: "optimizing-database-performance-2025",
    excerpt:
      "Let's dive deep into optimization strategies for both SQL and NoSQL database systems, providing actionable techniques that deliver measurable performance improvements.",
    category: "Web Development",
    author: { name: "asc", avatar: "/assets/profile-CrSvehcA.jpg" },
    publishedAt: "May 20, 2025",
    readTime: "7 min read",
    thumbnail:
      "https://anantsoftcomputing.com/media/blog/posts/Optimizing_Database_Performance_Tips_for_Both_SQL_and_NoSQL_Solutions.jpg",
  },
  {
    id: 15,
    title: "How Microservices Architecture Drives Business Growth",
    slug: "microservices-architecture-business-growth",
    excerpt:
      "Microservices architecture breaks from monolithic design, offering a modern approach to building flexible, scalable, and maintainable software systems that accelerate business outcomes.",
    category: "Web Development",
    author: { name: "asc", avatar: "/assets/profile-CrSvehcA.jpg" },
    publishedAt: "May 16, 2025",
    readTime: "6 min read",
    thumbnail:
      "https://anantsoftcomputing.com/media/blog/posts/Microservices_Architecture_How_It_Can_Scale_Your_Business_Applications_for_Un_qkEfXlv.jpg",
  },
  {
    id: 16,
    title: "API Integration Mastery: A Guide for Modern Applications",
    slug: "api-integration-mastery-2025",
    excerpt:
      "API integration enables apps to communicate and share data via APIs, allowing software to reuse external features without rebuilding them from scratch—this guide covers patterns and best practices.",
    category: "CRM / ERP",
    author: { name: "asc", avatar: "/assets/profile-CrSvehcA.jpg" },
    publishedAt: "May 16, 2025",
    readTime: "5 min read",
    thumbnail:
      "https://anantsoftcomputing.com/media/blog/posts/gradient-api-illustration_23-2149368725.jpeg",
  },
  {
    id: 17,
    title: "DevOps vs DevSecOps: Which One Fits Your Organization?",
    slug: "devops-vs-devsecops-2025",
    excerpt:
      "Compare DevOps and DevSecOps to find the approach that best fits your goals, security needs, and team capabilities for smarter, safer development workflows.",
    category: "Web Development",
    author: { name: "asc", avatar: "/assets/profile-CrSvehcA.jpg" },
    publishedAt: "May 15, 2025",
    readTime: "6 min read",
    thumbnail:
      "https://anantsoftcomputing.com/media/blog/posts/DevOps_vs._DevSecOps_Which_Approach_Is_Right_for_Your_Organization.jpg",
  },
  {
    id: 18,
    title: "10 Clean Code Tips to Improve Your Development Process",
    slug: "clean-code-tips-2025",
    excerpt:
      "Discover 10 clean code practices to boost productivity, reduce tech debt, and streamline your development process in this essential guide.",
    category: "Web Development",
    author: { name: "asc", avatar: "/assets/profile-CrSvehcA.jpg" },
    publishedAt: "May 14, 2025",
    readTime: "5 min read",
    thumbnail:
      "https://anantsoftcomputing.com/media/blog/posts/person-working-html-computer_23-2150038840.jpg",
  },
  {
    id: 19,
    title: "20 Must-Have Features for Hospital Websites",
    slug: "hospital-website-features-2025",
    excerpt:
      "Here are the 20 must-have features for hospital websites to ensure they meet the needs of patients, families, and healthcare providers in 2025 and beyond.",
    category: "Web Development",
    author: { name: "asc", avatar: "/assets/profile-CrSvehcA.jpg" },
    publishedAt: "Nov 26, 2024",
    readTime: "8 min read",
    thumbnail:
      "https://anantsoftcomputing.com/media/blog/posts/6.-Medical-website-features.webp",
  },
  {
    id: 20,
    title: "Why Responsive Design is Non-Negotiable in 2025",
    slug: "responsive-design-non-negotiable-2025",
    excerpt:
      "Responsive design is no longer optional. In a multi-device world, it directly impacts user engagement, SEO, and conversion rates. Here's why it's essential in 2025.",
    category: "Web Development",
    author: { name: "asc", avatar: "/assets/profile-CrSvehcA.jpg" },
    publishedAt: "Nov 26, 2024",
    readTime: "9 min read",
    thumbnail:
      "https://anantsoftcomputing.com/media/blog/posts/1674746048683.png",
  },
  {
    id: 21,
    title: "The Role of UX/UI Design in Increasing Website Conversions",
    slug: "ux-ui-design-increasing-conversions-2025",
    excerpt:
      "UX and UI design are critical to boosting engagement and conversions. Learn how thoughtful design directly impacts user behavior and business growth.",
    category: "Web Development",
    author: { name: "asc", avatar: "/assets/profile-CrSvehcA.jpg" },
    publishedAt: "Nov 26, 2024",
    readTime: "10 min read",
    thumbnail:
      "https://anantsoftcomputing.com/media/blog/posts/ux-vs-ui-wallpaper.webp",
  },
  {
    id: 22,
    title: "How to Design an SEO-Friendly Website from Scratch",
    slug: "seo-friendly-website-design-from-scratch",
    excerpt:
      "A visually appealing website isn’t enough—your site must be SEO-friendly to attract search engines, drive organic traffic, and deliver an exceptional user experience. Here’s how to design one from scratch.",
    category: "Web Development",
    author: { name: "asc", avatar: "/assets/profile-CrSvehcA.jpg" },
    publishedAt: "Nov 26, 2024",
    readTime: "8 min read",
    thumbnail:
      "https://anantsoftcomputing.com/media/blog/posts/seo-friendly-website-design-hero-1654836313660.webp",
  },
  {
    id: 23,
    title: "Essential Features for E-commerce Websites in 2025",
    slug: "ecommerce-website-features-2025",
    excerpt:
      "E-commerce websites must prioritize innovation, UX, and functionality to stay competitive. Here are the essential features every e-commerce business needs in 2025.",
    category: "Web Development",
    author: { name: "asc", avatar: "/assets/profile-CrSvehcA.jpg" },
    publishedAt: "Nov 26, 2024",
    readTime: "9 min read",
    thumbnail:
      "https://anantsoftcomputing.com/media/blog/posts/20240726-071212-qfqw-blog-110_pic-1.webp",
  },
  {
    id: 24,
    title: "How Progressive Web Apps (PWAs) Are Changing the Game",
    slug: "how-pwas-are-changing-the-game-2025",
    excerpt:
      "Progressive Web Apps (PWAs) combine the best of mobile apps and websites—offering fast, engaging, and reliable user experiences. Here’s why they’re transforming the digital landscape.",
    category: "Mobile Apps",
    author: { name: "asc", avatar: "/assets/profile-CrSvehcA.jpg" },
    publishedAt: "Nov 25, 2024",
    readTime: "7 min read",
    thumbnail:
      "https://anantsoftcomputing.com/media/blog/posts/PWA-scaled.webp",
  },
  {
    id: 25,
    title: "Top Security Features for Mobile Applications in 2025",
    slug: "mobile-app-security-features-2025",
    excerpt:
      "Mobile app security is more critical than ever with rising cyber threats. Here are the top security features every mobile app needs in 2025 to protect users and businesses.",
    category: "Mobile Apps",
    author: { name: "asc", avatar: "/assets/profile-CrSvehcA.jpg" },
    publishedAt: "Nov 25, 2024",
    readTime: "8 min read",
    thumbnail:
      "https://anantsoftcomputing.com/media/blog/posts/Mobile-app-security.webp",
  },
  {
    id: 26,
    title: "Key Features of a Successful Healthcare Mobile App",
    slug: "key-features-healthcare-mobile-app",
    excerpt:
      "Healthcare mobile apps have revolutionized patient-provider interactions. This post explores the essential features that make a healthcare app successful—improving patient care, operational efficiency, and outcomes.",
    category: "Mobile Apps",
    author: { name: "asc", avatar: "/assets/profile-CrSvehcA.jpg" },
    publishedAt: "Nov 25, 2024",
    readTime: "7 min read",
    thumbnail:
      "https://anantsoftcomputing.com/media/blog/posts/Key-Features-of-a-Successful-Healthcare-App.webp",
  },
  {
    id: 27,
    title: "Flutter vs React Native: Which Framework is Best for Your App?",
    slug: "flutter-vs-react-native-2025",
    excerpt:
      "Choosing the right cross-platform framework is crucial. We compare Flutter and React Native across performance, developer experience, ecosystem, and use-cases to help you pick the right tool.",
    category: "Mobile Apps",
    author: { name: "asc", avatar: "/assets/profile-CrSvehcA.jpg" },
    publishedAt: "Nov 25, 2024",
    readTime: "8 min read",
    thumbnail:
      "https://anantsoftcomputing.com/media/blog/posts/Flutter-vs-ReactNative-1.webp",
  },
  {
    id: 28,
    title: "Why Your Business Needs a Mobile App: Trends and Use Cases",
    slug: "why-your-business-needs-a-mobile-app-2025",
    excerpt:
      "A mobile app is essential for customer engagement and operational efficiency. This article covers trends and use-cases demonstrating why businesses should invest in mobile apps today.",
    category: "Mobile Apps",
    author: { name: "asc", avatar: "/assets/profile-CrSvehcA.jpg" },
    publishedAt: "Nov 25, 2024",
    readTime: "7 min read",
    thumbnail:
      "https://anantsoftcomputing.com/media/blog/posts/Business-need-mobile-app-1-1.webp",
  },
  {
    id: 29,
    title: "Common SEO Mistakes to Avoid for Better Rankings",
    slug: "common-seo-mistakes-to-avoid",
    excerpt:
      "SEO mistakes can derail your organic growth. Learn the most common pitfalls and practical fixes to improve your rankings and sustain long-term search performance.",
    category: "SEO",
    author: { name: "asc", avatar: "/assets/profile-CrSvehcA.jpg" },
    publishedAt: "Nov 25, 2024",
    readTime: "8 min read",
    thumbnail:
      "https://anantsoftcomputing.com/media/blog/posts/seo-mistakes-to-avoid-when-getting-started.webp",
  },
  {
    id: 30,
    title: "SEO for E-commerce Websites: Strategies to Increase Sales",
    slug: "seo-for-ecommerce-websites-strategies-2025",
    excerpt:
      "Learn the most effective SEO strategies tailored for e-commerce websites to improve visibility, drive organic traffic, and convert more visitors into customers.",
    category: "SEO",
    author: { name: "asc", avatar: "/assets/profile-CrSvehcA.jpg" },
    publishedAt: "Nov 25, 2024",
    readTime: "8 min read",
    thumbnail:
      "https://anantsoftcomputing.com/media/blog/posts/7-Best-SEO-Strategies-for-Ecommerce-Website.png",
  },
  {
    id: 31,
    title:
      "How AI is Revolutionizing Keyword Research and Content Optimization",
    slug: "ai-in-keyword-research-content-optimization",
    excerpt:
      "AI is transforming keyword research and content optimization, offering deeper insights and personalized strategies for better search performance.",
    category: "SEO",
    author: { name: "asc", avatar: "/assets/profile-CrSvehcA.jpg" },
    publishedAt: "Nov 25, 2024",
    readTime: "8 min read",
    thumbnail:
      "https://anantsoftcomputing.com/media/blog/posts/AI-and-Predictive-Analytics-in-SEO-d675455bf1e8683fd51846f455ac36aa.webp",
  },
  {
    id: 32,
    title: "Top 10 SEO Strategies for Small Businesses in 2025",
    slug: "seo-strategies-small-business-2025",
    excerpt:
      "Small businesses must master SEO to stay competitive. Here are the top 10 SEO strategies to help grow visibility, traffic, and long-term digital success.",
    category: "SEO",
    author: { name: "asc", avatar: "/assets/profile-CrSvehcA.jpg" },
    publishedAt: "Nov 25, 2024",
    readTime: "9 min read",
    thumbnail:
      "https://anantsoftcomputing.com/media/blog/posts/small-business-seo-scaled_QJj4TgM.webp",
  },
  {
    id: 33,
    title: "The Future of ERP: Trends to Watch in 2025",
    slug: "future-of-erp-2025-trends",
    excerpt:
      "ERP systems are evolving rapidly with AI, automation, and cloud technology. Explore the major ERP trends shaping 2025 and how businesses can adapt.",
    category: "CRM / ERP",
    author: { name: "asc", avatar: "/assets/profile-CrSvehcA.jpg" },
    publishedAt: "Nov 25, 2024",
    readTime: "7 min read",
    thumbnail:
      "https://anantsoftcomputing.com/media/blog/posts/erp_Future_a0b8dd2dc2.webp",
  },
  {
    id: 34,
    title:
      "Essential CRM Features for Nonprofits: Driving Impact and Efficiency",
    slug: "crm-features-for-nonprofits-2025",
    excerpt:
      "Nonprofits rely on strong donor and volunteer relationships. Discover the essential CRM features that help streamline operations and increase impact.",
    category: "CRM / ERP",
    author: { name: "asc", avatar: "/assets/profile-CrSvehcA.jpg" },
    publishedAt: "Nov 25, 2024",
    readTime: "7 min read",
    thumbnail:
      "https://anantsoftcomputing.com/media/blog/posts/5-Key-Features-of-a-Nonprofit-CRM-Solution.webp",
  },
  {
    id: 35,
    title: "How to Choose Between Off-the-Shelf and Custom CRM/ERP Solutions",
    slug: "off-the-shelf-vs-custom-crm-erp-2025",
    excerpt:
      "Choosing between off-the-shelf and custom CRM/ERP solutions can be challenging. Learn the advantages, drawbacks, and ideal use cases for each approach.",
    category: "CRM / ERP",
    author: { name: "asc", avatar: "/assets/profile-CrSvehcA.jpg" },
    publishedAt: "Nov 25, 2024",
    readTime: "8 min read",
    thumbnail:
      "https://anantsoftcomputing.com/media/blog/posts/12-1024x730.png",
  },
  {
    id: 36,
    title:
      "ERP Systems for Manufacturing: Streamlining Processes for Maximum Efficiency",
    slug: "erp-systems-for-manufacturing-2025",
    excerpt:
      "ERP systems are transforming manufacturing by optimizing operations, reducing waste, and increasing profitability. Explore why manufacturers need ERP in 2025.",
    category: "CRM / ERP",
    author: { name: "asc", avatar: "/assets/profile-CrSvehcA.jpg" },
    publishedAt: "Nov 25, 2024",
    readTime: "9 min read",
    thumbnail: "https://anantsoftcomputing.com/media/blog/posts/erp.webp",
  },
  {
    id: 37,
    title: "Why Every Business Needs a Custom CRM: Benefits and Key Features",
    slug: "why-every-business-needs-custom-crm-2025",
    excerpt:
      "Custom CRMs are built around your unique workflows, goals, and challenges. Learn how a tailored CRM improves efficiency, insights, and customer experience.",
    category: "CRM / ERP",
    author: { name: "asc", avatar: "/assets/profile-CrSvehcA.jpg" },
    publishedAt: "Nov 25, 2024",
    readTime: "7 min read",
    thumbnail:
      "https://anantsoftcomputing.com/media/blog/posts/Screenshot_2024-11-25_at_12.57.43AM.png",
  },
  {
    id: 42,
    title:
      "FlyUrDream – Overseas Education CRM: Revolutionizing Higher Education with Modern Technology",
    slug: "flyurdream-overseas-education-crm",
    excerpt:
      "Revolutionizing higher education through modern technology that transforms and streamlines the university application process.",
    category: "CRM / ERP",
    author: { name: "asc", avatar: "/assets/profile-CrSvehcA.jpg" },
    publishedAt: "Nov 19, 2024",
    readTime: "5 min read",
    thumbnail:
      "https://anantsoftcomputing.com/media/blog/posts/flyurdream-crm.webp",
  },
];

const PRODUCTION_CATEGORIES = [
  "All",
  "CRM / ERP",
  "Mobile Apps",
  "SEO",
  "Web Development",
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Pagination
  const [pageSize] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filteredPosts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return blogPosts.filter((p) => {
      const catMatch =
        selectedCategory === "All" || p.category === selectedCategory;
      const searchMatch =
        q === "" ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q);
      return catMatch && searchMatch;
    });
  }, [selectedCategory, searchQuery]);

  useEffect(() => setCurrentPage(1), [selectedCategory, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / pageSize));
  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [currentPage, totalPages]);

  const currentPosts = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredPosts.slice(start, start + pageSize);
  }, [filteredPosts, currentPage, pageSize]);

  const goToPage = (n) => {
    const page = Math.max(1, Math.min(totalPages, n));
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-primary-50/50 via-white to-secondary-50/50"
    >
      {/* Hero */}
      <section className="relative min-h-[60vh] overflow-hidden bg-gradient-to-b from-primary-100 via-white to-secondary-100">
        {/* Background Blobs */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-primary-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
          <div className="absolute -top-4 -right-4 w-96 h-96 bg-secondary-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-accent-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
        </div>

        <div
          className="
      mx-auto w-full
      max-w-7xl
      px-4 sm:px-6 lg:px-8
      relative pt-32 pb-16 text-center lg:pt-40
    "
        >
          <div className="mx-auto max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold tracking-tight text-dark sm:text-6xl md:text-7xl"
            >
              Insights & Innovation
              <span className="block bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Tech Blog
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl"
            >
              Explore the latest in technology, development insights, and
              industry trends
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-10 relative max-w-2xl mx-auto"
            >
              <input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-white rounded-full shadow-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
              />
              <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Production category nav + grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div
              className="flex flex-wrap gap-3 justify-center"
              style={{ opacity: 1, transform: "none" }}
            >
              {PRODUCTION_CATEGORIES.map((cat) => {
                const active = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-6 py-2 rounded-full transition-all duration-300 ${
                      active
                        ? "bg-primary-600 text-white shadow-lg shadow-primary-600/20"
                        : "bg-white text-gray-600 hover:bg-primary-50"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentPosts.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">No posts found.</p>
              </div>
            ) : (
              currentPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-xs">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-xs flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-calendar w-3 h-3"
                        >
                          <path d="M8 2v4"></path>
                          <path d="M16 2v4"></path>
                          <rect
                            width="18"
                            height="18"
                            x="3"
                            y="4"
                            rx="2"
                          ></rect>
                          <path d="M3 10h18"></path>
                        </svg>
                        {post.publishedAt}
                      </span>
                    </div>

                    <h2 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-primary-600 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-6 h-6 rounded-full"
                        />
                        <div>
                          <div className="text-xs font-medium text-gray-900">
                            {post.author.name}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 transform hover:scale-102 border-2 border-primary-400 text-primary-600 hover:bg-primary-50 px-4 py-2 text-sm"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-full bg-white shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-left w-6 h-6 text-gray-600"
              >
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            </button>

            <div className="flex space-x-2">
              {Array.from({ length: totalPages }).map((_, i) => {
                const page = i + 1;
                const active = page === currentPage;
                return (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`w-10 h-10 rounded-full shadow-md ${
                      active
                        ? "bg-primary-600 text-white"
                        : "bg-white text-gray-600 hover:bg-primary-50"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {page}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full bg-white shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right w-6 h-6 text-gray-600"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter (kept) */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-primary-100 mb-8">
              Get the latest insights and updates delivered directly to your
              inbox
            </p>
            <form
              className="flex gap-4 max-w-md mx-auto"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Subscribed (demo)");
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-white text-primary-600 rounded-full font-medium hover:bg-primary-50 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 p-3 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-colors z-50"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
