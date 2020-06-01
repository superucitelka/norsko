let perfucator = 1
let badness = 1
let elements = [];
let divs = document.getElementsByName("panell")
let classNames = ["nnav", "nnav-item", "nav-image", "section-title", "section-under-title", "section-para", "sidepanel", "sidepanel-img", "sidepanel-table", "sidepanel-table tr", "sidepanel-title", "sidepanel-name", "sidepanel-info", "jumbotron"]
let borderTypes = ["dotted", "dashed", "solid", "double", "groove", "inset", "outset", "none", "hidden"]
let directions = ["top", "left", "right", "bottom"]
function Random_to(x){return Math.floor(Math.random()*x);}
function Random_rgb_color(){return Random_to(250);}
function Random_rgb(){return `rgb(${Random_rgb_color()}, ${Random_rgb_color()}, ${Random_rgb_color()})`}
function Random_border(){return `${Random_to(badness)}px ${Random_rgb()} ${borderTypes[Random_to(borderTypes.length)]}`}
function Random_paddmin(){return `${Random_to(50)}px ${Random_to(50)}px ${Random_to(50)}px ${Random_to(50)}px`}
function Random_size(){return Random_to(50) + "px"}
function Random_time(){return Random_to((1000))}
function Random_style(){
    for(let className of classNames){
        for(let element of document.getElementsByClassName(className))
            elements.push(element);
    }
    for(let element of elements){
        if(Random_to(100) < perfucator){
            $(document)
            $(element).css({
                "border-bottom": Random_border(),
                "border-left": Random_border(),
                "border-right": Random_border(),
                "border-top": Random_border(),
                "padding": Random_paddmin(),
                "margin": Random_paddmin(),
                "background-color": Random_rgb(),
                "color": Random_rgb(),
                "font-size": Random_size()
            })
        }
    }
    divs[0].className = "col-md-1"
    divs[1].className = "col-md-10 row"
    divs[2].className = "col-md-7 row"
    divs[3].className = "col-md-1"

}

document.addEventListener("click", ()=>{
    Random_style()
    perfucator *= 2
    badness += 2
})
