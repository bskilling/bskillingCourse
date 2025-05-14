import { StoreApi } from 'zustand';
import IState from './IState';

type ICreateActionWithParam<T> = (
  set: StoreApi<IState>['setState'],
  get: StoreApi<IState>['getState']
) => (param: T) => void;

export default ICreateActionWithParam;
