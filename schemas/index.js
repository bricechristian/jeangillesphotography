import global from "./global";
import blockContent from "./blockContent";
import photography from "./photography";
import page from "./page";
import menu from "./menu";
import menuItem from "./menuItem";

import { heroType, textHeadlineType, photographyGridType, photographyGridItem } from "./pageBuilder";

export const schemaTypes = [
	page,
	photography,
	blockContent,
	heroType,
	textHeadlineType,
	photographyGridType,
	photographyGridItem,
	menu,
	menuItem,
	global,
];
