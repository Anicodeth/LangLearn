import React from "react";
import { Button } from "@/components/ui/button";
import hero from "../assets/hero.png";
import headline_curve from "../assets/headline_curve.png";
import langlearn2 from "../assets/langlearn2.png";
import feature_check from "../assets/feature-check.png";
import certificate from "../assets/certificate.png";
import feature_streak from "../assets/feature-streak.png";
import feature_speaker from "../assets/feature-speaker.png"
import  feature_lingot from "../assets/feature-lingot.png"
import Image from "next/image";
const AppBar = () => {
  return (
    <>
      <header className="bg-white py-4 px-4 text-slate-500 mx-24 flex justify-between items-center">
        <div className="text-xl font-bold">
          <span className="text-black">Lang</span>
          <span className="text-sky-600">learn</span>
        </div>
        <nav className="flex space-x-8">
          {" "}
          {/* Removed unnecessary classes */}
          <a href="/" className="hover:text-black">
            Home
          </a>
          <a href="/courses" className="hover:text-black">
            Chat
          </a>
          <a href="/testimonials" className="hover:text-black">
            Profile
          </a>
          <a href="/mentors" className="hover:text-black">
            Quiz
          </a>
          <a href="/mentors" className="hover:text-black">
            Learn
          </a>
        </nav>
        <nav className="flex space-x-4">
          <a href="/signin" className="hover:text-black">
            Sign In
          </a>
          <a href="/signup" className="hover:text-black">
            Sign Up
          </a>
        </nav>
      </header>
      <main className="flex mt-16 pl-3.5">
        <section className="flex flex-col max-w-full">
          {" "}
          {/* Left side: content in a column */}
          <h1 className="text-5xl font-bold font-canin pt-16">
            <span className="text-teal-700">Improve</span> your skill
          </h1>
          <div className="mt-1">
            <Image src={headline_curve} alt="My SVG Icon" className="w-52" />
          </div>
          <div className="ml-8">
            <h1 className="text-6xl font-bold font-canin">with langlearn</h1>
          </div>
          <div className="mt-12">
            <p>
              Let's take an online course to improve your skills in different
              ways.
            </p>
          </div>
          <div className="mt-1">
            <p>
              You can set your own study time according to your learning speed.
            </p>
          </div>
          <div className="mt-1">
            <p>So you can study comfortably and absorb the material easily.</p>
          </div>
          <div>
            <Button className="mt-8 ml-32 w-32">Get started</Button>
          </div>
        </section>
        <aside className="max-w-38 flex justify-end pl-18">
          {" "}
          {/* Right side: image as aside */}
          <Image
            src={hero}
            alt="Home Hero"
            className="h-full w-2/3 self-center"
          />
        </aside>
      </main>
      <section className="h-screen">
        <div>
          <div className="overflow-y-scroll min-h-screen ">
            <div className="why-langlearn-section-block flex justify-center items-center p-10 max-w-screen-lg min-h-[225px] border-b-2 border-gray-300 mx-auto">
              <div className="block-1-image-container flex justify-center items-center w-[185px] h-full">
                <Image src={langlearn2} alt="Image" className="w-10/12" />
              </div>
              <div className="block-1-content-container p-2 w-[728px] h-full">
                <h1 className="text-3xl font-bold mb-2">
                  The best new way to learn a language.
                </h1>
                <span className="text-gray-700">
                  Learning with Langlearn is fun and addictive. Earn points for
                  correct answers, race against the clock, and level up. Our
                  bite-sized lessons are effective, and we have proof that it
                  works.
                </span>
              </div>
            </div>
            <div className="langlearn-gamification-block flex justify-center items-center flex-col p-10 max-w-screen-lg min-h-[225px] border-b-2 border-gray-300 mx-auto">
              <h1 className="langlearn-gamification-title mb-8">
                Gamification poured into every lesson.
              </h1>
              <div className="langlearn-gamification-block-one-third-container flex w-full h-full">
                <div className="langlearn-gamification-block-one-third double flex flex-col justify-center items-center w-1/3 h-full">
                  <div className="langlearn-gamification-block-one-third-item flex h-1/2 w-full">
                    <Image
                      src={feature_speaker}
                      alt="image"
                      className="w-16 h-16"
                    />
                    <div className="langlearn-gamification-block-one-third-item-info">
                      <h2 className="text-xl font-semibold">
                        Personalized learning
                      </h2>
                      <p className="text-gray-700 mt-2">
                        Langlearn lessons adapt to your learning style.
                        Exercises are tailored to help you learn and review
                        vocabulary effectively.
                      </p>
                    </div>
                  </div>
                  <div className="langlearn-gamification-block-one-third-item flex h-1/2 w-full">
                    <Image
                      src={feature_check}
                      alt="image"
                      className="w-16 h-16"
                    />
                    <div className="langlearn-gamification-block-one-third-item-info">
                      <h2 className="text-xl font-semibold">
                        Receive immediate grading
                      </h2>
                      <p className="text-gray-700 mt-2">
                        Instantly see which answers you get correct. When you
                        miss a challenge, we'll quickly show you how to improve.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="langlearn-gamification-block-one-third center flex justify-center items-center w-1/3 h-full">
                  <Image src={certificate} alt="laptop" className="w-48 h-48" />
                </div>
                <div className="langlearn-gamification-block-one-third double flex flex-col justify-center items-center w-1/3 h-full">
                  <div className="langlearn-gamification-block-one-third-item flex h-1/2 w-full">
                    <Image
                      src={feature_lingot}
                      alt="lingot"
                      className="w-16 h-16"
                    />
                    <div className="langlearn-gamification-block-one-third-item-info">
                      <h2 className="text-xl font-semibold">
                        Stay motivated 
                      </h2>
                      <p className="text-gray-700 mt-2">
                        Earn virtual coins, unlock new levels, and watch your
                        fluency score rise as you master new words, phrases, and
                        grammar.
                      </p>
                    </div>
                  </div>
                  <div className="langlearn-gamification-block-one-third-item flex h-1/2 w-full">
                    <Image
                      src={feature_streak}
                      alt="streak"
                      className="w-16 h-16"
                    />
                    <div className="langlearn-gamification-block-one-third-item-info">
                      <h2 className="text-xl font-semibold">Improve quickly</h2>
                      <p className="text-gray-700 mt-2">
                        Langlearn works. <br></br> 34 hours of Langlearn are
                        equal to 1 university semester of language courses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppBar;
