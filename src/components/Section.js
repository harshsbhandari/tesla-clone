import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import DownBtn from "../images/down-arrow.svg"

function Section({title, description, backgroundImg, leftBtnText, rightBtnText}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade left>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>

      <Buttons>
        <Fade left>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>

            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </Fade>

        <DownArrow src={DownBtn} />
      </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;

  //    Background related styling
  // background-image: url("/images/model-s.jpg");
  background-image: ${(props) => `url(${props.bgImage})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;

  //    Justify content is for horizontal alignments, but here we have changed the direction of 'flex' to 'column', so now 'justify-content' works for vertical
  justify-content: space-between;
  align-items: center;
`
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`
const ButtonGroup = styled.div`
  //    Get Left and Right button horizontal (side by side)
  display: flex;
  margin-bottom: 30px;

  //   Small screens
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
`
const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`
const DownArrow = styled.img`
  margin-top: 10px;
  height: 40px;
  animation: animateDown infinite 1s;
`
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`
