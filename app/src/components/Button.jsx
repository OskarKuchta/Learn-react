const Button = ({ onClick, children, style, className }) => {
  return (
    <button onClick={onClick} style={style} className={className}>
      {children}
    </button>
  );
};

export default Button;
