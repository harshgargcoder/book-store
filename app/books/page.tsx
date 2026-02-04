'use client'

import { useState } from 'react'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Bookmark, Crown } from 'lucide-react'

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.08,
            duration: 0.6,
            ease: 'easeOut',
        },
    }),
}

const books = [
    {
        id: 1,
        title: 'Whispers of the Heart',
        category: 'Romance',
        premium: false,
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
        desc: 'A timeless romantic journey woven with longing and destiny.',
    },
    {
        id: 2,
        title: 'Ink of Emotions',
        category: 'Shayari',
        premium: true,
        image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d',
        desc: 'Soulful verses that echo the unspoken depths of the heart.',
    },
    {
        id: 3,
        title: 'Golden Reflections',
        category: 'Premium',
        premium: true,
        image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a',
        desc: 'An exclusive collection crafted for refined readers.',
    },
]

const filters = ['All', 'Romance', 'Shayari', 'Premium']

export default function BooksPage() {
    const [activeFilter, setActiveFilter] = useState('All')

    const filteredBooks =
        activeFilter === 'All'
            ? books
            : books.filter((book) =>
                activeFilter === 'Premium'
                    ? book.premium
                    : book.category === activeFilter
            )

    return (
        <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
            <section className="container mx-auto px-4 pt-24 pb-12">
                <div className="flex flex-wrap gap-4 justify-center">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-2 rounded-full border transition-all ${activeFilter === filter
                                    ? 'bg-primary text-primary-foreground border-primary'
                                    : 'border-border hover:border-primary'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </section>

            <section className="container mx-auto px-4 pb-32">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredBooks.map((book, index) => (
                        <motion.div
                            key={book.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            custom={index}
                        >
                            <Card className="rounded-3xl overflow-hidden border border-border/50 hover:shadow-2xl transition-all">
                                <div className="relative w-full h-64">
                                    <Image
                                        src={book.image}
                                        alt={book.title}
                                        fill
                                        className="object-cover"
                                    />
                                    {book.premium && (
                                        <div className="absolute top-4 left-4">
                                            <div className="flex items-center gap-2 bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                                                <Crown className="w-3 h-3 text-yellow-400" />
                                                Premium
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <CardContent className="p-6 space-y-3">
                                    <h3 className="text-xl font-semibold">{book.title}</h3>
                                    <p className="text-sm text-muted-foreground">{book.desc}</p>
                                    <div className="flex gap-3">
                                        <Link href={`/books/${book.id}`} className="w-full">
                                            <Button className="w-full rounded-xl">
                                                Read More
                                            </Button>
                                        </Link>
                                        <button
                                            onClick={() => {
                                                const stored = JSON.parse(
                                                    localStorage.getItem('bookmarks') || '[]'
                                                )
                                                if (!stored.includes(book.id)) {
                                                    localStorage.setItem(
                                                        'bookmarks',
                                                        JSON.stringify([...stored, book.id])
                                                    )
                                                }
                                            }}
                                            className="p-2 rounded-xl border hover:bg-primary/10"
                                        >
                                            <Bookmark className="w-5 h-5" />
                                        </button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    )
}
