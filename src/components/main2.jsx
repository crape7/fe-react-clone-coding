import React from "react";
import styled from "styled-components";

const MainBox2 = styled.div`
    background-color: #f8f9fa;
    margin-top: -30px;
    display: flex;
  flex-direction: row;
`
const CardBox = styled.div`
    width: 465px;
  height: 500px;
  background-color: gray;
  border-radius:5px;
  box-shadow: 0px 0px 3px 2px  lightgray;
  margin-top: 70px;
  margin-left: 210px;
  position:relative;
  
`
const CardTitle = styled.p`
    font-size: 23px;
  font-weight: 400;
  color: white;
  position: absolute;
  margin-top: 130px;
  margin-left: 175px;
`
const ContentBox = styled.div`
    width: 465px;
    height:210px;
    background-color: white;
    border-radius:0px 0px 5px 5px;
    position: absolute;
   margin-top: 290px;
`
const CardContent = styled.p`
    font-size: 20px;
  font-weight: 500;
  text-align: left;
  margin-top: 20px;
  margin-left: 23px;
  margin-right: 40px;
  line-height: 33px;
`
const CardButton1 = styled.div`
    width: 62px;
    height: 35px;
    border: 1.4px solid black;
    border-radius: 5px 0px 0px 5px;
    margin-top: 20px;
    margin-left: 23px;
`
const ButtonText1 = styled.p`
  font-size: 19px;
  font-weight: 100;
  margin-top: 3px;
  margin-left: 11px;
`
const CardButton2 = styled.div`
    width: 54px;
    height: 35px;
    border: 1.4px solid black;
    border-radius: 0px 5px 5px 0px;
    margin-left: 84px;
    margin-top: -35px;
`
const ButtonText2 = styled.p`
   font-size: 19px;
  font-weight: 100;
  margin-top: 3px;
  margin-left: 11px;
`
const Time =  styled.p`
  font-size: 17px;
  color: gray;
  margin-left: 390px;
  margin-top: -25px;
`

const CardBox2 = styled.div`
    width: 465px;
  height: 500px;
  background-color: gray;
  border-radius:5px;
  box-shadow: 0px 0px 3px 2px  lightgray;
  margin-top: 70px;
  margin-left: 45px;
  position:relative;
  
`
const CardTitle2 = styled.p`
    font-size: 23px;
  font-weight: 400;
  color: white;
  position: absolute;
  margin-top: 130px;
  margin-left: 175px;
`
const ContentBox2 = styled.div`
    width: 465px;
    height:210px;
    background-color: white;
    border-radius:0px 0px 5px 5px;
    position: absolute;
   margin-top: 290px;
`
const CardContent2 = styled.p`
    font-size: 20px;
  font-weight: 500;
  text-align: left;
  margin-top: 20px;
  margin-left: 23px;
  margin-right: 40px;
  line-height: 33px;
`
const CardButton12 = styled.div`
    width: 62px;
    height: 35px;
    border: 1.4px solid black;
    border-radius: 5px 0px 0px 5px;
    margin-top: 20px;
    margin-left: 23px;
`
const ButtonText12 = styled.p`
  font-size: 19px;
  font-weight: 100;
  margin-top: 3px;
  margin-left: 11px;
`
const CardButton22 = styled.div`
    width: 54px;
    height: 35px;
    border: 1.4px solid black;
    border-radius: 0px 5px 5px 0px;
    margin-left: 84px;
    margin-top: -35px;
`
const ButtonText22 = styled.p`
   font-size: 19px;
  font-weight: 100;
  margin-top: 3px;
  margin-left: 11px;
`
const Time2 =  styled.p`
  font-size: 17px;
  color: gray;
  margin-left: 390px;
  margin-top: -25px;
`


const CardBox3 = styled.div`
    width: 465px;
  height: 500px;
  background-color: gray;
  border-radius:5px;
  box-shadow: 0px 0px 3px 2px  lightgray;
  margin-top: 70px;
  margin-left: 45px;
  position:relative;
  
`
const CardTitle3 = styled.p`
    font-size: 23px;
  font-weight: 400;
  color: white;
  position: absolute;
  margin-top: 130px;
  margin-left: 175px;
`
const ContentBox3 = styled.div`
    width: 465px;
    height:210px;
    background-color: white;
    border-radius:0px 0px 5px 5px;
    position: absolute;
   margin-top: 290px;
`
const CardContent3 = styled.p`
    font-size: 20px;
  font-weight: 500;
  text-align: left;
  margin-top: 20px;
  margin-left: 23px;
  margin-right: 40px;
  line-height: 33px;
`
const CardButton13 = styled.div`
    width: 62px;
    height: 35px;
    border: 1.4px solid black;
    border-radius: 5px 0px 0px 5px;
    margin-top: 20px;
    margin-left: 23px;
`
const ButtonText13 = styled.p`
  font-size: 19px;
  font-weight: 100;
  margin-top: 3px;
  margin-left: 11px;
`
const CardButton23 = styled.div`
    width: 54px;
    height: 35px;
    border: 1.4px solid black;
    border-radius: 0px 5px 5px 0px;
    margin-left: 84px;
    margin-top: -35px;
`
const ButtonText23 = styled.p`
   font-size: 19px;
  font-weight: 100;
  margin-top: 3px;
  margin-left: 11px;
`
const Time3 =  styled.p`
  font-size: 17px;
  color: gray;
  margin-left: 390px;
  margin-top: -25px;
`


const Main2 = (props) =>{
    return(
        <>
<MainBox2>
          
<CardBox>
    <CardTitle>{props.cardTitle}</CardTitle>
  <ContentBox>
    <CardContent>{props.cardContent}</CardContent>
      <CardButton1>
      <ButtonText1>View</ButtonText1>
      </CardButton1>
     <CardButton2>
      <ButtonText2>Edit</ButtonText2>
      </CardButton2>
      <Time>9 mins</Time>
  </ContentBox>
</CardBox>

<CardBox2>
    <CardTitle2>{props.cardTitle2}</CardTitle2>
  <ContentBox2>
    <CardContent2>{props.cardContent2}</CardContent2>
      <CardButton12>
      <ButtonText12>View</ButtonText12>
      </CardButton12>
     <CardButton22>
      <ButtonText22>Edit</ButtonText22>
      </CardButton22>
      <Time2>9 mins</Time2>
  </ContentBox2>
</CardBox2>

<CardBox3>
    <CardTitle3>{props.cardTitle3}</CardTitle3>
  <ContentBox3>
    <CardContent3>{props.cardContent3}</CardContent3>
      <CardButton13>
      <ButtonText13>View</ButtonText13>
      </CardButton13>
     <CardButton23>
      <ButtonText23>Edit</ButtonText23>
      </CardButton23>
      <Time3>9 mins</Time3>
  </ContentBox3>
</CardBox3>


</MainBox2>
</>
    )
}
export default Main2;