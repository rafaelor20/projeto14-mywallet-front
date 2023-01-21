export const registerPostUrl = "https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up";
export const registerPostObj = {
	email: "",
	name: "",
	password: ""
};


export const loginPostUrl = "https://mock-api.driven.com.br/api/v4/driven-plus/auth/login";
export const loginPostSendObj = {
	email: "...",
	password: "..."
};

export const loginPostReceiveObj =
{
	id: 0,
	name: "",
	cpf: "",
	email: "",
	password: "",
	token: "",
	membership: {
		id: 0,
		name: "",
		image: "",
		price: "",
		perks: []
	}
};

export const subscriptionsLstGetUrl = "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships";
// config = { headers: { Authorization: `Bearer ${token}` } };


export const subscriptionLstReceiveGetObj = [];


export const subscriptionGetUrl = "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/" // + ID_DO_PLANO
export const subscriptionObj = {
	id: 0,
	name: "",
	image: "",
	price: "",
	perks: []
}

export const subscribeGetUrl = "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions";
export const subscribeGetSendObj = {
    membershipId: 0,
    cardName: "",
    cardNumber: "",
    securityNumber: 0,
    expirationDate: ""
}
// config = { headers: { Authorization: `Bearer ${token}` } };

export const subscribeGetReceiveObj = {
    id: 0,
    name: "",
    image: "",
    price: "",
    perks: []
}

export const habitsTodayUrl = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
// config = { headers: { Authorization: `Bearer ${token}` } };
export const habitsTodayReceive = [
	{
		"id": 0,
		"name": "",
		"done": false,
		"currentSequence": 0,
		"highestSequence": 0
	}
];

export const changePlanGetUrl = "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions";

export const changePlanSendObj = {
    membershipId: 0,
    cardName: "",
    cardNumber: "",
    securityNumber: 0,
    expirationDate: ""
}
// config = { headers: { Authorization: `Bearer ${token}` } };


export const changePlanReceiveObj = {
    id: 0,
    name: "",
    image: "",
    price: "",
    perks: []
}

export const deletePlanUrl = "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions"
// config = { headers: { Authorization: `Bearer ${token}` } };
