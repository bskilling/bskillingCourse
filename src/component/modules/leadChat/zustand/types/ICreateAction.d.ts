import { StoreApi } from 'zustand';
import IState from './IState';

type ICreateAction = (
  set: StoreApi<IState>['setState'],
  get: StoreApi<IState>['getState']
) => () => void;

export default ICreateAction;
