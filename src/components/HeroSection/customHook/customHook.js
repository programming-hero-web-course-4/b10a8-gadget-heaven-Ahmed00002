const useTitle = (location) => {
  if (location === "/") {
    document.title = "Home | Gadget Haven";
  } else if (location === "/dashboard") {
    document.title = "Dashboard | Gadget Haven";
  } else if (location === "/statistics") {
    document.title = "Statistics | Gadget Haven";
  }
};

export default useTitle;
