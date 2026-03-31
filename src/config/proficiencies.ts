// Proficiency configuration supporting both skills with percentages and technologies/tools

export interface SkillProficiency {
  type: "skill";
  name: string;
  percentage: number;
}

export interface TechnologyBadge {
  type: "technology";
  name: string;
}

export type ProficiencyItem = SkillProficiency | TechnologyBadge;

export const proficienciesConfig = {
  skills: [
    { type: "skill" as const, name: "Python", percentage: 95 },
    { type: "skill" as const, name: "C++", percentage: 92 },
    { type: "skill" as const, name: "MATLAB", percentage: 88 },
    { type: "skill" as const, name: "PyTorch", percentage: 90 },
    { type: "skill" as const, name: "TensorFlow", percentage: 87 },
  ] as SkillProficiency[],

  skillCategories: [
    {
      category: "Programming Languages",
      items: ["Python (Proficient)", "MATLAB (Advanced)", "C++", "Bash"]
    },
    {
      category: "AI & Robotics",
      items: ["TensorFlow", "Scikit-Learn", "ROS", "Pandas", "NumPy", "OpenCV"]
    },
    {
      category: "Mathematical & Statistical Tools",
      items: ["Optimization", "Linear Algebra", "Partial Differential Equations", "Data Analysis", "Problem Solving", "Computer Sciences", "FEniCS"]
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "Docker", "Linux/Unix", "LaTeX", "Raspberry Pi", "Arduino", "NVIDIA Jetson"]
    },
    {
      category: "Languages",
      items: ["Spanish (Native)", "English (Fluent)", "German & Portuguese (Beginner)"]
    }
  ],

  technologies: [] as TechnologyBadge[],
};
