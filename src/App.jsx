import { Hero } from "./components/Hero";
import { WhatIsIO } from "./components/WhatIsIO";
import { Advantages } from "./components/Advantages";
import { Implementation } from "./components/Implementation";
import { AnimationsDemo } from "./components/AnimationsDemo";
import { BestPractices } from "./components/BestPractices";

export const App = () => {
  return (
    <div className="App">
      <Hero />
      <WhatIsIO />
      <Advantages />
      <Implementation />
      <AnimationsDemo />
      <BestPractices />
    </div>
  );
};