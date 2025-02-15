import { modules } from '../lib/data/modules';
import { ProgressBar } from '../components/ui/progress-bar';
import { ModuleCard } from '../components/ui/module-card';

export default function ModulesPage() {
  // Calculate overall progress
  const overallProgress = Math.round(
    modules.reduce((acc, module) => acc + module.progress, 0) / modules.length
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header with overall progress */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Your Learning Progress</h1>
            <span className="text-lg font-medium text-gray-600">
              {overallProgress}% Complete
            </span>
          </div>
          <ProgressBar progress={overallProgress} size="lg" showLabel />
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </div>
    </div>
  );
} 