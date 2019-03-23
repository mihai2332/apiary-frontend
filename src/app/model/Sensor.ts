import {Measurement} from './Measurement';

export interface Sensor {
  sensorType: string;
  measurements: Measurement;
}
