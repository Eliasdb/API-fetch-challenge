function callBeer(url){
	fetch(url)
	.then(function (data){
		return data.json();
	})
	.then(data => {
		console.log(data);
		var beerOutput = document.getElementById('beerOutput');

		for (let i = 0 ; i < data.length ; i++){

			let card = document.createElement('div');
      		card.classList.add(`card`); //  Create the elements we need
      		let title = document.createElement('h3');
      		card.classList.add(`card-title`);
      		let tag = document.createElement('h4');
      		let p = document.createElement('p');
      		let img = document.createElement('img');
      		let wrapper = document.createElement('div');
      		let arrow = document.createElement('div');
      		arrow.classList.add('arrow-down');
      		p.classList.add('hidden');
			title.innerText = `${data[i].name}`; // Make the HTML of our span to be the first and last name of our Beer
			tag.innerText = `${data[i].tagline}`;
			p.innerText = `${data[i].description}`;
			img.src = `${data[i].image_url}`;
			beerOutput.appendChild(card);
			card.appendChild(wrapper);
			wrapper.appendChild(img);
			card.appendChild(title);
			card.appendChild(tag);
			card.appendChild(arrow)
			card.appendChild(p);

			card.addEventListener("click",showMore);
			function showMore(event){
				console.log(event.currentTarget);
				event.currentTarget.lastChild.classList.toggle("hidden");
				arrow.classList.toggle('active');
			};   
		}

		var sortPageButton = document.getElementById('alpha');
		sortPageButton.addEventListener('click', function(){
			var beerOutput = document.getElementById('beerOutput');
			beerOutput.sort(function(a, b) {
			    
			});
		})
	})

}


var section = document.getElementById('sect');

callBeer('https://api.punkapi.com/v2/beers?page=2&per_page=80');
var randomButton = document.getElementById('random');
randomButton.addEventListener('click',function(){
	beerOutput.innerHTML = '';
	callBeer('https://api.punkapi.com/v2/beers/random');
	section.setAttribute('style','height:100vh' );

})
var reloadButton = document.getElementById('reload');

reloadButton.addEventListener('click', function(){
	beerOutput.innerHTML = '';
	callBeer('https://api.punkapi.com/v2/beers?page=2&per_page=80');
	section.removeAttribute('style');
});
