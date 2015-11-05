/*
 * File: app/view/StartLineCt.js
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

Ext.define('DynaMightMobile.view.StartLineCt', {
    extend: 'Ext.Container',
    alias: 'widget.startlinect',

    requires: [
        'Ext.field.Checkbox',
        'Ext.Label',
        'Ext.Button',
        'Ext.field.Select'
    ],

    config: {
        disabled: true,
        height: 40,
        itemId: 'startLineCt',
        margin: 5,
        width: 2000,
        layout: {
            type: 'hbox',
            align: 'start'
        },
        items: [
            {
                xtype: 'checkboxfield',
                itemId: 'notStartChk',
                width: 213,
                label: 'Do not start',
                labelWidth: '70%'
            },
            {
                xtype: 'label',
                height: 82,
                itemId: 'lblId',
                margin: 5
            },
            {
                xtype: 'label',
                height: 82,
                itemId: 'divisionsLbl',
                margin: 5
            },
            {
                xtype: 'button',
                hidden: true,
                itemId: 'divisionBtn',
                ui: 'action-round',
                text: 'Division'
            },
            {
                xtype: 'button',
                docked: 'left',
                hidden: true,
                itemId: 'startRecallBtn',
                ui: 'confirm-round',
                text: 'Start'
            },
            {
                xtype: 'selectfield',
                hidden: true,
                itemId: 'divisionSelect',
                width: 36,
                autoSelect: false,
                displayField: 'name',
                valueField: 'id'
            }
        ],
        listeners: [
            {
                fn: 'onStartRecallTap',
                single: false,
                event: 'release',
                delegate: '#startRecallBtn'
            }
        ]
    },

    onStartRecallTap: function(button, e, eOpts) {
        //debugger;
        var number = button.number;

        if(button.getText() == 'Start'){
            this.setLine(number);

        }
        else{
            //this.down('#lblId').enable();
            //button.setText('Start');

            //this.down('#lblId').setHtml('Start ' + number);

            this.config.onRecall();
        }

    },

    initialize: function() {
        this.callParent();

        //debugger;

        //this.down('#lblId').setHtml('StStat 1,  <br> Start: HH:MM:SS');
        //this.down('#divisionBtn').setText(this.config.rec.divisionname);

        //this.down('#divisionSelect').setStore(this.config.store);
        //this.down('#divisionSelect').rec = this.config.rec;

        var me = this, division, i, divisionsStr = '', dText,
            t = this.config.endTime ? (' (' + this.config.endTime.split(' ')[1] + ')') : '';

        this.down('#lblId').setHtml('Start ' + this.config.number + t + ':');
        //debugger;

        for (i = 0; i < this.config.rec.length; i++) {
            division = this.config.rec[i];


            this.config.bStore.clearFilter(true);
            this.config.bStore.filter('divisionid', division.divisionid);
            var count = this.config.bStore.getCount();
            this.config.bStore.filter([
                {filterFn: function(item) {
                    //debugger;
                    return item.get("signondate") !== null;
                }}
            ]);
            var countSignOn = this.config.bStore.getCount();

            if(this.config.type == 0)
            {
                dText = division.dname.toUpperCase() + ' (' + countSignOn + '/' + count + ')';
                dText += (division.startdate ? ' - ' + division.startdate.split(' ')[1] : '');
                this.add([{
                    xtype: 'button',
                    hidden: false,
                    itemId: 'divisionBtn',
                    ui: 'action-round',
                    text: dText,
                    number: me.config.number,
                    rec: division,
                    handler: me.config.onDivision
                },{
                    xtype: 'selectfield',
                    itemId: 'divisionSelect',
                    width: 50,
                    style: 'margin-left:10px',
                    autoSelect: false,
                    displayField: 'name',
                    valueField: 'id',
                    store: this.config.store,
                    rec: division
                }]);
                //debugger;
                this.down('#notStartChk').setChecked(division.startdate ? true : false);
                this.down('#startRecallBtn').hide();
                this.down('#notStartChk').show();
            }
            else{
                divisionsStr += division.dname.toUpperCase() + ' (' + countSignOn + '/' + count + ')' + '; ';

                this.down('#startRecallBtn').show();
                this.down('#notStartChk').hide();
            }
        }

        this.down('#startRecallBtn').setText(this.config.endTime ? 'Recall' : 'Start');
        this.down('#startRecallBtn').number = me.config.number;
        this.down('#divisionsLbl').setHtml('<b>' + divisionsStr + '</b>');
    },

    setLine: function(number) {
        var date;
        //this.down('#lblId').disable();
        this.down('#startRecallBtn').setText('Recall');

        date = Ext.Date.format(new Date(), 'Y-m-d H:i:s');
        this.down('#lblId').setHtml('Start ' + number + ' (' + date.split(' ')[1] + ')');

        this.config.onStart(date);
    }

});