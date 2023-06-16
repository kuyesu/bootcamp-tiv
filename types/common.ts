// import type { University, Site, Program } from "@prisma/client";
import type { PropsWithChildren } from "react";

export type WithChildren<T = {}> = T & PropsWithChildren<{}>;

// export type WithClassName<T = {}> = T & {
//   className?: string;
// };

// export interface WithSiteUniversity extends University {
//   site: Site | null;
// }

// export interface WithSiteProgram extends Program {
//   site: Site | null;
// }

// export interface WithUniversityProgram extends Program {
//   university: University | null;
// }

// export interface WithUniversityCampus extends Program {
//   university: University | null;
// }
