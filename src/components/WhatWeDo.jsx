import React, { Fragment } from "react";
import ReactHtmlParser from "react-html-parser";

function WhatWeDo(props) {
  let content = {
    English: {
      title: "What We Do",
      whatWeDo: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>`,
      youtr:`<div><p>{post.title}</p><p>{post.para}</p></div>`,
      trusty:`{posts.map(post=>{
        return  <p>post.title</p>
    })}`
    },
    Malayalam: {
      title: "ഞങ്ങൾ എന്തെല്ലാം ചെയ്യും",
      whatWeDo: `<p>പ്രിന്റ് ആൻഡ് ടൈപ്പുചെയ്യൽ വ്യവസായത്തിന്റെ ഡമ്മി കോഡാണ് ലോറെം ഇപ്സിയം . 1500-കൾ മുതൽ ലൊറെം ഇപ്സം വ്യവസായത്തിന്റെ സ്റ്റാൻഡേർഡ് ഡമ്മി പാഠമാണ്, അജ്ഞാതമായ ഒരു പ്രിന്റർ ഒരു തരം ഗാലക്സി എടുത്ത് ഒരു സ്പെസിഫിക്കേഷൻ ബുക്ക് ഉണ്ടാക്കാൻ അതിനെ അണിനിരത്തി.</p>
      <p>അഞ്ചു നൂറ്റാണ്ടുകൾക്കു ശേഷവും, ഇലക്ട്രോണിക്ക് ടൈപ്പ്സെറ്റിംഗിൽ കുതിച്ചുചാട്ടം, അത് മാറ്റമില്ലാതെ തുടരുകയാണ്.</p>
      `,
      youtr:`<div><p>{post.titlem}</p><p>{post.param}</p></div>`,
      trusty:`{posts.map(post=>{
        return  <p>post.titlem</p>
    })}`
    }
  };

  props.language === "Malayalam"
    ? (content = content.Malayalam)
    : (content = content.English);
const posts=[{title:"1anything",titlem:"1ശേഷവും",para:"1dgsb",param:"1ശേഷവും"},
{title:"anything1",titlem:"ശേഷവും1",para:"dgsb1",param:"ശേഷവും1"}]    

  return (
    <Fragment>
      <h2>{content.title}</h2>
      <hr /> {ReactHtmlParser(content.whatWeDo)}
      

  <hr/>
  {props.language==="Malyalam"?"Malyalam":"English"}
  <hr/>
    </Fragment>
  );
}

export default WhatWeDo;