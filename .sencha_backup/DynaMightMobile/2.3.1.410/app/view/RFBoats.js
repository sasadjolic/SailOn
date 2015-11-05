/*
 * File: app/view/RFBoats.js
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

Ext.define('DynaMightMobile.view.RFBoats', {
    extend: 'Ext.form.Panel',

    requires: [
        'Ext.Label',
        'Ext.dataview.DataView',
        'Ext.XTemplate',
        'Ext.Button',
        'Ext.form.FieldSet',
        'Ext.field.Select',
        'Ext.field.Search'
    ],

    config: {
        height: '100%',
        itemId: 'rfBoatsFrm',
        layout: 'hbox',
        scrollable: false,
        items: [
            {
                xtype: 'container',
                flex: 1,
                layout: 'hbox',
                items: [
                    {
                        xtype: 'container',
                        flex: 0.2,
                        itemId: 'tempFinishCt',
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'label',
                                id: 'timeFromRaceStart',
                                itemId: 'timeFromRaceStart'
                            },
                            {
                                xtype: 'dataview',
                                flex: 1,
                                itemId: 'tempBoatsView',
                                inline: true,
                                itemTpl: [
                                    '{[GetTemplate(\'boat\', values)]}'
                                ]
                            },
                            {
                                xtype: 'button',
                                docked: 'bottom',
                                height: 50,
                                itemId: 'finishAllBtn',
                                margin: 5,
                                ui: 'confirm-round',
                                text: 'Finish all'
                            },
                            {
                                xtype: 'button',
                                docked: 'bottom',
                                height: 50,
                                itemId: 'removeTempBtn',
                                margin: 5,
                                ui: 'action-round',
                                text: 'Remove'
                            },
                            {
                                xtype: 'button',
                                docked: 'bottom',
                                height: 50,
                                itemId: 'addTempBtn',
                                margin: 5,
                                ui: 'action-round',
                                text: 'Add'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        flex: 1,
                        itemId: 'hFinalizeCt',
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'dataview',
                                flex: 1,
                                itemId: 'boatsView',
                                inline: true,
                                itemTpl: Ext.create('Ext.XTemplate', 
                                    '{[GetTemplate(\'boat\', values)]}',
                                    '',
                                    {
                                        getPath: function(path) {
                                            return "background-size:cover;background-image:url('../admin/uploaded_files/5417f6f2d174c6.44304491.png')";//+ path +"')";
                                        }
                                    }
                                )
                            },
                            {
                                xtype: 'container',
                                layout: 'hbox',
                                items: [
                                    {
                                        xtype: 'container',
                                        parentCtrl: 'RaceFinishWizard',
                                        docked: 'right',
                                        itemId: 'keyboardCt',
                                        width: 220,
                                        items: [
                                            {
                                                xtype: 'container',
                                                margin: 10,
                                                layout: 'hbox',
                                                items: [
                                                    {
                                                        xtype: 'button',
                                                        height: 50,
                                                        itemId: 'k1Btn',
                                                        ui: 'action-round',
                                                        width: 60,
                                                        text: '1'
                                                    },
                                                    {
                                                        xtype: 'button',
                                                        height: 50,
                                                        itemId: 'k2Btn',
                                                        margin: '0 10 0 10',
                                                        ui: 'action-round',
                                                        width: 60,
                                                        text: '2'
                                                    },
                                                    {
                                                        xtype: 'button',
                                                        height: 50,
                                                        itemId: 'k3Btn',
                                                        ui: 'action-round',
                                                        width: 60,
                                                        text: '3'
                                                    }
                                                ]
                                            },
                                            {
                                                xtype: 'container',
                                                margin: 10,
                                                layout: 'hbox',
                                                items: [
                                                    {
                                                        xtype: 'button',
                                                        height: 50,
                                                        itemId: 'k4Btn',
                                                        ui: 'action-round',
                                                        width: 60,
                                                        text: '4'
                                                    },
                                                    {
                                                        xtype: 'button',
                                                        height: 50,
                                                        itemId: 'k5Btn',
                                                        margin: '0 10 0 10',
                                                        ui: 'action-round',
                                                        width: 60,
                                                        text: '5'
                                                    },
                                                    {
                                                        xtype: 'button',
                                                        height: 50,
                                                        itemId: 'k6Btn',
                                                        ui: 'action-round',
                                                        width: 60,
                                                        text: '6'
                                                    }
                                                ]
                                            },
                                            {
                                                xtype: 'container',
                                                margin: 10,
                                                layout: 'hbox',
                                                items: [
                                                    {
                                                        xtype: 'button',
                                                        height: 50,
                                                        itemId: 'k7Btn',
                                                        ui: 'action-round',
                                                        width: 60,
                                                        text: '7'
                                                    },
                                                    {
                                                        xtype: 'button',
                                                        itemId: 'k8Btn',
                                                        margin: '0 10 0 10',
                                                        ui: 'action-round',
                                                        width: 60,
                                                        text: '8'
                                                    },
                                                    {
                                                        xtype: 'button',
                                                        height: 50,
                                                        itemId: 'k9Btn',
                                                        ui: 'action-round',
                                                        width: 60,
                                                        text: '9'
                                                    }
                                                ]
                                            },
                                            {
                                                xtype: 'container',
                                                margin: 10,
                                                layout: 'hbox',
                                                items: [
                                                    {
                                                        xtype: 'button',
                                                        itemId: 'kBackBtn',
                                                        ui: 'action-round',
                                                        width: 60,
                                                        text: '<'
                                                    },
                                                    {
                                                        xtype: 'button',
                                                        height: 50,
                                                        itemId: 'k0Btn',
                                                        margin: '0 10 0 10',
                                                        ui: 'action-round',
                                                        width: 60,
                                                        text: '0'
                                                    },
                                                    {
                                                        xtype: 'button',
                                                        height: 50,
                                                        itemId: 'kClearBtn',
                                                        ui: 'action-round',
                                                        width: 60,
                                                        text: 'C'
                                                    }
                                                ]
                                            },
                                            {
                                                xtype: 'container',
                                                layout: 'hbox'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'fieldset',
                                        flex: 1,
                                        height: 200,
                                        layout: 'fit',
                                        title: 'Finished Boats',
                                        items: [
                                            {
                                                xtype: 'dataview',
                                                height: 200,
                                                itemId: 'boatsFinishView',
                                                inline: true,
                                                itemTpl: [
                                                    '{[GetTemplate(\'boattime\', values)]}',
                                                    ''
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                docked: 'bottom',
                height: 60,
                itemId: 'bottomCt',
                margin: 10,
                layout: 'hbox',
                items: [
                    {
                        xtype: 'selectfield',
                        height: 40,
                        itemId: 'boatDivisionCmb',
                        maxWidth: 200,
                        labelWidth: '0%',
                        displayField: 'name',
                        usePicker: false,
                        valueField: 'divisionid'
                    },
                    {
                        xtype: 'selectfield',
                        height: 40,
                        itemId: 'sListChk',
                        margin: '0 0 0 20',
                        width: 200,
                        value: 'uniform',
                        options: [
                            {
                                text: 'Uniform view',
                                value: 'uniform'
                            },
                            {
                                text: 'Full view',
                                value: 'full'
                            },
                            {
                                text: 'Picture view',
                                value: 'picture'
                            }
                        ]
                    },
                    {
                        xtype: 'searchfield',
                        height: 40,
                        itemId: 'boatSearch',
                        margin: '0 40 0 10',
                        width: 200
                    },
                    {
                        xtype: 'button',
                        xurl: 'RFRace',
                        height: 40,
                        itemId: 'genericNextBtn',
                        ui: 'decline-round',
                        text: 'Next'
                    },
                    {
                        xtype: 'button',
                        docked: 'right',
                        itemId: 'bFinishBtn',
                        ui: 'confirm-round',
                        width: 200,
                        text: 'Finish'
                    },
                    {
                        xtype: 'button',
                        docked: 'right',
                        itemId: 'bTopBtn',
                        margin: '0 10 0 10',
                        ui: 'confirm-round',
                        width: 200,
                        text: 'To Top'
                    },
                    {
                        xtype: 'button',
                        docked: 'left',
                        itemId: 'fUndoBtn',
                        margin: '0 10 0 10',
                        ui: 'confirm-round',
                        text: 'Undo'
                    }
                ]
            }
        ]
    },

    initialize: function() {
        this.callParent();

        var me = this,
            bStore = CreateStore("raceboat"),
            bTempStore = CreateStore("raceboat"),
            dStore = CreateStore("division"),
            ctrl = DynaMightMobile.app.getController('RaceFinishWizard'),
            timeStore = CreateStore("race"),
            startTime,
            now, hour, min, sec,diff;

        APP.WarningUnsavedData = true;
        bStore.sort('endtime', 'DESC');

        dStore.clearFilter(true);
        dStore.execConfig({
            params: {
                entityViewID: GetEntityViewByName('DivisionsByRace').entityviewid ,
                filters: "where raceid is null or raceid = '"+ctrl.raceid+"' order by name asc"
            }
        });
        startTime = new Date(ctrl.rStore.data.items[0].get('starttime'));
        now = new Date();
        diff = now-startTime;
        hour = (diff/1000/60/60) << 0;
        min = (diff/1000/60)%60 << 0;
        sec =(diff/1000)%60 << 0;
        var id = setInterval(setTime,1000);
        function setTime(){
            if(sec == 59){
                if(min == 59){
                    min = 0;
                    hour++;
                }
                sec=0;
                min++;
            }
            else
            {
                sec++;
            }
            if(me && me.down('#timeFromRaceStart'))
                me.down('#timeFromRaceStart').setHtml(' Elapsed: ' +hour+':'+min+':'+sec);
            else
                clearInterval(id);
        }
        //this.down('#timeFromRaceStart').setHtml('Elapsed: ' +hour+':'+min+':'+sec);
        //debugger;
        me.down('#boatDivisionCmb').setStore(dStore);

        me.down('#boatsFinishView').setStore(bStore);
        me.down('#tempBoatsView').setStore(bTempStore);
        me.down('#boatsView').setStore(ctrl.boatStore);
        ctrl.dStore = dStore;
        ctrl.finishView = me.down('#boatsFinishView').getStore();

    }

});