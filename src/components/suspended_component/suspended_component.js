import { Suspense } from "react";

const SuspendedComponent = ({ component, fallback }) => {
  return <Suspense fallback={fallback}>{component}</Suspense>;
};

export default SuspendedComponent;
