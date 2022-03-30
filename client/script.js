class SwipableContainer {
  constructor(swipableContainers, currentContainer = 0) {
    this.largeContainer = swipableContainers;
    this.currentContainer = currentContainer;
    this.insideContainers = [...swipableContainers.children];
    this._attachSwipeListeners();
  }

  _attachSwipeListeners() {
    this.largeContainer.addEventListener("touchstart", this.handleTouchStart);
  }

  handleTouchStart(e) {
    this.largeContainer.addEventListener("to", this.handleTouchEnd);
    // TOUCH MOVE!!!!
    this.largeContainer.addEventListener("touchcancel", this.handleTouchEnd);
    this.touchStartY = e.targetTocuhes[0].screenY;
  }

  handleTouchEnd(e) {
    this.touchEndY = e.targetTocuhes[0].screenY;
    this.largeContainer.removeEventListener("touchend");
  }

  slideUp() {
    this.currentContainer++;
    this.largeContainer.style.transform = "translateY(-100vh)";
  }

  slideDown() {
    this.currentContainer--;
    this.largeContainer.style.transform = "translateY(0)";
  }
}

const isSmallScreen = window.innerWidth <= 500;

const slideIntoViewObserver = new IntersectionObserver(slideIntoViewCallback);

function slideIntoViewCallback(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
    }
  });
}

Array.from(document.getElementsByClassName("slide-on-view")).forEach(child => {
  child.style.transitionDelay = "100ms";
  child.classList.add("slide-on-view");
  slideIntoViewObserver.observe(child);
});

Array.from(document.getElementsByClassName("children-slide")).forEach(
  container => {
    Array.from(container.children).forEach((child, index) => {
      child.style.transitionDelay =
        (
          (isSmallScreen ? 0 : 100) +
          100 * index * (isSmallScreen ? 1 : 2.5)
        ).toString() + "ms";
      child.classList.add("slide-on-view");
      slideIntoViewObserver.observe(child);
    });
  }
);

const swiper = new SwipableContainer(
  document.getElementById("swipable-containers")
);
