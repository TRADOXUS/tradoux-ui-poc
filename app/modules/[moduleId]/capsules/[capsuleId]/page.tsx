"use client";

import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';
import { modules } from '../../../../lib/data/modules';

export default function CapsulePage() {
  const params = useParams();
  const moduleId = Number.parseInt(params.moduleId as string);
  const capsuleId = Number.parseInt(params.capsuleId as string);
  
  const currentModule = modules.find(m => m.id === moduleId);
  const capsule = currentModule?.capsules.find(c => c.id === capsuleId);

  if (!currentModule || !capsule) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Navigation */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/modules" className="hover:text-blue-600">
            Modules
          </Link>
          <span>→</span>
          <Link href={`/modules/${currentModule.id}`} className="hover:text-blue-600">
            {currentModule.title}
          </Link>
          <span>→</span>
          <span className="text-gray-900">{capsule.title}</span>
        </nav>

        {/* Capsule Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold">{capsule.title}</h1>
                <span 
                  className={`px-3 py-1 rounded-full text-sm ${
                    capsule.completed 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {capsule.completed ? 'Completed' : 'In Progress'}
                </span>
              </div>
              {capsule.content && (
                <div className="prose max-w-none">
                  <p>{capsule.content}</p>
                </div>
              )}
            </div>

            {/* Examples */}
            {capsule.examples && capsule.examples.length > 0 && (
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-bold mb-6">Examples</h2>
                <div className="space-y-4">
                  {capsule.examples.map((example) => (
                    <div 
                      key={`example-${example.substring(0, 20)}`}
                      className="p-4 bg-gray-50 rounded-lg border border-gray-100"
                    >
                      <p>{example}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Exercises */}
            {capsule.exercises && capsule.exercises.length > 0 && (
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-bold mb-6">Exercises</h2>
                <div className="space-y-8">
                  {capsule.exercises.map((exercise) => (
                    <div 
                      key={`exercise-${exercise.question.substring(0, 20)}`} 
                      className="space-y-4"
                    >
                      <h3 className="text-lg font-medium">
                        {exercise.question}
                      </h3>
                      {exercise.options && (
                        <div className="space-y-2">
                          {exercise.options.map((option) => (
                            <label 
                              key={`option-${option.substring(0, 20)}`}
                              className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer"
                            >
                              <input 
                                type="radio" 
                                name={`question-${exercise.question.substring(0, 20)}`}
                                className="w-4 h-4 text-blue-600"
                              />
                              <span>{option}</span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Module Progress */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Module Progress</h2>
              <div className="space-y-4">
                {currentModule.capsules.map((cap) => (
                  <Link
                    key={cap.id}
                    href={`/modules/${currentModule.id}/capsules/${cap.id}`}
                    className={`block p-3 rounded-lg ${
                      cap.id === capsule.id 
                        ? 'bg-blue-50 border-blue-200' 
                        : 'hover:bg-gray-50'
                    } border transition-colors`}
                  >
                    <div className="flex items-center gap-3">
                      <span 
                        className={`w-2 h-2 rounded-full ${
                          cap.completed ? 'bg-green-500' : 'bg-gray-300'
                        }`}
                      />
                      <span className={cap.id === capsule.id ? 'font-medium' : ''}>
                        {cap.title}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 