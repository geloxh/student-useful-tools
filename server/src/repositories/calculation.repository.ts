import Calculation, { ICalculation } from '../models/Calculation.model';

export const createCalculation = (data: Partial<ICalculation>) => Calculation.create(data);
export const findCalculationsByUserId = (userId: string) => Calculation.find({ userId }).sort({ createdAt: -1 }).limit(50);