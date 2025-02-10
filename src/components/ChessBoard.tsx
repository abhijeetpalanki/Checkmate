import Tile from "./Tile";

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

interface Piece {
  image: string;
  x: number;
  y: number;
}

const pieces: Piece[] = [];

for (let i = 0; i < 8; i++) {
  pieces.push({ image: "assets/pawn_b.png", x: i, y: 1 });
}

for (let i = 0; i < 8; i++) {
  pieces.push({ image: "assets/pawn_w.png", x: i, y: 6 });
}

for (let p = 0; p < 2; p++) {
  const type = p === 0 ? "b" : "w";
  const y = p === 0 ? 0 : 7;

  pieces.push({ image: `assets/rook_${type}.png`, x: 0, y });
  pieces.push({ image: `assets/rook_${type}.png`, x: 7, y });
  pieces.push({ image: `assets/knight_${type}.png`, x: 1, y });
  pieces.push({ image: `assets/knight_${type}.png`, x: 6, y });
  pieces.push({ image: `assets/bishop_${type}.png`, x: 2, y });
  pieces.push({ image: `assets/bishop_${type}.png`, x: 5, y });
  pieces.push({ image: `assets/queen_${type}.png`, x: 3, y });
  pieces.push({ image: `assets/king_${type}.png`, x: 4, y });
}

const ChessBoard = () => {
  return (
    <div className="h-screen grid place-content-center bg-[#202020]">
      <div className="w-[800px] h-[800px] grid grid-cols-[repeat(8,100px)] grid-rows-[repeat(8,100px)]">
        {Array.from({ length: horizontalAxis.length }).map((_, row) => (
          <div key={row}>
            {Array.from({ length: verticalAxis.length }).map((_, col) => {
              let image;
              pieces.forEach((p: Piece) => {
                if (p.x === row && p.y === col) {
                  image = p.image;
                }
              });
              return <Tile key={col} image={image} squareNumber={row + col} />;
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChessBoard;
