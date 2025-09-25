import { useEffect, useState } from "react";

interface SkillBarProps {
  name: string;
  level: number; // 0-100
  category?: string;
  delay?: number;
}

const SkillBar = ({ name, level, category, delay = 0 }: SkillBarProps) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedLevel(level);
    }, delay);

    return () => clearTimeout(timer);
  }, [level, delay]);

  const getCategoryColor = (category?: string) => {
    switch (category) {
      case 'expert':
        return 'from-emerald-500 to-green-600';
      case 'advanced':
        return 'from-blue-500 to-indigo-600';
      case 'intermediate':
        return 'from-amber-500 to-orange-600';
      default:
        return 'from-blue-500 to-indigo-600';
    }
  };

  const getLevelText = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 75) return 'Advanced';
    if (level >= 60) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <h4 className="font-medium text-foreground">{name}</h4>
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
            level >= 90 ? 'bg-emerald-100 text-emerald-800' :
            level >= 75 ? 'bg-blue-100 text-blue-800' :
            level >= 60 ? 'bg-amber-100 text-amber-800' :
            'bg-gray-100 text-gray-800'
          }`}>
            {getLevelText(level)}
          </span>
        </div>
        <span className="text-sm font-semibold text-muted-foreground">
          {level}%
        </span>
      </div>
      
      <div className="skill-progress h-3 rounded-full">
        <div 
          className={`skill-progress-fill rounded-full transition-all duration-1500 ease-out bg-gradient-to-r ${getCategoryColor(category)}`}
          style={{ width: `${animatedLevel}%` }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;