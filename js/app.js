
const app = new Vue({
    el:'#app',
    data:{
        
        datos: [],
        nuevoFirst: '',
        nuevoLast:'',
        visiblePanel: false
    },
    methods:{
        
        oculto(){
           
                document.body.classList.toggle('opacity');
          
        },
        agregarTarea(){
            this.datos.push({
                firts: this.nuevoFirst ,
                last: this.nuevoLast
            })
            console.log('click', this.datos.nuevoLast);
            localStorage.setItem('datos-vue',JSON.stringify(this.datos));
            this.nuevoFirst = '';
            this.nuevoLast  = '';
            this.visiblePanel = !this.visiblePanel;
           
        },
        // editarTarea(index){
        //     this.tareas[index].estado = !this.tareas[index].estado;
        //     localStorage.setItem('gym-vue',JSON.stringify(this.tareas));
        // },
        eliminar(index){
            this.datos.splice(index,1);
            localStorage.setItem('datos-vue',JSON.stringify(this.datos));
        },
        visible(){
            this.visiblePanel = !this.visiblePanel;

        },
    },
    created: function(){
        let datosDB = JSON.parse(localStorage.getItem('datos-vue'))
        if (datosDB === null) {
            datosDB = []
        } else {
            this.datos = datosDB            
        }
    }
});
