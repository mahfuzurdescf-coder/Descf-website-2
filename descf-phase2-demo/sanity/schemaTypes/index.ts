import { author } from "./documents/author";
import { category } from "./documents/category";
import { event } from "./documents/event";
import { post } from "./documents/post";
import { programme } from "./documents/programme";
import { resource } from "./documents/resource";
import { siteSettings } from "./documents/siteSettings";
import { tag } from "./documents/tag";
import { teamMember } from "./documents/teamMember";
import { portableText } from "./objects/portableText";
import { seo } from "./objects/seo";

export const schemaTypes = [
  seo,
  portableText,
  siteSettings,
  programme,
  post,
  author,
  category,
  tag,
  resource,
  event,
  teamMember
];
