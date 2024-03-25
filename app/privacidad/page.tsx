import BlogPost from "@/components/BlogPost";
import { PRIVACIDAD } from "@/constants";

export default function Home() {
  return (
    <>
      <BlogPost 
        id={PRIVACIDAD.id}
        title={PRIVACIDAD.title}
        subtitle={PRIVACIDAD.subtitle}
        date={PRIVACIDAD.date}
        start={PRIVACIDAD.start}
        image={PRIVACIDAD.image}
        body={PRIVACIDAD.body}
        end={PRIVACIDAD.end}
      />
    </>
  );
}