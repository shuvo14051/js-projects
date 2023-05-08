let index = 0
function changeColor(){
    let colors = [
        '#f45c43','#eecda3','#ef629f','#eacda3','#d6ae7b', '#02aab0', '#00cdac','#fff',
        '#e29587','#000428','#004e92', '#ddd6f3','#faaca8','#7b4397', "#d66d75"
      ];

    document.body.style.backgroundColor = colors[index++]
    if(index > colors.length-1){
        index=0
    }
    

}