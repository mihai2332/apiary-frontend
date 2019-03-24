import {Sensor} from './Sensor';

export interface Module {
  uuid: string;
  name: string;
  sensors: Sensor;
}
