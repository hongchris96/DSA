// HTML DOM ele are used: b, i, em, div, p
// str = "<div><b><p>hello</p></b></div>" 
// if ele tags nested correctly return true;
// if not nested correctly return the earliest ele tag that could be changed to fix the nesting
    // <div><i>hello</i></p> returns div

function StringChallenge(str) { 

    // code goes here
    let eleStack = [];
    let i = 0;
    let j = i + 1;
    while (j < str.length) {
        // making sure i starts with element tag
        if (str[i] !== "<") {
            i += 1;
            j = i + 1;
        } else if (str[j] !== ">") {
            j += 1; // until j hits the ending element tag
        } else {
            // element tag found
            let thisEle = str.slice(i+1, j); // element inside tag
            // if it's an opening tag, push to stack
            if (thisEle[0] !== "/") {
                eleStack.push(thisEle);
                // move on to the next segment
                i = j + 1;
                j = i + 1;
            } else {
                // if it's a closing tag, check if it matches last ele in stack
                if (thisEle.slice(1) === eleStack[eleStack.length-1]) {
                    // if match remove last ele from stack
                    eleStack.pop();
                    // move on to the next segment
                    i = j + 1;
                    j = i + 1;
                } else {
                    // first mismatch encountered
                    return eleStack[eleStack.length-1];
                }
            }
        }
    }
    return (eleStack.length === 0).toString();
}

console.log(StringChallenge("<div><b><p>hello</p></b></div>")); // "true"
console.log(StringChallenge("<div><div><b></b></div></p>")); // "div"
console.log(StringChallenge("<div>abc</div><p><em><i>test test</b></em></p>")); // "i"