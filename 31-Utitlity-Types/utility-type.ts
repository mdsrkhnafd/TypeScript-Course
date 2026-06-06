import { StudentInfoType } from "./../23-Module/module";
// Interview Definition

// Utility Types are built-in TypeScript types that
// transform existing types into new reusable types,
// reducing code duplication and improving type safety.

interface CollageType {
  name: string;
  students: number;
  isActive: boolean;
  address?: string;
}
/// TODO: In Interface
// 1. Partial<Type>: Makes all properties of Type optional.
// let CollageP: Partial<CollageType> = {
//   name: "ABC Collage",
//   students: 5000,
//   address: "123 Main St",
// };

/// TODO: In Function
// function GetCollageInfoP(collage: Partial<CollageType>) {
//   console.log(collage.name);
//   console.log(collage.students);
//   console.log(collage.isActive);
//   console.log(collage.address);
// return collage;
// }

// GetCollageInfoP({ name: "ABC Collage", students: 5000 });

// 2. Required<Type>: Makes all properties of Type required.
// let CollageR: Required<CollageType> = {
//   name: "ABC Collage",
//   students: 5000,
//   isActive: true,
//   address: "123 Main St",
// };

// CollageR.name = "XYZ Collage";

/// TODO: In Function
// function GetCollageInfoR(collage: Required<CollageType>) {
//   console.log(collage.name);
//   console.log(collage.students);
//   console.log(collage.isActive);
//   console.log(collage.address);
// return collage;
// }

// GetCollageInfoR({ name: "ABC Collage", students: 5000, isActive: true, address: "123 Main St" });

// 3. Readonly<Type>: Makes all properties of Type read-only (cannot be reassigned).
// let CollageRO: Readonly<CollageType> = {
//   name: "ABC Collage",
//   students: 5000,
//   isActive: true,
//   address: "123 Main St",
// };

// CollageRO.name = "XYZ Collage"; // ❌ Error // TypeScript complains because name is read-only.

/// TODO: In Function
// function GetCollageInfoRO(collage: Readonly<CollageType>) {
//   console.log(collage.name);
//   console.log(collage.students);
//   console.log(collage.isActive);
//   console.log(collage.address);
// return collage;
// }

// GetCollageInfoRO({ name: "ABC Collage", students: 5000, isActive: true, address: "123 Main St" });

// 4.Pick<Type, Keys>: Creates a new type by picking a set of properties Keys from Type.

// let CollageP: Pick<CollageType, "name" | "isActive"> = {
//   name: "ABC Collage",
//   isActive: true,
//   //   address: "123 Main St", // ❌ Error // TypeScript complains because address is not in the picked keys.
// };

/// TODO: In Function
// function GetCollageInfoP(collage: Pick<CollageType, "name" | "isActive">) {
//   console.log(collage.name);
//   console.log(collage.isActive);
// return collage;
// }

// GetCollageInfoP({ name: "ABC Collage", isActive: true });

// 5.Omit<Type, Keys>: Creates a new type by omitting a set of properties Keys from Type.

// let CollageO: Omit<CollageType, "address"> = {
//   name: "ABC Collage",
//   students: 5000,
//   isActive: true,
// };

/// TODO: In Function
// function GetCollageInfoO(collage: Omit<CollageType, "address">) {
//   console.log(collage.name);
//   console.log(collage.students);
//   console.log(collage.isActive);
// return collage;
// }

// GetCollageInfoO({ name: "ABC Collage", students: 5000, isActive: true });

// 6. Exclude<Type, Keys>: Creates a new type by excluding a set of properties Keys from Type.

// let CollageE: Exclude<CollageType, "address"> = {
//   name: "ABC Collage",
//   students: 5000,
//   isActive: true,
// };

/// TODO: In Function
// function GetCollageInfoE(collage: Exclude<CollageType, "address">) {
//   console.log(collage.name);
//   console.log(collage.students);
//   console.log(collage.isActive);
// return collage;
// }

// GetCollageInfoE({ name: "ABC Collage", students: 5000, isActive: true });

// type APIStatus = "success" | "fail" | "loading";
// var APICall: Exclude<APIStatus, "loading"> = "success";

// APICall = "fail";
// // APICall = "loading"; // ❌ Error // TypeScript complains because loading is excluded.

// console.log(APICall);

// 7. Extract<Type, Keys>: Creates a new type by extracting a set of properties Keys from Type.

// type Roles = "Admin" | "Doctor" | "Patient";

// var MedicalRole: Extract<Roles, "Doctor" | "Patient"> = "Patient";
// MedicalRole = "Doctor";

// console.log(MedicalRole);

// 8. NonNullable<Type>: Creates a new type by removing null and undefined from Type.

// let CollageNN: NonNullable<CollageType> = {
//   name: "ABC Collage",
//   students: 5000,
//   isActive: true,
//   address: "123 Main St",
// };

// CollageNN.address = null; // ❌ Error // TypeScript complains because address is null.
// CollageNN.address = undefined; // ❌ Error // TypeScript complains because address is undefined.

// function GetCollageInfoNN(collage: NonNullable<CollageType>) {
//   console.log(collage.name);
//   console.log(collage.students);
//   console.log(collage.isActive);
//   console.log(collage.address);
//   return collage;
// }

// GetCollageInfoNN({ name: "ABC Collage", students: 5000, isActive: true, address: "123 Main St" });

// type RandomTYpe = string | number | null | undefined | boolean | string[];

// var RandomData: NonNullable<RandomTYpe> = "Mudasir";
// RandomData = 123;
// RandomData = false;
// RandomData = ["Mudasir", "Ali"];
// // RandomData = null; // ❌ Error // TypeScript complains because RandomData is null.
// // RandomData = undefined; // ❌ Error // TypeScript complains because RandomData is undefined.

// console.log(RandomData);

// 9. Record<Keys, Type>: Creates a new type by mapping a set of keys to a Type.

// let CollageR: Record<"name" | "address", string> = {
//   name: "ABC Collage",
//   address: "123 Main St",
// };

// function GetCollageInfoR(collage: Record<"name" | "address", string>) {
//   console.log(collage.name);
//   console.log(collage.address);
//   return collage;
// }

// GetCollageInfoR({ name: "ABC Collage", address: "123 Main St" });

type SideRole = "Admin" | "Doctor" | "Patient";

// var SiteRoleOption: SideRole = "Admin";

const role: Record<SideRole, string> = {
  Admin: "Mudasir",
  Doctor: "Osama",
  Patient: "Ali",
};

// console.log(role[SiteRoleOption]);

console.log(role);
