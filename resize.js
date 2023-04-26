var images = document.getElementsByTagName('img');

const script = document.createElement('script');
script.innerHTML = `
function leftClick(){
	var leftImage= document.getElementById("leftImage");
	leftImage.click();
}

function rightClick(){
	var rightImage= document.getElementById("rightImage");
	rightImage.click();
}


// define a handler
function doc_keyUp(e) {
    if ( e.code === 'KeyL') {
        rightClick();
    } else if (e.code === 'KeyK') {
    	leftClick();
    }
}
// register the handler 
document.addEventListener('keyup', doc_keyUp, false);
`;
document.head.appendChild(script);

const style = document.createElement('style');
style.innerHTML = `
.container {
  position: relative;
  height: 100%;
}

.container img {
  width: 100%;
  height: auto;
}

.container .btn {
  position: absolute;
  top: 10%;
  left: 10%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: #555;
  color: white;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
  opacity: 0.2;
}

.container .btn:hover {
  background-color: black;
}
    `;
document.head.appendChild(style);

//const imgStyle = "height: 100%"
const imgStyle = "width: auto; max-height: 100%;" 
var index = -1;
for (var i = 0; i < images.length; i++) {
	index = images[i].src.indexOf(".cz/upload");
	
	if (index > 0) {
		images[i].setAttribute('style', imgStyle);
		images[i].setAttribute('id', 'mainimg');

		
		const image = images[i]; 
		const anchor = document.images[i].parentElement;
		const parentEl = anchor.parentElement;
		anchor.remove();
	    while (anchor.lastElementChild) {
	      anchor.removeChild(anchor.lastElementChild);
	    }

		const button = document.createElement('button');
		button.innerHTML = "+/-"
		button.setAttribute('onClick', "const imgEl = document.getElementById('mainimg');imgEl.hasAttribute('style')?imgEl.removeAttribute('style'):imgEl.setAttribute('style', '" + imgStyle + "');");
		button.setAttribute("class", "btn");
		const div = document.createElement('div');
		div.setAttribute("class", "container");
		
		anchor.appendChild(image);
		div.appendChild(anchor)
		div.appendChild(button);
		parentEl.appendChild(div);

		console.log(image);
		console.log(parentEl);
		console.log(anchor);
		console.log(button);
		console.log(div);
		console.log(document);
/*
		org_html = document.images[i].outerHTML;
		a_html = document.images[i].parentElement.outerHTML;
		console.log(a_html);
		new_html = "<div class='container'>" + a_html + "<button class='btn' onClick=\"const imgEl = document.getElementById('mainimg');imgEl.hasAttribute('style')?imgEl.removeAttribute('style'):imgEl.setAttribute('style', '" + imgStyle + "');\">+/-</button></div>";
		images[i].parentElement.outerHTML = new_html;*/

	}
};
