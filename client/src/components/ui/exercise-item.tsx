import { useState } from "react";

interface ExerciseItemProps {
  id: string;
  question: string;
  choices: string[];
  correctAnswer: string;
  correctFeedback: string;
  incorrectFeedback: string;
}

export function ExerciseItem({
  id,
  question,
  choices,
  correctAnswer,
  correctFeedback,
  incorrectFeedback
}: ExerciseItemProps) {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleChoiceSelect = (choice: string) => {
    if (isAnswered) return;
    
    setSelectedChoice(choice);
    setIsAnswered(true);
  };

  const isCorrect = selectedChoice === correctAnswer;

  return (
    <div className="mb-6 p-5 bg-white rounded-lg border border-neutral-100 shadow-sm">
      <p className="mb-3 text-lg font-medium" dangerouslySetInnerHTML={{ __html: question }}></p>
      
      <div className="mt-3 flex flex-wrap gap-3">
        {choices.map((choice) => (
          <button
            key={choice}
            onClick={() => handleChoiceSelect(choice)}
            disabled={isAnswered}
            className={`px-4 py-2 text-base rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 ${
              isAnswered
                ? choice === correctAnswer
                  ? "bg-correct text-white shadow-sm"
                  : selectedChoice === choice
                  ? "bg-incorrect text-white shadow-sm"
                  : "opacity-50 bg-neutral-100 text-neutral-500"
                : "bg-neutral-50 text-neutral-800 hover:bg-neutral-100"
            }`}
          >
            {choice}
          </button>
        ))}
      </div>

      {isAnswered && (
        <div className="mt-4 p-3 rounded-lg border-l-4 bg-opacity-5 transition-all">
          {isCorrect ? (
            <div className="border-correct bg-correct bg-opacity-5 rounded-lg p-3">
              <p className="text-correct flex items-center font-medium">
                <span className="bg-correct text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 text-sm">✓</span> 
                {correctFeedback}
              </p>
            </div>
          ) : (
            <div className="border-incorrect bg-incorrect bg-opacity-5 rounded-lg p-3">
              <p className="text-incorrect flex items-center font-medium">
                <span className="bg-incorrect text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 text-sm">✗</span> 
                {incorrectFeedback}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
