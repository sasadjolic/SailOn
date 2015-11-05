/*
 * File: app/controller/HandicapWizard.js
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

Ext.define('DynaMightMobile.controller.HandicapWizard', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            handicapWizard: 'formpanel#handicapWizardId',
            boatsHList: 'dataview#boatsHList',
            racesHList: 'list#racesHList',
            boatsFS: 'fieldset#boatsFS',
            seriesHList: 'list#seriesHList',
            homePanel: 'panel#homePanel',
            divisionCmb: 'selectfield#divisionCmb',
            futureSpinner: 'spinnerfield#futureSpinner',
            searchSch: 'searchfield#searchSch'
        },

        control: {
            "button#adjustBtn": {
                tap: 'onAdjustButtonTap'
            },
            "list#seriesHList": {
                select: 'onSeriesListSelect'
            },
            "list#racesHList": {
                select: 'onRacesListSelect'
            },
            "spinnerfield#futureSpinner": {
                change: 'onRaceNoSpinnerChange'
            },
            "button#hSaveBtn": {
                tap: 'onHSaveButtonTap'
            },
            "searchfield#searchSch": {
                keyup: 'onSearchfieldKeyup'
            },
            "selectfield#divisionCmb": {
                change: 'onDivisionSelectfieldChange'
            },
            "checkboxfield#longChk": {
                change: 'onShortLongCheckboxfieldChange'
            },
            "button#rollOverBtn": {
                tap: 'onRollOverButtonTap'
            }
        }
    },

    onAdjustButtonTap: function(button, e, eOpts) {
        var me = this;

        if(me.getSeriesHList().selected.length == 0 || me.getRacesHList().selected.length == 0){
            Ext.Msg.show({
                title: 'Series selection',//T('errLogIn'),
                message: 'You must select a series and a race to adjust!',//T(''),
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.ERROR,
                modal: true
            });
            return;
        }

        me.getHandicapWizard().showRaces(3, true);

        me.jumpCards(1);
    },

    onSeriesListSelect: function(dataview, record, eOpts) {
        this.getRacesHList().getStore().clearFilter(true);
        this.getRacesHList().getStore().filter('raceseriesid', record.get('raceseriesid'));

        // this.getBoatsHList().getStore().clearFilter(true);
        // this.getBoatsHList().getStore().filter('raceseriesid', record.get('raceseriesid'));
    },

    onRacesListSelect: function(dataview, record, eOpts) {

        var store = this.getHandicapWizard().boatStore;

        store.execConfig({
            params: {
                entityViewID: GetEntityViewByName('BRHandicap').entityviewid ,
                filters: " where raceid = '" + record.get('raceid') + "' order by signondate desc"
            }
        });
        //store.filter(raceid, record.get('raceid'));
        this.getBoatsHList().setStore(store);
        this.getHandicapWizard().race = record;
    },

    onRaceNoSpinnerChange: function(textfield, newValue, oldValue, eOpts) {
        var me = this;

        me.getHandicapWizard().showRaces(newValue);
    },

    onHSaveButtonTap: function(button, e, eOpts) {
        var me = this,
            raceboats = me.getHandicapWizard().gridStore.getFilteredRecords();

        AJAXCommand({
            params: {
                raceboats: raceboats
            },
            method: 'SaveHandicap',
            callback: function(status, message, obj, scope) {
                if (status) {

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

        this.getHomePanel().removeAll();
    },

    onSearchfieldKeyup: function(textfield, e, eOpts) {
        this.applyFilters();

    },

    onDivisionSelectfieldChange: function(selectfield, newValue, oldValue, eOpts) {
        this.applyFilters();
    },

    onShortLongCheckboxfieldChange: function(checkboxfield, newValue, oldValue, eOpts) {
        var me = this;

        //debugger;

        me.getHandicapWizard().showRaces(me.getFutureSpinner().getValue());
    },

    onRollOverButtonTap: function(button, e, eOpts) {
        var me = this, i, record, j, column,
            columns = me.getHandicapWizard().columns,
            recs = me.getHandicapWizard().gridStore.getData().items;

        if(recs.length < 1 || columns.length < 3){
            return;
        }

        for (i = 0; i < recs.length; i++){
            record = recs[i];
            for (j = 2; j < columns.length; j++){
                column = columns[j];
                //debugger;
                if(record.get('endtime') !== null){
                    var a = new Date(record.get('elapsed')),
                        elapsedt = a.getHours()*3600+a.getMinutes()*60+a.getSeconds(),
                        adjusted = elapsedt * record.get('handicap'),
                        newTime,
                        newH;
                    if(record.data.position !== 0){
                            newTime = elapsedt + record.data.position*60;
                            newH = adjusted/newTime;
                            record.set(column.dataIndex, newH.toFixed(3));
                        }

                    else
                        record.set(column.dataIndex, record.get(columns[1].dataIndex));
                }
            }
        }

        //debugger;
    },

    jumpCards: function(no, cardNo) {
        var me = this, vals,
            wizard = me.getHandicapWizard(),
            selectedIndex = wizard.items.indexOf(wizard._activeItem);

        no = no ? (selectedIndex + no) : cardNo;

        wizard.setActiveItem(no);
    },

    applyFilters: function() {
        var me = this,
            grid = this.getHandicapWizard().down('#boatsGrid'),
            txt = me.getSearchSch(),
            filters = txt ? [{filterFn: BoatFilter, scope: txt}] : [],
            division = me.getDivisionCmb().getValue();

        if(division){
            filters.push({property: "divisionid", value: division});
        }

        grid.getStore().clearFilter(true);
        grid.getStore().filter(filters);
        //debugger;
    }

});