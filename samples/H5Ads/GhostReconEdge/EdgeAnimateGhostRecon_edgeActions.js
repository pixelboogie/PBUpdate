/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${_Rectangle2}", "mouseover", function(sym, e) {
         // Lookup the Edge Animate Symbol Javascript Object from an element that is
         // an instance of a symbol. The symbol object can be used to invoke
         // symbol functions like play, stop etc.
         var mySymbolObject = sym.getSymbol("cta");
         // play the timeline from the given position (ms or label)
         mySymbolObject.play("anim");
         
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'characterAnim'
   (function(symbolName) {   
   
   })("characterAnim");
   //Edge symbol end:'characterAnim'

   //=========================================================
   
   //Edge symbol: 'TitleIntro'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1590, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("logoStart");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
      });
      //Edge binding end

   })("TitleIntro");
   //Edge symbol end:'TitleIntro'

   //=========================================================
   
   //Edge symbol: 'circles'
   (function(symbolName) {   
   
   })("circles");
   //Edge symbol end:'circles'

   //=========================================================
   
   //Edge symbol: 'circle3'
   (function(symbolName) {   
   
   })("circle3");
   //Edge symbol end:'circle3'

   //=========================================================
   
   //Edge symbol: 'quoteMaxim'
   (function(symbolName) {   
   
   })("quoteMaxim");
   //Edge symbol end:'quoteMaxim'

   //=========================================================
   
   //Edge symbol: 'cta'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 973, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

   })("cta");
   //Edge symbol end:'cta'

})(jQuery, AdobeEdge, "EDGE-119681725");