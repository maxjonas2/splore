import { useEffect, useState } from "react";

const useObserver = ref => {
  const [visible, setVisible] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      });
    });

    observer.observe(ref.current);

    return visible;
  });
};

export default useObserver;