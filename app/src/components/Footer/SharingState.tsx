import Button from "../Button";

interface SharingState {
  count: number;
  onClick: () => void;
  children?: React.ReactNode;
}

const SharingState: React.FC<SharingState> = ({ count, onClick, children }) => {
  return (
    <div>
      <Button className="btn green" onClick={onClick}>
        Clicked {count} times
      </Button>
      <br />
      {children}
    </div>
  );
};

export default SharingState;
