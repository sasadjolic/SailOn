/*
 * File: app/view/HandicapWizard.js
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

Ext.define('DynaMightMobile.view.HandicapWizard', {
    extend: 'Ext.form.Panel',

    requires: [
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.dataview.List',
        'Ext.XTemplate',
        'Ext.Button',
        'Ext.field.Spinner',
        'Ext.field.Search',
        'Ext.field.Select',
        'Ext.field.Checkbox',
        'Ext.grid.Grid',
        'Ext.grid.plugin.Editable',
        'Ext.grid.plugin.ViewOptions',
        'Ext.grid.plugin.MultiSelection',
        'Ext.grid.plugin.ColumnResizing',
        'Ext.grid.plugin.SummaryRow'
    ],

    config: {
        itemId: 'handicapWizardId',
        scrollable: false,
        layout: {
            type: 'card',
            animation: 'slide'
        },
        items: [
            {
                xtype: 'formpanel',
                itemId: 'hSeriesPnl',
                layout: 'vbox',
                scrollable: false,
                items: [
                    {
                        xtype: 'fieldset',
                        flex: 1,
                        margin: 5,
                        layout: 'fit',
                        title: 'Select a Series',
                        items: [
                            {
                                xtype: 'list',
                                itemId: 'seriesHList',
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
                                            return "background-size:50px;background-image:url(''" + RES_URL + "admin/uploaded_files/" + path + "')";
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
                        flex: 1,
                        itemId: 'racesCt',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'fieldset',
                                flex: 1,
                                margin: 5,
                                layout: 'fit',
                                title: 'Races',
                                items: [
                                    {
                                        xtype: 'list',
                                        itemId: 'racesHList',
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
                                layout: 'fit',
                                title: 'Race Entrants',
                                items: [
                                    {
                                        xtype: 'dataview',
                                        itemId: 'boatsHList',
                                        inline: true,
                                        itemTpl: [
                                            '{[GetTemplate(\'boat\', values)]}'
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                itemId: 'buttonsCt'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        flex: 1,
                        docked: 'top',
                        height: 40,
                        itemId: 'bottomCt',
                        margin: 10,
                        items: [
                            {
                                xtype: 'button',
                                docked: 'right',
                                itemId: 'adjustBtn',
                                ui: 'decline-round',
                                text: 'Adjust >>'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'formpanel',
                itemId: 'hReviewPnl',
                layout: 'vbox',
                items: [
                    {
                        xtype: 'container',
                        itemId: 'hTopCt',
                        margin: '',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'spinnerfield',
                                itemId: 'futureSpinner',
                                margin: 10,
                                label: 'Future Races',
                                labelWidth: '50%',
                                stepValue: 1,
                                defaultValue: 3
                            },
                            {
                                xtype: 'searchfield',
                                flex: 1,
                                itemId: 'searchSch',
                                margin: 10,
                                label: 'Search'
                            },
                            {
                                xtype: 'selectfield',
                                itemId: 'divisionCmb',
                                margin: 10,
                                label: 'Division',
                                autoSelect: false,
                                displayField: 'name',
                                valueField: 'divisionid'
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        flex: 1,
                        itemId: 'boatsFS',
                        layout: 'fit'
                    },
                    {
                        xtype: 'container',
                        itemId: 'hControlls',
                        margin: '0 10 20 10',
                        defaults: {
                            margin: '5'
                        },
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'container',
                                flex: 1,
                                itemId: 'applyToCt',
                                margin: '0 50 0 30',
                                layout: 'vbox',
                                items: [
                                    {
                                        xtype: 'selectfield',
                                        itemId: 'applyToCmb',
                                        width: 242,
                                        label: 'Apply To',
                                        labelWidth: '45%',
                                        displayField: 'name'
                                    }
                                ]
                            },
                            {
                                xtype: 'checkboxfield',
                                itemId: 'longChk',
                                width: 197,
                                label: 'Long'
                            },
                            {
                                xtype: 'button',
                                height: 35,
                                itemId: 'rollOverBtn',
                                ui: 'confirm-round',
                                text: 'Roll Over'
                            },
                            {
                                xtype: 'button',
                                disabled: true,
                                height: 35,
                                itemId: 'adjustTimeBtn',
                                ui: 'action',
                                text: 'Auto Adjust'
                            },
                            {
                                xtype: 'button',
                                disabled: true,
                                height: 35,
                                itemId: 'importBtn',
                                ui: 'action',
                                text: 'Import'
                            },
                            {
                                xtype: 'button',
                                height: 35,
                                itemId: 'hSaveBtn',
                                ui: 'confirm-round',
                                text: 'Save'
                            }
                        ]
                    }
                ]
            }
        ]
    },

    initialize: function() {
        var me = this,
            raceSeriesStore = CreateStore("raceseries"),
            raceStore = CreateStore("race"),
            boatStore = CreateStore("raceboat"),
            divisionStore = CreateStore("division"), applyStore;

        me.boatStore = boatStore;
        me.callParent();


        // boatStore.execConfig({
        //     params: {
        //         entityViewID: GetEntityViewByName('BR').entityviewid ,
        //         filters: ''
        //     }
        // });

        //boatStore.filter('raceid', '0');

        raceStore.execConfig({
            params: {
                entityViewID: GetEntityViewByName('Races').entityviewid ,
                filters: ''
            }
        });

        raceSeriesStore.execConfig({
            params: {
                entityViewID: GetEntityViewByName('Race Series').entityviewid ,
                filters: ' '
            }
        });

        divisionStore.execConfig({
            params: {
                entityViewID: GetEntityViewByName('Divisions').entityviewid ,
                filters: ''
            }
        });

        me.down('#seriesHList').setStore(raceSeriesStore);

        me.down('#racesHList').setStore(raceStore);

        me.down('#boatsHList').setStore(boatStore);

        me.down('#divisionCmb').setStore(divisionStore);

        applyStore = Ext.create('Ext.data.ArrayStore', {
            fields: ['name','value'],
            data: [{name: 'All', value: '0'}]
        });

        me.down('#applyToCmb').setStore(applyStore);
        //me.down('#boatHandicapList').setStore(boatStore);

        Ext.Viewport.setMasked(false);
    },

    showRaces: function(no) {
        var me = this,
            columns = [{
                text: 'Name',
                dataIndex: 'bname',
                width: 200,
                editable: false
            }],
            raceList = me.down('#racesHList'),
            i = 0,
            fields = ['boatid','bname','hullnumber','elapsed','divisionid','position','corected','handicap'],
            gridStore, idx, rec, record, bid;

        if(!me.down('#boatsFS'))
        {
            return;
        }

        raceList.getStore().filter([{
            filterFn: function(item) {
                return new Date(item.get("startdate")) >= new Date(me.race.get('startdate'));
            }}
        ]);
        //debugger;
        raceList.getStore().sort('startdate', 'ASC');
        raceList.getStore().each(function (item, index, length) {
            if(i < this.down('#futureSpinner').getValue()){
                //debugger;
                fields.push(item.get('raceid'));
                columns.push({
                    text: me.down('#longChk').getChecked() ? item.get('name') : i + 1,
                    dataIndex: item.get('raceid'),
                    width: 200,
                    editable: true,
                    renderer: function(val){
                        return val === undefined ? 'X' : val;
                    }
                });
                i++;
            }
        },this);
        //store
        me.gridStore = Ext.create('Ext.data.Store', {
            fields: fields

        });
        //fill store
        me.boatStore.each(function (item, index, length) {
            this.tmpItem = item;
            rec = this.tmpItem;
            bid = this.tmpItem.get('boatid');
            //debugger;
            idx = this.gridStore.find('boatid',bid);
            if(idx < 0){
                record = {boatid: bid,
                          bname: rec.get('bname'),
                          hullnumber: rec.get('hullnumber'),
                          elapsed: rec.get('elapsed'),
                          divisionid: rec.get('divisionid'),
                          position: rec.raw.position,
                          corected: rec.raw.corected,
                          handicap: rec.raw.handicap};
                record[rec.get('raceid')] = IsNull(rec.get('handicap'), '?');
                this.gridStore.insert(0, record);
            }
            else{
                record = this.gridStore.getAt(idx).data;
                record[rec.get('raceid')] = IsNull(rec.get('handicap'), '?');
            }
        },this);

        me.columns = columns;
        //return;
        me.down('#boatsFS').removeAll();
        me.down('#boatsFS').add({
            xtype: 'grid',
            header: false,//{ hidden: true },
            itemId: 'boatsGrid',
            requires: ['Ext.grid.Grid',
                       //'Ext.grid.HeaderGroup',
                       'Ext.grid.plugin.Editable',
                       'Ext.grid.plugin.ViewOptions',
                       'Ext.grid.plugin.MultiSelection',
                       'Ext.grid.plugin.ColumnResizing',
                       'Ext.grid.plugin.SummaryRow'
                      ],
            plugins: [{type: 'grideditable'}],
            store: me.gridStore,
            columns: columns
        });
    }

});