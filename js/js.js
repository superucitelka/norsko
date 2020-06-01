let nav_buttons = [];
let tabs = document.getElementsByClassName("tab");
const banner_desc = document.getElementById("banner_desc");
const nav_buttons_styles = {
	inactive: "font-family: 'Roboto', sans-serif; display: block; color: black; text-align: center; font-size: 22px; padding: 15px 20px; text-decoration: none; border: 1px solid white; ",
  	active: "color: black; text-decoration: none; background-color: rgb(240, 240, 240); border: 1px solid rgb(240, 240, 240);"
};

for (let button of document.getElementsByClassName("nnav-item")){nav_buttons.push(button);}
for (let tab of tabs){$(tab).hide()}
for (let button of nav_buttons){
	button.addEventListener("click", ()=>{
  	banner_desc.innerText = button.innerText;
    for (let button_ of nav_buttons){button_.active = false; button_.style = nav_buttons_styles.inactive}
	for (let tab_ of tabs){$(tab_).hide()}
	$(tabs[nav_buttons.lastIndexOf(button)]).show()
	button.active = true;
    button.style = nav_buttons_styles.active;
  })
  let cur_button;
  button.addEventListener("mouseenter", ()=>{
  	if(nav_buttons.lastIndexOf(button) > 0){  
  		cur_button = nav_buttons[nav_buttons.lastIndexOf(button) - 1]
  		if (cur_button.active == true){
    		cur_button.style.borderRight = "1px solid black"
    	}}
    if(nav_buttons.lastIndexOf(button) < nav_buttons.length - 1){  
  		cur_button = nav_buttons[nav_buttons.lastIndexOf(button) + 1]
  		if (cur_button.active == true){
    		cur_button.style.borderLeft = "1px solid black"
    	}}
    if(button.active != true){
    	button.style.borderBottom = "1px solid black"}
    for(let buttonasing of nav_buttons){
    	buttonasing.style.paddingBottom -= 222; }
  })
	button.addEventListener("mouseleave", ()=>{
  	if(nav_buttons.lastIndexOf(button) > 0){  
  		cur_button = nav_buttons[nav_buttons.lastIndexOf(button) - 1]
  		if (cur_button.active == true){
    		cur_button.style.borderRight = ""
    	}}
    if(nav_buttons.lastIndexOf(button) < nav_buttons.length - 1){  
  		cur_button = nav_buttons[nav_buttons.lastIndexOf(button) + 1]
  		if (cur_button.active == true){
    		cur_button.style.borderLeft = ""
    	}}
    button.style.borderBottom = "1px solid rgb(240, 240, 240)"
    for(let button_ of nav_buttons){
        button_.style.paddingBottom += 222
    }
  })
  
}