import styled from 'styled-components';

export const PriceContainer = styled.div`
  display: flex;
  font: 14px Arial;

  &.-default,
  &.-signAbove {
    > .prefix-box {
      line-height: 1;
      margin-right: 5px;

      > .sign {
        display: block;
      }
    }

    > .value-box {
      align-items: flex-start;
      display: flex;
      line-height: 1;

      > .price {
        display: inline-block;
        font-size: 48px;
        line-height: 0.75;
        margin-right: 2px;
      }

      > .complement {
        display: flex;
        flex-wrap: wrap;

        > .cents {
          font-size: 20px;
          position: relative;
          top: -1px;
          width: 100%;
        }

        > .suffix {
          display: block;
          font-size: 11px;
          position: relative;
          top: 4px;
          width: 100%;
        }
      }
    }
  }

  &.-default {
    &.-noPrefix {
      align-items: flex-end;
    }

    > .prefix-box {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      > .prefix {
        position: relative;

        /* @media (max-width: 1023px) {
          top: -7px;
        }

        @media (min-width: 1024px) {
          top: -9px;
        } */
      }
    }

    > .sign {
      font-size: 20px;
    }

    > .prefix {
      font-size: 13px;
      font-weight: bold;
    }
  }

  &.-signAbove {
    align-items: flex-start;

    > .prefix-box > .prefix {
      display: none;
    }

    > .sign {
      font-size: 20px;
    }
  }

  &.-linear {
    font-size: 48px;
    line-height: 0.75;
  }
`;

export const PrefixBox = styled.span`
  display: inline-block;
`;

export const Prefix = styled.span``;

export const Sign = styled.span``;

export const ValueBox = styled.span`
  display: inline-flex;
`;

export const Price = styled.span``;

export const Complement = styled.span`
  display: inline-block;

  > .cents {
    &::before {
      content: ',';
    }
  }
`;

export const Cents = styled.span``;

export const Suffix = styled.span``;

/*
  &.-default,
  &.-signAbove
    > .prefix-box
      line-height: 1
      margin-right: 5px

      > .sign
        display: block

    > .value-box
      align-items: flex-start
      display: flex
      line-height: 1

      > .price
        display: inline-block
        line-height: 38.5px
        margin-right: 2px

      > .complement
        display: flex
        flex-wrap: wrap

        > .cents
          font-size: 20px
          position: relative
          top: -1px
          width: 100%

        > .suffix
          display: block
          font-size: 11px
          position: relative
          top: 4px
          width: 100%

  &.-default
    align-items: flex-end

    > .prefix-box
      > .prefix
        display: block
        position: relative

        @media (max-width: 1023px)
          top: -7px

        @media (min-width: 1024px)
          top: -9px

      > .sign
        font-size: 20px

      > .prefix
        font-size: 13px
        font-weight: bold

  &.-signAbove
    align-items: flex-start

    > .prefix-box
      > .prefix
        display: none

      > .sign
        font-size: 20px

  &.-linear
      font-size: 48px */
