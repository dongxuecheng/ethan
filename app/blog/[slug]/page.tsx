import { notFound } from 'next/navigation'
import { formatDate, getBlogPosts } from '@/app/blog/utils'
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
  const posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function Blog({ params }: { params: { slug: string } }) {
  const post = getBlogPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <section className="prose dark:prose-invert w-full max-w-4xl mx-auto  flex flex-col space-y-0 px-4 sm:px-6 lg:px-8 py-4">
      <h1 className="title font-semibold text-2xl text-center">
        {post.metadata.title}
      </h1>
      
      <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
        {formatDate(post.metadata.publishedAt)}
      </p>
      
      <article>
        <MDXRemote source={post.content} />
      </article>
    </section>
  )
}
