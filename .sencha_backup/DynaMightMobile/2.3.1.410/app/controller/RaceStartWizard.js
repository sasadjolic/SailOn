/*
 * File: app/controller/RaceStartWizard.js
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

Ext.define('DynaMightMobile.controller.RaceStartWizard', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            racesList: 'list#racesList',
            entrantsList: 'dataview#entrantsList',
            raceStartWizard: 'formpanel#seriesWizardId',
            sequenceId: 'spinnerfield#sequenceId',
            raceBoatsList: 'dataview#raceBoatsList',
            divisionEntrantsList: 'list#divisionEntrantsList',
            startOrderCt: 'fieldset#startOrderCt',
            startRacesList: 'list#startRacesList',
            homePanel: 'panel#homePanel',
            timerTxt: 'textfield#timerTxt',
            startStopBtn: 'button#startStopBtn',
            raceDivisionsReviewList: 'list#raceDivisionsReviewList',
            nextStartRacesBtn: 'button#nextStartRacesBtn',
            startOrderCt1: 'fieldset#startOrderCt1',
            startReviewApplyBtn: 'button#startReviewApplyBtn',
            divisionEntrantsId: 'fieldset#divisionEntrantsId'
        },

        control: {
            "selectfield#divisionTime": {
                change: 'onDivisionTimeChange'
            },
            "list#startRacesList": {
                select: 'onStartRacesListSelect'
            },
            "button#nextStartRacesBtn": {
                tap: 'onNextStartButtonTap'
            },
            "button#startStopBtn": {
                tap: 'onStartStopButtonTap'
            },
            "button#nextStartPanelBtn": {
                tap: 'onNextStartPanelButtonTap'
            },
            "button#exitStartRaceBtn": {
                tap: 'onExitButtonTap'
            },
            "selectfield#divisionSelect": {
                change: 'onSelectfieldChange'
            },
            "button#editDivisionBtn": {
                tap: 'onEditDivisionButtonTap'
            },
            "button#nextStartOrderBtn": {
                tap: 'onNextOrderButtonTap'
            },
            "button#startBackBtn": {
                tap: 'onBackButtonTap'
            },
            "button#startReviewBackBtn": {
                tap: 'onReviewBackButtonTap'
            },
            "list#raceDivisionsReviewList": {
                select: 'onRaceDivisionReviewListSelect'
            },
            "button#startReviewApplyBtn": {
                tap: 'onApplyReviewButtonTap'
            },
            "button#refreshStartOrderBtn": {
                tap: 'onRefreshStartOrderTap'
            },
            "selectfield#startDivisionCmb": {
                change: 'onDivisionSelectfieldChange'
            }
        }
    },

    onDivisionTimeChange: function(target) {
        this.getStartReviewApplyBtn().setDisabled(false);
    },

    onStartRacesListSelect: function(dataview, record, eOpts) {
        //alert('a');
        var me = this,
            brStore = me.getEntrantsList().getStore();

        //debugger;

        brStore.clearFilter(true);
        brStore.filter('raceid', record.get('raceid'));
        me.record = record;

        me.getNextStartRacesBtn().enable();
        //alert('b');

        me.getRaceStartWizard().down('#startDivisionCmb').getStore().execConfig({
            params: {
                entityViewID: GetEntityViewByName('DivisionsByRace').entityviewid ,
                filters: "where raceid is null or raceid = '"+record.get('raceid')+"' order by name asc"
            }
        });
    },

    onNextStartButtonTap: function(button, e, eOpts) {
        var me = this,
            wizard = me.getRaceStartWizard(),
            selectedIndex = wizard.items.indexOf(wizard._activeItem);

        Ext.Viewport.setMasked(true);

        APP.WarningUnsavedData = true;

        new Ext.util.DelayedTask(function(){
            wizard.setActiveItem(selectedIndex  + 1);

            wizard.seriesDivisionsStore.filter('raceid', me.record.get('raceid'));

            me.initStarts();
        }).delay(250);



    },

    onStartStopButtonTap: function(button, e, eOpts) {
        var me = this,
            min = me.min !== undefined ? me.min : 0,//me.getSequenceId().getValue(),
            sec = me.sec !== undefined ? me.sec : 0,

            min = me.getSequenceId().getValue(),
            //sec = 0,

            stopped = me.stopped !== undefined ? !me.stopped : false;
        //debugger;

        me.stopped = stopped;
        me.getStartStopBtn().disable();

        //debugger;

        if(!countdown){
            function countdown(){
                //debugger;
                //var  min = me.min || 1,
                //sec = me.sec || 10,
                //stopped = me.stopped || false;

                me.getStartStopBtn().enable();

                if (sec < 1 && min > 0)
                {
                    min--;
                    sec = 59;
                }


                if(min == 0 && sec == 0 && me.sequenceNo > 1){
                    me.sequenceNo--;
                    //sec = 10;
                    //debugger;
                    me.getStartOrderCt1().getAt(me.sequences - me.sequenceNo).setLine(me.sequences - me.sequenceNo, Ext.Date.format(new Date(), 'Y-m-d H:i:s'));
                    min = me.getSequenceId().getValue();
                }

                me.min = min;
                me.sec = sec;

                if ((min == 0 && sec == 0) || me.stopped == true)
                {
                    if(min == 0 && sec == 0){
                        me.getStartOrderCt1().getAt(me.sequences).setLine(me.sequences - me.sequenceNo, Ext.Date.format(new Date(), 'Y-m-d H:i:s'));
                    }
                    return;
                }

                //Used some plain JS here, replace it with your Ext.getCmp
                me.getTimerTxt().setValue('START ' + (me.sequences - me.sequenceNo + 1) + '  ' + min + ':' + (sec.length == 1 ? '0' : '') + sec);

                sec--;

                setTimeout(countdown, 1000);


            }
        }

        if(stopped == false){
            countdown(me);
        }




    },

    onNextStartPanelButtonTap: function(button, e, eOpts) {
        var me = this, vals,
            wizard = me.getRaceStartWizard(),
            selectedIndex = wizard.items.indexOf(wizard._activeItem),
            list = me.getRaceStartWizard().down('#raceDivisionsReviewList'),
            allStart = true,
            store = list.getStore(),
            lStore = me.getRaceDivisionsReviewList().getStore();

        for(var i = 0; i < store.getCount(); i++){
            if(!store.data.items[i].data.starttime){
                allStart = false;
                break;
            }
        }
        //debugger;
        //lStore.clearFilter(true);
        //lStore.filter('raceid', me.record.get('raceid'));


        if (!allStart){
            Ext.Msg.confirm("Confirmation",
                 "Not all divisions have started. Are you sure you want to go to Review Race Start screen?",
                  function(btn){
                //debugger;
                if(btn === 'yes'){

                    wizard.setActiveItem(selectedIndex  + 1);

                    me.getRaceDivisionsReviewList().refresh();
                }
            });
        }
        else{
            wizard.setActiveItem(selectedIndex  + 1);

            me.getRaceDivisionsReviewList().refresh();
        }



        //debugger;
    },

    onExitButtonTap: function(button, e, eOpts) {
        var me = this;
        //debugger;
        //me.onSave();

        if(localStorage.goOffline)
        {

            me.setDataLocal("Race_Start",me.recs);
            return;
        }
        AJAXCommand({
            params: me.recs,
            method: 'SaveStart',
            scope: me,
            callback: function(status, message, obj, scope) {
                //debugger;
                if (status) {

                }
                else
                {
                    Ext.Msg.show({
                        title: 'Start save',//T('errLogIn'),
                        message: 'Error!',//T(''),
                        buttons: Ext.Msg.OK,
                        icon: Ext.Msg.ERROR,
                        modal: true
                    });
                }
            }
        });

        this.getHomePanel().removeAll();

        DynaMightMobile.app.getController('Navigation').applyClass('RaceStartWizard');
    },

    onSelectfieldChange: function(selectfield, newValue, oldValue, eOpts) {
        var me = this,
            ct = me.getStartOrderCt(),
            division = selectfield.config.rec,
            currentStart = selectfield.up('startlinect').config.number - 1,
            tmp, columnNo;
        //debugger;


        ct.starts[newValue] = ct.starts[newValue] || [];
        ct.starts[newValue].push(division);


        if(ct.starts[currentStart].length > 1){
            //ct.starts[currentStart].splice(division.columnNo ? division.columnNo : 0, 1);


            for (var i = 0; i < ct.starts[currentStart].length; i++) {
                tmp = ct.starts[currentStart][i];
            //debugger;
                if(tmp.divisionid == division.divisionid){ //|| (start.length > 0 && start[0].divisionid != removedDivision)){
                   columnNo = i;
                }
            }
            ct.starts[currentStart].splice(columnNo, 1);
        }
        else{
            ct.starts.splice(currentStart, 1);
            ct.ends.splice(currentStart, 1);

        }

        me.createStart(ct.starts, ct, 0);

    },

    onEditDivisionButtonTap: function(button, e, eOpts) {

    },

    onNextOrderButtonTap: function(button, e, eOpts) {
        var me = this, starts,
            wizard = me.getRaceStartWizard(),
            selectedIndex = wizard.items.indexOf(wizard._activeItem),
            items = me.getStartOrderCt().items, s = [];

        wizard.setActiveItem(selectedIndex  + 1);

        starts = me.getStartOrderCt().starts;

        for (var i = 1; i < items.length && i < starts.length + 1; i++) {
            if(!items.items[i].down('#notStartChk')._checked)
                s.push(starts[i - 1]);
        }

        me.getStartOrderCt().starts = s;

        me.createStart(s, me.getStartOrderCt1(), 1);

    },

    onBackButtonTap: function(button, e, eOpts) {
        var me = this, starts,
            wizard = me.getRaceStartWizard(),
            selectedIndex = wizard.items.indexOf(wizard._activeItem);

        //wizard.setActiveItem(selectedIndex - 1);

        wizard.animateActiveItem(selectedIndex - 1,
                {type: 'slide', direction: 'right'});

        me.initStarts();
    },

    onReviewBackButtonTap: function(button, e, eOpts) {
        var me = this,
            wizard = me.getRaceStartWizard(),
            selectedIndex = wizard.items.indexOf(wizard._activeItem);

        Ext.Msg.confirm("Back Confirmation", "All divisions have started. Are you sure you want to return to Race Start screen?", function(btn){

            if(btn === 'yes'){
                //wizard.setActiveItem(selectedIndex - 1);
                wizard.animateActiveItem(selectedIndex - 1,
                        {type: 'slide', direction: 'right'});
            }
        });


    },

    onRaceDivisionReviewListSelect: function(dataview, record, eOpts) {
        var me = this,
            bStore = me.getEntrantsList().getStore();


        me.getRaceStartWizard().down('#divisionTime').setValue(new Date(record.get('starttime')));

        bStore.clearFilter(true);

        bStore.filter('divisionid', record.get('divisionid'));

        me.getStartReviewApplyBtn().setDisabled(true);
    },

    onApplyReviewButtonTap: function(button, e, eOpts) {
        var me = this,
            list = me.getRaceDivisionsReviewList(),
            selected = list.getSelection(),
            time = me.getRaceStartWizard().down('#divisionTime'),
            v = Ext.Date.format(time.getValue(), 'Y-m-d H:i:s');

        //debugger;
        if (selected.length > 0) {
            rec = selected[0];
            rec.set('starttime', v);
        }

        for(var i = 0; i < me.recs.length; i++){
            var r = me.recs[i];
            if(r.divisionid == rec.get('divisionid')){
                r.starttime = v;
                //debugger;
            }
        }

        me.getStartReviewApplyBtn().setDisabled(true);
    },

    onRefreshStartOrderTap: function(button, e, eOpts) {
        this.getDivisionEntrantsList().getStore().load();
        this.initStarts();
    },

    onDivisionSelectfieldChange: function(selectfield, newValue, oldValue, eOpts) {
        var bStore = this.getEntrantsList().getStore();

        bStore.clearFilter();
        //debugger;
        if(newValue)
            bStore.filter('divisionid', newValue);
    },

    createStart: function(starts, ct, type) {
        var me = this, start, i, obj, store, d = [],
            ends = me.getStartOrderCt().ends,
            bStore = me.getEntrantsList().getStore();
        //debugger;
        me.sequenceNo = starts.length;
        me.sequences = starts.length;

        for (i = 0; i < starts.length + 1; i++) {
            obj = {name: 'Move to Start ' + (i + 1), id: i};
            d.push(obj);
        }

        store = Ext.create('Ext.data.Store', {
            data: d,
            model: 'DynaMightMobile.model.MyModel'
        });
        store.setData(d);

        ct.removeAll(false);

        //debugger;
        for (i = 0; i < starts.length; i++) {
            start = starts[i];

            if(start.length > 0){ //|| (start.length > 0 && start[0].divisionid != removedDivision)){
               ct.add({
                   xtype: 'startlinect' ,
                   number: i + 1,
                   itemId: 'startId' + ( i + 1),
                   rec: start,//rec,
                   store: store,
                   type: type,
                   bStore: bStore,
                   endTime: ends[i],
                   onStart: function(date){
                       me.onSave(this.number, date);
                   },
                   onDivision: function(btn, b, c, d){
                       bStore.clearFilter(true);
                       bStore.filter('divisionid', btn.config.rec.divisionid);
                       me.getDivisionEntrantsId().setTitle(btn.config.rec.dname);
                   },
                   onRecall: function(){
                       var that = this;
                       Ext.Msg.confirm("Confirmation", "Are you sure you want to recall this start?",
                           function(btn){
                               //debugger;
                               if(btn === 'yes'){
                                   Ext.Msg.confirm("Confirmation", "Do you want to move division to the end of sequence?",
                                       function(b){
                                           //debugger;
                                           if(b === 'yes'){
                                               me.onRecall(that.number);
                                               me.onMoveStart(that.number);
                                           }
                                           else{
                                               me.onRecall(that.number);
                                               me.createStart(me.getStartOrderCt().starts, me.getStartOrderCt1(), 1);

                                           }
                                       },this);
                                   //me.onRecall(that.number);
                                   //me.createStart(me.getStartOrderCt().starts, me.getStartOrderCt1(), 1);
                                   //me.onMoveStart(that.number);
                               }
                           },this);
                   }
               });
            }
        }

        //debugger;
    },

    onSave: function(startNo, date) {
        var me = this, recs = me.recs, rec, date,
            starts = me.getStartOrderCt().starts[startNo - 1],
            list = me.getRaceStartWizard().down('#raceDivisionsReviewList');

        //debugger;
        me.getStartOrderCt().ends[startNo - 1] = date;

        for (var i = 0; i < starts.length; i++) {
            //date = Ext.Date.format(new Date(), 'Y-m-d H:i:s');
            rec = list.getStore().findRecord('divisionid',starts[i].divisionid);
            if(rec){
                rec.data.starttime = date;
            }
            //debugger;
            recs.push({
                divisionid: starts[i].divisionid,
                raceid: me.record.data.raceid,
                raceseriesid: me.record.data.raceseriesid,
                startdate: date,
                starttime: date
            });

        }
    },

    onRecall: function(startNo) {
        var me = this, recs = me.recs, rec, date, tmpArr,
            starts = me.getStartOrderCt().starts[startNo - 1],
            list = me.getRaceStartWizard().down('#raceDivisionsReviewList');


        me.getStartOrderCt().ends[startNo - 1] = null;

        for (var i = 0; i < starts.length; i++) {
            date = Ext.Date.format(new Date(), 'Y-m-d H:i:s');
            rec = list.getStore().findRecord('divisionid',starts[i].divisionid);
            if(rec){
                rec.data.starttime = date;
            }

            tmpArr = recs;
            //debugger;


            for (var j = 0; j < tmpArr.length; j++) {
                if(starts[i].divisionid == tmpArr[j].divisionid){
                    recs.splice(j, 1);
                    break;
                }
            }
        }


    },

    onMoveStart: function(number) {
        var me = this,
            ct = me.getStartOrderCt(),
            ct1 = me.getStartOrderCt1(),
            currentStart = number - 1,
            tmp, endTmp, columnNo;
        //debugger;

        endTmp = ct.ends[currentStart];
        tmp = ct.starts[currentStart];

        ct.starts.splice(currentStart, 1);
        ct.starts.push(tmp);

        ct.ends.splice(currentStart, 1);
        ct.ends.push(endTmp);


        me.createStart(ct.starts, ct1, 1);
    },

    setDataLocal: function(from, data) {
        if(from === "Race_Start"){
            var raceStore = CreateStore('raceseriesdivision');

            raceStore.execConfig({});// to set sql proxy to store

            //pass data to acces them
            raceStore.toSaveData = data;

            raceStore.load({callback: function(vals,st,a){
                for(var i=0; i<this.toSaveData.length;i++){
                    var s = this.toSaveData[i];
                    for(var j=0;j<vals.length;j++){
                        //delete vals[j].data.startdate;// delete this because it has no use and IS NOT AVAILABLE IN SQL DB
                        var v = vals[j].data;
                        if(v.raceseriesid === s.raceseriesid && v.divisionid === s.divisionid){

                            vals[j].set('sysrowstate','3');
                            vals[j].set('starttime',s.starttime);
                        }
                    }
                }
                this.sync();

            }
           });

        }
    },

    initStarts: function() {
        var me = this, vals, items, rec, d = [], store, i, starts = [], ends = [], obj,
            wizard = me.getRaceStartWizard();

        items = wizard.seriesDivisionsStore.getData().items;


        for (i = 0; i < items.length; i++) {
            rec = items[i];
            //rec.data.currentStart = i;
            //obj = {name: 'Move to Start ' + (i + 1), id: i, rec: rec};
            starts.push([rec.data]);
            ends.push(null);
            //d.push(obj);
        }

        store = Ext.create('Ext.data.Store', {
            data: d,
            model: 'DynaMightMobile.model.MyModel'
        });
        //store.setData(d);


        me.getStartOrderCt().starts = starts;
        me.getStartOrderCt().ends = ends;

        me.createStart(starts, me.getStartOrderCt(), 0);

        me.recs = [];//new Ext.util.MixedCollection();


        Ext.Viewport.setMasked(false);

    }

});