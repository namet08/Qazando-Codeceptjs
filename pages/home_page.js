const { I } = inject();

module.exports = {

  buttons: {
    save: '~salvar',
  }, 

  fields:{
    code:'//android.widget.EditText[@content-desc="codigo"]',
    name:'//android.widget.EditText[@content-desc="aluno"]',
    search:'//android.widget.EditText[@content-desc="search"]',

  },

  registerCode(code, name) {
    I.fillField(this.fields.code, code)
    I.fillField(this.fields.name, name)
    I.tap(this.buttons.save)
  },

  searchStundent(search, check) {
    I.fillField(this.fields.search, search)
    I.seeElement('//android.view.ViewGroup[@content-desc="' + check + '"]/android.widget.TextView')
  },

  checkLoginSuccess() {
    I.waitForElement(this.buttons.save, 5)
    I.seeElement(this.buttons.save)
  },
}