import { translations } from "@shared/i18n";
import { FC, ReactElement } from "react";

export const SettingsPage: FC = (): ReactElement => {
    return (
        <div className='settings-page'>
            <h2 className='settings-page__header'>
                {translations.settingsPage_header}
            </h2>
        </div>
    )
}