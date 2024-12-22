import {CONSTANTS} from "@app/constants/constants.ts";
import {SideBarPage} from "@shared/types";

export const getPageRoute = (page: SideBarPage) => {
    switch (page) {
        case "article":
            return CONSTANTS.ROUTER.ARTICLE;
        case "question":
            return CONSTANTS.ROUTER.QUESTION;
    }
}

export default getPageRoute;