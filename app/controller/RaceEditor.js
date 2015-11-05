/*
 * File: app/controller/RaceEditor.js
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

Ext.define('DynaMightMobile.controller.RaceEditor', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            resultsEditor: 'formpanel#receResultEdit',
            resultBoatsView: 'dataview#resultBoatsView',
            resEditCt: 'container#resEditCt',
            editResDivisionCmb: 'selectfield#editResDivisionCmb',
            editResBoatSearch: 'searchfield#editResBoatSearch',
            racesEditorList: 'list#racesEditorList',
            editorFrm: 'formpanel#editorFrm',
            editBoatStatusCmb: 'selectfield#editBoatStatusCmb',
            resEditDatePicker: 'datepickerfield#resEditDatePicker',
            resEditCt2: 'container#resEditCt2',
            editAddBoatsList: 'dataview#editAddBoatsList'
        },

        control: {
            "button#resEditorApplyBtn": {
                tap: 'onSaveButtonTap'
            },
            "dataview#resultBoatsView": {
                itemtap: 'onBoatItemTap'
            },
            "selectfield#editResDivisionCmb": {
                change: 'onDivisionChange'
            },
            "searchfield#editResBoatSearch": {
                keyup: 'onSearchfieldKeyup'
            },
            "button#resEditorApplyBtn1": {
                tap: 'onApplyButtonTap'
            },
            "button#editRaceBtn": {
                tap: 'onEditRaceButtonTap'
            },
            "list#seriesEditorList": {
                select: 'onSeriesListSelect'
            },
            "button#resEditorAddBtn": {
                tap: 'onResEditAddBtnTap'
            },
            "button#CancelSelectBtn": {
                tap: 'onCancelSelectionTap'
            },
            "button#confirmSelectedBoats": {
                tap: 'onCompleteSelection'
            }
        }
    },

    onSaveButtonTap: function(button, e, eOpts) {
        this.save();
    },

    onBoatItemTap: function(dataview, index, target, record, e, eOpts) {
        this.getResultsEditor().down('#editBoatTime').setValue(new Date(record.get('endtime')));
        this.getResultsEditor().down('#handicapTxt').setValue(record.get('handicap'));
        this.getResultsEditor().down('#resEditDatePicker').setValue(new Date(record.get('endtime')));
        this.getResultsEditor().down('#editBoatStatusCmb').setValue(record.get('boatstatusid'));
    },

    onDivisionChange: function(selectfield, newValue, oldValue, eOpts) {
        this.filterBoats();
    },

    onSearchfieldKeyup: function(textfield, e, eOpts) {
        this.filterBoats();

    },

    onApplyButtonTap: function(button, e, eOpts) {
        this.save();
    },

    onEditRaceButtonTap: function(button, e, eOpts) {
        var me = this, vals,
            wizard = me.getResultsEditor(),
            selectedIndex = wizard.items.indexOf(wizard._activeItem),
            raceid = me.getRacesEditorList().selected.get(0).get('raceid'),
            bStore = CreateStore("raceboat"),
            boatStore = CreateStore("raceboat");

        me.raceid = raceid;

        bStore.sort('endtime', 'DESC');

        bStore.execConfig({
            params: {
                entityViewID: GetEntityViewByName('RR_Edit').entityviewid ,
                filters: " WHERE raceid = '" + raceid + "'  ORDER BY dname,  score"
            }
        });

        boatStore.execConfig({
            params: {
                entityViewID: GetEntityViewByName('BR').entityviewid ,
                filters: " WHERE raceid = '" + raceid + "'"
            }
        });

        me.getResultBoatsView().setStore(bStore);

        me.getEditAddBoatsList().setStore(boatStore);

        wizard.setActiveItem(selectedIndex + 1);
    },

    onSeriesListSelect: function(dataview, record, eOpts) {
        this.getRacesEditorList().getStore().clearFilter(true);
        this.getRacesEditorList().getStore().filter('raceseriesid', record.get('raceseriesid'));
    },

    onResEditAddBtnTap: function(button, e, eOpts) {
        var me = this, vals, items, rec,
            wizard = me.getResultsEditor(),
            selectedIndex = wizard.items.indexOf(wizard._activeItem);


        wizard.setActiveItem(selectedIndex  + 1);
    },

    onCancelSelectionTap: function(button, e, eOpts) {
        var me = this, vals, items, rec,
            wizard = me.getResultsEditor(),
            selectedIndex = wizard.items.indexOf(wizard._activeItem);


        wizard.setActiveItem(selectedIndex  - 1);
    },

    onCompleteSelection: function(button, e, eOpts) {
        var me = this,
             wizard = me.getResultsEditor(),
            selectedIndex = wizard.items.indexOf(wizard._activeItem),
            list = me.getResultBoatsView(),
            currentList = me.getEditAddBoatsList(),
            selected = currentList.getSelection(),
            bStore = list.getStore(),
            rec = selected[0];

        bStore.add(rec);




        wizard.setActiveItem(selectedIndex  - 1);

        AJAXCommand({
                params: {
                    raceid : rec.get('raceid'),
                    raceboatid: rec.get('raceboatid')
                },
                method: 'AddResult',
                callback: function(status, message, obj, scope) {
                    if (status) {
                        list.getStore().load();
                    }
                    else
                    {
                        Ext.Msg.show({
                            title: 'Error saving Series',//T('errLogIn'),
                            msg: 'Error.',//T(''),
                            buttons: Ext.Msg.OK,
                            icon: Ext.Msg.ERROR,
                            modal: true
                        });
                    }
                }
            });

    },

    filterBoats: function() {
        var me = this,
            filters = [],
            division = me.getEditResDivisionCmb().getValue(),
            searchField = me.getEditResBoatSearch(),
            storeB = me.getResultBoatsView().getStore();

        if(!storeB) return;

        storeB.clearFilter(true);
        filters =[

            {filterFn: BoatFilter, scope: searchField}
        ];

        if(division){
            filters.push({property: 'divisionid', value: division});
        }

        storeB.filter(filters);

        if(storeB.getCount() > 0){
            me.getResultBoatsView().select(storeB.getAt(0));
        }


    },

    save: function() {
        var me = this,
            list = me.getResultBoatsView(),
            selected = list.getSelection(),
            time = me.getResEditCt().down('#editBoatTime'),
            handicap = me.getResEditCt2().down('#handicapTxt').getValue(),
            status = me.getEditBoatStatusCmb().getValue(),
            date = me.getResEditCt2().down('#resEditDatePicker'),
            datetime;

        if (selected.length > 0) {
            datetime = new Date(date.getValue().getFullYear(), date.getValue().getMonth(),
                                date.getValue().getDate(), time.getValue().getHours(),
                                time.getValue().getMinutes(), time.getValue().getSeconds());

            rec = selected[0];
            rec.set('endtime', Ext.Date.format(datetime, 'Y-m-d H:i:s'));
            rec.set('boatstatusid', status);

            //debugger;

            AJAXCommand({
                params: {
                    raceresultid: rec.get('raceresultid'),
                    endtime: rec.get('endtime'),
                    divisionid : rec.get('divisionid'),
                    raceid : rec.get('raceid'),
                    raceboatid: rec.get('raceboatid'),
                    handicap: handicap,
                    status: status
                },
                method: 'SaveResult',
                callback: function(status, message, obj, scope) {
                    if (status) {
                        list.getStore().load();
                    }
                    else
                    {
                        Ext.Msg.show({
                            title: 'Error saving Series',//T('errLogIn'),
                            msg: 'Error.',//T(''),
                            buttons: Ext.Msg.OK,
                            icon: Ext.Msg.ERROR,
                            modal: true
                        });
                    }
                }
            });
        }
        else{
            AJAXCommand({
                params: {
                    raceid : me.raceid
                },
                method: 'CalculateResults',
                callback: function(status, message, obj, scope) {
                    if (status) {
                        list.getStore().load();
                    }
                    else
                    {
                        Ext.Msg.show({
                            title: 'Error saving Series',//T('errLogIn'),
                            msg: 'Error.',//T(''),
                            buttons: Ext.Msg.OK,
                            icon: Ext.Msg.ERROR,
                            modal: true
                        });
                    }
                }
            });
        }

    }

});