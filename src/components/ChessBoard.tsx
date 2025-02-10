const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

const ChessBoard = () => {
  return (
    <div className="h-screen grid place-content-center bg-[#202020]">
      <div className="w-[800px] h-[800px] grid grid-cols-[repeat(8,100px)] grid-rows-[repeat(8,100px)]">
        {Array.from({ length: horizontalAxis.length }).map((_, row) => (
          <div key={row}>
            {Array.from({ length: verticalAxis.length }).map((_, col) => {
              const isDark = (row + col) % 2 !== 0;
              const squareColor = isDark ? "bg-[#779556]" : "bg-[#ebecd0]";
              return (
                <div
                  key={col}
                  className={`w-[100px] h-[100px] ${squareColor}`}
                ></div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChessBoard;
