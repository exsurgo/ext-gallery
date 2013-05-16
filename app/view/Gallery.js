/*
 * File: app/view/Gallery.js
 *
 * This file was generated by Sencha Architect version 2.3.0.
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

Ext.define('MyApp.view.Gallery', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.gallery',

    height: 350,
    itemId: 'itemViewer',
    width: 600,
    layout: {
        type: 'fit'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'menu',
                    dock: 'left',
                    floating: false,
                    itemId: 'categoryMenu',
                    width: 120,
                    plain: true,
                    items: [
                        {
                            xtype: 'menuitem',
                            text: 'Basic'
                        },
                        {
                            xtype: 'menuitem',
                            text: 'Layouts'
                        },
                        {
                            xtype: 'menuitem',
                            text: 'Starter Apps'
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'dataview',
                    itemId: 'items',
                    padding: 10,
                    autoScroll: true,
                    emptyText: 'No items found',
                    itemSelector: 'div.gallery-item',
                    itemTpl: [
                        '<tpl for=".">',
                        '    <div class="gallery-item">',
                        '		<img src="DefaultPreview.jpg" />',
                        '		<div class="item-title">{title}</div>',
                        '		<div class="item-description">{description}</div>',
                        '    </div>',
                        '</tpl>'
                    ],
                    store: 'GalleryItems',
                    listeners: {
                        itemclick: {
                            fn: me.onItemsItemClick,
                            scope: me
                        }
                    }
                }
            ]
        });

        me.callParent(arguments);
    },

    onItemsItemClick: function(dataview, record, item, index, e, eOpts) {
        var selected = record.data,
            gallery = dataview.up('gallery');
        
        gallery.onSelect(selected);
    },

    onSelect: function(item) {
        Ext.Msg.alert(item.title);
    }

});