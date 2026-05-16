grammar Calculator;
//Gramatica
prog : instruccion+ EOF ;
instruccion
    : asignacion
    | imprimir
    ;

asignacion
    : ID '=' expresion ';'
    ;

imprimir
    : 'print' '(' expresion ')' ';'
    ;

expresion
    : termino (('+' | '-' | '*' | '/') termino)*
    ;

termino
    : NUMERO
    | ID
    | '(' expresion ')'
    ;
//Lexemas
ID : [a-zA-Z]+ ;
NUMERO : [0-9]+ ;
WS : [ \t\r\n]+ -> skip ; 