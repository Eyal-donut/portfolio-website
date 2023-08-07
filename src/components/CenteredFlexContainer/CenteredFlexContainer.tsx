import { FC, ReactNode } from "react";
import classes from "./CenteredFlexContainer.module.css";

interface CenteredFlexContainerProps {
  children: ReactNode;
}

const CenteredFlexContainer: FC<CenteredFlexContainerProps> = ({
  children,
}) => {
  return <div className={classes.container}>{children}</div>;
};

export default CenteredFlexContainer;
