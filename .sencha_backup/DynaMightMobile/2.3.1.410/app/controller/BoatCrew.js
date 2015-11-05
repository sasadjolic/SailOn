/*
 * File: app/controller/BoatCrew.js
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

Ext.define('DynaMightMobile.controller.BoatCrew', {
    extend: 'Ext.app.Controller',

    config: {
        updatedBoats: [
            
        ],

        refs: {
            assignBoatsCrewLst: 'dataview#assignBoatsCrewLst',
            crewMemberAssignBoatLst: 'list#crewMemberAssignBoatLst',
            assignCrewSearch: 'searchfield#assignCrewSearch',
            assignBoatCrewSearch: 'searchfield#assignBoatCrewSearch'
        },

        control: {
            "searchfield#assignBoatCrewSearch": {
                keyup: 'onSearchBoat'
            },
            "searchfield#assignCrewSearch": {
                keyup: 'onSearchCrew'
            },
            "dataview#assignBoatsCrewLst": {
                itemtap: 'onBoatSelect'
            },
            "list#crewMemberAssignBoatLst": {
                itemtap: 'onCrewSelect'
            },
            "button#setCrewToRaceBoat": {
                tap: 'onSetCrewButton'
            }
        }
    },

    onSearchBoat: function(textfield, e, eOpts) {
        var boatStore = CreateStore("raceboat"),
            val = textfield.getValue();

        boatStore.execConfig({
            params: {
                entityViewID: GetEntityViewByName('BR').entityviewid ,
                filters: val? "WHERE rname like '%" + val + "%'" :  "WHERE 1=2"
            }
        });
        this.getAssignBoatsCrewLst().setStore(boatStore);
    },

    onSearchCrew: function(textfield, e, eOpts) {
        var crewM = CreateStore('crewmember'),
            val = textfield.getValue();
        crewM.execConfig({
            params: {
                entityViewID: GetEntityViewByName('Crew Members').entityviewid ,
                filters: val ? " WHERE ya like '%" +val + "%'" : " WHERE 1=2"
            }
        });
        this.getCrewMemberAssignBoatLst().setStore(crewM);
    },

    onBoatSelect: function(dataview, index, target, record, e, eOpts) {
        /*var me = this, crewRec;
        if(me.getCrewMemberAssignBoatLst().selected.length  ===  0){
            //todo message
            return;
        }
        else
        {

            crewRec = me.getCrewMemberAssignBoatLst().selected.items[0];
            record.set('crewmemberid',crewRec.get('crewmemberid'));
            record.set('skippername', crewRec.get('firstname') + ' ' + crewRec.get('surname'));
        }*/
    },

    onCrewSelect: function(dataview, index, target, record, e, eOpts) {
        var me = this, boatRec;
        if(me.getAssignBoatsCrewLst().selected.length  ===  0){
            //todo message
            return;
        }
        else
        {

            boatRec = me.getAssignBoatsCrewLst().selected.items[0];

            boatRec.set('crewmemberid',record.get('crewmemberid'));
            boatRec.set('skippername', record.get('firstname') + ' ' + record.get('surname'));
            this.config.updatedBoats.push(boatRec.data);
        }
    },

    onSetCrewButton: function(button, e, eOpts) {
        var me = this,
            updatedR = this.config.updatedBoats;

        AJAXCommand({
            params: updatedR,
            method: 'SetRaceBoatCrewMemberId',
            scope: me,
            callback: function(status, message, obj, scope) {
                //debugger;
                if (status) {

                    this.scope.getAssignBoatsCrewLst().getStore().removeAll();
                    this.scope.getCrewMemberAssignBoatLst().getStore().removeAll();
                    this.scope.getAssignCrewSearch().setValue('');
                    this.scope.getAssignBoatCrewSearch().setValue('');

                }
                else
                {
                    Ext.Msg.alert('Ooops','Failed to set race boat crew');
                }
            }
        });

    }

});