// "use client"

// import { useRef, useState, useEffect } from "react"
// import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion"
// import { Star, StarHalf, Quote, User, Building } from "lucide-react"
// import { Badge } from "@/components/ui/badge"
// import { testimonials } from "@/data/testimonial"
// import type { Testimonial } from "@/data/testimonial"

// export default function Testimonials() {
//   const containerRef = useRef<HTMLDivElement>(null)
//   const carouselRef = useRef<HTMLDivElement>(null)
//   const [width, setWidth] = useState(0)
//   const [isDragging, setIsDragging] = useState(false)

//   // For parallax background effect
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   })

//   const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
//   const y2 = useTransform(scrollYProgress, [0, 1], [0, -100])
//   const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 10])
//   const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -15])

//   // For smooth scrolling
//   const x = useMotionValue(0)
//   // Smoother spring physics
//   const xSmooth = useSpring(x, { damping: 25, stiffness: 300 })

//   // Calculate carousel width on mount and window resize
//   useEffect(() => {
//     if (!carouselRef.current) return

//     const calculateWidth = () => {
//       const carousel = carouselRef.current
//       if (!carousel) return

//       const scrollWidth = carousel.scrollWidth
//       const clientWidth = carousel.clientWidth
//       setWidth(scrollWidth - clientWidth)
//     }

//     calculateWidth()
//     window.addEventListener("resize", calculateWidth)

//     return () => {
//       window.removeEventListener("resize", calculateWidth)
//     }
//   }, [])

//   // Render stars based on rating
//   const renderStars = (rating: number) => {
//     const stars = []
//     const fullStars = Math.floor(rating)
//     const hasHalfStar = rating % 1 !== 0

//     for (let i = 0; i < fullStars; i++) {
//       stars.push(<Star key={`star-${i}`} className="h-4 w-4 fill-amber-500 text-amber-500" />)
//     }

//     if (hasHalfStar) {
//       stars.push(<StarHalf key="half-star" className="h-4 w-4 fill-amber-500 text-amber-500" />)
//     }

//     return stars
//   }

//   // Get category badge color
//   const getCategoryColor = (category: Testimonial["category"]) => {
//     switch (category) {
//       case "client":
//         return "from-blue-500 to-indigo-500"
//       case "partner":
//         return "from-emerald-500 to-teal-500"
//       case "customer":
//         return "from-violet-500 to-purple-500"
//       default:
//         return "from-gray-500 to-slate-500"
//     }
//   }

//   return (
//     <section ref={containerRef} id="testimonials" className="py-24 relative overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div
//           style={{ y: y1, rotate: rotate1 }}
//           className="absolute top-20 right-[5%] w-72 h-72 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-full blur-3xl"
//         />
//         <motion.div
//           style={{ y: y2, rotate: rotate2 }}
//           className="absolute bottom-40 left-[10%] w-80 h-80 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-3xl"
//         />
//       </div>

//       <div className="container px-4 md:px-6 relative z-10">
//         {/* Section Header */}
//         <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//           >
//             <Badge variant="outline" className="px-4 py-1 border-border/50 bg-background/50 backdrop-blur-sm">
//               <Quote className="h-3.5 w-3.5 mr-2 text-amber-500" />
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-yellow-500">
//                 Client Success
//               </span>
//             </Badge>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             viewport={{ once: true }}
//             className="space-y-4 max-w-3xl"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
//                 What Our Clients
//               </span>{" "}
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-yellow-500">
//                 Say About Us
//               </span>
//             </h2>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
//             >
//               Don't just take our word for it. Hear from the businesses and organizations we've helped transform through
//               innovative digital solutions.
//             </motion.p>
//           </motion.div>
//         </div>

//         {/* Testimonial Carousel */}
//         <div className="relative mt-12 overflow-hidden">
//           {/* Carousel Container */}
//           <motion.div ref={carouselRef} className="flex cursor-grab overflow-hidden" whileTap={{ cursor: "grabbing" }}>
//             <motion.div
//               drag="x"
//               dragConstraints={{ right: 0, left: -width }}
//               dragElastic={0.1}
//               dragTransition={{ bounceStiffness: 600, bounceDamping: 30 }}
//               onDragStart={() => setIsDragging(true)}
//               onDragEnd={() => setIsDragging(false)}
//               style={{ x: xSmooth }}
//               className="flex gap-6 px-4 pb-8"
//             >
//               {testimonials.map((testimonial) => (
//                 <motion.div
//                   key={testimonial.id}
//                   className="min-w-[300px] md:min-w-[400px] lg:min-w-[500px] p-1"
//                   whileHover={{
//                     scale: 1.05,
//                     transition: { duration: 0.3 },
//                   }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   <div className="h-full bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10">
//                     {/* Category badge */}
//                     <div className="mb-4">
//                       <span
//                         className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(
//                           testimonial.category,
//                         )} text-white`}
//                       >
//                         {testimonial.category.charAt(0).toUpperCase() + testimonial.category.slice(1)}
//                       </span>
//                     </div>

//                     {/* Rating */}
//                     <div className="flex mb-4">{renderStars(testimonial.rating)}</div>

//                     {/* Quote */}
//                     <blockquote className="text-lg font-medium mb-6">"{testimonial.quote}"</blockquote>

//                     {/* Author info */}
//                     <div className="flex items-center mt-6">
//                       {testimonial.image ? (
//                         <img
//                           src={testimonial.image || "/placeholder.svg"}
//                           alt={testimonial.author}
//                           className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-amber-500/20"
//                         />
//                       ) : (
//                         <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500/20 to-yellow-500/20 flex items-center justify-center mr-4">
//                           <User className="h-6 w-6 text-amber-500" />
//                         </div>
//                       )}

//                       <div>
//                         <div className="font-bold">{testimonial.author}</div>
//                         <div className="text-sm text-muted-foreground flex items-center">
//                           {testimonial.role}
//                           <span className="mx-1">•</span>
//                           <span className="flex items-center">
//                             <Building className="h-3 w-3 mr-1" />
//                             {testimonial.company}
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }
