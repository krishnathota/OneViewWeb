AGS.Views.Dashboard = function (options) {
    var defaults = {
        containerSelector: null,
        eventHandlers: {
            rendered: function () { }
        }
    };
    this.options = $.extend(defaults, options);
    var _this = this;
    this.data = null;

    this.tm = new TemplateManager({
        templateName: 'MsgCenter',
        templateUri: '/views/dashboard/dashboard.html',
        parameters: [],
        containerElement: this.options.containerSelector,
        eventHandlers: { onRendered: function () { _this.onRendered(); } }
    });
};

AGS.Views.Dashboard.prototype = {
    setData: function (data) {
        /*data.RecertificationDate = data.CertifiedDate.add("M", data.CertificationDurationInMonths);
        data.RecertificationDate.setDate(data.RecertificationDate.getDate() - 1);
        data.MaintananceNextDate = new Date(data.MaintananceNextDate);
        */
        this.tm.Render(data, this);
    },


    /******************************************************************************************
    Event handling
    ******************************************************************************************/
    onRendered: function () {
        if (this.options.eventHandlers.rendered)
            this.options.eventHandlers.rendered();
    }
};