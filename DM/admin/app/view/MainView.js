/*
 * File: app/view/MainView.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('DynaMight.view.MainView', {
    extend: 'Ext.container.Container',

    requires: [
        'Ext.panel.Panel',
        'Ext.toolbar.Toolbar',
        'Ext.form.field.Display',
        'Ext.toolbar.Fill',
        'Ext.button.Button'
    ],

    itemId: 'mainView',
    layout: 'border',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    region: 'north',
                    height: 39,
                    itemId: 'headerPanel',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'toolbar',
                            flex: 1,
                            layout: {
                                type: 'hbox',
                                pack: 'center'
                            },
                            items: [
                                {
                                    xtype: 'displayfield',
                                    cls: 'title',
                                    itemId: 'title',
                                    margin: '5 0 0 30',
                                    fieldLabel: 'Sailing app',
                                    labelSeparator: ' '
                                },
                                {
                                    xtype: 'tbfill',
                                    itemId: 'fill'
                                },
                                {
                                    xtype: 'displayfield',
                                    itemId: 'userInfo'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'logoutBtn',
                                    width: 150,
                                    iconCls: 'logoutIcon',
                                    text: 'Logout'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    region: 'west',
                    split: true,
                    itemId: 'menuPanel',
                    width: 250,
                    layout: 'accordion',
                    collapseDirection: 'left',
                    header: false,
                    title: 'Menu'
                },
                {
                    xtype: 'container',
                    flex: 1,
                    region: 'center',
                    itemId: 'contentPanel',
                    layout: 'fit'
                }
            ]
        });

        me.callParent(arguments);
    }

});