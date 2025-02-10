interface Props {
  image?: string;
  squareNumber: number;
}

const Tile = ({ image, squareNumber }: Props) => {
  const isDark = squareNumber % 2 !== 0;
  const squareColor = isDark ? "bg-[#779556]" : "bg-[#ebecd0]";
  return (
    <div
      className={`w-[100px] h-[100px] grid place-content-center ${squareColor}`}
    >
      <img src={image} alt="" className="w-20" />
    </div>
  );
};

export default Tile;
