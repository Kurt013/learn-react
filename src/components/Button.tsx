interface Button {
  children: string;
  color?: 'primary' | 'seconday' | 'light' | 'dark';
  handleClick: () => void;
}

function Button({ children, color = 'primary', handleClick }: Button) {
  return (
    <button
      onClick={() => handleClick()}
      type="button"
      className={"btn btn-" + color}
    >
      {children}
    </button>
  );
}

export default Button;
