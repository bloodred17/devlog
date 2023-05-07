import * as dayjs from 'dayjs';
import * as customParseFormat from 'dayjs/plugin/customParseFormat';
import * as UTC from 'dayjs/plugin/utc';

dayjs.extend(UTC);
dayjs.extend(customParseFormat);

export { dayjs };
