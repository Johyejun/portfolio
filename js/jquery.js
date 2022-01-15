//수업시간에 수작업으로 만든 라이브러리

//DOM을 셀렉팅하는 통합함수 - API
function $(query){
  if(query[0]=="#"){
    return document.getElementById(query.slice(1));
  }else{
    return document.querySelectorAll(query);
  }
}


//태그의 속성을 제어하는 함수 - API
function attr($dom, attrName, attrVal){

  if(attrVal===undefined){
    return $dom.getAttribute(attrName);
  }else{
    $dom.setAttribute(attrName, attrVal);
  }

}