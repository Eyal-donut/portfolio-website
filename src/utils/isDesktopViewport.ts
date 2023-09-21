const isDesktopViewport = (): boolean => {
  if (window.innerWidth <= 900) {
    return false;
  }
  return true;
};

export default isDesktopViewport;
