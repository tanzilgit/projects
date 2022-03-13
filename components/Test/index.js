import { useState, React } from "react";
import styled from "styled-components";


const Button = styled.button`
  background: ${(props) => (props?.active ? "red" : "yellow")};
  padding: 50px;
`;

function Index() {
  // const [buttonClicked, setButtonClicked] = useState(false);

  // const handleClick = () => setButtonClicked(!buttonClicked);
  return (
    // <div>Test Component</div>
    <>
      <Button
        className="button"
        // onClick={handleClick}
        // active= {buttonClicked}
      >
        {/* {buttonClicked ? "First" : "Second"} */}
        test
      </Button>
    </>
  );
}

export default Index;
