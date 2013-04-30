this.Handlebars={},function(e){e.VERSION="1.0.rc.2",e.helpers={},e.partials={},e.registerHelper=function(e,a,t){t&&(a.not=t),this.helpers[e]=a},e.registerPartial=function(e,a){this.partials[e]=a},e.registerHelper("helperMissing",function(e){if(2===arguments.length)return void 0;throw Error("Could not find property '"+e+"'")});var a=Object.prototype.toString,t="[object Function]";e.registerHelper("blockHelperMissing",function(r,s){var i=s.inverse||function(){},n=s.fn,l=a.call(r);return l===t&&(r=r.call(this)),r===!0?n(this):r===!1||null==r?i(this):"[object Array]"===l?r.length>0?e.helpers.each(r,s):i(this):n(r)}),e.K=function(){},e.createFrame=Object.create||function(a){e.K.prototype=a;var t=new e.K;return e.K.prototype=null,t},e.logger={DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,methodMap:{0:"debug",1:"info",2:"warn",3:"error"},log:function(a,t){if(a>=e.logger.level){var r=e.logger.methodMap[a];"undefined"!=typeof console&&console[r]&&console[r].call(console,t)}}},e.log=function(a,t){e.logger.log(a,t)},e.registerHelper("each",function(a,t){var r,s=t.fn,i=t.inverse,n=0,l="";if(t.data&&(r=e.createFrame(t.data)),a&&"object"==typeof a)if(a instanceof Array)for(var o=a.length;o>n;n++)r&&(r.index=n),l+=s(a[n],{data:r});else for(var d in a)a.hasOwnProperty(d)&&(r&&(r.key=d),l+=s(a[d],{data:r}),n++);return 0===n&&(l=i(this)),l}),e.registerHelper("if",function(r,s){var i=a.call(r);return i===t&&(r=r.call(this)),!r||e.Utils.isEmpty(r)?s.inverse(this):s.fn(this)}),e.registerHelper("unless",function(a,t){var r=t.fn,s=t.inverse;return t.fn=s,t.inverse=r,e.helpers["if"].call(this,a,t)}),e.registerHelper("with",function(e,a){return a.fn(e)}),e.registerHelper("log",function(a,t){var r=t.data&&null!=t.data.level?parseInt(t.data.level,10):1;e.log(r,a)})}(this.Handlebars);var handlebars=function(){function e(){this.yy={}}var a={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,simpleInverse:6,statements:7,statement:8,openInverse:9,closeBlock:10,openBlock:11,mustache:12,partial:13,CONTENT:14,COMMENT:15,OPEN_BLOCK:16,inMustache:17,CLOSE:18,OPEN_INVERSE:19,OPEN_ENDBLOCK:20,path:21,OPEN:22,OPEN_UNESCAPED:23,OPEN_PARTIAL:24,partialName:25,params:26,hash:27,DATA:28,param:29,STRING:30,INTEGER:31,BOOLEAN:32,hashSegments:33,hashSegment:34,ID:35,EQUALS:36,PARTIAL_NAME:37,pathSegments:38,SEP:39,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"OPEN_PARTIAL",28:"DATA",30:"STRING",31:"INTEGER",32:"BOOLEAN",35:"ID",36:"EQUALS",37:"PARTIAL_NAME",39:"SEP"},productions_:[0,[3,2],[4,2],[4,3],[4,2],[4,1],[4,1],[4,0],[7,1],[7,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,3],[13,4],[6,2],[17,3],[17,2],[17,2],[17,1],[17,1],[26,2],[26,1],[29,1],[29,1],[29,1],[29,1],[29,1],[27,1],[33,2],[33,1],[34,3],[34,3],[34,3],[34,3],[34,3],[25,1],[21,1],[38,3],[38,1]],performAction:function(e,a,t,r,s,i){var n=i.length-1;switch(s){case 1:return i[n-1];case 2:this.$=new r.ProgramNode([],i[n]);break;case 3:this.$=new r.ProgramNode(i[n-2],i[n]);break;case 4:this.$=new r.ProgramNode(i[n-1],[]);break;case 5:this.$=new r.ProgramNode(i[n]);break;case 6:this.$=new r.ProgramNode([],[]);break;case 7:this.$=new r.ProgramNode([]);break;case 8:this.$=[i[n]];break;case 9:i[n-1].push(i[n]),this.$=i[n-1];break;case 10:this.$=new r.BlockNode(i[n-2],i[n-1].inverse,i[n-1],i[n]);break;case 11:this.$=new r.BlockNode(i[n-2],i[n-1],i[n-1].inverse,i[n]);break;case 12:this.$=i[n];break;case 13:this.$=i[n];break;case 14:this.$=new r.ContentNode(i[n]);break;case 15:this.$=new r.CommentNode(i[n]);break;case 16:this.$=new r.MustacheNode(i[n-1][0],i[n-1][1]);break;case 17:this.$=new r.MustacheNode(i[n-1][0],i[n-1][1]);break;case 18:this.$=i[n-1];break;case 19:this.$=new r.MustacheNode(i[n-1][0],i[n-1][1]);break;case 20:this.$=new r.MustacheNode(i[n-1][0],i[n-1][1],!0);break;case 21:this.$=new r.PartialNode(i[n-1]);break;case 22:this.$=new r.PartialNode(i[n-2],i[n-1]);break;case 23:break;case 24:this.$=[[i[n-2]].concat(i[n-1]),i[n]];break;case 25:this.$=[[i[n-1]].concat(i[n]),null];break;case 26:this.$=[[i[n-1]],i[n]];break;case 27:this.$=[[i[n]],null];break;case 28:this.$=[[new r.DataNode(i[n])],null];break;case 29:i[n-1].push(i[n]),this.$=i[n-1];break;case 30:this.$=[i[n]];break;case 31:this.$=i[n];break;case 32:this.$=new r.StringNode(i[n]);break;case 33:this.$=new r.IntegerNode(i[n]);break;case 34:this.$=new r.BooleanNode(i[n]);break;case 35:this.$=new r.DataNode(i[n]);break;case 36:this.$=new r.HashNode(i[n]);break;case 37:i[n-1].push(i[n]),this.$=i[n-1];break;case 38:this.$=[i[n]];break;case 39:this.$=[i[n-2],i[n]];break;case 40:this.$=[i[n-2],new r.StringNode(i[n])];break;case 41:this.$=[i[n-2],new r.IntegerNode(i[n])];break;case 42:this.$=[i[n-2],new r.BooleanNode(i[n])];break;case 43:this.$=[i[n-2],new r.DataNode(i[n])];break;case 44:this.$=new r.PartialNameNode(i[n]);break;case 45:this.$=new r.IdNode(i[n]);break;case 46:i[n-2].push(i[n]),this.$=i[n-2];break;case 47:this.$=[i[n]]}},table:[{3:1,4:2,5:[2,7],6:3,7:4,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,5],22:[1,14],23:[1,15],24:[1,16]},{1:[3]},{5:[1,17]},{5:[2,6],7:18,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,19],20:[2,6],22:[1,14],23:[1,15],24:[1,16]},{5:[2,5],6:20,8:21,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,5],20:[2,5],22:[1,14],23:[1,15],24:[1,16]},{17:23,18:[1,22],21:24,28:[1,25],35:[1,27],38:26},{5:[2,8],14:[2,8],15:[2,8],16:[2,8],19:[2,8],20:[2,8],22:[2,8],23:[2,8],24:[2,8]},{4:28,6:3,7:4,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,5],20:[2,7],22:[1,14],23:[1,15],24:[1,16]},{4:29,6:3,7:4,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,5],20:[2,7],22:[1,14],23:[1,15],24:[1,16]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],24:[2,12]},{5:[2,13],14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],24:[2,13]},{5:[2,14],14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],24:[2,14]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],24:[2,15]},{17:30,21:24,28:[1,25],35:[1,27],38:26},{17:31,21:24,28:[1,25],35:[1,27],38:26},{17:32,21:24,28:[1,25],35:[1,27],38:26},{25:33,37:[1,34]},{1:[2,1]},{5:[2,2],8:21,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,19],20:[2,2],22:[1,14],23:[1,15],24:[1,16]},{17:23,21:24,28:[1,25],35:[1,27],38:26},{5:[2,4],7:35,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,19],20:[2,4],22:[1,14],23:[1,15],24:[1,16]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],24:[2,9]},{5:[2,23],14:[2,23],15:[2,23],16:[2,23],19:[2,23],20:[2,23],22:[2,23],23:[2,23],24:[2,23]},{18:[1,36]},{18:[2,27],21:41,26:37,27:38,28:[1,45],29:39,30:[1,42],31:[1,43],32:[1,44],33:40,34:46,35:[1,47],38:26},{18:[2,28]},{18:[2,45],28:[2,45],30:[2,45],31:[2,45],32:[2,45],35:[2,45],39:[1,48]},{18:[2,47],28:[2,47],30:[2,47],31:[2,47],32:[2,47],35:[2,47],39:[2,47]},{10:49,20:[1,50]},{10:51,20:[1,50]},{18:[1,52]},{18:[1,53]},{18:[1,54]},{18:[1,55],21:56,35:[1,27],38:26},{18:[2,44],35:[2,44]},{5:[2,3],8:21,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,19],20:[2,3],22:[1,14],23:[1,15],24:[1,16]},{14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],24:[2,17]},{18:[2,25],21:41,27:57,28:[1,45],29:58,30:[1,42],31:[1,43],32:[1,44],33:40,34:46,35:[1,47],38:26},{18:[2,26]},{18:[2,30],28:[2,30],30:[2,30],31:[2,30],32:[2,30],35:[2,30]},{18:[2,36],34:59,35:[1,60]},{18:[2,31],28:[2,31],30:[2,31],31:[2,31],32:[2,31],35:[2,31]},{18:[2,32],28:[2,32],30:[2,32],31:[2,32],32:[2,32],35:[2,32]},{18:[2,33],28:[2,33],30:[2,33],31:[2,33],32:[2,33],35:[2,33]},{18:[2,34],28:[2,34],30:[2,34],31:[2,34],32:[2,34],35:[2,34]},{18:[2,35],28:[2,35],30:[2,35],31:[2,35],32:[2,35],35:[2,35]},{18:[2,38],35:[2,38]},{18:[2,47],28:[2,47],30:[2,47],31:[2,47],32:[2,47],35:[2,47],36:[1,61],39:[2,47]},{35:[1,62]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],24:[2,10]},{21:63,35:[1,27],38:26},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],24:[2,11]},{14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],24:[2,16]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],24:[2,19]},{5:[2,20],14:[2,20],15:[2,20],16:[2,20],19:[2,20],20:[2,20],22:[2,20],23:[2,20],24:[2,20]},{5:[2,21],14:[2,21],15:[2,21],16:[2,21],19:[2,21],20:[2,21],22:[2,21],23:[2,21],24:[2,21]},{18:[1,64]},{18:[2,24]},{18:[2,29],28:[2,29],30:[2,29],31:[2,29],32:[2,29],35:[2,29]},{18:[2,37],35:[2,37]},{36:[1,61]},{21:65,28:[1,69],30:[1,66],31:[1,67],32:[1,68],35:[1,27],38:26},{18:[2,46],28:[2,46],30:[2,46],31:[2,46],32:[2,46],35:[2,46],39:[2,46]},{18:[1,70]},{5:[2,22],14:[2,22],15:[2,22],16:[2,22],19:[2,22],20:[2,22],22:[2,22],23:[2,22],24:[2,22]},{18:[2,39],35:[2,39]},{18:[2,40],35:[2,40]},{18:[2,41],35:[2,41]},{18:[2,42],35:[2,42]},{18:[2,43],35:[2,43]},{5:[2,18],14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],24:[2,18]}],defaultActions:{17:[2,1],25:[2,28],38:[2,26],57:[2,24]},parseError:function(e){throw Error(e)},parse:function(e){function a(){var e;return e=t.lexer.lex()||1,"number"!=typeof e&&(e=t.symbols_[e]||e),e}var t=this,r=[0],s=[null],i=[],n=this.table,l="",o=0,d=0,u=0;this.lexer.setInput(e),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,this.lexer.yylloc===void 0&&(this.lexer.yylloc={});var k=this.lexer.yylloc;i.push(k);var m=this.lexer.options&&this.lexer.options.ranges;"function"==typeof this.yy.parseError&&(this.parseError=this.yy.parseError);for(var g,_,p,c,z,v,h,b,y,f={};;){if(p=r[r.length-1],this.defaultActions[p]?c=this.defaultActions[p]:((null===g||g===void 0)&&(g=a()),c=n[p]&&n[p][g]),c===void 0||!c.length||!c[0]){var j="";if(!u){y=[];for(v in n[p])this.terminals_[v]&&v>2&&y.push("'"+this.terminals_[v]+"'");j=this.lexer.showPosition?"Parse error on line "+(o+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+y.join(", ")+", got '"+(this.terminals_[g]||g)+"'":"Parse error on line "+(o+1)+": Unexpected "+(1==g?"end of input":"'"+(this.terminals_[g]||g)+"'"),this.parseError(j,{text:this.lexer.match,token:this.terminals_[g]||g,line:this.lexer.yylineno,loc:k,expected:y})}}if(c[0]instanceof Array&&c.length>1)throw Error("Parse Error: multiple actions possible at state: "+p+", token: "+g);switch(c[0]){case 1:r.push(g),s.push(this.lexer.yytext),i.push(this.lexer.yylloc),r.push(c[1]),g=null,_?(g=_,_=null):(d=this.lexer.yyleng,l=this.lexer.yytext,o=this.lexer.yylineno,k=this.lexer.yylloc,u>0&&u--);break;case 2:if(h=this.productions_[c[1]][1],f.$=s[s.length-h],f._$={first_line:i[i.length-(h||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(h||1)].first_column,last_column:i[i.length-1].last_column},m&&(f._$.range=[i[i.length-(h||1)].range[0],i[i.length-1].range[1]]),z=this.performAction.call(f,l,d,o,this.yy,c[1],s,i),z!==void 0)return z;h&&(r=r.slice(0,2*-1*h),s=s.slice(0,-1*h),i=i.slice(0,-1*h)),r.push(this.productions_[c[1]][0]),s.push(f.$),i.push(f._$),b=n[r[r.length-2]][r[r.length-1]],r.push(b);break;case 3:return!0}}return!0}},t=function(){var e={EOF:1,parseError:function(e,a){if(!this.yy.parser)throw Error(e);this.yy.parser.parseError(e,a)},setInput:function(e){return this._input=e,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var e=this._input[0];this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e;var a=e.match(/(?:\r\n?|\n).*/g);return a?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),e},unput:function(e){var a=e.length,t=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-a-1),this.offset-=a;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),t.length-1&&(this.yylineno-=t.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:t?(t.length===r.length?this.yylloc.first_column:0)+r[r.length-t.length].length-t[0].length:this.yylloc.first_column-a},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-a]),this},more:function(){return this._more=!0,this},less:function(e){this.unput(this.match.slice(e))},pastInput:function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?"...":"")+e.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var e=this.match;return 20>e.length&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var e=this.pastInput(),a=Array(e.length+1).join("-");return e+this.upcomingInput()+"\n"+a+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var e,a,t,r,s;this._more||(this.yytext="",this.match="");for(var i=this._currentRules(),n=0;i.length>n&&(t=this._input.match(this.rules[i[n]]),!t||a&&!(t[0].length>a[0].length)||(a=t,r=n,this.options.flex));n++);return a?(s=a[0].match(/(?:\r\n?|\n).*/g),s&&(this.yylineno+=s.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:s?s[s.length-1].length-s[s.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+a[0].length},this.yytext+=a[0],this.match+=a[0],this.matches=a,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(a[0].length),this.matched+=a[0],e=this.performAction.call(this,this.yy,this,i[r],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),e?e:void 0):""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var e=this.next();return e!==void 0?e:this.lex()},begin:function(e){this.conditionStack.push(e)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(e){this.begin(e)}};return e.options={},e.performAction=function(e,a,t,r){switch(t){case 0:if("\\"!==a.yytext.slice(-1)&&this.begin("mu"),"\\"===a.yytext.slice(-1)&&(a.yytext=a.yytext.substr(0,a.yyleng-1),this.begin("emu")),a.yytext)return 14;break;case 1:return 14;case 2:return"\\"!==a.yytext.slice(-1)&&this.popState(),"\\"===a.yytext.slice(-1)&&(a.yytext=a.yytext.substr(0,a.yyleng-1)),14;case 3:return a.yytext=a.yytext.substr(0,a.yyleng-4),this.popState(),15;case 4:return this.begin("par"),24;case 5:return 16;case 6:return 20;case 7:return 19;case 8:return 19;case 9:return 23;case 10:return 23;case 11:this.popState(),this.begin("com");break;case 12:return a.yytext=a.yytext.substr(3,a.yyleng-5),this.popState(),15;case 13:return 22;case 14:return 36;case 15:return 35;case 16:return 35;case 17:return 39;case 18:break;case 19:return this.popState(),18;case 20:return this.popState(),18;case 21:return a.yytext=a.yytext.substr(1,a.yyleng-2).replace(/\\"/g,'"'),30;case 22:return a.yytext=a.yytext.substr(1,a.yyleng-2).replace(/\\'/g,"'"),30;case 23:return a.yytext=a.yytext.substr(1),28;case 24:return 32;case 25:return 32;case 26:return 31;case 27:return 35;case 28:return a.yytext=a.yytext.substr(1,a.yyleng-2),35;case 29:return"INVALID";case 30:break;case 31:return this.popState(),37;case 32:return 5}},e.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|$)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\{\{>)/,/^(?:\{\{#)/,/^(?:\{\{\/)/,/^(?:\{\{\^)/,/^(?:\{\{\s*else\b)/,/^(?:\{\{\{)/,/^(?:\{\{&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{)/,/^(?:=)/,/^(?:\.(?=[} ]))/,/^(?:\.\.)/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}\}\})/,/^(?:\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@[a-zA-Z]+)/,/^(?:true(?=[}\s]))/,/^(?:false(?=[}\s]))/,/^(?:[0-9]+(?=[}\s]))/,/^(?:[a-zA-Z0-9_$-]+(?=[=}\s\/.]))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:\s+)/,/^(?:[a-zA-Z0-9_$-/]+)/,/^(?:$)/],e.conditions={mu:{rules:[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,32],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[3],inclusive:!1},par:{rules:[30,31],inclusive:!1},INITIAL:{rules:[0,1,32],inclusive:!0}},e}();return a.lexer=t,e.prototype=a,a.Parser=e,new e}();Handlebars.Parser=handlebars,Handlebars.parse=function(e){return Handlebars.Parser.yy=Handlebars.AST,Handlebars.Parser.parse(e)},Handlebars.print=function(e){return(new Handlebars.PrintVisitor).accept(e)},function(){Handlebars.AST={},Handlebars.AST.ProgramNode=function(e,a){this.type="program",this.statements=e,a&&(this.inverse=new Handlebars.AST.ProgramNode(a))},Handlebars.AST.MustacheNode=function(e,a,t){this.type="mustache",this.escaped=!t,this.hash=a;var r=this.id=e[0],s=this.params=e.slice(1),i=this.eligibleHelper=r.isSimple;this.isHelper=i&&(s.length||a)},Handlebars.AST.PartialNode=function(e,a){this.type="partial",this.partialName=e,this.context=a};var e=function(e,a){if(e.original!==a.original)throw new Handlebars.Exception(e.original+" doesn't match "+a.original)};Handlebars.AST.BlockNode=function(a,t,r,s){e(a.id,s),this.type="block",this.mustache=a,this.program=t,this.inverse=r,this.inverse&&!this.program&&(this.isInverse=!0)},Handlebars.AST.ContentNode=function(e){this.type="content",this.string=e},Handlebars.AST.HashNode=function(e){this.type="hash",this.pairs=e},Handlebars.AST.IdNode=function(e){this.type="ID",this.original=e.join(".");for(var a=[],t=0,r=0,s=e.length;s>r;r++){var i=e[r];".."===i?t++:"."===i||"this"===i?this.isScoped=!0:a.push(i)}this.parts=a,this.string=a.join("."),this.depth=t,this.isSimple=1===e.length&&!this.isScoped&&0===t,this.stringModeValue=this.string},Handlebars.AST.PartialNameNode=function(e){this.type="PARTIAL_NAME",this.name=e},Handlebars.AST.DataNode=function(e){this.type="DATA",this.id=e},Handlebars.AST.StringNode=function(e){this.type="STRING",this.string=e,this.stringModeValue=e},Handlebars.AST.IntegerNode=function(e){this.type="INTEGER",this.integer=e,this.stringModeValue=Number(e)},Handlebars.AST.BooleanNode=function(e){this.type="BOOLEAN",this.bool=e,this.stringModeValue="true"===e},Handlebars.AST.CommentNode=function(e){this.type="comment",this.comment=e}}();var errorProps=["description","fileName","lineNumber","message","name","number","stack"];Handlebars.Exception=function(){for(var e=Error.prototype.constructor.apply(this,arguments),a=0;errorProps.length>a;a++)this[errorProps[a]]=e[errorProps[a]]},Handlebars.Exception.prototype=Error(),Handlebars.SafeString=function(e){this.string=e},Handlebars.SafeString.prototype.toString=function(){return""+this.string},function(){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},a=/[&<>"'`]/g,t=/[&<>"'`]/,r=function(a){return e[a]||"&amp;"};Handlebars.Utils={escapeExpression:function(e){return e instanceof Handlebars.SafeString?""+e:null==e||e===!1?"":t.test(e)?e.replace(a,r):e},isEmpty:function(e){return e||0===e?"[object Array]"===Object.prototype.toString.call(e)&&0===e.length?!0:!1:!0}}}(),Handlebars.Compiler=function(){},Handlebars.JavaScriptCompiler=function(){},function(e,a){e.prototype={compiler:e,disassemble:function(){for(var e,a,t,r=this.opcodes,s=[],i=0,n=r.length;n>i;i++)if(e=r[i],"DECLARE"===e.opcode)s.push("DECLARE "+e.name+"="+e.value);else{a=[];for(var l=0;e.args.length>l;l++)t=e.args[l],"string"==typeof t&&(t='"'+t.replace("\n","\\n")+'"'),a.push(t);s.push(e.opcode+" "+a.join(" "))}return s.join("\n")},guid:0,compile:function(e,a){this.children=[],this.depths={list:[]},this.options=a;var t=this.options.knownHelpers;if(this.options.knownHelpers={helperMissing:!0,blockHelperMissing:!0,each:!0,"if":!0,unless:!0,"with":!0,log:!0},t)for(var r in t)this.options.knownHelpers[r]=t[r];return this.program(e)},accept:function(e){return this[e.type](e)},program:function(e){var a,t=e.statements;this.opcodes=[];for(var r=0,s=t.length;s>r;r++)a=t[r],this[a.type](a);return this.isSimple=1===s,this.depths.list=this.depths.list.sort(function(e,a){return e-a}),this},compileProgram:function(e){var a,t=(new this.compiler).compile(e,this.options),r=this.guid++;this.usePartial=this.usePartial||t.usePartial,this.children[r]=t;for(var s=0,i=t.depths.list.length;i>s;s++)a=t.depths.list[s],2>a||this.addDepth(a-1);return r},block:function(e){var a=e.mustache,t=e.program,r=e.inverse;t&&(t=this.compileProgram(t)),r&&(r=this.compileProgram(r));var s=this.classifyMustache(a);"helper"===s?this.helperMustache(a,t,r):"simple"===s?(this.simpleMustache(a),this.opcode("pushProgram",t),this.opcode("pushProgram",r),this.opcode("pushHash"),this.opcode("blockValue")):(this.ambiguousMustache(a,t,r),this.opcode("pushProgram",t),this.opcode("pushProgram",r),this.opcode("pushHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},hash:function(e){var a,t,r=e.pairs;this.opcode("pushHash");for(var s=0,i=r.length;i>s;s++)a=r[s],t=a[1],this.options.stringParams?this.opcode("pushStringParam",t.stringModeValue,t.type):this.accept(t),this.opcode("assignToHash",a[0])},partial:function(e){var a=e.partialName;this.usePartial=!0,e.context?this.ID(e.context):this.opcode("push","depth0"),this.opcode("invokePartial",a.name),this.opcode("append")},content:function(e){this.opcode("appendContent",e.string)},mustache:function(e){var a=this.options,t=this.classifyMustache(e);"simple"===t?this.simpleMustache(e):"helper"===t?this.helperMustache(e):this.ambiguousMustache(e),e.escaped&&!a.noEscape?this.opcode("appendEscaped"):this.opcode("append")},ambiguousMustache:function(e,a,t){var r=e.id,s=r.parts[0];this.opcode("getContext",r.depth),this.opcode("pushProgram",a),this.opcode("pushProgram",t),this.opcode("invokeAmbiguous",s)},simpleMustache:function(e){var a=e.id;"DATA"===a.type?this.DATA(a):a.parts.length?this.ID(a):(this.addDepth(a.depth),this.opcode("getContext",a.depth),this.opcode("pushContext")),this.opcode("resolvePossibleLambda")},helperMustache:function(e,a,t){var r=this.setupFullMustacheParams(e,a,t),s=e.id.parts[0];if(this.options.knownHelpers[s])this.opcode("invokeKnownHelper",r.length,s);else{if(this.knownHelpersOnly)throw Error("You specified knownHelpersOnly, but used the unknown helper "+s);this.opcode("invokeHelper",r.length,s)}},ID:function(e){this.addDepth(e.depth),this.opcode("getContext",e.depth);var a=e.parts[0];a?this.opcode("lookupOnContext",e.parts[0]):this.opcode("pushContext");for(var t=1,r=e.parts.length;r>t;t++)this.opcode("lookup",e.parts[t])},DATA:function(e){this.options.data=!0,this.opcode("lookupData",e.id)},STRING:function(e){this.opcode("pushString",e.string)},INTEGER:function(e){this.opcode("pushLiteral",e.integer)},BOOLEAN:function(e){this.opcode("pushLiteral",e.bool)},comment:function(){},opcode:function(e){this.opcodes.push({opcode:e,args:[].slice.call(arguments,1)})},declare:function(e,a){this.opcodes.push({opcode:"DECLARE",name:e,value:a})},addDepth:function(e){if(isNaN(e))throw Error("EWOT");0!==e&&(this.depths[e]||(this.depths[e]=!0,this.depths.list.push(e)))},classifyMustache:function(e){var a=e.isHelper,t=e.eligibleHelper,r=this.options;if(t&&!a){var s=e.id.parts[0];r.knownHelpers[s]?a=!0:r.knownHelpersOnly&&(t=!1)}return a?"helper":t?"ambiguous":"simple"},pushParams:function(e){for(var a,t=e.length;t--;)a=e[t],this.options.stringParams?(a.depth&&this.addDepth(a.depth),this.opcode("getContext",a.depth||0),this.opcode("pushStringParam",a.stringModeValue,a.type)):this[a.type](a)},setupMustacheParams:function(e){var a=e.params;return this.pushParams(a),e.hash?this.hash(e.hash):this.opcode("pushHash"),a},setupFullMustacheParams:function(e,a,t){var r=e.params;return this.pushParams(r),this.opcode("pushProgram",a),this.opcode("pushProgram",t),e.hash?this.hash(e.hash):this.opcode("pushHash"),r}};var t=function(e){this.value=e};a.prototype={nameLookup:function(e,t){return/^[0-9]+$/.test(t)?e+"["+t+"]":a.isValidJavaScriptVariableName(t)?e+"."+t:e+"['"+t+"']"},appendToBuffer:function(e){return this.environment.isSimple?"return "+e+";":"buffer += "+e+";"},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(e,a,t,r){this.environment=e,this.options=a||{},Handlebars.log(Handlebars.logger.DEBUG,this.environment.disassemble()+"\n\n"),this.name=this.environment.name,this.isChild=!!t,this.context=t||{programs:[],aliases:{}},this.preamble(),this.stackSlot=0,this.stackVars=[],this.registers={list:[]},this.compileStack=[],this.compileChildren(e,a);var s,i=e.opcodes;for(this.i=0,n=i.length;n>this.i;this.i++)s=i[this.i],"DECLARE"===s.opcode?this[s.name]=s.value:this[s.opcode].apply(this,s.args);return this.createFunctionContext(r)},nextOpcode:function(){var e=this.environment.opcodes;return e[this.i+1],e[this.i+1]},eat:function(){this.i=this.i+1},preamble:function(){var e=[];if(this.isChild)e.push("");else{var a=this.namespace,t="helpers = helpers || "+a+".helpers;";this.environment.usePartial&&(t=t+" partials = partials || "+a+".partials;"),this.options.data&&(t+=" data = data || {};"),e.push(t)}this.environment.isSimple?e.push(""):e.push(", buffer = "+this.initializeBuffer()),this.lastContext=0,this.source=e},createFunctionContext:function(e){var a=this.stackVars.concat(this.registers.list);if(a.length>0&&(this.source[1]=this.source[1]+", "+a.join(", ")),!this.isChild)for(var t in this.context.aliases)this.source[1]=this.source[1]+", "+t+"="+this.context.aliases[t];this.source[1]&&(this.source[1]="var "+this.source[1].substring(2)+";"),this.isChild||(this.source[1]+="\n"+this.context.programs.join("\n")+"\n"),this.environment.isSimple||this.source.push("return buffer;");for(var r=this.isChild?["depth0","data"]:["Handlebars","depth0","helpers","partials","data"],s=0,i=this.environment.depths.list.length;i>s;s++)r.push("depth"+this.environment.depths.list[s]);if(e)return r.push(this.source.join("\n  ")),Function.apply(this,r);var n="function "+(this.name||"")+"("+r.join(",")+") {\n  "+this.source.join("\n  ")+"}";return Handlebars.log(Handlebars.logger.DEBUG,n+"\n\n"),n},blockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";var e=["depth0"];this.setupParams(0,e),this.replaceStack(function(a){return e.splice(1,0,a),"blockHelperMissing.call("+e.join(", ")+")"})},ambiguousBlockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";var e=["depth0"];this.setupParams(0,e);var a=this.topStack();e.splice(1,0,a),this.source.push("if (!"+this.lastHelper+") { "+a+" = blockHelperMissing.call("+e.join(", ")+"); }")},appendContent:function(e){this.source.push(this.appendToBuffer(this.quotedString(e)))},append:function(){var e=this.popStack();this.source.push("if("+e+" || "+e+" === 0) { "+this.appendToBuffer(e)+" }"),this.environment.isSimple&&this.source.push("else { "+this.appendToBuffer("''")+" }")},appendEscaped:function(){var e=this.nextOpcode(),a="";this.context.aliases.escapeExpression="this.escapeExpression",e&&"appendContent"===e.opcode&&(a=" + "+this.quotedString(e.args[0]),this.eat(e)),this.source.push(this.appendToBuffer("escapeExpression("+this.popStack()+")"+a))},getContext:function(e){this.lastContext!==e&&(this.lastContext=e)},lookupOnContext:function(e){this.pushStack(this.nameLookup("depth"+this.lastContext,e,"context"))},pushContext:function(){this.pushStackLiteral("depth"+this.lastContext)},resolvePossibleLambda:function(){this.context.aliases.functionType='"function"',this.replaceStack(function(e){return"typeof "+e+" === functionType ? "+e+".apply(depth0) : "+e})},lookup:function(e){this.replaceStack(function(a){return a+" == null || "+a+" === false ? "+a+" : "+this.nameLookup(a,e,"context")})},lookupData:function(e){this.pushStack(this.nameLookup("data",e,"data"))},pushStringParam:function(e,a){this.pushStackLiteral("depth"+this.lastContext),this.pushString(a),"string"==typeof e?this.pushString(e):this.pushStackLiteral(e)},pushHash:function(){this.push("{}"),this.options.stringParams&&this.register("hashTypes","{}")},pushString:function(e){this.pushStackLiteral(this.quotedString(e))},push:function(e){this.pushStack(e)},pushLiteral:function(e){this.pushStackLiteral(e)},pushProgram:function(e){null!=e?this.pushStackLiteral(this.programExpression(e)):this.pushStackLiteral(null)},invokeHelper:function(e,a){this.context.aliases.helperMissing="helpers.helperMissing";var t=this.lastHelper=this.setupHelper(e,a);this.register("foundHelper",t.name),this.pushStack("foundHelper ? foundHelper.call("+t.callParams+") "+": helperMissing.call("+t.helperMissingParams+")")},invokeKnownHelper:function(e,a){var t=this.setupHelper(e,a);this.pushStack(t.name+".call("+t.callParams+")")},invokeAmbiguous:function(e){this.context.aliases.functionType='"function"',this.pushStackLiteral("{}");var a=this.setupHelper(0,e),t=this.lastHelper=this.nameLookup("helpers",e,"helper");this.register("foundHelper",t);var r=this.nameLookup("depth"+this.lastContext,e,"context"),s=this.nextStack();this.source.push("if (foundHelper) { "+s+" = foundHelper.call("+a.callParams+"); }"),this.source.push("else { "+s+" = "+r+"; "+s+" = typeof "+s+" === functionType ? "+s+".apply(depth0) : "+s+"; }")},invokePartial:function(e){var a=[this.nameLookup("partials",e,"partial"),"'"+e+"'",this.popStack(),"helpers","partials"];this.options.data&&a.push("data"),this.context.aliases.self="this",this.pushStack("self.invokePartial("+a.join(", ")+")")},assignToHash:function(e){var a=this.popStack();if(this.options.stringParams){var t=this.popStack();this.popStack(),this.source.push("hashTypes['"+e+"'] = "+t+";")}var r=this.topStack();this.source.push(r+"['"+e+"'] = "+a+";")},compiler:a,compileChildren:function(e,a){for(var t,r,s=e.children,i=0,n=s.length;n>i;i++){t=s[i],r=new this.compiler,this.context.programs.push("");var l=this.context.programs.length;t.index=l,t.name="program"+l,this.context.programs[l]=r.compile(t,a,this.context)}},programExpression:function(e){if(this.context.aliases.self="this",null==e)return"self.noop";for(var a,t=this.environment.children[e],r=t.depths.list,s=[t.index,t.name,"data"],i=0,n=r.length;n>i;i++)a=r[i],1===a?s.push("depth0"):s.push("depth"+(a-1));return 0===r.length?"self.program("+s.join(", ")+")":(s.shift(),"self.programWithDepth("+s.join(", ")+")")},register:function(e,a){this.useRegister(e),this.source.push(e+" = "+a+";")},useRegister:function(e){this.registers[e]||(this.registers[e]=!0,this.registers.list.push(e))},pushStackLiteral:function(e){return this.compileStack.push(new t(e)),e},pushStack:function(e){var a=this.incrStack();return this.source.push(a+" = "+e+";"),this.compileStack.push(a),a},replaceStack:function(e){var a=this.topStack(),t=e.call(this,a);return/^depth/.test(a)&&(a=this.nextStack()),this.source.push(a+" = "+t+";"),a},nextStack:function(){var e=this.incrStack();return this.compileStack.push(e),e},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),"stack"+this.stackSlot},popStack:function(){var e=this.compileStack.pop();return e instanceof t?e.value:(this.stackSlot--,e)},topStack:function(){var e=this.compileStack[this.compileStack.length-1];return e instanceof t?e.value:e},quotedString:function(e){return'"'+e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r")+'"'},setupHelper:function(e,a){var t=[];this.setupParams(e,t);var r=this.nameLookup("helpers",a,"helper");return{params:t,name:r,callParams:["depth0"].concat(t).join(", "),helperMissingParams:["depth0",this.quotedString(a)].concat(t).join(", ")}
},setupParams:function(e,a){var t,r,s,i=[],n=[],l=[];i.push("hash:"+this.popStack()),r=this.popStack(),s=this.popStack(),(s||r)&&(s||(this.context.aliases.self="this",s="self.noop"),r||(this.context.aliases.self="this",r="self.noop"),i.push("inverse:"+r),i.push("fn:"+s));for(var o=0;e>o;o++)t=this.popStack(),a.push(t),this.options.stringParams&&(l.push(this.popStack()),n.push(this.popStack()));return this.options.stringParams&&(i.push("contexts:["+n.join(",")+"]"),i.push("types:["+l.join(",")+"]"),i.push("hashTypes:hashTypes")),this.options.data&&i.push("data:data"),a.push("{"+i.join(",")+"}"),a.join(", ")}};for(var r="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "),s=a.RESERVED_WORDS={},i=0,n=r.length;n>i;i++)s[r[i]]=!0;a.isValidJavaScriptVariableName=function(e){return!a.RESERVED_WORDS[e]&&/^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(e)?!0:!1}}(Handlebars.Compiler,Handlebars.JavaScriptCompiler),Handlebars.precompile=function(e,a){if("string"!=typeof e)throw new Handlebars.Exception("You must pass a string to Handlebars.compile. You passed "+e);a=a||{},"data"in a||(a.data=!0);var t=Handlebars.parse(e),r=(new Handlebars.Compiler).compile(t,a);return(new Handlebars.JavaScriptCompiler).compile(r,a)},Handlebars.compile=function(e,a){function t(){var t=Handlebars.parse(e),r=(new Handlebars.Compiler).compile(t,a),s=(new Handlebars.JavaScriptCompiler).compile(r,a,void 0,!0);return Handlebars.template(s)}if("string"!=typeof e)throw new Handlebars.Exception("You must pass a string to Handlebars.compile. You passed "+e);a=a||{},"data"in a||(a.data=!0);var r;return function(e,a){return r||(r=t()),r.call(this,e,a)}},Handlebars.VM={template:function(e){var a={escapeExpression:Handlebars.Utils.escapeExpression,invokePartial:Handlebars.VM.invokePartial,programs:[],program:function(e,a,t){var r=this.programs[e];return t?Handlebars.VM.program(a,t):r?r:r=this.programs[e]=Handlebars.VM.program(a)},programWithDepth:Handlebars.VM.programWithDepth,noop:Handlebars.VM.noop};return function(t,r){return r=r||{},e.call(a,Handlebars,t,r.helpers,r.partials,r.data)}},programWithDepth:function(e,a){var t=Array.prototype.slice.call(arguments,2);return function(r,s){return s=s||{},e.apply(this,[r,s.data||a].concat(t))}},program:function(e,a){return function(t,r){return r=r||{},e(t,r.data||a)}},noop:function(){return""},invokePartial:function(e,a,t,r,s,i){var n={helpers:r,partials:s,data:i};if(void 0===e)throw new Handlebars.Exception("The partial "+a+" could not be found");if(e instanceof Function)return e(t,n);if(Handlebars.compile)return s[a]=Handlebars.compile(e,{data:void 0!==i}),s[a](t,n);throw new Handlebars.Exception("The partial "+a+" could not be compiled when running in runtime-only mode")}},Handlebars.template=Handlebars.VM.template;