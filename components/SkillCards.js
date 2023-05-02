import SkillCard from "./SkillCard";

const cards = [
  {
    icon: "frontend",
    headerText: "Frontend Developer",
    bodyText:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ab ex fugiat sit fugit odio",
    langList: ["HTML", "CSS", "Javascript"],
    techList: ["Next.js", "React.js", "Bootstrap", "Tailwind CSS", "Firebase"],
    devTools: ["VS Code", "Terminal", "Git", "Github", "Vim"],
  },
  {
    icon: "backend",
    headerText: "Backend Developer",
    bodyText:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius abex fugiat sit fugit odio",
    langList: ["Javascript", "Node.js", "SQL", "NoSQL"],
    techList: ["Express.js", "MySQL", "MongoDB", "Pug", "EJS"],
    devTools: ["VS Code", "Terminal", "Git", "Github", "Vim"],
  },
];

export default function SkillCards() {
  return (
    <div className="border rounded-xl bg-white drop-shadow-md">
      <SkillCard data={cards[0]} />
      <SkillCard data={cards[1]} last={true} />
    </div>
  );
}
