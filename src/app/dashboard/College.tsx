import React, { useState } from 'react';

type StepStatus = 'completed' | 'current' | 'upcoming';

interface FormData {
  step1: {
    enterId: string;
    name: string;
    subName: string;
  };
  step2: {
    description: string;
    detail: string;
  };
  step3: {
    offeringDegrees: string;
    prospectusUrl: string;
    websiteUrl: string;
  };
  step4: {
    file: File | null;
  };
}

interface StepProgressBarProps {
  totalSteps?: number;
  initialStep?: number;
}

const College: React.FC<StepProgressBarProps> = ({ 
  totalSteps = 4, 
  initialStep = 1 
}) => {
  const [currentStep, setCurrentStep] = useState<number>(initialStep);
  const [formData, setFormData] = useState<FormData>({
    step1: { enterId: '', name: '', subName: '' },
    step2: { description: '', detail: '' },
    step3: { offeringDegrees: '', prospectusUrl: '', websiteUrl: ''  },
    step4: { file: null, }
  });

  const getStepStatus = (stepNumber: number): StepStatus => {
    if (stepNumber < currentStep) return 'completed';
    if (stepNumber === currentStep) return 'current';
    return 'upcoming';
  };

  const getStepClasses = (stepNumber: number): string => {
    const status = getStepStatus(stepNumber);
    const baseClasses = 'w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium relative z-10';
    
    switch (status) {
      case 'completed':
        return `${baseClasses} bg-teal-500 text-white`;
      case 'current':
        return `${baseClasses} bg-teal-500 text-white`;
      case 'upcoming':
        return `${baseClasses} bg-gray-200 text-gray-500 border-2 border-gray-300`;
      default:
        return baseClasses;
    }
  };

  const getConnectorClasses = (stepNumber: number): string => {
    if (stepNumber >= totalSteps) return 'hidden';
    
    const isCompleted = stepNumber < currentStep;
    return `flex-1 h-0.5 ${isCompleted ? 'bg-teal-500' : 'bg-gray-300'} mx-2`;
  };

  const handlePrevious = (): void => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNext = (): void => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const updateFormData = (step: keyof FormData, field: string, value: string | File | null): void => {
    setFormData(prev => ({
      ...prev,
      [step]: {
        ...prev[step],
        [field]: value
      }
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0] || null;
    updateFormData('step4', 'file', file);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter Id
              </label>
              <input
                type="id"
                value={formData.step1.enterId}
                onChange={(e) => updateFormData('step1', 'enterId', e.target.value)}
                placeholder="College Id..."
                className="w-full px-2 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                value={formData.step1.name}
                onChange={(e) => updateFormData('step1', 'name', e.target.value)}
                placeholder="College Name..."
                className="w-full px-2 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
             <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sub Name
              </label>
              <input
                type="text"
                value={formData.step1.subName}
                onChange={(e) => updateFormData('step1', 'subName', e.target.value)}
                placeholder="College Sub Name..."
                className="w-full px-2 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label> 
              <textarea
                value={formData.step2.description}
                onChange={(e) => updateFormData('step2', 'description', e.target.value)}
                placeholder="Description..."
                className="w-full px-3  border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                rows={2}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Detail
              </label>
              <textarea
                value={formData.step2.detail}
                onChange={(e) => updateFormData('step2', 'detail', e.target.value)}
                placeholder="Detail..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                rows={4}
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Offering Degrees
              </label>
              <select
                value={formData.step3.offeringDegrees}
                onChange={(e) => updateFormData('step3', 'offeringDegrees', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value="">Select...</option>
                <option value="search all">Search All</option>
                <option value="FSC(Pre-Engineering)">FSC(Pre-Engineering)</option>
                <option value="FSC(Pre-Medical)">FSC(Pre-Medical)</option>
                <option value="ICS(Physics)">ICS(Physics)</option>
                <option value="ICS(Statistics)">ICS(Statistics)</option>
                <option value="ICS(Economics)">ICS(Economics)</option>
                <option value="BS (BBA)">BS (BBA)</option>
                <option value="BS (Botany)">BS (Botany)</option>
                <option value="BS Chemistry (Pre-Medical)">BS Chemistry (Pre-Medical)</option>
                <option value="BS Chemistry (Pre-Engineering)">BS Chemistry (Pre-Engineering)</option>
                <option value="BS Communication Studies">BS Communication Studies</option>
                <option value="BS English">BS English</option>
                <option value="BS Physics">BS Physics</option>
                <option value="BS Economics">BS Economics</option>
                <option value="BS Education">BS Education</option>
                <option value="BS Computer Science">BS Computer Science</option>
                <option value="BS Islamic Studies">BS Islamic Studies</option>
                <option value="BS Mathematics">BS Mathematics</option>
                <option value="BS Political Science">BS Political Science</option>
                <option value="BS Sociology">BS Sociology</option>
                <option value="BS Statistics">BS Statistics</option>
                <option value="BS Urdu">BS Urdu</option>
                <option value="BS Zoology">BS Zoology</option>
                <option value="BS Geography">BS Geography</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Prospectus URL
              </label>
              <input
                type="url"
                value={formData.step3.prospectusUrl}
                onChange={(e) => updateFormData('step3', 'proppectusUrl', e.target.value)}
                placeholder="Prospectus Url..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Website URL
              </label>
              <input
                type="url"
                value={formData.step3.websiteUrl}
                onChange={(e) => updateFormData('step3', 'websiteUrl', e.target.value)}
                placeholder="Website Url..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Choose File
              </label>
              <div className="relative">
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                />
              </div>
              {formData.step4.file && (
                <p className="text-sm text-gray-600 mt-2">
                  Selected: {formData.step4.file.name}
                </p>
              )}
            </div>
          </div>
        );

      default:
        return <div>Invalid step</div>;
    }
  };

  const getStepTitle = (): string => {
    switch (currentStep) {
      case 1: return '';
      case 2: return '';
      case 3: return '';
      case 4: return '';
      default: return 'Step';
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white">
      {/* Progress Bar */}
      <div className="flex items-center justify-between mb-8">
        {Array.from({ length: totalSteps }, (_, index) => {
          const stepNumber = index + 1;
          return (
            <React.Fragment key={stepNumber}>
              <div className="flex flex-col items-center">
                <div className={getStepClasses(stepNumber)}>
                  {getStepStatus(stepNumber) === 'completed' ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    stepNumber
                  )}
                </div>
                <span className="text-xs text-gray-500 mt-1">{stepNumber}</span>
              </div>
              {stepNumber < totalSteps && (
                <div className={getConnectorClasses(stepNumber)}></div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Step Title */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">{getStepTitle()}</h2>
      </div>

      {/* Step Content */}
      {renderStepContent()}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 1}
          className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          Previous
        </button>
        
        {currentStep < totalSteps ? (
          <button
            onClick={handleNext}
            className="px-6 py-2 bg-green-400 text-white rounded-lg hover:bg-green-500 transition-colors"
          >
            Next
          </button>
        ) : (
          <button
            onClick={() => console.log('Form submitted:', formData)}
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default College;