import Price from '.';

export default {
  component: Price,
  title: 'Design System/Price',
};

export const priceThemeDefault = () => <Price value="60,99" />;
export const priceThemeSignAbove = () => <Price value="199,99" template="signAbove" />;
export const priceThemeLinear = () => <Price value="199,99" template="linear" />;

export const priceAbove1000 = () => <Price value="1590,90" />;
export const priceWithPrefix = () => <Price value="79,99" prefix="de" />;
export const priceWithPrefixAndSuffix = () => <Price value="159,90" prefix="por" suffix="/mês" />;
export const priceWithSuffix = () => <Price value="159,90" suffix="/mês" />;
