/*
 * File: app/view/SWD.js
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

Ext.define('DynaMightMobile.view.SWD', {
    extend: 'Ext.form.Panel',

    requires: [
        'Ext.form.FieldSet',
        'Ext.dataview.List',
        'Ext.XTemplate',
        'Ext.Button',
        'Ext.field.Text',
        'Ext.field.File'
    ],

    config: {
        itemId: 'divisionDetails',
        scrollable: false,
        items: [
            {
                xtype: 'container',
                height: 300,
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
                        layout: 'fit',
                        title: 'Divisions',
                        items: [
                            {
                                xtype: 'list',
                                height: 250,
                                itemId: 'raceDivisionsList',
                                itemTpl: Ext.create('Ext.XTemplate', 
                                    '<div class="icon-wrapper">',
                                    '    <div class="icon" style={[this.getPath(values.path)]}>',
                                    '    </div>',
                                    '</div>',
                                    '<div class="item">',
                                    '    <div class="name">{name}',
                                    '    </div>',
                                    '    <div class="vicinity">',
                                    '    </div>',
                                    '    ',
                                    '</div>',
                                    {
                                        getPath: function(path) {
                                            //debugger;
                                            return "background-size:cover;background-image:url('" + RES_URL + "admin/uploaded_files/" + path + "')";
                                        }
                                    }
                                )
                            }
                        ]
                    },
                    {
                        xtype: 'container',
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
                                itemId: 'addDivisionBtn',
                                ui: 'action-round',
                                text: '< Add'
                            },
                            {
                                xtype: 'button',
                                itemId: 'allDivisionsBtn',
                                ui: 'action-round',
                                text: '<< All'
                            },
                            {
                                xtype: 'button',
                                itemId: 'delDivisionBtn',
                                ui: 'action-round',
                                text: 'Rem >'
                            },
                            {
                                xtype: 'button',
                                itemId: 'newDivisionBtn',
                                ui: 'action-round',
                                text: 'New'
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        flex: 1,
                        layout: 'fit',
                        title: 'Previously Used Divisions',
                        items: [
                            {
                                xtype: 'list',
                                height: 250,
                                itemId: 'divisionsList',
                                itemTpl: Ext.create('Ext.XTemplate', 
                                    '',
                                    '   ',
                                    '<div class="icon-wrapper">',
                                    '    <div class="icon" style={[this.getPath(values.path)]}>',
                                    '    </div>',
                                    '</div>',
                                    '<div class="item">',
                                    '    <div class="name">{name}',
                                    '    </div>',
                                    '    <div class="vicinity">',
                                    '    </div>',
                                    '    ',
                                    '</div>',
                                    {
                                        getPath: function(path) {
                                            return "background-size:cover;background-image:url('" + RES_URL + "admin/uploaded_files/" + path + "')";
                                        }
                                    }
                                ),
                                itemHeight: 24
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
                        xtype: 'fieldset',
                        width: 541,
                        title: 'Division Details',
                        items: [
                            {
                                xtype: 'textfield',
                                label: 'Name',
                                name: 'name'
                            },
                            {
                                xtype: 'textfield',
                                label: 'Group',
                                name: 'group'
                            },
                            {
                                xtype: 'filefield',
                                hidden: true,
                                label: 'Flag',
                                name: 'flag'
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        height: 30,
                        itemId: 'updateDivisionBtn',
                        margin: '110 0 0 20',
                        ui: 'action-round',
                        text: 'Update division'
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
                        itemId: 'nextBtn',
                        ui: 'decline-round',
                        text: 'Next >>'
                    },
                    {
                        xtype: 'button',
                        docked: 'left',
                        itemId: 'backBtn',
                        ui: 'decline-round',
                        text: '<< Back'
                    }
                ]
            }
        ]
    }

});