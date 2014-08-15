module.exports = function(hbs) {

    // handlebars inheritance
    hbs.registerHelper('extend', function(name, context) {
        if (!this.blocks) {
            this.blocks = {};
        }
        if (!this.blocks[name]) {
            this.blocks[name] = [];
        }
        this.blocks[name].push(context.fn(this)); // for older versions of handlebars, use block.push(context(this));
    });

    hbs.registerHelper('block', function(name, context) {
        if (!this.blocks) {
            this.blocks = {};
        }
        var val = this.blocks[name] && this.blocks[name].length > 0 ? this.blocks[name][0] : context.fn(this);

        return val;
    });



    return hbs;
};