'use server';

import { cookies } from 'next/headers';

export async function createCookie(cookieObj) {
	cookies().set(cookieObj);
}

export async function checkCookie() {
	const cookie = cookies().get('htp');
	if (cookie?.value === 'verified') {
		return false;
	}
	return true;
}