const init = (_id) => {
    document.getElementById(_id).style.boxSizing="border-box",
    document.getElementById(_id).style.margin="0px"
    document.getElementById(_id).style.fontFamily="'Open Sans','Poppins','Roboto',sans-serif";
}
const Text = (_id,text,type,tid,tclass) => {
    var Text = document.createElement(type);
    Text.innerHTML = text;
    if(Boolean(tid) === false && Boolean(tclass)) {
        Text.className=tclass;
        document.getElementById(_id).appendChild(Text);
    } else if (Boolean(tclass) === false && Boolean(tid)) {
        Text.id=tid
        document.getElementById(_id).appendChild(Text)
    } else if (Boolean(tid) === false && Boolean(tclass) === false) {
        document.getElementById(_id).appendChild(Text)
    } else {
        Text.id=tid
        Text.className=tclass
        document.getElementById(_id).appendChild(Text);
    }
}
const Button = (_id,text,color,outline,bid,bclass) => {
    var Btn = document.createElement("button");
    Btn.innerHTML = text;
    if(Boolean(color)&& Boolean(outline) === false){
        Btn.setAttribute("color",color)
    } else if (Boolean(color) === false && Boolean(outline)) {
        Btn.setAttribute("outline",true)
    } else if (Boolean(color) && Boolean(outline)) {
        Btn.setAttribute("outline",true);
        Btn.setAttribute("color",color)
    }
    if(Boolean(bid) === false && Boolean(bclass)) {
        Btn.className =bclass
        document.getElementById(_id).appendChild(Btn);
    } else if (Boolean(bid) && Boolean(bclass) === false) {
        Btn.id = bid;
        document.getElementById(_id).appendChild(Btn);
    } else if (Boolean(bid) && Boolean (bclass)) {
        Btn.id=bid;
        Btn.className = bclass;
        document.getElementById(_id).appendChild(Btn)
    } else {
        document.getElementById(_id).appendChild(Btn);
    }
}

const Input = (_id,placeholder,type,iid,iclass) => {
    var input = document.createElement("input");
    input.type=type;
    if(type === "text") {
        input.setAttribute("placeholder",placeholder);
        input.style.padding="12px 20px";
        input.style.margin="8px 0";
        input.style.boxSizing="border-box";
    }
    if(Boolean(iid) && Boolean(iclass) === false){
        input.id=iid;
        document.getElementById(_id).appendChild(input);
    } else if (Boolean(iid)===false && Boolean(iclass)){
        input.className=iclass;
        document.getElementById(_id).appendChild(input);
    } else if (Boolean(iid) && Boolean(iclass)) {
        input.id=iid;
        input.className=iclass;
        document.getElementById(_id).appendChild(input);
    } else {
        document.getElementById(_id).appendChild(input);
    }
}
const Break = (_id) => {
    document.getElementById(_id).appendChild(document.createElement("br"));
}
export {init, Text,Button,Input,Break};