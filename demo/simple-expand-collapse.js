import '../iron-collapse.js';
import '../../paper-styles/shadow.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';
Polymer({
  _template: `
    <style>

      :host {
        display: block;
      }

      #trigger {
        padding: 10px 15px;
        background-color: #f3f3f3;
        border: 1px solid #dedede;
        border-radius: 5px;
        font-size: 18px;
        cursor: pointer;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        text-align: left;
      }

      :host([opened]) #trigger {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }

      iron-collapse {
        border: 1px solid #dedede;
        border-top: none;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        @apply --shadow-elevation-2dp;
      }
    </style>
    <button id="trigger" on-click="toggle" aria-expanded\$="[[opened]]" aria-controls="collapse">[[_getText(opened)]]</button>
    <iron-collapse id="collapse" opened="{{opened}}" horizontal="[[horizontal]]" no-animation="[[noAnimation]]" tabindex="0">
      <slot></slot>
    </iron-collapse>
`,

  is: 'simple-expand-collapse',

  properties: {

    horizontal: {
      type: Boolean
    },
    opened: {
      type: Boolean,
      reflectToAttribute: true
    },
    noAnimation: {
      type: Boolean
    },
  },

  toggle: function() {
    this.$.collapse.toggle();
  },

  _getText: function(opened) {
    return opened ? 'Collapse' : 'Expand';
  }
});
