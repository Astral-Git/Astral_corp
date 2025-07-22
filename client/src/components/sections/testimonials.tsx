import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const testimonials = [
  {
    name: "Priya Sharma",
    username: "@priyasharma",
    body: "ASTRAL transformed our e-commerce platform, increasing conversion rates by 180%. Their technical expertise and strategic approach delivered exceptional ROI.",
    img: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Arjun Patel",
    username: "@arjunpatel",
    body: "The brand identity they created perfectly captures our company vision. Our customer engagement increased 150% after the rebrand launch.",
    img: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Kavya Reddy",
    username: "@kavyareddy",
    body: "Outstanding project management and technical delivery. They delivered our IoT solution ahead of schedule with zero post-launch issues.",
    img: "https://images.unsplash.com/photo-1506629905061-6667dcd8f417?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Rohan Gupta",
    username: "@rohangupta",
    body: "Their digital marketing strategy increased our lead generation by 300% within 60 days. Data-driven results that exceeded all expectations.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Ananya Singh",
    username: "@ananyasingh",
    body: "The UX redesign they implemented reduced our customer support tickets by 40% while improving user satisfaction scores across the board.",
    img: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Vikram Mehta",
    username: "@vikrammehta",
    body: "Professional, reliable, and innovative. Their full-stack development capabilities helped us scale from startup to Series A in record time.",
    img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Sneha Joshi",
    username: "@snehajoshi",
    body: "Their 3D CAD modeling expertise brought our product vision to life. The precision and attention to detail exceeded industry standards.",
    img: "https://images.unsplash.com/photo-1494790108755-2616b612b641?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Aditya Kumar",
    username: "@adityakumar",
    body: "Working with ASTRAL was transformative for our startup. Their holistic approach to digital strategy accelerated our growth by 250%.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
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
        "relative h-full w-72 sm:w-80 md:w-96 cursor-pointer overflow-hidden rounded-xl border p-6",
        "bg-white/90 backdrop-blur-sm border-gray-200/50 hover:bg-white hover:shadow-lg hover:border-orange-200",
        "dark:bg-gray-800/80 dark:border-gray-700/50 dark:hover:bg-gray-800 dark:hover:border-orange-400/30",
        "shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-orange-50/30 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
      )}
    >
      <div className="relative z-10">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              className="rounded-full w-12 h-12 object-cover border-2 border-orange-200 dark:border-orange-400/30"
              alt={name}
              src={img}
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
          </div>
          <div>
            <figcaption className="text-sm font-bold text-gray-900 dark:text-white">
              {name}
            </figcaption>
            <p className="text-xs text-orange-600 dark:text-orange-400 font-medium">{username}</p>
          </div>
        </div>
        <blockquote className="mt-5 text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
          "{body}"
        </blockquote>
      </div>
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

        <div className="relative flex flex-col gap-6 overflow-hidden">
          <Marquee pauseOnHover className="[--duration:30s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:35s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>

          {/* Enhanced gradient fading edges with Indian color theme */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 dark:to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 dark:to-transparent"></div>
        </div>
      </div>
    </section>
  );
}