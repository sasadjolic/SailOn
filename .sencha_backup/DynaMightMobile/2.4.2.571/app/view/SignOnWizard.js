/*
 * File: app/view/SignOnWizard.js
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

Ext.define('DynaMightMobile.view.SignOnWizard', {
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
        'Ext.field.TextArea',
        'Ext.data.JsonP'
    ],

    config: {
        itemId: 'signOnWizard',
        scrollable: false,
        submitOnAction: false,
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
                                itemId: 'nextSignOnBtn',
                                margin: 10,
                                ui: 'decline-round',
                                text: 'Next >>'
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
                                flex: 0.3,
                                margin: 5,
                                layout: 'fit',
                                items: [
                                    {
                                        xtype: 'list',
                                        itemId: 'racesSignOnList',
                                        itemTpl: Ext.create('Ext.XTemplate', 
                                            '{[GetTemplate(\'race\', values)]}',
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
                                        itemId: 'signOnBoatDivisionCmb',
                                        margin: 10,
                                        maxWidth: 500,
                                        label: 'Division',
                                        labelWidth: '50%',
                                        displayField: 'name',
                                        usePicker: 'auto',
                                        valueField: 'divisionid'
                                    },
                                    {
                                        xtype: 'searchfield',
                                        itemId: 'boatSignOnSearch'
                                    },
                                    {
                                        xtype: 'dataview',
                                        flex: 1,
                                        itemId: 'boatsSignOnView',
                                        inline: true,
                                        itemTpl: [
                                            '{[GetTemplate(\'boat\', values)]}',
                                            ''
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'fieldset',
                                flex: 0.4,
                                margin: 5,
                                layout: 'vbox',
                                title: 'Messages and Notices',
                                items: [
                                    {
                                        xtype: 'list',
                                        flex: 1,
                                        itemId: 'messagesList',
                                        itemTpl: [
                                            '',
                                            '<div class="item">',
                                            '    <div class="name">{name}</div>',
                                            '    <div class="vicinity">{message}</div>   ',
                                            '</div>'
                                        ]
                                    },
                                    {
                                        xtype: 'button',
                                        docked: 'bottom',
                                        itemId: 'refreshSOBtn',
                                        ui: 'confirm-round',
                                        text: 'Refresh'
                                    },
                                    {
                                        xtype: 'container',
                                        parentCtrl: 'RacePortalWizard',
                                        docked: 'bottom',
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
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        hidden: false,
                        layout: 'hbox',
                        items: [
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
                                        itemId: 'boatNumberCmb',
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
                itemId: 'signOnCard',
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
                                        hidden: false,
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
                                title: 'Select Race to Sign On',
                                items: [
                                    {
                                        xtype: 'list',
                                        itemId: 'portalRacesList',
                                        itemTpl: Ext.create('Ext.XTemplate', 
                                            '',
                                            '<div class="item" style="{[this.getSignOn(values.signondate)]}">',
                                            '    <div class="name">{rname}',
                                            '    </div>',
                                            '    <div class="vicinity">{signondate}',
                                            '    </div>',
                                            '    ',
                                            '</div>',
                                            {
                                                getSignOn: function(date) {
                                                    return date ? "background-color:#008A2E" : "";
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
                        xtype: 'container',
                        itemId: 'messWatherCt',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'fieldset',
                                flex: 0.6,
                                hidden: false,
                                margin: 5,
                                width: 200,
                                layout: 'fit',
                                title: 'Weather',
                                items: [
                                    {
                                        xtype: 'component',
                                        height: '',
                                        itemId: 'weather1Cmp',
                                        margin: 0,
                                        minHeight: 150
                                    },
                                    {
                                        xtype: 'button',
                                        disabled: true,
                                        itemId: 'showCompassBtn',
                                        ui: 'action',
                                        text: 'Show trend'
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
                        docked: 'bottom',
                        height: 40,
                        itemId: 'bottomCt1',
                        margin: 10,
                        items: [
                            {
                                xtype: 'button',
                                disabled: true,
                                docked: 'left',
                                itemId: 'undoSignOnBtn',
                                ui: 'decline-round',
                                text: 'Undo Sign On'
                            },
                            {
                                xtype: 'button',
                                docked: 'right',
                                itemId: 'doneSignOnBtn',
                                ui: 'action-round',
                                text: 'Done'
                            },
                            {
                                xtype: 'button',
                                disabled: true,
                                docked: 'right',
                                itemId: 'signOnBtn',
                                margin: '0 20 0 0 ',
                                ui: 'confirm-round',
                                text: 'Sign On'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                itemId: 'tcFrm',
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
                                itemId: 'tcOKBtn',
                                ui: 'decline-round',
                                width: 132,
                                text: 'OK'
                            },
                            {
                                xtype: 'button',
                                docked: 'left',
                                hidden: false,
                                itemId: 'tcCancelBtn',
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
                                layout: 'hbox',
                                items: [
                                    {
                                        xtype: 'textfield',
                                        itemId: 'tcFirstNameTxt',
                                        width: 500,
                                        label: 'First Name',
                                        labelWidth: '40%',
                                        name: 'fnTC',
                                        required: true
                                    },
                                    {
                                        xtype: 'textfield',
                                        itemId: 'tcLastNameTxt',
                                        width: 500,
                                        label: 'Last Name',
                                        labelWidth: '40%',
                                        name: 'lnTC',
                                        required: true
                                    }
                                ]
                            },
                            {
                                xtype: 'textareafield',
                                height: 215,
                                itemId: 'tcTxt',
                                readOnly: true
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'formpanel',
                itemId: 'reviewCard',
                layout: 'vbox',
                scrollable: false,
                items: [
                    {
                        xtype: 'fieldset',
                        margin: 5,
                        title: 'You are Signed On'
                    },
                    {
                        xtype: 'container',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'container',
                                flex: 1,
                                layout: 'vbox',
                                items: [
                                    {
                                        xtype: 'fieldset',
                                        margin: 5,
                                        title: 'Today Race Info'
                                    },
                                    {
                                        xtype: 'fieldset',
                                        margin: 5,
                                        title: 'Boat Info',
                                        items: [
                                            {
                                                xtype: 'list',
                                                height: 150,
                                                itemId: 'entrantsList',
                                                itemTpl: [
                                                    '<div class="item">',
                                                    '    <div class="name">{bname}',
                                                    '    </div>',
                                                    '    <div class="vicinity">{hullnumber}',
                                                    '    </div>',
                                                    '    ',
                                                    '</div>'
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'fieldset',
                                width: 204,
                                title: 'Weather'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        docked: 'bottom',
                        height: 40,
                        itemId: 'bottomCt',
                        margin: 10,
                        items: [
                            {
                                xtype: 'button',
                                docked: 'right',
                                itemId: 'opsBtn',
                                ui: 'decline-round',
                                text: 'Opps !. Undo'
                            },
                            {
                                xtype: 'button',
                                docked: 'left',
                                itemId: 'doneBtn',
                                ui: 'confirm-round',
                                text: 'Done'
                            }
                        ]
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onTcOKBtnTap',
                event: 'tap',
                delegate: '#tcOKBtn'
            },
            {
                fn: 'onTcCancelBtnTap',
                event: 'tap',
                delegate: '#tcCancelBtn'
            }
        ]
    },

    onTcOKBtnTap: function(button, e, eOpts) {

    },

    onTcCancelBtnTap: function(button, e, eOpts) {

    },

    initialize: function() {

        var me = this,
            boatStore = CreateStore("raceboat"),
            raceStore = CreateStore("race"),
            messageStore = CreateStore("racemessage"),
            raceStore = CreateStore("race"),
            raceCompletionStore = CreateStore("racecompletion"),
            dStore = CreateStore("division");

        this.callParent();

        boatStore.execConfig({
            params: {
                entityViewID: GetEntityViewByName('BR').entityviewid ,
                filters: 'WHERE cast(startdate as date) = curdate()'
            }
        });

        raceStore.execConfig({
            params: {
                entityViewID: GetEntityViewByName('Races').entityviewid ,
                filters: 'WHERE cast(startdate as date) = curdate()'
            },
            callback: function(recs){
                if(recs.length){
                    //debugger;
                    this.down('#racesSignOnList').select(recs[0], false, false);
                }
            },
            scope: me
        });

        //boatStore.filter('raceid', '0');
        messageStore.execConfig({
            params: {
                entityViewID: GetEntityViewByName('Race Messages').entityviewid ,
                filters: 'WHERE cast(startdate as date) = curdate()'
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
            },
            callback: function(){

            },
            scope: me
        });


        me.raceCompletionStore = raceCompletionStore;

        me.down('#racesSignOnList').setStore(raceStore);
        me.down('#portalRacesList').setStore(boatStore);

        me.down('#messagesList').setStore(messageStore);
        me.down('#raceBoatsList').setStore(messageStore);
        me.down('#boatNumberCmb').setStore(boatStore);
        me.down('#boatsSignOnView').setStore(boatStore);

        me.down('#signOnBoatDivisionCmb').setStore(dStore);

        //me.down('#raceDivisionsReviewList').setStore(seriesDivisionsStore);
        //debugger;
        Ext.data.JsonP.request({
            url: 'http://api.openweathermap.org/data/2.5/weather',
            params: {
                q: 'Canberra'
            },
            success: function(result, request) {
                if (result.weather){
                    //debugger;s

                    var w = result.weather[0],
                        arr=["N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],
                        degrees = Math.floor((result.wind.deg/22.5)+0.5),
                        direction = arr[degrees%16],
                        html = '<div class="weather-widget"><h3>Canberra, AU</h3><h2>'
                            + ' <img src="http://openweathermap.org/img/w/' + w.icon + '.png">'+ Math.ceil(result.main.temp/17.222) + ' °C</h2>'
                     + '<small> '+w.description+'</small><br/>Wind: ' + Math.round(result.wind.speed/1.8 * 100)/100 +' knots ' + direction //+ '/' + result.wind.deg + '°'
                    + '<br/>Pressure: ' + result.main.pressure + '</div>';

                    me.down('#weatherCmp').setHtml(html);
                    me.down('#weather1Cmp').setHtml(html);
                    me.down('#showCompassBtn').enable();
                    me.down('#showCompassBtn').panelHtml = '<div id="compass"><div id="arrow" style="-webkit-transform:rotate('+result.wind.deg+'deg);"></div></div>';
                }
            }

        });


        Ext.Viewport.setMasked(false);
        //this.getTopCardLbl().setHtml('Canberra Yacht Club');

    }

});