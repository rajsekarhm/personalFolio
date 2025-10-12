import dynamic from "next/dynamic";

const Draggable = dynamic(() => import("react-draggable"), { ssr: false });


export default function FloatingBox({ children }) {
  return (
    <Draggable>
      <div className="bg-white/90 shadow-lg rounded-2xl p-6 w-64 cursor-move border border-gray-300 font-mono">
        {children}
      </div>
    </Draggable>
  );
}