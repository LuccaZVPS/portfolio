export const scrollAnimation = (
  element: HTMLDivElement,
  visibleClass: string,
  revealPoint: number
) => {
  if (window.innerWidth < 1600) {
    revealPoint = revealPoint / 1.5;
  }

  function onScroll() {
    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;
    if (revealTop < windowHeight - revealPoint) {
      element.className = "";
      element.className = visibleClass;
      window.removeEventListener("scroll", onScroll, true);
    }
  }

  window.addEventListener("scroll", onScroll, true);
};
