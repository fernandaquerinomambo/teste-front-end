let injectHTML = {
  /** @method repeat "Método para repetir um mesmo código HTML automaticamente"
   * @param {String} codeHTML "String contendo o código HTML que será repetido."
   * @param {Number} repeatNumber "Número que representa a quantidade de repetições."
   * @returns {String} "String com o resultado do código HTML repetido"
   */
  repeat(codeHTML, repeatNumber) {
    let result = '';
    for (let i = 0; i < repeatNumber; i++) {
      result += codeHTML;
    }

    return result;
  },
};
