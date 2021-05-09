function createCalculator () {
    return {
        display: document.querySelector('.display'),

        iniciater() {
            this.clickBottons();
            this.pressEnter();
        },

        pressEnter() {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.realizeAccount();
                }
            });
        },

        clearDisplay() {
            this.display.value = '';
        },

        deleteOne() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizeAccount() {
            let count = this.display.value;

            try {
                count = eval(count);

                if(!count) {
                    alert('Conta inválida!');
                    return;
                }

                this.display.value = count;
            } catch(e) {
                alert('Conta inválida!');
                return;
            }
        },

        clickBottons() {
            document.addEventListener('click', function (e) {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnFromDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.deleteOne();
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizeAccount();
                }
            }.bind(this));
        },

        btnFromDisplay(value) {
            this.display.value += value;
        }
    };
}

const calculator = createCalculator();
calculator.iniciater();