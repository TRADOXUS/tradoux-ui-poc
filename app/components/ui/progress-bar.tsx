interface ProgressBarProps {
  progress: number;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export const ProgressBar = ({ 
  progress, 
  size = 'md', 
  showLabel = false 
}: ProgressBarProps) => {
  const heights = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4'
  };

  return (
    <div className="w-full flex items-center gap-2">
      <div className={`flex-grow bg-gray-200 rounded-full ${heights[size]}`}>
        <div
          className={`bg-blue-600 rounded-full transition-all duration-500 ${heights[size]}`}
          style={{ width: `${progress}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-sm text-gray-600 min-w-[3rem]">
          {progress}%
        </span>
      )}
    </div>
  );
}; 