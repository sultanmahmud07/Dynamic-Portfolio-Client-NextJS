import codeIcon from "@@/home/achivment/project.png";
import projectIcon from "@@/home/achivment/experiance.png";
import experienceIcon from "@@/home/achivment/client.png";
import clientIcon from "@@/home/achivment/stafe.png";
import CounterCard from "./CounterCard";

const MyAchievement = () => {
  const counterData = [
    {
      logo: codeIcon,
      countNumber: 120, // number only
      name: "Completed Projects",
    },
    {
      logo: projectIcon,
      countNumber: 8,
      name: "Years of Experience",
    },
    {
      logo: experienceIcon,
      countNumber: 40,
      name: "Happy Clients",
    },
    {
      logo: clientIcon,
      countNumber: 15,
      name: "Tech Stacks Mastered",
    },
  ];

  return (
    <section id="myAchievement" className="py-5 lg:py-16 my-10">
      <div className="main-container">
        <div className="md:flex grid grid-cols-2 gap-6 justify-between items-center">
          {counterData.map((data, i) => (
            <CounterCard key={i} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyAchievement;
