new Vue({
    el: "#app",
    data: {
        status: false,
        myHealth: 100,
        monsterHealth: 100,
        messages: []
    },
    computed: {
        myHealthStyle: function () {
            if (this.myHealth < 100) {
                return {
                    width: this.myHealth + '%'
                }
            } else {
                return {
                    width: 100 + '%'
                }
            }
        },
        monsterHealthStyle: function () {
            if (this.monsterHealth > 0) {
                return {
                    width: this.monsterHealth + '%'
                }
            } else {
                alert("end game");
                return {
                    width: 0 + '%'
                }
            }
        },

    },
    methods: {
        attack: function () {
            var value = Math.floor(Math.random() * 5) + 5
            this.monsterHealth -= value;
            this.messages.unshift({
                type: true,
                message: "player attack " + value
            });
            this.monsterAttack();
        },
        specialAttack: function () {
            var value = Math.floor(Math.random() * 10) + 10
            this.monsterHealth -= value;
            this.messages.unshift({
                type: true,
                message: "player special attack " + value
            });
            this.monsterAttack();
        },
        heal: function () {
            var value = Math.floor(Math.random() * 5) + 10
            this.myHealth += value;
            this.messages.unshift({
                type: true,
                message: "player heal " + value
            });
            this.monsterAttack();
        },
        giveUp: function () {
            this.status = false;
        },
        monsterAttack: function () {
            var value = Math.floor(Math.random() * 10)
            this.myHealth -= value;
            this.messages.unshift({
                type: false,
                message: "moster attack " + value
            });
        },
        startGame: function () {
            this.myHealth = 100;
            this.monsterHealth = 100;
            this.messages = [];
            this.status = true;
        }
    }
})