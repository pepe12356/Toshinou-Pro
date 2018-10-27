class ShipSettings{
    createWindow() {
        this.shipSettingsWindow = WindowFactory.createWindow({
          width: 320,
          text: "Ship Settings"
        });
    
        let controls = [
        {
            name: 'autoChangeConfig',
            labelText: chrome.i18n.getMessage('autochangeconfig'),
            appendTo: this.shipSettingsWindow,
            event: function () {
                $(".configs").prop("disabled", !this.checked );
                window.settings.settings.autoChangeConfig = this.checked;
            }
        },
        {
            name: 'changeFormation',
            labelText: chrome.i18n.getMessage('changedroneformation'),
            appendTo: this.shipSettingsWindow,
            event: function () {
                $(".formations").prop("disabled", !this.checked);
                window.settings.settings.changeFormation = this.checked;
            }
        },
        {
            name: 'useAbility',
            labelText: chrome.i18n.getMessage('useability'),
            appendTo: this.shipSettingsWindow,
            event: function () {
                $(".ability").prop("disabled", !this.checked);
                window.settings.settings.useAbility = this.checked;
            }
        },
        {
            name: 'attackConfig',
            labelText: chrome.i18n.getMessage('attackconfig'),
            type: "select",
            disabled: true && !window.settings.settings.autoChangeConfig,
            appendTo: this.shipSettingsWindow,
            options: {"1":1, "2":2},
            attrs:{
                class: "configs"
            },
            event: function () {
                window.settings.settings.attackConfig = this.value;
            }
        },
        {
            name: 'flyingConfig',
            labelText: chrome.i18n.getMessage('flyingconfig'),
            type: "select",
            disabled: true && !window.settings.settings.autoChangeConfig,
            appendTo: this.shipSettingsWindow,
            options: {"1":1, "2":2},
            attrs:{
                class: "configs"
            },
            event: function () {
                window.settings.settings.flyingConfig = this.value;
            }
        },
        {
            name: 'attackFormation',
            labelText: chrome.i18n.getMessage('attackformationslot'),
            type: "select",
            disabled: true && !window.settings.settings.changeFormation,
            appendTo: this.shipSettingsWindow,
            options: {"0":0, "1":1, "2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9},
            attrs:{
                class: "formations"
            },
            event: function () {
                window.settings.settings.attackFormation = this.value;
            }
        },
        {
            name: 'flyingFormation',
            labelText: chrome.i18n.getMessage('flyingformationslot'),
            type: "select",
            disabled: true && !window.settings.settings.changeFormation,
            appendTo: this.shipSettingsWindow,
            options: {"0":0, "1":1, "2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9},
            attrs:{
                class: "formations "
            },
            event: function () {
                window.settings.settings.flyingFormation = this.value;
            }
        },
        {
            name: 'abilitySlot',
            labelText: chrome.i18n.getMessage('abilityslot'),
            type: "select",
            disabled: true && !window.settings.settings.useAbility,
            appendTo: this.shipSettingsWindow,
            options: {"0":0, "1":1, "2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9},
            attrs:{
                class: "ability"
            },
            event: function () {
                window.settings.settings.abilitySlot = this.value;
            }
        },
        {
            name: 'reviveType',
            labelText: chrome.i18n.getMessage('reviveat'),
            type: "select",
            appendTo: this.shipSettingsWindow,
            options: {0:chrome.i18n.getMessage('base'), 1:chrome.i18n.getMessage('gate'), 2:chrome.i18n.getMessage('spot')},
            attrs:{
            },
            event: function () {
                window.settings.settings.reviveType = this.value;
            }
        },
        {
            name: 'reviveLimit',
            labelText: chrome.i18n.getMessage('revivelimit'),
            type: "number",
            appendTo: this.shipSettingsWindow,
            labelBefore: true,
            attrs:{
                min: 0,
                max: 100,
                step: 1,
                value: 5
            },
            event: function () {
                window.settings.settings.reviveLimit = this.value;
                $('span:last-child', this.label).text(' (' + this.value + ')');
            }
        }

        ];

        controls.forEach((control) => {
            if(control.type == "select"){
                this[control.name] = ControlFactory.select(control);
            }else{
                this[control.name] = ControlFactory.createControl(control);
            }
            
        });
    }
}