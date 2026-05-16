// Generated from c:/Users/Gabriel/Desktop/Proyecto Node JS/Calculator.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,12,64,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,1,
0,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,
7,1,8,1,8,1,9,4,9,49,8,9,11,9,12,9,50,1,10,4,10,54,8,10,11,10,12,10,55,1,
11,4,11,59,8,11,11,11,12,11,60,1,11,1,11,0,0,12,1,1,3,2,5,3,7,4,9,5,11,6,
13,7,15,8,17,9,19,10,21,11,23,12,1,0,3,2,0,65,90,97,122,1,0,48,57,3,0,9,
10,13,13,32,32,66,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,
0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,
21,1,0,0,0,0,23,1,0,0,0,1,25,1,0,0,0,3,27,1,0,0,0,5,29,1,0,0,0,7,35,1,0,
0,0,9,37,1,0,0,0,11,39,1,0,0,0,13,41,1,0,0,0,15,43,1,0,0,0,17,45,1,0,0,0,
19,48,1,0,0,0,21,53,1,0,0,0,23,58,1,0,0,0,25,26,5,61,0,0,26,2,1,0,0,0,27,
28,5,59,0,0,28,4,1,0,0,0,29,30,5,112,0,0,30,31,5,114,0,0,31,32,5,105,0,0,
32,33,5,110,0,0,33,34,5,116,0,0,34,6,1,0,0,0,35,36,5,40,0,0,36,8,1,0,0,0,
37,38,5,41,0,0,38,10,1,0,0,0,39,40,5,43,0,0,40,12,1,0,0,0,41,42,5,45,0,0,
42,14,1,0,0,0,43,44,5,42,0,0,44,16,1,0,0,0,45,46,5,47,0,0,46,18,1,0,0,0,
47,49,7,0,0,0,48,47,1,0,0,0,49,50,1,0,0,0,50,48,1,0,0,0,50,51,1,0,0,0,51,
20,1,0,0,0,52,54,7,1,0,0,53,52,1,0,0,0,54,55,1,0,0,0,55,53,1,0,0,0,55,56,
1,0,0,0,56,22,1,0,0,0,57,59,7,2,0,0,58,57,1,0,0,0,59,60,1,0,0,0,60,58,1,
0,0,0,60,61,1,0,0,0,61,62,1,0,0,0,62,63,6,11,0,0,63,24,1,0,0,0,4,0,50,55,
60,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class CalculatorLexer extends antlr4.Lexer {

    static grammarFileName = "Calculator.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'='", "';'", "'print'", "'('", "')'", "'+'", 
                         "'-'", "'*'", "'/'" ];
	static symbolicNames = [ null, null, null, null, null, null, null, null, 
                          null, null, "ID", "NUMERO", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", 
                      "T__7", "T__8", "ID", "NUMERO", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

CalculatorLexer.EOF = antlr4.Token.EOF;
CalculatorLexer.T__0 = 1;
CalculatorLexer.T__1 = 2;
CalculatorLexer.T__2 = 3;
CalculatorLexer.T__3 = 4;
CalculatorLexer.T__4 = 5;
CalculatorLexer.T__5 = 6;
CalculatorLexer.T__6 = 7;
CalculatorLexer.T__7 = 8;
CalculatorLexer.T__8 = 9;
CalculatorLexer.ID = 10;
CalculatorLexer.NUMERO = 11;
CalculatorLexer.WS = 12;



