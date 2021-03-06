import { SelectOptionType } from '../type';

export const METHOD = {
  MILLING: '밀링',
  LATHE: '선반',
};

export const MATERIAL = {
  ALUMINUM: '알루미늄',
  CARBONSTEEL: '탄소강',
  STEEL: '강철',
  COPPER: '구리',
  STAINLESS: '스테인리스강',
};

export const methodItem: SelectOptionType[] = [
  { id: 'milling', label: METHOD.MILLING },
  { id: 'lathe', label: METHOD.LATHE },
];

export const materialItem: SelectOptionType[] = [
  { id: 'aluminum', label: MATERIAL.ALUMINUM },
  { id: 'carbonSteel', label: MATERIAL.CARBONSTEEL },
  { id: 'steel', label: MATERIAL.STEEL },
  { id: 'copper', label: MATERIAL.COPPER },
  { id: 'stainless', label: MATERIAL.STAINLESS },
];

export const SELECT_NAME = {
  METHOD: '가공방식',
  MATERIAL: '재료',
};

export const STATUS = {
  PENDING: '대기중',
  ACTIVE: '상담중',
};
