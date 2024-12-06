import React from "react";
import homeBanner from '../assets/home_banner.webp';
export const Home = () => {
  return (
    <div>
      <div className="home_container relative bg-white h-[700px]">
      <img src={homeBanner} alt="" />
        <p className="absolute text-white text-4xl font-bold top-[250px] left-[850px]">
          Unleash Your True Potential
        </p>
        <p className="absolute text-white text-4xl font-bold top-[400px] left-[850px]">Get Tailormade solution for your fitness goals</p>
      </div>
      <div className="flex flex-wrap justify-center items-center mt-5">
        <div className="flex flex-col items-start p-5 space-y-4">
          <p className="text-brown-700 font-bold text-xl">
            <span>Set Goals.</span>
          </p>
          <p className="text-brown-700 font-bold text-xl">
            <span>Log Workouts.</span>
          </p>
          <p className="text-brown-700 font-bold text-xl">
            <span>Stay On Track.</span>
          </p>
        </div>
        <div className="flex flex-col items-start p-5">
          <p className="text-darkslateblue-700 font-bold text-lg">
            Easily track your Workouts, set Training Plans, and discover new
            Workout Routines to crush your goals.
          </p>
        </div>
        {
          <>
            <button className="p-2 border-none bg-[#373837] text-white text-lg font-medium rounded-md cursor-pointer hover:bg-[#080808]">
             Start Today
            </button>
          </>
        }
      </div>
      <div className="flex justify-center items-center mt-10">
        <div className="w-full md:w-1/2">
          <picture>
            <source
              srcSet="https://mapmy.uastatic.com/aaeb86964c6a02e68784d45e76637d9c.webp"
              media="(min-width: 1485px)"
            />
            <source
              srcSet="https://mapmy.uastatic.com/aaeb86964c6a02e68784d45e76637d9c.webp"
              media="(min-width: 1024px)"
            />
            <source
              srcSet="https://mapmy.uastatic.com/d0f81f0292499c577430d91a4e96e271.webp"
              media="(min-width: 768px)"
            />
            <source
              srcSet="https://mapmy.uastatic.com/04117f75e461640c913d37545efaa058.webp"
              media="(min-width: 388px)"
            />
            <source
              srcSet="https://mapmy.uastatic.com/009843efdfc44aa223132e6db8adbedc.webp"
              media="(min-width: 0px)"
            />
            <img
              alt="Set goals, Log Workouts, Stay on Track"
              src="https://mapmy.uastatic.com/04117f75e461640c913d37545efaa058.webp"
              className="w-full"
              loading="lazy"
            />
          </picture>
        </div>
      </div>
      {/* features */}
      <section className="py-16 bg-blue-50 mt-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF8PNBRkGJ9IlEaJe5YKBpW9TU35r4Y_snwA&s" alt="Track Workouts" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">Track Your Workouts</h3>
              <p>Monitor your progress with detailed workout logs and performance tracking.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="https://www.puregym.com/media/ouap4a5a/bodyweight.jpg?quality=80" alt="Set Goals" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">Set Goals</h3>
              <p>Set achievable fitness goals and stay motivated as you reach each milestone.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="https://assets.clevelandclinic.org/transform/014c0cf0-b09f-4254-b16b-2618b90ffbf7/using-weight-machine-gym-588683031" alt="Stay Motivated" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">Stay Motivated</h3>
              <p>Get personalized tips and motivational quotes to keep you going!</p>
            </div>
          </div>
        </div>
      </section>
      {/* //test */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-8">What Our Users Say</h2>
        <div className="flex justify-center gap-8 flex-wrap">
          <div className="max-w-sm p-6 bg-gray-100 rounded-lg shadow-lg">
            <p className="text-lg italic">"This app helped me stay on track with my fitness goals. I love the workout tracking feature!"</p>
            <p className="mt-4 text-lg font-semibold">John Doe</p>
            <p>Fitness Enthusiast</p>
          </div>
          <div className="max-w-sm p-6 bg-gray-100 rounded-lg shadow-lg">
            <p className="text-lg italic">"I achieved my weight loss goal thanks to the personalized tips and progress tracking."</p>
            <p className="mt-4 text-lg font-semibold">Jane Smith</p>
            <p>Weight Loss Journey</p>
          </div>
          <div className="max-w-sm p-6 bg-gray-100 rounded-lg shadow-lg">
            <p className="text-lg italic">"The app's motivation and goal-setting features keep me committed to my fitness routine!"</p>
            <p className="mt-4 text-lg font-semibold">Robert Brown</p>
            <p>Committed to Health</p>
          </div>
        </div>
      </section>
      {/* last */}
      <section className="py-16 bg-black text-white text-center">
        <h2 className="text-3xl font-semibold mb-6">Start Your Fitness Journey Today</h2>
        <p className="text-lg mb-8">Join thousands of others who are transforming their lives with our fitness tracking platform.</p>
        <button className="bg-white text-black py-2 px-6 rounded-lg text-lg hover:bg-gray-200">
          Get Started
        </button>
      </section>
    </div>
  );
};

