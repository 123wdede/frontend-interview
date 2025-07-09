import React, { useState, useEffect, useRef } from 'react';

const MyComponent: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const prevCountRef = useRef<number>(count);

  // 模拟 componentDidMount
  useEffect(() => {
    console.log('Component mounted');
  }, []);

  // 模拟 componentDidUpdate
  useEffect(() => {
    if (prevCountRef.current !== count) {
      console.log('Count updated');
    }
    prevCountRef.current = count;
  }, [count]);

  // 模拟 componentWillUnmount
  useEffect(() => {
    return () => {
      console.log('Component will unmount');
    };
  }, []);

  const handleClick = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div>
      <p>Clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default MyComponent;
