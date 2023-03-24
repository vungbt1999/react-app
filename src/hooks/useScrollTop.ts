import { useEffect, useState } from 'react';

export default function useScrollTop({ y = 300 }: { y?: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > y) {
      setVisible(true);
    } else if (scrolled <= y) {
      setVisible(false);
    }
  };

  const onScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return {
    onScrollToTop,
    visible
  };
}
