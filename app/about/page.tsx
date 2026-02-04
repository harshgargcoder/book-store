'use client'

import { motion, Variants } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { Feather, BookOpen, Sparkles, Users } from 'lucide-react'

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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
      <section className="container mx-auto px-4 pt-24 pb-20 text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
          <Badge className="mb-4 px-4 py-1 rounded-full">About Golden Quill</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Crafting Stories With
            <span className="block text-primary">Elegance & Emotion</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Golden Quill is a premium literary platform dedicated to timeless storytelling, soulful poetry, and refined creative expression.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 pb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative w-full h-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a"
              alt="Writing Desk"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              We believe words have the power to inspire, heal, and transform. Our mission is to create a refined space where literature meets luxury and storytelling becomes an experience.
            </p>
            <Button className="rounded-2xl px-8">Explore Premium</Button>
          </div>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 pb-24">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Feather,
              title: 'Authentic Expression',
              desc: 'Original poetry and prose written with emotional depth and artistic elegance.',
            },
            {
              icon: BookOpen,
              title: 'Curated Excellence',
              desc: 'Carefully selected premium collections for readers who value quality.',
            },
            {
              icon: Users,
              title: 'Passionate Community',
              desc: 'A growing circle of readers and writers connected by creativity.',
            },
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={index}
              >
                <Card className="rounded-3xl border border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-10 text-center space-y-4">
                    <div className="flex justify-center">
                      <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                        <Icon className="w-8 h-8" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Philosophy</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Golden Quill, storytelling is not just content — it is craftsmanship. Every word is shaped with intention, every line carries emotion, and every collection reflects our commitment to artistic excellence.
          </p>
          <div className="flex justify-center mt-10">
            <div className="relative w-64 h-80 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
                alt="Books"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
