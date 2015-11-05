/*
 * File: app/controller/SkipperBoatList.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('DynaMightMobile.controller.SkipperBoatList', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            boatDetails: 'formpanel#myBoatDetailsPanel',
            skipperBoatList: 'panel#skipperBoatPanel',
            mainCt: 'container#mainCtId',
            homePanel: 'panel#homePanel'
        },

        control: {
            "list#myBoatList": {
                itemtap: 'onMyBoatDetailsLst'
            },
            "button#saveBoatBtn": {
                tap: 'onBoatSave'
            }
        }
    },

    onMyBoatDetailsLst: function(dataview, index, target, record, e, eOpts) {
        var me = this,
            wizard = me.getSkipperBoatList(),
            item = Ext.create('DynaMightMobile.view.BoatDetails',{

                itemId:'myBoatDetailsPanel',
                config:{
                    itemId:'detailsPnl'
                }
            });
        item.setRecord(record);

         wizard.animateActiveItem(item,
                                  {type: 'slide', direction:'right'});
    },

    onBoatSave: function(button, e, eOpts) {
        if(!this.getBoatDetails())
        {
            //we save boat from registration wizard
            return;
        }
        var me = this, item, values,
            form = this.getBoatDetails(),
            items = form.getItems().items,
            bStore = CreateStore('boat');


        me.isFormValid = true;

        me.checkRequiredControls(form);

        if(!me.isFormValid){
            return;
        }

        rec = form.getValues();
        rec.EntityFields = bStore._model.prototype.entityFields;
        rec.EntityName = 'boat';

        bStore.execConfig({
            method: 'EditEntity',
            params: rec,
            callback: function(store, a, b, c){
                me.onResponse();
            }
        });
    },

    checkRequiredControls: function(control) {
         var me = this,
             items = control.getItems().items;



        for (var i = 0; i <  items.length; i++) {

            item = items[i];
            if(item.initialConfig.required && !item.getValue()){
                Ext.Msg.show({
                    title: 'Empty field',//T('errLogIn'),
                    message: item.getLabel() + ' is required!',//T(''),
                    buttons: Ext.Msg.OK,
                    icon: Ext.Msg.ERROR,
                    modal: true
                });
                me.isFormValid = false;
            }
            else if(item.getItems){
                me.checkRequiredControls(item);
            }

        }
    },

    onResponse: function() {
        var me = this,
            item = Ext.create('DynaMightMobile.view.SkipperBoatList'),
            wizard = me.getBoatDetails(),
            view = me.getHomePanel();

        view.removeAll();

        view.add(item);
    }

});