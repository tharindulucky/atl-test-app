export default async function( { app, redirect } ) {
  if (app.$auth.loggedIn) return redirect("/");
}
