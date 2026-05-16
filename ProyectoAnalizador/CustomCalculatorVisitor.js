import CalculatorVisitor from "./generated/CalculatorVisitor.js";

export class CustomCalculatorVisitor extends CalculatorVisitor {
    constructor() {
        super();
        this.memory = new Map(); // Diccionario (memoria) para guardar variables
    } 
    
    visitAsignacion(ctx) {
        const id = ctx.ID().getText();
        const value = this.visit(ctx.expresion());
        this.memory.set(id, value);
        return value;
    }

    visitImprimir(ctx) {
        const value = this.visit(ctx.expresion());
        console.log(`\n> Salida del intérprete: ${value}`);
        return value;
    }

    visitExpresion(ctx) {
        let result = this.visit(ctx.termino(0)); 
        for (let i = 1; i < ctx.getChildCount(); i += 2) {
            let op = ctx.getChild(i).getText();
            let nextTermino = this.visit(ctx.getChild(i + 1));
            
            if (op === '+') result += nextTermino;
            else if (op === '-') result -= nextTermino;
            else if (op === '*') result *= nextTermino;
            else if (op === '/') result /= nextTermino;
        }
        return result;
    }

    visitTermino(ctx) {
        if (ctx.NUMERO()) {
            return parseFloat(ctx.NUMERO().getText());
        }
        if (ctx.ID()) {
            const id = ctx.ID().getText();
            if (this.memory.has(id)) return this.memory.get(id);
            console.error(`\n[!] Error de ejecución: Variable '${id}' no ha sido definida.`);
            return 0;
        }
        if (ctx.expresion()) {
            return this.visit(ctx.expresion());
        }
        return 0;
    }
} 