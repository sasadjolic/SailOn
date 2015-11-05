/*
 * File: app/view/BoatDetails1.js
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

Ext.define('DynaMightMobile.view.BoatDetails1', {
    extend: 'Ext.form.Panel',
    alias: 'widget.boatdetails11',

    requires: [
        'Ext.field.Hidden',
        'Ext.form.FieldSet',
        'Ext.field.Password',
        'Ext.field.DatePicker',
        'Ext.picker.Date',
        'Ext.Button'
    ],

    config: {
        height: '100%',
        itemId: 'newBoatDetails',
        layout: 'vbox',
        scrollable: true,
        items: [
            {
                xtype: 'hiddenfield',
                itemId: 'boatid',
                name: 'boatid'
            },
            {
                xtype: 'fieldset',
                itemId: 'generalInfoCt',
                margin: 5,
                title: 'General Information',
                layout: {
                    type: 'hbox',
                    align: 'start'
                },
                items: [
                    {
                        xtype: 'fieldset',
                        itemId: 'generalInfoFS',
                        width: 498,
                        items: [
                            {
                                xtype: 'textfield',
                                label: 'Sail/Hull Number',
                                name: 'hullnumber',
                                required: true
                            },
                            {
                                xtype: 'textfield',
                                label: 'Boat Name',
                                name: 'name',
                                required: true
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        itemId: 'generalInfoAuxFS',
                        width: 468,
                        items: [
                            {
                                xtype: 'passwordfield',
                                label: 'Password',
                                name: 'password',
                                required: true
                            },
                            {
                                xtype: 'textfield',
                                label: 'Home Club',
                                name: 'homeclub'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'fieldset',
                itemId: 'ownerInfoCt',
                margin: 5,
                title: 'Owner Information',
                layout: {
                    type: 'hbox',
                    align: 'start'
                },
                items: [
                    {
                        xtype: 'fieldset',
                        itemId: 'ownerInfoFS',
                        width: 498,
                        items: [
                            {
                                xtype: 'textfield',
                                label: 'Owner ID',
                                name: 'ownerid'
                            },
                            {
                                xtype: 'textfield',
                                label: 'Name',
                                name: 'firstname',
                                required: true
                            },
                            {
                                xtype: 'textfield',
                                label: 'Surname',
                                name: 'surname',
                                required: true
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        itemId: 'generalInfoAuxFS',
                        width: 468,
                        items: [
                            {
                                xtype: 'textfield',
                                label: 'Email',
                                name: 'email',
                                required: true
                            },
                            {
                                xtype: 'textfield',
                                label: 'Mobile',
                                name: 'mobile',
                                required: true
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'fieldset',
                itemId: 'boatInfoCt',
                margin: 5,
                title: 'Boat Details',
                layout: {
                    type: 'hbox',
                    align: 'start'
                },
                items: [
                    {
                        xtype: 'fieldset',
                        flex: 1,
                        itemId: 'generalInfoFS',
                        width: 350,
                        items: [
                            {
                                xtype: 'textfield',
                                label: 'Class',
                                name: 'beam',
                                required: true
                            },
                            {
                                xtype: 'textfield',
                                label: 'Year Built',
                                name: 'yearbuilt'
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        flex: 1,
                        itemId: 'generalInfoAuxFS',
                        width: 400,
                        items: [
                            {
                                xtype: 'textfield',
                                label: 'Draft',
                                name: 'draft'
                            },
                            {
                                xtype: 'textfield',
                                label: 'Water Length',
                                name: 'waterlength'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'fieldset',
                itemId: 'ownerInfoCt1',
                margin: 5,
                title: 'Insurance',
                layout: {
                    type: 'hbox',
                    align: 'start'
                },
                items: [
                    {
                        xtype: 'fieldset',
                        itemId: 'ownerInfoFS',
                        width: 498,
                        items: [
                            {
                                xtype: 'textfield',
                                label: 'Insurer',
                                name: 'insurer',
                                required: true
                            },
                            {
                                xtype: 'datepickerfield',
                                label: 'Cover Start',
                                name: 'coverstart',
                                placeHolder: 'dd/mm/yyyy'
                            },
                            {
                                xtype: 'datepickerfield',
                                label: 'Cover End',
                                name: 'coverend',
                                placeHolder: 'dd/mm/yyyy'
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        itemId: 'generalInfoAuxFS',
                        width: 468,
                        items: [
                            {
                                xtype: 'textfield',
                                label: 'Policy #',
                                name: 'policy'
                            },
                            {
                                xtype: 'textfield',
                                label: 'Certificate',
                                name: 'certificate'
                            },
                            {
                                xtype: 'button',
                                disabled: true,
                                margin: 5,
                                ui: 'action-round',
                                width: 200,
                                text: 'Upload'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                layout: 'hbox',
                items: [
                    {
                        xtype: 'button',
                        docked: 'right',
                        itemId: 'saveNewBoatBtn',
                        margin: 20,
                        ui: 'confirm-round',
                        width: 250,
                        text: 'Save'
                    },
                    {
                        xtype: 'button',
                        itemId: 'cancelNewBoatBtn',
                        margin: 20,
                        ui: 'decline-round',
                        width: 250,
                        text: 'Cancel'
                    }
                ]
            }
        ]
    }

});