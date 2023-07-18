import { HOME, ERROR, ABOUT } from "../constants/routes";
import pages from "../pages";

export const routes = [
  { id: 1, path: HOME, element: pages.Home },
  { id: 2, path: ABOUT, element: pages.About },
  { id: 3, path: ERROR, element: pages.Error },
];
