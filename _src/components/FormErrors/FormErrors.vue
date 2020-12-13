<template>
  <div class="error-box">
      <span v-if="$v.$invalid && this.formStatus == 'ERROR'" class="error-msg">Неверное значение:</span>
      <span v-if="$v.FormStep1.name.$invalid && this.formStatus == 'ERROR'" class="error-msg"><pre>  Имя</pre></span>
      <span v-if="$v.FormStep1.birthDate.$invalid && this.formStatus == 'ERROR'" class="error-msg"><pre>  Дата рождения</pre></span>
      <span v-if="$v.FormStep1.phoneNumber.$invalid && this.formStatus == 'ERROR'" class="error-msg"><pre>  Номер телефона</pre></span>
      <span v-if="$v.FormStep1.clientGroup.$invalid && this.formStatus == 'ERROR'" class="error-msg"><pre>  Группа клиентов</pre></span>
      <span v-if="$v.FormStep1.patronymic.$invalid && this.formStatus == 'ERROR'" class="error-msg"><pre>  Отчество</pre></span> 

      <span v-if="$v.FormStep2.region.$invalid && this.formStatus == 'ERROR'" class="error-msg"><pre>  Область</pre></span>
      <span v-if="$v.FormStep2.country.$invalid && this.formStatus == 'ERROR'" class="error-msg"><pre>  Страна</pre></span>
      <span v-if="$v.FormStep2.city.$invalid && this.formStatus == 'ERROR'" class="error-msg"><pre>  Город</pre></span>
      <span v-if="$v.FormStep2.index.$invalid && this.formStatus == 'ERROR'" class="error-msg"><pre>  Индекс</pre></span>
      <span v-if="$v.FormStep2.houseNumber.$invalid && this.formStatus == 'ERROR'" class="error-msg"><pre>  Дом</pre></span>
      <span v-if="$v.FormStep2.street.$invalid && this.formStatus == 'ERROR'" class="error-msg"><pre>  Улица</pre></span>

      <span v-if="$v.FormStep3.docType.$invalid && this.formStatus == 'ERROR'" class="error-msg"><pre>  Тип документа</pre></span>
      <span v-if="$v.FormStep3.issueDate.$invalid && this.formStatus == 'ERROR'" class="error-msg"><pre>  Дата выдачи</pre></span>
      <span v-if="$v.FormStep3.docSeries.$invalid && this.formStatus == 'ERROR'" class="error-msg"><pre>  Серия</pre></span>
      <span v-if="$v.FormStep3.docNumber.$invalid && this.formStatus == 'ERROR'" class="error-msg"><pre>  Номер</pre></span>
      <span v-if="$v.FormStep3.issuedBy.$invalid && this.formStatus == 'ERROR'" class="error-msg"><pre>  Кем выдан</pre></span>

  </div>
    <!-- Проверка на нажатие кнопки this.formStatus == 'ERROR'" -->
</template> 

<script>
export default {
  props: ["$v","formStatus"]
}
</script>

<style lang="sass" scoped>
  .error-box
    display: flex
    flex-direction: column
    width: 220px
    margin: 0 auto
    .error-msg
      color: red
      font-weight: bold
      font-family: Montserrat-m
      line-height: 18px
</style>