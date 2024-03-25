
import BlogPost from "@/components/BlogPost";
import { BLOG } from "@/constants";

export default function Home() {
  return (
    <>
      <BlogPost 
        id={BLOG.id}
        title={BLOG.title}
        subtitle={BLOG.subtitle}
        date={BLOG.date}
        start={BLOG.start}
        image={BLOG.image}
        body={BLOG.body}
        end={BLOG.end}
      />
    </>
  );
}

