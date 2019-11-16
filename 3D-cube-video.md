<h1 align='center'>3D CUBE VIDEO</h1>


- [x] [DEMO](https://tarikmanoar.github.io/Manoar-Diary/Demo/3d%20video/index.html)
- [x] [VIDEO](https://tarikmanoar.github.io/manoar-diary/Demo/3d%20video/animate.mp4)
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>CSS #D Video Cube</title>
		<link rel="stylesheet" href="style.css">
	</head>
	<body>
		<section>
				<video src="animate.mp4" autoplay="" muted="1"  loop=""></video>
			<div class="box">
				<div>
					<span>
						<video src="animate.mp4" autoplay="" muted="" loop=""></video>
					</span>
					<span>
						<video src="animate.mp4" autoplay="" muted="" loop=""></video>
					</span>
					<span>
						<video src="animate.mp4" autoplay="" muted="" loop=""></video>
					</span>
				</div>
			</div>
		</section>
	</body>
</html>
```
```css
*{padding: 0;margin: 0;box-sizing: border-box}
body{
	background: #000
}

section{
	position: relative;	
	height: 100vh;
	width: 100%;
}
 section .box{
 	position: absolute;
 	top: calc(50% - 200px);
 	left: calc(50% - 200px);
 	width: 400px;
 	height: 400px;
 	transform-style: preserve-3d;
 }
 section .box div{
 	position: absolute;
 	top: 0;left: 0;
 	width: 100%;
 	height: 100%;
 	transform-style: preserve-3d;
 	transform: rotateX(-20deg) rotateY(25deg) translate3d(-75px, -50px, 150px);
 }
 section .box div span{
 	position: absolute;
 	top: 0;left: 0;
 	display: block;
 	width: 100%;
 	height: 100%;
	border: 1px solid rgba(0, 0, 0, .1);
	background: #ccc;
 }

 section .box div span video{
 	position: absolute;
 	top: 0;left: 0;
 	width: 100%;
 	height: 100%;
 	object-fit: cover;
 	filter: blur(0px)
 }
 section video{
 	position: absolute;
 	top: 0;left: 0;
 	width: 100%;
 	height: 100%;
 	object-fit: cover;
 	filter: blur(15px)
 }

 section .box div span:nth-child(1){
 	transform: rotateX(0deg) translate3d(0, 0, 200px)
 } 
 section .box div span:nth-child(2){
 	transform: rotateY(90deg) translate3d(0, 0, -200px)
 }
 section .box div span:nth-child(2) video{
 	transform: rotateY(180deg)
 }
 section .box div span:nth-child(3){
 	transform: rotateX(90deg) translate3d(0, 0, 200px)
 }
 ```
