let reichtangle = document.querySelector('.reichtangle');
let preussens_gloria = document.querySelector('.preussens_gloria');

preussens_gloria.volume = 0.3;
function play() {
	if (preussens_gloria.dataset.status == 'tocando') {
		preussens_gloria.pause();
		preussens_gloria.dataset.status = 'pausado';
	} else {
		preussens_gloria.play();
		preussens_gloria.dataset.status = 'tocando';
	}
}
reichtangle.onclick = play;