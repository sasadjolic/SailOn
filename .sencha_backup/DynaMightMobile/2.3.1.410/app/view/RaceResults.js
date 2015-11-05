/*
 * File: app/view/RaceResults.js
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

Ext.define('DynaMightMobile.view.RaceResults', {
    extend: 'Ext.form.Panel',

    requires: [
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.dataview.List',
        'Ext.XTemplate',
        'Ext.field.Select',
        'Ext.Button',
        'Ext.tab.Panel',
        'Ext.field.Search',
        'Ext.grid.plugin.Editable',
        'Ext.grid.plugin.MultiSelection',
        'Ext.grid.plugin.ViewOptions',
        'Ext.grid.plugin.SummaryRow',
        'Ext.grid.plugin.ColumnResizing'
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
                layout: 'hbox',
                scrollable: false,
                items: [
                    {
                        xtype: 'fieldset',
                        flex: 1,
                        margin: 5,
                        layout: 'vbox',
                        title: 'Current Series',
                        items: [
                            {
                                xtype: 'list',
                                flex: 1,
                                itemId: 'resCurrentSeriesList',
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
                                    '            <div class="vicinity">{entrycost}</div>',
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
                        xtype: 'fieldset',
                        flex: 1,
                        layout: 'vbox',
                        title: 'Past Series',
                        items: [
                            {
                                xtype: 'selectfield',
                                itemId: 'yearCmb',
                                label: 'Year',
                                displayField: 'name',
                                valueField: 'id'
                            },
                            {
                                xtype: 'list',
                                flex: 1,
                                itemId: 'resPastSeriesList',
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
                        flex: 1,
                        docked: 'bottom',
                        height: 40,
                        itemId: 'bottomCt',
                        margin: 10,
                        items: [
                            {
                                xtype: 'button',
                                disabled: true,
                                docked: 'right',
                                itemId: 'resNextBtn',
                                ui: 'decline-round',
                                text: 'Next >>'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                itemId: 'hReviewPnl',
                layout: 'vbox',
                items: [
                    {
                        xtype: 'tabpanel',
                        flex: 1,
                        id: 'resTabPnl',
                        items: [
                            {
                                xtype: 'container',
                                title: 'Series View',
                                itemId: 'resSeriesTab',
                                layout: 'fit'
                            },
                            {
                                xtype: 'container',
                                title: 'Race View',
                                itemId: 'resRaceTab',
                                layout: 'fit'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        docked: 'top',
                        itemId: 'hControlls',
                        margin: '0 10 20 10',
                        defaults: {
                            margin: '5'
                        },
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'button',
                                docked: 'right',
                                height: 35,
                                itemId: 'resDoneBtn',
                                ui: 'confirm-round',
                                text: 'Back'
                            },
                            {
                                xtype: 'selectfield',
                                itemId: 'resDivisionCmb',
                                label: 'Division',
                                displayField: 'name',
                                valueField: 'divisionid'
                            },
                            {
                                xtype: 'searchfield',
                                itemId: 'resBoatSearch',
                                width: 231,
                                label: 'Boat'
                            },
                            {
                                xtype: 'selectfield',
                                itemId: 'resRaceCmb',
                                label: 'Race',
                                autoSelect: false,
                                displayField: 'startdate',
                                valueField: 'raceid'
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
            boatStore = CreateStore("raceboat"),
            raceStore = CreateStore("race"),
            divisionStore = CreateStore("division"), yearStore;

        me.boatStore = boatStore;
        me.callParent();

        boatStore.execConfig({
            params: {
                entityViewID: GetEntityViewByName('RR').entityviewid ,
                filters: ''
            }
        });
        me.boatStore = boatStore;


        //boatStore.filter('raceid', '0');

        raceStore.execConfig({
            params: {
                entityViewID: GetEntityViewByName('Races').entityviewid ,
                filters: ' WHERE startdate < now() order by startdate desc'
            }
        });
        me.raceStore = raceStore;

        raceSeriesStore.execConfig({
            params: {
                entityViewID: GetEntityViewByName('Race Series').entityviewid ,
                filters: ''
            }
        });

        divisionStore.execConfig({
            params: {
                entityViewID: GetEntityViewByName('AllDivisions').entityviewid ,
                filters: ''
            }
        });

        me.down('#resCurrentSeriesList').setStore(raceSeriesStore);

        yearStore = Ext.create('Ext.data.Store', {
            fields: ['name','value'],
            data: [{name: '2015', value: '0'}]
        });

        me.down('#yearCmb').setStore(yearStore);
        me.down('#resDivisionCmb').setStore(divisionStore);
        me.down('#resRaceCmb').setStore(raceStore);

        Ext.Viewport.setMasked(false);
    },

    showSeriesView: function(no) {
        var me = this,
            columns = [{
                text: 'Division',
                dataIndex: 'dname',
                width: 200,
                editable: false
            }, {
                text: 'Name',
                dataIndex: 'bname',
                width: 200,
                editable: false
            },{
                text: 'Total',
                dataIndex: 'total',
                width: 100,
                editable: false
            }],
            raceStore = me.raceStore,
            i = 0,
            fields = ['dname', 'boatid','bname','hullnumber', 'divisionid', 'total', 'score'],
            gridStore, idx, rec, record, bid;
        if(!me.down('#boatsFS'))
        {
            //return;
        }
        //debugger;

        /*raceStore.filter([{
            filterFn: function(item) {
                return new Date(item.get("startdate")) > new Date();
            }}
        ]);
        */


        raceStore.sort('startdate', 'DESC');
        raceStore.each(function (item, index, length) {
                fields.push(item.get('raceid'));
                //debugger;
                columns.push({
                    text: /*Ext.util.Format.date(item.get('startdate'), APP.Configurations.DateFormat)*/ length-i ,
                    dataIndex: item.get('raceid'),
                    raceName: item.get('name'),
                    seriesName: item.get('raceseriesname'),
                    startDate: item.get('startdate'),
                    width: 120,
                    editable: true,
                    sortable: true,
                    renderer: function(val){
                        return val === undefined ? '' : val;
                    }
                });
                i++;
            //}
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

            idx = this.gridStore.find('boatid',bid);
            if(idx < 0){
                record = {
                    dname: rec.raw.dname,
                    boatid: bid,
                    bname: rec.get('hullnumber') + ' - ' + rec.get('bname'),
                    hullnumber: rec.get('hullnumber'),
                    divisionid: rec.get('divisionid'),
                    total: rec.get('score')
                };
                record[rec.get('raceid')] = IsNull(rec.get('elapsed'), '');

                this.gridStore.insert(0, record);
            }
            else{
                record = this.gridStore.getAt(idx).data;
                record[rec.get('raceid')] = IsNull(rec.get('elapsed'), '');
                record.total = parseInt(record.total) + parseInt(rec.get('score'));
            }


        },this);
        this.gridStore.sort([{property: 'dname',direction: 'ASC'},{property : 'bname',direction: 'ASC'},
            {
                property : 'score',
                direction: 'ASC'
            }
        ]);
        me.columns = columns;
        //return;
        me.down('#resSeriesTab').removeAll();
        me.down('#resSeriesTab').add({
            xtype: 'grid',
            scrollable: true,
            header: false,//{ hidden: true },
            itemId: 'resSeriesGrid',
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
            columns: columns,
            listeners: {
                columnsort: function(grid, column, direction, e, eOpts){
                    //debugger;
                    //return false;
                    if(column.raceName){
                    Ext.Msg.alert(column.seriesName, column.raceName + '<br>Date: ' +column.startDate, Ext.emptyFn);
                    }
                    else return false;
                }
            }
        });
    },

    showRaceView: function(no) {
        var me = this,
            columns = [{
                text: 'Division',
                dataIndex: 'dname',
                width: 150,
                editable: false
            },{
                text: 'Name',
                dataIndex: 'bname',
                width: 200,
                editable: false
            },{
                text: 'Score',
                dataIndex: 'scoredisplay',
                width: 100,
                editable: false
            },{
                text: 'Handicap',
                dataIndex: 'handicap',
                width: 100,
                editable: false
            },{
                text: 'Corected T',
                dataIndex: 'corected',
                width: 110,
                editable: false
            },{
                text: 'Elapsed T',
                dataIndex: 'elapsed',
                width: 110,
                editable: false
            },{
                text: 'Finish T',
                dataIndex: 'finish',
                width: 200,
                editable: false
            }],
            raceStore = me.raceStore,
            i = 0,
            fields = ['raceid', 'boatid','rname', 'bname','hullnumber','scoredisplay', {name: 'score', type: 'int'},'dname', 'startdate', 'divisionid', 'handicap', 'corected', 'elapsed', 'finish'],
            gridStore, idx, rec, record, bid, tDate;

        if(!me.down('#boatsFS'))
        {
            //return;
        }
        //debugger;

        //store
        me.gridStore = Ext.create('Ext.data.Store', {
            fields: fields

        });
        //fill store
        me.boatStore.each(function (item, index, length) {
            this.tmpItem = item;
            rec = this.tmpItem;
            bid = this.tmpItem.get('boatid');
            tDate = rec.get('endtime');
            tDate = tDate ? Ext.util.Format.date(tDate.split(' ')[0], APP.Configurations.DateFormat) + ' ' + tDate.split(' ')[1] : '';
            //debugger;

            record = {
                boatid: bid,
                startdate: Ext.util.Format.date(rec.get('startdate'), APP.Configurations.DateFormat),
                rname: rec.get('rname'),
                bname: rec.get('hullnumber') + ' - ' + rec.get('bname'),
                hullnumber: rec.get('hullnumber'),
                divisionid: rec.get('divisionid'),
                finish: tDate,
                corected: rec.get('corected'),
                dname: rec.raw.dname,
                elapsed: rec.get('elapsed'),
                handicap: rec.get('handicap'),
                score: rec.raw.score,
                scoredisplay: rec.raw.scoredisplay,
                raceid: rec.get('raceid')
            };

            this.gridStore.insert(0, record);
        },this);
        this.gridStore.sort([{property: 'dname',direction: 'ASC'},{property : 'score',direction: 'ASC'}
        ]);
        me.columns = columns;
        //return;
        me.down('#resRaceTab').removeAll();
        me.down('#resRaceTab').add({
            xtype: 'grid',
            scrollable: true,
            header: false,//{ hidden: true },
            itemId: 'resRaceGrid',
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