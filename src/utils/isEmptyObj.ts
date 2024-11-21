/**
 * Verifica se um objeto está vazio.
 * O objeto é considerado vazio se todas as suas propriedades forem `null`, `undefined` ou uma string vazia (`''`).
 *
 * @param {object} obj - O objeto a ser verificado.
 * @returns {boolean} Retorna `true` se o objeto for vazio (ou seja, todas as suas propriedades são `null`, `undefined` ou `''`), caso contrário, retorna `false`.
 *
 * @example
 * const obj1 = { a: null, b: undefined, c: '' };
 * console.log(isObjectEmpty(obj1)); // true
 * 
 * const obj2 = { a: 1, b: null, c: '' };
 * console.log(isObjectEmpty(obj2)); // false
 */
export default function isEmptyObj(obj: object): boolean {

    if (obj === null) {
        return true;
    }

    const keys = Object.keys(obj);

    let i = 0;

    while (i < keys.length) {
        const key = keys[i];
        const value = (obj as any)[key];

        if (value === null || value === undefined || value === '') {
            i++;
            continue;
        }

        return false;
    }

    return true;
}
