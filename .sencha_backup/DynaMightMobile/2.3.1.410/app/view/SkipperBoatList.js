/*
 * File: app/view/SkipperBoatList.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('DynaMightMobile.view.SkipperBoatList', {
    extend: 'Ext.Panel',
    alias: 'widget.SkipperBoatList',

    requires: [
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        itemId: 'skipperBoatPanel',
        layout: 'vbox',
        items: [
            {
                xtype: 'list',
                flex: 1,
                height: '100%',
                itemId: 'myBoatList',
                itemTpl: [
                    '{[GetTemplate(\'myboat\', values)]}'
                ]
            }
        ]
    },

    initialize: function() {
        var me = this,
            boatStore = CreateStore("boat"),
            boatEntity = GetEntityByName("boat");
        this.callParent();

        boatStore.execConfig({
            params: {
                entityViewID: GetEntityView(boatEntity.entityid).entityviewid ,
                filters: ' WHERE boatcrewmemberid =  ' + 2
            }
        });


        me.down('#myBoatList').setStore(boatStore);
    }

});