import tColors from 'tailwindcss/colors';
import { DefaultColors } from 'tailwindcss/types/generated/colors';

const tailColors = tColors as any;

if ('lightBlue' in tailColors) delete tailColors.lightBlue;
if ('warmGray' in tailColors) delete tailColors.warmGray;
if ('trueGray' in tailColors) delete tailColors.trueGray;
if ('coolGray' in tailColors) delete tailColors.coolGray;
if ('blueGray' in tailColors) delete tailColors.blueGray;

interface Color extends DefaultColors {
  primary: string;
  darkPrimary: string;
  background: string;
  text: string;
  lightOrange: string;
  darkOrange: string;
  inactive: string;
}

const colors: Color = {
  ...tailColors,
  primary: '#0375F3',
  darkPrimary: '#25387A',
  background: '#F3F4F6',
  text: '#11315B',
  lightOrange: '#FF9432',
  darkOrange: '#C25705',
  inactive: '#8E8E93',
};

export default colors;
