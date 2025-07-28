import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Sarah Johnson",
    userName: "@sarahjtech",
    comment: "Trilents transformed our e-commerce platform with AI-driven recommendations. Sales increased by 40% in just 3 months!",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Michael Chen",
    userName: "@mchen_dev",
    comment:
      "The mobile app they developed exceeded our expectations. The user interface is intuitive and the performance is outstanding. Highly recommended!",
  },

  {
    image: "https://github.com/shadcn.png",
    name: "Emily Rodriguez",
    userName: "@emily_startup",
    comment:
      "Working with Trilents was a game-changer for our startup. Their AI automation solutions saved us countless hours and improved our workflow efficiency dramatically.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "David Thompson",
    userName: "@dthompson_cto",
    comment:
      "Exceptional development team! They delivered a scalable web application that handles our growing user base seamlessly. Professional, timely, and innovative.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Lisa Park",
    userName: "@lisakpark",
    comment:
      "The AI chatbot integration has revolutionized our customer service. Response times decreased by 80% while customer satisfaction increased significantly.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "James Wilson",
    userName: "@jwilson_ops",
    comment:
      "Trilents' cloud migration services were flawless. They modernized our entire infrastructure with zero downtime and improved our system performance by 200%.",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Clients Choose{" "}
        </span>
        Trilents
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Real success stories from businesses that have transformed their digital presence 
        with our innovative development and AI solutions.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
