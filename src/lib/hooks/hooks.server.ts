import type { Handle } from '@sveltejs/kit';
import { validateSessionToken } from '$lib/server/auth';

export const handle: Handle = async ({ event, resolve }) => {
  const sessionToken = event.cookies.get('auth-session');
  if (sessionToken) {
    const { session, user } = await validateSessionToken(sessionToken);
    event.locals.session = session;
    event.locals.user = user;
  }

  const response = await resolve(event);

  if (event.url.pathname === '/login') {
    response.headers.set('Cache-Control', 'no-store');
  }

  return response;
};