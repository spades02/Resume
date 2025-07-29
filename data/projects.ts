export interface Project {
  name: string;
  description: string;
  repo: string;
  stars?: number;
  language?: string;
}

const projects: Project[] = [
  {
    name: "DocVerify",
    description: "A blockchain-based document verification system using Solidity and Next.js.",
    repo: "https://github.com/spades02/docverify",
    language: "Solidity, Next.js, Tailwind CSS",
  },
  {
    name: "Millow",
    description: "A decentralized real estate web application leveraging the use of ERC-721 Token Standards for Real World Properties",
    repo: "https://github.com/spades02/millow",
    language: "React.js, Tailwind CSS, Solidity",
  },
  {
    name: "AutoLMS",
    description: "An AI application that generates educational resources for users who upload their lecture videos as input.",
    repo: "https://github.com/spades02/autolms",
    language: "Next.js, Tailwind CSS, OpenAI API",
  },{
    name: "Resume",
    description: "Dynamic Resume created using NEXT JS and Tailwind CSS",
    repo: "https://github.com/spades02/resume",
    language: "Next.js, Tailwind CSS",
  },
];

export default projects;
