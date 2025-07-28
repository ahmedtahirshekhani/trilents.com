import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Starter",
    popular: 0,
    price: 399,
    description:
      "Perfect for small businesses looking to establish their digital presence with essential features.",
    buttonText: "Get Started",
    benefitList: [
      "Custom Website Development",
      "Responsive Design",
      "Basic SEO Optimization",
      "3 Months Support",
      "Mobile-First Approach",
    ],
  },
  {
    title: "Professional",
    popular: 1,
    price: 999,
    description:
      "Comprehensive solution for growing businesses that need advanced features and AI integration.",
    buttonText: "Start Project",
    benefitList: [
      "Full-Stack Development", 
      "AI Integration & Automation",
      "Advanced Analytics",
      "6 Months Premium Support",
      "Cloud Deployment",
      "API Development",
    ],
  },
  {
    title: "Enterprise",
    popular: 0,
    price: 1999,
    description:
      "Complete digital transformation package with custom AI solutions and dedicated support.",
    buttonText: "Contact Us",
    benefitList: [
      "Custom AI Solutions",
      "Scalable Architecture",
      "Dedicated Project Manager",
      "12 Months Enterprise Support",
      "Advanced Security Features",
      "Performance Optimization",
    ],
  },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Choose Your
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Digital Transformation{" "}
        </span>
        Package
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Flexible pricing options designed to scale with your business needs and growth objectives.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                    Most popular
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">${pricing.price}</span>
                <span className="text-muted-foreground"> /project</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <a
                href="#contact"
                className={`w-full ${buttonVariants({
                  variant: "default",
                })}`}
              >
                {pricing.buttonText}
              </a>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex"
                  >
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
