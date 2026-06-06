// What is Namespace in TypeScript?

// A Namespace is a way to group related code together and avoid naming conflicts.

// Think of it as a container for:

// Variables
// Functions
// Interfaces
// Classes
// Types

// Simple Definition

// A Namespace is used to organize code under a
// single name and prevent conflicts between identifiers.

// One-Line Summary

// A Namespace groups related code under one name to avoid conflicts,
// but in modern TypeScript, Modules (import/export) are preferred over Namespaces. 🚀

namespace UserNamespace {
  export class User {
    login() {
      console.log("User logged in");
    }
  }

  // namespace
  export function logout() {
    console.log("User logged out");
  }

  // private variable
  export const password = "123456";
}

namespace AdminNamespace {
  export class Admin {
    login() {
      console.log("Admin logged in");
    }
    logout() {
      console.log("Admin logged out");
    }
  }
}

// const user12 = new UserNamespace.User();
// const admin = new AdminNamespace.Admin();

// user12.login();
// UserNamespace.logout();
// console.log(UserNamespace.password);
// admin.login();
