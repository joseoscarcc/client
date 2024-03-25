import React from 'react';
import Image from 'next/image';

interface Post {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  start: string;
  image: { src: string; alt: string }[];
  body: { subtitle: string; text: string }[];
  end: string;
}

const BlogPost: React.FC<Post> = ({ id, title, subtitle, date, start, image, body, end }) => {
  return (
    <section className='flex flex-col items-center justify-center min-h-screen bg-center bg-no-repeat py-4'>
      <div className='max-w-4xl w-full px-1'>
        <div className="blog-post text-center">
          <p className="text-sm md:text-base text-blue-10 font-bold mb-2">{date} <span className="text-gray-900">/</span> {subtitle}</p>
          <h1 className="font-bold text-3xl md:text-5xl mb-4">{title}</h1>

          <div className="bg-white p-8 md:p-12 text-lg md:text-xl text-gray-800 leading-normal">
            <p className='text-2xl md:text-3xl mb-5 text-justify'>{start}</p>
            <div className="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded">
              {image && Array.isArray(image) && image.length > 0 && (
                image.map((img, index) => (
                  <Image 
                    key={index}
                    src={img.src}
                    alt={img.alt}
                    width={1100}
                    height={640}
                    layout="responsive"
                    className="rounded-lg"
                  />
                ))
              )}
            </div>
            {body && Array.isArray(body) && body.length > 0 && (
              body.map((subject, index) => (
                <div key={index}>
                  <p className='pt-5 text-justify'><strong>{subject.subtitle}</strong> {subject.text}</p>
                  <div className="pt-1 flex flex-wrap">
                    {/* Add your links here */}
                  </div>
                </div>
              ))
            )}
            <p className='py-6 text-justify'>{end}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;