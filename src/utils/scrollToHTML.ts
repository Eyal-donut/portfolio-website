const scrollToHTML = (targetHTML: HTMLDivElement) => {
  if (targetHTML) {
    targetHTML.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export default scrollToHTML;
