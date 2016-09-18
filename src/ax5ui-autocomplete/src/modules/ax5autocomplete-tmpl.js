// ax5.ui.autocomplete.tmpl
(function () {

    var AUTOCOMPLETE = ax5.ui.autocomplete;
    var U = ax5.util;

    var optionGroup = function (columnKeys) {
        return `
<div class="ax5autocomplete-option-group {{theme}} {{size}}" data-ax5autocomplete-option-group="{{id}}">
    <div class="ax-combobox-body">
        <div class="ax-combobox-option-group-content" data-els="content"></div>
    </div>
    <div class="ax-combobox-arrow"></div> 
</div>
`;
    };

    var autocompleteDisplay = function (columnKeys) {
        return `
<div class="form-control {{formSize}} ax5autocomplete-display {{theme}}" 
data-ax5autocomplete-display="{{id}}" data-ax5autocomplete-instance="{{instanceId}}">
    <div class="ax5autocomplete-display-table" data-els="display-table">
        <div data-ax5autocomplete-display="label-holder"> 
        <a {{^tabIndex}}href="#ax5autocomplete-{{id}}" {{/tabIndex}}{{#tabIndex}}tabindex="{{tabIndex}}" {{/tabIndex}}
        data-ax5autocomplete-display="label"
        contentEditable="true"
        spellcheck="false">{{{label}}}</a>
        </div>
        <div data-ax5autocomplete-display="addon"> 
            {{#multiple}}{{#reset}}
            <span class="addon-icon-reset" data-selected-clear="true">{{{.}}}</span>
            {{/reset}}{{/multiple}}
        </div>
    </div>
</a>
`;
    };

    var formSelect = function (columnKeys) {
        return `
<select tabindex="-1" class="form-control {{formSize}}" name="{{name}}" {{#multiple}}multiple="multiple"{{/multiple}}></select>
`;
    };

    var options = function (columnKeys) {
        return `
{{#waitOptions}}
    <div class="ax-combobox-option-item">
            <div class="ax-combobox-option-item-holder">
                <span class="ax-combobox-option-item-cell ax-combobox-option-item-label">
                    {{{lang.loading}}}
                </span>
            </div>
        </div>
{{/waitOptions}}
{{^waitOptions}}
    {{#options}}
        {{#optgroup}}
            <div class="ax-combobox-option-group">
                <div class="ax-combobox-option-item-holder">
                    <span class="ax-combobox-option-group-label">
                        {{{.}}}
                    </span>
                </div>
                {{#options}}
                {{^hide}}
                <div class="ax-combobox-option-item" data-option-focus-index="{{@findex}}" data-option-group-index="{{@gindex}}" data-option-index="{{@index}}" 
                data-option-value="{{${columnKeys.optionValue}}}" 
                {{#${columnKeys.optionSelected}}}data-option-selected="true"{{/${columnKeys.optionSelected}}}>
                    <div class="ax-combobox-option-item-holder">
                        {{#multiple}}
                        <span class="ax-combobox-option-item-cell ax-combobox-option-item-checkbox">
                            <span class="item-checkbox-wrap useCheckBox" data-option-checkbox-index="{{@i}}"></span>
                        </span>
                        {{/multiple}}
                        <span class="ax-combobox-option-item-cell ax-combobox-option-item-label">{{${columnKeys.optionText}}}</span>
                    </div>
                </div>
                {{/hide}}
                {{/options}}
            </div>                            
        {{/optgroup}}
        {{^optgroup}}
        {{^hide}}
        <div class="ax-combobox-option-item" data-option-focus-index="{{@findex}}" data-option-index="{{@index}}" data-option-value="{{${columnKeys.optionValue}}}" {{#${columnKeys.optionSelected}}}data-option-selected="true"{{/${columnKeys.optionSelected}}}>
            <div class="ax-combobox-option-item-holder">
                {{#multiple}}
                <span class="ax-combobox-option-item-cell ax-combobox-option-item-checkbox">
                    <span class="item-checkbox-wrap useCheckBox" data-option-checkbox-index="{{@i}}"></span>
                </span>
                {{/multiple}}
                <span class="ax-combobox-option-item-cell ax-combobox-option-item-label">{{${columnKeys.optionText}}}</span>
            </div>
        </div>
        {{/hide}}
        {{/optgroup}}
    {{/options}}
    {{^options}}
        <div class="ax-combobox-option-item">
            <div class="ax-combobox-option-item-holder">
                <span class="ax-combobox-option-item-cell ax-combobox-option-item-label">
                    {{{lang.noOptions}}}
                </span>
            </div>
        </div>
    {{/options}}
{{/waitOptions}}
`;
    };

    var label = function (columnKeys) {
        return `{{#selected}}<div tabindex="-1" data-ax5autocomplete-selected-label="{{@i}}" data-ax5autocomplete-selected-text="{{text}}">
<div data-ax5autocomplete-remove="true" data-ax5autocomplete-remove-index="{{@i}}">{{{removeIcon}}}</div>
<span>{{text}}</span>
</div>{{/selected}}`;
    };

    AUTOCOMPLETE.tmpl = {
        "autocompleteDisplay": autocompleteDisplay,
        "formSelect": formSelect,
        "optionGroup": optionGroup,
        "options": options,
        "label": label
    };
})();