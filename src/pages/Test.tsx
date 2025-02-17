import { useState } from 'react';

const Test = () => {
  const cards = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    content: `Card ${i + 1} content`,
  }));
  const MAX_VISIBLE = 4;
  const MAX_INDEX = cards.length - MAX_VISIBLE;
  const [currentIndex, setCurrentIndex] = useState(0);

  // const handleScroll = (e: React.WheelEvent) => {
  //   if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
  //     e.preventDefault();
  //     e.deltaX > 0 ? goNext() : goPrevious();
  //   }
  // };

  const goPrevious = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const goNext = () => {
    setCurrentIndex(prev => Math.min(prev + 1, MAX_INDEX));
  };

  return (
    <div className="relative overflow-hidden p-8">
      {/* Carousel Container */}
      <div
        className="flex gap-4 transition-transform duration-300 ease-out"
        style={{
          transform: `translateX(calc(-${currentIndex} * (25% + 1rem)))`,
          width: `${cards.length * 25 + (cards.length - 1) * 4}%`
        }}
        // onWheel={handleScroll}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex-none w-[calc(25%-1rem)] rounded-xl bg-white p-6 shadow-lg border"
          >
            <h3 className="text-xl font-bold mb-2">Card {card.id}</h3>
            <p className="text-gray-600">{card.content}</p>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goPrevious}
        disabled={currentIndex === 0}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white disabled:opacity-0 disabled:pointer-events-none transition-all"
        aria-label="Previous"
      >
        ←
      </button>
      <button
        onClick={goNext}
        disabled={currentIndex === MAX_INDEX}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white disabled:opacity-0 disabled:pointer-events-none transition-all"
        aria-label="Next"
      >
        →
      </button>
    </div>
  );
};

export default Test;