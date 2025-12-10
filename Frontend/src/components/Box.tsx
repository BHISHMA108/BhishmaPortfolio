// import { useState } from "react";

// interface BoxProps {
//   color: string;
//   number: number;
//   txt : String;
// }

// export default function Box({ color, number, txt }: BoxProps) {
//   const [isHover, setIsHover] = useState(false);

//   return (
//     <div
//       className="flex absolute flex-col bg-amber-400 justify-center items-center h-[400px] w-[700px] transition-all duration-300"
//       style={{
//         backgroundColor: isHover ? color : color, // always visible
//         transform: isHover ? "scale(1.05)" : "scale(1)",
//         borderRadius: "12px",
//       }}
//       onMouseEnter={() => setIsHover(true)}
//       onMouseLeave={() => setIsHover(false)}
//     >
//       BOX {number}
//       {txt}
//     </div>
//   );
// }

        // <Box color="#87bfff" number={1} txt="This the Box 1"/>
