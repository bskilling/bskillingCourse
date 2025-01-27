import { useState, useRef, useEffect } from 'react';

interface ShowMoreTextProps {
  text: string;
}

const ShowMoreText: React.FC<ShowMoreTextProps> = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const { offsetHeight, scrollHeight } = textRef.current;
      setIsTruncated(scrollHeight > offsetHeight); // Check if content overflows
    }
  }, [text]);

  return (
    <div className="text-gray-800">
      <p
        ref={textRef}
        className={`${
          isExpanded ? '' : 'line-clamp-2'
        } overflow-hidden text-ellipsis`}
      >
        {text}
      </p>
      {isTruncated && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-500 mt-2 "
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
};

export default ShowMoreText;
