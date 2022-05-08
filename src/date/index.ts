import dayjs from 'dayjs';
import 'dayjs/locale/ru'; // import locale
require('dayjs/locale/ru');
import relativeTime from 'dayjs/plugin/relativeTime';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
dayjs.extend(relativeTime);
dayjs.locale('ru'); // use locale

const bib = dayjs;
export default bib;
