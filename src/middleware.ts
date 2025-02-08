export { default } from "next-auth/middleware";

export const config = { matcher: ["/dashboard"] }; // ROUTES THAT NEEDS AUTHENTICATION => CHANGE BACK TO /dashboard
