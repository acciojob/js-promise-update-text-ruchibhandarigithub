//your JS code here. If required.
let div = document.getElementByID("output");
let prom = function(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve('Hello, world!');
		},1000);
	})
		
}
prom.then((result)=>{
	div.textContent=result;
});
