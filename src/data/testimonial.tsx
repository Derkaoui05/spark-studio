export interface Testimonial {
    id: number
    quote: string
    author: string
    role: string
    company: string
    image?: string
    rating: number
    category: "client" | "partner" | "customer"
  }
  
  export const testimonials: Testimonial[] = [
    {
      id: 1,
      quote:
        "Working with this team transformed our online presence completely. Their attention to detail and creative approach to problem-solving resulted in a website that not only looks stunning but also performs exceptionally well.",
      author: "Sarah Johnson",
      role: "Marketing Director",
      company: "Elevate Brands",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      rating: 5,
      category: "client",
    },
    {
      id: 2,
      quote:
        "The e-commerce platform they built for us increased our conversion rate by 43% in just three months. Their strategic approach to UX design and understanding of our customer journey made all the difference.",
      author: "Michael Chen",
      role: "CEO",
      company: "Horizon Tech",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      rating: 5,
      category: "client",
    },
    {
      id: 3,
      quote:
        "Their mobile app development team delivered beyond our expectations. The app is intuitive, fast, and our users love it. We've seen a 62% increase in user engagement since launch.",
      author: "Emily Rodriguez",
      role: "Product Manager",
      company: "Fitness Connect",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      rating: 5,
      category: "partner",
    },
    {
      id: 4,
      quote:
        "The digital marketing campaign they created for our product launch exceeded all KPIs. Their data-driven approach and creative execution helped us reach new audiences we hadn't tapped into before.",
      author: "David Wilson",
      role: "Sales Director",
      company: "Nova Products",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      rating: 4,
      category: "client",
    },
    {
      id: 5,
      quote:
        "As a healthcare provider, we needed a secure and compliant patient portal. Their team not only delivered on all technical requirements but also created an interface that's accessible to patients of all ages and abilities.",
      author: "Dr. Rebecca Lee",
      role: "Medical Director",
      company: "HealthFirst Clinic",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      rating: 5,
      category: "customer",
    },
    {
      id: 6,
      quote:
        "The rebrand they executed for our financial services firm perfectly captured our heritage while positioning us for the future. The comprehensive brand guidelines have been invaluable for maintaining consistency across all touchpoints.",
      author: "James Thompson",
      role: "Brand Manager",
      company: "Legacy Financial",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      rating: 5,
      category: "partner",
    },
    {
      id: 7,
      quote:
        "Their team's expertise in educational technology helped us create a learning platform that's now used by over 200 schools nationwide. The intuitive design and robust features have received praise from teachers, students, and administrators alike.",
      author: "Lisa Patel",
      role: "Education Director",
      company: "LearnSphere",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      rating: 5,
      category: "customer",
    },
    {
      id: 8,
      quote:
        "The restaurant ordering system they developed has streamlined our operations and improved customer satisfaction. The integration with our kitchen management system has reduced order errors by 92%.",
      author: "Carlos Mendez",
      role: "Operations Manager",
      company: "Fusion Dining Group",
      image:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      rating: 4,
      category: "client",
    },
  ]
  