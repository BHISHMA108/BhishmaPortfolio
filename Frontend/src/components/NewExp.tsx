import { useRef } from "react";
// @ts-ignore: no declaration file for 'locomotive-scroll'

export default function NewExp() {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="min-h-screen">
      <section className="h-screen bg-red-300 flex items-center justify-center">
        Section 1
      </section>

      <section className="h-screen bg-green-300 flex items-center justify-center">
        Section 2
      </section>
    </div>
  );
}
