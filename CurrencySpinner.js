define([
        "dojo/_base/declare", 
        "dijit/form/NumberSpinner",
        "dijit/form/CurrencyTextBox"
    ],
    function(declare, NumberSpinner, CurrencyTextBox) {
        
        // summary:
		//		A validating currency spinner
		// description:
		//		CurrencySpinner is a mixin of `dijit.form.NumberSpinner` and `dijit.form.CurrencyTextBox`
        
        return declare("app.form.CurrencySpinner.CurrencySpinner", [NumberSpinner, CurrencyTextBox], {
            baseClass: "dijitTextBox dijitCurrencyTextBox dijitSpinner"
        });
     }
 );