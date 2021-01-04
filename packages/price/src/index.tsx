import { useState, useEffect } from 'react';

import * as S from './styles';
import { IPrice } from './interface';

export default function PriceComponent({ prefix, suffix, template = 'default', value }: IPrice) {
  const [price, setPrice] = useState('00');
  const [cents, setCents] = useState('00');

  useEffect(() => {
    const priceCents = value.split(',');
    setPrice(_formatThousandPrice(priceCents[0]));
    setCents(priceCents[1]);
  }, [value]);

  function _formatThousandPrice(price: string) {
    const priceLength = price.length;
    const priceLengthFormated = priceLength - 3;

    if (priceLength > 3) {
      return `${price.substr(0, priceLengthFormated)}.${price.substr(priceLengthFormated)}`;
    }

    return price;
  }

  return (
    <S.PriceContainer className={`price-container -${template} ${!prefix && '-noPrefix'}`}>
      <S.PrefixBox className="prefix-box">
        {prefix && <S.Prefix className="prefix">{prefix}</S.Prefix>}
        <S.Sign className="sign">R$</S.Sign>
      </S.PrefixBox>
      <S.ValueBox className="value-box">
        <S.Price className="price">{price}</S.Price>
        <S.Complement className="complement">
          <S.Cents className="cents">{cents}</S.Cents>
          {suffix && <S.Suffix className="suffix">{suffix}</S.Suffix>}
        </S.Complement>
      </S.ValueBox>
    </S.PriceContainer>
  );
}
