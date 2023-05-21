// 해당 위치에 필요한 컴포넌트를 바탕으로 직접 Bootstrap Album 페이지를 개발하시면 됩니다.
import React from "react";
import Example from "./components/example";
import Main from "./components/main";
import Main2 from "./components/main2";
import Main3 from "./components/main3";




function App() {
  return <>
  <Example exampleText="Playlist"/>
  
  <Main /*cardTitle="You Are My Universe" */cardContent="You Are My Universe - Low Hanging Fruits" imgUrl1="./image/lhf.jpg"
   /*cardTitle2="Thumbnail"*/ cardContent2="인사 - 나상현씨밴드" imgUrl2="./image/bandnah.jpg"
    /*cardTitle3="Thumbnail"*/ cardContent3="Mercurial - 실리카겔" imgUrl3="./image/silcagel.jpg"/>

<Main2 /*cardTitle="Thumbnail"*/ cardContent="Straight Line - LUCY" imgUrl4="./image/lucy.jpg"
   /*cardTitle2="Thumbnail"*/ cardContent2="BUCKET LIST - 맥거핀(MGFF)" imgUrl5="./image/mgff.jpg"
   /* cardTitle3="Thumbnail" */cardContent3="surf. - wave to earth" imgUrl6="./image/wavy.jpg"/>

<Main3 /*cardTitle="Thumbnail"*/ cardContent="Like Feathers - SURL(설)" imgUrl7="./image/surl.jpg"
   /*cardTitle2="Thumbnail"*/ cardContent2="off the menu - off the menu(오프더메뉴)" imgUrl8="./image/offthemenu.jpg"
    /*cardTitle3="Thumbnail" */cardContent3="Tree - 오월오일" imgUrl9="./image/55.jpg"/>


  
  </>;
}

export default App;
