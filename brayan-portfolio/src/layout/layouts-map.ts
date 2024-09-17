import PrincipalLayout from "./PrincipalLayout";
import SpecialNavBar from "./SpecialNavbar";

const layoutsMap: Record<string, React.FC<{ children: JSX.Element }>> = {
  "/": SpecialNavBar,
  "/404": SpecialNavBar,
};

export default layoutsMap;
