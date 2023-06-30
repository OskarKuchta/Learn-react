interface ButtonProps {
  onClick: () => void;
  children: (string | number)[];
  style?: React.CSSProperties;
  className: string;
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
