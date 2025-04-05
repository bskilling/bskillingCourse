'use client';
import React, { useState, useRef, useEffect } from 'react';

export default function WhatsAppFloatingButton() {
  // Use null initial state to avoid window reference during SSR
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLDivElement>(null);

  // Set initial position after component mounts (client-side only)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPosition({
        x: window.innerWidth - 180,
        y: window.innerHeight - 100,
      });
    }
  }, []);

  // Handle mouse down event to start dragging
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!position || e.button !== 0) return;

    e.preventDefault();
    setIsDragging(true);

    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  // Handle touch start event for mobile
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!position) return;

    e.preventDefault();
    setIsDragging(true);

    const touch = e.touches[0];
    offset.current = {
      x: touch.clientX - position.x,
      y: touch.clientY - position.y,
    };
  };

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !position) return;

      const newX = Math.max(0, Math.min(window.innerWidth - 180, e.clientX - offset.current.x));
      const newY = Math.max(0, Math.min(window.innerHeight - 60, e.clientY - offset.current.y));

      setPosition({
        x: newX,
        y: newY,
      });
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging || !position) return;

      const touch = e.touches[0];
      const newX = Math.max(0, Math.min(window.innerWidth - 180, touch.clientX - offset.current.x));
      const newY = Math.max(0, Math.min(window.innerHeight - 60, touch.clientY - offset.current.y));

      setPosition({
        x: newX,
        y: newY,
      });
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleEnd);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleEnd);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleEnd);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleEnd);
      };
    }
  }, [isDragging, position]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (!position) return;

      setPosition({
        x: Math.min(position.x, window.innerWidth - 180),
        y: Math.min(position.y, window.innerHeight - 60),
      });
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [position]);

  // Prevent click during drag
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isDragging) {
      e.preventDefault();
    }
  };

  // Don't render anything during SSR
  if (!position) return null;

  return (
    <div
      ref={buttonRef}
      className="fixed flex items-center bg-white px-3 py-2 rounded-full shadow-lg cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: 9999,
      }}
    >
      <span className="mr-2 text-gray-700 text-sm font-medium">Chat with us</span>

      <a
        href="https://wa.me/919741104412"
        target="_blank"
        rel="noreferrer"
        onClick={handleClick}
        className="flex items-center justify-center w-10 h-10 bg-green-500 rounded-full hover:bg-green-600 transition-all"
        aria-label="Contact us on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="w-5 h-5 text-white fill-current"
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
      </a>
    </div>
  );
}
