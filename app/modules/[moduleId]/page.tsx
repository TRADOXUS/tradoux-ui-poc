import { notFound } from 'next/navigation';
import { modules } from '../../lib/data/modules';
import { ProgressBar } from '../../components/ui/progress-bar';
import Link from 'next/link';

interface ModulePageProps {
  params: {
    moduleId: string;
  };
}

export default function ModulePage({ params }: ModulePageProps) {
  const moduleId = parseInt(params.moduleId);
  const module = modules.find(m => m.id === moduleId);

  if (!module) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Module Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <span className="text-4xl">{module.icon}</span>
              <div>
                <h1 className="text-3xl font-bold mb-2">{module.title}</h1>
                <p className="text-gray-600">{module.description}</p>
              </div>
            </div>
            <Link 
              href="/modules"
              className="text-sm text-gray-500 hover:text-blue-600"
            >
              ← Back to Modules
            </Link>
          </div>
          
          <div className="flex items-center gap-3 mb-2">
            <span className="text-lg font-medium">Module Progress</span>
            <span className="text-gray-500">{module.progress}% Complete</span>
          </div>
          <ProgressBar progress={module.progress} size="lg" showLabel />
        </div>

        {/* Capsules List */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold mb-6">Learning Capsules</h2>
          <div className="space-y-4">
            {module.capsules.map((capsule) => (
              <Link
                key={capsule.id}
                href={`/modules/${module.id}/capsules/${capsule.id}`}
                className="block p-4 rounded-lg border border-gray-200 hover:border-blue-200 hover:bg-blue-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span 
                      className={`w-3 h-3 rounded-full ${
                        capsule.completed ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                    />
                    <h3 className="font-medium">{capsule.title}</h3>
                  </div>
                  <span className="text-gray-400">
                    {capsule.completed ? 'Completed' : 'In Progress'}
                  </span>
                </div>
                {capsule.content && (
                  <p className="mt-2 text-sm text-gray-600 pl-6">
                    {capsule.content.substring(0, 120)}...
                  </p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 