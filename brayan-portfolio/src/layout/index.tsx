import { useRouter } from "next/router";
import React from "react";

import PrincipalLayout from "./PrincipalLayout";
import layoutsMap from "./layouts-map";

interface Props {
  children: JSX.Element;
}

const LayoutWrapper = ({ children }: Props) => {
  const router = useRouter();
  const pathname = router.pathname;
  const Layout = layoutsMap[pathname] || PrincipalLayout;
  return <Layout>{children}</Layout>;
};

export default LayoutWrapper;
