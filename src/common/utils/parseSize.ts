import { UNITS } from '@shared/enums';
import { type Size } from '@shared/types/index';

export const parseSize = (input: Size): number => {
  const {size, unit} = input;
  if(unit === UNITS.kB) {
    return size;
  }

  if(unit === UNITS.MB) {
    return size * 1000;
  }

  if(unit === UNITS.GB) {
    return size * 1000000;
  }

  if(unit === UNITS.TB) {
    return size * 1000000000;
  }

  return 0;
}