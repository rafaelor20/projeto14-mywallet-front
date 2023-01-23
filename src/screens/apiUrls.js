export const registerPostUrl = "http://127.0.0.1:5000/sign-up";
export const registerPostObj = {
	email: "",
	name: "",
	password: "",
	confirmPassword: "",
	transfers: []
};

export const loginPostUrl = "http://127.0.0.1:5000/sign-in";
export const loginPostSendObj = {
	email: "...",
	password: "...",
};

export const loginPostReceive = {
	name: "",
	token: ""
};

export const transferPostUrl = "http://127.0.0.1:5000/transfer";

export const transfersPostUrl = "http://127.0.0.1:5000/transfers";
export const transfersPostSendObj = {name: ''}
export const transfersGetReceive = [];