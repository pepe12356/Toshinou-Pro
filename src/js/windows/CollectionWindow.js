/*
Created by Freshek on 14.10.2017
*/

class CollectionWindow {
    createWindow() {
      this.collectionWindow = WindowFactory.createWindow({
        width: 320,
        maxHeight: 300,
        text: "Dobozok"
      });
  
      let controls = [{
          name: 'bonusBox',
          labelText: 'Bónusz doboz',
          appendTo: this.collectionWindow,
          event: function () {
            window.settings.settings.bonusBox = this.checked;
          }
        },
        {
          name: 'materials',
          labelText: 'Nyersanyag(scrap,mukózum..)',
          appendTo: this.collectionWindow,
          event: function () {
            window.settings.settings.materials = this.checked;
          }
        },
        {
          name: 'cargoBox',
          labelText: 'Npc nyersanyag',
          appendTo: this.collectionWindow,
          event: function () {
            window.settings.settings.cargoBox = this.checked;
          }
        },
        {
            name: 'greenOrGoldBooty',
            labelText: 'Zöld és arany doboz',
            appendTo: this.collectionWindow,
            event: function () {
              window.settings.settings.greenOrGoldBooty = this.checked;
            }
        },
        {
            name: 'blueBooty',
            labelText: 'Kék doboz',
            appendTo: this.collectionWindow,
            event: function () {
              window.settings.settings.blueBooty = this.checked;
            }
        },
        {
            name: 'redBooty',
            labelText: 'Piros doboz',
            appendTo: this.collectionWindow,
            event: function () {
              window.settings.settings.redBooty = this.checked;
            }
        },
        {
            name: 'masqueBooty',
            labelText: 'Collect masque booty(hamarosan)',
            appendTo: this.collectionWindow,
            event: function () {
              window.settings.settings.masqueBooty = this.checked;
            } 
        },
      ];
  
      controls.forEach((control) => {
        this[control.name] = ControlFactory.createControl(control);
      });
    }
  }