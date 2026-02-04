'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const books = [
  {
    id: '1',
    title: 'Whispers of the Heart',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
    content: 'A timeless romantic journey woven with longing and destiny.',
  },
  {
    id: '2',
    title: 'Ink of Emotions',
    image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d',
    content: 'Soulful verses that echo the unspoken depths of the heart.',
  },
  {
    id: '3',
    title: 'Golden Reflections',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a',
    content: 'An exclusive collection crafted for refined readers.',
  },
]

export default function BookDetailPage() {
  const params = useParams()
  const [book, setBook] = useState<any>(null)
  const [isBookmarked, setIsBookmarked] = useState(false)

  useEffect(() => {
    const found = books.find((b) => b.id === params.id)
    setBook(found)

    const stored = JSON.parse(localStorage.getItem('bookmarks') || '[]')
    if (stored.includes(Number(params.id))) {
      setIsBookmarked(true)
    }
  }, [params.id])

  if (!book) return null

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
      <div className="container mx-auto px-4 pt-24 pb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-80 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={book.image}
              alt={book.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <Badge>Book Detail</Badge>
            <h1 className="text-4xl font-bold">{book.title}</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {book.content}
            </p>

            <Button
              onClick={() => {
                const stored = JSON.parse(
                  localStorage.getItem('bookmarks') || '[]'
                )
                if (!stored.includes(Number(params.id))) {
                  localStorage.setItem(
                    'bookmarks',
                    JSON.stringify([...stored, Number(params.id)])
                  )
                  setIsBookmarked(true)
                }
              }}
              className="rounded-2xl px-8"
            >
              {isBookmarked ? 'Bookmarked ✓' : 'Add to Bookmark'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
