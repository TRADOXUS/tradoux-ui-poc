import Link from 'next/link';
import { type Module } from '@/app/lib/types/module';
import { ProgressBar } from './progress-bar';

interface ModuleCardProps {
  module: Module;
  showCapsules?: boolean;
}

export const ModuleCard = ({ module, showCapsules = true }: ModuleCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{module.icon}</span>
          <h3 className="text-xl font-semibold">{module.title}</h3>
        </div>
        <span className="text-sm text-gray-500">{module.progress}%</span>
      </div>
      
      <ProgressBar progress={module.progress} size="sm" />
      
      <p className="text-gray-600">{module.description}</p>
      
      {showCapsules && module.capsules.length > 0 && (
        <div className="space-y-2">
          <h4 className="font-medium text-gray-700">Learning Capsules:</h4>
          <ul className="space-y-2">
            {module.capsules.map((capsule) => (
              <li key={capsule.id} className="flex items-center gap-2">
                <span 
                  className={`w-2 h-2 rounded-full ${
                    capsule.completed ? 'bg-green-500' : 'bg-gray-300'
                  }`} 
                />
                <Link 
                  href={`/modules/${module.id}/capsules/${capsule.id}`}
                  className="text-sm hover:text-blue-600 transition-colors"
                >
                  {capsule.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}; 