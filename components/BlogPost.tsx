import Image from 'next/image';
import { POSTS } from '@/constants';

const BlogPost = ({ post }) => {
    return (
        <section className='flex flex-col items-center justify-center min-h-screen bg-center bg-no-repeat py-4'>
            <div className='max-w-4xl w-full px-1'>
                <div className="blog-post text-center">
                    <p className="text-sm md:text-base text-green-500 font-bold mb-2">{post.date} <span className="text-gray-900">/</span> {post.subtitle}</p>
                    <h1 className="font-bold text-3xl md:text-5xl mb-4">{post.title}</h1>
                    
                    <div className="bg-white p-8 md:p-12 text-lg md:text-xl text-gray-800 leading-normal">
                        <p className='text-2xl md:text-3xl mb-5 text-justify'>{post.start}</p>
                    <div className="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded">
                    {Object.values(POSTS.image).map((image, index) => (
                        <Image 
                                key={index}
                                src={image.src}
                                alt={image.alt}
                                width={1100}
                                height={640}
                                layout="responsive" // Ajusta el tamaño de la imagen según el tamaño de la pantalla
                                className="rounded-lg" // Aplica bordes redondeados a la imagen
                        />
                    ))}
                    </div>
                    {Object.values(POSTS.body).map((subject, index) => (
                    <div key={index}>
                        <p className='pt-5 text-justify'><strong>{subject.subtitle}</strong> {subject.text}</p>
                        <div className="pt-1 flex flex-wrap">
                            <a className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="/tags/next-js">Short video</a>
                            <a className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="/tags/tailwind">Youtube video</a>
                            <a className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="/tags/guide">Facebook Post</a>
                            <a className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="/tags/feature">Twitter</a>
                        </div>
                    </div>
                    ))}
                        <p className='py-6 text-justify'>{post.end}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogPost;