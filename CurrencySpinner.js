define([
        "dojo/_base/declare", 
        "dijit/form/NumberSpinner",
        "dijit/form/CurrencyTextBox"
    ],
    function(declare, NumberSpinner, CurrencyTextBox) {
        return declare("app.form.CurrencySpinner.CurrencySpinner", [NumberSpinner, CurrencyTextBox], {
            baseClass: "dijitTextBox dijitCurrencyTextBox dijitSpinner"
        });
     }
 );