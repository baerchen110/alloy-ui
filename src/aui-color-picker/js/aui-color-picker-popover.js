/**
 * The Color Picker Component
 *
 * @module aui-color-picker
 * @submodule aui-color-picker-popover
 */

var Lang = A.Lang,
    ANode = A.Node,

    getClassName = A.getClassName,

    _NAME = 'color-picker-popover';

/**
 * A base class for `ColorPickerPopover`.
 *
 * @class A.ColorPickerPopover
 * @extends A.Popover
 * @uses A.ColorPickerBase, A.WidgetAutohide, A.WidgetCssClass, A.WidgetToggle
 * @param {Object} config Object literal specifying widget configuration
 *     properties.
 * @constructor
 */
var ColorPickerPopover = A.Base.create(_NAME, A.Popover, [
    A.ColorPickerBase,
    A.WidgetAutohide,
    A.WidgetCssClass,
    A.WidgetToggle
], {}, {
    /**
     * Static property used to define the default attribute
     * configuration for the `ColorPickerPopover`.
     *
     * @property ATTRS
     * @type {Object}
     * @static
     */
    ATTRS: {

        /**
         * The alignment configuration for `ColorPickerPopover`.
         *
         * @attribute align
         * @type {Object}
         */
        align: {
            validator: Lang.isObject,
            value: {
                points: [A.WidgetPositionAlign.TC, A.WidgetPositionAlign.BC]
            }
        },

        /**
         * Determines if `ColorPickerPopover` is visible or not.
         *
         * @attribute visible
         * @default false
         * @type {Boolean}
         */
        visible: {
            validator: Lang.isBoolean,
            value: false
        }
    },

    /**
     * Static property provides a string to identify the class.
     *
     * @property NAME
     * @type {String}
     * @static
     */
    NAME: _NAME,

    /**
     * The namespace of the plugin.
     *
     * @property NS
     * @type {String}
     * @static
     */
    NS: _NAME
});

A.ColorPickerPopover = ColorPickerPopover;
