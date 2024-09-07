setTimeout(function(){
	let tables=document.getElementsByClassName('th-do-table');
	tables[0].style.marginTop="11px";
	tables[1].remove();

	let priceDiv=document.getElementsByClassName('grid product--option price');
	priceDiv[0].appendChild(tables[0]);
}, 11011);