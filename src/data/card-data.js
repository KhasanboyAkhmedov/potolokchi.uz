import { useTranslation } from "react-i18next";

export const useCardData = () => {
    const {t} = useTranslation();

    return [
        {
            "name" : t("card_info.high_quality"),
        },
        {
            "name" : t("card_info.individual_approach"),
        },
        {
            "name" : `${t("card_info.prof_team")}\n${t("card_info.prof_team2")}`,
        }
    ]
};

export default useCardData