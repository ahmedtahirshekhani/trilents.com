import { Statistics } from "./Statistics";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src="../assets/hero-bg.png"
            alt="Trilents team working on innovative solutions"
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Trilents
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                At Trilents, we're passionate about transforming businesses through innovative digital solutions. 
                Our team of expert developers and AI specialists work collaboratively to deliver cutting-edge 
                applications, intelligent automation systems, and data-driven solutions that drive growth and 
                efficiency. We combine technical excellence with creative problem-solving to help our clients 
                stay ahead in the digital landscape.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
