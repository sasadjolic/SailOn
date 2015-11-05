/*
 * File: app/view/RegistrationWizard.js
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

Ext.define('DynaMightMobile.view.RegistrationWizard', {
    extend: 'Ext.Container',

    requires: [
        'DynaMightMobile.view.BoatDetails',
        'DynaMightMobile.view.SkipperInformation',
        'DynaMightMobile.view.BoatDetails1',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Password',
        'Ext.field.Radio',
        'Ext.Button',
        'Ext.tab.Panel',
        'Ext.Label',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        height: '100%',
        itemId: 'seriesWizardId',
        scrollable: false,
        layout: {
            type: 'card',
            animation: 'slide'
        },
        items: [
            {
                xtype: 'formpanel',
                height: '100%',
                itemId: 'registrationLoginFrm',
                scrollable: false,
                items: [
                    {
                        xtype: 'fieldset',
                        itemId: 'seriesDetails',
                        title: 'Series registration - Sign In',
                        items: [
                            {
                                xtype: 'textfield',
                                itemId: 'name',
                                label: 'Boat\'s Sail / Hull Number',
                                name: 'name',
                                required: true
                            },
                            {
                                xtype: 'passwordfield',
                                itemId: 'password',
                                label: 'Password',
                                name: 'password'
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        hidden: true,
                        title: '',
                        items: [
                            {
                                xtype: 'radiofield',
                                itemId: 'myradiobutton4',
                                label: 'Login',
                                name: 'loginType',
                                value: 'loginChk',
                                checked: true
                            },
                            {
                                xtype: 'radiofield',
                                label: 'New Boat',
                                name: 'loginType',
                                value: 'newChk'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        height: 40,
                        itemId: 'bottomCt',
                        margin: 20,
                        items: [
                            {
                                xtype: 'button',
                                docked: 'right',
                                itemId: 'loginNextBtn',
                                ui: 'decline-round',
                                text: 'Login >>'
                            },
                            {
                                xtype: 'button',
                                docked: 'left',
                                itemId: 'newBoatBtn',
                                ui: 'decline-round',
                                text: 'New Boat'
                            },
                            {
                                xtype: 'button',
                                docked: 'right',
                                hidden: true,
                                itemId: 'backBtn',
                                text: '<< Back'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'formpanel',
                height: '100%',
                itemId: 'boatDetails',
                layout: 'vbox',
                scrollable: false,
                items: [
                    {
                        xtype: 'tabpanel',
                        flex: 1,
                        itemId: 'registrationTabPnl',
                        items: [
                            {
                                xtype: 'container',
                                title: 'Registrations',
                                itemId: 'seriesTab',
                                layout: 'fit',
                                items: [
                                    {
                                        xtype: 'container',
                                        height: '100%',
                                        itemId: 'regCt',
                                        layout: 'hbox',
                                        scrollable: false,
                                        items: [
                                            {
                                                xtype: 'fieldset',
                                                width: 300,
                                                title: 'Boat Info',
                                                items: [
                                                    {
                                                        xtype: 'label',
                                                        html: '',
                                                        itemId: 'regBoatLbl'
                                                    }
                                                ]
                                            },
                                            {
                                                xtype: 'fieldset',
                                                flex: 1,
                                                layout: 'fit',
                                                title: 'Registred Series List',
                                                items: [
                                                    {
                                                        xtype: 'list',
                                                        itemId: 'entriesList',
                                                        itemTpl: Ext.create('Ext.XTemplate', 
                                                            '<div class="icon-wrapper">',
                                                            '    <div class="icon" style={[this.getPath(values.path)]}>',
                                                            '    </div>',
                                                            '</div>',
                                                            '<div class="item">',
                                                            '    <table><tr>',
                                                            '        <td>',
                                                            '            <div class="name">{raceseriesname} - <small>{type}</small></div>',
                                                            '            <div class="vicinity">{[this.DateFormat(values.earlieststarttime)]}</div>',
                                                            '            <div class="vicinity">{entrycost} $</div>',
                                                            '            ',
                                                            '        </td>',
                                                            '        <td style="padding-left: 30px;display: block;padding-top: 5px;">',
                                                            '            <div class="vicinity">{description}</div>',
                                                            '        </td>',
                                                            '        </tr>',
                                                            '    </table>',
                                                            '    ',
                                                            '</div>',
                                                            {
                                                                getPath: function(path) {
                                                                    //debugger;
                                                                    return "background-size:50px;background-image:url('../admin/uploaded_files/"+ path +"')";
                                                                },
                                                                DateFormat: function(date) {
                                                                    //debugger;
                                                                    return Ext.Date.format(new Date(date), 'Y-m-d H:i');
                                                                }
                                                            }
                                                        )
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                title: 'Boat Details',
                                itemId: 'detailsTab',
                                layout: 'fit',
                                scrollable: true,
                                items: [
                                    {
                                        xtype: 'boatdetails',
                                        itemId: 'detailsPnl'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        docked: 'bottom',
                        height: 40,
                        itemId: 'bottomTabCt',
                        margin: 10,
                        items: [
                            {
                                xtype: 'button',
                                disabled: true,
                                docked: 'right',
                                itemId: 'continueBtn',
                                ui: 'confirm-round',
                                width: 150,
                                text: 'Continue'
                            },
                            {
                                xtype: 'button',
                                docked: 'right',
                                itemId: 'newRegistrationBtn',
                                margin: '0 20 0 0',
                                ui: 'decline-round',
                                width: 150,
                                text: 'New'
                            },
                            {
                                xtype: 'button',
                                docked: 'left',
                                itemId: 'registrationBackBtn',
                                ui: 'decline-round',
                                text: '<< Back'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'formpanel',
                itemId: 'seriesAvailable',
                layout: 'vbox',
                items: [
                    {
                        xtype: 'fieldset',
                        flex: 1,
                        itemId: 'seriesFS',
                        layout: 'fit',
                        title: 'Series Available',
                        items: [
                            {
                                xtype: 'list',
                                itemId: 'seriesList',
                                itemTpl: Ext.create('Ext.XTemplate', 
                                    '<div class="icon-wrapper">',
                                    '    <div class="icon" style={[this.getPath(values.path)]}>',
                                    '    </div>',
                                    '</div>',
                                    '<div class="item">',
                                    '    <table><tr>',
                                    '        <td>',
                                    '            <div class="name">{name}</div>',
                                    '            <div class="vicinity">{[this.DateFormat(values.earlieststarttime)]}</div>',
                                    '            <div class="vicinity">{entrycost} $</div>',
                                    '            <div class="vicinity">{type}</div>',
                                    '        </td>',
                                    '        <td style="padding-left: 30px;display: block;padding-top: 5px;">',
                                    '            <div class="vicinity">{description}</div>',
                                    '        </td>',
                                    '        </tr>',
                                    '    </table>',
                                    '    ',
                                    '</div>',
                                    {
                                        getPath: function(path) {
                                            //debugger;
                                            return "background-size:50px;background-image:url('../admin/uploaded_files/"+ path +"')";
                                        },
                                        DateFormat: function(date) {
                                            //debugger;
                                            return Ext.Date.format(new Date(date), 'Y-m-d H:i');
                                        }
                                    }
                                )
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
                                itemId: 'nextSBtn',
                                ui: 'decline-round',
                                text: 'Next >>'
                            },
                            {
                                xtype: 'button',
                                docked: 'left',
                                hidden: false,
                                itemId: 'backBoatBtn',
                                ui: 'decline-round',
                                text: '<< Back'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'formpanel',
                height: '100%',
                itemId: 'raceDetails',
                layout: 'vbox',
                scrollable: true,
                items: [
                    {
                        xtype: 'fieldset',
                        hidden: true,
                        margin: 5,
                        title: 'Series information'
                    },
                    {
                        xtype: 'fieldset',
                        height: 365,
                        margin: 5,
                        layout: 'hbox',
                        title: 'Race Information',
                        items: [
                            {
                                xtype: 'list',
                                flex: 1,
                                itemId: 'serieRacesList',
                                itemTpl: Ext.create('Ext.XTemplate', 
                                    '',
                                    '<div class="item">',
                                    '    <div class="name">{name}',
                                    '    </div>',
                                    '    ',
                                    '</div>',
                                    {
                                        DateFormat: function(date) {
                                            return Ext.Date.format(date, 'Y-m-d H:i');
                                        }
                                    }
                                )
                            },
                            {
                                xtype: 'container',
                                itemId: 'addRemButtonsCt',
                                width: 206,
                                items: [
                                    {
                                        xtype: 'button',
                                        itemId: 'addRaceBtn',
                                        margin: 20,
                                        ui: 'action-round',
                                        text: 'Add >'
                                    },
                                    {
                                        xtype: 'button',
                                        itemId: 'removeRaceBtn',
                                        margin: 20,
                                        ui: 'action-round',
                                        text: '< Remove '
                                    }
                                ]
                            },
                            {
                                xtype: 'list',
                                flex: 1,
                                itemId: 'boatRacesList',
                                itemTpl: Ext.create('Ext.XTemplate', 
                                    '',
                                    '<div class="item">',
                                    '    <div class="name">{rname}',
                                    '    </div>',
                                    '   ',
                                    '</div>',
                                    {
                                        DateFormat: function(date) {
                                            return Ext.Date.format(new Date(date), 'Y-m-d H:i');
                                        }
                                    }
                                )
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        itemId: 'registrationTypeFS',
                        title: 'Registration Type',
                        items: [
                            {
                                xtype: 'radiofield',
                                itemId: 'seriesRadio',
                                label: 'Register for Series',
                                name: 'registrationRadio',
                                value: 'seriesRadio'
                            },
                            {
                                xtype: 'radiofield',
                                itemId: 'individualRadio',
                                label: 'Register for individual races',
                                name: 'registrationRadio',
                                value: 'raceRadio',
                                checked: true
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
                                itemId: 'nextSaveRacesBtn',
                                ui: 'decline-round',
                                text: 'Register >>'
                            },
                            {
                                xtype: 'button',
                                docked: 'left',
                                hidden: false,
                                itemId: 'backBoatBtn',
                                ui: 'decline-round',
                                text: '<< Back'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'formpanel',
                height: '100%',
                itemId: 'seriesDetails',
                layout: 'vbox',
                scrollable: false,
                items: [
                    {
                        xtype: 'panel',
                        flex: 1,
                        itemId: 'skipperInfoPanel',
                        margin: 5,
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'skiperInforamtion',
                                flex: 1
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
                                itemId: 'nextSeriesBtn',
                                ui: 'decline-round',
                                text: 'Next >>'
                            },
                            {
                                xtype: 'button',
                                docked: 'left',
                                hidden: false,
                                itemId: 'backBoatBtn',
                                ui: 'decline-round',
                                text: '<< Back'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'formpanel',
                height: '100%',
                itemId: 'raceDivisionDetails',
                layout: 'vbox',
                scrollable: false,
                items: [
                    {
                        xtype: 'container',
                        flex: 1,
                        itemId: 'divisionCt',
                        layout: {
                            type: 'hbox',
                            align: 'stretchmax',
                            pack: 'center'
                        },
                        items: [
                            {
                                xtype: 'fieldset',
                                flex: 1,
                                height: 500,
                                layout: 'fit',
                                title: 'Divisions',
                                items: [
                                    {
                                        xtype: 'list',
                                        height: 500,
                                        itemId: 'rDivisionsList',
                                        itemTpl: Ext.create('Ext.XTemplate', 
                                            '',
                                            '   ',
                                            '<div class="icon-wrapper">',
                                            '    <div class="icon" style={[this.getPath(values.path)]}>',
                                            '    </div>',
                                            '</div>',
                                            '<div class="item">',
                                            '    <div class="name">{name} - {description}',
                                            '    </div>',
                                            '    <div class="vicinity">',
                                            '    </div>',
                                            '    ',
                                            '</div>',
                                            {
                                                getPath: function(path) {
                                                    return "background-size:cover;background-image:url('../admin/uploaded_files/"+ path +"')";
                                                }
                                            }
                                        )
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                height: 500,
                                itemId: 'divisionButtonsCt',
                                defaults: {
                                    margin: '5 0 0 0'
                                },
                                layout: {
                                    type: 'vbox',
                                    pack: 'center'
                                },
                                items: [
                                    {
                                        xtype: 'button',
                                        itemId: 'addRDivisionBtn',
                                        ui: 'action-round',
                                        text: 'Add >'
                                    },
                                    {
                                        xtype: 'button',
                                        hidden: true,
                                        itemId: 'allRDivisionsBtn',
                                        ui: 'action-round',
                                        text: 'All >>'
                                    },
                                    {
                                        xtype: 'button',
                                        itemId: 'delRDivisionBtn',
                                        ui: 'action-round',
                                        text: '< Rem'
                                    }
                                ]
                            },
                            {
                                xtype: 'fieldset',
                                flex: 1,
                                height: 500,
                                layout: 'fit',
                                title: 'Race Divisions',
                                items: [
                                    {
                                        xtype: 'list',
                                        height: 500,
                                        itemId: 'rRaceDivisionsList',
                                        itemTpl: Ext.create('Ext.XTemplate', 
                                            '<div class="icon-wrapper">',
                                            '    <div class="icon" style={[this.getPath(values.path)]}>',
                                            '    </div>',
                                            '</div>',
                                            '<div class="item">',
                                            '    <div class="name">{name} - {description}',
                                            '    </div>',
                                            '    <div class="vicinity">',
                                            '    </div>',
                                            '    ',
                                            '</div>',
                                            {
                                                getPath: function(path) {
                                                    //debugger;
                                                    return "background-size:cover;background-image:url('../admin/uploaded_files/"+ path +"')";
                                                }
                                            }
                                        )
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
                                docked: 'right',
                                itemId: 'nextRaceDBtn',
                                ui: 'decline-round',
                                text: 'Save Data'
                            },
                            {
                                xtype: 'button',
                                docked: 'left',
                                itemId: 'backBoatBtn',
                                ui: 'decline-round',
                                text: '<< Back'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'formpanel',
                height: '100%',
                itemId: 'reviewCard',
                layout: 'vbox',
                scrollable: false,
                items: [
                    {
                        xtype: 'fieldset',
                        title: 'Registration details',
                        items: [
                            {
                                xtype: 'label',
                                itemId: 'seriesReview'
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        itemId: 'finaliseCt',
                        margin: 0,
                        layout: {
                            type: 'hbox',
                            align: 'start'
                        },
                        items: [
                            {
                                xtype: 'fieldset',
                                itemId: 'generalInfoFS',
                                width: 350,
                                items: [
                                    {
                                        xtype: 'textfield',
                                        itemId: 'statusTxt',
                                        label: 'Entry status',
                                        labelWidth: '50%',
                                        name: 'status',
                                        readOnly: true
                                    },
                                    {
                                        xtype: 'textfield',
                                        itemId: 'costTxt',
                                        label: 'Entry Cost',
                                        labelWidth: '50%',
                                        name: 'cost',
                                        readOnly: true
                                    }
                                ]
                            },
                            {
                                xtype: 'fieldset',
                                flex: 1,
                                height: 96,
                                itemId: 'generalInfoAuxFS',
                                items: [
                                    {
                                        xtype: 'button',
                                        docked: 'bottom',
                                        hidden: true,
                                        margin: '20 10 10 150',
                                        ui: 'confirm-round',
                                        width: 250,
                                        text: 'Process Payment'
                                    }
                                ]
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
                                itemId: 'exitBtn',
                                ui: 'confirm-round',
                                text: 'Exit'
                            },
                            {
                                xtype: 'button',
                                docked: 'left',
                                hidden: false,
                                itemId: 'backBoatBtn',
                                ui: 'decline-round',
                                text: '<< Back'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                itemId: 'newBoatCt',
                layout: 'fit',
                items: [
                    {
                        xtype: 'boatdetails11',
                        itemId: 'newBoatPnl'
                    }
                ]
            }
        ]
    },

    initialize: function() {
        var me = this,
            //boatStore = CreateStore("boat"),
            //boatEntity = GetEntityByName("boat"),

            raceSeriesStore = CreateStore("raceseries"),
            raceStore = CreateStore("race"),

            skipperStore = CreateStore("crewmember"),
            divisionStore = CreateStore("division"),
            raceDivisionsStore = CreateStore("division");


        this.callParent();

        /*boatStore.execConfig({
            params: {
                entityViewID: GetEntityView(boatEntity.entityid).entityviewid ,
                filters: ''
            }
        });


        skipperStore.execConfig({
            params: {
                entityViewID: GetEntityViewByName('Crew Members').entityviewid ,
                filters: ''
            }
        });
        */
        divisionStore.execConfig({
            params: {
                entityViewID: GetEntityViewByName('Divisions').entityviewid ,
                filters: ' ORDER BY name asc'
            }
        });

        me.down('#rRaceDivisionsList').setStore(raceDivisionsStore);
        me.down('#rDivisionsList').setStore(divisionStore);

        //me.down('#skipperCmb').setStore(skipperStore);

        Ext.Viewport.setMasked(false);
    }

});