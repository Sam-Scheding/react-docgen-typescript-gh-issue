import React, { memo, forwardRef } from "react";

interface TestComponentProps {
  someProp: string;
}

const TestComponent = ({ someProp }: TestComponentProps) => {
  return <div>{someProp}</div>;
};

const FRTestComponent = forwardRef<HTMLBaseElement, TestComponentProps>(
  TestComponent
);

const MTestComponent = memo<TestComponentProps>(TestComponent);

export { TestComponent, FRTestComponent, MTestComponent };
