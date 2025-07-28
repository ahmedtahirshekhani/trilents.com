import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import aiTech from "../assets/ai-tech.png";
import webDev from "../assets/web-dev.png";
import mobileDev from "../assets/expert-team.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "AI-Powered Solutions",
    description:
      "Leverage cutting-edge artificial intelligence to automate processes, gain insights, and enhance user experiences across your digital ecosystem.",
    image: aiTech,
  },
  {
    title: "Scalable Architecture",
    description:
      "Build robust applications with modern, scalable architectures that grow with your business and handle increasing demands effortlessly.",
    image: webDev,
  },
  {
    title: "Expert Development",
    description:
      "Our team of experienced developers uses the latest technologies and best practices to deliver high-quality, maintainable solutions.",
    image: mobileDev,
  },
];

const featureList: string[] = [
  "AI Integration",
  "Cloud Solutions",
  "Mobile Development",
  "Web Applications", 
  "Data Analytics",
  "API Development",
  "DevOps & Deployment",
  "Security & Compliance",
  "24/7 Support",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Powerful{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Technology Features
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
