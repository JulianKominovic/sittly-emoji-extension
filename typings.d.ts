import {
  ExtensionContextMenuItems,
  ExtensionItems,
  ExtensionMetadata,
  ExtensionNoResultItems,
  ExtensionPages,
} from "sittly-devtools/dist/types";
import sittlyDevtools from "sittly-devtools";
declare global {
  interface Window {
    __SITTLY_EXTENSIONS__: {
      pages?: ExtensionPages;
      items?: ExtensionItems;
      context?: ExtensionContextMenuItems;
      noResults?: ExtensionNoResultItems;
      metadata: ExtensionMetadata;
    }[];
    React: any;
    SittlyDevtools: typeof sittlyDevtools;
  }
}

export {};
