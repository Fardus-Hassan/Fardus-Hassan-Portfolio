import { useEffect, useState } from "react";
import Spinner from "./Spinner";



const WithLoading = ({children}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, [children]);

  return (
    <div>
      {loading ? <Spinner /> : children}
    </div>
  );
};

export default WithLoading;