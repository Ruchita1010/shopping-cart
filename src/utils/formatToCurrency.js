/* By passing undefined, the NumberFormat constructor will use the default locale of the user's browser. This ensures that the formatting of numbers will be consistent with the user's preferred language and regional settings. */
const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: 'USD',
  style: 'currency',
});

export function formatToCurrency(number) {
  return CURRENCY_FORMATTER.format(number);
}
