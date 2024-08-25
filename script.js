	const menu = document.querySelector('.menu')
	const menuList = document.querySelector('nav ul')

	menu.addEventListener('click',()=>{
		menuList.classList.toggle('showmenu')
})
	
	let image = document.querySelector('.image')
	let button = document.querySelectorAll('.side.but')

	let imgList =["img1","img2","img3"]
	let index=0;

	button.forEach((button)=>{
		button.addEventListener("click",() =>{
			if(button.classList.contains("but-left"))
			{
				index--;
				if(index<0)

				{
					index=imgList.length-1;
				}
				image.style.background=`url('${imgList[index]}.jpg') center/cover no-repeat)`

			}
			else
			{
				index++;
				if(index==imgList.length)

				{
					index=0;
				}
				image.style.background=`url('${imgList[index]}.jpg') center/cover no-repeat)`
			}
		})
	})