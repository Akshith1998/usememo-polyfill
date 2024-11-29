import { useRef } from "react";

export const useMemoPolyfill = (callback, dependencyArr) => {
  const dependencyRef = useRef();
  const prevValueRef = useRef();

  if (
    !dependencyRef.current ||
    !compareDependencies(dependencyRef.current, dependencyArr)
  ) {
    dependencyRef.current = dependencyArr;
    return (prevValueRef.current = callback());
  }

  return prevValueRef.current;
};

const compareDependencies = (prev, curr) => {
  if (prev.length !== curr.length) return false;

  for (let i = 0; i < prev.length; i++) {
    if (prev[i] !== curr[i]) return false;
  }

  return true;
};
