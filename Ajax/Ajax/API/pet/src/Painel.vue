<template>
    <div>

        <h2>Novo Cadastro para:{{pet}}</h2>
  <fieldset>
      <label>Nome do Pet</label>
      <input type ='text' v-model="pet" >
      <br>

      <label>Dono</label>
      <input type ='text' v-model="dono">
      <br>  

      <button @click="cadastro">Casdastrar</button>

  </fieldset>

  <table>
      <thead>
          <tr v-for="item in lista" :key="item.pet">
              <th>{{item.pet }}</th>
              <th>{{item.dono }}</th>
          </tr>
       </thead> 

       <tbody>
           <tr>
               <td>Babi</td>
               <td>Bumer</td>
               <td>x</td>

           </tr>
       </tbody>       

  </table>
  </div>        
</template>

<script>
export default {
    data: function()
    {
        return{
            lista:[
                {"pet": "Babi", "dono": "Luiz"},
                {"pet": "Bumer", "dono": "Marcia"}
            ],
            pet:"",
            dono:""
        }    
    },
    methods:{
        cadastro: function(){
            var item = {"pet":this.pet,"dono": this.dono}
            this.lista.push(item)
            this.pet = "";
            this.dono = "";
            
        }
    },
        apagar: function(indice){
            var excluir = {"pet": this.pet,"dono": this.dono}
            this.list.indexOf(excluir);
            this.lista.splice(indice, 1)
            this.sucesso = 'Registro apagado com sucesso'

         
        }
    }

</script>

<style>
    label {
        width: 100px;
        display:  inline-block;
    }
    fieldset {
        width: 50%
    }

    table {
        width: 50%;
        margin-top:  15px;
        border: 1px solid;
        border-collapse: collapse;
    }

    td, th{
        border: 1px solid;
        padding:  4px;
    }

    thead {
        background-color: azure;
    }

</style>