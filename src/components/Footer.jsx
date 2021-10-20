import React from "react";

function Footer(props) {

  const posts=[{title:"1anything",titlem:"1ശേഷവും",para:"1dgsb",param:"1ശേഷവും"},
{title:"anything1",titlem:"ശേഷവും1",para:"dgsb1",param:"ശേഷവും1"}] 

 
  return( <div>{posts.map(post=>{
    return  <div><p>{props.language==="Malayalam"?post.title:post.titlem}</p><p>{props.language==="Malayalam"?post.para:post.param}</p></div>
})}</div>)

}

export default Footer;