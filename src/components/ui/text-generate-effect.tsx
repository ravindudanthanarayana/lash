import React, { useEffect, useState } from 'react';

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}

export const TextGenerateEffect: React.FC<TextGenerateEffectProps> = ({
  words,
  className = "",
  filter = true,
  duration = 0.5,
}) => {
  const [scope, setScope] = useState<HTMLDivElement | null>(null);
  const wordsArray = words.split(' ');

  useEffect(() => {
    if (scope) {
      const elements = scope.querySelectorAll('.word');
      elements.forEach((element, idx) => {
        setTimeout(() => {
          element.classList.add('opacity-100');
          if (filter) {
            element.classList.remove('blur-sm');
          }
        }, idx * 100);
      });
    }
  }, [scope, filter]);

  const renderWords = () => {
    return (
      <div ref={setScope}>
        {wordsArray.map((word, idx) => (
          <span
            key={word + idx}
            className={`word opacity-0 transition-all duration-500 ${
              filter ? 'blur-sm' : ''
            }`}
          >
            {word}{' '}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className={className}>
      <div className="text-white leading-snug tracking-wide">
        {renderWords()}
      </div>
    </div>
  );
};
