'use strict';

//	JavaScript is synchronous.
//	Execute the code block in order after hoisting.
//	hoisting: var, function declaration

console.log('1');

/*
setTimeout(function(){
	console.log('2');
}, 1000);
*/

setTimeout(() =>	console.log('2'), 1000);
console.log('3');

//	Synchronous callback
function printImmediately(print){
	print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout){
	setTimeout(print, timeout);
}

printWithDelay(() => console.log('async callback'), 2000);
console.clear();


//	Callback Hell example
class UserStorage{
	loginUser(id, password, onSuccess, onError){
		setTimeout(() => {
			if((id === 'kim' && password === 'pass') || (id === 'coder' && password === 'qwert')){
				onSuccess(id);
			}else{
				onError(new Error('not found'));
			}
		}, 2000);
	}

	getRoles(user, onSuccess, onError) {
		setTimeout(() => {
			if (user === 'kim') {
				onSuccess({name: 'kim', role: 'admin'});
			}else{
				onError(new Error('no access'));
			}
		}, 1000);
	}
}

const kim = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
kim.loginUser(
	id,
	password,
	(user) => {
		kim.getRoles(
			user,
			(userWithRole) => {
				alert(`Hello ${user.name}, you have a ${user.role} role`);
			},
			(error) => {}
		);
	},
	error => {
		console.log(error);
	}
)
















