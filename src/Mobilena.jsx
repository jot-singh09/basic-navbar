import { useRef, useState } from "react";
const Mobilena = () => {
  const [isActive, setIsActive] = useState(false);
  const [hide, setIsHide] = useState(false);
  const myElementRef = useRef(null);
  const hideh = useRef(null);
  const opennav = () => {
    console.log("clicked");
    if (isActive == true) {
      setIsActive(false);
      myElementRef.current.style.display = "none";
    } else if (isActive == false) {
      myElementRef.current.style.display = "flex";
      setIsActive(true);
    }
    };

    const hiideh1 = () => {
      if (hide == true) {
        setIsHide(false);
        hideh.current.style.display = "none";
      } else if (hide == false) {
        hideh.current.style.display = "flex";
        setIsHide(true);
      }
    
  };
  return (
    
    <div>
      
      <div className="bg-[#222] text-white w-full h-10 flex justify-between items-center">
        <div className="px-10 max-lg:px-2  ">
          <h1 className="text-2xl font-bold max-lg:text-xl" onClick={hiideh1}>WebPractice</h1>
        </div>

        <div className="px-10" ref={hideh}>
          <h1 className="px-10 text-sm" onClick={opennav}>
            AddIcon
          </h1>
        </div>
      </div>
      <div
          className="bg-[#444] py-10 flex flex-col gap-5 px-4 underline text-white h-300 w-full animate-[slideIn_0.5s_ease-out_forwards]"
        ref={myElementRef}
      >
        <h4>Home</h4>
        <h4>About</h4>
        <h4 className="pb-5">Contact</h4>
      </div>
    </div>
  );
};

export default Mobilena;
