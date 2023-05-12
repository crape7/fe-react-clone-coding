// 해당 위치에 필요한 컴포넌트를 바탕으로 직접 Bootstrap Album 페이지를 개발하시면 됩니다.
import React from "react";
import Example from "./components/example";
import Main from "./components/main";
import Main2 from "./components/main2";
import Main3 from "./components/main3";

function App() {
  return <>
  <Example exampleText="Album example"/>
  
  <Main cardTitle="Thumbnail" cardContent="This is a wider card with supporting 
  text below as a natural lead-in to additional
   content. This content is a little bit longer." 
   cardTitle2="Thumbnail" cardContent2="This is a wider card with supporting 
   text below as a natural lead-in to additional
    content. This content is a little bit longer."
    cardTitle3="Thumbnail" cardContent3="This is a wider card with supporting 
  text below as a natural lead-in to additional
   content. This content is a little bit longer."/>

<Main2 cardTitle="Thumbnail" cardContent="This is a wider card with supporting 
  text below as a natural lead-in to additional
   content. This content is a little bit longer." 
   cardTitle2="Thumbnail" cardContent2="This is a wider card with supporting 
   text below as a natural lead-in to additional
    content. This content is a little bit longer."
    cardTitle3="Thumbnail" cardContent3="This is a wider card with supporting 
  text below as a natural lead-in to additional
   content. This content is a little bit longer."/>

<Main3 cardTitle="Thumbnail" cardContent="This is a wider card with supporting 
  text below as a natural lead-in to additional
   content. This content is a little bit longer." 
   cardTitle2="Thumbnail" cardContent2="This is a wider card with supporting 
   text below as a natural lead-in to additional
    content. This content is a little bit longer."
    cardTitle3="Thumbnail" cardContent3="This is a wider card with supporting 
  text below as a natural lead-in to additional
   content. This content is a little bit longer."/>

   
  
  
  </>;
}

export default App;
