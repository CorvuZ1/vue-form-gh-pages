<template>
  <div class="div">
    <div class="content-box" v-bind:class="{onSuccess: this.formStatus == 'OK', onFail: this.formStatus == 'ERROR'}" ref="contentBox"> 
      <h1 class="title">Регистрация клиента</h1>
        <form class="form" @submit.prevent="submitClick">
          <div class="wrapper">
            <FirstStep v-bind:FormStep1="FormStep1" :$v="$v" :formStatus="formStatus"/>
            <SecondStep v-bind:FormStep2="FormStep2" :$v="$v" :formStatus="formStatus"/>
            <ThirdStep v-bind:FormStep3="FormStep3" :$v="$v" :formStatus="formStatus"/>
          </div>
          <FormErrors v-bind:$v="$v" :formStatus="formStatus"/>
          <h1 class="onSuccess-msg" v-if="this.formStatus == 'OK'">Новый клиент успешно создан</h1>
        <input class="submit" type="submit" value="Отправить" v-bind:class="{submitOnSuccess: this.formStatus == 'OK', submitOnFail: this.formStatus == 'ERROR'}">
      </form>
    </div>
  </div>
</template>

<script>
  import FirstStep from "./first-step/FirstStep"
  import SecondStep from "./second-step/SecondStep"
  import ThirdStep from "./third-step/ThirdStep"
  import FormErrors from "./FormErrors/FormErrors"

  import {required, between, integer, alpha} from "vuelidate/lib/validators" 
  // alpha валидирует только английские буквы

  export default {
      components: {
      FirstStep,
      SecondStep,
      ThirdStep,
      FormErrors
    },
    data: () => {
      return {
        formStatus: null, // Есть ли ошибки
        FormStep1: {
          surname: "",
          name: "",
          patronymic: "",
          birthDate: "",
          phoneNumber: "",
          sex: "",
          clientGroup: [],
          doctorSurname: "",
          sms: "",
        },
        FormStep2: {
          index: "",
          country: "",
          region: "",
          city: "",
          street: "",
          houseNumber: "",
        },
        FormStep3: {
          docType: "",
          docSeries: "",
          docNumber: "",
          issuedBy: "",
          issueDate: ""
        }
      }
    },
    validations: {
      FormStep1: { 
        surname: {required, alpha},
        name: {required, alpha},
        patronymic: {alpha},
        birthDate: {required},
        phoneNumber: {required, between:between(70000000000, 79999999999), integer},
        clientGroup: {required}
      },
      FormStep2: {
        city: {required, alpha},
        country: {alpha},
        region: {alpha},
        street: {alpha},
        index: {between: between(100000, 999999), integer},
        houseNumber: {between: between(1, 999), integer}
      },
      FormStep3: {
        docType: {required},
        issueDate: {required},
        issuedBy: {alpha},
        docSeries: {between: between(1000, 9999), integer},
        docNumber: {between: between(100000, 999999), integer}
      }
    },
    methods: {
      submitClick() {
        if (this.$v.$invalid) {
          this.formStatus = "ERROR";
        } else {
          this.formStatus = "OK";
          for (var i = 0; i <= 22; i++) {
            this.$refs.contentBox.children[1][i].checked // Чтобы чекбоксу поставить false
              ? this.$refs.contentBox.children[1][i].checked = false
              : this.$refs.contentBox.children[1][i].value = "";
          }
        }
      }
    }
  }
</script>

<style lang="sass" scoped>
  $dark-purple: #4e3c7a

  .content-box
    width: 100%
    max-width: 1200px
    border: 2px solid white
    border-radius: 7px
    margin: 20px 0
    min-height: 650px
    background-color: rgba(0,0,0,0.7)
    .title
      margin: 0
      height: 50px
      display: flex
      justify-content: center
      align-items: center
      background-color: $dark-purple
      border-radius: 7px 7px 0 0
      text-align: center
      margin-bottom: 20px
      font-family: "Montserrat-m"
      font-size: 23px
      color: white
      box-sizing: border-box
      padding: 0 10px
    .wrapper
      width: 100%
      min-height: 490px
      display: flex
      justify-content: center
      align-items: center
      flex-wrap: wrap
      padding: 30px 0 20px 0
    .submit
      display: block
      width: 100%
      max-width: 400px 
      height: 50px
      margin: 9px auto 0 auto
      z-index: 10
      background-color: $dark-purple
      border: none
      color: white
      font-family: Montserrat-m
      font-size: 17px
      border-radius: 7px 7px 0 0
      cursor: pointer
      transition-duration: .4s
      &:active
        background-color: #63528d
        transition-duration: 0s
    .onSuccess-msg
      color: #00ae3e
      text-align: center
      font-size: 19px
      font-weight: bold
      font-family: Montserrat-m
      margin: 0 7px
            
  .onSuccess
    border: 2px solid #00ae3e

  .onFail
    border: 2px solid red
</style>
