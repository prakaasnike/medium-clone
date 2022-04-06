import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import { sanityClient, urlFor } from '../sanity'
import { Post } from "../typings"

interface Props {
  posts: [Post];
}

export default function Home({ posts }: Props) {

  return (
    <div>
      <Head>
        <title>Medium - Where good ideas find you.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head >

      <Header />

      <main className=" bg-blue-200 border-y border-black">
        <div className='md:flex mx-auto max-w-6xl justify-between '>
          <div className='space-y-10 px-6 md:px-4 pt-24 pb-4'>
            <h2 className='text-6xl md:text-8xl font-serif'>Stay curious.</h2>
            <h3 className='text-2xl max-w-sm font-serif'>Discover stories, thinking, and expertise from writers on any topic.</h3>
            <a className="group relative inline-block text-sm font-medium text-black focus:outline-none focus:ring active:text-black rounded-full" href="/">
              <span className="absolute inset-0 rounded-full border border-black"></span>
              <span className="block rounded-full border border-current bg-black text-white px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"> Start reading </span>
            </a>
          </div>
          <div className='px-6 md:px-0 pt-24'>
            <div className='hidden md:inline-flex h-full'><Image src='/write.png' alt='Create Share Explore' width={400} height={400} /></div>
          </div>
        </div>

      </main>
      {/* {POSTS} */}
      {/* Trending Text */}
      <div>
        <div className='mx-auto max-w-6xl py-10 px-6 md:px-0 '>
          <div className='flex space-x-4 items-center'>
            <Image src="/trend.svg" alt="trending" width={26} height={26} />
            <h3 className='font-bold uppercase text-xs'>Trending On Medium</h3>
          </div>

          {/* Blog Section */}
          <div className="py-4 grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:grid-cols-3 md:gap-6 md:p-6">
            {posts.map((post) => {
              return (
                <Link key={post._id} href={`/post/${post.slug.current}`}>
                  <div className="group cursor-pointer overflow-hidden rounded-lg border">
                    <img
                      className="h-30 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
                      src={urlFor(post.mainImage).url()!}
                      alt=""
                    />
                    <div className="flex justify-between bg-white p-5">
                      <div>
                        <p className="text-md font-bold">{post.title}</p>
                        <p className='text-sm'>
                          {post.description} by {post.author.name}
                        </p>
                      </div>

                      <img
                        className="h-12 w-12 rounded-full"
                        src={urlFor(post.author.image).url()!}
                        alt=""
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

      </div>


      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex gap-2"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made With
          <Image src="/heart.svg" alt="Vercel Logo" width={24} height={20} />
          Prakash Nayak.
        </a>
      </footer>
    </div >
  )
}



export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
  _id,
  title,
  author->{
  name,
  image
},
description,
mainImage,
slug
}`;
  const posts = await sanityClient.fetch(query);
  return {
    props: {
      posts,
    }
  }
}
