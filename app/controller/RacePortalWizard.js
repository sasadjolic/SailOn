/*
 * File: app/controller/RacePortalWizard.js
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

Ext.define('DynaMightMobile.controller.RacePortalWizard', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            signOnWizard: 'formpanel#signOnWizard',
            messagesList: 'list#messagesList',
            boatNumberCmb: 'selectfield#boatNumberCmb',
            signOnCard: 'formpanel#signOnCard',
            skipperNumber: 'textfield#skipperNumber',
            racesSignOnList: 'list#racesSignOnList',
            homePanel: 'panel#homePanel',
            weatherCmp: 'component#weatherCmp',
            signOnBtn: 'button#signOnBtn',
            portalRacesList: 'list#portalRacesList',
            undoSignOnBtn: 'button#undoSignOnBtn',
            boatsSignOnView: 'dataview#boatsSignOnView',
            nextSignOnBtn: 'button#nextSignOnBtn',
            boatInfoLbl: 'label#boatInfoLbl',
            signOnBoatDivisionCmb: 'selectfield#signOnBoatDivisionCmb',
            boatSignOnSearch: 'searchfield#boatSignOnSearch',
            tcFirstNameTxt: 'textfield#tcFirstNameTxt',
            tcLastNameTxt: 'textfield#tcLastNameTxt',
            tcFrm: '#tcFrm',
            boatSearch: 'searchfield#boatSignOnSearch',
            tcTxt: 'textareafield#tcTxt'
        },

        control: {
            "button#nextSignOnBtn": {
                tap: 'onNextSignOnButtonTap'
            },
            "button#signOnBtn": {
                tap: 'onSignOnButtonTap'
            },
            "button#doneBtn": {
                tap: 'onDoneButtonTap'
            },
            "list#racesSignOnList": {
                select: 'onRaceListItemTap'
            },
            "selectfield#boatNumberCmb": {
                change: 'onBoatSelectfieldChange'
            },
            "button#opsBtn": {
                tap: 'onUndoButtonTap'
            },
            "button#undoSignOnBtn": {
                tap: 'onUndoSignButtonTap'
            },
            "list#portalRacesList": {
                select: 'onPortalListSelect'
            },
            "searchfield#boatSignOnSearch": {
                keyup: 'onBoatSearchfieldKeyup'
            },
            "dataview#boatsSignOnView": {
                select: 'onBoatDataviewSelect'
            },
            "button#doneSignOnBtn": {
                tap: 'onButtonTap'
            },
            "button#editBoatBtn": {
                tap: 'onEditBoatButtonTap'
            },
            "selectfield#signOnBoatDivisionCmb": {
                change: 'onBoatDivisionSelectfieldChange'
            },
            "button#showCompassBtn": {
                tap: 'onShowCompassBtn'
            },
            "button#refreshSOBtn": {
                tap: 'onRefreshButtonTap'
            },
            "button#tcOKBtn": {
                tap: 'onOKTCButtonTap'
            },
            "button#tcCancelBtn": {
                tap: 'onTCCancelButtonTap'
            },
            "list#raceBoatsList": {
                itemtap: 'onMessageListItemTap'
            },
            "list#messagesList": {
                itemtap: 'onRaceMessageListItemTap'
            },
            "button#backSignOnBtn1": {
                tap: 'onBackSignOnBtn1Tap'
            }
        }
    },

    onNextSignOnButtonTap: function(button, e, eOpts) {
        var me = this, vals, items, rec,
            wizard = me.getSignOnWizard(),
            selectedIndex = wizard.items.indexOf(wizard._activeItem),
            bStore = me.getBoatsSignOnView().getStore(),
            html,
            boat = me.getBoatsSignOnView().selected.get(0);

        wizard.setActiveItem(selectedIndex  + 1);


        bStore.clearFilter(true);
        bStore.filter('boatid', boat.get('boatid'));
        me.getNextSignOnBtn().setDisabled(true);
        /*
        if(me.getRacesSignOnList().selected.length > 0 && me.getBoatNumberCmb().getValue()){
            wizard.setActiveItem(selectedIndex  + 1);
        }
        else{
            Ext.Msg.show({
                title: 'No selection',//T('errLogIn'),
                message: 'Must select a race and a boat!',//T(''),
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.ERROR,
                modal: true
            });
        }*/

        html = '<div class="weather-widget" style="margin:5px"><h3>'+boat.get('bname')+'</h3><h2>'
        + ' </h2>'
        + '<p></p><small>'+boat.get('hullnumber')+'</small><p></p></div>';

        me.getBoatInfoLbl().setHtml(html);

        me.boat = boat;

        //debugger;
    },

    onSignOnButtonTap: function(button, e, eOpts) {
        var me = this, vals, items, rec,
            wizard = me.getSignOnWizard(),
            selectedIndex = wizard.items.indexOf(wizard._activeItem),
            record = me.getPortalRacesList().selected.get(0);

        //this.getTcFrm().down('#tcFirstNameTxt').setValue(record.get('firstname'));
        this.getTcFrm().down('#tcLastNameTxt').setValue(record.get('skippername'));
        if(record.raw.signonmessage){
            this.getTcFrm().down('#tcTxt').setValue(record.raw.signonmessage);
            //debugger;
        }

        if(me.getPortalRacesList().selected.length > 0){
            wizard.setActiveItem(selectedIndex  + 1);
        }
        return;

        Ext.create('DynaMightMobile.view.TCFrm', {
             //html: button.panelHtml,
            width: 1000,
            height: 420,
            left: 0,
            modal:true,
            padding: 10,
            hideOnMaskTap: true,
            ctrl: me,
            record: record,
            onSave: function(frm){
                if(frm.down('#tcFirstNameTxt').getValue().length == 0 || frm.down('#tcLastNameTxt').getValue().length == 0){
                    Ext.Msg.show({
                        title: 'Terms & Conditions',//T('errLogIn'),
                        message: 'Please complete the form!',//T(''),
                        buttons: Ext.Msg.OK,
                        icon: Ext.Msg.ERROR,
                        modal: true
                    });
                    return;
                }
                me.onSignOn(record);
                frm.hide();
            },
            onCancel: function(frm){
                frm.hide();
            }
           // floating: true
         }).showBy(button);




        //this.getHomePanel().removeAll();
        return;

        //debugger;
        if(me.getRacesSignOnList().selected.length > 0 && me.getBoatNumberCmb().getValue()){
            wizard.setActiveItem(selectedIndex  + 1);
        }

        var me = this,
            popup = new Ext.Panel({
            //floating: true,
            //centered: true,
            modal: true,
            fullscreen: true,
            layout: 'vbox',
            itemId: 'popupPnl',
            items: [{
                xtype: 'textareafield'
            },{
                xtype: 'container',
                layout: 'hbox',
                items: [{
                    xtype: 'button',
                    itemId: 'cancelPopBtn',
                    text: 'Cancel',
                    handler: function(){
                        this.up('#popupPnl').destroy();

                    }
                },{
                    xtype: 'button',
                    itemId: 'savePopBtn',
                    text: 'Sign On',
                    handler: function(){
                        this.up('#popupPnl').destroy();
                        AJAXCommand({
                            params: {
                                raceid: me.getPortalRacesList().selected.get(0).get('raceid'),
                                boatid: me.getBoatNumberCmb().getValue()
                            },
                            method: 'SignOn',
                            scope: me,
                            callback: function(status, message, obj, scope) {
                                //debugger;
                                if (status) {

                                }
                                else
                                {
                                    Ext.Msg.show({
                                        title: 'Sign On Error',//T('errLogIn'),
                                        message: 'Error!',//T(''),
                                        buttons: Ext.Msg.OK,
                                        icon: Ext.Msg.ERROR,
                                        modal: true
                                    });
                                }
                            }
                        });
                    }
                }]
            }]

        }).showBy(button);
    },

    onDoneButtonTap: function(button, e, eOpts) {
        this.getHomePanel().removeAll();
    },

    onRaceListItemTap: function(dataview, record, eOpts) {
        //debugger;
        var me = this,
            mStore = me.getMessagesList().getStore();
            bStore = me.getBoatNumberCmb().getStore();
            dStore = me.getSignOnBoatDivisionCmb().getStore();


        //debugger;
        //eturn;
        me.race = record;
        me.filterBoats();

        dStore.clearFilter(true);
        dStore.execConfig({
            params: {
                entityViewID: GetEntityViewByName('DivisionsByRace').entityviewid ,
                filters: "where raceid is null or raceid = '"+record.get('raceid')+"' order by name asc"
            }
        });

        return;

        mStore.clearFilter(true);
        mStore.filter('raceid', record.get('raceid'));



        bStore.clearFilter(true);
        bStore.filter('raceid', record.get('raceid'));



        me.getSignOnBoatDivisionCmb().setStore(dStore);

    },

    onBoatSelectfieldChange: function(selectfield, newValue, oldValue, eOpts) {
        //debugger;
        if(newValue){
            this.getSignOnCard().setValues(selectfield.record.raw);
            this.getSkipperNumber().setValue(selectfield.record.raw.ya);
        }
        //debugger;
    },

    onUndoButtonTap: function(button, e, eOpts) {
        var me = this;

        AJAXCommand({
            params: {
                raceid: me.getRacesSignOnList().selected.get(0).get('raceid'),
                boatid: me.getBoatNumberCmb().getValue()
            },
            method: 'UndoSignOn',
            scope: me,
            callback: function(status, message, obj, scope) {
                //debugger;
                if (status) {

                }
                else
                {
                    Ext.Msg.show({
                        title: 'Skipper save',//T('errLogIn'),
                        message: 'Error!',//T(''),
                        buttons: Ext.Msg.OK,
                        icon: Ext.Msg.ERROR,
                        modal: true
                    });
                }
            }
        });

        me.getHomePanel().removeAll();
    },

    onUndoSignButtonTap: function(button, e, eOpts) {
        var me = this, vals, items, rec,
            wizard = me.getSignOnWizard(),
            selectedIndex = wizard.items.indexOf(wizard._activeItem),
            record = me.getPortalRacesList().selected.get(0);

        AJAXCommand({
            params: {
                raceid: me.getPortalRacesList().selected.get(0).get('raceid'),
                boatid: me.getBoatsSignOnView().selected.get(0).get('boatid'),
                type: 'off'
            },
            method: 'SignOnOff',
            scope: me,
            callback: function(status, message, obj, scope) {
                //debugger;
                if (status) {

                }
                else
                {
                    Ext.Msg.show({
                        title: 'Sign Off Error',//T('errLogIn'),
                        message: 'Error!',//T(''),
                        buttons: Ext.Msg.OK,
                        icon: Ext.Msg.ERROR,
                        modal: true
                    });
                }
            }
        });

        record.set('signondate', null);
        me.enableButtons(record);
    },

    onPortalListSelect: function(dataview, record, eOpts) {
        this.enableButtons(record);

    },

    onBoatSearchfieldKeyup: function(textfield, e, eOpts) {
        var me = this;

        me.filterBoats();

        return;

        this.getBoatsSignOnView().getStore().clearFilter(true);
        this.getBoatsSignOnView().getStore().filter([
            {filterFn: BoatFilter, scope: textfield}
        ]);
        //debugger;
    },

    onBoatDataviewSelect: function(dataview, record, eOpts) {
        var me = this,
            rStore = me.getRacesSignOnList().getStore();

        //debugger;
        //return;

        rStore.clearFilter(true);
        rStore.filter('raceid', record.get('raceid'));



        this.getSignOnCard().setValues(record.raw);
        this.getSkipperNumber().setValue(record.raw.ya);
        this.getNextSignOnBtn().enable();

    },

    onButtonTap: function(button, e, eOpts) {

        //debugger;
        this.getHomePanel().removeAll();
        var i=5,
            me = this,
            alertBox = Ext.Msg.show({
            title   : 'Returning to start page in',
             msg     : null,
             buttons : [{
                  itemId : 'ok',
                  text   : 'Hold on, I’m not finished yet!'
              }],
            fn: function(ok) {
                if (ok === "ok") {
                    alertBox.hide();
                    i= -1;
                }
            }
        });
        //countdown.start();
        alertBox.show();
        //debugger;
        if(!countdown){
            function countdown(){
                alertBox.setTitle('Returning to start page in '+i);
                i--;

                if(i == 0){
                    alertBox.hide();
                    me.confirmTC();
                }
                else if(i>0)
                {
                    setTimeout(countdown, 1000);
                }
            }
        }

        countdown(this);

        new Ext.util.DelayedTask(function(){
            DynaMightMobile.app.getController('Navigation').onNavigate();
        }).delay(4000);



        //DynaMightMobile.app.getController('Navigation').applyClass('SignOnWizard');

        //Ext.Viewport.setMasked(true);
        /*Ext.Viewport.setMasked({ xtype: 'loadmask',message: 'Saving...'});
        new Ext.util.DelayedTask(function(){
            DynaMightMobile.app.getController('Navigation').applyClass('SignOnWizard');
        }).delay(250);*/
    },

    onEditBoatButtonTap: function(button, e, eOpts) {
        //debugger;
        var me = this,
            wizard = me.getSignOnWizard(),
            popup;

        popup = new DynaMightMobile.view.BoatDetails({
            width: '100%',
            height: 600,
            parent: popup,
            itemId: 'popupPnl',
            listeners: {
                painted: function(a, b, c){
                    this.setValues(me.boat.data);
                }
            }
        });


        popup.getOwnerInfoCt().setHidden(true);



        popup.setModal(true);

        popup.showBy(button);


    },

    onBoatDivisionSelectfieldChange: function(selectfield, newValue, oldValue, eOpts) {
        this.filterBoats();
    },

    onShowCompassBtn: function(button, e, eOpts) {
        //debugger;
        var me = this,
            popup;

        Ext.create('Ext.Panel', {
             html: button.panelHtml,
             left: 0,
            modal:true,
             padding: 10,
            hideOnMaskTap: true
           // floating: true
         }).showBy(button);


    },

    onRefreshButtonTap: function(button, e, eOpts) {
        this.getBoatsSignOnView().getStore().load();
    },

    onOKTCButtonTap: function(button, e, eOpts) {
        var me = this,
            wizard = me.getSignOnWizard(),
            selectedIndex = wizard.items.indexOf(wizard._activeItem);

        me.confirmTC();
    },

    onTCCancelButtonTap: function(button, e, eOpts) {
        var me = this,
            wizard = me.getSignOnWizard(),
            selectedIndex = wizard.items.indexOf(wizard._activeItem);

        wizard.setActiveItem(selectedIndex - 1);


    },

    onMessageListItemTap: function(dataview, index, target, record, e, eOpts) {
        Ext.Msg.alert(record.get('name'), record.get('message'), Ext.emptyFn);
    },

    onRaceMessageListItemTap: function(dataview, index, target, record, e, eOpts) {
        Ext.Msg.alert(record.get('name'), record.get('message'), Ext.emptyFn);
    },

    onBackSignOnBtn1Tap: function(button, e, eOpts) {
        //this.jumpCards(-1);
        this.getController('Navigation').onNavigate();
    },

    enableButtons: function(record) {

            if(record.get('signondate')){
                this.getSignOnBtn().disable();
                this.getUndoSignOnBtn().enable();
            }
            else{
                this.getSignOnBtn().enable();
                this.getUndoSignOnBtn().disable();
            }



    },

    filterBoats: function(withoutSelection) {
        //debugger;
        var me = this,
            filters = [],
            division = me.getSignOnBoatDivisionCmb().getValue(),
            searchField = me.getBoatSignOnSearch(),
            storeB = me.getBoatsSignOnView().getStore();

        me.getBoatsSignOnView().getStore().clearFilter(true);
        //debugger;

        if(division){
            filters.push({property: 'divisionid', value: division});
        }

        if(me.race){
            filters.push({property: "raceid", value: me.race.get('raceid')});
        }

        if(searchField.getValue()){
            filters.push({filterFn: BoatFilter, scope: searchField});
        }


        storeB.filter(filters);

        if(storeB.getCount() > 0 && !withoutSelection){
            var tmp = storeB.findExact('hullnumber', searchField.getValue());
            if(tmp > -1){
                me.getBoatsSignOnView().select(storeB.getAt(tmp));
            }
            else
                me.getBoatsSignOnView().select(storeB.getAt(0));
        }

    },

    onSignOn: function(record) {
        var me = this,
            record = me.getPortalRacesList().selected.get(0);

        AJAXCommand({
            params: {
                raceid: record.get('raceid'),
                boatid: record.get('boatid'),
                firstname: me.getTcFirstNameTxt().getValue(),
                lastname: me.getTcLastNameTxt().getValue(),
                type: 'on'
            },
            method: 'SignOnOff',
            scope: me,
            callback: function(status, message, obj, scope) {
                //debugger;
                if (status) {
                    me.getBoatsSignOnView().getStore().load();
                }
                else
                {
                    Ext.Msg.show({
                        title: 'Sign On Error',//T('errLogIn'),
                        message: 'Error!',//T(''),
                        buttons: Ext.Msg.OK,
                        icon: Ext.Msg.ERROR,
                        modal: true
                    });
                }
            }
        });

        record.set('signondate', new Date());
        //me.getPortalRacesList().refresh();
    },

    confirmTC: function() {
        var me = this,
            wizard = me.getSignOnWizard(),
            selectedIndex = wizard.items.indexOf(wizard._activeItem),
            frm = me.getTcFrm();

        if(frm.down('#tcFirstNameTxt').getValue().length == 0 || frm.down('#tcLastNameTxt').getValue().length == 0){
            Ext.Msg.show({
                title: 'Terms & Conditions',//T('errLogIn'),
                message: 'Please complete the form!',//T(''),
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.ERROR,
                modal: true
            });
            return;
        }

        me.onSignOn();

        frm.down('#tcFirstNameTxt').setValue('');
        frm.down('#tcLastNameTxt').setValue('');

        me.getBoatsSignOnView().getStore().clearFilter(true);

        //wizard.setActiveItem(0);

        wizard.setActiveItem(selectedIndex - 1);
    }

});