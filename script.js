function initVue() {
    new Vue({
        el: '#app',
        data: {
          arrDischi:'',
        },
        methods: {

        },
        mounted() {
            axios.get('data.php')
                 .then(data => {
                const rek = data.data;
                console.log(rek);

                this.arrDischi = rek;


            })
            .catch(e => {
              console.log(error);
            })

        }
    });
}
function init() {
    initVue();
}
document.addEventListener('DOMContentLoaded', init);
