import {Sensor} from './Sensor';

export interface Module {
  name: string;
  sensors: Sensor;
}
