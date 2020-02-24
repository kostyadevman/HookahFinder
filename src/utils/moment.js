import moment from 'moment-timezone';
import 'moment/locale/ru';
import momentDurationFormatSetup from 'moment-duration-format';

const locale = 'ru';

momentDurationFormatSetup(moment);
moment.locale(locale);
moment.defaultFormat = 'YYYY-MM-DD';

export default moment;
