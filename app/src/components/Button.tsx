interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: (string | number | React.ReactNode)[] | React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  style,
  className,
}) => {
  return (
    <button onClick={onClick} style={style} className={className}>
      {children}
    </button>
  );
};

export default Button;
