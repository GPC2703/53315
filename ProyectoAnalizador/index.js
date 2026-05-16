import CalculatorLexer from "./generated/CalculatorLexer.js";
import CalculatorParser from "./generated/CalculatorParser.js";
import { CustomCalculatorListener } from "./CustomCalculatorListener.js";
import { CustomCalculatorVisitor } from "./CustomCalculatorVisitor.js";
import { CustomErrorListener } from "./CustomErrorListener.js";
import antlr4, { CharStreams, CommonTokenStream, ParseTreeWalker } from "antlr4";
import readline from 'readline';
import fs from 'fs';

async function main() {
    let input;
    try {
        const inputPath = new URL('./input.txt', import.meta.url);
        input = fs.readFileSync(inputPath, 'utf8');
    } catch (err) {
        input = await leerCadena(); 
        console.log(input);
    }

    let inputStream = CharStreams.fromString(input);
    let lexer = new CalculatorLexer(inputStream);
    const errorListener = new CustomErrorListener();
    lexer.removeErrorListeners();
    lexer.addErrorListener(errorListener);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new CalculatorParser(tokenStream);
    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);
    
    let trees = [];
    let prevIndex = -1;
    while (tokenStream.LA(1) !== antlr4.Token.EOF) {
        if (tokenStream.index === prevIndex) break; 
        prevIndex = tokenStream.index;
        trees.push(parser.instruccion());
    }
    
    if (errorListener.hasErrors()) {
        console.error("\nEntrada INCORRECTA. Se encontraron los siguientes errores:");
        errorListener.errors.forEach(err => {
            console.error(`  -> Línea ${err.line}, Columna ${err.column}: ${err.msg}`);
        });
    } else {
        console.log("\nEntrada válida.");
        console.log("\n--- Tabla de Lexemas y Tokens ---");
        const tokensTabla = [];
        tokenStream.tokens.forEach(token => {
            if (token.type !== antlr4.Token.EOF) {
                let tokenName = CalculatorLexer.symbolicNames[token.type] || CalculatorLexer.literalNames[token.type] || `T_${token.type}`;
                tokensTabla.push({ "Lexema": token.text, "Token": tokenName });
            }
        });
        console.table(tokensTabla);

        console.log("\n--- Árbol de Análisis Sintáctico ---");
        trees.forEach((tree, index) => {
            console.log(`\nInstrucción ${index + 1}:`);
            console.log(printTree(tree, parser.ruleNames));
        });

        const visitor = new CustomCalculatorVisitor();
        trees.forEach(tree => visitor.visit(tree));   
    }
}

function printTree(node, ruleNames, indent = "", isLast = true) {
    let result = "";
    if (!node.children) {
        let text = node.getText().replace(/\n/g, '\\n');
        if (text === "<EOF>") text = "EOF";
        return indent + (isLast ? "└── " : "├── ") + text + "\n";
    }
    let ruleName = ruleNames[node.ruleIndex];
    result += indent + (isLast ? "└── " : "├── ") + ruleName + "\n";
    let childIndent = indent + (isLast ? "    " : "│   ");
    for (let i = 0; i < node.children.length; i++) {
        let isLastChild = i === node.children.length - 1;
        result += printTree(node.children[i], ruleNames, childIndent, isLastChild);
    }
    return result;
}

function leerCadena() {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

main();
