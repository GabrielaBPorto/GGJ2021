export default {
    data: () => ({
        notificationCelular: false,
        choices: [],
        textoAtual: ". . .",
        imagemPersonagem: "transparente",
        sequencia: 0,
        dialog: {},
        nomePersonagem: "",
        phone: false,
        styleBlur: "filter: blur(0px);",
        messages: [],
        benched: 0,
        glasses: true,
        lastMsg: [],
        message: []
    }),
    methods: {
        getNextMsg() {
            this.choices = this.$store.getters.getChoice();
            if (this.choices.options == undefined) {
                this.lastMsg = this.message;
                this.$store.dispatch("proxMsg");
                this.message = this.$store.getters.getLastMsg();
                if (this.lastMsg !== this.message) {
                    this.messages.push(this.message);
                }
            } else {
                this.choices = this.choices.options;
            }
        },
        backgroundImage() {
            return this.$store.getters.getImageByScene();
        },
        changePhoneNotification() {
            this.notificationCelular = !this.notificationCelular;
        },
        cellphoneImage() {
            if (this.notificationCelular) {
                return this.$store.getters.getImageById("icone_celular_notif");
            } else {
                return this.$store.getters.getImageById("icone_celular");
            }
        },
        oculosImage() {
            return this.$store.getters.getImageById("oculos");
        },
        getNextDialog() {
            if (!this.$store.getters.readyNextScene()) {
                this.$store.dispatch("proxDialog");
                this.dialog = this.$store.getters.getLastDialog();
                this.textoAtual = this.dialog.text;
                this.notificationCelular = this.$store.getters.getCellNotif();
                this.nomePersonagem = this.dialog.nome;
                this.imagemPersonagem = this.dialog.imagem;
            } else {
                this.$store.dispatch("trocarCena");
                this.$router.push("/cena");
                this.$store.dispatch("musicStart");
            }
        },
        characterImage() {
            return this.$store.getters.getImageById(this.imagemPersonagem);
        },
        openPhone() {
            this.phone = !this.phone;
            this.notificationCelular = this.$store.getters.getCellNotif();
            this.getNextMsg();
            if (this.phone) {
                this.styleBlur = "filter: blur(10px)";
                this.imagemPersonagem = "melhor_amigo";
            } else {
                this.styleBlur = "filter: blur(0px);";
                this.imagemPersonagem = "transparente";
            }
        },
        getGlasses() {
            this.$store.state.oculos = 1;
            this.glasses = false;
            this.checkOculoStyle();
        },
        checkOculoStyle() {
            if (this.$store.state.oculos == 0) {
                return "filter: blur(10px);";
            } else {
                return "filter: blur(0px);";
            }
        },
        checkIfGlassesOnScreen() {
            if (this.glasses && this.$store.state.cena == 1) {
                return true;
            } else {
                return false;
            }
        },
        chooseOption(index) {
            console.log(index);
            this.$store.dispatch("rotaCena1", index);
            this.getNextMsg();
            this.getNextDialog();
        }
    }
};