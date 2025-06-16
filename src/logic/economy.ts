import type { EconomyState } from '../types';

export const initialEconomy: EconomyState = {
  cash: 10000,
  debt: 5000,
  income: 2000,
  expenses: 1500,
  investorCut: 0.15,
};
