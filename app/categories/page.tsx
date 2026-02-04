'use client'

import { motion, Variants } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Sparkles, Crown, Feather, BookOpen, PenTool, Library } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

const premiumCategories = [
  {
    title: 'Royal Romance',
    description: 'Exclusive love stories crafted with poetic depth and emotional elegance.',
    icon: Crown,
    badge: 'Most Loved',
  },
  {
    title: 'Soulful Shayari',
    description: 'Premium handwritten-style shayari that touches the deepest emotions.',
    icon: Feather,
    badge: 'Editor’s Pick',
  },
  {
    title: 'Timeless Classics',
    description: 'Curated literary masterpieces reimagined for modern readers.',
    icon: BookOpen,
    badge: 'Classic',
  },
  {
    title: 'Signature Quotes',
    description: 'Golden Quill exclusive quotes designed for impact and inspiration.',
    icon: PenTool,
    badge: 'Trending',
  },
  {
    title: 'Elite Collections',
    description: 'Members-only collections with premium storytelling experience.',
    icon: Library,
    badge: 'Premium',
  },
]

export default function PremiumCategoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
      <section className="container mx-auto px-4 pt-24 pb-16 text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
          <Badge className="mb-4 px-4 py-1 text-sm rounded-full">
            <Sparkles className="w-4 h-4 mr-2" /> Premium Access
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Discover Our Premium
            <span className="block text-primary">Literary Universe</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Unlock carefully curated categories crafted with elegance, emotion, and exclusivity — designed for readers who seek more than words.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/90 to-primary/60 text-primary-foreground p-10 md:p-16 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold leading-tight">Golden Membership Experience</h2>
                <p className="text-primary-foreground/90 text-lg">
                  Elevate your reading journey with exclusive collections, priority access, and members-only releases.
                </p>
                <Button size="lg" variant="secondary" className="rounded-2xl px-8">
                  Upgrade Now
                </Button>
              </div>
              <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
                  alt="Premium Books"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 pb-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {premiumCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={index}
              >
                <Card className="group rounded-2xl border border-border/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary">
                        <Icon className="w-6 h-6" />
                      </div>
                      <Badge variant="secondary" className="rounded-full text-xs">
                        {category.badge}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                    <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                      {category.description}
                    </p>
                    <Link href="#">
                      <Button className="w-full rounded-xl">Explore Category</Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <Badge className="rounded-full px-4 py-1">Exclusive Preview</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">The Whispering Pages</h2>
            <p className="text-muted-foreground leading-relaxed">
              "In the silence of golden dusk, her words lingered like poetry carved into time..."
              <br /><br />
              Experience a glimpse of our premium storytelling crafted for readers who cherish depth, emotion, and timeless elegance.
            </p>
            <Button size="lg" className="rounded-xl">Read Full Preview</Button>
          </div>
          <Card className="rounded-2xl shadow-xl border border-border/50">
            <CardContent className="p-10 space-y-4">
              <h3 className="text-xl font-semibold">Chapter One</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The ink had barely dried when destiny rewrote her story. Between faded letters and forgotten promises, she discovered that some endings are merely disguised beginnings...
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                And in that quiet revelation, the Golden Quill found its voice.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 pb-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">From The Editorial Desk</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Insights, writing philosophy, and behind-the-scenes stories from the creators of Golden Quill.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item, index) => (
            <motion.div
              key={item}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={index}
            >
              <Card className="rounded-2xl border border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative w-full h-48 rounded-t-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
                    alt="Editorial"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-8 space-y-4">
                  <Badge variant="secondary" className="rounded-full text-xs w-fit">
                    Editorial
                  </Badge>
                  <h3 className="text-lg font-semibold">Crafting Emotion Through Words</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Discover how powerful storytelling blends structure, vulnerability, and poetic rhythm to create unforgettable literary experiences.
                  </p>
                  <Button variant="ghost" className="px-0">Read Article →</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
