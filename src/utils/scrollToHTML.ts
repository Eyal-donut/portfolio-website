const scrollToHTML = (targetHTML: HTMLElement) => {
  if (targetHTML) {
    const navbarHeight = document.querySelector(".navbar")?.clientHeight || 0;
    const targetTop =
      targetHTML.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.scrollTo({
      top: targetTop,
      behavior: "smooth",
    });
  }
};

export default scrollToHTML;
