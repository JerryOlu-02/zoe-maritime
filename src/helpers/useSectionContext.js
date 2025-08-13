import SectionContext from "../context/sectionContext";
import { useContext } from "react";

const useSectionContext = function () {
  return useContext(SectionContext);
};

export default useSectionContext;
