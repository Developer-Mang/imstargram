export const InterObser = (target, event = () => {}) => {
  if (!target) return;

  const options = {
    root: null,
    rootMargin: '1px',
    threshold: 1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      console.log(
        entry.boundingClientRect,
        entry.intersectionRatio,
        entry.intersectionRect,
        entry.isIntersecting,
        entry.rootBounds,
        entry.target,
        entry.time
      );
    });

    observer.unobserve(target);
  }, options);

  observer.observe(target);
};
