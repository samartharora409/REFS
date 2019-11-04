new Vue ({
    el:'#vue_app',
    data:{
        output:''
    },
    methods:{
        readRefs:function(){
            console.log(this.$refs);
            this.output=this.$refs.input.value;
            console.log(this.output);
        }
    }
});