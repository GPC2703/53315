// Generated from c:/Users/Gabriel/Desktop/Proyecto Node JS/Calculator.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import CalculatorListener from './CalculatorListener.js';
import CalculatorVisitor from './CalculatorVisitor.js';

const serializedATN = [4,1,12,42,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,1,0,3,0,13,8,0,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,
3,5,3,29,8,3,10,3,12,3,32,9,3,1,4,1,4,1,4,1,4,1,4,1,4,3,4,40,8,4,1,4,0,0,
5,0,2,4,6,8,0,1,1,0,6,9,40,0,12,1,0,0,0,2,14,1,0,0,0,4,19,1,0,0,0,6,25,1,
0,0,0,8,39,1,0,0,0,10,13,3,2,1,0,11,13,3,4,2,0,12,10,1,0,0,0,12,11,1,0,0,
0,13,1,1,0,0,0,14,15,5,10,0,0,15,16,5,1,0,0,16,17,3,6,3,0,17,18,5,2,0,0,
18,3,1,0,0,0,19,20,5,3,0,0,20,21,5,4,0,0,21,22,3,6,3,0,22,23,5,5,0,0,23,
24,5,2,0,0,24,5,1,0,0,0,25,30,3,8,4,0,26,27,7,0,0,0,27,29,3,8,4,0,28,26,
1,0,0,0,29,32,1,0,0,0,30,28,1,0,0,0,30,31,1,0,0,0,31,7,1,0,0,0,32,30,1,0,
0,0,33,40,5,11,0,0,34,40,5,10,0,0,35,36,5,4,0,0,36,37,3,6,3,0,37,38,5,5,
0,0,38,40,1,0,0,0,39,33,1,0,0,0,39,34,1,0,0,0,39,35,1,0,0,0,40,9,1,0,0,0,
3,12,30,39];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CalculatorParser extends antlr4.Parser {

    static grammarFileName = "Calculator.g4";
    static literalNames = [ null, "'='", "';'", "'print'", "'('", "')'", 
                            "'+'", "'-'", "'*'", "'/'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, "ID", "NUMERO", "WS" ];
    static ruleNames = [ "instruccion", "asignacion", "imprimir", "expresion", 
                         "termino" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CalculatorParser.ruleNames;
        this.literalNames = CalculatorParser.literalNames;
        this.symbolicNames = CalculatorParser.symbolicNames;
    }



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CalculatorParser.RULE_instruccion);
	    try {
	        this.state = 12;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 10;
	            this.asignacion();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 11;
	            this.imprimir();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	asignacion() {
	    let localctx = new AsignacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CalculatorParser.RULE_asignacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 14;
	        this.match(CalculatorParser.ID);
	        this.state = 15;
	        this.match(CalculatorParser.T__0);
	        this.state = 16;
	        this.expresion();
	        this.state = 17;
	        this.match(CalculatorParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	imprimir() {
	    let localctx = new ImprimirContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CalculatorParser.RULE_imprimir);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this.match(CalculatorParser.T__2);
	        this.state = 20;
	        this.match(CalculatorParser.T__3);
	        this.state = 21;
	        this.expresion();
	        this.state = 22;
	        this.match(CalculatorParser.T__4);
	        this.state = 23;
	        this.match(CalculatorParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expresion() {
	    let localctx = new ExpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CalculatorParser.RULE_expresion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this.termino();
	        this.state = 30;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 960) !== 0)) {
	            this.state = 26;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 960) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 27;
	            this.termino();
	            this.state = 32;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	termino() {
	    let localctx = new TerminoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CalculatorParser.RULE_termino);
	    try {
	        this.state = 39;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 11:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 33;
	            this.match(CalculatorParser.NUMERO);
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 34;
	            this.match(CalculatorParser.ID);
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 35;
	            this.match(CalculatorParser.T__3);
	            this.state = 36;
	            this.expresion();
	            this.state = 37;
	            this.match(CalculatorParser.T__4);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

CalculatorParser.EOF = antlr4.Token.EOF;
CalculatorParser.T__0 = 1;
CalculatorParser.T__1 = 2;
CalculatorParser.T__2 = 3;
CalculatorParser.T__3 = 4;
CalculatorParser.T__4 = 5;
CalculatorParser.T__5 = 6;
CalculatorParser.T__6 = 7;
CalculatorParser.T__7 = 8;
CalculatorParser.T__8 = 9;
CalculatorParser.ID = 10;
CalculatorParser.NUMERO = 11;
CalculatorParser.WS = 12;

CalculatorParser.RULE_instruccion = 0;
CalculatorParser.RULE_asignacion = 1;
CalculatorParser.RULE_imprimir = 2;
CalculatorParser.RULE_expresion = 3;
CalculatorParser.RULE_termino = 4;

class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_instruccion;
    }

	asignacion() {
	    return this.getTypedRuleContext(AsignacionContext,0);
	};

	imprimir() {
	    return this.getTypedRuleContext(ImprimirContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AsignacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_asignacion;
    }

	ID() {
	    return this.getToken(CalculatorParser.ID, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterAsignacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitAsignacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitAsignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImprimirContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_imprimir;
    }

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterImprimir(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitImprimir(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitImprimir(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_expresion;
    }

	termino = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TerminoContext);
	    } else {
	        return this.getTypedRuleContext(TerminoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterExpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitExpresion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitExpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_termino;
    }

	NUMERO() {
	    return this.getToken(CalculatorParser.NUMERO, 0);
	};

	ID() {
	    return this.getToken(CalculatorParser.ID, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterTermino(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitTermino(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitTermino(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




CalculatorParser.InstruccionContext = InstruccionContext; 
CalculatorParser.AsignacionContext = AsignacionContext; 
CalculatorParser.ImprimirContext = ImprimirContext; 
CalculatorParser.ExpresionContext = ExpresionContext; 
CalculatorParser.TerminoContext = TerminoContext; 
