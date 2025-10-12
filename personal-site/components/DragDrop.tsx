// components/withDraggable.tsx
"use client";

import React, { useRef, useState, useEffect } from 'react';

type Position = { x: number; y: number };

const withDraggable = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const DraggableComponent: React.FC<P & { initialPosition?: Position }> = ({
    initialPosition = { x: 0, y: 0 },
    ...props
  }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState<Position>(initialPosition);
    const [dragging, setDragging] = useState(false);
    const [offset, setOffset] = useState<Position>({ x: 0, y: 0 });

    const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
      setDragging(true);
      setOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    };

    const onMouseMove = (e: MouseEvent) => {
      if (dragging) {
        setPosition({
          x: e.clientX - offset.x,
          y: e.clientY - offset.y,
        });
      }
    };

    const onMouseUp = () => setDragging(false);

    useEffect(() => {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      return () => {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
      };
    });

    return (
      <div
        ref={ref}
        onMouseDown={onMouseDown}
        style={{
          position: 'absolute',
          left: position.x,
          top: position.y,
          cursor: 'grab',
        }}
      >
        <WrappedComponent {...(props as P)} />
      </div>
    );
  };

  return DraggableComponent;
};

export default withDraggable;
