let index = 0
function changeColor(){
    let colors = ["red","Blue","Yellow","Green", "Orange",  
                  "YellowGreen", "SlateBlue", "Salmon"
                ];

    document.body.style.backgroundColor = colors[index++]
    if(index > colors.length-1){
        index=0
    }
}