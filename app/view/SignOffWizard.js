/*
 * File: app/view/SignOffWizard.js
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

Ext.define('DynaMightMobile.view.SignOffWizard', {
    extend: 'Ext.form.Panel',

    requires: [
        'Ext.form.Panel',
        'Ext.Button',
        'Ext.form.FieldSet',
        'Ext.dataview.List',
        'Ext.XTemplate',
        'Ext.field.Select',
        'Ext.field.Search',
        'Ext.Label',
        'Ext.field.Checkbox',
        'Ext.field.TextArea',
        'Ext.data.JsonP'
    ],

    config: {
        itemId: 'signOnWizard',
        scrollable: false,
        layout: {
            type: 'card',
            animation: 'slide'
        },
        items: [
            {
                xtype: 'formpanel',
                itemId: 'todayRaces',
                layout: 'vbox',
                scrollable: false,
                items: [
                    {
                        xtype: 'container',
                        docked: 'top',
                        height: 59,
                        hidden: false,
                        itemId: 'topCt1',
                        margin: 5,
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'button',
                                disabled: true,
                                docked: 'right',
                                height: 40,
                                itemId: 'nextSignOffBtn',
                                margin: 10,
                                ui: 'decline-round',
                                text: 'Next >>'
                            },
                            {
                                xtype: 'button',
                                disabled: false,
                                docked: 'left',
                                height: 40,
                                hidden: true,
                                itemId: 'backSignOffBtn1',
                                margin: 10,
                                ui: 'decline-round',
                                text: '<< Back'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        height: 430,
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'fieldset',
                                flex: 0.5,
                                margin: 5,
                                layout: 'fit',
                                title: 'Today\'s Races',
                                items: [
                                    {
                                        xtype: 'list',
                                        itemId: 'racesSignOffList',
                                        itemTpl: Ext.create('Ext.XTemplate', 
                                            '',
                                            '<div class="item">',
                                            '    <div class="name">{name}',
                                            '    </div>',
                                            '    <div class="vicinity">Start time: {[this.DateFormat(values.startdate)]}',
                                            '    </div>',
                                            '    ',
                                            '</div>',
                                            {
                                                DateFormat: function(date) {
                                                    return Ext.Date.format(date, 'Y-m-d H:i');
                                                }
                                            }
                                        )
                                    }
                                ]
                            },
                            {
                                xtype: 'fieldset',
                                flex: 1,
                                margin: 5,
                                layout: 'vbox',
                                items: [
                                    {
                                        xtype: 'selectfield',
                                        itemId: 'signOffBoatDivisionCmb',
                                        margin: 10,
                                        maxWidth: 500,
                                        label: 'Boat Select  -  Division',
                                        labelWidth: '50%',
                                        displayField: 'name',
                                        valueField: 'divisionid'
                                    },
                                    {
                                        xtype: 'searchfield',
                                        itemId: 'boatSignOffSearch'
                                    },
                                    {
                                        xtype: 'dataview',
                                        flex: 1,
                                        itemId: 'boatsSignOffView',
                                        inline: true,
                                        itemTpl: [
                                            '{[GetTemplate(\'boat\', values)]}',
                                            ''
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        flex: 1,
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'fieldset',
                                flex: 1,
                                margin: 5,
                                layout: 'fit',
                                title: 'Messages and Notices',
                                items: [
                                    {
                                        xtype: 'list',
                                        itemId: 'messagesList',
                                        itemTpl: [
                                            '',
                                            '<div class="item">',
                                            '    <div class="name">{name}</div>',
                                            '    <div class="vicinity">{message}</div>   ',
                                            '</div>'
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'fieldset',
                                flex: 1,
                                hidden: true,
                                margin: 5,
                                title: 'Boat login',
                                items: [
                                    {
                                        xtype: 'selectfield',
                                        hidden: false,
                                        itemId: 'boatNumberSignOffCmb',
                                        label: 'Boat\'s Sail / Hull Number',
                                        name: 'boatid',
                                        displayField: 'bname',
                                        valueField: 'boatid'
                                    },
                                    {
                                        xtype: 'textfield',
                                        hidden: true,
                                        itemId: 'skipperNumber',
                                        label: 'Skipper\' s YA Number'
                                    }
                                ]
                            },
                            {
                                xtype: 'fieldset',
                                hidden: true,
                                margin: 5,
                                width: 204,
                                layout: 'fit',
                                title: 'Weather',
                                items: [
                                    {
                                        xtype: 'component',
                                        itemId: 'weatherCmp'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        docked: 'bottom',
                        height: 40,
                        hidden: true,
                        itemId: 'bottomCt',
                        margin: 10
                    }
                ]
            },
            {
                xtype: 'formpanel',
                itemId: 'signOffCard',
                layout: 'vbox',
                scrollable: false,
                items: [
                    {
                        xtype: 'container',
                        flex: 1,
                        itemId: 'raceBoatBt',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'fieldset',
                                itemId: 'loginCt',
                                margin: 5,
                                defaults: {
                                    labelWidth: '50%'
                                },
                                title: 'Boat Info',
                                layout: {
                                    type: 'vbox',
                                    align: 'start'
                                },
                                items: [
                                    {
                                        xtype: 'label',
                                        itemId: 'boatInfoLbl',
                                        width: 200
                                    },
                                    {
                                        xtype: 'fieldset',
                                        hidden: true,
                                        itemId: 'generalInfoFS',
                                        items: [
                                            {
                                                xtype: 'textfield',
                                                label: 'Sail/Hull Number',
                                                labelWidth: '50%',
                                                name: 'hullnumber'
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: 'Boat Name',
                                                labelWidth: '50%',
                                                name: 'bname'
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: 'Skipper\'s YA Number',
                                                labelWidth: '50%',
                                                name: 'ya'
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: 'Skypper\'s Details',
                                                labelWidth: '50%',
                                                name: 'skippername'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'button',
                                        docked: 'bottom',
                                        itemId: 'editBoatBtn',
                                        ui: 'action-round',
                                        text: 'Edit Boat'
                                    }
                                ]
                            },
                            {
                                xtype: 'fieldset',
                                flex: 1,
                                margin: 5,
                                layout: 'fit',
                                title: 'Race Info',
                                items: [
                                    {
                                        xtype: 'list',
                                        itemId: 'signOffRacesList',
                                        itemTpl: Ext.create('Ext.XTemplate', 
                                            '',
                                            '<div class="item" style="{[this.getSignOn(values.signondate, values.signoffdate)]}">',
                                            '    <div class="name">{rname}',
                                            '    </div>',
                                            '    <div class="vicinity">{signondate}',
                                            '    </div>',
                                            '</div>',
                                            {
                                                getSignOn: function(signondate, signoffdate) {

                                                    if(signoffdate) {
                                                        return "background-color:gold";
                                                    }
                                                    else if (signondate) {
                                                        return "background-color:green";
                                                    }
                                                    else {
                                                        return '';
                                                    }
                                                }
                                            }
                                        )
                                    },
                                    {
                                        xtype: 'container',
                                        docked: 'bottom',
                                        itemId: 'btnsCt',
                                        layout: 'hbox'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'selectfield',
                        hidden: true,
                        itemId: 'dnfSelectSignOff',
                        label: 'DNF',
                        displayField: 'code',
                        valueField: 'boatstatusid'
                    },
                    {
                        xtype: 'container',
                        itemId: 'messWatherCt',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'fieldset',
                                flex: 1,
                                hidden: false,
                                margin: 5,
                                width: 200,
                                layout: 'fit',
                                title: 'Weather',
                                items: [
                                    {
                                        xtype: 'component',
                                        itemId: 'weather1Cmp',
                                        margin: 0,
                                        minHeight: 150
                                    }
                                ]
                            },
                            {
                                xtype: 'fieldset',
                                flex: 1,
                                margin: 5,
                                title: 'Race Messages and Notices',
                                items: [
                                    {
                                        xtype: 'list',
                                        height: 150,
                                        itemId: 'raceBoatsList',
                                        itemTpl: [
                                            '',
                                            '<div class="item">',
                                            '    <div class="name">{name}</div>',
                                            '    <div class="vicinity">{message}</div>   ',
                                            '</div>'
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        docked: 'top',
                        height: 40,
                        itemId: 'bottomCt1',
                        margin: 10,
                        items: [
                            {
                                xtype: 'button',
                                disabled: true,
                                docked: 'left',
                                itemId: 'undoSignOffBtn',
                                ui: 'decline-round',
                                text: 'Undo Sign Off'
                            },
                            {
                                xtype: 'button',
                                docked: 'right',
                                itemId: 'doneSignOffBtn',
                                ui: 'action-round',
                                text: 'Done'
                            },
                            {
                                xtype: 'button',
                                disabled: true,
                                docked: 'right',
                                itemId: 'signOffBtn',
                                margin: '0 20 0 0 ',
                                ui: 'confirm-round',
                                text: 'Sign Off'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                itemId: 'signOffTCForm',
                padding: '0 100 100 100',
                scrollable: false,
                items: [
                    {
                        xtype: 'container',
                        height: 40,
                        itemId: 'bottomCt',
                        margin: 20,
                        items: [
                            {
                                xtype: 'button',
                                docked: 'right',
                                itemId: 'signOffTCOKBtn',
                                ui: 'decline-round',
                                width: 132,
                                text: 'OK'
                            },
                            {
                                xtype: 'button',
                                docked: 'left',
                                hidden: false,
                                itemId: 'signOffTCCancelBtn',
                                ui: 'decline-round',
                                width: 146,
                                text: 'Cancel'
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        itemId: 'seriesDetails',
                        title: 'Terms & Conditions',
                        items: [
                            {
                                xtype: 'container',
                                layout: 'vbox',
                                items: [
                                    {
                                        xtype: 'container',
                                        layout: 'hbox',
                                        items: [
                                            {
                                                xtype: 'textfield',
                                                itemId: 'signOffTCFirstNameTxt',
                                                width: 500,
                                                label: 'First Name',
                                                labelWidth: '40%',
                                                name: 'fnTC',
                                                required: true
                                            },
                                            {
                                                xtype: 'textfield',
                                                itemId: 'signOffTCLastNameTxt',
                                                width: 500,
                                                label: 'Last Name',
                                                labelWidth: '40%',
                                                name: 'lnTC',
                                                required: true
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'container',
                                        layout: 'hbox',
                                        items: [
                                            {
                                                xtype: 'checkboxfield',
                                                flex: 0.3,
                                                itemId: 'signOffPropperCourse',
                                                label: 'I have sailed a propper course',
                                                labelWidth: '80%'
                                            },
                                            {
                                                xtype: 'checkboxfield',
                                                flex: 0.3,
                                                itemId: 'signOffRetiring',
                                                label: 'I m retiring',
                                                labelWidth: '80%'
                                            },
                                            {
                                                xtype: 'selectfield',
                                                flex: 0.4,
                                                itemId: 'signOffCodeCmb',
                                                labelWidth: '0%',
                                                readOnly: true,
                                                displayField: 'code'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'textareafield',
                                height: 215,
                                itemId: 'signOffTCTxt',
                                readOnly: true
                            }
                        ]
                    }
                ]
            }
        ]
    },

    initialize: function() {
        var me = this,
            boatStore = CreateStore("raceboat"),
            raceStore = CreateStore("race"),
            messageStore = CreateStore("racemessage"),
            raceStore = CreateStore("race"),
            boatStatusStore = CreateStore("boatstatus"),
            raceCompletionStore = CreateStore("racecompletion"),
            dStore = CreateStore("division"),
            sStore = CreateStore("boatstatus");


        this.callParent();
        sStore.execConfig({
            params: {
                entityViewID: GetEntityViewByName('Boat Status').entityviewid ,
                //filters: 'where userselectable = 1'
                filters: ''
            }
        });
        boatStore.execConfig({
            params: {
                entityViewID: GetEntityViewByName('BR').entityviewid ,
                //filters: 'WHERE cast(startdate as date) = curdate()'
                filters: ''
            }
        });

        boatStatusStore.execConfig({
            params: {
                entityViewID: GetEntityViewByName('Boat Status').entityviewid ,
                filters: ''
            }
        });

        raceStore.execConfig({
            params: {
                entityViewID: GetEntityViewByName('Races').entityviewid ,
                //filters: 'WHERE cast(startdate as date) = curdate()'
                filters: ''
            },
            callback: function(recs){
                if(recs.length){
                    //debugger;
                    this.down('#racesSignOffList').select(recs[0], false, false);
                }
            },
            scope: me
        });

        //boatStore.filter('raceid', '0');
        messageStore.execConfig({
            params: {
                entityViewID: GetEntityViewByName('Race Messages').entityviewid ,
                filters: ''//WHERE cast(startdate as date) = curdate()'
            }
        });

        raceCompletionStore.execConfig({
            params: {
                entityViewID: GetEntityViewByName('Race Completion').entityviewid ,
                filters: ''//WHERE cast(startdate as date) = curdate()'
            }
        });


        dStore.execConfig({
            params: {
                entityViewID: GetEntityViewByName('AllDivisions').entityviewid ,
                filters: ''
            }
        });

        me.raceCompletionStore = raceCompletionStore;

        me.down('#racesSignOffList').setStore(raceStore);
        me.down('#signOffRacesList').setStore(boatStore);
        //debugger;
        me.down('#messagesList').setStore(messageStore);
        me.down('#raceBoatsList').setStore(messageStore);
        me.down('#boatNumberSignOffCmb').setStore(boatStore);
        me.down('#boatsSignOffView').setStore(boatStore);

        me.down('#dnfSelectSignOff').setStore(boatStatusStore);

        me.down('#signOffBoatDivisionCmb').setStore(dStore);
        me.down('#signOffCodeCmb').setStore(sStore);
        //me.down('#raceDivisionsReviewList').setStore(seriesDivisionsStore);
        //debugger;
        Ext.data.JsonP.request({
            url: 'http://api.openweathermap.org/data/2.5/weather',
            params: {
                q: 'Canberra',
                APPID: '8fc3a8dd56a875a4e72d3d2aa4110df9'
            },
            success: function(result, request) {
                if (result.weather){
                    //debugger;
                    var w = result.weather[0],
                        html = '<div class="weather-widget"><h3>Canberra, AU</h3><h2>'
                            + ' <img src="http://openweathermap.org/img/w/' + w.icon + '.png">'+ Math.ceil(result.main.temp/17.222) + ' °C</h2>'
                            + w.main + '<small> '+w.description+'</small></div>';

                    me.down('#weatherCmp').setHtml(html);
                    me.down('#weather1Cmp').setHtml(html);
                }
            }

        });

        Ext.Viewport.setMasked(false);
    }

});