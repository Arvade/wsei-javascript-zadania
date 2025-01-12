document.addEventListener('DOMContentLoaded', function () {

	var getSpan = document.querySelectorAll('span');
    var getUl = document.querySelectorAll('.list ul');

	for (let i = 0; i < getUl.length; i++) {
		getUl[i].style.display = 'none';
	}

	for (let i = 0; i < getSpan.length; i++) {
		getSpan[i].addEventListener('mouseover', (event) => {
			console.log(event.target);
			event.target.nextElementSibling.style.display = 'block';

		})

		getSpan[i].addEventListener('mouseout', (event) => {
			event.target.nextElementSibling.style.display = 'none';
		})

	};

});

class Students {
    constructor(students) {
        this.students = students;
    }

    countLetters() {
        this.numberOfLetters = this.students.map(name => name.length);
    }
}
