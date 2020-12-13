<template>
  <!-- 9 blocks -->
  <fieldset class="step">
    <legend>Основная <br> информация</legend>

    <div class="form-item">
    <label for="first-1">Фамилия*</label>
    <input :class="{fail: $v.FormStep1.surname.$invalid == true && this.formStatus == 'ERROR'}" v-model.trim="FormStep1.surname" id="first-1" type="text" placeholder="Иванов">
  </div>

    <div class="form-item">
    <label for="first-2">Имя*</label>
    <input :class="{fail: $v.FormStep1.name.$invalid == true && this.formStatus == 'ERROR'}" v-model.trim="FormStep1.name" id="first-2" type="text" placeholder="Иван">
    </div>

    <div class="form-item">
    <label for="first-3">Отчество</label>
    <input :class="{fail: $v.FormStep1.patronymic.$invalid == true && this.formStatus == 'ERROR'}" v-model.trim="FormStep1.patronymic" id="first-3" type="text" placeholder="Иванович">
    </div>

    <div class="form-item">
    <label for="first-4">Дата рождения*</label>
    <input :class="{fail: $v.FormStep1.birthDate.$invalid == true && this.formStatus == 'ERROR'}" v-model.trim="FormStep1.birthDate" id="first-4" type="date">
    </div>

    <div class="form-item">
    <label for="first-5">Номер телефона*</label>
    <input :class="{fail: $v.FormStep1.phoneNumber.$invalid == true && this.formStatus == 'ERROR'}" v-model.trim="FormStep1.phoneNumber" id="first-5" type="number" placeholder="74869361013">
    </div>

    <div class="form-item">
    <label for="first-6">Пол</label>
    <select id="first-6" v-model.trim="FormStep1.sex">
      <option value="Мужчина">Мужчина</option>
      <option value="Женщина">Женщина</option>
    </select>
    </div>

    <div class="form-item">
    <label for="group">Группа клиентов*</label>
    <select id="group" multiple :class="{fail: $v.FormStep1.clientGroup.$invalid == true && this.formStatus == 'ERROR'}" v-model.trim="FormStep1.clientGroup">
      <option value="VIP">VIP</option>
      <option value="Проблемные">Проблемные</option>
      <option value="ОМС">ОМС</option>
    </select>
  </div>

  <div class="form-item">
    <label for="first-8">Лечащий врач</label>
    <select id="first-8" v-model.trim="FormStep1.doctorSurname">
      <option value="Иванов">Иванов</option>
      <option value="Захаров">Захаров</option>
      <option value="Чернышева">Чернышева</option>
    </select>
  </div>

  <div class="form-item">
  <label for="first-9">Не отправлять СМС</label>
  <input v-model.trim="FormStep1.sms" id="first-9" type="checkbox">
  </div>
  </fieldset>
</template>

<script>
  export default {
    props: ["FormStep1", "$v", "formStatus"]
  }
</script>

<style lang="sass">
  .step
    display: flex
    justify-content: center
    flex-wrap: wrap
    z-index: 5
    width: 100%
    
    input, select, input[type='number']
      margin: 15px 15px
      border-radius: 50px
      border: none
      height: 23px
      padding: 0 10px
      font-family: "Montserrat-m"
      width: 150px
      font-size: 14px
      cursor: text
      box-shadow: 1px 4px 0px gray
      -webkit-appearance: none
      -moz-appearance: none

    #first-9
      box-shadow: none
      -webkit-appearance: auto
      
    select, #first-9
      cursor: pointer
      width: 170px

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button
      -webkit-appearance: none

    input::-moz-outer-spin-button,
    input::-moz-inner-spin-button
      -moz-appearance: none

    input[type='number']
      -moz-appearance: textfield

  #group
    overflow: hidden
    height: 55px  
    border-radius: 5px

  legend
    margin-bottom: 13px
    font-size: 18px
    color: white
    font-family: Montserrat-b
    margin: 20px auto
    text-align: center
    border-radius: 50px
    border: 2px solid gray
    padding: 6px 15px

  label
    color: white
    font-family: Montserrat-m
    font-size: 15px
    position: relative
    top: 4px
    margin-top: 2px

  .form-item
    display: flex
    align-items: center
    flex-direction: column
    justify-content: center

  fieldset
    border-top: 2px solid gray

  .step2 
    margin: 30px 0

  .step .form-item .fail
    box-shadow: 1px 4px 0px red
</style>
