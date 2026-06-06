const user12 = new UserNamespace.User();
const admin = new AdminNamespace.Admin();

user12.login();
UserNamespace.logout();
console.log(UserNamespace.password);
admin.login();
