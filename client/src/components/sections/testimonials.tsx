import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const testimonials = [
  {
    name: "Sarah Chen",
    username: "@sarahchen",
    body: "ASTRAL transformed our e-commerce platform, increasing conversion rates by 180%. Their technical expertise and strategic approach delivered exceptional ROI.",
    img: "https://images.unsplash.com/photo-1494790108755-2616b612b641?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Marcus Johnson",
    username: "@mjohnson",
    body: "The brand identity they created perfectly captures our company vision. Our customer engagement increased 150% after the rebrand launch.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Elena Rodriguez",
    username: "@elenarodriguez",
    body: "Outstanding project management and technical delivery. They delivered our IoT solution ahead of schedule with zero post-launch issues.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "David Kim",
    username: "@davidkim",
    body: "Their digital marketing strategy increased our lead generation by 300% within 60 days. Data-driven results that exceeded all expectations.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Jennifer Wong",
    username: "@jenniferwong",
    body: "The UX redesign they implemented reduced our customer support tickets by 40% while improving user satisfaction scores across the board.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Alex Thompson",
    username: "@alexthompson",
    body: "Professional, reliable, and innovative. Their full-stack development capabilities helped us scale from startup to Series A in record time.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
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
    <section className="py-24 bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-900">
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
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-white dark:from-gray-900"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-white dark:from-gray-900"></div>
        </div>
      </div>
    </section>
  );
}
