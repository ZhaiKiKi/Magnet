window.onload=function(){
	
	var datas=[
		{
			'src':'img/portfolio-img1.jpg',
			'proName':'interesting book',
			'des':'Brand Identity'
		},
		{
			'src':'img/portfolio-img2.jpg',
			'proName':'Exquisite packaging',
			'des':'Web Development'
		},
		{
			'src':'img/portfolio-img3.jpg',
			'proName':'Beautiful tape',
			'des':'Mobile App'
		},
		{
			'src':'img/portfolio-img4.jpg',
			'proName':'Streamlined CD',
			'des':'Logo Design'
		},
		{
			'src':'img/portfolio-img5.jpg',
			'proName':'Ancient printers',
			'des':'Social marketing'
		},
		{
			'src':'img/portfolio-img6.jpg',
			'proName':'Innovative design',
			'des':'Fyler Design'
		},
		{
			'src':'img/portfolio-img7.jpg',
			'proName':'interesting book',
			'des':'Brand Identity'
		},
		{
			'src':'img/portfolio-img8.jpg',
			'proName':'Exquisite packaging',
			'des':'Web Development'
		},
		{
			'src':'img/portfolio-img9.jpg',
			'proName':'Beautiful tape',
			'des':'Mobile App'
		},
		{
			'src':'img/portfolio-img10.jpg',
			'proName':'Streamlined CD',
			'des':'Logo Design'
		},
		{
			'src':'img/portfolio-img11.jpg',
			'proName':'Ancient printers',
			'des':'Social marketing'
		},
		{
			'src':'img/portfolio-img12.jpg',
			'proName':'Innovative design',
			'des':'Fyler Design'
		},
	]
	
	setTimeout(function(){
		document.getElementsByClassName('preloader')[0].style.display='none'
		new WOW().init();
	},1000)
	
	
	
	
	var oDiv = document.createElement('div');
	var oMain = document.getElementsByClassName('load')[0];
	var str = '';
	for(var i = 0; i < datas.length; i++) {
		str += `
			<div class="col-md-4 col-sm-6 wow bounceInUp">
						<a href="single-project.html">
							<div class="portfolio-thumb">
								<img src="${datas[i].src}" class="img-responsive" alt="Portfolio">
								<div class="portfolio-overlay">
									<div class="portfolio-item">
										<h3>${datas[i].proName}</h3>
										<small>${datas[i].des}</small>
									</div>
								</div>
							</div>
						</a>
					</div>
		`;
	}
	oDiv.innerHTML = str;
	oMain.appendChild(oDiv);
	
	
}
