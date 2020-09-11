import CoverBlackPanther from './images/CoverBlackPanther.png';
import CoverDeadpool from './images/CoverDeadpool.png';
import CoverDrDoom from './images/CoverDrDoom.png';
import CoverHowardStark from './images/CoverHowardStark.png';
import CoverMaryJane from './images/CoverMaryJane.png';
import CoverRedSkull from './images/CoverRedSkull.png';
import CoverRonan from './images/CoverRonan.png';
import CoverSpiderMan from './images/CoverSpiderMan.png';
import CoverThanos from './images/CoverThanos.png';
import CoverVenom from './images/CoverVenom.png';
import CoverCivilWar from './images/CoverCivilWar.png';
import CoverHomecoming from './images/CoverHomecoming.png';

import { SectionData } from '../components/Characters/index';

export const heroes: Array<SectionData> = [
  { name: 'Homem Aranha', civil: 'Peter Parker', image: CoverSpiderMan },
  { name: 'Pantera Negra', civil: "T'Challa", image: CoverBlackPanther },
];

export const villains: Array<SectionData> = [
  { name: 'Caveira Vermelha', civil: 'Jöhann Schmidt', image: CoverRedSkull },
  { name: 'Doutor Destino', civil: 'Victor Von Doom', image: CoverDrDoom },
];

export const antiheroes: Array<SectionData> = [
  { name: 'Deadpool', civil: 'Wade Wilson', image: CoverDeadpool },
  { name: 'Venom', civil: 'Eddie Brock', image: CoverVenom },
];

export const aliens: Array<SectionData> = [
  { name: 'Thanos', civil: 'Deviant', image: CoverThanos },
  { name: 'Ronan', civil: 'Kree', image: CoverRonan },
];

export const humans: Array<SectionData> = [
  { name: 'Howard Stark', civil: 'Homem de Ferro', image: CoverHowardStark },
  { name: 'Mary Jane', civil: 'Homem Aranha', image: CoverMaryJane },
];

export const movies: Array<SectionData> = [
  { image: CoverCivilWar },
  { image: CoverHomecoming },
];
