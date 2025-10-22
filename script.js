//your JS code here. If required.
  
const output = document.getElementById("output");
const btn = document.getElementById('download-image-button');
const loader = document.getElementById('loader')
const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

 function downloadImage(url) {
	return  new Promise((resolve,reject)=>{
		const img = new Image();
    img.src = url;

    img.onload = () => resolve(url); 
	img.onerror = () => reject("Failed to load image: " + url);
})
}


function downloadImages(){
	loader.style.display="block";
const p1 = downloadImage(images[0].url)
const p2 = downloadImage(images[1].url)
const p3 = downloadImage(images[2].url)
	
	Promise.all([p1,p2,p3]).then((data)=>{
	loader.style.display='none';
	btn.style.display='none';	
	data.forEach((item)=>{
		const img = document.createElement('img');
		img.src=item;
		output.appendChild(img);
	})
}).catch((e)=>{
	loader.style.display='none';
	btn.style.display='none';	
	const div = document.createElement('div');
	div.id='error';
	const body = document.querySelector('body');
	div.innerText="Error";
	body.appendChild(div);
})
}
