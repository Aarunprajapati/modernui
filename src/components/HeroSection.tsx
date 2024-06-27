import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className="relative w-full flex items-center justify-center h-auto md:h-[40rem] overflow-hidden mx-auto rounded-md py-10 md:py-0 px-10 md:px-0 ">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <Spotlight
        className="-top-40 -left-0 md:-left-20 md:-top-20"
        fill="blue"
      />

      <div className="relative w-full z-[10] text-center">
        <h1 className="font-bold text-4xl mt-20 md:mt-0 bg-clip-text text-transparent md:text-7xl bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of music
        </h1>
        <p className=" mt-4 font-normal text-sm md:text-lg max-w-lg mx-auto text-neutral-300  ">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether youre a beginner or looking to refine your
          skills, join us to unlock your true potential.
        </p>
        <div className="mt-4">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
