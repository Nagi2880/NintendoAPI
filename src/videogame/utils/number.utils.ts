export const normalizeDecimal = (value: string): number => {
    return parseFloat(value.toString().replace(',', '.'));
};

