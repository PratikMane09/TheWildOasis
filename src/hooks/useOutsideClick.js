import { useEffect, useRef } from "react";

function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();
  useEffect(
    function () {
      function handleclick(e) {
        if (ref.current && !ref.current.contains(e.target)) handler();
      }
      document.addEventListener("click", handleclick, listenCapturing);
      return () =>
        document.removeEventListener("click", handleclick, listenCapturing);
    },
    [handler, listenCapturing]
  );
  return ref;
}

export default useOutsideClick;
