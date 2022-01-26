const getAdmins = (map) => {
	let admins = [];

	for ([key, value] of map) {
		if (value === 'ADMIN') {
			admins.push(key);
		}
	}

	return admins;
};

const userTypes = new Map();

userTypes.set('Kauê', 'Admin');
userTypes.set('Rafael', 'User');
userTypes.set('Evilyn', 'Admin');
userTypes.set('Karolina', 'User');
userTypes.set('Lucas', 'User');

console.log(getAdmins(userTypes));