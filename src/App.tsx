import React from 'react';
import MyComponent from './MyComponent'; // 引入我们刚创建的组件

const App: React.FC = () => {
  return (
    <div>
      <h1>React TypeScript Functional Component Demo</h1>
      <MyComponent />
    </div>
  );
};

export default App;
