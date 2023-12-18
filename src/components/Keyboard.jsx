import Keycap from "./Keycap";

export const Keyboard = () => (
 <div className=" shadow-[0_20px_0_0_#656565] w-full max-w-[900px] bg-[#ababab] aspect-[355/137] rounded-[5px] grid grid-cols-[1fr_4fr_4fr_4fr_3fr] grid-rows-[1fr_5fr] gap-x-[14px] gap-y-[5px] p-[10px]">
  <div className="flex bg-black p-[4px] rounded-md">
   <Keycap
    color="#ba0000"
    lightColor="#ffb300"
    size="100%"
    sign="ESC"
   />
  </div>
  <div className="flex bg-black p-[4px] gap-[4px] rounded-md">
   <Keycap
    color="#ababab"
    lightColor="#00e5ff"
    size="100%"
    sign="F1"
   />
   <Keycap
    color="#ababab"
    lightColor="#00e5ff"
    size="100%"
    sign="F2"
   />
   <Keycap
    color="#ababab"
    lightColor="#00e5ff"
    size="100%"
    sign="F3"
   />
   <Keycap
    color="#ababab"
    lightColor="#00e5ff"
    size="100%"
    sign="F4"
   />
  </div>
  <div className="flex bg-black p-[4px] gap-[4px] rounded-md">
   <Keycap
    color="#2b2b2b"
    lightColor="#ff009d"
    size="100%"
    sign="F5"
   />
   <Keycap
    color="#2b2b2b"
    lightColor="#ff009d"
    size="100%"
    sign="F6"
   />
   <Keycap
    color="#2b2b2b"
    lightColor="#ff009d"
    size="100%"
    sign="F7"
   />
   <Keycap
    color="#2b2b2b"
    lightColor="#ff009d"
    size="100%"
    sign="F8"
   />
  </div>
  <div className="flex bg-black p-[4px] gap-[4px] rounded-md">
   <Keycap
    color="#ababab"
    lightColor="#00e5ff"
    size="100%"
    sign="F9"
   />
   <Keycap
    color="#ababab"
    lightColor="#00e5ff"
    size="100%"
    sign="F10"
   />
   <Keycap
    color="#ababab"
    lightColor="#00e5ff"
    size="100%"
    sign="F11"
   />
   <Keycap
    color="#ababab"
    lightColor="#00e5ff"
    size="100%"
    sign="F12"
   />
  </div>
  <div className="flex bg-black p-[4px] gap-[4px] rounded-md">
   <Keycap
    color="#ababab"
    lightColor="#00e5ff"
    size="100%"
    sign="PrtScr"
   />
   <Keycap
    color="#ababab"
    lightColor="#00e5ff"
    size="100%"
    sign="ScrLk"
   />
   <Keycap
    color="#ababab"
    lightColor="#00e5ff"
    size="100%"
    sign="Pause"
   />
  </div>
  <div className="bg-black p-[4px] gap-[4px] rounded-md col-span-4 grid grid-rows-[repeat(5_1fr)]">
   <div className="flex bg-black gap-[4px] rounded-md">
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign="~"
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign="1"
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign="2"
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign="3"
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign="4"
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign="5"
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign="6"
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign="7"
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign="8"
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign="9"
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign="0"
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign="-"
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign="+"
    />
    <Keycap
     color="#2b2b2b"
     lightColor="#ff009d"
     size="200%"
     sign="Backspace"
    />
   </div>
   <div className="flex bg-black gap-[4px] rounded-md">
    <Keycap
     color="#2b2b2b"
     lightColor="#ff009d"
     size="140%"
     sign="Tab"
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign="Q"
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign="W"
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign="E"
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign="R"
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign="T"
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign="Y"
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign="U"
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign="I"
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign="O"
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign="P"
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign="["
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign="]"
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="160%"
     sign="\"
    />
   </div>
   <div className="flex bg-black gap-[4px] rounded-md">
    <Keycap
     color="#2b2b2b"
     lightColor="#ff009d"
     size="160%"
     sign="CapsLk"
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign="A"
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign="S"
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign="D"
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign="F"
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign="G"
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign="H"
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign="J"
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign="K"
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign="L"
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign=";"
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign="'"
    />
    <Keycap
     color="#ba0000"
     lightColor="#ffb300"
     size="220%"
     sign="Enter"
    />
   </div>
   <div className="flex bg-black gap-[4px] rounded-md">
    <Keycap
     color="#2b2b2b"
     lightColor="#ff009d"
     size="180%"
     sign="Shift"
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign="Z"
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign="X"
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign="C"
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign="V"
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign="B"
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign="N"
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign="M"
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign=","
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign="."
    />
    <Keycap
     color="#ababab"
     lightColor="#00e5ff"
     size="100%"
     sign="/"
    />
    <Keycap
     color="#2b2b2b"
     lightColor="#ff009d"
     size="260%"
     sign="Shift"
    />
   </div>
   <div className="flex bg-black gap-[4px] rounded-md">
    <Keycap
     color="#2b2b2b"
     lightColor="#ff009d"
     size="120%"
     sign="Ctrl"
    />
    <Keycap
     color="#2b2b2b"
     lightColor="#ffb300"
     size="120%"
     sign="Win"
    />
    <Keycap
     color="#2b2b2b"
     lightColor="#ff009d"
     size="120%"
     sign="Alt"
    />
    <Keycap
     color="#ababab"
     lightColor="#ffb300"
     size="600%"
     sign="Space"
    />
    <Keycap
     color="#2b2b2b"
     lightColor="#ff009d"
     size="120%"
     sign="Alt"
    />
    <Keycap
     color="#2b2b2b"
     lightColor="#ff009d"
     size="120%"
     sign="Fn"
    />
    <Keycap
     color="#2b2b2b"
     lightColor="#ff009d"
     size="120%"
     sign="Opt"
    />
    <Keycap
     color="#2b2b2b"
     lightColor="#ff009d"
     size="120%"
     sign="Ctrl"
    />
   </div>
  </div>
 </div>
);
