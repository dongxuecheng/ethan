import { notFound } from 'next/navigation'
// import { CustomMDX } from 'app/components/mdx'
import { formatDate, getBlogPosts } from '@/app/blog/utils'
//import { baseUrl } from 'app/sitemap'
import { MDXRemote } from 'next-mdx-remote/rsc'
export async function generateStaticParams() {
  const posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// export function generateMetadata({ params }) {
//   let post = getBlogPosts().find((post) => post.slug === params.slug)
//   if (!post) {
//     return
//   }

//   let {
//     title,
//     publishedAt: publishedTime,
//     summary: description,
//     image,
//   } = post.metadata
//   let ogImage = image
//     ? image
//     : `${baseUrl}/og?title=${encodeURIComponent(title)}`

//   return {
//     title,
//     description,
//     openGraph: {
//       title,
//       description,
//       type: 'article',
//       publishedTime,
//       url: `${baseUrl}/blog/${post.slug}`,
//       images: [
//         {
//           url: ogImage,
//         },
//       ],
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title,
//       description,
//       images: [ogImage],
//     },
//   }
// }

export default function Blog({ params }: { params: { slug: string } }) {
  const post = getBlogPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <section className='prose dark:prose-invert mx-auto justify-center flex flex-col space-y-0'>
      <h1 className="title font-semibold text-2xl">
        {post.metadata.title}
      </h1>
      
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt)}
        </p>
      
      <article className="">
      <MDXRemote source={post.content}/>
      </article>
    </section>
  )
}