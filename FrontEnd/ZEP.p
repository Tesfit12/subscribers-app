1) ==-> when u r using border-radius DO NOT USE % USE px it is better

2) ==-> Be care full with the (exact path="/EmailPage" ) <-== it wasts my time ! 
        if U forgot to add that it will always run only the first page....!

3) ==-> when i was trying to change the six circles while someone clicks on the next button -> it was NOT working 
        The reason is -> the e.preventDefault() affects both the a link which holds the URL and the button .
        it seems it works but it quickly returns to the previous state.

4) ==-> DO NOT use underscore when U R creating folder just capital letters only


5) ==->  import styled from '@emotion/styled' // will help u if you want to have your CSS in your component file with react

6) ==--> changing the name of Any folders or files in the project can 
        cause a hug problem on saving or merging or committing.!!!!!! 



7) ====-> { LINKS }   {/* <a onClick={()=> handleNextHandler()} href={!userText ? '#': '/EmailPage/Box_two'}> // TODO u need to think about this  */}
          It will help you to not able if the field is empty




8) ======--> USE always always in your routes(server) async !IMPORTANT


9) =======--> use useRef in Every your input !IMPORTANT


10) ======-> Cannot change font size of text field in material ui ?????

          #####--> just give an id inside your TextField and target it on your css file

=========================================================================================
=========================================================================================

function findUrl(text) {
    var regex = /(https?:\/\/[^\s]+)/g;
    return text.replace(regex, '<p href="$1">$1</p>')
}

var text = 'Hello this is my facebook http://www.facebook.com and this is my google http://google.com';
console.log(findUrl(text))



// this route is going to render 

app.get("/findUrl", (req, res) => {
    function findUrl(text) {
        var regex = /(https?:\/\/[^\s]+)/g;
        return text.replace(regex, '<a href="$1">$1</a>')
    }

    var text = 'Hello this is my facebook http://www.facebook.com and this is my google http://google.com';
    result = findUrl(text)
    res.send(result)

    // TODO  if it is in react DOM we need to use 
    // import Linkify from 'react-linkify';
    {/* <Linkify>{your result here }</Linkify> */ }

});

// result
// Hello this is my facebook <a href="http://www.facebook.com"></a> and this is my google <a href="http://google.com"></a>

=========================================================================================
=========================================================================================

11) ======> YOU CAN NOT USE TERNARY OPERATOR INSIDE AN IF FUNCTION
=========================================================================================
=========================================================================================