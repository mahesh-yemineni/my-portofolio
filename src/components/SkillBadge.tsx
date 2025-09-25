interface SkillBadgeProps {
  name: string;
  level?: 'expert' | 'advanced' | 'intermediate' | 'beginner';
  isPremium?: boolean;
  icon?: string;
  delay?: number;
}

const SkillBadge = ({ name, level = 'intermediate', isPremium = false, icon, delay = 0 }: SkillBadgeProps) => {
  const getLevelStyles = (level: string, isPremium: boolean) => {
    if (isPremium) {
      return 'skill-tag-premium shadow-lg border-0';
    }
    
    switch (level) {
      case 'expert':
        return 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100';
      case 'advanced':
        return 'bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100';
      case 'intermediate':
        return 'skill-tag border border-blue-100 hover:bg-blue-50';
      case 'beginner':
        return 'bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100';
      default:
        return 'skill-tag border border-blue-100 hover:bg-blue-50';
    }
  };

  const getLevelIcon = (level: string) => {
    switch (level) {
      case 'expert':
        return '🌟';
      case 'advanced':
        return '⚡';
      case 'intermediate':
        return '📈';
      case 'beginner':
        return '🌱';
      default:
        return '📊';
    }
  };

  return (
    <div 
      className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default scale-in ${getLevelStyles(level, isPremium)}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {!icon && !isPremium && <span className="mr-2">{getLevelIcon(level)}</span>}
      {name}
      {isPremium && <span className="ml-2">✨</span>}
    </div>
  );
};

export default SkillBadge;