import I18n, {getLanguages} from 'react-native-i18n';

import en from './en';
import es from './es';


I18n.translations = {
    en,
    es,
}

getLanguages().then((languages: any) => {
    console.log('getLanguages', languages);
}).catch((err: any) => {
    console.log('Error', err);
});

export default I18n;