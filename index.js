let lis = document.querySelectorAll("li");

for(let i =0; i<lis.length; i++){
    lis[i].addEventListener("mouseover", function(){
        this.classList.add("selected");
    });

    lis[i].addEventListener("mouseout", function(){
        this.classList.remove("selected");
    });

    lis[i].addEventListener("click", function(){
        // if(this.classList.contains("done")){
        //     this.classList.remove("done");
        // } else{
        //     this.classList.add("done");
        // }
        this.classList.toggle("done");
    });
}