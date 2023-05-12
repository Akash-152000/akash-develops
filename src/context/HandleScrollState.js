import handleScroll from "./handleScroll";
import { useRef } from "react";

const HandleScrollState = (props) => {

    const ref1 = useRef(null)


  return (
    <handleScroll.Provider value={{ ref1 }}>
      {props.children}
    </handleScroll.Provider>
  );
};
export default HandleScrollState;