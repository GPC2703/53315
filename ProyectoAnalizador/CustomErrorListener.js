import antlr4 from 'antlr4';

export class CustomErrorListener extends antlr4.error.ErrorListener {
    constructor() {
        super();
        this.errors = [];
    }

    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        // Guardamos el error capturado en nuestro arreglo
        this.errors.push({
            line: line,
            column: column,
            msg: msg
        });
    }

    hasErrors() {
        return this.errors.length > 0;
    }
}
 