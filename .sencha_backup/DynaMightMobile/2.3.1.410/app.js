/*
 * File: app.js
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

// @require @packageOverrides
Ext.Loader.setConfig({

});


Ext.application({

    requires: [
        'Ext.form.*',
        'Ext.field.*',
        'Ext.Button',
        'Ext.Toolbar',
        'Ext.MessageBox'
    ],
    models: [
        'MyModel'
    ],
    views: [
        'SeriesWizard',
        'MainCt',
        'GenericList',
        'RegistrationWizard',
        'RaceStartWizard',
        'Calendar',
        'StartLineCt',
        'RacePortal',
        'RaceFinishWizard',
        'SignOnWizard',
        'BoatDetails',
        'HandicapWizard',
        'SideMenu',
        'RaceResults',
        'SignOffWizard',
        'MenuView',
        'LogInFrm',
        'BoatCrew',
        'RaceMessages',
        'RaceDuty',
        'SkipperInformation',
        'SkipperBoatList',
        'BoatDetails1',
        'SWD',
        'RFBoats',
        'RFRace',
        'RFReview',
        'ResultsEditor'
    ],
    controllers: [
        'Navigation',
        'SeriesWizard',
        'RegistrationWizard',
        'RaceStartWizard',
        'RacePortalWizard',
        'RaceFinishWizard',
        'HandicapWizard',
        'RaceResults',
        'BoatCrew',
        'RaceMessage',
        'RaceDuty',
        'SkipperInformation',
        'SkipperBoatList',
        'RaceEditor',
        'RaceSignOffWizard'
    ],
    name: 'DynaMightMobile',

    launch: function() {

        AJAX_URL = 'http://192.168.1.137/bystorm/dm/mobile/';
        AJAX_URL = 'http://192.168.8.109/bystorm/dm/mobile/';
        AJAX_URL = 'http://192.168.1.11/bystorm/dm/mobile/';
        //AJAX_URL = 'http://192.168.1.78/bystorm/dm/mobile/';
        //AJAX_URL = 'http://bystorm.com.au/DM/mobile/';
        //AJAX_URL = 'http://localhost/bystorm/dm/mobile/';
        //AJAX_URL = 'http://localhost/dm/mobile/';
        //AJAX_URL = 'http://dbstimeman.com/DM/mobile/';
        AJAX_HANDLER = 'AJAXHandler.php';

        /*
        var conf = {user: 'sail', password: 'sail'};
        this.getController('Navigation').onLogin(conf);
        Ext.Viewport.innerElement.addCls('viewport-inner');
        */


        Ext.Viewport.add(Ext.create('DynaMightMobile.view.MainCt'));
        Ext.Viewport.setMasked({ xtype: 'loadmask',message: 'Loading'});

        if (Ext.os.is('Android')) {
            document.addEventListener("backbutton",
                Ext.bind(this.getApplication().getController('Navigation').onBackKeyDown,
            this), false);
        }

        /*
        Ext.override(Ext.plugin.PullRefresh, {
            onLatestFetched: function() {
                var store = this.getList().getStore();
                store.removeAll();
                store.load();
                //return;
                this.setState("loaded");
                //this.fireEvent('latestfetched', this, toInsert);
                if (this.getAutoSnapBack()) {
                    this.snapBack();
                }
            }
        });
        */
        /*Ext.override(Ext.scroll.indicator.Abstract, {
            getAutoHide: function(){
                //debugger;
                return false;
            }
        });*/
        Ext.override(Ext.grid.Grid, {
            onColumnSort: function(container, column, direction) {
                //debugger;
                this.fireEvent('columnsort', this, column);
            }
        });
        Ext.override(Ext.dataview.List, {
            beforeInitialize: function() {
                var me = this,
                    container = me.container,
                    scrollable, scrollViewElement, pinnedHeader;

                Ext.apply(me, {
                    listItems: [],
                    headerItems: [],
                    updatedItems: [],
                    headerMap: [],
                    scrollDockItems: {
                        top: [],
                        bottom: []
                    }
                });

                // We determine the translation methods for headers and items within this List based
                // on the best strategy for the device
                this.translationMethod = Ext.browser.is.AndroidStock2 ? 'cssposition' : 'csstransform';

                // Create the inner container that will actually hold all the list items
                //SET SCROLLER ALWAYS VISIBLE
                if (!container) {
                    container = me.container = Ext.factory({
                        xtype: 'container',
                        scrollable: {
                            direction: 'vertical',
                                indicators: {
                                    y: {
                                        autoHide: false
                                    }
                                }
                        }
                    });
                }

                // We add the container after creating it manually because when you add the container,
                // the items config is initialized. When this happens, any scrollDock items will be added,
                // which in turn tries to add these items to the container
                me.add(container);

                // We make this List's scrollable the inner containers scrollable
                scrollable = container.getScrollable();
                scrollViewElement = me.scrollViewElement = scrollable.getElement();
                me.scrollElement = scrollable.getScroller().getElement();

                me.setScrollable(scrollable);
                me.scrollableBehavior = container.getScrollableBehavior();

                // Create the pinnedHeader instance thats being used when grouping is enabled
                // and insert it into the scrollElement
                pinnedHeader = me.pinnedHeader = Ext.factory({
                    xtype: 'listitemheader',
                    html: '&nbsp;',
                    translatable: {
                        translationMethod: this.translationMethod
                    },
                    cls: ['x-list-header', 'x-list-header-swap']
                });
                pinnedHeader.translate(0, -10000);
                pinnedHeader.$position = -10000;
                scrollViewElement.insertFirst(pinnedHeader.renderElement);

                // We want to intercept any translate calls made on the scroller to perform specific list logic
                me.bind(scrollable.getScroller().getTranslatable(), 'doTranslate', 'onTranslate');
            }
        });
        Ext.override(Ext.dataview.DataView, {
            config:{
                scrollable: {
                    direction: 'vertical',
                        indicators: {
                            y: {
                                autoHide: false
                            }
                        }
                }
            },
            scrollable: {
                direction: 'vertical',
                    indicators: {
                        y: {
                            autoHide: false
                        }
                    }
            }
        });
        Ext.override(Ext.Container, {
            getScrollableBehavior: function() {
                //debugger;
                var behavior = this.scrollableBehavior;

                if (!behavior) {
                    behavior = this.scrollableBehavior = new Ext.behavior.Scrollable(this);
                }

                return behavior;
            }
        });
        Ext.override(Ext.field.Select, {
            config:{
                usePicker:false
            }
        });
        Ext.override(Ext.MessageBox, {
            hide:  function() {
                if (this.activeAnimation && this.activeAnimation._onEnd) {
                    this.activeAnimation._onEnd();
                }
                return this.callParent(arguments);
            }
        });


        Ext.override(Ext.field.Select, {
            getTabletPicker: function() {
                var config = this.getDefaultTabletPickerConfig();

                if (!this.listPanel) {
                    this.listPanel = Ext.create('Ext.Panel', Ext.apply({
                        left: 0,
                        top: 0,
                        scopeS: this,
                        modal: true,
                        cls: Ext.baseCSSPrefix + 'select-overlay',
                        layout: 'fit',
                        hideOnMaskTap: true,
                        width: Ext.os.is.Phone ? '14em' : '18em',
                        height: (Ext.os.is.BlackBerry && Ext.os.version.getMajor() === 10) ? '12em' : (Ext.os.is.Phone ? '12.5em' : '22em'),
                        items: [this.listPanelList = Ext.create('Ext.dataview.List',{
                            xtype: 'list',
                            // itemCls:'listItem',
                            store: this.getStore(),
                            itemTpl:  new Ext.XTemplate(
                                '<span>',
                                '<tpl if="values.path">',
                                '<img style ="width: 30px;height: 30px; background-position: center center;float: left;margin-right: 15px;"src="{[AJAX_URL]}../admin/uploaded_files/{path}"><span class="x-list-label">{' + this.getDisplayField() + ':htmlEncode}</span>',
                                '</tpl>',
                                '<tpl if="!values.path">',
                                    '<span class="x-list-label">{' + this.getDisplayField() + ':htmlEncode}</span>',
                                '</tpl>',
                                '</span>'
                            ),
                            //itemTpl: '<img src= "../resources/images/{icon}"><span class="x-list-label">{' + this.getDisplayField() + ':htmlEncode}</span>',
                            listeners: {
                                select: this.onListSelect,
                                itemtap: this.onListTap,
                                scope: this
                            }
                        })]
                        /*,
                                    listeners:{
                                        hide:function(a,s){
                                             //this.callParent(arguments);
                                            this.scopeS.listPanelList.destroy();
                                        }
                                    }*/
                                }, config));
                            }

                            return this.listPanel;
                        }
                    });

    }

});
