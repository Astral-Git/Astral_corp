import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const testimonials = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "Everything about this platform is intuitive and beautiful. Highly recommend.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "Their team is incredible. They helped me scale so fast!",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "Super polished, fast, and reliable. Wouldn't go anywhere else.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = testimonials.slice(0, testimonials.length / 2);
const secondRow = testimonials.slice(testimonials.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-72 sm:w-80 md:w-96 cursor-pointer overflow-hidden rounded-xl border p-5",
        "bg-white border-gray-200 hover:bg-gray-50",
        "dark:bg-[#1A1A1A] dark:border-[#333] dark:hover:bg-[#222] shadow-sm transition-all"
      )}
    >
      <div className="flex items-center gap-3">
        <img
          className="rounded-full w-10 h-10 object-cover"
          alt={name}
          src={img}
        />
        <div>
          <figcaption className="text-sm font-semibold text-gray-900 dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs text-gray-500 dark:text-gray-400">{username}</p>
        </div>
      </div>
      <blockquote className="mt-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        “{body}”
      </blockquote>
    </figure>
  );
};

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white dark:bg-[#0B0B0F]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl font-bold font-space mb-16 text-gray-900 dark:text-white">
          Loved by our <span className="gradient-text">community</span>
        </h2>

        <div className="relative flex flex-col gap-8 overflow-hidden">
          <Marquee pauseOnHover className="[--duration:25s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:25s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>

          {/* Fading edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-white dark:from-[#0B0B0F]"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-white dark:from-[#0B0B0F]"></div>
        </div>
      </div>
    </section>
  );
}
