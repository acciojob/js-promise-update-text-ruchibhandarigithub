//your JS code here. If required.
let div = document.getElementByID("output");
div.innerText = function(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve('Hello, world!');
		},1000);
	})
}
