import RequestHandler from "./http.service";

export const UserSignup = (payload) => RequestHandler.post('/app-user/signup', payload)
