import * as calcRepo from '../repositories/calculation.repository';
import { evaluate } from 'mathjs';

export const performCalculation = async (userId: string, expression: string) => {
    const result = evaluate(expression).toString();
    return calcRepo.createCalculation({ userId, expression, result });
};

export const getCalculationHistory = async (userId: string) => {
    return calcRepo.findCalculationsByUserId(userId);
};