
<!---

This README is automatically generated from the comments in these files:
iron-collapse.html

Edit those files, and our readme bot will duplicate them over here!
Edit this file, and the bot will squash your changes :)

-->


##&lt;iron-collapse&gt;


`iron-collapse` creates a collapsible block of content.  By default, the content
will be collapsed.  Use `opened` or `toggle()` to show/hide the content.

    <button on-click="toggle">toggle collapse</button>

    <iron-collapse id="collapse">
      <div>Content goes here...</div>
    </iron-collapse>

    ...

    toggle: function() {
      this.$.collapse.toggle();
    }

`iron-collapse` adjusts the height/width of the collapsible element to show/hide
the content.  So avoid putting padding/margin/border on the collapsible directly,
and instead put a div inside and style that.

    <style>
      .collapse-content {
        padding: 15px;
        border: 1px solid #dedede;
      }
    </style>

    <iron-collapse>
      <div class="collapse-content">
        <div>Content goes here...</div>
      </div>
    </iron-collapse>


