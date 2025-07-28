import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Discovery & Planning",
    description:
      "We analyze your requirements, understand your goals, and create a comprehensive roadmap for your digital solution.",
  },
  {
    icon: <MapIcon />,
    title: "Design & Development",
    description:
      "Our expert team designs user-centric interfaces and develops robust, scalable solutions using cutting-edge technologies.",
  },
  {
    icon: <PlaneIcon />,
    title: "Testing & Deployment",
    description:
      "Rigorous testing ensures quality and performance before we deploy your solution to production environments.",
  },
  {
    icon: <GiftIcon />,
    title: "Support & Optimization",
    description:
      "Ongoing support, maintenance, and continuous optimization to ensure your solution evolves with your business needs.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Our{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Process{" "}
        </span>
        From Concept to Launch
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        A proven methodology that ensures successful delivery of your digital solutions 
        from initial concept to final deployment and beyond.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
