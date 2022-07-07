import cn from "classnames";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import "overlayscrollbars/css/OverlayScrollbars.css";

type ScrollbarProps = {
  options?: any;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  click?: boolean;
  drag?: boolean;
};

const Scrollbar: React.FC<ScrollbarProps> = ({
  options,
  children,
  style,
  click,
  drag,
  className,
  ...props
}) => {
  return (
    <OverlayScrollbarsComponent
      options={{
        className: cn("os-theme-thin", className),
        scrollbars: {
          autoHide: "never",
          clickScrolling: click,
          dragScrolling: drag,
        },
        ...options,
      }}
      style={style}
      {...props}
    >
      {children}
    </OverlayScrollbarsComponent>
  );
};

export default Scrollbar;
