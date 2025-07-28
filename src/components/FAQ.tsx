import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What types of digital solutions does Trilents offer?",
    answer: "Trilents specializes in web development, mobile app development, AI solutions, cloud services, and custom software development. We create scalable, modern applications tailored to your business needs.",
    value: "item-1",
  },
  {
    question: "How does Trilents integrate AI into business solutions?",
    answer:
      "We develop custom AI solutions including chatbots, machine learning models, automation systems, and data analytics platforms. Our AI integrations help streamline processes, improve decision-making, and enhance user experiences.",
    value: "item-2",
  },
  {
    question:
      "What is the typical timeline for a development project?",
    answer:
      "Project timelines vary based on complexity and scope. Simple websites take 2-4 weeks, while complex applications can take 2-6 months. We provide detailed timelines during our initial consultation.",
    value: "item-3",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes! We offer comprehensive support packages including maintenance, updates, security monitoring, and technical assistance. Our support plans range from 3 months to ongoing enterprise-level support.",
    value: "item-4",
  },
  {
    question:
      "Can Trilents help migrate our existing systems to the cloud?",
    answer:
      "Absolutely! We specialize in cloud migration services, helping businesses transition to platforms like AWS, Azure, and Google Cloud. We ensure minimal downtime and improved performance during the migration process.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
