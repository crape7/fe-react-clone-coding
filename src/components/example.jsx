import React, { useState } from "react";
import styled from "styled-components";
import { FiCamera } from "react-icons/fi";
import { BsList } from "react-icons/bs";
import GlobalStyle from "./GlobalStyle";


const ExampleText = styled.p`
    font-size: 50px;
  font-weight: 200;
  text-align: center;
  margin-top: 130px;
`
const ExampleContent = styled.p`
    font-size: 25px;
  font-weight: 100;
  text-align: center;
  margin-top: 10px;
  line-height: 40px;
  color: gray;
`
const ExampleButton1 = styled.div`
    width: 207px;
  height: 50px;
  border-radius:5px;
  background-color:#007bff;
  margin-left: 10px;
  margin-top: 30px;
`
const ButtonText1 = styled.p`
    color: white;
    font-size: 21px;
  font-weight: 500;
  position:absolute;
  margin-top: 10px;
  margin-left: 17px;
`
const ExampleButton2 = styled.div`
    width: 207px;
  height: 50px;
  border-radius:5px;
  background-color:#6c757d;
  margin-left: 7px;
  margin-top: 30px;
`
const ButtonText2 = styled.p`
    color: white;
    font-size: 21px;
  font-weight: 500;
  position:absolute;
  margin-top: 10px;
  margin-left: 18px;
`
const Box = styled.div`
    display: flex;
  justify-content: center;
    flex-direction: row;
`

const Box2 = styled.div`
   display: flex;
  justify-content: space-around;
    flex-direction: row;

    /* @media screen and (max-width: 1000px) {
    align-items: space-between;
  } */
`
const Camera = styled(FiCamera)`
 margin-left: 10px;
  margin-top: 35px;
  //position: absolute;
`
const List = styled(BsList)`
  margin-left: 10px;
  margin-top: 5px;
  position: relative;
`
const Border = styled.div`
  width: 70px;
  height: 55px;
  margin-top: 20px;
  margin-left: 900px;
  position: relative;
  background-color: none;
  border: 1px solid gray;
  border-radius: 5px;
`

const BarText = styled.p`
    color: white;
    font-size: 27px;
    font-weight: 1000;
    margin-top: -35px;
    margin-left: 50px;
`

const TopBar= styled.div`
    width: 100%;
    height: 85px;
    background-color: #343a40;
    margin-top: -10px;

`

// const FullScreenContainer = styled.div`
//   position: relative;
//   animation: slideDown 0.3s ease forwards;
//   transform: translateY(-100%);
//   animation-play-state: ${({ isVisible }) => (isVisible ? 'running' : 'paused')};
//   animation-fill-mode: forwards;

//   @keyframes slideDown {
//     0% {
//       transform: translateY(-100%);
//     }
//     100% {
//       transform: translateY(0%);
//     }
//   }
// `;

const Example = () => {
  // const [isFullScreenVisible, setIsFullScreenVisible] = useState(false);

  // const handleListClick = () => {
  //   setIsFullScreenVisible(!isFullScreenVisible);
  // };

    return(
        <>
        <GlobalStyle/>

        {/* <FullScreenContainer isVisible={isFullScreenVisible}> */}
        <TopBar>
          <Box2>
            <div>
        <Camera size="27" color="white"/>
        <BarText>Album</BarText>
            </div>
            <Border>
        <List size="47" color="gray"/>
        </Border>
          </Box2>
        </TopBar>

        <ExampleText>Playlist</ExampleText>
        <ExampleContent>"The first rule of drumming is that if you make a mistake, turn round and look
          angrily at the bass player" - NICK MASON
        </ExampleContent>
        
        <Box>
            <ExampleButton1>
            <ButtonText1>Main call to action</ButtonText1>
            </ExampleButton1>
        <ExampleButton2>
            <ButtonText2>Secondary action</ButtonText2>
            </ExampleButton2>
        </Box>

        {/* </FullScreenContainer> */}
        </>
    )
}

export default Example;