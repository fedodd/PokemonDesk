import toCapitalizeFirstLetter from './toCapitalizeFirstLetter';

describe('toCapitalizeFirstLetter', () => {
  test('get name, and capitalize first letter, and all other letters to lowercase', () => {
    const string = toCapitalizeFirstLetter('pIKAcHU');
    expect(string).toEqual('Pikachu');
  });
});
