import { useState, useEffect } from "react";

export default function useDeviceDetect() {
    const [isNavigatorMobile, setNavigatorMobile] = useState(false);
  
    useEffect(() => {
      const userAgent =
        typeof window.navigator === "undefined" ? "" : navigator.userAgent;
      const mobile = Boolean(
        userAgent.match(
          /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
        )
      );
      setNavigatorMobile(mobile);
    }, []);
  
    return { isNavigatorMobile };
  }
  