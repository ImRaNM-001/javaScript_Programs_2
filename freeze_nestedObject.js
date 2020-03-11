const obj = {
	name: 'sunny',
	age: 32,
	hobby: 'hitting',

	travel: {
		destination: 'malaysia',
		mode: 'air travel'
	}
};

Object.freeze(obj.travel);
obj.travel.mode = 'sea travel';		// trying to overwrite key of nested object (permitted and should be possible)
console.log(obj.travel.mode);		// as expected didn't changed nested object and prints air travel