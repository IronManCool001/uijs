window.addEventListener("DOMContentLoaded",()=>{
    var colors = {
        "red": "#DC2626",
        "blue": "#3B82F6",
        "green": "#10B981",
        "black": "#111",
        "yellow": "#FBBF24",
        "gray": "#6B7280"
    }

    document.querySelectorAll('button').forEach(btn => {
        var color = btn.getAttribute("color");
        var outline = btn.getAttribute("outline");
        if (Boolean(outline) === false) {
            if(Boolean(color)){
                console.log(color);
                btn.style.background=colors[color];
                btn.style.color="#fff"
                btn.style.border="none";
                btn.style.padding="15px 32px";
                btn.style.textAlign="center";
                btn.style.textDecoration="none";
                btn.style.display="inline-block";
                btn.style.fontFamily="Open Sans,sans-serif";
                btn.style.fontWeight=300;
                btn.style.fontSize="15px";
            }
        } else {
            if (Boolean(color)){
                btn.style.border="2px solid";
                btn.style.borderColor=colors[color];
                btn.style.color = colors[color];
                btn.style.backgroundColor="#fff";
                btn.style.padding="15px 32px";
                btn.style.textAlign="center";
                btn.style.textDecoration="none";
                btn.style.display="inline-block";
                btn.style.fontFamily="Open Sans,sans-serif";
                btn.style.fontWeight=300;
                btn.style.fontSize="15px";
            }
        }
    })

})